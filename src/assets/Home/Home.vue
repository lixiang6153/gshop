<template>
  <!--第三部：使用HeaderTop标签
              动态设置title属性值-->
  <HeaderTop title="南海万科广场">
    <!--指定第一个插槽,对应插槽名-->
    <span class="header_search" slot="left">
      <i class="iconfont iconsearch"></i>
    </span>
    <span class="header_login" slot="right">
      <span class="header_login_text">登录|注销</span>
    </span>
  </HeaderTop>
</template>

<script>
// 第一步导出headertop组件
import HeaderTop from '../../components/HeaderTop/HeaderTop'
// 第二部：映射为标签
export default {
  components: {HeaderTop}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
