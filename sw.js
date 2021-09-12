// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["","js/sha256.52086ae4fb19cece366a.worker.js","js/download-project.84c8a5c9587020de48cd.worker.js","assets/default-icon.290e09e569a1cab8e61ba93b0d23863f.png","js/vendors~icns~jszip.5eb2f78365755579798f.js","js/icns.e07b1610890b2ebcdc3a.js","js/jszip.50c3dd8a94e2b060c0b3.js","js/packager.a10572b7437f826c963e.js","js/packager-options-ui.70fbd162205fca315afb.js"];
const CACHE_NAME = "p4-5ef3620a1275146e1b15aa95aedd2f6b0e33243101c8d3a0aa7e387edbb2c370";
const IS_PRODUCTION = true;

const base = location.pathname.substr(0, location.pathname.indexOf('sw.js'));

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS.map(i => i === '' ? '/' : i))));
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
  const relativePathname = url.pathname.substr(base.length);
  if (IS_PRODUCTION && ASSETS.includes(relativePathname)) {
    url.search = '';
    const immutable = !!relativePathname;
    if (immutable) {
      event.respondWith(
        caches.match(new Request(url)).then((res) => res || fetch(event.request))
      );
    } else {
      event.respondWith(
        fetch(event.request).catch(() => caches.match(new Request(url)))
      );
    }
  }
});
