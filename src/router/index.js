/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入4个路由组件
import Home from '../assets/Home/Home.vue'
import Search from '../assets/Search/Search.vue'
import Order from '../assets/Order/Order.vue'
import Profile from '../assets/Profile/Profile.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由及对应路径
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
