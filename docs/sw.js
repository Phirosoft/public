// Service Worker for Phirosoft Website
const CACHE_NAME = 'phirosoft-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/main.js',
  '/templates.js',
  '/styles/style.css',
  '/assets/logo.png',
  '/assets/favicon.128.png',
  '/component/about.html',
  '/component/work.html',
  '/component/game.html',
  '/component/movie.html',
  '/component/blog.html',
  '/component/tool.html',
  '/component/help.html',
  '/component/portfolio.html'
];

// インストール時にキャッシュを設定
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('SW: Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

// リクエスト時のキャッシュ戦略
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // キャッシュがある場合はキャッシュから返す
        if (response) {
          return response;
        }
        
        // ネットワークからフェッチ
        return fetch(event.request);
      }
    )
  );
});

// アップデート時の古いキャッシュクリア
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('SW: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
