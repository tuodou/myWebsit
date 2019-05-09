<template>
  <div class="edit-artical">
    <div class="edit-action">
      <a-button type="primary" @click="backToList">back</a-button>
      <a-button type="primary" @click="submitArtical">submit</a-button>
    </div>
    <div class="artical-info-head">
      <div class="info-input title">
        <label for="title">title:</label>
        <a-input class="input" id="title" v-model="artical.title"/>
      </div>
      <div class="info-input auth">
        <label for="auth">auth</label>
        <a-input class="input" id="auth" v-model="artical.auth"/>
      </div>
    </div>
    <q-editor
      :content="artical.content"
      @onBlur="editBlur($event)"
      @onFocus="editFocus($event)"
      @onChange="editChange($event)"
    />
    <div class="edit-footer" @click="backToTop">click here to top.</div>
  </div>
</template>

<script>
import qEditor from '@/components/qEditor'
import articalConfig from '@/configs/articalConfig'

import API from '@/api/artical'
export default {
  name: "editArtical",
  components: {
    qEditor
  },
  data () {
    return {
      editKey: 'dabiwedb',
      articalId: '',
      artical: {
        articalId: 'idaieb3t3tdaiwe',
        title: 'artical title7, click me to detail.',
        auth: '我爱吃土豆',
        content: '众所周知，Ant Design Vue 致力于提供给程序员愉悦的开发体验。',
        cTime: '2019-04-26',
        uTime: '2019-05-01'
      },
    }
  },
  mounted () {
    this.articalId = this.$route.query.articalId
    this.getArtical()
  },
  methods: {
    getArtical () {
      API.getArticalDetail(this.articalId).then(res => {
        this.artical = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    editBlur (e) {
      console.log('blur', e)
    },
    editFocus (e) {
      console.log('focus', e)
    },
    editChange (e) {
      this.artical.content = e.content
    },
    backToList () {
      this.$router.back()
    },
    submitArtical () {
      console.log(this.artical)
      API.updateArtical(this.artical).then(res => {
        this.$message.success('修改成功')
        setTimeout(() => {
          this.backToList()
        }, 1000)
      }).catch(err => {
        console.log(err)
      })
    },
    backToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="less" scoped>
@import 'index';
</style>
