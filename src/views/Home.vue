<template>
  <div class="home">
     <el-container>
      <el-aside :width="isCollapse ? '64px' : '165px'">
        <Logo />
        <LeftMenusVue />
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          <div class="main">  
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>  
</template>

<script>
import LeftMenusVue from '../components/leftAside/leftMenus.vue'
import Logo from '../components/leftAside/logo.vue'
import Header from '../components/header/header.vue'
import common from '@/utils/common'

export default {
  data(){
    return{
     isCollapse:common.ISCOLLAPSE
    }
  },
  setup() {
    
  },
  components:{
    LeftMenusVue,
    Logo,
    Header,
  },
  created(){
   this.$bus.on('isCollapse',value => {
      this.isCollapse = value
   })
  },
  mounted(){
    
  },
  methods:{
   
  }
}
</script>



<style lang="less" scoped>
 @import '~@/assets/less/styles.less';
.home{
  height: 100%;
  .el-container {
  height: 100%;
  .el-aside {
    background-color: @left-aside;
    transition: width .5s;
    overflow: hidden;
  }
  .el-header{
     background-color:@header-color;
  }
  .el-main{
    background-color: #fff;
    .main{
      width: 100%;
      height:100%;
      background-color: #f6f6f6;    
    }
  }
}

}


 

</style>