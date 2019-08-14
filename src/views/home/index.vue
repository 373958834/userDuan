<template>
  <el-container class="home-container">
    <div class="home">
      <el-card>
        <div class="home-header">
      个人信息
        </div>
        <el-row>
          <el-col :span="12">
            <!-- 表单 -->
            <el-form :model="userForm" label-width="120px" lable-height="100px">
              <el-form-item label="昵称：">{{userForm.nickname}}</el-form-item>
              <el-form-item label="手机：">{{userForm.mobphone}}</el-form-item>
              <el-form-item label="真实姓名：">{{userForm.truename}}</el-form-item>
              <el-form-item label="自我介绍：">{{userForm.introduce}}</el-form-item>
              <el-form-item label="邮箱：">{{userForm.email}}</el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12">
            <!-- 显示头像 -->
              <img v-if="userForm.icon" :src="userForm.icon" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      userForm: {
        nickname: null,
        email: null,
        icon: null,
        introduce: null,
        mobphone: null,
        truename: null

      }
    }
  },
  created () {
    // 获取用户信息
    // console.log(this.$route.params.res)
    const data = window.sessionStorage.getItem('hehe')
    // this.userForm = this.$route.params.res
    this.userForm = JSON.parse(data)
    // console.log(this.userForm)
  },
  methods: {

  }
}
</script>

<style scoped lang='less'>
.home {
  width: 60%;
  margin: 0 auto;
  .home-header {
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    text-align: center;

  }
}
</style>
