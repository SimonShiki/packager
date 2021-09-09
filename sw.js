// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["","js/sha256.52086ae4fb19cece366a.worker.js","js/download-project.19c53b4a2edda75a83c7.worker.js","assets/default-icon.290e09e569a1cab8e61ba93b0d23863f.png","js/vendors~icns~jszip.5eb2f78365755579798f.js","js/icns.e07b1610890b2ebcdc3a.js","js/jszip.50c3dd8a94e2b060c0b3.js","js/packager.95a45bc1aa1aefc19cf0.js","js/packager-options-ui.de48efbfa74f09fbc538.js"];
const CACHE_NAME = 'p4-2fad7e6fd593d4841a7e09bf6efddc0ec304bec9817037f88b1d888f980b76c7';
const IS_PRODUCTION = 'production' === 'production';

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
