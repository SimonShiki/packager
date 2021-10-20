// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["","js/sha256.52086ae4fb19cece366a.worker.js","js/download-project.8f254301b2661970bc49.worker.js","assets/default-icon.290e09e569a1cab8e61ba93b0d23863f.png","js/vendors~icns~jszip.ae9d8194c324b501b2fa.js","js/icns.9801f3ea8b441e407951.js","js/jszip.949bc8a3eb092391c479.js","js/packager.e57ae25a9ed7123b135e.js","js/packager-options-ui.ed522c80285e0097e899.js"];
const CACHE_NAME = "p4-5db70e5a35dfa0be8d1cd8c988bb67f5bc805078f12fe43f1393de8b9b47c72a";
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

const fetchWithTimeout = (req) => new Promise((resolve, reject) => {
  const timeout = setTimeout(reject, 5000);
  fetch(req)
    .then((res) => {
      clearTimeout(timeout);
      resolve(res);
    })
    .catch((err) => {
      clearTimeout(timeout);
      reject(err);
    });
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
        fetchWithTimeout(event.request).catch(() => caches.match(new Request(url)))
      );
    }
  }
});
