<template>
  <div class="header">
    <div class="header-left">hello, dear {{userName}}</div>
    <div class="header-right" @click="exit">exit</div>
  </div>
</template>

<script>
  export default {
    name: "index",
    props: {
      userName: {
        type: String,
        default: 'tom jerry'
      }
    },
    data () {
      return {}
    },
    methods: {
      exit () {
        this.$router.push({ name: 'login' })
      }
    }
  }
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 15px;
  background: rgb(103,137,138);
  .header-left,
  .header-right {
    display: flex;
    align-items: center;
    height: 100%;
    line-height: 100%;
    font-size: 24px;
    color: #fff;
  }
  .header-right {
    cursor: pointer;
  }
}
</style>
