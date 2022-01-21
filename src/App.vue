<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>

import {onMounted,onUnmounted} from 'vue'
import { useRouter} from 'vue-router'

export default {
  setup(){

    //监听浏览器回退按钮，点击回退还是当前页
    let router = useRouter()
    onMounted(() => {
      if(window.history && window.history.pushState){
        window.addEventListener('popstate',goback,'')
      }
    })
    onUnmounted(() => {
       window.removeEventListener('popstate',goback,'')
    })
    function goback(){
      if(window.history.state.forward){
         var path = window.history.state.forward
         router.push(path)
      }  
    }

    return{
     goback,
    }
  }
}
</script>

<style>
.app {
  height: 100%;
  width: 100%;
}
</style>
