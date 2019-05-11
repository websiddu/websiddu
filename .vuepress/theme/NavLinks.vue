<template>
  <nav class="nav-links" v-if="userLinks.length || repoLink">
    <!-- user links -->
    <div class="nav-item" v-for="item in userLinks" :key="item.link">
      <DropdownLink v-if="item.type === 'links'" :item="item"/>
      <NavLink v-else :item="item"/>
    </div>

    <!-- repo link -->
    <a v-if="repoLink" :href="repoLink" class="repo-link" target="_blank" rel="noopener noreferrer">
      {{ repoLabel }}
      <OutboundLink/>
    </a>
  </nav>
</template>

<script>
import DropdownLink from "./DropdownLink.vue";
import { resolveNavLinkItem } from "./util";
import NavLink from "./NavLink.vue";

export default {
  components: { NavLink, DropdownLink },

  computed: {
    userNav() {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
    },

    nav() {
      const { locales } = this.$site;
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path;
        const routes = this.$router.options.routes;
        const themeLocales = this.$site.themeConfig.locales || {};
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || "Languages",
          items: Object.keys(locales).map(path => {
            const locale = locales[path];
            const text =
              (themeLocales[path] && themeLocales[path].label) || locale.lang;
            let link;
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink;
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path);
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path;
              }
            }
            return { text, link };
          })
        };
        return [...this.userNav, languageDropdown];
      }
      return this.userNav;
    },

    userLinks() {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        });
      });
    },

    repoLink() {
      const { repo } = this.$site.themeConfig;
      if (repo) {
        return /^https?:/.test(repo) ? repo : `https://github.com/${repo}`;
      }
    },

    repoLabel() {
      if (!this.repoLink) return;
      if (this.$site.themeConfig.repoLabel) {
        return this.$site.themeConfig.repoLabel;
      }

      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0];
      const platforms = ["GitHub", "GitLab", "Bitbucket"];
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i];
        if (new RegExp(platform, "i").test(repoHost)) {
          return platform;
        }
      }

      return "Source";
    }
  }
};
</script>

<style lang="stylus">
@import './styles/config.styl';

.nav-links {
  display: flex;
  max-width: 100vw;
  min-width: 380px;
  justify-content: space-between;
  flex-wrap: wrap;

  a {
    color: inherit;
    line-height: 1.5;
    display: inline-block;
    color: #80868B;

    &:before, &.router-link-active:before {
      content: '';
      position: absolute;
      right: 0;
      height: 2px;
      bottom: -0.1rem;
      padding: 0 0.2rem;
      left: 0;
      background-color: #80868B;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 300ms cubic-bezier(0.325, -0.075, 0, 1.65);
    }

    &:hover {
      color: #333;

      &:before {
        transition: all 300ms cubic-bezier(0.325, -0.075, 0, 1.65);
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }

    &.router-link-active {
      // color: $accentColor;
      color: #000;

      &:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        // background-color: $accentColor;
      }
    }
  }

  .nav-item {
    position: relative;
    display: inline-block;
    line-height: 2rem;

    &:first-child {
      margin-left: 0;
    }
  }

  .repo-link {
    margin-left: 1.8rem;
  }
}

@media (max-width: $MQMobile) {
  .sidebar .nav-links {
    .nav-item, .repo-link {
      margin-left: 0;
    }
  }
}

@media (min-width: $MQMobile) {
  .nav-links a {
    &:hover, &.router-link-active {
      // color: $textColor;
    }
  }

  .nav-item > a:not(.external) {
    &:hover, &.router-link-active {
      // margin-bottom: -2px;
      // border-bottom: 2px solid lighten($accentColor, 8%);
    }
  }
}
</style>
