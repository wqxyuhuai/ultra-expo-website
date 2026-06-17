#!/usr/bin/env node
import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

process.on("unhandledRejection", error => fail(error?.message || String(error)));
process.on("uncaughtException", error => fail(error?.message || String(error)));

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA_FILE = path.join(ROOT, "assets", "ultra-cases.js");
const CASES_INDEX_FILE = path.join(ROOT, "cases", "index.html");
const NOTION_VERSION = "2022-06-28";
const DEFAULT_SYNC_STATUS_PROPERTY = "同步状态";
const SYNC_READY_STATUSES = new Set(["待同步", "待更新"]);
const SYNC_SKIP_STATUSES = new Set(["已同步", "编辑中"]);
const ARGS = process.argv.slice(2);
const DRY_RUN = ARGS.includes("--dry-run") || process.env.NOTION_DRY_RUN === "1";
const SYNC_BRANDS = ARGS.includes("--brands");
const SYNC_CASES = ARGS.includes("--cases");
const SHELL_ENV_KEYS = new Set(Object.keys(process.env));

if (ARGS.includes("--help") || ARGS.includes("-h")) {
  console.log([
    "Usage:",
    "  node scripts/sync-notion.mjs --brands [--dry-run]",
    "  node scripts/sync-notion.mjs --cases [--dry-run]",
    "",
    "Run one database at a time. Brands reads .env.brands; Cases reads .env.cases."
  ].join("\n"));
  process.exit(0);
}

if (SYNC_BRANDS === SYNC_CASES) {
  fail("Choose exactly one target: --brands or --cases.");
}

loadEnvFile(".env");
loadEnvFile(".env.local", true);
loadEnvFile(SYNC_BRANDS ? ".env.brands" : ".env.cases", true);
loadEnvFile(SYNC_BRANDS ? ".env.brands.local" : ".env.cases.local", true);

const SYNC_STATUS_PROPERTY = process.env.NOTION_SYNC_STATUS_PROPERTY || DEFAULT_SYNC_STATUS_PROPERTY;
const WRITEBACK = process.env.NOTION_SYNC_WRITEBACK !== "0" && !DRY_RUN;
const NOTION_TIMEOUT_MS = positiveInt(process.env.NOTION_TIMEOUT_MS, 30000);
const ASSET_TIMEOUT_MS = positiveInt(process.env.NOTION_ASSET_TIMEOUT_MS, 60000);
const token = process.env.NOTION_TOKEN;
const brandsDatabaseId = cleanNotionId(process.env.NOTION_BRANDS_DATABASE_ID || "");
const casesDatabaseId = cleanNotionId(process.env.NOTION_CASES_DATABASE_ID || "");

if (!token) {
  fail(`Missing NOTION_TOKEN. Create ${SYNC_BRANDS ? ".env.brands" : ".env.cases"} from the matching example file and add your Notion integration token.`);
}

if (SYNC_BRANDS && !brandsDatabaseId) {
  fail("Set NOTION_BRANDS_DATABASE_ID before running the Brands sync.");
}

if (SYNC_CASES && !casesDatabaseId) {
  fail("Set NOTION_CASES_DATABASE_ID before running the Cases sync.");
}

