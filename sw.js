if(!self.define){let e,s={};const c=(c,r)=>(c=new URL(c+".js",r).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,o)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let n={};const l=e=>c(e,i),t={module:{uri:i},exports:n,require:l};s[i]=Promise.all(r.map((e=>t[e]||l(e)))).then((e=>(o(...e),n)))}}define(["./workbox-aebfe784"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"cf213aba.js",revision:"6ba43e84e0f2cd2bc7e46f70b850be81"},{url:"index.html",revision:"634bfd5c667e66f5ecb39c82120edcb3"},{url:"manifest.webmanifest",revision:"1d7e3d5a1586ef379bfe51204c8a68ca"},{url:"resources/shoelace/styles/component.styles.js",revision:"312dd4c39d3c43ab268ffd75d328816c"},{url:"resources/shoelace/styles/form-control.styles.js",revision:"1d1c48c0255c9d7cfd2c65735b11428e"},{url:"resources/shoelace/themes/dark.css",revision:"89f989f374b4e8f2b4b8efe76ccb1dc3"},{url:"resources/shoelace/themes/dark.styles.js",revision:"1d9b377611c62bbad60b61d066671850"},{url:"resources/shoelace/themes/light.css",revision:"4d3910c1a8181ef75df91ad104adbea3"},{url:"resources/shoelace/themes/light.styles.js",revision:"7537cfb8c3b9c5418b509d958c3fb99d"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET"),e.registerRoute(/images\/.*$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/resources\/.*$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxAgeSeconds:2592e3})]}),"GET")}));
