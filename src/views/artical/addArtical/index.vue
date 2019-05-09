<template>
  <div class="add-artical">
    <div class="route-action">
      <a-button type="primary" @click="back">back</a-button>
      <!--<a-button type="primary" @click="back">back</a-button>-->
    </div>
    <div class="base-info">
      <div class="base-info-item title">
        <label for="title">Title:</label>
        <a-input class="base-info-input" id="title" v-model="artical.title" placeholder="Please input title"/>
      </div>
      <div class="base-info-item auth">
        <label for="auth">Auth:</label>
        <a-input class="base-info-input" id="auth" v-model="artical.auth" placeholder="Please input auth"/>
      </div>
      <div class="base-info-item type">
        <label for="type">Object:</label>
        <a-select class="base-info-input" v-model="artical.subjectId">
          <a-select-option v-for="item in options" :value="item.subjectId" :key="item.subjectId">{{item.subjectName}}</a-select-option>
        </a-select>
      </div>
    </div>
    <q-editor
      :content="artical.content"
      @onBlur="editBlur($event)"
      @onFocus="editFocus($event)"
      @onChange="editChange($event)"
    />
    <a-button class="submit-btn" type="primary" @click="submitArtical">submit</a-button>
  </div>
</template>

<script>
import qEditor from '@/components/qEditor'

import API from '@/api/artical'
import { mapGetters } from 'vuex'
export default {
  name: "editArtical",
  components: {
    qEditor
  },
  data () {
    return {
      text: 'this is a default artical text for add.',
      options: this.$store.state.artical.subjectList,
      artical: {
        subjectId: '',
        title: '',
        auth: '',
        content: ''
      }
    }
  },
  created () {
    if (this.options.length > 0) {
      this.artical.subjectId = this.$store.state.artical.currentSubject.subjectId
    }
  },
  watch: {
    'getSubjectList': function (newValue) {
      this.options = newValue
    },
    'getCurrentSubject': function (newValue) {
      this.artical.subjectId = newValue.subjectId
    }
  },
  computed: {
    ...mapGetters({
      getSubjectList: 'getSubjectList',
      getCurrentSubject: 'getCurrentSubject'
    })
  },
  methods: {
    editBlur (e) {
      console.log('blur', e)
    },
    editFocus (e) {
      console.log('focus', e)
    },
    editChange (e) {
      this.artical.content = e.content
    },
    back () {
      this.$router.back()
    },
    submitArtical () {
      API.addArtical(this.artical).then(res => {
        this.$message.success('提交成功')
        this.back()
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import 'index';
</style>
