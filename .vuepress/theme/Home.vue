<template>
  <div class="home">
    <div class="container">
      <div class="logo">
        <a class="is-brand" href="/">
          <img
            class="logo"
            v-if="$site.themeConfig.logo"
            :src="$withBase($site.themeConfig.logo)"
            :alt="$siteTitle"
          />
        </a>
      </div>
      <div class="content-body">
        <h2 class="blurb">
          Hey there
          <span class="wave">👋</span>, my name is Siddhartha. I'm a designer at Google living in the Bay Area. I love making things.
        </h2>
        <Content custom />
        <div class="navigation">
          <nav class="nav-links">
            <!-- <div class="nav-item">
              <a
                href="https://websiddu-portfolio.appspot.com"
                target="_blank"
                class="nav-link"
              >Portfolio</a>
            </div>-->
            <div class="nav-item">
              <router-link to="/blog" class="nav-link">Articles</router-link>
            </div>
            <div class="nav-item">
              <router-link to="/photos" class="nav-link">Photos</router-link>
            </div>
            <div class="nav-item">
              <router-link to="/projects.html" class="nav-link">Projects</router-link>
            </div>
            <div class="nav-item">
              <router-link to="/about.html" class="nav-link">About</router-link>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <Content custom></Content>

    <div class="footer" v-if="data.footer">{{ data.footer }}</div>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";
import Posts from "../components/Posts";

export default {
  components: { NavLink, Posts },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './styles/config.styl';

.container {
  max-width: 1150px;
  margin: 0 10vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logo-back {
  fill: #4A89DC;
}

.logo-front {
  fill: #5D9CEC;
}

.logo-text {
  fill: #fff;
}

.is-brand {
  margin: 24px 0 0;
  display: inline-block;

  img {
    height: 48px;
  }
}

.blurb {
  font-size: 2rem;
  line-height: 1.6;
  font-weight: 400;
  max-width: 45rem;
  padding-top: 17vh;
  padding-bottom: 4vh;
  position: relative;
  color: rgba(0, 0, 0, 0.7);
  margin-top: 3.5rem !important;

  &:after {
    content: '';
    display: inline-block;
    min-width: 80px;
    height: 4px;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

.navigation {
  padding-top: 8vh;
  padding-bottom: 6vh;
  max-width: 400px;
}

.nav-item a.nav-link {
  font-size: 1.03rem;
  font-weight: 500;
  color: #5F6368;
}

span.wave {
  animation-name: wave-animation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  animation-play-state: paused;
}

.blurb:hover {
  .wave {
    animation-play-state: running;
  }
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }

  10% {
    transform: rotate(-10deg);
  }

  20% {
    transform: rotate(12deg);
  }

  30% {
    transform: rotate(-10deg);
  }

  40% {
    transform: rotate(9deg);
  }

  50% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

@media (max-width: $MQMobile) {
  .container {
    max-width: 1150px;
    margin: 0 5vw;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    max-width: 500px;
  }

  .blurb {
    font-size: 1.7rem;
  }

  .nav-item a, a.nav-item {
    font-size: 1rem;
    margin-right: 0;
  }
}

@media (max-width: $MQMobileNarrow) {
  .nav-links {
    min-width: unset;
  }
}
</style>
