<template>
  <a-carousel autoplay>
    <div class="swiper-item" :style="{height: height}" v-for="(img, index) in list" :key="index">
      <img :src="img" />
    </div>
  </a-carousel>
</template>

<script>
export default {
  name: "swiper",
  props: {
    list: {
      type: Array,
      required: true,
      datault () {
        return []
      }
    },
    height: {
      type: String,
      default: '560px'
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
