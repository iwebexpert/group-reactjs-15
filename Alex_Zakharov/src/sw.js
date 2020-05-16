const cacheName = 'chat-v2';
const staticAssets = [
    './',
    './main.css',
    './bundle.js',
    './api/chats.json',
    './api/profile.json',
];

self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener('activate', event => {
    self.clients.claim();
});

self.addEventListener('push', event => {
    let body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'no payload';
    }

    const options = {
        body,
        icon: '',
    };

    event.waitUntil(
        self.registration.showNotification('Title', options)
    );
});

self.addEventListener('fetch', async event => {
    const req = event.request;
    const url = new URL(req.url);
    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(networkAndCache(req));
    }
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
}

async function networkAndCache(req) {
    const cache = await caches.open(cacheName);
    try {
        const f1 = await fetch(req);
        await cache.put(req, f1.clone());
        return f1;
    } catch (err) {
        return await cache.match(req);
    }
}