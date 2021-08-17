// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["/","checksum.worker.js","downloader.worker.js","assets/default-icon.9d63d3cfa69f175efb0a137a4a1e7c09.png","js/vendors~icns~jszip.0e98a91245bc77c62d9b.js","js/icns.cfb418c6e27b5c0e8d2f.js","js/jszip.898f71d88acbcb6793b6.js","js/packager.879fe8c8416aa05db636.js","js/vendors~icns.6a3ecab32310c289056d.js","js/vendors~jszip.e36b422aacd71c799df5.js","js/vendors~packager.992889b6cf90a1a2bd0f.js"];
const CACHE_NAME = 'p4-1c61d4d4fbf2cdefb1fd4fe35725fbaa5146f14c3f72913ab324111a9d716b2a';

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
