// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["/","checksum.worker.js","downloader.worker.js","assets/default-icon.9d63d3cfa69f175efb0a137a4a1e7c09.png","js/vendors~icns~jszip.faa09448de34f4d4a305.js","js/icns.e487eba4a2ec53ac2889.js","js/jszip.adb1f58076fbe3ba2201.js","js/packager.351b59f930c7dede3cfa.js","js/vendors~icns.2f6b87d320656fdd2841.js","js/vendors~jszip.aea786587ab9cd066968.js","js/vendors~packager.15d689f3e35b15ae1a15.js"];
const CACHE_NAME = 'p4-d6e55107781b194755a42188a013f41afb18a8d64b32ec8451c2e8c17120b4e3';

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
