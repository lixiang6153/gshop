/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
// 引入路由器
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  // 配置路由器: 结果-多了几个组件标签router-link，router-vue,keepalive
  // 多了两个属性可以访问：$router,$root
  router
})
