<template>
  <div class="home">
    <div class="main-section">
      <img v-if="data.mainImage" :src="$withBase(data.mainImage)" alt="main" id = "main-img">
      <img src="http://baiduyun-guideline.bj.bcebos.com/public%2Fcxd.svg" alt="" class="logo">
      <img v-if="data.mainImageMo" :src="$withBase(data.mainImageMo)" alt="" id = "main-img-mo">
      <div class="wrp">
        <h1 class="title">{{ data.mainText || $title || 'Hello' }}</h1>
        <p class="description">
        {{ data.subtitle || $description || 'Welcome to your VuePress site' }}
        </p>
        <p class="action" v-if="data.actionTextFirst && data.actionLinkFirst">
        <NavLink class="action-button  first-child" :item="actionLinkFirst"/>
        </p>
        <p class="action" v-if="data.actionTextSecond && data.actionLinkSecond">
        <NavLink class="action-button" :item="actionLinkSecond"/>
        </p>
      </div>
    </div>
    <Content custom/>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  components: { NavLink },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLinkFirst () {
      return {
        link: this.data.actionLinkFirst,
        text: this.data.actionTextFirst
      }
    },
    actionLinkSecond () {
      return {
        link: this.data.actionLinkSecond,
        text: this.data.actionTextSecond
      }
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.home
  height 100%
  width 100%
  min-width 1200px
  margin 0px auto
  position fixed
  overflow-y hidden
  .main-section
    overflow-y hidden
    width 100%
    background-color #fff
    img
      width 100%
      display block
    img.logo
      width 120px
      position fixed
      top 80px
      left 8%
    img#main-img-mo
      display NONE
    .wrp
      left 8%
      margin auto
      position absolute
      top 0
    .title
      font-size 64px
      margin 300px 0 30px 0
      font-family Avenir
      font-weight 800
      letter-spacing 4px
      color #282828
    .description
      width 760px 
      font-size 18px
      line-height 2
      color #314659
    .action
      display inline
      &:hover
        cursor pointer
    .action-button
      display inline-block
      text-align center
      font-size 16px
      line-height 16px
      font-weight 600
      color $darkBlack
      margin 60px 20px 0 0
      padding 10px 0
      border-radius 0
      width 115px
      transition background-color .1s ease
      box-sizing border-box
      border 1px solid $darkBlack
      &:hover
        background-color $darkBlack
        color #fff
        cursor pointer
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColorDark, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding 0
    min-width 0
    .main-section
      .wrp
        left 8%
        right 8%
      img.logo
        top 240px
        width 200px
      img#main-img
        display none
      img#main-img-mo
        display block
      .title
        font-size 18px
      .description
        width auto
        font-size 12px
      .action-button
        margin-top 40px
</style>
