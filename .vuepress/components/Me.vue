<template>
  <div>
    <div class="container">
      <div class="image">
        <img
          src="//res.cloudinary.com/websiddu/image/upload/c_scale,w_300/v1564721811/photos/misc/sid.jpg"
          alt="Siddhartha Gudipati"
          class="image"
        />
      </div>
      <div class="content">
        I'm Sid, a designer. I write about my random thoughts, some tech, ux and also post pictures I clicked with my Sony a7iii. If you enjoy content follow me on twitter.
        <div style="margin-bottom: 12px;" />
        <a
          href="https://twitter.com/websiddu?ref_src=twsrc%5Etfw"
          class="twitter-follow-button"
          data-size="large"
          data-show-screen-name="false"
          data-show-count="false"
          style="display: block;"
        >Follow @websiddu</a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.container {
  background: #fff;
  padding: 24px 32px 24px 24px;
  box-shadow: 0 0 8px #eee;
  display: flex;
  align-items: center;
  max-width: 560px;
  justify-content: center;
  margin: 0 auto;
  border-radius: 8px;
}

.image {
  height: 120px;
  border-radius: 75px;
  margin-right: 18px;
}

.content {
  flex: 1;
}
</style>
