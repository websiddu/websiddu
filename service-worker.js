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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5174b92fd2dc8b5aa5ac26ff6da4d455"
  },
  {
    "url": "about.html",
    "revision": "fe7b00445ad2e048fc8bc16509cc9ad1"
  },
  {
    "url": "assets/css/0.styles.6fe59e33.css",
    "revision": "de3da3a6b0bbc30352282a07301f20d6"
  },
  {
    "url": "assets/js/10.78463937.js",
    "revision": "f822385f8e69dbf9d9186d146016c6a0"
  },
  {
    "url": "assets/js/11.166e2cac.js",
    "revision": "23685bd14e0b24b0097243bcc49f38da"
  },
  {
    "url": "assets/js/12.679a44d5.js",
    "revision": "2068a1f97ef3f78e646842a14214227c"
  },
  {
    "url": "assets/js/13.ddeaa070.js",
    "revision": "e530179b069e10275ee1475961f1e93f"
  },
  {
    "url": "assets/js/14.63f60329.js",
    "revision": "a9406b9426eba6ff34e8063615b8c9f3"
  },
  {
    "url": "assets/js/15.c43e3758.js",
    "revision": "545a873a28aec9405cc04ef30d25764f"
  },
  {
    "url": "assets/js/16.c3b4e995.js",
    "revision": "4121efe8e9f3a57bdfda51bca130b064"
  },
  {
    "url": "assets/js/17.80334dcc.js",
    "revision": "991ac0b761f8cf09e09df21ab8556ee6"
  },
  {
    "url": "assets/js/18.602b73d8.js",
    "revision": "7e20db635a1baad929426a02a3fa1763"
  },
  {
    "url": "assets/js/19.d0b6f1ed.js",
    "revision": "e5542cba785ca0626835b4c561203c3e"
  },
  {
    "url": "assets/js/2.faa5509e.js",
    "revision": "270af68ffabc910c13dc8426d589c4ab"
  },
  {
    "url": "assets/js/20.e440b549.js",
    "revision": "cfe6af56413e667fda3cb09b04a30bf6"
  },
  {
    "url": "assets/js/21.8754582b.js",
    "revision": "6197d3983f2feaba717db4caa37599c4"
  },
  {
    "url": "assets/js/22.d5bd860d.js",
    "revision": "db73906dc8c3b69fe47465d9dd70c669"
  },
  {
    "url": "assets/js/23.2ab19d7f.js",
    "revision": "23b8c840d14c089a7000e854e2a12cda"
  },
  {
    "url": "assets/js/24.3c4fbd65.js",
    "revision": "29b142c88b99add1189d34fe958c1b39"
  },
  {
    "url": "assets/js/25.f5e20f80.js",
    "revision": "318aeb5e2f5e51fa6bb2c214a2ac3ec5"
  },
  {
    "url": "assets/js/26.30ae31d3.js",
    "revision": "470b5656ebf81a688f40943399bca89c"
  },
  {
    "url": "assets/js/27.ef46a43e.js",
    "revision": "6c94d1aae45ec3f8adaed04ace0c64f7"
  },
  {
    "url": "assets/js/28.f4059904.js",
    "revision": "2a280530219c54b06c4880b75d92d569"
  },
  {
    "url": "assets/js/29.2d820bbe.js",
    "revision": "bbd198a78a2f9f861ef36ee843efb414"
  },
  {
    "url": "assets/js/3.44bbc4d4.js",
    "revision": "8c440296b69effae8580d52855624a95"
  },
  {
    "url": "assets/js/30.b03d48ca.js",
    "revision": "a4feb6ca1922b63229a5fdb83dedbef3"
  },
  {
    "url": "assets/js/31.ccdb97fb.js",
    "revision": "f9e274ca0e108422468f40e13ea73e24"
  },
  {
    "url": "assets/js/32.9edf4337.js",
    "revision": "7ac99407fc7c9b57e7007c9db6327dfb"
  },
  {
    "url": "assets/js/33.ca1c709b.js",
    "revision": "84f8b13ad397837cd9916df878f3deca"
  },
  {
    "url": "assets/js/34.9fe29e1f.js",
    "revision": "5035879a4df9acfa478e1147ed82e6a1"
  },
  {
    "url": "assets/js/35.ba935731.js",
    "revision": "fad5bf28677f17c68bea8ebee793bb2f"
  },
  {
    "url": "assets/js/36.c09c97ae.js",
    "revision": "b2c93d94bcc407a0d98d3c87ffa1bc61"
  },
  {
    "url": "assets/js/37.9d4a09b7.js",
    "revision": "813746f263969ee1c6023f3345c4f6f4"
  },
  {
    "url": "assets/js/38.ab13e2a6.js",
    "revision": "dea7a0ca1319d478096baf47adfc3113"
  },
  {
    "url": "assets/js/39.816342f5.js",
    "revision": "0c4f8024366338a39d8f717ea5b44afb"
  },
  {
    "url": "assets/js/4.46878d81.js",
    "revision": "db77fc32790a92568ab826976f58dd53"
  },
  {
    "url": "assets/js/40.ca699137.js",
    "revision": "a7174266d96ecff25a5f11f7c23d99e3"
  },
  {
    "url": "assets/js/41.57498da7.js",
    "revision": "1ff6944646ebab00ed56a2f34918333b"
  },
  {
    "url": "assets/js/42.21e18e46.js",
    "revision": "e59747a824ed715847cbd6d4047303eb"
  },
  {
    "url": "assets/js/43.156bd200.js",
    "revision": "e70ca03fbf463cc5965d4ebe57b7e427"
  },
  {
    "url": "assets/js/44.8c035e28.js",
    "revision": "f5a50213754a9875e5e07632b10cf406"
  },
  {
    "url": "assets/js/45.03ae0f48.js",
    "revision": "e27b672ca06b2783d008b9a74bfe4edc"
  },
  {
    "url": "assets/js/46.a3932bbb.js",
    "revision": "81c5d30e4e8f99a35c59de024d819198"
  },
  {
    "url": "assets/js/47.9dc47ad7.js",
    "revision": "f1b43dab3e190d330d9f903ab5f6c66d"
  },
  {
    "url": "assets/js/48.159ae1d9.js",
    "revision": "dbabb1eea44a51ffaa9ac2396b731e6c"
  },
  {
    "url": "assets/js/49.a8cf396b.js",
    "revision": "6b975a27018ebd77236a19e3e7d77dca"
  },
  {
    "url": "assets/js/5.55e428b3.js",
    "revision": "d0aa93360e93401255742328d6ac1e2e"
  },
  {
    "url": "assets/js/50.e4c87a6b.js",
    "revision": "7cb1902b36382204f776f3dd65cc8306"
  },
  {
    "url": "assets/js/51.d559ba25.js",
    "revision": "886d5f834ced2b8b750feb5e7d34ce66"
  },
  {
    "url": "assets/js/52.7d0f2557.js",
    "revision": "b0041273965d7ea55604af9f7993a572"
  },
  {
    "url": "assets/js/53.3c5178c1.js",
    "revision": "90c9bb894954fd170abf1e48a32f8bfc"
  },
  {
    "url": "assets/js/54.ebd4744b.js",
    "revision": "6a26f00dd1be89e188d1612982f53a1d"
  },
  {
    "url": "assets/js/55.11d68665.js",
    "revision": "736d8941a2e944024c6fb7e22d9f2b79"
  },
  {
    "url": "assets/js/56.9ffff2a2.js",
    "revision": "dff16db42956a54174516e54a8210d39"
  },
  {
    "url": "assets/js/6.c032651f.js",
    "revision": "f5956f75dfb75e2689c665911e6c0162"
  },
  {
    "url": "assets/js/7.e53105dd.js",
    "revision": "3c2f0dd11046cd69ed9535bb51a4d9ae"
  },
  {
    "url": "assets/js/8.ad1662c3.js",
    "revision": "113da9e68bc937f55cf2e49c528a25c7"
  },
  {
    "url": "assets/js/9.015f938d.js",
    "revision": "8304b62a44f11fd023757a4ba704c89d"
  },
  {
    "url": "assets/js/app.da7058d1.js",
    "revision": "7eda99ec2abb72ed20da451596d017b2"
  },
  {
    "url": "blog/designing-for-color-blindness.html",
    "revision": "7d0270b3a9c8a0bd35d3f39b96d39fe7"
  },
  {
    "url": "blog/elegant-typefaces-for-the-web.html",
    "revision": "852e3da3e3943a5a81a4df17e8d8cbd3"
  },
  {
    "url": "blog/email-that-paved-my-path.html",
    "revision": "767dae12910c1da913f6b1dc3fe3c4eb"
  },
  {
    "url": "blog/how-i-implemented-accessibility-to-website.html",
    "revision": "19e0ef018ff972d313d3e74a13378481"
  },
  {
    "url": "blog/how-to-design-a-ux-portfolio-website-part1.html",
    "revision": "45703ba51c2d41982db2f708ef12253b"
  },
  {
    "url": "blog/how-to-make-a-bar-chart-using-vue-js.html",
    "revision": "7321e85dd4a95d31aedbbbfcba43596c"
  },
  {
    "url": "blog/how-to-make-a-pie-chart-using-vue-js.html",
    "revision": "0210ee74aca63fd51ad894c2dfccdebf"
  },
  {
    "url": "blog/index.html",
    "revision": "5c8a2270a0d194094feb649ecbf0dcbc"
  },
  {
    "url": "blog/integrating-your-node-app-with-uw-saml.html",
    "revision": "687677d16b5202327e4b2ee98c4fd99c"
  },
  {
    "url": "blog/morning-thoughts.html",
    "revision": "bcba22b881ab576f8a3acd31147da5c1"
  },
  {
    "url": "blog/my-website-is-build-on-open-source.html",
    "revision": "6c8f659788d7143f8861049d4539c467"
  },
  {
    "url": "blog/questions-i-want-answers-for.html",
    "revision": "9d310873d08c8e0a44dd2911f2222800"
  },
  {
    "url": "blog/sync-data-from-firebase-to-google-sheets.html",
    "revision": "15f559b9eb74b5491c632012ade00237"
  },
  {
    "url": "blog/sync-google-sheets-to-firebase.html",
    "revision": "9cfb5bf8366438d71d0262ce1617df8e"
  },
  {
    "url": "blog/నా-సంతకం-తెలుగు-లో-మరి-మీది.html",
    "revision": "b97faeee134ea3d27c45b676099976a1"
  },
  {
    "url": "fonts/Inter-Medium.eot",
    "revision": "e09f71cb89d0f9761d47de9eff488d1c"
  },
  {
    "url": "fonts/Inter-Medium.svg",
    "revision": "7719a1342810410ee8b2b1ed04ff98a0"
  },
  {
    "url": "fonts/Inter-Medium.ttf",
    "revision": "f1c182f9e72eb8f1cb4db1bac71bada3"
  },
  {
    "url": "fonts/Inter-Medium.woff",
    "revision": "2ebd96fd38120d26e717bdc5d4dda373"
  },
  {
    "url": "fonts/Inter-Regular.eot",
    "revision": "345c9b7990a1b1eb86cd762fab8ae020"
  },
  {
    "url": "fonts/Inter-Regular.svg",
    "revision": "e2f31a62b1f6aaf50076bd4070337ddf"
  },
  {
    "url": "fonts/Inter-Regular.ttf",
    "revision": "73d8288d71d30466d544864c221c002c"
  },
  {
    "url": "fonts/Inter-Regular.woff",
    "revision": "883ac7edba9e1b623c592d7cdbf7768e"
  },
  {
    "url": "fonts/Inter-SemiBold.eot",
    "revision": "a97d2b84b288f05ebdd6e0c2f71d7f3c"
  },
  {
    "url": "fonts/Inter-SemiBold.svg",
    "revision": "43ad399470b6a9a110d028f30332ea96"
  },
  {
    "url": "fonts/Inter-SemiBold.ttf",
    "revision": "d01e01039cecd06b712043dc7e06f278"
  },
  {
    "url": "fonts/Inter-SemiBold.woff",
    "revision": "73aa1125ae9b742c1221d8943fe33355"
  },
  {
    "url": "img/blog/12/perview-1.png",
    "revision": "718d39f1000529993ab52779b15febd1"
  },
  {
    "url": "img/blog/12/preview-2.png",
    "revision": "b999bbd1f9a137cc116a0abc3d96ea97"
  },
  {
    "url": "img/blog/12/preview-3.png",
    "revision": "41329a6804c4cbe383d534ecb4442d8a"
  },
  {
    "url": "img/blog/12/preview-4.png",
    "revision": "7cdcd69d16d89f0edc9cf52053c5e4c2"
  },
  {
    "url": "img/blog/12/preview-5.png",
    "revision": "682685270508abc06e054169efa601a9"
  },
  {
    "url": "img/blog/12/structure.png",
    "revision": "1caf65249fc26c1bd3d5b51e081d97dd"
  },
  {
    "url": "img/blog/13/demo.gif",
    "revision": "08d7ed131e9ff5099d30c6b780da052d"
  },
  {
    "url": "img/chart.png",
    "revision": "4365c8ed9ba48e81b6ff5463fc3d77cd"
  },
  {
    "url": "img/logo.new.svg",
    "revision": "1c93cb4535ada1d97805b3a3ac39c9d9"
  },
  {
    "url": "img/logo.svg",
    "revision": "0c310e627fef3ff305967d919caccb2b"
  },
  {
    "url": "img/logos/apple-touch-icon-152x152.png",
    "revision": "8e5c65a6cb813a1c508499a2ee74b7aa"
  },
  {
    "url": "img/logos/msapplication-icon-144x144.png",
    "revision": "2c17fd8aea8ee8a8bee5a44cba1c31df"
  },
  {
    "url": "img/logos/safari-pinned-tab.svg",
    "revision": "388911bd99ab74d569822550cdc6004e"
  },
  {
    "url": "img/unicorn/1.png",
    "revision": "f1ea4003938194d82c4b2391e38db10c"
  },
  {
    "url": "img/unicorn/2.png",
    "revision": "ca291c915b99d7d2a8a984f1c9fa0b94"
  },
  {
    "url": "img/unicorn/3.png",
    "revision": "3567877e8b26e492d6cda86823719e07"
  },
  {
    "url": "img/unicorn/4.png",
    "revision": "595dd79ddbe34472c16716ad0e75ffb0"
  },
  {
    "url": "img/unicorn/5.png",
    "revision": "c2eddb0dc3f72dd4b6620f996ec16f54"
  },
  {
    "url": "img/unicorn/6.png",
    "revision": "bbb59ca0111150d274adc959950d501d"
  },
  {
    "url": "img/unicorn/7.png",
    "revision": "aa7e8761599c4e3a82ec0b628c621bec"
  },
  {
    "url": "index.html",
    "revision": "b27682b4704322a069e28c6fcc882025"
  },
  {
    "url": "photos/003-point-reyes.html",
    "revision": "fcd6cac42a6820bbc4a70c17431dbc71"
  },
  {
    "url": "photos/004-los-angeles.html",
    "revision": "0edb297004674fe602aa042dc670999a"
  },
  {
    "url": "photos/17-mile-drive.html",
    "revision": "a17ddc0370484fd448234c99dddd115a"
  },
  {
    "url": "photos/best-of-best.html",
    "revision": "0f4f16a77f49c1af31207841cfc0420a"
  },
  {
    "url": "photos/california-route-one.html",
    "revision": "463d4ed686bd4d55789c9a479a3d9aa0"
  },
  {
    "url": "photos/cats.html",
    "revision": "1674f092353873a123589a0362742483"
  },
  {
    "url": "photos/hearst-castle.html",
    "revision": "ea8b9f9092d64fe4f09be961067c191b"
  },
  {
    "url": "photos/index.html",
    "revision": "f4a2691af120e2d379f0d90caea9213f"
  },
  {
    "url": "photos/istanbul.html",
    "revision": "63096536612ef7c88eb983c276f35a63"
  },
  {
    "url": "photos/napa-valley.html",
    "revision": "c874c78f37bd3d53d8d44ece6e874af4"
  },
  {
    "url": "photos/new-york.html",
    "revision": "bb5fb639aa15990d37998b20dbd80c9f"
  },
  {
    "url": "photos/portland.html",
    "revision": "30395c2397b0fa84943ff498149df929"
  },
  {
    "url": "photos/san-diego-zoo.html",
    "revision": "227b836cb527a650ab5d85735946f936"
  },
  {
    "url": "photos/shanghai.html",
    "revision": "f01d5a325e5550679deb368ba329837c"
  },
  {
    "url": "photos/turkey.html",
    "revision": "9ddc0583f8e842ad2df2c21e14defe12"
  },
  {
    "url": "photos/yosemite.html",
    "revision": "2d8cb71e949cd312ca3f6c82deeb58fe"
  },
  {
    "url": "projects.html",
    "revision": "cc6a558f53bc406af66bc076ea1a6278"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