const propertyAliases = {
  brands: {
    status: ["同步状态", "Sync Status", "Status"],
    featured: ["Featured", "Featured Brand", "推荐", "是否精选"],
    englishName: ["English Name", "Name", "Brand Name", "English"],
    chineseName: ["Chinese Name", "Chinese Name ", "Chinese Na...", "中文名", "中文名称"],
    colorLogo: ["Color Logo", "Original Logo", "Logo", "彩色 Logo"],
    grayLogo: ["Gray Logo", "Grey Logo", "灰色 Logo"],
    industry: ["Industry", "行业"],
    brandOrder: ["Brand Order", "Order", "Sort", "排序"],
    isOnline: ["Online", "Is Online", "Published", "上线"],
    notes: ["Notes", "备注"]
  },
  cases: {
    status: ["同步状态", "Sync Status", "Status"],
    featured: ["Featured", "Featured Case", "推荐", "是否精选"],
    brandId: ["Brand ID", "brandId", "Brand Slug"],
    brandEnglishName: ["Brand", "Brand English Name", "Brand Name", "English Name", "客户", "品牌"],
    exhibitionName: ["Exhibition Name", "Event", "Case Name", "项目名称", "展会名称"],
    date: ["Date", "Date Range", "展期", "日期"],
    dateStart: ["Date Start", "Start Date", "开始日期"],
    dateEnd: ["Date End", "End Date", "结束日期"],
    year: ["Year", "年份"],
    area: ["Area", "Booth Area", "面积"],
    areaSqm: ["Area SQM", "Area Sqm", "areaSqm", "平方米"],
    industry: ["Industry", "行业"],
    country: ["Country", "国家"],
    region: ["Region", "区域"],
    type: ["Type", "类型"],
    services: ["Services", "服务"],
    tags: ["Tags", "标签"],
    chineseIntro: ["Chinese Intro", "Chinese Description", "中文介绍"],
    englishIntro: ["English Intro", "English Description", "英文介绍"],
    coverImage: ["Cover Image", "Cover", "Image", "封面图"],
    galleryImages: ["Gallery Images", "Gallery", "Images", "图库"],
    casePageOrder: ["Case Page Order", "Order", "Sort", "排序"],
    isOnline: ["Online", "Is Online", "Published", "上线"],
    notes: ["Notes", "备注"]
  }
};

const existing = await readExistingContent();
let brands = existing.brands;
let cases = existing.cases;
const pageStatusPropertyTypeCache = new Map();
let syncedRows = 0;
const warnings = [];
const targetName = SYNC_BRANDS ? "Brands" : "Cases";

progress(`Starting ${targetName} sync${DRY_RUN ? " (dry run)" : ""}.`);

if (SYNC_BRANDS) {
  const result = await syncDatabase("brands", brandsDatabaseId, brands);
  brands = result.items;
  syncedRows += result.syncedRows;
  warnings.push(...result.warnings);
}

if (SYNC_CASES) {
  const result = await syncDatabase("cases", casesDatabaseId, cases);
  cases = result.items;
  syncedRows += result.syncedRows;
  warnings.push(...result.warnings);
}

progress(`${targetName} sync finished.`);
console.log([
  `Notion ${SYNC_BRANDS ? "Brands" : "Cases"} sync ${DRY_RUN ? "dry run" : "complete"}.`,
  `Brands: ${brands.length}`,
  `Cases: ${cases.length}`,
  `Synced rows: ${syncedRows}`,
  WRITEBACK ? "Writeback: enabled" : "Writeback: skipped"
].join("\n"));

if (warnings.length) {
  console.warn(`\nWarnings:\n${warnings.map(item => `- ${item}`).join("\n")}`);
}

async function syncDatabase(kind, databaseId, currentItems) {
  progress(`Reading ${kind} database metadata.`);
  const database = await notionFetch(`/databases/${databaseId}`, { label: `${kind} database metadata` });
  const pages = await queryPagesForSync(databaseId, database);
  progress(`Found ${pages.length} ${kind} row(s) with status 待同步/待更新.`);
  const nextItems = [...currentItems];
  let synced = 0;
  const localWarnings = [];

  for (const [index, page] of pages.entries()) {
    const status = getSyncStatus(page, kind);
    progress(`Processing ${kind} row ${index + 1}/${pages.length}: ${pageTitle(page) || page.id} (${status || "no status"}).`);
    if (SYNC_SKIP_STATUSES.has(status)) continue;
    if (!SYNC_READY_STATUSES.has(status)) {
      localWarnings.push(`${kind}: skipped ${page.id}; unknown sync status "${status || "(empty)"}".`);
      continue;
    }

    try {
      const item = kind === "brands" ? await pageToBrand(page, nextItems.length) : await pageToCase(page, nextItems.length);
      const upserted = upsertByNotionPageId(nextItems, item, status, kind);
      if (upserted.warning) localWarnings.push(upserted.warning);
      await persistSyncedItems(kind, nextItems, item);
      if (WRITEBACK) {
        progress(`Updating Notion status for ${kind} row ${index + 1}/${pages.length}: ${pageTitle(page) || page.id}.`);
        await updatePageStatus(page.id, "已同步");
      }
      synced += 1;
    } catch (error) {
      const title = pageTitle(page) || page.id;
      const message = `${kind}: failed ${title}; status was not changed. ${error.message}`;
      localWarnings.push(message);
      progress(message);
    }
  }

  return { items: nextItems, syncedRows: synced, warnings: localWarnings };
}

