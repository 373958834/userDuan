<template>
  <div class="login-container">
    <el-card class="login-box">
      <div class="login-header">欢迎登录</div>
      <!-- 账号:<el-input placeholder="请输入内容" v-model="input" clearable></el-input> -->
      <el-form ref="loginForm" :model="loginForm" :status-icon="true" class="demo-ruleForm">
        <el-form-item prop="mobile" label="账号">
          <el-input v-model="loginForm.username" placeholder="请输入账号" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item prop="code" label="密码">
          <el-input v-model="loginForm.password" placeholder="请输入密码" style= "width:300px" ></el-input>
          <!-- <el-button style="float:right">获取验证码</el-button> -->
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login()" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'test',
        password: '123456'
      },
      code: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        { len: 6, message: '请输入6位数字', trigger: 'blur' }
      ]
    }
  },
  methods: {
    // 登录
    login () {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          try {
            const res = await this.$http.post('/index.php/index/wxapp.login/simple', this.loginForm)
            console.log(res)
            window.sessionStorage.setItem('hehe', JSON.stringify(res.data.data))

            this.$router.push({ name: 'home', params: { res: res.data.data } })
          } catch (err) {
            this.$message.error('手机号或验证码错误')
          }
        }
      })
    }
  }
}
</script>

<style>
.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url(../../assets/images/bg.jpg) no-repeat center / cover;
}
.login-box {
  width: 500px;
  height: 400px;
  padding: 0px 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, .3);
}
img {
  display: block;
  width: 200px;
  margin: 10px auto;
}
.demo-ruleForm {
  margin-top: 20px;
  /* text-align: center; */
  /* opacity: .6; */
}
.el-form-item__label {
  color: #409eff;
}
.login-header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 30px;
}
</style>
