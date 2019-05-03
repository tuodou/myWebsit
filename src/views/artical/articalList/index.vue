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
          <a-button type="danger" @click="deleteArtical(item.articalId)">Delete</a-button>
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
  </div>
</template>

<script>
import articalFilter from '@/components/artical/articalFilter'
import articalConfig from '@/configs/articalConfig'
export default {
  name: "editArtical",
  components: {
    articalFilter
  },
  data () {
    return {
      typeInfo: {
        typeId: '',
        typeName: '',
      },
      text: 'this is a default artical text.',
      articalList: articalConfig.getArticalList()
    }
  },
  mounted () {
    this.typeInfo.typeId = this.$route.query.typeId
    this.typeInfo.typeName = this.$route.query.typeName
    console.log(this.$route.query)
    this.getArticalList()
  },
  methods: {
    updateCondition (e) {
      this.getArticalList()
      console.log(e)
    },
    chooseArtical (artical) {
      this.$router.push({name: 'articalDetail', query: {articalId: artical.articalId}})
      console.log(artical)
    },
    getArticalList () {
      articalConfig.getArticalList(this.typeInfo).then(res => {
        console.log(res)
        this.articalList = res
      })
    },
    editArtical (articalId) {
      this.$router.push({name: 'editArtical', query: {articalId}})
    },
    deleteArtical (articalId) {
      let confirmRes = confirm('确认删除吗')
      if (confirmRes) {
        alert('删除成功')
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import 'index';
</style>
