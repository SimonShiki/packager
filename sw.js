// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["/","checksum.worker.js","downloader.worker.js","assets/default-icon.9d63d3cfa69f175efb0a137a4a1e7c09.png","js/vendors~icns~jszip.c02f570168b689b78aaa.js","js/icns.447cc1570deecd29020f.js","js/jszip.488d3fc72c9d2f23a58e.js","js/packager.c168cf1ecf6281565787.js","js/vendors~icns.a1cab2dfb513d94a426c.js","js/vendors~jszip.a0f88555d7cbdddf305c.js","js/vendors~packager.2f1ec777868184485231.js"];
const CACHE_NAME = 'p4-2e814f748ca284e598a6aea62a1711b6e43f680c79e1af4e4510ee3f065a0a93';

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