async function queryPagesForSync(databaseId, database) {
  const statusProperty = database.properties[SYNC_STATUS_PROPERTY];
  if (!statusProperty || !["select", "status"].includes(statusProperty.type)) {
    fail(`Database ${databaseId} needs a select/status property named "${SYNC_STATUS_PROPERTY}".`);
  }

  const filterType = statusProperty.type;
  const filter = {
    or: [...SYNC_READY_STATUSES].map(name => ({
      property: SYNC_STATUS_PROPERTY,
      [filterType]: { equals: name }
    }))
  };

  const results = [];
  let startCursor;
  let pageNumber = 0;
  do {
    pageNumber += 1;
    progress(`Querying Notion page batch ${pageNumber}.`);
    const body = { page_size: 100, filter };
    if (startCursor) body.start_cursor = startCursor;
    const response = await notionFetch(`/databases/${databaseId}/query`, {
      method: "POST",
      body,
      label: `database query batch ${pageNumber}`
    });
    results.push(...response.results);
    progress(`Received ${response.results.length} row(s); total ${results.length}.`);
    startCursor = response.has_more ? response.next_cursor : undefined;
  } while (startCursor);

  return results;
}

async function pageToBrand(page, index) {
  const englishName = textValue(page, "brands", "englishName");
  const chineseName = textValue(page, "brands", "chineseName");
  const id = slug(englishName || chineseName || page.id, "brand");
  const colorLogo = await localizeFiles(fileValues(page, "brands", "colorLogo"), "brands", `${id}-color-logo`);
  const grayLogo = await localizeFiles(fileValues(page, "brands", "grayLogo"), "brands", `${id}-gray-logo`);
  const order = numberValue(page, "brands", "brandOrder");

  return {
    id,
    notionPageId: page.id,
    notionLastEditedTime: page.last_edited_time,
    chineseName,
    englishName,
    originalLogo: { files: colorLogo },
    grayLogo: { files: grayLogo },
    industry: multiValue(page, "brands", "industry"),
    isFeaturedBrand: booleanValue(page, "brands", "featured"),
    featuredBrandOrder: null,
    brandOrder: Number.isFinite(order) ? order : index + 1,
    isOnline: onlineValue(page, "brands"),
    notes: textValue(page, "brands", "notes")
  };
}

