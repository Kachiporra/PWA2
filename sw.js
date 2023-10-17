const CACHE_NAME = 'v1_cache';
CACHE_NAME.addAll = [];

// '/blog/blog.html',
// '/blog/post-1.html',
// '/blog/post-2.html',
// '/blog/post-3.html',
// '/blog/post-4.html',
// '/blog/post-5.html',
// '/blog/post.html',
// '/images/0fd3416c.jpeg',
// '/images/8ad73f3c.jpeg',
// '/images/68f64b9d.jpeg',
// '/images/3177361-e391aca0.png',
// '/images/3177361.png',
// 'images/altar.png',
// 'images/image-1.png',
// 'images/image-2.png',
// 'images/image-3.png',
// '/images/image.png',
// './img.favicon.120.png',
// './img/.favicon/.720.png',
// './img/f.avicon/ic.ons8-day-of-the-dead-papercut-16.png',
// './img/fa.vicon/icon.s8-day-of-the-dead-papercut-32.png',
// './img/fav.icon/icons8.-day-of-the-dead-papercut-96.png',
// './intlTelI.nput/intlTel.Input.css',
// './intlTelIn.put/intlTelIn.put.min.js',
// './intlTelInp.ut/utils.js',
// './img',
// './intlT.elInput',
// './Blog-T.emplate.css',
// './index.h.tml',
// './jquery-1..9.1.min.js',
// './main.js',
// './manifest..json',
// 'nicepage.c.ss',
// 'nicepage.js.',
// 'Our-Works-1..css',
// 'Post-Template..css',
// 'thank-you-page..html',
// 'Thank-You-Template.css',


// ]

self.addEventListener('install', (event) => {
    console.log("Instalado");
    event.waitUntil(
        caches.open('mi-cache').then((cache) => {
            console.log("ok");
            console.log(CACHE_NAME);
            return cache.addAll([
                '/images'
                // 'images/image-1.png',
                // './images/image-2.png',
                // './images/image-3.png',
                // './images/image.png',
                // './img/favicon.120.png',
                // './nicepage.c.ss',
                // 'nicepage.js.',
                // 'Our-Works-1..css',
                // 'Post-Template..css',
                // 'thank-you-page..html',
                // 'Thank-You-Template.css',
            ]);


        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== 'mi-cache') {
                        return caches.delete(cacheName);
                    }
                })
            );
        })

    );
});


//Intercepta las solicitudes y maneja las respuestas desde la caché 
self.addEventListener('fetch', (event) => {
    event.respondwith(

        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});