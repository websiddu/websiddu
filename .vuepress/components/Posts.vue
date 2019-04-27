<template>
  <div class="posts" v-if="posts.length">
    <section class="post" v-for="post in posts" :class="post.frontmatter.lang">
      <time class="muted">{{prettyDate(post.frontmatter.date)}}</time>
      <router-link :to="post.path">
        <h3 class="post-title">{{post.frontmatter.title}}</h3>
      </router-link>
      <p>
        {{post.frontmatter.description}}
        <router-link :to="post.path">continue →</router-link>
      </p>
    </section>
  </div>
</template>

<script>
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export default {
  props: ["page"],
  name: "Posts",
  methods: {
    prettyDate(d) {
      const date = new Date(d);
      return `${
        monthNames[date.getMonth()]
      } ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
    }
  },
  computed: {
    posts() {
      let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages
        .filter(x => {
          return x.path.match(new RegExp(`(${currentPage})(?=.*html)`));
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      return posts;
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 6vh;
  .post-title {
    margin: 0;
    margin-bottom: 4px;
    font-size: 24px;
    font-weight: 700;
  }
  p {
    margin: 0;
    text-rendering: optimizeLegibility;
  }
  time {
    color: #888;
    font-size: 0.9rem;
    display: block;
    margin-bottom: 8px;
  }
}
</style>
