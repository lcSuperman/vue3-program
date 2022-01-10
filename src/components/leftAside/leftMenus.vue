<template>

  <el-menu
    class="el-menu-vertical-demo"
    router
    :collapse="isCollapse"
    @select="handleSelect"
    :default-active="defaultactive"
    text-color="#fff"
    active-text-color="#000"
  >
    <div v-for="item in menusData" :key="item.id">  
      <el-submenu v-if="item.children"  :index="item.router">
        <template #title>
           <i class="iconfont" :class="item.icon"></i>
           <span v-show="!isCollapse">{{item.label}}</span>
        </template>
          <el-menu-item v-for="ite in item.children" :key="ite.id" :index="ite.router"> 
            <template #title>
              <span>{{ite.label}}</span>
            </template>
          </el-menu-item>
      </el-submenu>
      <el-menu-item v-else :index="item.router" >
          <i class="iconfont" :class="item.icon"></i>
          <template #title>{{item.label}}</template>
      </el-menu-item>
    </div>    
  </el-menu>
</template>

<script >
import { defineComponent } from 'vue'
import { getMenus} from '@/api/api'
import common from '@/utils/common'

export default defineComponent({
  data(){
    return{
      defaultactive:null,
      isCollapse:common.ISCOLLAPSE,
      menusData:[],
    }
  },

  setup() { 

  },

  created(){
   this.$bus.on('activeMeus',value => {
      this.defaultactive = value
   })
   this.$bus.on('isCollapse',value => {
      this.isCollapse = value
   })
  },

  mounted(){
    this.getMenusData()
    this.defaultactive =  sessionStorage.getItem('activeMenu')
  },

  methods:{
    handleSelect(index){
      this.defaultactive = index
      sessionStorage.setItem('activeMenu',index)
    },
    getMenusData(){
      getMenus().then( response => {
         this.menusData = response.data
      })
    }
  }


})
</script>

<style lang="less">
@import '~@/assets/less/styles.less';
.el-menu{
  border-right:none;
  background-color:@left-aside;
  .el-menu-item{
    font-size:15px; 
    color: @left-saide-text;
  }
  .el-menu-item:hover{
     background-color:@menus-hover;
  }
  li.el-menu-item.is-active{
    background-color: #fff;
    
  }
  li.el-submenu.is-active .el-submenu__title{
     color: #000 !important;
    i{
      color: #000;
    }
  }
 
  .el-submenu__icon-arrow{
    color: @left-saide-text;
  }
  
  .el-submenu__title:hover{
     background-color:@menus-hover;
  }
  .iconfont{
   padding-right: 8px;
   color: @left-saide-text;
   
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
   width: 200px;
   min-height: 400px;
  }

}

</style>