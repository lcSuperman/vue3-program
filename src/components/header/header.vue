<template>
   <div class="header">
      <div class="left">
          <i @click="collapse" class="iconfont icon-Shankar"></i>
      </div>
      <div class="right">
        <el-button size="small" @click="handleLogout">退出</el-button>
      </div>
   </div>
   
   
</template>

<script>
 import {ElMessage} from 'element-plus' 
 import common from '@/utils/common'

  export default {
    data(){
        return{
          isCollapse:common.ISCOLLAPSE,
        }
    },
    components:{
    
    },
    methods:{
       handleLogout(){
         ElMessage({
            message: '退出成功',
            type: 'success',
          })
          setTimeout(() => {
            this.$router.push({ path: '/'})
             sessionStorage.setItem('activeMenu',null)
          },500)   
       },

       collapse(){
          this.isCollapse = !this.isCollapse
          this.$bus.emit('isCollapse',this.isCollapse)
       }

    }
     
  }

</script>

<style lang="less" scoped>
 .header{
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .left{
       height:100%;
       width: 60%;
       display:flex;
       align-items: center;
       .icon-Shankar{
          cursor: pointer;
       }
    }
 }

</style>