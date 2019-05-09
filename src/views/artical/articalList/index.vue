<template>
  <div class="artical-list">
    <artical-filter
      @updateCondition="updateCondition"
    />
    <div class="list-container">
      <div
        class="list-item"
        v-for="(item, index) in articalList"
      >
        <div class="artical-action">
          <a-button class="edit-btn" type="primary" @click="editArtical(item.articalId)">Edit</a-button>
        </div>
        <p
          class="artical-title"
          @click="chooseArtical(item)">{{item.title}}</p>
        <p class="artical-content">{{item.content.substring(0, 32)}}</p>
        <div class="artical-info">
          <span>{{item.auth}}</span>
          <span>{{item.tag}}</span>
          <span>Create: {{item.cTime}}</span>
          <span>Last update: {{item.uTime}}</span>
        </div>
      </div>
    </div>
    <div class="create-btn" @click="createArtical">
      <img src="../../../assets/images/create_icon.png"/>
    </div>
  </div>
</template>

<script>
import articalFilter from '@/components/artical/articalFilter'
import articalConfig from '@/configs/articalConfig'

import API from '@/api/artical'

import { mapGetters } from 'vuex'
export default {
  name: "editArtical",
  components: {
    articalFilter
  },
  data () {
    return {
      text: 'this is a default artical text.',
      articalList: articalConfig.getArticalList()
    }
  },
  mounted () {
    if (this.getCurrentSubject.subjectId) {
      this.getArticalList()
    }
  },
  watch: {
    'getCurrentSubject': function (newValue) {
      this.getArticalList()
    }
  },
  computed: {
    ...mapGetters({
      getCurrentSubject: 'getCurrentSubject'
    })
  },
  methods: {
    updateCondition (e) {
      this.getArticalList()
    },
    chooseArtical (artical) {
      this.$router.push({name: 'articalDetail', query: {articalId: artical.articalId}})
    },
    getArticalList () {
      let reqData = {subjectId: this.getCurrentSubject.subjectId}
      API.getArticalList(reqData).then(res => {
        this.articalList = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    editArtical (articalId) {
      this.$router.push({name: 'editArtical', query: {articalId}})
    },
    createArtical () {
      this.$router.push({name: 'addArtical', query: {}})
    }
  }
}
</script>

<style lang="less" scoped>
@import 'index';
</style>
