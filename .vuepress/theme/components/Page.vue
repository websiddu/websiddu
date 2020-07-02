<template>
  <main class="page">
    <slot name="top" />
    <header :class="type" class="theme-default-content header">
      <h1 v-if="isBlog">{{ $page.frontmatter.title }}</h1>
      <div class="post-meta" v-if="isBlog">
        {{ $page.frontmatter.date }} — {{ $page.readingTime.text }}
      </div>
      <h1 v-if="isPhoto" class="photos-page-title">
        {{ $page.frontmatter.title }}
      </h1>
      <h2 v-if="isPhoto" class="photos-page-subtitle">
        {{ $page.frontmatter.subtitle }}
      </h2>
    </header>

    <Content class="theme-default-content" :class="type" />
    <PageEdit :is-blog="isBlog" />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav },
  props: ["sidebarItems", "type"],
  data() {
    return {
      discuss: false,
    };
  },
  computed: {
    isBlog() {
      let currentPage = this.$page.path;
      return currentPage.match(new RegExp(`(${"blog"})(?=.*html)`));
    },
    isPhoto() {
      let currentPage = this.$page.path;
      return currentPage.match(new RegExp(`(${"photos"})(?=.*html)`));
    },
  },
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block


.post-meta
  color #777
  font-size 0.95rem
  margin-bottom 2rem

.page-comments
  @extend $wrapper

  padding-top 1rem
  padding-bottom 0

.photos-page-title
  font-size 5rem
  font-weight 700
  margin 4rem 0 1rem 0
  text-align center
  color #fff

.photos-page-subtitle
  color #fff
  font-weight 400
  line-height 1.5
  font-size 1.5rem
  margin 0 auto 4rem
  text-align center
  opacity 0.6
  max-width 42rem
  color #fff

.author
  background #fafafa
  padding 32px 0
  border-top solid 1px #eee

@media (max-width: $MQMobile)
  .photos-page-title
    font-size 3.5rem
    margin 2rem 0 1rem 0

  .photos-page-subtitle
    margin 0 auto 0
    font-size 1.35rem
</style>
