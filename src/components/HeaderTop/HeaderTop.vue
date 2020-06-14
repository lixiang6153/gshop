<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  // 组件需要接受的属性
  props: {
    title: String
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    height 50px
</style>
