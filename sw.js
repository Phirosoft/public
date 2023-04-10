// self.importScripts('data/games.js');

// Files to cache
const cacheName = 'phirosoft-v1';
const appShellFiles = [
    './',
    './assets/logo.png',
    './assets/loading.svg',
    './component/about.html',
    './component/blog.html',
    './component/game.html',
    './component/help.html',
    './component/movie.html',
    './component/tool.html',
    './component/work.html',
    './index.html',
    './styles/style.css',
    './main.js',
    './scripts/base.js',
    './templates.js',
];
const gamesImages = [];
const contentToCache = appShellFiles.concat(gamesImages);

// Installing Service Worker
self.addEventListener('install', (e) => {
    e.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        await cache.addAll(contentToCache);
    })());
});

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
    // Cache http and https only, skip unsupported chrome-extension:// and file://...
    if (!(
        e.request.url.startsWith('http:') || e.request.url.startsWith('https:')
    )) {
        return;
    }

    e.respondWith((async () => {
        const r = await caches.match(e.request);
        if (r) return r;
        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        cache.put(e.request, response.clone());
        return response;
    })());
});
