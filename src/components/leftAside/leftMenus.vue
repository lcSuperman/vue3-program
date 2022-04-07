<template>
  <el-menu
    class="el-menu-vertical-demo"
    router
    :collapse="leftMenusDate.isCollapse"
    @select="handleSelect"
    :default-active="leftMenusDate.defaultactive"
    text-color="#fff"
    active-text-color="#000"
  >
    <div v-for="item in leftMenusDate.menusData" :key="item.id">  
      <el-submenu v-if="item.children"  :index="item.router">
        <template #title>
           <i class="iconfont" :class="item.icon"></i>
           <!-- 这里用v-show是解决收起时一级菜单文字不隐藏问题 -->
           <span v-show="!leftMenusDate.isCollapse">{{item.label}}</span>
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
import { getMenus} from '@/api/api'
import {defineComponent,reactive,getCurrentInstance,onMounted} from 'vue'
import common from '@/utils/common'

export default defineComponent({
  setup(){ 
    
    //把数据变成响应式
    let leftMenusDate = reactive({
      defaultactive:null,
      isCollapse:common.ISCOLLAPSE,
      menusData:[],
    })

    //点击菜单触发点击样式和回显样式逻辑
        //利用事件中心机制触发activeMeus事件设置被点击的菜单，回显点击样式
      let vueEvent = getCurrentInstance().appContext.config.globalProperties.vueEvent
      vueEvent.on('activeMeus',value => {
        leftMenusDate.defaultactive = value
      })
      onMounted(() => {
        getMenusData()
        //浏览器刷新后，从sessionStorage中获取之前保存的菜单index
        leftMenusDate.defaultactive =  sessionStorage.getItem('activeMenu')
      })
      function handleSelect(index){
        leftMenusDate.defaultactive = index
        //把目前点击的菜单index存到sessionStorage中，保证浏览器刷新时还是之前触发的菜单
        sessionStorage.setItem('activeMenu',index)
      }

    //利用事件中心机制触发isCollapse事件，设置菜单是否展开
    vueEvent.on('isCollapse',value => {
      leftMenusDate.isCollapse = value
    })

    //从接口获取菜单数据
    function getMenusData(){
      getMenus().then( response => {
         leftMenusDate.menusData = response.data
      })
    }

  

    return{
      leftMenusDate,
      handleSelect,
      getMenusData
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
  .el-icon-arrow-right{
    display: none;
  }

}

</style>