// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["/","checksum.worker.js","downloader.worker.js","assets/default-icon.9d63d3cfa69f175efb0a137a4a1e7c09.png","js/vendors~icns~jszip.5443a6016aa95063f336.js","js/icns.c06a8923df073d6a8d90.js","js/jszip.adb1f58076fbe3ba2201.js","js/packager.f4083677916ab9e226e7.js","js/vendors~icns.28158738d19d9e42706e.js","js/vendors~jszip.8f352959b4939f1efd75.js","js/vendors~packager.2f1ec777868184485231.js"];
const CACHE_NAME = 'p4-56af13b6262b9037dd109d35f63cff30cfa1043358d8a132920737ebcc32b269';

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
