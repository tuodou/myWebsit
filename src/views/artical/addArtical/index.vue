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
        <a-cascader class="base-info-input" id="type" :options="options" @change="onObjectChange" placeholder="Please select object" />
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
import articalConfig from '@/configs/articalConfig'
export default {
  name: "editArtical",
  components: {
    qEditor
  },
  data () {
    return {
      text: 'this is a default artical text for add.',
      artical: {
        typeId: '',
        title: '',
        auth: '',
        content: ''
      },
      options: articalConfig.getObjectOptions()
    }
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
    onObjectChange (e) {
      this.artical.typeId = e[0]
      console.log(e)
    },
    back () {
      this.$router.back()
    },
    submitArtical () {
      alert('提交成功')
      console.log(this.artical)
      this.back()
    }
  }
}
</script>

<style lang="less" scoped>
@import 'index';
</style>
