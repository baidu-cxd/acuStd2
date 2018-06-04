<template>
  <div class="home">
    <div class="main-section">
      <img v-if="data.mainImage" :src="$withBase(data.mainImage)" alt="main" id = "main-img">
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
    <div class="footer" v-if="data.footer">
      {{ data.footer }}
    </div>
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
  overflow hidden
  .main-section
    overflow hidden
    width 100%
    background-color #fff
    img
      float right
      right 0
      width 90%
      max-width 1437px
      display block
    .wrp
      width 85%
      position absolute
      max-width 1440px
      top 0
      left 50%
      transform translateX(-50%)
    .title
      font-size 68px
      margin 240px 0 30px 0
    .description
      width 760px 
      font-size 20px
      line-height 1.7
      color lighten($textColorDark, 40%)
    .action
      display inline
      &:hover
        cursor pointer
    .action-button
      display inline-block
      text-align center
      font-size 16px
      line-height 16px
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
    padding-left 1.5rem
    padding-right 1.5rem
    .main-section
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
