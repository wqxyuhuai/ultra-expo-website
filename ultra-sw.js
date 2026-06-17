const ULTRA_CACHE_VERSION = "20260617-clean01";
const ULTRA_STATIC_CACHE = `ultra-static-${ULTRA_CACHE_VERSION}`;
const ULTRA_IMAGE_CACHE = `ultra-images-${ULTRA_CACHE_VERSION}`;
const ULTRA_PAGE_CACHE = `ultra-pages-${ULTRA_CACHE_VERSION}`;
const ULTRA_ALLOWED_CACHES = new Set([
  ULTRA_STATIC_CACHE,
  ULTRA_IMAGE_CACHE,
  ULTRA_PAGE_CACHE
]);

const ULTRA_STATIC_DESTINATIONS = new Set(["style", "script", "font"]);
const ULTRA_IMAGE_DESTINATIONS = new Set(["image"]);
const ULTRA_IMAGE_EXTENSIONS = /\.(?:avif|webp|png|jpe?g|gif|svg|ico)(?:$|\?)/i;
const ULTRA_FONT_EXTENSIONS = /\.(?:woff2?|ttf|otf)(?:$|\?)/i;
const ULTRA_STATIC_EXTENSIONS = /\.(?:css|js|mjs)(?:$|\?)/i;
const ULTRA_MAX_IMAGE_ENTRIES = 320;
const ULTRA_MAX_STATIC_ENTRIES = 96;
const ULTRA_MAX_PAGE_ENTRIES = 32;

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.map(name => {
      if (name.startsWith("ultra-") && !ULTRA_ALLOWED_CACHES.has(name)) {
        return caches.delete(name);
      }
      return Promise.resolve();
    }));
    await self.clients.claim();
  })());
});

self.addEventListener("message", event => {
  if (event.data?.type !== "ULTRA_CLEAR_ASSET_CACHE") return;
  event.waitUntil((async () => {
    await clearUltraCaches();
    event.ports?.[0]?.postMessage({ type: "ULTRA_ASSET_CACHE_CLEARED" });
  })());
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate" || request.destination === "document") {
    event.respondWith(networkFirst(request, ULTRA_PAGE_CACHE, ULTRA_MAX_PAGE_ENTRIES));
    return;
  }

  if (isImageRequest(request, url)) {
    event.respondWith(cacheFirst(request, ULTRA_IMAGE_CACHE, ULTRA_MAX_IMAGE_ENTRIES));
    return;
  }

  if (isStaticRequest(request, url)) {
    event.respondWith(networkFirst(request, ULTRA_STATIC_CACHE, ULTRA_MAX_STATIC_ENTRIES));
  }
});

function isImageRequest(request, url) {
  return ULTRA_IMAGE_DESTINATIONS.has(request.destination) || ULTRA_IMAGE_EXTENSIONS.test(url.pathname);
}

function isStaticRequest(request, url) {
  return ULTRA_STATIC_DESTINATIONS.has(request.destination) ||
    ULTRA_STATIC_EXTENSIONS.test(url.pathname) ||
    ULTRA_FONT_EXTENSIONS.test(url.pathname);
}

function canStore(response) {
  return Boolean(response && response.ok && response.status === 200 && response.type === "basic");
}

async function putSuccessful(cache, request, response, maxEntries) {
  if (!canStore(response)) return;
  await cache.put(request, response.clone());
  trimCache(cache, maxEntries).catch(() => {});
}

async function cacheFirst(request, cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  await putSuccessful(cache, request, response, maxEntries);
  return response;
}

async function networkFirst(request, cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    await putSuccessful(cache, request, response, maxEntries);
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) return cached;
    throw error;
  }
}

async function trimCache(cache, maxEntries) {
  const keys = await cache.keys();
  if (keys.length <= maxEntries) return;
  const overflow = keys.length - maxEntries;
  await Promise.all(keys.slice(0, overflow).map(key => cache.delete(key)));
}

async function clearUltraCaches() {
  const names = await caches.keys();
  await Promise.all(names.map(name => {
    if (name.startsWith("ultra-")) return caches.delete(name);
    return Promise.resolve();
  }));
}
