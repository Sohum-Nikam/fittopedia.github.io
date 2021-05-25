// self.addEventListener("install", e => {
    // e.waitUntil(
        // caches.open("static").then(cache => {
            // return cache.addAll(["./", "./src/master.css", "./images/logo-2.png"]);
       // })
     // );
/// });

// self.addEventListener("fetch", e => {
    // console.log('Intercepting fetch request for: ${e.request.url}');
// });




// sw.js
self.addEventListener("fetch", event => {
    console.log("You fetched " + event.url);
});

