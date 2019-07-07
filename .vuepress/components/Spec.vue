<template>
  <div class="do-dont">
    <div class="dont">
      <img :src="dnt" alt />
      <div class="label">👎🏽Dont.</div>
    </div>
    <div class="do">
      <img :src="d" alt />
      <div class="label">👍🏽Do.</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["d", "dnt"]
};
</script>

<style lang='scss'>
.do-dont {
  display: flex;
  flex-wrap: wrap;
  .do,
  .dont {
    flex: 1;
    position: relative;
    min-width: 230px;

    img {
      line-height: 1;
      display: block;
      border: solid 1px #eee;
    }
    .label {
      font-weight: 500;
      line-height: 40px;
      color: #80868b;
      font-size: 15px;

      &:before {
        content: "";
        left: 0;
        right: -2px;
        position: absolute;
        height: 3px;
        background: #ee675c;
        border-radius: 0 0 4px 4px;
      }
    }
  }

  .dont {
    margin-right: 12px;
  }

  .do {
    margin-left: 12px;
    .label {
      &::before {
        background: #5bb974;
      }
    }
  }
}

@media (max-width: 719px) {
  .do-dont .do {
    margin-left: 0;
  }

  .do-dont .dont {
    margin-right: 0;
    margin-bottom: 24px;
  }
}
</style>
