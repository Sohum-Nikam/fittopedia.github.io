const Fittopedia = "www.Fittopedia.me"
const assets = [
  "/",
  "/index.html",
  "/acidity.html",
  "/allergies.html",
  "/ayurveda.html",
  "/calorie.html",
  "/cancer.html",
  "/cold & cough.html",
  "/conjuctivitis.html",
  "/diabetes.html",
  "/fittopedia.html",
  "/flu.html",
  "/gym-sl.html",
  "/gym-st.html",
  "/gym.html",
  "/headache.html",
  "/health.html",
  "/heart.html",
  "/kidney.html",
  "/meditation.html",
  "/mononucleolis.html",
  "/mudra.html",
  "/pedometer.html",
  "/rose.html",
  "/sitting-postures.html",
  "/sleeping.html",
  "/standing.html",
  "/stomachache.html",
  "/warm-up.html",
  "/css/fittopedia.css",
  "/css/acidity.css",
  "/css/allergies.css",
  "/css/ayur.css",
  "/css/cancer.css",
  "/css/cold-cough.css",
  "/css/conjuctivitis.css",
  "/css/diabetes.css",
  "/css/flu.css",
  "/css/gym.css",
  "/css/headaches.css",
  "/css/health.css",
  "/css/heart.css",
  "/css/kidney.css",
  "/css/med.css",
  "/css/mononuleolis.css",
  "/css/mudras.css",
  "/css/rose.css",
  "/css/sitting.css",
  "/css/sl.css",
  "/css/sleeping.css",
  "/css/st.css",
  "/css/standing.css",
  "/css/stomachache.css",
  "/css/warmup.css",
  "/js/sw.js",
  "/js/sohum.js",
  "/js/index.js",
  "/json/manifest.json",
  "/images/ayurveda-1.jpg",
  "/images/ayurveda-2.jpg",
  "/images/ayurveda-3.jpg",
  "/images/gym-1.jpg",
  "/images/gym-2.jpg",
  "/images/gym-3.jpg",
  "/images/gym-4.jpg",
  "/images/headache.jpg",
  "/images/health-1.jpg",
  "/images/health-2.jpg",
  "/images/health-3.jpg",
  "/images/health-4.jpg",
  "/images/icon-2.png",
  "/images/icon.png",
  "/images/icons-192.png",
  "/images/icons-512.png",
  "/images/id card.jpeg",
  "/images/ill-1.jpg",
  "/images/ill-2.jpg",
  "/images/ill-3.jpg",
  "/images/logo.png",
  "/images/meditation-1.jpg",
  "/images/meditation-2.jpg",
  "/images/meditation-3.jpg",
  "/images/yoga-1.jpg",
  "/images/yoga-2.jpg",
  "/images/yoga-3.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(Fittopedia).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/sw.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }

