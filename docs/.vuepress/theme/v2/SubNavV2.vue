<template>
  <div class="sub-nav-v2">
    <div class="sub-nav-content">
      <!-- 动画文档的导航栏 -->
      <transition name="fade-nav">
      <ul :key="nowPage">
        <li v-for="(item,i) in resolveItem()">
          <NavLinkV2 :item="item" :hasIcon="false"/>
        </li>
      </ul>
      </transition>
    </div>
  </div>
</template>
<style lang="stylus">
@import './styles/V2.styl'
.sub-nav-v2
  width 100%
  &:before
    content ""
    display block
    height 1px
    background-color $black10
    margin 10px 20px
  ul
    padding 0
    margin 0
    a 
      height $navHeight 
      line-height $navHeight 
      cursor pointer
      padding 0 20px
      color $black60
      transition $stdt
      &:hover
        color #108cee
    a.router-link-exact-active
      color #000
      font-weight 500
.sub-nav-content
  position relative
  ul
    position absolute
    top 0

.fade-nav-enter-active
  transition: all .4s $easeInOutStd 50ms
.fade-nav-leave-active 
  transition: all .4s $easeInOutStd
.fade-nav-enter
  opacity: 0
  transform translateX(-20px)
.fade-nav-leave-active 
  opacity: 0
  transform translateX(20px)
</style>

<script>
import NavLinkV2 from './NavLinkV2.vue'
export default {
  components: {NavLinkV2},
  computed: {
    nowPage : function () {
      return this.$page.path.split('/')[1]
    },
    animateNav () {
      return this.$site.themeConfig.animateNav
    },
    labNav () {
      return this.$site.themeConfig.labNav
    },
    portalNav () {
      return this.$site.themeConfig.portalNav
    },
  },
  methods: {
    resolveItem () { 
      return this[this.nowPage+"Nav"]
    }
  }
}
</script>

