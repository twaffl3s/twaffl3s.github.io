// You have to supply a name for your cache, this will
// allow us to remove an old one to avoid hitting disk
// space limits and displaying old resources
var cache_name = 'acjanus-1.0';

// Assesto catche
var assets_to_cache = [
  '/fonts/karla_reg_latin.woff2',
  '/fonts/karla_reg_latin_extended.woff2',
  '/fonts/karla_bold_latin.woff2',
  '/fonts/karla_bold_latin_extended.woff2',
  '/fonts/notoserif_reg_cyrillic.woff2',
  '/fonts/notoserif_reg_cyrillic_extended.woff2',
  '/fonts/notoserif_reg_greek.woff2',
  '/fonts/notoserif_reg_greek_extended.woff2',
  '/fonts/notoserif_reg_vietnamese.woff2',
  '/fonts/notoserif_reg_latin.woff2',
  '/fonts/notoserif_reg_latin_extended.woff2',
  '/css/bio.min.css',
  '/css/gifify.min.css',
  '/css/main.min.css',
  '/css/media_queries.min.css',
  '/css/post_listings.min.css',
  '/css/posts.min.css',
  '/css/resume.min.css',
  '/js/functions.js',
  '/images/favicon.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    cache.open(cache_name)
      .then(function (cache) {
        return cache.addAll(assets_to_cache);
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        var fetch_request = event.request.clone();
        return fetch(fetch_request).then(
          function (response) {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            var response_to_cache = response.clone();
            caches.open(cache_name)
              .then(function (cache) {
                cache.put(event.request, response_to_cache)
              });
            return response;
          }
        );
      })
  )
});

self.addEventListener('activate', function (event) {
  var cache_white_list = ['acjanus-1.0'];
  event.waitUntil(
    caches.keys().then(function (cache_names) {
      return Promise.all(
        cache_names.map(function (param_cache_name) {
          if (cache_white_list.indexOf(cache_name) === -1) {
            return caches.delete(param_cache_name);
          }
        })
      );
    })
  );
});