async function pageToCase(page, index) {
  const relatedBrand = relatedBrandValue(page, "cases", "brandEnglishName");
  const brandEnglishName = textValue(page, "cases", "brandEnglishName") || relatedBrand?.englishName || "";
  const exhibitionName = textValue(page, "cases", "exhibitionName");
  const dateRange = dateValue(page, "cases", "date");
  const dateStart = textValue(page, "cases", "dateStart") || dateRange.start || "";
  const dateEnd = textValue(page, "cases", "dateEnd") || dateRange.end || dateStart || "";
  const year = numberValue(page, "cases", "year") || Number(String(dateStart).slice(0, 4)) || null;
  const brandId = textValue(page, "cases", "brandId") || relatedBrand?.id || slug(brandEnglishName, "brand");
  const id = slug([brandEnglishName, exhibitionName, year].filter(Boolean).join("-") || page.id, "case");
  const coverFiles = await localizeFiles(fileValues(page, "cases", "coverImage"), "cases", `${id}-cover`);
  const gallerySourceFiles = uniqueFiles([
    ...fileValues(page, "cases", "galleryImages"),
    ...(await pageBodyImageFiles(page.id))
  ]);
  const galleryFiles = await localizeFiles(gallerySourceFiles, "cases", `${id}-gallery`);
  const areaSqm = numberValue(page, "cases", "areaSqm") || parseArea(textValue(page, "cases", "area"));
  const country = textValue(page, "cases", "country");
  const region = textValue(page, "cases", "region");
  const industry = textValue(page, "cases", "industry");
  const services = multiValue(page, "cases", "services");
  const tags = uniqueValues([...multiValue(page, "cases", "tags"), industry, region].filter(Boolean));
  const order = numberValue(page, "cases", "casePageOrder");
  const englishIntro = textValue(page, "cases", "englishIntro");
  const chineseIntro = textValue(page, "cases", "chineseIntro");

  return {
    id,
    notionPageId: page.id,
    notionLastEditedTime: page.last_edited_time,
    client: brandEnglishName,
    event: exhibitionName,
    location: country,
    country,
    region,
    year,
    dateStart,
    dateEnd,
    industry,
    type: textValue(page, "cases", "type") || (services[0] || ""),
    services,
    tags,
    featured: booleanValue(page, "cases", "featured"),
    image: coverFiles[0]?.url || "",
    description: {
      en: englishIntro,
      zh: chineseIntro
    },
    title: [brandEnglishName, exhibitionName, year].filter(Boolean).join(" · "),
    brandId,
    brandEnglishName,
    exhibitionName,
    area: textValue(page, "cases", "area") || (areaSqm ? `${areaSqm} sqm` : ""),
    areaSqm,
    chineseIntro,
    englishIntro,
    coverImage: { files: coverFiles },
    galleryImages: { files: galleryFiles },
    isFeaturedCase: booleanValue(page, "cases", "featured"),
    featuredCaseOrder: null,
    casePageOrder: Number.isFinite(order) ? order : index + 1,
    isOnline: onlineValue(page, "cases"),
    notes: textValue(page, "cases", "notes")
  };
}

function upsertByNotionPageId(items, item, status, kind) {
  const byPage = items.findIndex(existing => existing.notionPageId === item.notionPageId);
  if (byPage >= 0) {
    items[byPage] = { ...items[byPage], ...item };
    return {};
  }

  const byId = items.findIndex(existing => existing.id === item.id);
  if (byId >= 0) {
    items[byId] = { ...items[byId], ...item };
    return status === "待更新"
      ? { warning: `${kind}: "${item.id}" had no matching notionPageId, so it was matched by id.` }
      : {};
  }

  items.push(item);
  return status === "待更新"
    ? { warning: `${kind}: "${item.id}" was marked 待更新 but no existing item matched; added it as new.` }
    : {};
}

async function updatePageStatus(pageId, statusName) {
  const propertyType = await getPageStatusPropertyType(pageId);
  await notionFetch(`/pages/${pageId}`, {
    method: "PATCH",
    body: {
      properties: {
        [SYNC_STATUS_PROPERTY]: {
          [propertyType]: { name: statusName }
        }
      }
    }
  });
}

async function getPageStatusPropertyType(pageId) {
  if (pageStatusPropertyTypeCache.has(pageId)) return pageStatusPropertyTypeCache.get(pageId);
  const page = await notionFetch(`/pages/${pageId}`);
  const prop = page.properties?.[SYNC_STATUS_PROPERTY];
  if (!prop || !["select", "status"].includes(prop.type)) {
    fail(`Page ${pageId} does not have a select/status "${SYNC_STATUS_PROPERTY}" property.`);
  }
  pageStatusPropertyTypeCache.set(pageId, prop.type);
  return prop.type;
}

async function persistSyncedItems(kind, nextItems, item) {
  if (DRY_RUN) return;
  progress(`Writing website data after ${kind} row: ${item.englishName || item.title || item.id}.`);
  if (kind === "brands") {
    brands = nextItems;
    await writeContentFile({ brands: nextItems, cases });
    return;
  }
  cases = nextItems;
  await writeContentFile({ brands, cases: nextItems });
  progress(`Ensuring case detail page exists for ${item.id}.`);
  await ensureCasePage(item);
}

