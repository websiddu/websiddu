const container = require("markdown-it-container");
const probe = require("probe-image-size");
const request = require("sync-request");

module.exports = {
  port: 8089,

  plugins: [
    "@vuepress/last-updated",
    "vuepress-plugin-reading-time",
    [
      "container",
      {
        type: "story",
        before: info => {
          return `<div class="story">`;
        },
        after: "</div>"
      }
    ]
  ],
  markdown: {
    linkify: true
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

        images.map(img => {
          const imgURL = `http://res.cloudinary.com/websiddu/image/upload/c_scale,w_1600/photos/${img}.webp`;
          const imgData = request("GET", imgURL);
          let body = imgData.body;
          if (typeof body == "string") {
            body = Buffer.from(imgData.body, "utf8");
          }
          let imgSize = probe.sync(body);
          imageArr.push({
            url: imgURL,
            imgSize
          });
        });

        let html = ``;

        imageArr.forEach(e => {
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

    const validate = params => {
      return params.trim().match(/^photoset\s+(.*)$/);
    };

    md.use(container, type, { render: render });
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ]
  ],
  title: "",
  themeConfig: {
    logo: "/img/logo.svg",
    search: false,
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Blog",
        link: "/blog/"
      },
      {
        text: "Photos",
        link: "/photos/"
      },
      {
        text: "Cook",
        link: "/cook/"
      },
      {
        text: "About",
        link: "/about/"
      }
    ]
  }
};
