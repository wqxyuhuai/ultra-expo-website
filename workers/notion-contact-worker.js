const NOTION_VERSION = "2022-06-28";

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

    const missing = ["name", "company", "contact", "inquiryType", "message"].filter(key => !clean(message[key]));
    if (missing.length) {
      return json({ ok: false, error: `Missing required fields: ${missing.join(", ")}` }, 400, cors);
    }

    const fullPayload = buildNotionPayload(message, env, true);
    let notion = await createNotionPage(fullPayload, env);

    if (!notion.ok) {
      const fallbackPayload = buildNotionPayload(message, env, false);
      const fallback = await createNotionPage(fallbackPayload, env);
      if (!fallback.ok) {
        return json({ ok: false, error: fallback.error || notion.error || "Unable to write to Notion." }, 502, cors);
      }
      notion = { ...fallback, warning: "Full property write failed; saved title and page body only." };
    }

    return json({ ok: true, notionPageId: notion.data?.id || "", warning: notion.warning || "" }, 200, cors);
  }
};

function originAllowed(origin, env) {
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

async function createNotionPage(payload, env) {
  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      "authorization": `Bearer ${env.NOTION_TOKEN}`,
      "content-type": "application/json",
      "notion-version": env.NOTION_VERSION || NOTION_VERSION
    },
    body: JSON.stringify(payload)
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

function buildNotionPayload(message, env, fullProperties) {
  const titleProperty = clean(env.NOTION_TITLE_PROPERTY) || "Name";
  const title = [clean(message.name), clean(message.company)].filter(Boolean).join(" / ") || "Website inquiry";
  const properties = {
    [titleProperty]: titleValue(title)
  };

  if (fullProperties) {
    addRichText(properties, env, "Company", "NOTION_COMPANY_PROPERTY", message.company);
    addRichText(properties, env, "Contact", "NOTION_CONTACT_PROPERTY", message.contact);
    addSelect(properties, env, "Inquiry Type", "NOTION_INQUIRY_TYPE_PROPERTY", message.inquiryType);
    addRichText(properties, env, "Event Name", "NOTION_EVENT_NAME_PROPERTY", message.eventName);
    addRichText(properties, env, "Country / Region", "NOTION_COUNTRY_REGION_PROPERTY", message.countryRegion);
    addRichText(properties, env, "Expected Date", "NOTION_EXPECTED_DATE_PROPERTY", message.expectedDate);
    addRichText(properties, env, "Booth Area", "NOTION_BOOTH_AREA_PROPERTY", message.boothArea);
    addRichText(properties, env, "Message", "NOTION_MESSAGE_PROPERTY", message.message);
    addRichText(properties, env, "Source Page", "NOTION_SOURCE_PAGE_PROPERTY", message.sourcePage);
    addRichText(properties, env, "Language", "NOTION_LANGUAGE_PROPERTY", message.language);
    addDate(properties, env, "Submitted At", "NOTION_SUBMITTED_AT_PROPERTY", message.createdAt);
  }

  return {
    parent: { database_id: env.NOTION_DATABASE_ID },
    properties,
    children: [
      block("heading_2", "Contact inquiry"),
      block("paragraph", detailLines(message).join("\n"))
    ]
  };
}

function detailLines(message) {
  return [
    ["Submitted", message.createdAt],
    ["Name", message.name],
    ["Company", message.company],
    ["Contact", message.contact],
    ["Inquiry Type", message.inquiryType],
    ["Event Name", message.eventName],
    ["Country / Region", message.countryRegion],
    ["Expected Date", message.expectedDate],
    ["Booth Area", message.boothArea],
    ["Language", message.language],
    ["Source Page", message.sourcePage],
    ["Message", message.message]
  ].filter(([, value]) => clean(value)).map(([label, value]) => `${label}: ${clean(value)}`);
}

function titleValue(value) {
  return { title: [{ text: { content: truncate(value, 2000) } }] };
}

function richTextValue(value) {
  return { rich_text: [{ text: { content: truncate(value, 2000) } }] };
}

function addRichText(properties, env, fallbackName, envName, value) {
  if (!clean(value)) return;
  properties[clean(env[envName]) || fallbackName] = richTextValue(value);
}

function addSelect(properties, env, fallbackName, envName, value) {
  if (!clean(value)) return;
  properties[clean(env[envName]) || fallbackName] = { select: { name: truncate(value, 100) } };
}

function addDate(properties, env, fallbackName, envName, value) {
  if (!clean(value)) return;
  properties[clean(env[envName]) || fallbackName] = { date: { start: value } };
}

function block(type, content) {
  return {
    object: "block",
    type,
    [type]: {
      rich_text: [{ type: "text", text: { content: truncate(content, 2000) } }]
    }
  };
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
