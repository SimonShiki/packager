// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["/","checksum.worker.js","downloader.worker.js","assets/default-icon.9d63d3cfa69f175efb0a137a4a1e7c09.png","js/vendors~icns~jszip.faa09448de34f4d4a305.js","js/icns.e487eba4a2ec53ac2889.js","js/jszip.adb1f58076fbe3ba2201.js","js/packager.690a71e1b6a503ec5df0.js","js/vendors~icns.2f6b87d320656fdd2841.js","js/vendors~jszip.aea786587ab9cd066968.js","js/vendors~packager.15d689f3e35b15ae1a15.js"];
const CACHE_NAME = 'p4-03e52e1cd9b4a3e7bc3a74c215014ca9f6482509830c775e8e99ec56cf3152bc';

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
