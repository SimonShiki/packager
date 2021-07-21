// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["/","checksum.worker.js","downloader.worker.js","assets/default-icon.9d63d3cfa69f175efb0a137a4a1e7c09.png","js/vendors~icns~jszip.47a987c785584f47119b.js","js/icns.303656426a586e178e29.js","js/jszip.72f699cabcadd741a697.js","js/packager.085f2e674615a90456ca.js","js/vendors~icns.3238428e3cb11a8a1479.js","js/vendors~jszip.b45ef5306cedffcca61f.js","js/vendors~packager.a411a7d1e3f1c48f1711.js"];
const CACHE_NAME = 'p4-0b399af8d644ca3bf6ecfe0109b7eae0f2c9e01102710d37968b9a7f511a7375';

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
