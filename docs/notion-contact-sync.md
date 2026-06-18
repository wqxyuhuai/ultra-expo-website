# Contact form to Notion sync

This site is deployed on GitHub Pages, so the public page cannot safely call the Notion API directly. Use a small serverless endpoint between the website and Notion.

Recommended setup: Cloudflare Worker

## 1. Create the Notion database

Minimum required schema:

- `Name`: title property

Recommended optional properties:

- `Company`: rich text
- `Contact`: rich text
- `Inquiry Type`: select
- `Event Name`: rich text
- `Country / Region`: rich text
- `Expected Date`: rich text
- `Booth Area`: rich text
- `Message`: rich text
- `Source Page`: rich text
- `Language`: rich text
- `Submitted At`: date

If the optional properties are missing or have different types, the Worker will retry with title + page body only, so the inquiry is still saved.

## 2. Create a Notion integration

1. Create an internal Notion integration.
2. Copy its token.
3. Share the target database with that integration.
4. Copy the database ID from the Notion database URL.

## 3. Deploy the Worker

Use `workers/notion-contact-worker.js` as the Worker source.

Required environment variables:

- `NOTION_TOKEN`: Notion integration secret
- `NOTION_DATABASE_ID`: target Notion database ID
- `ALLOWED_ORIGINS`: production site origin, for example `https://your-name.github.io`

Optional environment variables:

- `NOTION_TITLE_PROPERTY`: title property name, default `Name`
- `NOTION_VERSION`: Notion API version, default `2022-06-28`
- `NOTION_COMPANY_PROPERTY`
- `NOTION_CONTACT_PROPERTY`
- `NOTION_INQUIRY_TYPE_PROPERTY`
- `NOTION_EVENT_NAME_PROPERTY`
- `NOTION_COUNTRY_REGION_PROPERTY`
- `NOTION_EXPECTED_DATE_PROPERTY`
- `NOTION_BOOTH_AREA_PROPERTY`
- `NOTION_MESSAGE_PROPERTY`
- `NOTION_SOURCE_PAGE_PROPERTY`
- `NOTION_LANGUAGE_PROPERTY`
- `NOTION_SUBMITTED_AT_PROPERTY`

The optional property variables are only needed if your Notion column names differ from the recommended names.

## 4. Connect the website

After the Worker is deployed, copy its public URL and set it in `assets/ultra-site.js`:

```js
const CONTACT_SUBMISSION_ENDPOINT = "https://your-worker.your-subdomain.workers.dev";
```

Then deploy the site to GitHub Pages as usual.

## 5. Test

1. Open `/contact`.
2. Submit a test inquiry.
3. Confirm the success message says the inquiry synced to Notion.
4. Confirm a new row/page appears in the Notion database.

If the page shows a submit error, check the Worker logs first. The common causes are a missing database share, wrong database ID, wrong token, or an origin not listed in `ALLOWED_ORIGINS`.
