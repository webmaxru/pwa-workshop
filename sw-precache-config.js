module.exports = {
  staticFileGlobs: [
    'build/**.html',
    'build/**.bundle.js',
    'build/**.bundle.css',
    'build/assets/**',
    'manifest.json',
    'idb-keyval.js'
  ],
  root: 'build',
  stripPrefix: 'build/',
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /timeline\/angular/,
    handler: 'networkFirst'
  },
  {
    urlPattern: /favorites\/angular/,
    handler: 'networkFirst'
  },
  {
    urlPattern: /fonts\.googleapis\.com/,
    handler: 'cacheFirst'
  },
  {
    urlPattern: /fonts\.gstatic\.com/,
    handler: 'cacheFirst'
  },
  {
    urlPattern: /pbs\.twimg\.com/,
    handler: 'networkFirst'
  }],
  importScripts: ['/sw.js']
};
