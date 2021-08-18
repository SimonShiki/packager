// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["/","checksum.worker.js","downloader.worker.js","assets/default-icon.9d63d3cfa69f175efb0a137a4a1e7c09.png","js/vendors~icns~jszip.b20b77213f5d33512981.js","js/icns.a29318a7264e67faf326.js","js/jszip.859aa117691d50f1c0d9.js","js/packager.7fe6afd9fdc5e14293cf.js","js/vendors~icns.a0ae71b2e9ba3cdf6fc2.js","js/vendors~jszip.7a5694a0d807f5cdcedd.js","js/vendors~packager.d5eed487ecd042996762.js"];
const CACHE_NAME = 'p4-3ed9c08cdc91ac4ad236a486be922744b7a411bcd7a20f1b5f951c26f305c417';

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
