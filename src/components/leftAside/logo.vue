<template>
   <el-header >
     <img @click="click" src="@/assets/logo.png" alt="LOGO">
   </el-header>
</template>

<script>
import {useRouter} from 'vue-router'
import {getCurrentInstance} from 'vue'
 export default{
   setup(){
    let router = useRouter()
    let vueEvent = getCurrentInstance().appContext.config.globalProperties.vueEvent
    
    function click(){
      router.push({path:"/home"})
      vueEvent.emit('activeMeus',null)
      sessionStorage.setItem('activeMenu',null)
    }

    return{
      click
    }
   }
 }

</script>

<style lang="less" scoped>
 @import '~@/assets/less/styles.less';
.el-header{
  background-color:@left-aside !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img{
    width: 60px;
    height: 60px;
    cursor: pointer;
  }
}
</style>