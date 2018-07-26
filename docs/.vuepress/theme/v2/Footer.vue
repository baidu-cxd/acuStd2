<template>
  <div class="footer">
    <p>Copyright ©2018 Cxd-Design</p>
  </div>
</template>

<style lang="stylus">
  @import './styles/V2.styl'
  .v2 .footer
    transition .6s margin $easeOutStd 200ms
    margin-left $navWidth
    height 40px
    background-color #293035
    p
      text-align center
      line-height 40px
      color $white
      opacity 1
  .v2.sidebar-hidden .footer
    margin-left 0
    transition .6s margin $easeInStd
</style>

