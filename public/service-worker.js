const CACHE_NAME = "pwa-cache-v1";
const STATIC_FILES = [
    "/", // Startpagina
    "/offline.html", // Optionele offline fallback-pagina
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            // Voeg statische bestanden toe
            await cache.addAll(STATIC_FILES);

            // Voeg Vite-buildbestanden toe door het manifest te lezen
            const response = await fetch("/build/manifest.json");
            const manifest = await response.json();

            const viteAssets = Object.values(manifest).map((entry) => `/build/${entry.file}`);
            await cache.addAll(viteAssets);
        })
    );

    self.skipWaiting(); // Direct activeren
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );

    self.clients.claim(); // Direct controle over clients
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return (
                response ||
                fetch(event.request).then((networkResponse) => {
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                }).catch(() => {
                    if (event.request.mode === "navigate") {
                        return caches.match("/offline.html");
                    }
                })
            );
        })
    );
});