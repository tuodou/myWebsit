<template>
  <div class="artical-filter">
    <div class="filter-condition">
      <a-input
        class="artical-title"
        label="title"
        v-model.trim="queryCondition.title"
        placeholder="artical title"
      >
        <a-icon slot="prefix" type="user" />
      </a-input>
      <a-input
        class="artical-auth"
        lebel="auth"
        v-model.trim="queryCondition.auth"
        placeholder="artical auth"
      >
        <a-icon slot="prefix" type="user" />
      </a-input>
    </div>
    <div class="date-range">
      <span class="label">date-range:</span>
      <a-date-picker v-model="queryCondition.startTime"/>
      <span class="desperate">-</span>
      <a-date-picker v-model="queryCondition.endTime"/>
    </div>
    <div class="btn-container">
      <a-button type="primary" class="btn submit-btn" @click="query">query</a-button>
      <a-button class="btn" @click="clearCondition">clear</a-button>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: "index",
  data () {
    return {
      queryCondition: {
        title: '',
        auth: '',
        startTime: new moment(),
        endTime: new moment()
      }
    }
  },
  methods: {
    query () {
      this.updateCondition()
    },
    clearCondition () {
      this.queryCondition = {
        title: '',
        auth: '',
        startTime: new moment(),
        endTime: new moment()
      }
      this.updateCondition()
    },
    updateCondition () {
      this.$emit('updateCondition', this.queryCondition)
    }
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
