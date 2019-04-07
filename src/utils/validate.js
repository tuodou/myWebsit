const validate = {
  testLoginInfo (loginInfo) {
    if (!loginInfo.username) {
      return '用户名不能为空'
    }
    if (loginInfo.password.length < 6) {
      return '密码长度不能小于6'
    }
    return true
  }
}

export default validate
