import {createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import mitt from 'mitt'
import './mock/index'

import 'element-plus/lib/theme-chalk/index.css'
import '@/assets/css/base-css.css'
import '@/icons/iconfont.css'
import store from './store'
// import elementPlus from './plugins/element'

const app = createApp(App)

app.config.globalProperties.vueEvent = mitt()  //vue3创建bus事件总线

// 按需导入Element Plus组件和插件
// elementPlus.forEach(component => {
//   app.component(component.name, component)
// })

app.use(ElementPlus)//全部引入Element Plus组件
app.use(router)
app.use(store)
app.mount('#app')
