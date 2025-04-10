/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  
);

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about/index.html",
    "revision": "38844c776d426947e2aa724e3dcde6a3"
  },
  {
    "url": "archives/2021/08/index.html",
    "revision": "c306df3591fd8d8ee939777afd91fd4f"
  },
  {
    "url": "archives/2021/09/index.html",
    "revision": "e29fc3c693074e540e19c46b08e2ece4"
  },
  {
    "url": "archives/2021/index.html",
    "revision": "b407787f0721da98b2d3de3005260d10"
  },
  {
    "url": "archives/2022/03/index.html",
    "revision": "6c3ef3b1d9abd2f4cbe3f881eb4c6be7"
  },
  {
    "url": "archives/2022/05/index.html",
    "revision": "1db179028044a44ff854bc1359b1153c"
  },
  {
    "url": "archives/2022/06/index.html",
    "revision": "c1a5b1120e31474b85d26d1dfb49f27b"
  },
  {
    "url": "archives/2022/07/index.html",
    "revision": "0c6a69c3a773554698fd9fdf0fd28ccc"
  },
  {
    "url": "archives/2022/10/index.html",
    "revision": "342b58a1bc2648bb27ff8c2f3e9ca548"
  },
  {
    "url": "archives/2022/12/index.html",
    "revision": "954d0853488bc3519a73c1781cbed60a"
  },
  {
    "url": "archives/2022/index.html",
    "revision": "6f2fe7abcefffc0bd5fe121dc7f7cc53"
  },
  {
    "url": "archives/2022/page/2/index.html",
    "revision": "34f3adb5a4d521e813df868ecf88885f"
  },
  {
    "url": "archives/2023/01/index.html",
    "revision": "1c7d69ac54d1cb67837844e3ba0d6f68"
  },
  {
    "url": "archives/2023/05/index.html",
    "revision": "8d3acea3dd48dd4f1a567ba31a0b7d95"
  },
  {
    "url": "archives/2023/index.html",
    "revision": "fe8f518aa2c304310bbf715bce1518e4"
  },
  {
    "url": "archives/2025/04/index.html",
    "revision": "5cadcfb1a879c41138e2054840249fc1"
  },
  {
    "url": "archives/2025/index.html",
    "revision": "100baf7fb127d2e44d5fabb15da3e6b7"
  },
  {
    "url": "archives/index.html",
    "revision": "dd3a0f761eb7b24be0ddddd9e567a340"
  },
  {
    "url": "archives/page/2/index.html",
    "revision": "39e248d4680fc59d8c645cc6c1d11fe3"
  },
  {
    "url": "archives/page/3/index.html",
    "revision": "fbf5e6b980b1e5536356a04ced36b4e8"
  },
  {
    "url": "archives/page/4/index.html",
    "revision": "f2ed5758bf640269c7f7e9a5217724de"
  },
  {
    "url": "categories/index.html",
    "revision": "8c0380c2d9244a3dd583b9896945d012"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "83db7377e5762edc6224ea27ce438290"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "ff46ee146063bb6ddf600eb9b389fba1"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "f7b3594ac5151526a4bb6181d7f7bf8f"
  },
  {
    "url": "categories/经验/index.html",
    "revision": "bba456dc5df401f9f720bdc221bcef7b"
  },
  {
    "url": "categories/试题/index.html",
    "revision": "7d6a7784af79ed97624d2b85574c098d"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "77695039c48ff42759dd0418344bea80"
  },
  {
    "url": "css/main.css",
    "revision": "33d1e576f8c53e5190a526856b5d7c54"
  },
  {
    "url": "css/noscript.css",
    "revision": "3bfa77b308a88bcdddda5d546ccb3c70"
  },
  {
    "url": "index.html",
    "revision": "1705b8a5d770b0c857006f4b5553d9d6"
  },
  {
    "url": "js/comments.js",
    "revision": "b95b6c887f4b386a85ea77c952f40359"
  },
  {
    "url": "js/config.js",
    "revision": "b9b2de04560946887aaaafe4e5fd0a49"
  },
  {
    "url": "js/motion.js",
    "revision": "da2a907730cecd010fe567c7376566c9"
  },
  {
    "url": "js/next-boot.js",
    "revision": "a9b1db83345c1d406176f185eecfe87d"
  },
  {
    "url": "js/pjax.js",
    "revision": "b13cf3b4c7af80359dd3d4efccb95eb3"
  },
  {
    "url": "js/sidebar.js",
    "revision": "9195d4009f36c354a93848ff6b0dc604"
  },
  {
    "url": "js/third-party/addtoany.js",
    "revision": "ec6d3a9a2f10af7858040518a703bbd9"
  },
  {
    "url": "js/third-party/analytics/matomo.js",
    "revision": "7eeff11f1e0bc6fa37a4c35988cb7287"
  },
  {
    "url": "js/third-party/fancybox.js",
    "revision": "9cd7a2b62d42b8561951961dba6f54df"
  },
  {
    "url": "js/third-party/math/mathjax.js",
    "revision": "412dd7f0327b41833f7292577946c56b"
  },
  {
    "url": "js/third-party/search/local-search.js",
    "revision": "623674a9fecb7b305c1d23ef0e406866"
  },
  {
    "url": "js/utils.js",
    "revision": "fd2c8c5d4b1cf048c5f079f5c1a442fb"
  },
  {
    "url": "page/2/index.html",
    "revision": "27a483b78345a3702df204166695e226"
  },
  {
    "url": "page/3/index.html",
    "revision": "e982b985548601b5fc777f353e0ce795"
  },
  {
    "url": "page/4/index.html",
    "revision": "24121ff1ddc4280abfb1f3c987fa91e5"
  },
  {
    "url": "posts/1128bacf.html",
    "revision": "c996fb482193184ce420a096fe948f29"
  },
  {
    "url": "posts/1537acf2.html",
    "revision": "9aec2723f0c720f05116905d7a7e395d"
  },
  {
    "url": "posts/175c8d74.html",
    "revision": "0069a9966ff1a2e1fcf8b49d0e518f48"
  },
  {
    "url": "posts/2279e119.html",
    "revision": "0f53fe8da350de883e7c5f8d96fcbd45"
  },
  {
    "url": "posts/2b72e15e.html",
    "revision": "e8a45f0d6d12ff1c2e982c560621bc09"
  },
  {
    "url": "posts/34812bb0.html",
    "revision": "2bf164497ddef2aa19662d7d4e5b790f"
  },
  {
    "url": "posts/39976347.html",
    "revision": "996ba8ee2785769c7c4af07f7df091a7"
  },
  {
    "url": "posts/3a23d7f5.html",
    "revision": "98713ce50fe31d4bae96aeb86dae4fb0"
  },
  {
    "url": "posts/3b542d1c.html",
    "revision": "2918e1951728d136bcfe0d39d415eedf"
  },
  {
    "url": "posts/3d834efa.html",
    "revision": "e7e26d5a5dfd84093505a6b4bd815b4b"
  },
  {
    "url": "posts/45202b01.html",
    "revision": "bea96559dd71e6f8e149f1d25ee1ac14"
  },
  {
    "url": "posts/4b668c47.html",
    "revision": "90ef75a423e5b7d7bc41a70add3807b4"
  },
  {
    "url": "posts/5156546e.html",
    "revision": "26bfc296316cafbecae349c6a254e7e9"
  },
  {
    "url": "posts/51bf9fa7.html",
    "revision": "57663eec1541ea19c65e73fb754ccf6e"
  },
  {
    "url": "posts/556c2443.html",
    "revision": "ed6db2f506789eddd05cff167535e637"
  },
  {
    "url": "posts/7297737e.html",
    "revision": "54f5de721d9fc689d77f1a6022a414f3"
  },
  {
    "url": "posts/73bd0af.html",
    "revision": "e85fdd1e595d27811992ab82b985b731"
  },
  {
    "url": "posts/76850f28.html",
    "revision": "704b02798dd9b2078e6a74aba5b511a6"
  },
  {
    "url": "posts/7ca04377.html",
    "revision": "320f02427462f89f15aeff9dae83503c"
  },
  {
    "url": "posts/8787df53.html",
    "revision": "56e70bf039b2b04169bb1837c5dfabfc"
  },
  {
    "url": "posts/87b92057.html",
    "revision": "0c435bd1f8b63f8510de199f814ff8af"
  },
  {
    "url": "posts/916f4a50.html",
    "revision": "61ba5e5165d4c95b3c8d90a4acdee0e3"
  },
  {
    "url": "posts/9b69c506.html",
    "revision": "9bf7fa144a56804f668d7af719331467"
  },
  {
    "url": "posts/9e2aeba2.html",
    "revision": "5579aab60db0fbc28e79de335ae0bbbc"
  },
  {
    "url": "posts/b2633b2f.html",
    "revision": "b7ac625e2796b03e8e85f90d2cbf2f80"
  },
  {
    "url": "posts/b5fa7dc6.html",
    "revision": "3bbda0605c8c6a747fcfb7ac28a93404"
  },
  {
    "url": "posts/c05c62e8.html",
    "revision": "414f581aeb90fff4a1f011f1f6a6ed84"
  },
  {
    "url": "posts/d4a3be1c.html",
    "revision": "a82135fc1e514d60cf8c957509b5f2b3"
  },
  {
    "url": "posts/d9ae96d3.html",
    "revision": "3965342ef5a288887f3fb58931f4dbbe"
  },
  {
    "url": "posts/e7a7ed06.html",
    "revision": "7d9498a79c1ec0f2e41f76025035b116"
  },
  {
    "url": "posts/fc8787d6.html",
    "revision": "80df4dcedd66bc188e40ac84e81c3a9d"
  },
  {
    "url": "tags/AJAX/index.html",
    "revision": "4ca343bea10c714f30f4c12e5a2695f1"
  },
  {
    "url": "tags/CLRS/index.html",
    "revision": "04247038afdb59747b855d55487f34c2"
  },
  {
    "url": "tags/csp/index.html",
    "revision": "38b6a664bb079b58b6bf8cec9e7d7f47"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "fee224bb7f89cdf345ded46a0a061a28"
  },
  {
    "url": "tags/Hexo/index.html",
    "revision": "86cd2defec2934dad96dcb8684551969"
  },
  {
    "url": "tags/index.html",
    "revision": "1c74bd251e171115b227863ffdfb2945"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "e98d156e9fd94044a48c06ff6f2aa7b8"
  },
  {
    "url": "tags/Jotai/index.html",
    "revision": "225b4cb11a56d8ca6bcacdf5b5a58859"
  },
  {
    "url": "tags/React/index.html",
    "revision": "4cd5a3505b031cad518a20562b1e80fb"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "0bd5481bf3ffd89a75394c5c6aba5881"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "40b1c016caf53cf728e5868a995e2165"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "42e275ebd0b6ba942f6f4485ce8db33b"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "76491f1df016730d5163c82bd26cda43"
  },
  {
    "url": "tools/index.html",
    "revision": "fc14fb26cdef38eec0f0fa1e63c2654e"
  },
  {
    "url": "images/android-chrome-192x192.png",
    "revision": "a8f63488f33b91c11b8375cba6b1088c"
  },
  {
    "url": "images/android-chrome-512x512.png",
    "revision": "a8f63488f33b91c11b8375cba6b1088c"
  },
  {
    "url": "images/apple-touch-icon-next.png",
    "revision": "5bcbd18f4de3fa448e0451b020974c18"
  },
  {
    "url": "images/avatar.gif",
    "revision": "bfe261f101725ead9363904cfcd95968"
  },
  {
    "url": "images/favicon-16x16-next.png",
    "revision": "67571b40a8fa60b6e958359865aadde3"
  },
  {
    "url": "images/favicon-32x32-next.png",
    "revision": "f75654852b07d2ada50958e586a249c8"
  },
  {
    "url": "images/kadoc.jpg",
    "revision": "ee0517f7f8b3f8c5b8ce7fe8436e7f93"
  },
  {
    "url": "images/logo.svg",
    "revision": "0404975033e7fd81273be7fffd15e050"
  },
  {
    "url": "images/new-logo.png",
    "revision": "a8f63488f33b91c11b8375cba6b1088c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute("/**/*.html", workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute("/**/*.{js,css}", workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute("/**/*.{png,jpg,jpeg,gif,webp,svg}", workbox.strategies.cacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({"maxEntries":100,"maxAgeSeconds":604800,"purgeOnQuotaError":false})] }), 'GET');
