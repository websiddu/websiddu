<template>
  <footer>
    <div class="footer-content">
      <nav class="nav-links">
        <div class="nav-item">
          <a href="https://twitter.com/websiddu" target="_blank" class="nav-link">Twitter</a>
        </div>
        <div class="nav-item">
          <a href="https://github.com/websiddu" target="_blank" class="nav-link">Github</a>
        </div>
        <div class="nav-item">
          <a
            href="https://github.com/websiddu/websiddu"
            target="_blank"
            class="nav-link"
          >View source</a>
        </div>
        <div class="nav-spacer"></div>
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
  </footer>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '../theme/styles/config.styl';
@require '../theme/styles/wrapper.styl';

.footer-content {
  display: flex;
  @extend $wrapper;
  width: 100%;

  .nav-links {
    width: 100%;

    .nav-item {
      margin-right: 24px;
      font-size: 14px;
    }

    :last-child {
      margin-right: 0;
    }
  }
}

.nav-spacer {
  flex: 1;
}
</style>
