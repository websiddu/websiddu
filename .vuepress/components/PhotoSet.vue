<template>
  <section class="photo-set" ref="photoset">
    <img
      v-for="img in imgs"
      v-lazy="img.url"
      :key="img.url"
      :alt="img.url"
      :style="{width: `${img.width}`, height: `${img.height}`, margin: `${margin}px`}"
    >
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
      console.log(this.contentWidth);
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
      let imgSize = "w_1600";

      if (this.contentWidth < 800) {
        imgSize = "w_800";
      }

      imgs = imgs.map(img => {
        let width = `${(c / minRatio) * img.ratio}px`;
        let height = `${c / minRatio}px`;

        console.log(this.$el);

        if (
          this.contentWidth < 600 &&
          this.$el &&
          !this.$el.parentNode.classList.contains("story")
        ) {
          width = "inherit";
          height = "inherit";
        }

        return {
          url: img.url.replace("w_100", imgSize),
          width: width,
          height: height,
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
}
</style>
