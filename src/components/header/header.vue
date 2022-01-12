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
 import {useRoute} from 'vue-router'
 import common from '@/utils/common'
 import {ref,getCurrentInstance} from 'vue'

  export default {
   setup(){

     let isCollapse = ref(common.ISCOLLAPSE)

     let router = useRoute()
     let vueEvent = getCurrentInstance().appContext.config.globalProperties.vueEvent

     function handleLogout(){
         ElMessage({
            message: '退出成功',
            type: 'success',
          })
          setTimeout(() => {
             router.push({ path: '/'})
             sessionStorage.setItem('activeMenu',null)
          },500)   
     }

     function collapse(){
         isCollapse.value = !isCollapse.value
         vueEvent.emit('isCollapse',isCollapse.value)
     }

     return{
      isCollapse,
      handleLogout,
      collapse
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