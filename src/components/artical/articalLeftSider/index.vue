<template>
  <div class="artical-sider">
    <div
      class="artical-type-item"
      :class="item.subjectId === activeType.subjectId ? 'active-type' : ''"
      v-for="(item, index) in list"
      :key="index"
      @click="chooseArticalType(index)"
      >
      {{item.subjectName}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    props: {
      list: {
        type: Array,
        required: true,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        activeType: this.list[0] || {}
      }
    },
    methods: {
      chooseArticalType (index) {
        this.activeType = this.list[index]
        this.$emit('chooseArticalType', this.activeType)
      }
    }
  }
</script>

<style lang="less" scoped>
@import './index';
</style>
