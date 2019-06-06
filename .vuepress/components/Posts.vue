<template>
  <div class="posts" v-if="posts.length" :class="[page, size]">
    <template v-if="page == 'blog'">
      <section class="post" v-for="post in posts" :class="post.frontmatter.lang">
        <time class="muted">{{prettyDate(post.frontmatter.date)}}</time>
        <h3 class="post-title">
          <router-link :to="post.path">{{post.frontmatter.title}}</router-link>
        </h3>
        <p class="desc">
          {{post.frontmatter.description}}
          <router-link :to="post.path">continue →</router-link>
        </p>
      </section>
    </template>
    <template v-if="page == 'photos'">
      <router-link :to="post.path" v-for="post in posts" class="photo">
        <img :src="post.frontmatter.cover" :alt="post.frontmatter.subtitle">
        <div class="photo-info">
          <div class="photo-title">{{post.frontmatter.title}}</div>
          <div class="photo-subtitle">{{post.frontmatter.subtitle}}</div>
        </div>
        <div class="subtitle"></div>
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
          return (
            x.path.match(new RegExp(`(${currentPage})(?=.*html)`)) &&
            x.frontmatter.state != "draft"
          );
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });

      console.log(posts);
      return posts;
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 4.5rem;
  .post-title {
    margin: 0;
    margin-bottom: 4px;
    a {
      font-size: 1.4rem;
      font-weight: 500;
    }
  }
  p.desc {
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
    display: block;
    overflow: hidden;

    .photo-info {
      background: linear-gradient(
        to bottom,
        rgba(33, 36, 37, 0) 0%,
        rgba(33, 36, 37, 0.8) 50%,
        rgba(33, 36, 37, 0.9) 100%
      );

      color: #fff;
      position: absolute;
      padding: 16px 24px 24px;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-flow: column;
      .photo-title {
        font-size: 1.9rem;
        font-weight: 700;
        transform: translateY(24px);
        transition: all 0.2s ease-in-out;
      }
      .photo-subtitle {
        line-height: 1.4;
        opacity: 0;
        transform: translateY(24px);
        transition: all 0.2s ease-in-out;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-top: 4px;
      }
    }

    img {
      transition: all 4s ease-out;
      max-width: 100%;
      display: block;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }

      .photo-title {
        transform: translateY(0);
      }

      .photo-subtitle {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}
</style>
