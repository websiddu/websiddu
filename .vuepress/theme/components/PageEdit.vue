<template>
  <div>
    <div class="page-edit">
      <div class="edit-link" v-if="editLink">
        <a :href="editLink" target="_blank" rel="noopener noreferrer">
          {{ editLinkText }}
        </a>
        <OutboundLink />
      </div>
      <div class="page-actions" v-if="isBlog">
        <a
          class="btn"
          :href="
            `http://twitter.com/share?text=${$page.frontmatter.title}&amp;url=https://websiddu.com/${$page.frontmatter.permalink}&amp;via=websiddu`
          "
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          &nbsp;Share
        </a>
        &nbsp;&nbsp;
        <button class="btn" @click="discuss = true" v-if="!discuss">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            />
          </svg>
          &nbsp;Discuss
        </button>
      </div>

      <div style="flex: 1;"></div>

      <div class="last-updated" v-if="lastUpdated && isBlog">
        <span class="prefix">{{ lastUpdatedText }}:</span>
        <span class="time">{{ lastUpdated }}</span>
      </div>
    </div>

    <div class="page-comments" v-if="discuss">
      <ClientOnly v-if="isBlog">
        <Disqus shortname="websiddu" />
      </ClientOnly>
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
    };
  },
  props: ["isBlog"],
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

    .prefix
      font-weight 500
      color lighten($textColor, 25%)

    .time
      font-weight 400
      color #aaa


@media (max-width: $MQMobile)
  .page-edit
    .edit-link
      margin-bottom 0.5rem
    .last-updated
      font-size 0.8em
      float none
      text-align left
</style>
