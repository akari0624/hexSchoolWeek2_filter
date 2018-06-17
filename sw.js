self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('KCGLocationsFilter').then(function(cache) {
      return cache.addAll([
        '0.bundle.js',
        'bundle.js',
        'index.html',
        'style/style.css',
      ]);
    })
  );
 });


 self.addEventListener('fetch', function(event) {

  console.log(event.request.url);

  event.respondWith(

    caches.match(event.request).then(function(response) {
    
    return response || fetch(event.request);
    
    }))
  
  });