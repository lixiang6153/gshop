<template>
  <footer class="footer_guide">
    <a href="javascript:;" class="guide_item" :class="{on: '/home'===$route.path}" @click="goTo('/home')">
      <span>
        <i class="iconfont iconshouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/search'===$route.path}" @click="goTo('/search')">
      <span>
        <i class="iconfont iconsearch"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/order'===$route.path}" @click="goTo('/order')">
      <span>
        <i class="iconfont icondingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/profile'===$route.path}" @click="goTo('/profile')">
      <span>
        <i class="iconfont iconwode"></i>
      </span>
      <span>我的</span>
    </a>
  </footer>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
    // 每个页面的内容
    .content
      >div // 决定哪个页面显示
        display none
        &.on
          display block
        >section
          .header // 头部公共css
            backgroud-color #02a774
            position fixed
            z-index 100
            left 0
            top 0
            width 100%
            height 45px
            .header_search
              position absolute
              left 15px
              top 50%
</style>
