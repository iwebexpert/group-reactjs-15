const cacheName = 'chat-v1';
const staticAssets = [
	'./',
	'main.css',
	'main.js',
	'./api/chats.json'
];

self.addEventListener('install', async event => {
	const cache = await caches.open(cacheName);
	await cache.addAll(staticAssets);
	return self.skipWaiting();
});
self.addEventListener('activate', event => {
	self.clients.claim();
});
self.addEventListener('fetch', async event => {
	const req = event.request;
	const url = new URL(req.url);
	if(url.origin !== location.origin){
		event.respondWith(cacheFirst(req));
	}else{
		event.respondWith(networkAndCache(req));
	}
});
self.addEventListener('push', event => {
	let body;
	if(event.data){
		body = event.data.text();
	}else{
		body = 'nothing was transfered';
	}
	const options = {
		body,
		icon: './images/icon_small.png'
	};
	event.waitUntil(
		self.registration.showNotification('Слушай', options)
	);
});
async function cacheFirst(req){
	let cache = await caches.open(cacheName);
	cache = cache.match(req);
	return cache || fetch(req);
}
async function networkAndCache(req){
	const cache = await caches.open(cacheName);
	try{
		const f1 = await fetch(req);
		await cache.put(req, f1.clone());
		return f1;
	}catch{
		return await cache.match(req);
	}
}