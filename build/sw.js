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
  log('[Service Worker]: Installed')

  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      log('Service Worker: Caching App Shell')
      return cache.addAll(appShellFilesToCache)
    })
  )
})

self.addEventListener('activate', (event) => {
  log('[Service Worker]: Active')
})

self.addEventListener('fetch', (event) => {
  log('[Service Worker]: Fetch')
})
