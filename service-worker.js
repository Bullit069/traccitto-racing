self.addEventListener("install", (event) => {
  console.log("Service Worker installato");
  event.waitUntil(
    caches.open("traccitto-cache").then((cache) => {
      return cache.addAll(["./index.html"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});