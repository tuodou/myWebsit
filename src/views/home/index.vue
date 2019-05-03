<template>
  <div class="home-page">
    <div class="home-header">
      <div class="header-left">
        <div class="header-item" @click="toHome">Home</div>
        <div class="header-item" @click="toFeatures">Features</div>
        <div class="header-item" @click="toShortCodes">ShortCodes</div>
        <div class="header-item" @click="toBlog">Blog</div>
        <div class="header-item" @click="toContact">Contact</div>
      </div>
      <div class="header-right">
        <a-input-search
          class="search-input"
          placeholder="input search text"
          style="width: 200px"
          @search="onSearch"
          />
      </div>
    </div>
    <div class="home-body">
      <div class="swiper-container">
        <swiper :list="swiperImgList" :height="'460px'"></swiper>
      </div>
      <div class="body-content">
        <div class="content-left">
          <recommend />
        </div>
        <div class="game-container">
          <number-char></number-char>
        </div>
        <div class="content-right">
          <recommend />
        </div>
      </div>
    </div>
    <my-footer />
  </div>
</template>

<script>
import swiper from '@/components/swiper'
import recommend from '@/components/recommend'
import myFooter from '@/components/myFooter'

import swiperImgList from '@/configs/swiperImgConfig'
import numberChar from '@/components/numberChar'
import slotTest from '@/components/slotTest'
export default {
  name: "home",
  components: {
    swiper,
    numberChar,
    recommend,
    myFooter,
    slotTest
  },
  data () {
    return {
      swiperImgList
    }
  },
  methods: {
    onSearch (value) {
      this.showWait(value)
    },
    toHome () {
      this.$router.push('/home')
    },
    toFeatures () {
      this.showWait()
    },
    toBlog () {
      this.$router.push({ name: 'artical' })
    },
    toShortCodes () {
      this.showWait()
    },
    toContact () {
      this.showWait()
    },
    showWait () {
      this.$message.info('Please wait some days')
    }
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  button {
    flex: 1;
    height: 100%;
    border: none;
    border-radius: 6px;
    background: #fff;
  }
}
</style>
