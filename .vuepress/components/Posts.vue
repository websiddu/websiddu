<template>
  <div class="posts" v-if="posts.length" :class="[page, size]">
    <template v-if="page == 'blog'">
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
    </template>
    <template v-if="page == 'photos'">
      <router-link :to="post.path" v-for="post in posts" class="photo">
        <img :src="post.frontmatter.cover" alt>
        <div class="title-wrap">{{post.frontmatter.title}}</div>
      </router-link>
    </template>
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
  props: ["page", "size"],
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

.photos {
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 1fr;

  &.s {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  &::before {
    content: "";
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  .photo {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    display: block;

    .title-wrap {
      background: linear-gradient(
        to bottom,
        rgba(33, 36, 37, 0) 0%,
        rgba(33, 36, 37, 0.7) 50%,
        rgba(33, 36, 37, 0.84) 100%
      );
      font-size: 2.2rem;
      font-weight: 700;
      color: #fff;
      position: absolute;
      padding: 0 24px;
      bottom: 0;
      left: 0;
      right: 0;
      height: 20%;
      display: flex;
      align-items: flex-end;
      padding-bottom: 24px;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