async function writeContentFile(content) {
  const payload = {
    version: new Date().toISOString().slice(0, 10),
    source: "notion-sync",
    sync: {
      notion: {
        enabled: true,
        brandsDatabaseId,
        casesDatabaseId
      },
      aliyunOss: { enabled: false, bucket: "", region: "", publicBaseUrl: "" }
    },
    schemas: {
      brands: ["chineseName", "englishName", "originalLogo", "grayLogo", "industry", "isFeaturedBrand", "featuredBrandOrder", "brandOrder", "isOnline", "notes", "notionPageId"],
      cases: ["title", "brandId", "exhibitionName", "dateStart", "dateEnd", "year", "areaSqm", "industry", "country", "chineseIntro", "englishIntro", "coverImage", "galleryImages", "isFeaturedCase", "featuredCaseOrder", "casePageOrder", "isOnline", "notes", "notionPageId"]
    },
    brands: content.brands,
    cases: content.cases
  };

  const js = [
    "// Generated by scripts/sync-notion.mjs. Edit Notion, then run npm run sync:notion.",
    `window.UltraBrands = ${JSON.stringify(content.brands, null, 2)};`,
    `window.UltraCases = ${JSON.stringify(content.cases, null, 2)};`,
    `window.UltraContent = ${JSON.stringify(payload, null, 2)};`,
    ""
  ].join("\n");

  await fs.writeFile(DATA_FILE, js, "utf8");
}

async function ensureCasePages(items) {
  for (const item of items) {
    await ensureCasePage(item);
  }
}

async function ensureCasePage(item) {
  if (!item?.id || item.isOnline === false) return;
  let template;
  try {
    template = await fs.readFile(CASES_INDEX_FILE, "utf8");
  } catch {
    return;
  }
  const dir = path.join(ROOT, "cases", item.id);
  const file = path.join(dir, "index.html");
  try {
    await fs.access(file);
  } catch {
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(file, template, "utf8");
  }
}

async function readExistingContent() {
  const code = await fs.readFile(DATA_FILE, "utf8");
  const window = {};
  const fn = new Function("window", `${code}\nreturn window;`);
  const result = fn(window);
  return {
    brands: Array.isArray(result.UltraBrands) ? result.UltraBrands : result.UltraContent?.brands || [],
    cases: Array.isArray(result.UltraCases) ? result.UltraCases : result.UltraContent?.cases || []
  };
}

async function localizeFiles(files, folder, baseName) {
  const output = [];
  for (let index = 0; index < files.length; index += 1) {
    const file = files[index];
    const url = notionFileUrl(file);
    if (!url) continue;
    const name = safeName(file.name || `${baseName}-${index + 1}`);
    const localized = await downloadAsset(url, folder, `${baseName}-${index + 1}`, name);
    output.push({ name, url: localized, source: "notion" });
  }
  return output;
}

async function pageBodyImageFiles(pageId) {
  progress(`Reading Notion page body images for ${pageId}.`);
  const files = [];
  await collectBlockImages(pageId, files);
  progress(`Found ${files.length} page body image(s) for ${pageId}.`);
  return files;
}

async function collectBlockImages(blockId, files, depth = 0) {
  if (depth > 8) return;
  let startCursor;
  do {
    const query = new URLSearchParams({ page_size: "100" });
    if (startCursor) query.set("start_cursor", startCursor);
    const response = await notionFetch(`/blocks/${blockId}/children?${query.toString()}`, {
      label: `block children ${blockId}`
    });

    for (const block of response.results || []) {
      if (block.type === "image") {
        const image = block.image;
        const url = notionFileUrl(image);
        if (url) {
          files.push({
            name: image.caption?.map(item => item.plain_text).join("").trim() || `page-image-${files.length + 1}`,
            type: image.type,
            file: image.file,
            external: image.external
          });
        }
      }
      if (block.has_children) {
        await collectBlockImages(block.id, files, depth + 1);
      }
    }

    startCursor = response.has_more ? response.next_cursor : undefined;
  } while (startCursor);
}

