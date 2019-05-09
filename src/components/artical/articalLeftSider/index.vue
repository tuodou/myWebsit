<template>
  <div class="artical-sider">
    <div
      class="artical-type-item"
      :class="item.subjectId === subject.subjectId ? 'active-type' : ''"
      v-for="(item, index) in subjectList"
      :key="index"
      @click="chooseSubject(index)"
      >
      {{item.subjectName}}
    </div>
  </div>
</template>

<script>
import API from '@/api/artical'
import { mapMutations } from 'vuex'
export default {
  name: "index",
  data () {
    return {
      subjectList: [],
      subject: {}
    }
  },
  /**
   * 并购的历史经验告诉我们，每一次并购浪潮的发生都与当时的历史环境，经济发展状况，经济政策和科技发展息息相关，这些变化会导致资本在经济市场种被再分配
   * */
  created () {
    this.getSubjectList()
  },
  methods: {
    ...mapMutations({
      setSubjectList: 'setSubjectList',
      setCurrentSubject: 'setCurrentSubject'
    }),
    getSubjectList () {
      API.getSubjectList().then(res => {
        this.subjectList = res.data
        this.subject = this.subjectList[0]
        this.setSubjectList(this.subjectList)
        this.setCurrentSubject(this.subjectList[0])
      }).catch(err => {
        console.log(err)
      })
    },
    chooseSubject (index) {
      this.subject = this.subjectList[index]
      this.setCurrentSubject(this.subject)
      this.$emit('chooseSubject', this.subject)
    }
  }
}
</script>

<style lang="less" scoped>
@import './index';
</style>
