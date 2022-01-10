<template>
   <el-header >
     <img @click="click" src="@/assets/logo.png" alt="LOGO">
   </el-header>
</template>

<script>

 export default{
   methods:{
     click(){
      this.$router.push({path:"/home"})
      this.$bus.emit('activeMeus',null)
      sessionStorage.setItem('activeMenu',null)
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