async function downloadAsset(url, folder, baseName, originalName) {
  if (DRY_RUN) return url;
  const assetDir = path.join(ROOT, "assets", "notion", folder);
  const extFromName = extensionFromNameOrUrl(originalName, url);
  if (extFromName) {
    const cachedName = `${safeName(baseName)}${extFromName}`;
    const cachedUrl = `./assets/notion/${folder}/${cachedName}`;
    if (await usableFile(path.join(assetDir, cachedName))) {
      progress(`Using cached asset: ${cachedUrl}.`);
      return cachedUrl;
    }
  }

  try {
    progress(`Downloading asset: ${originalName || baseName}.`);
    const response = await fetchWithTimeout(url, {}, ASSET_TIMEOUT_MS, `asset ${originalName || baseName}`);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const bytes = Buffer.from(await readResponseBufferWithTimeout(response, ASSET_TIMEOUT_MS, `asset body ${originalName || baseName}`));
    const contentType = response.headers.get("content-type") || "";
    const ext = extFromName || extensionFromContentType(contentType);
    await fs.mkdir(assetDir, { recursive: true });
    const fileName = `${safeName(baseName)}${ext}`;
    await fs.writeFile(path.join(assetDir, fileName), bytes);
    progress(`Saved asset: ./assets/notion/${folder}/${fileName}.`);
    return `./assets/notion/${folder}/${fileName}`;
  } catch (error) {
    const message = `Could not download asset ${originalName || baseName}: ${error.message}. Keeping Notion URL.`;
    warnings.push(message);
    progress(message);
    return url;
  }
}

async function usableFile(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return stat.isFile() && stat.size > 0;
  } catch {
    return false;
  }
}

function property(page, kind, field) {
  const props = page.properties || {};
  const aliases = propertyAliases[kind][field] || [];
  for (const name of aliases) {
    if (props[name]) return props[name];
  }
  const lowerMap = new Map(Object.keys(props).map(name => [name.toLowerCase(), props[name]]));
  for (const name of aliases) {
    const match = lowerMap.get(String(name).toLowerCase());
    if (match) return match;
  }
  return null;
}

function getSyncStatus(page, kind) {
  return textFromProperty(property(page, kind, "status"));
}

function textValue(page, kind, field) {
  return textFromProperty(property(page, kind, field));
}

function textFromProperty(prop) {
  if (!prop) return "";
  if (prop.type === "title") return richText(prop.title);
  if (prop.type === "rich_text") return richText(prop.rich_text);
  if (prop.type === "select") return prop.select?.name || "";
  if (prop.type === "status") return prop.status?.name || "";
  if (prop.type === "multi_select") return prop.multi_select?.map(item => item.name).join(", ") || "";
  if (prop.type === "number") return String(prop.number ?? "");
  if (prop.type === "url") return prop.url || "";
  if (prop.type === "checkbox") return prop.checkbox ? "true" : "false";
  if (prop.type === "date") return prop.date?.start || "";
  if (prop.type === "formula") return textFromProperty(prop.formula);
  return "";
}

function richText(items) {
  return (items || []).map(item => item.plain_text || "").join("").trim();
}

function multiValue(page, kind, field) {
  const prop = property(page, kind, field);
  if (!prop) return [];
  if (prop.type === "multi_select") return prop.multi_select.map(item => item.name).filter(Boolean);
  const text = textFromProperty(prop);
  return text.split(/[,，]/).map(item => item.trim()).filter(Boolean);
}

function fileValues(page, kind, field) {
  const prop = property(page, kind, field);
  if (!prop) return [];
  if (prop.type === "files") return prop.files || [];
  const url = textFromProperty(prop);
  return url ? [{ name: field, type: "external", external: { url } }] : [];
}

function uniqueFiles(files) {
  const seen = new Set();
  const output = [];
  for (const file of files) {
    const url = notionFileUrl(file);
    if (!url || seen.has(url)) continue;
    seen.add(url);
    output.push(file);
  }
  return output;
}

function relatedBrandValue(page, kind, field) {
  const prop = property(page, kind, field);
  if (!prop || prop.type !== "relation") return null;
  for (const relation of prop.relation || []) {
    const match = brands.find(item => item.notionPageId === relation.id);
    if (match) return match;
  }
  return null;
}

function notionFileUrl(file) {
  if (!file) return "";
  if (file.type === "external") return file.external?.url || "";
  if (file.type === "file") return file.file?.url || "";
  return file.url || "";
}

function booleanValue(page, kind, field) {
  const prop = property(page, kind, field);
  if (!prop) return false;
  if (prop.type === "checkbox") return Boolean(prop.checkbox);
  const text = textFromProperty(prop).toLowerCase();
  return ["true", "yes", "1", "featured", "推荐", "是"].includes(text);
}

