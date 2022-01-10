export default [
    {
        path: 'one',
        name: 'OneOne',
        component: () => import('@/views/one/one-one.vue')
      },
      {
        path: 'two',
        name: 'OneTwo',
        component: () => import('@/views/one/one-two.vue')
      },
      {
        path: 'three',
        name: 'OneThree',
        component: () => import('@/views/one/one-three.vue')
      }
]