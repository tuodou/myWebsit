import { Post } from '@/plugins/axios'

export default {
  signIn (data) {
    console.log(data)
    return Post('/signIn', data)
  },
  signUp (data) {
    return Post('/signUp', data)
  },
  getArticalList (typeInfo) {
    return Post('/artical/getList', typeInfo)
  },
  getArticalDetail (articalId) {
    return Post('/artical/detail', {articalId})
  },
  addArtical (artical) {
    return Post('/artical/add', {artical})
  },
  updateArtical (artical) {
    return Post('/artical/update', {artical})
  },
  deleteArtical (articalId) {
    return Post('/artical/delete', {articalId})
  }
}
