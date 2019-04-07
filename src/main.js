import Vue from 'vue'
import App from './App.vue'
import router from './route'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false

Vue.use(Antd)

import './publicStyle/mainStyle.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
