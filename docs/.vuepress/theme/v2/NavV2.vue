<template>
    <div class="nav-v2">
      <div class="controller-1" @click="$emit('toggle-sidebar-hidden')">
        <span class="humberger hum1"></span>
        <span class="humberger hum2"></span>
        <span class="humberger hum3"></span>
      </div>
      <div class="nav-content">
        <!--缩小扩大--> 
        <div class="controller" @click="$emit('toggle-sidebar-hidden')">
          <span class="humberger hum1"></span>
          <span class="humberger hum2"></span>
          <span class="humberger hum3"></span>
        </div>
        <!--页面logo--> 
        <div class="logo-content">
          <router-link :to="$localePath" class="home-link">
            <img class="logo"
              v-if="$site.themeConfig.logoWhite"
              :src="$withBase($site.themeConfig.logoWhite)">
          </router-link>
        </div>
        <!--页面级别导航-->  
        <div :class="[topNavShow ? 'showTop':' ','guide-link-content']"
          @click="toggleList()">
          <!--当前页面--> 
            <div
              v-for="(item,i) in userLinks"
              v-if="item.link.split('/')[1] == nowPage"
              :class="['nav-guide-link','nav-now']">
              <span>{{item.text}}</span>
            </div>
          <!--全部页面-->  
            <div
              v-for="(item,i) in userLinks"
              :class="['nav-guide-link','nav-other']"
              :key="item.link"
              :style="delay(i)">
              <NavLinkV2 :item="item" :hasIcon="false"/>
            </div>
        </div>
      </div>
      <SubNavV2/>
    </div>
</template>
<script>
import NavLinkV2 from './NavLinkV2.vue'
import SubNavV2 from './SubNavV2.vue'
import { resolveNavLinkItem } from './utilv2'
export default {
  data() {
    return {
      topNavShow: false,
    }
  },  
  components: {NavLinkV2,SubNavV2},
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
    },
    delay (i) {
      return "transition-delay:" + 50 * i + "ms;"
    }
  }
}
</script>

<style lang="stylus">
@import './styles/v2.styl'

// 样式
.controller-1//收起后的汉堡
  position fixed
  width 40px
  height 40px
  background-color #f5f5f5
  top 0
  left 0
  transition .6s all $easeInOutStd 400ms 
  &:hover
    cursor pointer
    .humberger
      &.hum1
        transform rotateZ(45deg) translate(7px,-4px)
        width 12px
      &.hum2
        transform translate(1px,0)
      &.hum3
        transform rotateZ(-45deg) translate(7px,4px)
        width 12px
  .humberger
    transition $stdt 
    display block
    width 16px
    height 1px
    position absolute
    left 10px
    z-index 101
    background-color #000
    &.hum1
      top 14px
    &.hum2
      top 20px
    &.hum3
      top 26px
.v2.sidebar-hidden
  .nav-v2
    transform translateX( - $navWidth)
  .controller-1
    transform translateX($navWidth)
    transition .6s all $easeInOutStd .6s 
.nav-content
  position absolut 
  top 0
  left 0
  .controller
    width 16px
    height 16px
    position absolute
    top 36px
    right 20px
    z-index 100
    opacity .4
    &:hover
      cursor pointer
      .humberger
        &.hum1
          transform rotateZ(-45deg) translate(-2px,1px)
          left 0
          width 12px
        &.hum2
          transform translate(1px,0)
        &.hum3
          transform rotateZ(45deg) translate(-2px,-1px)
          left 0
          width 12px
    .humberger
      transition $stdt 
      display block
      width 16px
      height 1px
      position absolute
      left 0
      z-index 101
      background-color #fff
      &.hum1
        top 5px
      &.hum2
        top 11px
      &.hum3
        top 17px
.nav-v2
  transition .6s all $easeInStd
  width $navWidth
  position fixed
  top 0
  left 0
  bottom 0
  background-color #212121
  z-index 21
.nav-v2 .logo-content// logo
  width 100%
  height 80px
  position relative
  display block
  background-color #212121
  .logo
    height 18px
    top 60%
    left 20px
    position absolute
    transform translate(0,-50%)
    opacity .85
    transition $stdt
    &:hover
      opacity 1
.nav-v2 .guide-link-content// 主导航
  &.showTop//主导航显示
    height 5 * $bigNavHeight
    .nav-guide-link
      &.nav-other
        transform translateX(0px)
        transition .6s all $easeInOutStd  
        opacity 1
  width 100%
  height $bigNavHeight
  transition .6s all $easeInOutStd //展开动画
  overflow-y hidden
  .nav-guide-link
    height $bigNavHeight 
    &.nav-now
      cursor pointer
      span 
        padding 0 20px
        color $white85
  .nav-guide-link
    &.nav-other
      transform translateX(-40px)
      transition .6s all $easeInOutStd
      opacity 0
    a
      color $white45//主导航文字颜色
      &:hover
        color #fff
    span 
      line-height $bigNavHeight 
      display block
      font-size 14px
      font-weight 600
      padding 0 20px
      transition $stdt
</style>

