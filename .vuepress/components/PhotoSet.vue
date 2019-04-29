<template>
  <section class="photo-set" ref="photoset">
    <img
      v-for="img in imgs"
      v-lazy="img.url"
      :key="img.url"
      :style="{width: `${img.width}px`, height: `${img.height}px`, flexBasis: `${img.width}px;`, margin: `${margin}px`}"
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

        return {
          url: img.url.replace('w_100', 'w_1600'),
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
  display: flex;
  flex-wrap: wrap;
}
</style>
