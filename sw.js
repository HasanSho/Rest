
// current cached files list
let staticCacheName='Restaurant-Current-v1';

self.addEventListener('install',function(event){

	event.waitUntil(
	
	// creating the cache list and naming it
	caches.open(staticCacheName)
	.then(function(cache){
		
		return cache.addAll([
				'/',
				'index.html',
				'restaurant.html',
				'css/styles.css',
				'data/restaurants.json',
				'js/dbhelper.js',
				'js/main.js',
				'js/restaurant_info.js',
				'img/1.jpg',
				'img/2.jpg',
				'img/3.jpg',
				'img/4.jpg',
				'img/5.jpg',
				'img/6.jpg',
				'img/7.jpg',
				'img/8.jpg',
				'img/9.jpg',
				'img/10.jpg',
				'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
				'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
				'img/No_Network.png'
     		
		])
		
		
	})
	);

})
self.addEventListener('activate',function(event){
	
	event.waitUntil(
			caches.keys()
		.then(function(cacheNames) {
			return Promise.all(
				cacheNames.filter(function(cacheName) {
					//filtering the old cached lists to be deleted, and leave the current one
					return cacheName.startsWith('Restaurant-Current') &&
						   cacheName != staticCacheName;
				}).map(function(cacheName) {
					
					return caches.delete(cacheName);
				})
			);
		})

	);

})




self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
			return response || fetch(event.request); // if reqeust not available fetch it
		})
		.catch(function(response) {
      // Offline? No cache?  responde with a message
      return new Response("<div  style='text-align: center;' > <img src='img/No_Network.png' width='100' height='100' alt='Connection Lost'></div><h1>No Internet connection, and no old cashed page for this URL.</h1><p>Please check your Internet Connection!</p>"
	  ,{
	headers: {'Content-type':'text/html'}
}
	  )
  })
	);
});

