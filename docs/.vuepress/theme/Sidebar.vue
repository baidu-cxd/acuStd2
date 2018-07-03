<template>
  <div class="sidebar">
    <NavLinks/>
    <slot name="top"/>
    <ul class="sidebar-links" v-if="items.length">
      <li v-for="(item, i) in items">
        <SidebarGroup v-if="item.type === 'group'"
          :item="item"
          :first="i === 0"
          :open="i === openGroupIndex"
          :collapsable="item.collapsable"
          @toggle="toggleGroup(i)"/>
        <SidebarLink v-else :item="item"/>
      </li>
    </ul>
    <slot name="bottom"/>
  </div>
</template>

<script>
import SidebarGroup from './SidebarGroup.vue'
import SidebarLink, { groupHeaders } from './SidebarLink.vue'
import NavLinks from './NavLinks.vue'
import { isActive, resolveSidebarItems } from './util'

export default {
  components: { SidebarGroup, SidebarLink, NavLinks },
  props: ['items'],
  data () {
    return {
      openGroupIndex: 0
    }
  },
  created () {
    this.refreshIndex()
  },
  watch: {
    '$route' () {
      this.refreshIndex()
    }
  },
  methods: {
    refreshIndex () {
      const index = resolveOpenGroupIndex(
        this.$route,
        this.items
      )
      if (index > -1) {
        this.openGroupIndex = index
      }
    },
    toggleGroup (index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index
    },
    isActive (page) {
      return isActive(this.$route, page.path)
    }
  }
}

function resolveOpenGroupIndex (route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.type === 'group' && item.children.some(c => isActive(route, c.path))) {
      return i
    }
  }
  return -1
}
</script>

<style lang="stylus">
@import './styles/config.styl'

$listTop = 40px

$listSec = 40px

$listTri = 40px


.sidebar
  font-size 14px
  background-color #fff
  width $sidebarWidth
  position fixed
  z-index 10
  margin 0
  top 60px
  left 0
  bottom 0
  box-sizing border-box
  border-right 1px solid $borderColor
  overflow-y auto

.v1.sidebar-open .sidebar
  transform translateX(0)
  .nav-links
    display block
    padding 24px 0
    border-bottom 1px solid $borderColor
    .nav-item
      width 100%
      margin 0
      padding 0 
      height 32px
      padding-left 12px
      a
        height 32px
        line-height 32px
      ul
        margin 0

.sidebar
  .has-icon,.sidebar-group p.has-icon//左侧有图标的文字
    padding-left 32px
  .nav-links
    display none
  ul
    padding-left 0
  li
    list-style:none
  .active,.active.sidebar-link p
    background-color #f5f5f5
    color #333
    font-weight 600

.sidebar-links
 li //一级
   display block
   min-height $listTop
   a,.sidebar-group
     min-height $listTop
     position relative
     overflow hidden
     display block
     width 100%
     transition all .3s $easeInOutSine 
     &:hover
       cursor pointer
       transition all .3s  $easeInOutSine 
       background-color #f7f7f7
       p.sidebar-heading
         color $stdBlue
     img.sidebar-icon
       width 24px
       margin 8px
       display block
       float left
     p //top
       display block
       float left
       line-height $listTop
       padding 0
       margin 0
       font-size 15px
       color #333
       margin-left 12px
       transition all .3s $easeInOutSine 
       position absolute
       top 0
       left 0
       right 0
     .arrow
       margin-left 8px
.sidebar-links  
  .sidebar-group-items
    padding-top $listTop
  .sidebar-group-items,.sidebar-sub-headers //2级
    transition all .3s $easeInOutSine 
    li
      min-height $listSec
      a
        min-height $listSec
        &:hover
          background-color #f5f5f5
        p
          line-height $listSec
          font-size 14px
          margin-left 16px
          color #999
.sidebar-links         
  .sidebar-group-items //2级
    .sidebar-sub-headers // 3
      li
        min-height $listTri
        p
          margin-left 24px
          font-size 13px
</style>
