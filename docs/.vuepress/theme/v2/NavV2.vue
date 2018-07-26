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
              v-if="$site.themeConfig.logo"
              :src="$withBase($site.themeConfig.logo)">
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
              <span class="text">{{item.text}}</span>
              <div class="arr">
                <span class="point1 point"></span>
                <span class="point2 point"></span>
                <span class="point3 point"></span>
              </div>
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
      return "transition-delay:" + (50 * i + 50) + "ms;"
    }
  }
}
</script>

<style lang="stylus">
@import './styles/v2.styl'

// 样式

//顶部的三个点
.showTop .nav-now:hover .arr
  span.point
    opacity .8
    width 16px
    height 1px
    border-radius 0
    &.point1
      top 9px
      transform rotateZ(45deg) 
      left 3px  
    &.point2
      transform scale(0)
      width 2px
    &.point3
      top 9px
      transform rotateZ(-45deg) 
      left 3px       
.nav-now:hover .arr
  span.point
    opacity .8
    width 10px
    height 1px
    border-radius 0
    &.point1
      top 9px
      transform rotateZ(45deg) 
    &.point2
      transform scale(0)
      width 2px
    &.point3
      top 9px
      transform rotateZ(-45deg) 
      left 9px    
.nav-now .arr
  width 20px
  height 20px
  position absolute
  //background-color #000
  right 20px
  top 10px
  overflow hidden
  span.point 
    display block
    width 2px
    height 2px
    border-radius 100px
    background-color #000
    padding 0
    position absolute
    top 8px
    opacity .5
    transition $stdt
    &.point1
      left 2px
    &.point2
      left 9px
    &.point3
      left 16px
.controller-1//收起后的汉堡
  position fixed
  width 40px
  height 40px
  background-color #f5f5f5
  top 0
  left 0
  transition .4s all $easeInOutStd 400ms 
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
    transition .4s all $easeInStd
    transform translateX( - $navWidth) //隐藏动画
  .controller-1
    transform translateX($navWidth)
    transition .4s all $easeInOutStd .4s 
.nav-content
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
      opacity 1
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
      background-color #000
      &.hum1
        top 5px
      &.hum2
        top 11px
      &.hum3
        top 17px
.nav-v2
  transition .4s all $easeOutStd
  width $navWidth
  position fixed
  top 0
  left 0
  bottom 0
  background-color #f5f5f5
  border-right 1px solid #ebebeb
  z-index 21
.nav-v2 .logo-content// logo
  width 100%
  height 80px
  position relative
  display block
  background-color #f5f5f5
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
        transition .4s all $easeOutStd 
        opacity 1
  width 100%
  height $bigNavHeight
  transition .4s all $easeInOutStd //展开动画
  overflow-y hidden
  .nav-guide-link
    height $bigNavHeight 
    &.nav-now
      cursor pointer
      position relative
      span.text 
        padding 0 20px
        color $black85
  .nav-guide-link
    &.nav-other
      transform translateX(-40px)
      transition .4s all $easeInStd 
      opacity 0
    a
      color $black60//主导航文字颜色
      &:hover
        color #000
    span.text
      line-height $bigNavHeight 
      display block
      font-size 14px
      font-weight 600
      padding 0 20px
      transition $stdt
</style>

