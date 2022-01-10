import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import one from './routerModule/one'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children:[
      {
        path: '',
        name: '首页',
        component: () => import('../views/index')
      },
      {
        path: 'one',
        name: 'One',
        component: () => import('../views/one/index.vue'),
        children:[
           ...one
        ]
      },
      {
        path: 'two',
        name: 'Two',
        component: () => import('../views/two.vue')
      },
      {
        path: 'three',
        name: 'Three',
        component: () => import('../views/three.vue')
      },
      {
        path: 'four',
        name: 'Four',
        component: () => import('../views/four.vue')
      },
      {
        path: 'five',
        name: 'Five',
        component: () => import('../views/five.vue')
      },
      {
        path: 'six',
        name: 'Six',
        component: () => import('../views/six.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
