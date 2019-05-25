import VueLazyload from "vue-lazyload";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
  Vue.use(VueLazyload);

  Vue.mixin({
    computed: {
      $title() {
        let type = this.$page.relativePath.split("/")[0];

        return type == "blog"
          ? this.$page.title
          : `${this.$page.title} — ${this.$siteTitle}`;
      }
    }
  });
};
