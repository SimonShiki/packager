// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["/","checksum.worker.js","downloader.worker.js","assets/default-icon.290e09e569a1cab8e61ba93b0d23863f.png","js/vendors~icns~jszip.32af4fcb211f4f5d575c.js","js/icns.99160bc8e868d7772abe.js","js/jszip.8063d2d082fa04495905.js","js/packager.9956b12070e82195fdff.js","js/vendors~icns.8ae8c1b61a5d2cf973c0.js","js/vendors~jszip.4ec4f8740336d39a1983.js","js/vendors~packager.6b63c3c584721951c53c.js"];
const CACHE_NAME = 'p4-d3ffcce393bf05181b5f24152923d11c574d79a14d4b9df263c143099969e98e';

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
