<template>
  <div class="login" :style="bgStyle">
    <div class="login-content">
      <p class="content-header">login in or register</p>
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
          <a-checkbox defaultChecked @change="rememberMe">remember me</a-checkbox>
        </div>
        <button class="login-btn" @click="loginIn">login in</button>
      </div>
      <div class="copyright">版权所有 | 草帽海贼团</div>
    </div>
  </div>
</template>

<script>
import bgConfig from '@/configs/backgroundConfig'
import validata from '@/utils/validate'
export default {
  name: "login",
  data () {
    return {
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
    this.bgStyle = {
      backgroundImage: `url(${bgConfig.bgList[Math.floor(Math.random() * bgConfig.bgList.length)]})`
    }
  },
  methods: {
    loginIn () {
      if (!this.clickAble) return
      this.clickAble = false
      let testResult = validata.testLoginInfo(this.loginInfo)
      if (testResult === true) {
        this.$router.push('/home')
        this.clickAble = true
      } else {
        console.log(testResult)
        this.$message.error(testResult,this.closeMsg)
      }
    },
    closeMsg () {
      this.clickAble = true
    },
    rememberMe (e) {
      this.loginInfo.remember = e.target.checked
    }
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
