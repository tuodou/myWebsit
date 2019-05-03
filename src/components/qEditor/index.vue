<template>
  <quill-editor
    v-model="contentText"
    @blur="editBlur($event)"
    @focus="editFocus($event)"
    @change="editChange($event)"
  />
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
  name: "qEditor",
  components: {
    quillEditor
  },
  props: {
    content: {
      type: String,
      default: 'Please input something ...'
    }
  },
  data () {
    return {
      contentText: 'Please input something ...'
    }
  },
  watch: {
    content () {
      this.contentText = this.content
    }
  },
  methods: {
    editBlur (e) {
      this.$emit('onBlur', e)
    },
    editFocus (e) {
      this.$emit('onFocus', e)
    },
    editChange (e) {
      this.$emit('onChange', { html: e.html, text: e.text, content: this.contentText })
    }
  }
}
</script>

<style scoped>

</style>
