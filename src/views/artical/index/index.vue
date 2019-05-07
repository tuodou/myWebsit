<template>
  <div class="artical">
    <header class="artical-header">
      <artical-header :userName="user.userName"/>
    </header>
    <div class="artical-content-container">
      <div class="artical-sider">
        <artical-left-sider
          :list="leftSiderList"
          @chooseArticalType="chooseArticalType"/>
      </div>
      <div class="artical-content">
        <router-view :key="forceUpdate"/>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/api/artical'
import articalHeader from '@/components/artical/articalHeader'
import articalLeftSider from '@/components/artical/articalLeftSider'
import articalFilter from '@/components/artical/articalFilter'

import articalConfig from '@/configs/articalConfig'

export default {
  name: "index",
  components: {
    articalHeader,
    articalLeftSider,
    articalFilter
  },
  data () {
    return {
      forceUpdate: 'dnaiwde', // 强制刷新路由
      user: {
        userName: 'jerry'
      },
      leftSiderList: articalConfig.articalSiderList,
      articalList: articalConfig.articalList
    }
  },
  created () {
    API.getSubjectList().then(res => {
      console.log('get subject list', res.message)
      this.leftSiderList = res.data
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    chooseArticalType (e) {
      this.forceUpdate = new Date().getTime().toString()
      this.$router.replace({name: 'articalList', query: e})
    }
  }
}
</script>

<style lang="less" scoped>
.artical {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 30px 100px;
  background: #eee;
  .artical-header {
    width: 100%;
    height: 46px;
  }
  .artical-content-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .artical-sider {
      width: 160px;
    }
    .artical-content {
      position: relative;
      overflow: hidden;
      flex: 1;
    }
  }
}
</style>
