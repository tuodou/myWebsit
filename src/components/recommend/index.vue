<template>
  <div class="recommend">
    <div class="header">推荐文章</div>
    <div class="list">
      <div
        class="list-item"
        v-for="(item, index) in recommendContent"
        :key="index">
        <img :src="item.headerImg"/>
        <div class="content">
          <div class="content-header">{{item.title}}</div>
          <!--<div class="content-detail">{{item.detail}}</div>-->
          <div class="content-others">
            <p>{{item.creatTime.substring(11)}}</p>
            <p class="content-auth">{{item.auth}}</p>
            <!--<a :href="item.originUrl">{{item.originName}}</a>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getContent from '@/configs/recommendConfig'
export default {
  name: "recommend",
  data () {
    return {
      recommendContent: []
    }
  },
  created () {
    this.recommendContent = getContent()
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
