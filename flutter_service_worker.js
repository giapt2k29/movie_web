'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f49a97c3dbe034ddf7e8701c9315650c",
".git/config": "77771436f515f18285b1d62ba6a5be54",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4c1743c61a84264905e7cb1144eb5198",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ff3715ec07c29f29bd346984f6fbf08f",
".git/logs/refs/heads/gh-pages": "ff3715ec07c29f29bd346984f6fbf08f",
".git/logs/refs/remotes/origin/gh-pages": "1d6843fd4e1150b5d1eb506b88cf65d8",
".git/objects/04/64b221cf5be01c53692019a9a18df98ba3a4d5": "495ee6db1f5689da91f21ab6b77ef078",
".git/objects/04/d53ed1dfe7f1a97ebbb189bba6e798c094e3ff": "9e32f03e77e675be6dcc0984eb755df4",
".git/objects/0c/3bc08b49ebd7efa919e902bbca7b745d5d0589": "9bc719894fc42b47af665bc4f3c43a25",
".git/objects/11/cc4b3a02d97fb7e528a01d4467de8509e8172a": "4d3a8f1a31fe4c67d8c0003a82fc7f2f",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/18/d59d86bf97449c15e9c96991abe92caf3aff3c": "ab9f616f563bfaa02551ba5e3f5938f1",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2c/6cea48581978980e4dcf26cacb0399b8f8f19f": "8ff9114d377923d7b0cb8e48f287dc07",
".git/objects/2d/6c0ba36ddf7ac94733cb1ca90d49b2f4869d2a": "b92712d4c5d7db13c7b17106cd81464a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/4bd165de960920c81ec21d2443b723bf79b457": "032967a6864bce510cfb3e10b5b43bfe",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/4f1b9776303101d99bdf958bccc95143352100": "f042ee01a9ae5f4890f5305e80fb7f40",
".git/objects/43/35917d4910b2bb79fef96427f67a684a630c0e": "f28189c305ec6e84a95189b88bbefc4c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/53/91d48f5f848d9514ad090463607243a661d928": "a5e4381afb52fb985a411d4249334268",
".git/objects/56/2f94377bce84169b3a76dd3d829a964e9cb14f": "35df49b761db6f9aa7477c6d250b9441",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/c9800cb25c238e66054c12d48341dd57936639": "2dfb5b1bc6bb8a3bda458d7bdbaebab9",
".git/objects/66/9fbb5ccf1a319b956808e021fdd9a3f170c560": "3978550a492191b86ee34414be582d88",
".git/objects/68/f61196dc2552b7a9122ce615cb113d31b4d628": "c0f2651ce354ef0225c89a95dc754ae9",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/75/6e663660af2bd8904a2e9b949aa6bfa554f51a": "c418f22f5b2357e8db0d3408cde0272c",
".git/objects/7f/a9d93a3f673de21b91c42e32def6497d042d74": "13c2091b110c34b8d7db27d67199dcec",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/88/8429095b66460657cfe92a14fb2bb401b90be1": "6cffe01b570928c6294073518c786a9e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/f9c66bb145aa3d739fbc06951e1ab3c2e981bd": "7cec059126b3d067a34477c6f26d0280",
".git/objects/8c/0c499c38e0a9e82ba3b2264f82a4e0cd17e220": "d91b919d7b81f2b17efd86e0efa13309",
".git/objects/8d/fc7125b35e0f0fd4be1987f9b383873493da90": "991bb177c37eb5c27b37cd98c8272999",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/bd453c422ec7665c4edb6190dd03b4db00b328": "6821a0bb741a131bd8341a297d294bde",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/c6a68f79c96eb41dd84bc494dfccc19263aa91": "5f2d37de64b75143c1f96a7b61a628f4",
".git/objects/99/9d1013aedd0456a607615f9e6ba29a77f61506": "2466cccce9dddc403a439397734f30dc",
".git/objects/9c/8108f6948fcd59945cb864fa413d9c7ad20baa": "5dc008ba0e1becd60a4d2f5ad056af03",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ac/470dc571c2b31ae93dfa6a8882506c9751b8d4": "a7d2589a075a47490ba2c69e23a20632",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b0/b29d33b3818faaed7049b51905cca2fa2af1ec": "0599e0204e2a426792ab52d36128361e",
".git/objects/b1/82f35d76ffab9a96832709810a782b87c201a0": "8e42bc66def280b0d79c1e9c5fd25316",
".git/objects/b1/cc5c554a036b58387db6b5c33522d81f2d9729": "5aaa7cfb09469db11a44067b02367ead",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/c29cd94136314c10718eb02f58c88ec9216436": "33ef40bdd8994115e6306840622bc466",
".git/objects/c0/b80defc1d7e2f5eda7f2fe96fce4abd57ca625": "78512db9c825925fb30ea667083e68ea",
".git/objects/c1/7228a7486e28cb586007d792be6de2289e02f0": "37936c0e72871fc7024f1bca5a48a22c",
".git/objects/c5/0c5b301a511a288fbc8fe9d4135a03ed541c72": "f3e5221ba7f0a206d3ab270ea2a4304b",
".git/objects/c5/f966ff5a7953a645e99872dc95920671afdc00": "18b54911d2407019e782aadfdbb5ee6f",
".git/objects/c9/d1801a2c4918ab5358fa1419af65d01016ffae": "8f7be143228ee9e8d4c0fa0b909888c3",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/9cd2b40a794830d5e42acd1beb466092966dca": "cd16b25b5a14ef3b3a935dc0757990b4",
".git/objects/d9/e4c8c6bd0747fc7256cdd53aeca663cb7d2259": "b8e726bc0765d774b4022892410c3d4b",
".git/objects/e7/4461153c8f8cf1963ccd76d319e7a6affe8708": "1ccf1a5faf5f2f73a1b76ee8aa345ae5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/ff/b9d9a0a1d6e98adfa36d8a2b819476efde2715": "8ce47e5f233c20002445ff01e28c8498",
".git/refs/heads/gh-pages": "eacf76d801e49ac743e4b689cb277dc5",
".git/refs/remotes/origin/gh-pages": "eacf76d801e49ac743e4b689cb277dc5",
"assets/AssetManifest.bin": "31039ff5b35b9613fe6b8316c64f7c3c",
"assets/AssetManifest.bin.json": "3301189ac040d25f706d7567d765fa92",
"assets/AssetManifest.json": "6a4d5bebdb631ddd9e297b470f0d4c06",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8a6819e897b890ff632ff1273cb36c1b",
"assets/img/home.png": "37a2a2403e1242c19b15134b8b0169e2",
"assets/img/menu.png": "287d2b9b663799c221a9de098ec95c98",
"assets/img/play-button.png": "b8eab3ad3088cccf73239831eb674cf1",
"assets/img/Your-Name-Banner.jpg": "952f9e1634ebca34a493aa859553be0d",
"assets/NOTICES": "d2c1eefcd21271690cf116b94a8fa7a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "1a117a5a38acc5d5500b368df1909d97",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2496c9bb5f8205a2c5360d36f6ffd26c",
"/": "2496c9bb5f8205a2c5360d36f6ffd26c",
"main.dart.js": "42a0bd68749c42fd8ea9d5587da9de0b",
"manifest.json": "43457e9a3acfa430c842c6e1320a8b79",
"version.json": "f6005f98b7ddc427d341bcd483952e74"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
