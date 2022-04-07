<template>
   <div class="home">
       <h2>vuex共享状态管理测试</h2>
      <div :style="{marginBottom:'10px'}">总数（不小于0）：{{num}}</div>
      <button @click="clickIncrease">点击+2</button>   <button @click="clickDecrease">点击-1</button>
   </div> 
   <div class="bff">
       <el-table :data="componentDate.tableData" style="width: 100%">
          <el-table-column prop="name" label="Name"  />
          <el-table-column prop="date" label="Date"  />
          <el-table-column prop="address" label="Address" />
        </el-table>

   </div>
</template>

<script>
import { getUser,getHome} from '@/api/api'
import {computed, onMounted,reactive} from 'vue'
import { useStore} from 'vuex'
export default({
    
    setup() {

        let componentDate = reactive({
          tableData:[],
        })

        const store = useStore()

        const num = computed(() => store.state.num)
        function clickIncrease(){
          var payload = {count:2}
          store.commit('increase', payload)
        }
        function clickDecrease(){
          var payload = {count:1}
          store.commit('decrease', payload)
        }

        onMounted(() => {
          getTableData() 
        })

        function getTableData(){
          //初始化加载调取两个接口
           var userData = []
           var homeData =[]
           //第一个接口
           getUser()
           .then(res => {
              userData = res.data
            })
           .then(
              //第二个接口
              getHome().then(res => {
                homeData = res.data
                //拿到两个接口返回的数据再进行组合
                if(res.status == 200){
                    componentDate.tableData = [...userData,...homeData]
                }
              })
           )

        }

        return{
           clickIncrease,
           clickDecrease,
           num,
           componentDate,
           getTableData
        }
        
    }
})
</script>

<style lang="less" scoped>
.home{
    padding: 10px 10px;
}
.bff{
  margin-top: 20px;
  height: 60px;
  background-color: rgb(174, 174, 175);
}
</style>
