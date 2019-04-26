import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({   /* 一个路由就是一个页面，一个页面里面可以有好几个组件 */
  routes: [
    {
      path:'/',
      name:'Home', //组件名是字符串
      component:Home  //上边引进来的组件，不是字符串
    }
  ]
})
