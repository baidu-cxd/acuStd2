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
        <div class="top-nav-wrp"
          @mouseleave="toggleList()"
          @mouseenter="toggleList()">
          <div
          v-for="(item,i) in userLinks"
          :class="[item.link.split('/')[1] == nowPage ? 
          'active' : '', 'nav-current']"
          :key="item.link">
            <NavLink :item="item" :hasIcon="flase"/>
          </div>
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
//样式
.v2 .header 
  height $headerHeightV2 //顶部高度
  position relative
  .logo//.logo
    width $logoWidth
    position absolute
    top 50%
    transform translateY(-50%)
    left 0
  .top-nav-wrp
    width 100%
    height $headerHeightV2
    margin 0 $searchWidth 0  $logoWidth + 80px
    a
      width 25%
      heihgt $headerHeightV2
      display block
      float left
      line-height $headerHeightV2
      color #000
      opacity .85
      text-align center
      &:hover
        cursor pointer
//动画
</style>

