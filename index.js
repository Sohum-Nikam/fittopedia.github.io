 if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
         console.log(registration);
    }).catch(error =>  {
         console.log("SW Registration Failed!");
         console.log(error);
     });
 } 



// index.js
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("sw.js")
        .then(() => console.log("registered service worker!"));
}
// the rest of your page's code...
