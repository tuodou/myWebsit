<template>
  <div class="number-char">
    <div class="rotate-container">
      <div
        class="rotate-item"
        v-for="(item, index) in contentList"
        :key="index">{{item}}</div>
    </div>
  </div>
</template>

<script>
import getContent from '@/configs/numberCharConfig'
export default {
  name: 'numberChar',
  data () {
    return {
      contentList: getContent()
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
