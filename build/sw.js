var log = console.log.bind(console)
var err = console.error.bind(console)

self.addEventListener('install', (event) => {
  log('[Service Worker]: Installed')
})

self.addEventListener('activate', (event) => {
  log('[Service Worker]: Active')
})

self.addEventListener('fetch', (event) => {
  log('[Service Worker]: Fetch')
})