function onlineValue(page, kind) {
  const prop = property(page, kind, "isOnline");
  if (!prop) return true;
  if (prop.type === "checkbox") return Boolean(prop.checkbox);
  const text = textFromProperty(prop).toLowerCase();
  return !["false", "no", "0", "offline", "下线", "否"].includes(text);
}

function numberValue(page, kind, field) {
  const prop = property(page, kind, field);
  if (!prop) return null;
  if (prop.type === "number") return prop.number;
  const value = Number(textFromProperty(prop).replace(/[^\d.-]/g, ""));
  return Number.isFinite(value) ? value : null;
}

function dateValue(page, kind, field) {
  const prop = property(page, kind, field);
  if (!prop || prop.type !== "date") return { start: "", end: "" };
  return { start: prop.date?.start || "", end: prop.date?.end || "" };
}

function parseArea(value) {
  const match = String(value || "").match(/\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : null;
}

async function notionFetch(endpoint, options = {}) {
  const response = await fetchWithTimeout(`https://api.notion.com/v1${endpoint}`, {
    method: options.method || "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json"
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  }, NOTION_TIMEOUT_MS, options.label || endpoint);

  if (!response.ok) {
    const text = await response.text();
    fail(`Notion API ${endpoint} failed: ${response.status} ${response.statusText}\n${text}`);
  }

  return response.json();
}

async function fetchWithTimeout(url, options, timeoutMs, label) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } catch (error) {
    if (error?.name === "AbortError") {
      throw new Error(`${label} timed out after ${timeoutMs}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

async function readResponseBufferWithTimeout(response, timeoutMs, label) {
  let timeout;
  try {
    return await Promise.race([
      response.arrayBuffer(),
      new Promise((_, reject) => {
        timeout = setTimeout(() => reject(new Error(`${label} timed out after ${timeoutMs}ms`)), timeoutMs);
      })
    ]);
  } finally {
    clearTimeout(timeout);
  }
}

function cleanNotionId(value) {
  const match = String(value).replace(/-/g, "").match(/[a-f0-9]{32}/i);
  return match ? match[0].replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, "$1-$2-$3-$4-$5") : "";
}

function slug(value, fallback) {
  const raw = String(value || fallback || "item").trim().toLowerCase();
  const normalized = raw
    .normalize("NFKD")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return normalized || fallback || "item";
}

function safeName(value) {
  return slug(value, "asset").slice(0, 90);
}

function extensionFrom(name, url, contentType) {
  return extensionFromNameOrUrl(name, url) || extensionFromContentType(contentType);
}

function extensionFromNameOrUrl(name, url) {
  const fromName = path.extname(String(name || "").split("?")[0]);
  if (fromName) return fromName.toLowerCase();
  const fromUrl = path.extname(new URL(url).pathname);
  if (fromUrl) return fromUrl.toLowerCase();
  return "";
}

function extensionFromContentType(contentType) {
  if (contentType.includes("png")) return ".png";
  if (contentType.includes("svg")) return ".svg";
  if (contentType.includes("webp")) return ".webp";
  if (contentType.includes("jpeg") || contentType.includes("jpg")) return ".jpg";
  return ".bin";
}

function uniqueValues(items) {
  return [...new Set(items.filter(Boolean))];
}

function pageTitle(page) {
  const titleProperty = Object.values(page.properties || {}).find(prop => prop?.type === "title");
  return titleProperty ? textFromProperty(titleProperty) : "";
}

function positiveInt(value, fallback) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

function progress(message) {
  console.log(`[${new Date().toISOString()}] ${message}`);
}

function loadEnvFile(fileName, override = false) {
  const file = path.join(ROOT, fileName);
  let content;
  try {
    content = fsSync.readFileSync(file, "utf8");
  } catch {
    return;
  }
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index < 0) continue;
    const key = trimmed.slice(0, index).trim();
    const raw = trimmed.slice(index + 1).trim();
    if (!process.env[key] || (override && !SHELL_ENV_KEYS.has(key))) {
      process.env[key] = raw.replace(/^['"]|['"]$/g, "");
    }
  }
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
