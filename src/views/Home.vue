<template>
  <div class="home">
     <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>  
</template>



<style lang="less" scoped>
.home{
  height: 100%;
  .el-container {
  height: 100%;
  .el-aside {
    background-color: #d3dce6;
  }
  .el-header{
     background-color: #b3c0d1;
  }
  .el-main{
    background-color: #e9eef3;
  }
}

}


 

</style>