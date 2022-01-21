<template>
  <div class="login">
     <div class="beijing"></div>
     <div class="login-form">
        <div class="logo">
          <img src="@/assets/logo.png" alt="logo">
        </div>
        <el-form
          ref="loginForm"
          :model="loginData.ruleForm"
          status-icon
          :rules="loginData.rules"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item  prop="userName">
            <el-input v-model="loginData.ruleForm.userName" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item  prop="pass">
            <el-input
              v-model="loginData.ruleForm.pass"
              type="password"
              placeholder="密码"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(loginForm)">登录</el-button>
          </el-form-item>
        </el-form>
     </div>
  </div>
</template>

<script >
import { ElMessage } from 'element-plus'
import { checkUserName,validatePass } from '@/utils/validator'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

export default{
  setup(){
    let router = useRouter()
    let loginForm = ref(null)
    let loginData = reactive({
      ruleForm:{
        pass: '',
        userName:''
      },
      rules:{
        pass: [{ validator: validatePass, trigger: 'blur' }],
        userName: [{validator: checkUserName, trigger: 'blur' }],
      }
    })

   function submitForm(formEl){
     formEl.validate((valid) => {
        if (valid) {
          ElMessage({
            message: '欢迎进入忍者世界',
            type: 'success',
          })
          setTimeout(() => {
            router.push({ path: '/home'})
          },500)
        } else {
          ElMessage.error('登录失败')
          return false
        }
      })
    }

    return{
      loginForm,
      loginData,
      submitForm
    }
  }
}
</script>

<style lang="less" scoped>
.login{
  height:100%;
  width: 100%;
  position: relative;
  background-color: #fff;
  .beijing{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top:0px;
    background: url('../assets/images/login-background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
  }
  .login-form{
    width: 30%;
    background-color: #fff;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 5px 10px 2px #f0efef;
    border-radius: 10px;
    padding:20px 0 30px 0;
    .logo{
      width: 25%;
      height: 30%;
      min-width: 120px;
      min-height: 120px;
      margin: 0 auto;
      margin-bottom: 10px;
      img{
        width: 100%;
        height:100%;
      }
    }
    .el-form{
      padding-right: 100px;
      min-width: 300px;
      min-height: 165px;
      .el-button{
        width: 100%;
      }
    }
  }
}

</style>
