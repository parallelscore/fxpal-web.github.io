'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5a0dcb482dab3245d4b50dfbc9bef146",
"assets/assets/add_bank.png": "9e9f5c95da04ff9320dfc24fe8a652d0",
"assets/assets/add_icon.png": "1711917bcc1cc4f6173766d3077639ad",
"assets/assets/add_id.png": "ad7329c79146413a606414741d57e1b9",
"assets/assets/app_logo.png": "664a526bdf9b0a9959733c646224c1f1",
"assets/assets/avatar_1.png": "9cd619f7f39a173e819d11f1d6077659",
"assets/assets/avatar_2.png": "70276c4d49619b0396d0fae458e05485",
"assets/assets/avatar_3.png": "523633536bc9101287ccbf7df452d2ea",
"assets/assets/avatar_4.png": "eb435519bc37d40fe1efdd497ea1bd22",
"assets/assets/avatar_5.png": "0b3758adfc2666979dad1471c80adda2",
"assets/assets/avatar_6.png": "ca0b03aaf087ad9a5162832fc37d3ad4",
"assets/assets/avatar_7.png": "143c71e5cc85b8bc44a7228aad66bb49",
"assets/assets/avatar_8.png": "640eea857ce754af18f46b2820b88264",
"assets/assets/avatar_none.png": "c466a6942c8b7bc24f83ede3a2c83e23",
"assets/assets/bank.png": "d10691887eaba8f701e0f0f26762359e",
"assets/assets/bell.png": "72d2f05c1badbc509acc921f6a110202",
"assets/assets/bottom_home.png": "36dba5b3fa3b5a14816e296d3847509e",
"assets/assets/bottom_home_active.png": "52e1fef8aacc559d13464f8de21d54c0",
"assets/assets/bottom_profile.png": "1ca5c4fec066e5143e394c0543e424a0",
"assets/assets/bottom_profile_active.png": "e08a4ec8990bd7913460e76a859275c1",
"assets/assets/bottom_settings.png": "8f1a863f5c3b9ec0a22a15ecec886449",
"assets/assets/bottom_settings_active.png": "f62bc96a038b9df7b231d893b83aa278",
"assets/assets/bottom_trades.png": "7c5d3613e14ecbc4fdb0c4f46d215924",
"assets/assets/bottom_trades_active.png": "1d5a2d52ed94fea8022363d5993026cb",
"assets/assets/card_bg.png": "ce3041d7a1fdceab1c3807605b6f83df",
"assets/assets/china.png": "4d363dfa76038b61a1aada3b5f2f7dd6",
"assets/assets/delete.png": "2f6fd8299454e2cdc40f93201aa32d65",
"assets/assets/dots.gif": "0a7630c348def8f1189c6616ad266d91",
"assets/assets/dots_min.gif": "7d6c34549282169eff1bd125ce303270",
"assets/assets/dummy_user.png": "33e4408a33b4acd97a68209fa0a4c519",
"assets/assets/edit_icon.png": "1b79cdae7e3583bdc3ebdaae36483640",
"assets/assets/english.png": "53ad12a9dd0ca1be684f4dc36ac6e60a",
"assets/assets/exchange_d.png": "e2ee0f427282327fe81a1975f18310ed",
"assets/assets/exchange_emoji.png": "ee0f5f1ffa4d7cca5f08c3efffb6dc91",
"assets/assets/exchange_icon.png": "8e71cdc0a6e1aac8e327006203143b25",
"assets/assets/exchange_line.png": "3e08a5c6410818672cecab685f5c4a87",
"assets/assets/exchange_line2.png": "837bbc32a97e3510500ef84fe377f72d",
"assets/assets/exchange_summary.png": "0f63a0ee88276f3ec82a6d46896e4aa3",
"assets/assets/facebook.png": "adaec57db88fc1fc267bc3839644cc40",
"assets/assets/french.png": "f4e6cc7efc84806a7e5f8c244b607027",
"assets/assets/gift.gif": "f1ad710666eeb760cc0893e8c3d70729",
"assets/assets/google.png": "7d0b81f98b5cb4cf2109525733e56e5f",
"assets/assets/hand_stop.png": "1181582bdf26ef5756ec682ec70d39d6",
"assets/assets/id_card.png": "c3b9612453fd9ccc8672cc5f8f9c8710",
"assets/assets/IntroOne.png": "3d8b8a4f24633c320315e914e16fa005",
"assets/assets/intro_image.png": "0ebc9c85e6e57f8c33f0dad3dab764c1",
"assets/assets/japanese.png": "00cf5dbebeac3b108de0e560a0424bf7",
"assets/assets/korea.png": "8d242a1fab2220b222c7a22dd92ce8d0",
"assets/assets/main_icon.png": "d48cdcbbeebbbd3f56add2923d568a8d",
"assets/assets/main_loader.gif": "ee929adc70a45ab966df9e5dda1bd5f5",
"assets/assets/menu_bar.png": "f1460ffb9d09c2337cdc0ae07500a2ac",
"assets/assets/ngn_flag.png": "4efa239224fdd4856d8a3b5792b2acbb",
"assets/assets/nicaragua.png": "52ca864386d0c5efc6502ed387157a0b",
"assets/assets/notif_four.png": "bf3a5082898804df892254b075706a76",
"assets/assets/notif_one.png": "7b62dd9891e8f1a0f6b7ea4c70d47ac8",
"assets/assets/notif_three.png": "a0dcd1b3d7dee9a53b007c0247462319",
"assets/assets/notif_two.png": "bf3a5082898804df892254b075706a76",
"assets/assets/plus.png": "b21cc8db0c68b22bd4684cd3215f1df0",
"assets/assets/portuguese.png": "058b619a042fa5aef36de6c3a4aa711f",
"assets/assets/profile_bank.png": "14f8caf409e9ed1f2b7dc0afbf8431fa",
"assets/assets/profile_eye.png": "523bed0babbcb32029c187e732a68817",
"assets/assets/profile_id.png": "89c9848712757918ff4da4597fb5566f",
"assets/assets/profile_lang.png": "64c88a8246f66780ef6e3ef1c33c6cfb",
"assets/assets/profile_pic.png": "cf59057755846154361bc92ddce39bfb",
"assets/assets/profile_profile.png": "159b4ee89e5392e9b2986a9fa4969a9f",
"assets/assets/rocket.png": "03b63cb9178ad823877cbf89793ab572",
"assets/assets/russia.png": "6d3a211ffbe648ca458cc3fc2afceac6",
"assets/assets/search_icon.png": "15812d63724776625d400c95b74699f6",
"assets/assets/set_bio.png": "0c4abb05b978040830337b7046f5068b",
"assets/assets/set_care.png": "97c0fdddfc4682915a83c9b24350f0c9",
"assets/assets/set_dark.png": "8d4fe8a05d3bbf5e04d6d7168342f0be",
"assets/assets/set_hand.png": "c54baa8e0c7c92f4a67d723208b00c16",
"assets/assets/set_logout.png": "81daf5e42a5795cc137bf38629b47f62",
"assets/assets/set_notifs.png": "05b0feaddcfc4397007379aecbf6b63f",
"assets/assets/success.png": "944ac5bd8466df55c6c53a2e077f2b19",
"assets/assets/topup_d.png": "3143b4d9a6a293322ac12b26db020bd6",
"assets/assets/transfer_d.png": "93f983b893ccbf9cdb49d6edef847fd9",
"assets/assets/upload.png": "82c22e9dbfbcf0f9e2844f77ae98a316",
"assets/assets/usd_balance.png": "597abd9232f4523f182587fe393560bf",
"assets/assets/verify_id.png": "c5547a2ec07a852c022aaf9fdf21d525",
"assets/assets/vietnamese.png": "1103b0b796bd7735f1f259d7e5dad2b6",
"assets/assets/withdraw_d.png": "9d2b9ef722fbc3a153b5bcd2f85353cb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "4bc8ad390b39d0bb89f24c62cec3f438",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "50b1814a9b5b60f8ee85d4b1ded96ba0",
"/": "50b1814a9b5b60f8ee85d4b1ded96ba0",
"main.dart.js": "a9380e8a602f88bceb3978677a832af6",
"manifest.json": "252283bb86628d30550dfed4ce49768c",
"version.json": "46cc883303842a45b69a52fa4031d1c4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
