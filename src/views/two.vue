<template>
   <div class="two">
      <h2>与首页数据共享</h2>
      <div :style="{marginBottom:'10px'}">总数（不小于0）：{{num}}</div>
      <button @click="clickIncrease">点击+1</button>   <button @click="clickDecrease">点击-2</button>
   </div> 
</template>

<script>
import {computed} from 'vue'
import { useStore} from 'vuex'
export default({
    
    setup() {
        const store = useStore()

        const num = computed(() => store.state.num)
        function clickIncrease(){
          var payload = {count:1}
          store.commit('increase', payload)
        }
        function clickDecrease(){
          var payload = {count:2}
          store.commit('decrease', payload)
        }

        return{
           clickIncrease,
           clickDecrease,
           num
        }
        
    }
})
</script>

<style lang="less" scoped>
.two{
    padding: 10px 10px;
}
</style>
