<template>
  <div>
    <div class="page-edit">
      <!-- <div class="edit-link" v-if="editLink">
        <a :href="editLink" target="_blank" rel="noopener noreferrer">
          {{ editLinkText }}
        </a>
        <OutboundLink />
      </div> -->

      <!-- <div style="flex: 1"></div> -->

      <div class="page-share" v-if="isBlog">
        <svg class="Icon" viewBox="0 0 39 32">
          <g id="icon-twitter-bird">
            <path
              fill="#55acee"
              d="M34.7 5c1.7-1 2.8-2.5 3.4-4.4-1.6 0.9-3.3 1.6-5 2-1.6-1.7-3.6-2.6-5.8-2.6-2.2 0-4.2 0.7-5.7 2.3-1.6 1.6-2.3 3.4-2.3 5.8 0 0.6 0.1 1.2 0.2 1.8-6.9-0.4-12.6-3.2-16.9-8.5-0.7 1.2-1.1 2.7-1.1 4.1 0 3 1.2 5.2 3.6 6.8-1.2 0-2.5-0.4-3.6-1v0.1c0 2 0.6 3.7 1.8 5.2 1.2 1.5 2.7 2.5 4.6 2.8-0.6 0.1-1.2 0.2-2.1 0.2-0.4 0-0.9 0-1.5-0.1 0.5 1.5 1.4 2.8 2.8 3.8 1.4 1 3 1.5 4.7 1.6-3.1 2.5-6.4 3.7-10 3.7-0.5 0-1.1 0-2-0.1 3.7 2.2 7.8 3.4 12.4 3.4 3.6 0 6.8-0.7 9.8-2.1 3-1.4 5.4-3.2 7.3-5.4 1.8-2.2 3.3-4.7 4.3-7.4s1.6-5.4 1.6-8.1v-1c1.4-1 2.7-2.5 3.9-4.2-1.6 0.6-3.2 1.1-4.7 1.2z"
            ></path>
          </g>
        </svg>

        <div>
          If you liked this article and think others should read it, please
          <a
            :href="`http://twitter.com/share?text=${$page.frontmatter.title}&amp;url=https://websiddu.com/${$page.frontmatter.permalink}&amp;via=websiddu`"
            target="_blank"
          >
            share it on Twitter
          </a>
        </div>
      </div>

      <div class="last-updated" v-if="lastUpdated && isBlog">
        <span class="prefix">{{ lastUpdatedText }}:</span>
        <br />
        <span class="time">{{ lastUpdated }}</span>
      </div>
    </div>

    <div class="page-comments" v-if="isBlog">
      <component
        v-if="CommentsComponent"
        :is="CommentsComponent"
        :title="$page.title"
        :pathname="$page.title"
        repo="websiddu/comments"
        label="comment"
        theme="github-light"
        description="This issue contains the comments of the page:"
      />
      <br />
    </div>
  </div>
</template>
<script>
import isNil from "lodash/isNil";
import { endingSlashRE, outboundRE } from "../util";

export default {
  name: "PageEdit",
  data() {
    return {
      discuss: false,
      CommentsComponent: null,
    };
  },
  props: ["isBlog"],
  mounted() {
    import("@theme/components/Comments.vue").then(
      (module) => (this.CommentsComponent = module.default)
    );
  },
  computed: {
    lastUpdated() {
      return this.$page.lastUpdated;
    },

    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === "string") {
        return this.$themeLocaleConfig.lastUpdated;
      }
      if (typeof this.$site.themeConfig.lastUpdated === "string") {
        return this.$site.themeConfig.lastUpdated;
      }
      return "Last Updated";
    },

    editLink() {
      const showEditLink = isNil(this.$page.frontmatter.editLink)
        ? this.$site.themeConfig.editLinks
        : this.$page.frontmatter.editLink;

      const {
        repo,
        docsDir = "",
        docsBranch = "master",
        docsRepo = repo,
      } = this.$site.themeConfig;

      if (showEditLink && docsRepo && this.$page.relativePath) {
        return this.createEditLink(
          repo,
          docsRepo,
          docsDir,
          docsBranch,
          this.$page.relativePath
        );
      }
      return null;
    },

    editLinkText() {
      return (
        this.$themeLocaleConfig.editLinkText ||
        this.$site.themeConfig.editLinkText ||
        `Edit this page`
      );
    },
  },

  methods: {
    createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/;
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo) ? docsRepo : repo;
        return (
          base.replace(endingSlashRE, "") +
          `/src` +
          `/${docsBranch}/` +
          (docsDir ? docsDir.replace(endingSlashRE, "") + "/" : "") +
          path +
          `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        );
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`;
      return (
        base.replace(endingSlashRE, "") +
        `/edit` +
        `/${docsBranch}/` +
        (docsDir ? docsDir.replace(endingSlashRE, "") + "/" : "") +
        path
      );
    },
  },
};
</script>
<style lang="stylus">
@require '../styles/wrapper.styl'

.page-share
  font-size 0.9rem
  padding 1rem
  margin-right 2rem
  background lighten($textColor, 96%)
  border-radius 0.5rem
  display flex
  align-items center

  svg
    height 24px
    width 24px
    margin-right 1rem

.page-edit
  @extend $wrapper

  padding-top 1rem
  padding-bottom 1rem
  overflow auto
  display flex
  align-items center

  .edit-link
    display inline-block

    a
      color lighten($textColor, 25%)
      margin-right 0.25rem

  .last-updated
    float right
    font-size 0.88em
    margin-top 3px
    width 240px
    text-align right

    .prefix
      font-weight 500
      color lighten($textColor, 25%)

    .time
      font-weight 400
      color #aaa

@media (max-width $MQMobile)
  .page-edit
    flex-direction column-reverse
    align-items unset

    .edit-link
      margin-bottom 1rem

    .last-updated
      font-size 0.8em
      float none
      text-align left
      margin-bottom 1rem
</style>
