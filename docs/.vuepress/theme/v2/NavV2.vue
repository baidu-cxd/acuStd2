<template>
    <div class="header">
      <div class="std-wrp-v2">
        <!--页面logo--> 
        <router-link :to="$localePath" class="home-link">
          <img class="logo"
            v-if="$site.themeConfig.logo"
            :src="$withBase($site.themeConfig.logo)">
        </router-link>
        <!--页面级别导航-->  
        <div class="top-nav-wrp clear-float"
          @mouseleave="toggleList()"
          @mouseenter="toggleList()">
          <div
          v-for="(item,i) in userLinks"
          :class="[item.link.split('/')[1] == nowPage ? 
          'active' : '', 'nav-current']"
          :key="item.link">
            <NavLink :item="item" :hasIcon="true"/>
          </div>
          <transition name="fade">
          <ul class="nav-list clear-float" 
            v-show="topNavShow" 
            transiton="fade">
            <li v-for="item in userLinks" :key="item.link"
              :class="[item.link.split('/')[1] == nowPage ? 
              'active-li' : '', 'nav-li']">
                <NavLink :item="item" :hasIcon="true"/>
            </li>
          </ul>
          </transition>
        </div>
      </div>
    </div>
</template>


<script>
import NavLink from '../NavLink.vue'
import { resolveNavLinkItem } from '../util'
export default {
  data() {
    return {
      topNavShow: false,
    }
  },  
  components: {NavLink},
  computed: {
    userNav () {
      return this.$site.themeConfig.topNav
    },
    userLinks () {
      return (this.userNav || []).map((link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      }))
    },
    nowPage : function () {
      return this.$page.path.split('/')[1]
    }
  },
  methods: {
    toggleList () {
      this.topNavShow = !this.topNavShow
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/config.styl'
@import '../styles/v2.styl'
//配置
.top-nav-wrp
  width $navWidth
  margin-left $logoWidth
  height $headerHeight * 1
  overflow hidden
  &:hover
    box-shadow 0 5px 10px 0 $black10
    transition: all .15s $easeOutStd
    height $headerHeight * 4
.theme-container.v2 .logo
  float left
  height 16px
  margin-top 0.5 * ($headerHeight - 16px )
  margin-left 0

.theme-container.v2 .header
  box-shadow 0 2px 10px $black10
  width 100%
  height $headerHeight
  background-color #fff
  position fixed
  z-index 1000
  top 0
  left 0
  ul.nav-list
    padding 0
    margin 0
    width $navWidth
    background-color #fff
    li
      float left
  .nav-current,.nav-list li
    width $navWidth
    overflow hidden
    &.active-li
      height 0
      overflow hidden
    &:hover
      background-color #108cee
      span
        color #fff 
    a.nav-link
      color $black60
      width 100%
      height $headerHeight
      display block
      img
        width $iconSize
        height $iconSize
        margin-top 0.5 * ($headerHeight - $iconSize)
        margin-left 24px
        float left
      span 
        line-height $headerHeight
        display block
        float left
        margin-left 24px
        font-size 14px
    a.router-link
      color $black85
  .nav-current
    display none
    height 0
    &.active
      height auto
      display block
    a.nav-link
      display block
      color $black85
      line-height $headerHeight
//动画
.fade-enter-active
  transition: all .3s $easeOutSine
.fade-leave-active
  transition: all .3s $easeInSine
.fade-enter, .fade-leave-to
  opacity: 0
</style>

