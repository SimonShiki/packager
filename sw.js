// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["/","checksum.worker.js","downloader.worker.js","assets/default-icon.290e09e569a1cab8e61ba93b0d23863f.png","js/vendors~icns~jszip.32af4fcb211f4f5d575c.js","js/icns.99160bc8e868d7772abe.js","js/jszip.8063d2d082fa04495905.js","js/packager.21b4bab1f08438a38bbb.js","js/vendors~icns.8ae8c1b61a5d2cf973c0.js","js/vendors~jszip.4ec4f8740336d39a1983.js","js/vendors~packager.5c163ccf04b204cf8396.js"];
const CACHE_NAME = 'p4-4d713cecd80fe7d778d09e92e44c18d5c5ccf4d4bb10f19e0d58df81c2d278fd';

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
