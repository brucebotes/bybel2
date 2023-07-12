/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-b1909f40'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "/bybel2/561b0dae.js",
    "revision": "ae8d3ced87c36bdafe727229e8936a62"
  }, {
    "url": "/bybel2/6086c051.js",
    "revision": "72eb000d756f06ec6192bcd2a8e2adc7"
  }, {
    "url": "/bybel2/b2ae35c1.js",
    "revision": "e28437a7eaa198e0bd0b1df66f43e299"
  }, {
    "url": "/bybel2/d2e2d13b.js",
    "revision": "818769922347fb041099473ed943536c"
  }, {
    "url": "/bybel2/dc474c96.js",
    "revision": "6c2b58549bfc56c28a50c720a10e7f69"
  }, {
    "url": "/bybel2/e25bfc50.js",
    "revision": "3d4c86c713f0dee128cddba8c0ea22ca"
  }, {
    "url": "/bybel2/index.html",
    "revision": "e8fc636203317f622f6179a64a269ce5"
  }, {
    "url": "/bybel2/manifest.webmanifest",
    "revision": "7f1b3ba7cd8d063786c3d1980fc4ffd5"
  }, {
    "url": "/bybel2/resources/loader1.css",
    "revision": "8a08a187cf1075631756eb16d24f4521"
  }, {
    "url": "/bybel2/resources/loader2.css",
    "revision": "fea51333c676078f0f1a670439207026"
  }, {
    "url": "/bybel2/resources/loader3.css",
    "revision": "737549dfb065143a2f9dcad7a56491c5"
  }, {
    "url": "/bybel2/resources/roboto-300-400-500.css",
    "revision": "8d10404d2755d737f4f360a77440be6c"
  }, {
    "url": "/bybel2/resources/shoelace/styles/component.styles.js",
    "revision": "312dd4c39d3c43ab268ffd75d328816c"
  }, {
    "url": "/bybel2/resources/shoelace/styles/form-control.styles.js",
    "revision": "1d1c48c0255c9d7cfd2c65735b11428e"
  }, {
    "url": "/bybel2/resources/shoelace/themes/dark.css",
    "revision": "89f989f374b4e8f2b4b8efe76ccb1dc3"
  }, {
    "url": "/bybel2/resources/shoelace/themes/dark.styles.js",
    "revision": "1d9b377611c62bbad60b61d066671850"
  }, {
    "url": "/bybel2/resources/shoelace/themes/light.css",
    "revision": "4d3910c1a8181ef75df91ad104adbea3"
  }, {
    "url": "/bybel2/resources/shoelace/themes/light.styles.js",
    "revision": "7537cfb8c3b9c5418b509d958c3fb99d"
  }], {});
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("/bybel2/index.html")));
  workbox.registerRoute(/polyfills\/*.js$/, new workbox.CacheFirst(), 'GET');
  workbox.registerRoute(/images\/.*$/, new workbox.CacheFirst({
    "cacheName": "images",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 60,
      maxAgeSeconds: 2592000
    })]
  }), 'GET');
  workbox.registerRoute(/resources\/.*$/, new workbox.CacheFirst({
    "cacheName": "resources",
    plugins: [new workbox.ExpirationPlugin({
      maxAgeSeconds: 2592000
    })]
  }), 'GET');

}));
//# sourceMappingURL=sw.js.map
