const NOTION_VERSION = "2022-06-28";
const WORKER_VERSION = "notion-schema-v3";
const DEFAULT_ALLOWED_ORIGINS = [
  "https://ultraexpo.cn",
  "https://www.ultraexpo.cn",
  "https://preview.ultraexpo.cn",
  "https://www.preview.ultraexpo.cn"
];

export default {
  async fetch(request, env) {
    const origin = request.headers.get("origin") || "";
    const cors = corsHeaders(origin, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    if (origin && !originAllowed(origin, env)) {
      return json({ ok: false, error: "Origin is not allowed." }, 403, cors);
    }

    if (request.method !== "POST") {
      return json({ ok: false, error: "Method not allowed." }, 405, cors);
    }

    if (!env.NOTION_TOKEN || !env.NOTION_DATABASE_ID) {
      return json({ ok: false, error: "Notion environment variables are missing." }, 500, cors);
    }

    let message;
    try {
      message = await request.json();
    } catch {
      return json({ ok: false, error: "Invalid JSON body." }, 400, cors);
    }
    message.submittedAt = chinaNowISOString();

    const missing = ["name", "company", "contact", "inquiryType", "message"].filter(key => !clean(message[key]));
    if (missing.length) {
      return json({ ok: false, error: `Missing required fields: ${missing.join(", ")}` }, 400, cors);
    }

    const database = await retrieveDatabase(env);
    if (!database.ok) {
      return json({ ok: false, error: database.error }, 502, cors);
    }

    const built = buildNotionPayload(message, env, database.data.properties || {});
    if (!built.ok) {
      return json({ ok: false, error: built.error }, 400, cors);
    }

    const notion = await createNotionPage(built.payload, env);
    if (!notion.ok) {
      return json({ ok: false, error: notion.error || "Unable to write to Notion." }, 502, cors);
    }

    return json({
      ok: true,
      workerVersion: WORKER_VERSION,
      notionPageId: notion.data?.id || "",
      writtenProperties: built.written,
      skippedProperties: built.skipped
    }, 200, cors);
  }
};

function originAllowed(origin, env) {
  if (DEFAULT_ALLOWED_ORIGINS.includes(origin)) return true;
  const raw = String(env.ALLOWED_ORIGINS || "*").trim();
  if (!raw || raw === "*") return true;
  return raw.split(",").map(item => item.trim()).filter(Boolean).includes(origin);
}

function corsHeaders(origin, env) {
  const allowOrigin = origin && originAllowed(origin, env) ? origin : "*";
  return {
    "access-control-allow-origin": allowOrigin,
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type",
    "vary": "Origin"
  };
}

async function notionFetch(path, env, options = {}) {
  const response = await fetch(`https://api.notion.com/v1${path}`, {
    ...options,
    headers: {
      "authorization": `Bearer ${env.NOTION_TOKEN}`,
      "content-type": "application/json",
      "notion-version": env.NOTION_VERSION || NOTION_VERSION,
      ...(options.headers || {})
    }
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  return {
    ok: response.ok,
    data,
    error: data?.message || `Notion responded with ${response.status}`
  };
}

function retrieveDatabase(env) {
  return notionFetch(`/databases/${encodeURIComponent(env.NOTION_DATABASE_ID)}`, env);
}

async function createNotionPage(payload, env) {
  return notionFetch("/pages", env, {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

function buildNotionPayload(message, env, schema) {
  const titleMatch = findProperty(schema, env.NOTION_TITLE_PROPERTY || "Name", ["Name", "姓名"]);
  if (!titleMatch || titleMatch.property.type !== "title") {
    return { ok: false, error: "No Notion title property found. Set NOTION_TITLE_PROPERTY to the database title column name." };
  }

  const title = clean(message.name) || "Website inquiry";
  const properties = {
    [titleMatch.name]: titleValue(title)
  };
  const written = [titleMatch.name];
  const skipped = [];

  [
    ["company", "Company", "NOTION_COMPANY_PROPERTY", ["Company", "公司"]],
    ["contact", "Email or Phone", "NOTION_CONTACT_PROPERTY", ["Email or Phone", "Email", "Contact", "联系方式"]],
    ["inquiryType", "Inquiry Type", "NOTION_INQUIRY_TYPE_PROPERTY", ["Inquiry Type", "咨询类型"]],
    ["eventName", "Event Name", "NOTION_EVENT_NAME_PROPERTY", ["Event Name", "展会名称"]],
    ["countryRegion", "Country / Region", "NOTION_COUNTRY_REGION_PROPERTY", ["Country / Region", "Country/Region", "国家地区"]],
    ["expectedDate", "Expected Date", "NOTION_EXPECTED_DATE_PROPERTY", ["Expected Date", "预计时间"]],
    ["boothArea", "Booth Area", "NOTION_BOOTH_AREA_PROPERTY", ["Booth Area", "展位面积"]],
    ["message", "Message", "NOTION_MESSAGE_PROPERTY", ["Message", "留言内容"]],
    ["sourcePage", "Source Page", "NOTION_SOURCE_PAGE_PROPERTY", ["Source Page", "来源页面"]],
    ["language", "Language", "NOTION_LANGUAGE_PROPERTY", ["Language", "语言"]],
    ["submittedAt", "Submitted At", "NOTION_SUBMITTED_AT_PROPERTY", ["Submitted At", "提交时间"]]
  ].forEach(([messageKey, fallbackName, envName, aliases]) => {
    const value = messageKey === "submittedAt" ? clean(message.submittedAt) || chinaNowISOString() : clean(message[messageKey]);
    if (!value) return;

    const match = findProperty(schema, env[envName] || fallbackName, aliases);
    if (!match) return;

    const propertyValue = notionPropertyValue(match.property.type, value);
    if (!propertyValue) {
      skipped.push({ property: match.name, type: match.property.type, value });
      return;
    }

    properties[match.name] = propertyValue;
    written.push(match.name);
  });

  return {
    ok: true,
    written,
    skipped,
    payload: {
      parent: { database_id: env.NOTION_DATABASE_ID },
      properties
    }
  };
}

function findProperty(schema, preferredName, aliases = []) {
  const names = Object.keys(schema);
  const candidates = [preferredName, ...aliases].map(clean).filter(Boolean);
  for (const candidate of candidates) {
    if (schema[candidate]) return { name: candidate, property: schema[candidate] };
  }
  for (const candidate of candidates) {
    const normalizedCandidate = normalizePropertyName(candidate);
    const found = names.find(name => normalizePropertyName(name) === normalizedCandidate);
    if (found) return { name: found, property: schema[found] };
  }
  return null;
}

function normalizePropertyName(value) {
  return clean(value).replace(/\s*\/\s*/g, "/").replace(/\s+/g, " ").trim().toLowerCase();
}

function notionPropertyValue(type, value) {
  const text = clean(value);
  if (!text) return null;

  if (type === "title") return titleValue(text);
  if (type === "rich_text") return richTextValue(text);
  if (type === "select" || type === "status") return { [type]: { name: truncate(text, 100) } };
  if (type === "multi_select") return { multi_select: [{ name: truncate(text, 100) }] };
  if (type === "phone_number") return { phone_number: truncate(text, 200) };
  if (type === "email") return looksLikeEmail(text) ? { email: truncate(text, 200) } : null;
  if (type === "url") return looksLikeUrl(text) ? { url: truncate(text, 2000) } : null;
  if (type === "number") {
    const number = Number(text.replace(/[^\d.-]/g, ""));
    return Number.isFinite(number) ? { number } : null;
  }
  if (type === "date") {
    const date = dateValue(text);
    return date ? { date: { start: date } } : null;
  }
  if (type === "checkbox") return { checkbox: ["true", "yes", "1", "是"].includes(text.toLowerCase()) };

  return null;
}

function titleValue(value) {
  return { title: [{ text: { content: truncate(value, 2000) } }] };
}

function richTextValue(value) {
  return { rich_text: [{ text: { content: truncate(value, 2000) } }] };
}

function dateValue(value) {
  const text = clean(value);
  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) return text;
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2})$/.test(text)) return text;
  const parsed = new Date(text);
  return Number.isNaN(parsed.getTime()) ? "" : chinaISOStringFromDate(parsed);
}

function chinaNowISOString() {
  return chinaISOStringFromDate(new Date());
}

function chinaISOStringFromDate(date) {
  const chinaTime = new Date(date.getTime() + 8 * 60 * 60 * 1000);
  const year = chinaTime.getUTCFullYear();
  const month = String(chinaTime.getUTCMonth() + 1).padStart(2, "0");
  const day = String(chinaTime.getUTCDate()).padStart(2, "0");
  const hour = String(chinaTime.getUTCHours()).padStart(2, "0");
  const minute = String(chinaTime.getUTCMinutes()).padStart(2, "0");
  const second = String(chinaTime.getUTCSeconds()).padStart(2, "0");
  return `${year}-${month}-${day}T${hour}:${minute}:${second}+08:00`;
}

function looksLikeEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean(value));
}

function looksLikeUrl(value) {
  return /^https?:\/\//i.test(clean(value));
}

function clean(value) {
  return String(value || "").trim();
}

function truncate(value, length) {
  const text = clean(value);
  return text.length > length ? text.slice(0, length - 1) : text;
}

function json(payload, status, headers) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...headers,
      "content-type": "application/json; charset=utf-8"
    }
  });
}
