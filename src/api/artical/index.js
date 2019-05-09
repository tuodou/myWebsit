import { Post } from '@/plugins/axios'

export default {
  signIn (data) {
    console.log(data)
    return Post('/signIn', data)
  },
  signUp (data) {
    return Post('/signUp', data)
  },
  getSubjectList (data) {
    return Post('/artical/getSubjectList')
  },
  getArticalList (typeInfo) {
    return Post('/artical/addArticalList', typeInfo)
  },
  getArticalDetail (articalId) {
    return Post('/artical/getArticalDetail', {articalId})
  },
  addArtical (artical) {
    return Post('/artical/addArtical', artical)
  },
  updateArtical (artical) {
    return Post('/artical/updateArtical', artical)
  },
  deleteArtical (articalId) {
    return Post('/artical/delete', {articalId})
  }
}
