<template>
  <div class="login" :style="bgStyle">
    <div class="login-content">
      <p class="content-header">sign in or sign up</p>
      <div class="sign-action" @click="chooseSignAction">
        <a-button class="action-item" :class="isLogin ? 'active' : ''">sign in</a-button>
        <a-button class="action-item" :class="isLogin ? '' : 'active'">sign up</a-button>
      </div>
      <div class="content-logo">
        <img class="logo-img" :src="logo" />
      </div>
      <div class="login-form">
        <div class="input-item">
          <label for="username">username</label>
          <input id="username" v-model.trim="loginInfo.username" placeholder="Please input your username" />
        </div>
        <div class="input-item">
          <label for="password">password</label>
          <input id="password" type="password" v-model.trim="loginInfo.password" placeholder="Please input your password" />
        </div>
        <div class="input-item">
          <a-checkbox v-if="isLogin" defaultChecked @change="rememberMe">remember me</a-checkbox>
        </div>
        <button class="login-btn" @click="loginIn">{{isLogin ? 'Sign In' : 'Sign Up'}}</button>
      </div>
      <div class="copyright">版权所有 | 草帽海贼团</div>
    </div>
  </div>
</template>

<script>
import bgConfig from '@/configs/backgroundConfig'
import validata from '@/utils/validate'
import API from '@/api/artical'
export default {
  name: "login",
  data () {
    return {
      isLogin: true,
      loginInfo: {
        username: '',
        password: '',
        remember: true
      },
      logo: bgConfig.login_logo,
      backgroundImg: bgConfig.bgList[Math.floor(Math.random() * bgConfig.bgList.length)],
      bgStyle: {},
      clickAble: true
    }
  },
  created () {
    if (window.localStorage.getItem('userToken')) {
      this.$router.push({name: 'home'})
    }
    this.bgStyle = {
      backgroundImage: `url(${bgConfig.bgList[Math.floor(Math.random() * bgConfig.bgList.length)]})`
    }
  },
  methods: {
    loginIn () {
      if (!this.clickAble) return
      this.clickAble = false
      setTimeout(() => {
        this.clickAble = true
      }, 2000)
      let testResult = validata.testLoginInfo(this.loginInfo)
      if (testResult === true) {
        const inter = this.isLogin ? API.signIn : API.signUp
        inter(this.loginInfo).then(res => {
          console.log('+++++++++++++++++', res)
          window.localStorage.setItem('userToken', res.token)
          this.$router.push('/home')
          this.clickAble = true
        }).catch(err => {
          this.$message.error(err.errorMessage, this.closeMsg)
        })
      } else {
        this.$message.error(testResult, this.closeMsg)
      }
    },
    closeMsg () {
      this.clickAble = true
    },
    rememberMe (e) {
      this.loginInfo.remember = e.target.checked
    },
    chooseSignAction () {
      this.isLogin = !this.isLogin
    }
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
