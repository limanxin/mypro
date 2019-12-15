// 1. 引入vue
import Vue from 'vue'
// 2. 引入 vue-router
import VueRouter from 'vue-router'

import Login from '@/views/login.vue'
import personal from '@/views/personal.vue'

// 3. user
Vue.use(VueRouter)

// 4. 创建路由对象，进行路由配置
var router = new VueRouter({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'personal',
      path: '/personal/:id',
      component: personal
    }
  ]
})
// 添加导航守卫
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  // next()

  if (to.path.indexOf('/personal/') === 0) {
    let token = localStorage.getItem('hm_token')
    if (token) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    next()
  }
})
// 5. 暴露
export default router
