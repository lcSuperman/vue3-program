import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import 'element-plus/lib/theme-chalk/index.css'
import '@/assets/css/base-css.css'
import elementPlus from './plugins/element'
import * as ElIconModules from '@element-plus/icons'

const app = createApp(App)

// 按需导入Element Plus组件和插件
elementPlus.forEach(component => {
  app.component(component.name, component)
})

// 统一注册Icon图标
for (const iconName in ElIconModules) {
    if (Reflect.has(ElIconModules, iconName)) {
      const item = ElIconModules[iconName]
      app.component(iconName, item)
    }
  }

app.use(router)
app.mount('#app')
