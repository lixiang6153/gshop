<template>
  <div id="app">
    <router-view />
    <FooterGuid />
  </div>
</template>

<script>
// 引入导航条
import FooterGuid from './components/FooterGuide/FooterGuid'
// 将Footer映射成标签然后在html中使用：注意components
export default {
  components: {
    FooterGuid
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
