const staticDevIFG = "dev-IFG-site-v1d";
const assets = [
    "/",
    "index.html",
    "../src/App.js",
    "../src/img/m1.png",
    "../src/img/M2.png",
    "../src/img/M3.png",
    "../src/img/m4.png",
    "../src/img/B1.png",

];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticIFG).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWaith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});