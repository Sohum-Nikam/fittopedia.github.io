self.importScripts('data/games.js');

// Files to cache
const cacheName = 'fittopedia';
const appShellFiles = [
  '/pwa-examples/fittopedia/',
  '/pwa-examples/fittopedia/index.html',
  '/pwa-examples/fittopedia/sw.js',
  '/pwa-examples/fittopedia/fittopedia.css',
  '/pwa-examples/fittopedia/icons/icons-144.png',
  '/pwa-examples/fittopedia/icons/icons-192.png',
  '/pwa-examples/fittopedia/icons/icons-512.png',
];
const gamesImages = [];
for (let i = 0; i < games.length; i++) {
  gamesImages.push(`data/img/${games[i].slug}.jpg`);
}
const contentToCache = appShellFiles.concat(Images);

// Installing Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(contentToCache);
  })());
});

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) return r;
    const response = await fetch(e.request);
    const cache = await caches.open(cacheName);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});
