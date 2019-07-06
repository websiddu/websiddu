<template>
  <div class="color-blind-helper">
    <div class="image-preview">
      <div class="prev">
        <select v-model="img1" disabled>
          <option :value="img1">Normal</option>
        </select>
        <img :src="img1.photo" :alt="img1.name" width="160px" height="580px" />
      </div>
      <div class="prev">
        <select v-model="img2">
          <option v-for="option in options" :value="option">{{option.name}}</option>
        </select>
        <img :src="img2.photo" :alt="img2.name" width="160px" height="580px" />
      </div>
      <div class="prev">
        <select v-model="img3">
          <option v-for="option in options" :value="option">{{option.name}}</option>
        </select>
        <img :src="img3.photo" :alt="img3.name" width="160px" height="580px" />
      </div>
      <div class="prev">
        <select v-model="img4">
          <option v-for="option in options" :value="option">{{option.name}}</option>
        </select>
        <img :src="img4.photo" :alt="img4.name" width="160px" height="580px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img1: {
        name: "Normal",
        photo:
          "https://res.cloudinary.com/websiddu/image/upload/v1562398088/blog/018/normal.png"
      },
      img2: {
        name: "Deuteranopia",
        photo:
          "https://res.cloudinary.com/websiddu/image/upload/v1562398088/blog/018/deuteranopia.png"
      },
      img3: {
        name: "Deuteranomaly",
        photo:
          "https://res.cloudinary.com/websiddu/image/upload/v1562398088/blog/018/deuteranomaly.png"
      },
      img4: {
        name: "Protanomaly",
        photo:
          "https://res.cloudinary.com/websiddu/image/upload/v1562398088/blog/018/protanomaly.png"
      },
      options: [
        {
          name: "Normal",
          photo:
            "https://res.cloudinary.com/websiddu/image/upload/v1562398088/blog/018/normal.png"
        },

        {
          name: "Deuteranopia",
          photo:
            "https://res.cloudinary.com/websiddu/image/upload/v1562398088/blog/018/deuteranopia.png"
        },

        {
          name: "Deuteranomaly",
          photo:
            "https://res.cloudinary.com/websiddu/image/upload/v1562398088/blog/018/deuteranomaly.png"
        },

        {
          name: "Protanopia",
          photo:
            "https://res.cloudinary.com/websiddu/image/upload/v1562395839/blog/018/deuteranopia.png"
        },

        {
          name: "Protanomaly",
          photo:
            "https://res.cloudinary.com/websiddu/image/upload/v1562398088/blog/018/protanomaly.png"
        },

        {
          name: "Tritanopia",
          photo:
            "https://res.cloudinary.com/websiddu/image/upload/v1562398089/blog/018/tritanopia.png"
        },
        {
          name: "Tritanomaly",
          photo:
            "https://res.cloudinary.com/websiddu/image/upload/v1562398089/blog/018/tritanomaly.png"
        },
        {
          name: "Achromatopsia",
          photo:
            "https://res.cloudinary.com/websiddu/image/upload/v1562398088/blog/018/achromatopsia.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.image-preview {
  display: flex;
  justify-content: space-between;
  .prev {
    width: 160px;
  }
  img {
    display: block;
  }
  select {
    width: 160px;
    margin-bottom: 12px;
  }
}
</style>
