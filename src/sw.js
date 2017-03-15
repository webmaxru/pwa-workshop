var log = console.log.bind(console)
var err = console.error.bind(console)

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting())
  log('[Service Worker]: Installed')
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
  log('[Service Worker]: Active')
})

self.addEventListener('fetch', (event) => {
  log('[Service Worker]: Fetch')
})
