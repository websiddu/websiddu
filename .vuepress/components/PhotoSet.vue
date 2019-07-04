<template>
  <section class="photo-set" ref="photoset">
    <img
      v-for="img in imgs"
      v-lazy="img.url"
      :key="img.url"
      :alt="img.url"
      :style="{width: `${img.width}`, height: `${img.height}`, margin: `${margin}px`}"
    />
  </section>
</template>

<script>
export default {
  props: ["src"],
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      if (!this.$refs.photoset) return;
      this.contentWidth = this.$refs.photoset.getBoundingClientRect().width;
    }
  },
  data() {
    return {
      contentWidth: 0,
      margin: 4
    };
  },
  computed: {
    imgs() {
      let imgs = JSON.parse(JSON.stringify(this.src));

      imgs.map(img => (img.ratio = img.imgSize.width / img.imgSize.height));
      let minRatio = imgs.reduce(
        (min, p) => (p.ratio < min ? p.ratio : min),
        imgs[0].ratio
      );
      let j = 0;
      imgs.forEach(img => (j += img.ratio / minRatio));
      let c = (this.contentWidth - imgs.length * (this.margin * 2)) / j;

      imgs = imgs.map(img => {
        let width = (c / minRatio) * img.ratio;
        let height = c / minRatio;

        let resize = `w_${Math.ceil(width / 100) * 100 + 50}`;

        if (
          this.contentWidth < 600 &&
          this.$el &&
          !this.$el.parentNode.classList.contains("story")
        ) {
          width = "inherit";
          height = "inherit";
          resize = `w_${Math.ceil(this.contentWidth / 100) * 100 + 50}`;
        }

        let url = img.url.replace("w_100", resize).replace("https://", "//");

        // let ua = window.navigator.userAgent.toLowerCase();

        // if (ua.indexOf("safari") > -1) {
        url = url.replace(".webp", ".jpeg");
        // }

        return {
          url: url,
          width: width + "px",
          height: height + "px",
          margin: this.margin
        };
      });

      return imgs;
    }
  }
};
</script>

<style lang='scss' scoped>
.photo-set {
  overflow: hidden;
  line-height: 0;
  img {
    background-color: rgba(0, 0, 0, 0.2);
  }
}

img[lazy="loaded"] {
  opacity: 0;
  animation-name: fadein;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-direction: normal;
  animation-timing-function: ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
