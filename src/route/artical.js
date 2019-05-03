const EditArtical = () =>  import('@/views/artical/editArtical')
const AddArtical = () =>  import('@/views/artical/addArtical')
const ArticalList = () => import('@/views/artical/articalList')
const ArticalDetail = () => import('@/views/artical/articalDetail')
export default [
  {
    path: '/artical/articalList',
    name: 'articalList',
    component: ArticalList,
    meta: {
      title: 'ArticalList'
    }
  },
  {
    path: '/artical/editArtical',
    name: 'editArtical',
    component: EditArtical,
    meta: {
      title: 'editArtical'
    }
  },
  {
    path: '/artical/addArtical',
    name: 'addArtical',
    component: AddArtical,
    meta: {
      title: 'addArtical'
    }
  },
  {
    path: '/artical/articalDetail',
    name: 'articalDetail',
    component: ArticalDetail,
    meta: {
      title: 'articalDetail'
    }
  }
]
