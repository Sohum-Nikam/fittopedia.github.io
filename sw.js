// sw.js

let cache_name = "Fittopedia"; // The string used to identify our cache

self.addEventListener("install", event => {
    console.log("installing...");
    event.waitUntil(
        caches
            .open(cache_name)
            .then(cache => {
                return cache.addAll(assets);
            })
            .catch(err => console.log(err))
    );
});


self.addEventListener("fetch", event => {
    if (event.request.url === "https://www.fittopedia.me/") {
        // or whatever your app's URL is
        event.respondWith(
            fetch(event.request).catch(err =>
                self.cache.open(cache_name).then(cache => cache.match("/index.html"))
            )
        );
    } else {
        event.respondWith(
            fetch(event.request).catch(err =>
                caches.match(event.request).then(response => response)
            )
        );
    }
});




self.addEventListener("install", e => {
     e.waitUntil(
         caches.open("static").then(cache => {
             return cache.addAll(["./", "./src/master.css", "./images/icons-192.png"]);
        })
      );
 });

 self.addEventListener("fetch", e => {
     console.log('Intercepting fetch request for: ${e.request.url}');
 });




// sw.js
self.addEventListener("fetch", event => {
    console.log("You fetched " + event.url);
});

// sw.js
self.addEventListener("fetch", event => {
    console.log("You fetched " + event.url);
});
