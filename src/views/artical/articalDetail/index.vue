<template>
  <div class="artical-detail">
    <div class="detail-action">
      <a-button type="primary" @click="back">back</a-button>
      <a-button type="primary" @click="editArtical">edit</a-button>
    </div>
    <h2 class="artical-title">{{artical.title}}</h2>
    <div class="artical-content" v-html="artical.content"></div>
    <footer class="artical-footer">
      <span>{{artical.auth}}</span>
      <span>Create:{{artical.cTime}}</span>
      <span>Last update:{{artical.uTime}}</span>
    </footer>
  </div>
</template>

<script>
import API from '@/api/artical'
export default {
  name: "index",
  data () {
    return {
      articalId: '',
      artical: {
        articalId: 'idaieb3t3tdaiwe',
        title: 'artical title7, click me to detail.',
        auth: '我爱吃土豆',
        content: '众所周知，Ant Design作为一门设计语言面世，经历过多年的迭代和积累，它对UI的设计思想已经成为一套事实标准，受到众多前端开发者及企业的追捧和喜爱，也是React开发者手中的神兵利器。希望ant-design-vue能够让Vue开发者也享受到Ant Design的优秀设计。\n' +
          '\n' +
          'ant-design-vue 是 Ant Design 的Vue实现，组件的风格与Ant Design保持同步，组件的html结构和css样式也保持一致，真正做到了样式0修改，组件API也尽量保持了一致。\n' +
          '\n' +
          'Ant Design Vue 致力于提供给程序员愉悦的开发体验。',
        cTime: '2019-04-26',
        uTime: '2019-05-01'
      }
    }
  },
  created() {
    this.articalId = this.$route.query.articalId
    this.getArtical()
  },
  methods: {
    back () {
      this.$router.back()
    },
    getArtical () {
      API.getArticalDetail(this.articalId).then(res => {
        this.artical = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    editArtical () {
      this.$router.push({name: 'editArtical', query: {articalId: this.artical.articalId}})
    }
  }
}
</script>

<style lang="less" scoped>
@import './index';
</style>
