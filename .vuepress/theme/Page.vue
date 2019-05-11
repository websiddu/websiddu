<template>
  <div class="page">
    <slot name="top"/>
    <header :class="type" class="content header">
      <h1 v-if="isBlog">{{$page.frontmatter.title}}</h1>
      <div class="post-meta" v-if="isBlog">{{$page.frontmatter.date}} — {{$page.readingTime.text}}</div>

      <h1 v-if="isPhoto" class="photos-page-title">{{$page.frontmatter.title}}</h1>
      <h2 v-if="isPhoto" class="photos-page-subtitle">{{$page.frontmatter.subtitle}}</h2>
    </header>

    <Content :class="type"></Content>

    <div class="page-edit">
      <div class="edit-link" v-if="editLink">
        <a :href="editLink" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
        <OutboundLink/>
      </div>

      <div class="last-updated" v-if="lastUpdated && isBlog">
        <span class="prefix">{{ lastUpdatedText }}:</span>
        <span class="time">{{ lastUpdated }}</span>
      </div>
    </div>

    <div class="page-nav" v-if="prev || next">
      <p class="inner">
        <span v-if="prev" class="next">
          <router-link v-if="prev" class="prev" :to="prev.path">{{ prev.title || prev.path }}&nbsp;→</router-link>
        </span>

        <span v-if="next" class="prev">
          <router-link v-if="next" :to="next.path">← {{ next.title || next.path }}</router-link>
        </span>
      </p>
    </div>
    <div class="page-comments">
      <ClientOnly v-if="isBlog">
        <Disqus shortname="websiddu"/>
      </ClientOnly>
      <br>
      <br>
      <br>
    </div>

    <slot name="bottom"/>
  </div>
</template>

<script>
import { resolvePage, normalize, outboundRE, endingSlashRE } from "./util";

export default {
  props: ["sidebarItems", "type"],

  computed: {
    isBlog() {
      let currentPage = this.$page.path;
      return currentPage.match(new RegExp(`(${"blog"})(?=.*html)`));
    },
    isPhoto() {
      let currentPage = this.$page.path;
      return currentPage.match(new RegExp(`(${"photos"})(?=.*html)`));
    },
    lastUpdated() {
      if (this.$page.lastUpdated) {
        return new Date(this.$page.lastUpdated).toLocaleString(this.$lang);
      }
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

    prev() {
      const prev = this.$page.frontmatter.prev;
      if (prev === false) {
        return;
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path);
      } else {
        return resolvePrev(this.$page, this.sidebarItems);
      }
    },

    next() {
      const next = this.$page.frontmatter.next;
      if (next === false) {
        return;
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path);
      } else {
        return resolveNext(this.$page, this.sidebarItems);
      }
    },

    editLink() {
      if (this.$page.frontmatter.editLink === false) {
        return;
      }
      const {
        repo,
        editLinks,
        docsDir = "",
        docsBranch = "master",
        docsRepo = repo
      } = this.$site.themeConfig;

      let path = normalize(this.$page.path);
      if (endingSlashRE.test(path)) {
        path += "README.md";
      } else {
        path += ".md";
      }
      if (docsRepo && editLinks) {
        return this.createEditLink(repo, docsRepo, docsDir, docsBranch, path);
      }
    },

    editLinkText() {
      return (
        this.$themeLocaleConfig.editLinkText ||
        this.$site.themeConfig.editLinkText ||
        `Edit this page`
      );
    }
  },

  methods: {
    createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/;
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo) ? docsRepo : repo;
        return (
          base.replace(endingSlashRE, "") +
          `/${docsBranch}` +
          (docsDir ? "/" + docsDir.replace(endingSlashRE, "") : "") +
          path +
          `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        );
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`;

      return (
        base.replace(endingSlashRE, "") +
        `/edit/${docsBranch}` +
        (docsDir ? "/" + docsDir.replace(endingSlashRE, "") : "") +
        path
      );
    }
  }
};

function resolvePrev(page, items) {
  return find(page, items, -1);
}

function resolveNext(page, items) {
  return find(page, items, 1);
}

function find(page, items, offset) {
  const res = [];
  items.forEach(item => {
    if (item.type === "group") {
      res.push(...(item.children || []));
    } else {
      res.push(item);
    }
  });
  for (let i = 0; i < res.length; i++) {
    const cur = res[i];
    if (cur.type === "page" && cur.path === page.path) {
      return res[i + offset];
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl';
@require './styles/wrapper.styl';

.post-meta {
  color: #777;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

.page-edit {
  @extend $wrapper;
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: auto;

  .edit-link {
    display: inline-block;

    a {
      color: lighten($textColor, 25%);
      margin-right: 0.25rem;
    }
  }

  .last-updated {
    float: right;
    font-size: 0.88em;

    .prefix {
      font-weight: 500;
      color: lighten($textColor, 25%);
    }

    .time {
      font-weight: 400;
      color: #aaa;
    }
  }
}

.page-comments {
  @extend $wrapper;
  padding-top: 1rem;
  padding-bottom: 0;
}

.page-nav {
  @extend $wrapper;
  padding-top: 1rem;
  padding-bottom: 2rem;

  .inner {
    min-height: 2rem;
    margin-top: 0;
    border-top: 1px solid $borderColor;
    padding-top: 1rem;
    overflow: auto; // clear float
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
  }

  .prev, .next {
    flex: 1;
    min-width: 220px;

    a {
      display: inline-flex;
      padding: 0 8px;

      &:hover {
        background: #f8f8f8;
      }
    }
  }

  .next {
    justify-content: flex-end;
    text-align: right;
  }
}

.photos-page-title {
  font-size: 5rem;
  font-weight: 700;
  margin: 4rem 0 1rem 0;
  text-align: center;
  color: #fff;
}

.photos-page-subtitle {
  color: #fff;
  font-weight: 400;
  line-height: 1.5;
  font-size: 1.5rem;
  margin: 0 auto 4rem;
  text-align: center;
  opacity: 0.6;
  max-width: 42rem;
  color: #fff;
}

@media (max-width: $MQMobile) {
  .page-edit {
    .edit-link {
      margin-bottom: 0.5rem;
    }

    .last-updated {
      font-size: 0.8em;
      float: none;
      text-align: left;
    }
  }

  .photos-page-title {
    font-size: 3.5rem;
    margin: 2rem 0 1rem 0;
  }

  .photos-page-subtitle {
    margin: 0 auto 0;
    font-size: 1.35rem;
  }
}
</style>
