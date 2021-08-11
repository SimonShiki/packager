// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["/","checksum.worker.js","downloader.worker.js","assets/default-icon.9d63d3cfa69f175efb0a137a4a1e7c09.png","js/vendors~icns~jszip.99dd043dac7b9db9c04a.js","js/icns.c3ac24f0fedc227cc2f9.js","js/jszip.898f71d88acbcb6793b6.js","js/packager.91f3429de0f6d71f052e.js","js/vendors~icns.da858bece179c176b437.js","js/vendors~jszip.c216a8c87dc8358276dc.js","js/vendors~packager.01f883c26ff16fb8077a.js"];
const CACHE_NAME = 'p4-e87bcad648b052575f04bfd4fe707c7f07be5e6e11d9b6da9d65e7514f766f50';

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
