module.exports = {
  staticFileGlobs: [
    'build/**.html',
    'build/**.bundle.js',
    'build/**.bundle.css',
    'build/assets/**'
  ],
  root: 'build',
  stripPrefix: 'build/',
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /timeline/,
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
    handler: 'cacheFirst'
  }]
};
