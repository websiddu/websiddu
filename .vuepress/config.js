const glob = require("glob");
const container = require("markdown-it-container");
const probe = require("probe-image-size");
const request = require("sync-request");

// UA - 88629726 - 1;

const autometa_options = {
  author: {
    name: "Siddhartha Gudipati",
    twitter: "websiddu",
  },
  site: {
    name: "Siddhartha Gudipati",
    twitter: "websiddu",
  },
  canonical_base: "https://websiddu.com",
};

const feed_options = {
  canonical_base: "https://websiddu.com",
  count: 1000,
};

const ga_options = {
  ga: "UA-88629726-1",
};

module.exports = {
  port: 8089,
  plugins: [
    "@vuepress/nprogress",
    "@vuepress/last-updated",
    "vuepress-plugin-reading-time",
    "disqus",
    ["@vuepress/pwa", { serviceWorker: true, updatePopup: true }],
    ["@vuepress/google-analytics", ga_options],
    ["feed", feed_options],
    ["autometa", autometa_options],
    [
      "container",
      {
        type: "story",
        before: (info) => {
          return `<div class="story">`;
        },
        after: "</div>",
      },
    ],
  ],
  markdown: {
    linkify: true,
  },
  extendMarkdown(md) {
    const type = "photoset";

    const render = (tokens, i) => {
      const m = tokens[i].info.trim().match(/^photoset\s+(.*)$/);

      if (tokens[i].nesting === 1) {
        const info = tokens[i].info
          .trim()
          .slice(type.length)
          .trim();

        let images = info.split(" ");
        const imageArr = [];

        images.map((img) => {
          const imgURL = `https://res.cloudinary.com/websiddu/image/upload/c_scale,w_100/photos/${img}.webp`;
          const imgData = request("GET", imgURL);
          let body = imgData.body;
          if (typeof body == "string") {
            body = Buffer.from(imgData.body, "utf8");
          }
          let imgSize = probe.sync(body);
          imageArr.push({
            url: imgURL,
            imgSize,
          });
        });

        let html = ``;

        imageArr.forEach((e) => {
          html =
            html +
            `<img class="photo" src="${e.url}"
              height="${e.imgSize.height}px"
              width="${e.imgSize.width}px" />`;
        });

        return `<PhotoSet class="photoset" :src='${JSON.stringify(imageArr)}'>`;
      } else {
        return `</PhotoSet>`;
      }
    };

    const validate = (params) => {
      return params.trim().match(/^photoset\s+(.*)$/);
    };

    md.use(container, type, { render: render });
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],

    ["link", { rel: "icon", href: "/img/logo.svg" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/img/logos/apple-touch-icon-152x152.png",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/img/logos/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/img/logos/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
  title: "Siddhartha Gudipati",
  themeConfig: {
    logo: "/img/logo.svg",
    title: "Siddhartha Gudipati",
    search: false,
    nextLinks: true,
    prevLinks: true,
    sidebar: {
      "/blog": glob.sync("blog/posts/**/*.md").map((f) => "/" + f),
      "/": false,
    },
    nav: [
      {
        text: "Home",
        link: "/",
        title: "Home — Siddhartha Gudipati",
      },
      {
        text: "Articles",
        link: "/blog/",
      },
      {
        text: "Photos",
        link: "/photos/",
      },
      {
        text: "Projects",
        link: "/projects.html",
      },
      {
        text: "About",
        link: "/about.html",
      },
    ],
  },
};
