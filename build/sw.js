var log = console.log.bind(console)
var err = console.error.bind(console)

var version = '1'
var cacheName = 'pwa-boosterconf-v' + version
var appShellFilesToCache = [
  './',
  './index.html',
  './inline.8412756f7608e8b18b25.bundle.js',
  './main.6c463bd84a02a274c053.bundle.js',
  './polyfills.6810ecaadc72a8a6993d.bundle.js',
  './styles.cb9fa7fcd6671dad1a45.bundle.css',
  './vendor.eeb39e9653f8691c3170.bundle.js',
  './favicon.ico',
  './assets/images/logo.png'
]

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting())
  log('[Service Worker]: Installed')

  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      log('[Service Worker]: Caching App Shell')
      return cache.addAll(appShellFilesToCache)
    })
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
  log('[Service Worker]: Active')

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {

        if (key !== cacheName) {
          log('[Service Worker]: Removing old cache', key)
          return caches.delete(key)
        }
      }))
    })
  )
})

self.addEventListener('fetch', (event) => {
  log('[Service Worker]: Fetch')

  event.respondWith(
    caches.match(event.request).then((response) => {

      if (response) {
        log('[Service Worker]: returning ' + event.request.url + ' from cache')
        return response
      } else {
        log('[Service Worker]: returning ' + event.request.url + ' from net')
        return fetch(event.request)
      }

      // w/o debug info: return response || fetch(e.request)

    })
  )
})
