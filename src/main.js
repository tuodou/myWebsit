import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from '@/store'

import 'lib-flexible/flexible'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import './assets/styles/index.less'
Vue.config.productionTip = false

Vue.use(Antd)

import './publicStyle/mainStyle.less'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
