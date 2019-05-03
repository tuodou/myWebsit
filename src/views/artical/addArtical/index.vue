<template>
  <div class="add-artical">
    <h1>{{text}}</h1>
  </div>
</template>

<script>
  export default {
    name: "editArtical",
    data () {
      return {
        text: 'this is a default artical text for add.'
      }
    }
  }
</script>

<style lang="less" scoped>
@import 'index';
</style>
