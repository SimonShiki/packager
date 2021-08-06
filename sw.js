// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["/","checksum.worker.js","downloader.worker.js","assets/default-icon.9d63d3cfa69f175efb0a137a4a1e7c09.png","js/vendors~icns~jszip.d8e97bdafc2bee4ca6d5.js","js/icns.447cc1570deecd29020f.js","js/jszip.488d3fc72c9d2f23a58e.js","js/packager.de47c4d5b353c9fbbf5f.js","js/vendors~icns.3700865281eea3b2bd8a.js","js/vendors~jszip.505a899097921ef567d3.js","js/vendors~packager.7a41cde015f9873659ab.js"];
const CACHE_NAME = 'p4-6fac316b6f58947b3e7cb4e20a928fad10da7f201b17be6f3bda475ad44293dc';

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(i => i !== CACHE_NAME).map(i => caches.delete(i))))
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;
  event.respondWith(
    fetch(event.request).catch(() => {
      url.search = '';
      return caches.match(new Request(url));
    })
  );
});
