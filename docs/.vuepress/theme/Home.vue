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
    <div class="features" v-if="data.features && data.features.length">
      <div class="feature" v-for="feature in data.features">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
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
      width 80%
      display block
    .wrp
      width 80%
      position absolute
      max-width 1366px
      top 0
      left 50%
      transform translateX(-50%)
    .title
      font-size 100px
      margin 300px 0 30px 0
    .description
      font-size 30px
      line-height 1.3
      color lighten($textColorDark, 40%)
    .action
      display inline
    .action-button
      display inline-block
      text-align center
      font-size 24px
      height 64px
      color #fff
      margin 120px 30px 0 0
      background-color $stdBlue
      padding 0.8rem 1.6rem
      border-radius 0
      width 220px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($stdBlue, 10%)
      &:hover
        background-color lighten($stdBlue, 10%)
    .first-child
      background-color $darkBlack
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content strech
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColorDark, 10%)
    p
      color lighten($textColorDark, 25%)
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
