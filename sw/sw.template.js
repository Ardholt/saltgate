/* Saltgate app-shell cache. Generated into dist/sw.js by vite.config.js (version and file list are filled at build).
   Rules: only same-origin GETs are touched; any cache failure falls through to the network; the game's localStorage save is never read or written here. */
const VERSION = '__VERSION__';
const PREFIX = 'saltgate-shell-';
const CACHE = PREFIX + VERSION;
const FILES = __FILES__;

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // one atomic set: if any file fails, install fails, no worker takes over and the page keeps loading normally from the network
    await cache.addAll(FILES.map((f) => new Request(f, { cache: 'reload' })));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try {
      for (const k of await caches.keys()) if (k.startsWith(PREFIX) && k !== CACHE) await caches.delete(k);
    } catch (e) { /* ignore */ }
    try { await self.clients.claim(); } catch (e) { /* ignore */ }
  })());
});

const fromCache = async (req) => { try { return await caches.match(req, { cacheName: CACHE, ignoreSearch: true }); } catch (e) { return undefined; } };

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    // network first, so online behaviour is the ordinary one; the cache answers only when the network does not
    try {
      return await fetch(req);
    } catch (err) {
      const hit = await fromCache(req.mode === 'navigate' ? new Request(new URL('./', self.location.href).href) : req);
      if (hit) return hit;
      throw err; // nothing cached: the browser's ordinary failure, as without a worker
    }
  })());
});
