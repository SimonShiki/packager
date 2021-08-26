// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["/","checksum.worker.js","downloader.worker.js","assets/default-icon.290e09e569a1cab8e61ba93b0d23863f.png","js/vendors~icns~jszip.faa09448de34f4d4a305.js","js/icns.e487eba4a2ec53ac2889.js","js/jszip.adb1f58076fbe3ba2201.js","js/packager.d2c2bfcb2cd47e0ed9dc.js","js/vendors~icns.2f6b87d320656fdd2841.js","js/vendors~jszip.aea786587ab9cd066968.js","js/vendors~packager.c1ab53c130a2e865ec59.js"];
const CACHE_NAME = 'p4-8cbc7fd4e1c91b7cda0a3dc2c22b1aa446bc56292d353845f290a1eba533a544';

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
