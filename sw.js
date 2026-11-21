
const CACHE = 'itp-pwa-v5-github';
const CORE = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-192-maskable.png', './icons/icon-512-maskable.png'];
self.addEventListener('install', (e)=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())); });
self.addEventListener('activate', (e)=>{ e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch', (e)=>{
  const url = new URL(e.request.url);
  // Jangan cache API Twelve Data - selalu network
  if(url.hostname.includes('twelvedata.com') || url.pathname.includes('/.netlify/functions/')){
    e.respondWith(fetch(e.request).catch(()=>caches.match('./index.html')));
    return;
  }
  // App shell: Cache First, fallback network
  e.respondWith(caches.match(e.request).then(hit=>{
    if(hit) return hit;
    return fetch(e.request).then(res=>{
      const copy = res.clone();
      if(e.request.method==='GET' && res.status===200){ caches.open(CACHE).then(c=>c.put(e.request, copy)); }
      return res;
    }).catch(()=>caches.match('./index.html'));
  }));
});
