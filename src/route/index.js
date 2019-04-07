import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/views/home')
const Login = () => import('@/views/login')

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: 'home'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: 'login'
      }
    },
    {
      path: '*',
      component: Home
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to, from, next) => {

})

export default router
