<template>
  <div class="home">
    <div class="main-section">
      <img v-if="data.mainImage" :src="$withBase(data.mainImage)" alt="main" id = "main-img">
      <img :src="$withBase('./img/trunk.png')" alt="tree" id = "main-img-tree">
      <img :src="$withBase('./img/birds.png')" alt="tree" id = "main-img-birds">
      <img src="http://baiduyun-guideline.bj.bcebos.com/public%2Fcxd.svg" alt="" class="logo">
      <img v-if="data.mainImageMo" :src="$withBase(data.mainImageMo)" id="main-img-mo">
      <div class="leaves">
        <img :src="$withBase('./img/bigleaf01.png')" class="bigleaf bigleaf01">
        <img :src="$withBase('./img/bigleaf02.png')" class="bigleaf bigleaf02">
        <img :src="$withBase('./img/bigleaf03.png')" class="bigleaf bigleaf03">
        <img :src="$withBase('./img/leaf01.png')" class="leaf leaf01">
        <img :src="$withBase('./img/leaf02.png')" class="leaf leaf02">
        <img :src="$withBase('./img/leaf03.png')" class="leaf leaf03 wave">
        <img :src="$withBase('./img/leaf01.png')" class="leaf leaf04 wave">
        <img :src="$withBase('./img/leaf04.png')" class="leaf leaf05 wave">
        <img :src="$withBase('./img/leaf05.png')" class="leaf leaf06 wave">
        <img :src="$withBase('./img/leaf05.png')" class="leaf leaf07 wave">
      </div>
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
@import './styles/leavesFalling.styl';
.home
  height 100%
  width 100%
  min-width 1200px
  margin 0px auto
  position fixed
  overflow-y hidden
  .main-section
    overflow-y hidden
    min-height 100%
    width 100%
    background-color #fff
    position relative
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
    // -------------------
    #main-img-tree,#main-img-birds
      position absolute
      top 0
      width 100%
      z-index 10
    .leaves
      .bigleaf
        position absolute
        top 0
        width 100%
        &.bigleaf01
          z-index 20
          animation bigWave 8s ease infinite alternate
        &.bigleaf03
          z-index 21
          animation bigWave 5s linear infinite alternate
        &.bigleaf02
          z-index 22
          animation bigWave 6s linear infinite alternate
      .leaf
        position absolute
        transform rotate(-16deg)
        &.leaf01
          z-index 11
          width 1.8%
          animation leafsMoving01 8s linear infinite, leafsRotation01 4s linear infinite
        &.leaf02
          z-index 9
          width 1.5%
          animation leafsMoving02 7s 4s linear infinite, leafsRotation02 3s linear infinite
        &.leaf03
          width 1.8%
          animation leaveWave 4s ease infinite alternate
          transform-origin 0 100%
          top 20%
          right 15.5%
        &.leaf04
          width 1.8%
          animation leaveWave 3.5s 1s ease infinite alternate
          transform-origin 0 100%
          top 7%
          right 29%
        &.leaf05
          width 1.9%
          animation leaveWave 3s 0.8s ease infinite alternate
          transform-origin 0 100%
          top 16%
          right 25%
        &.leaf06
          width 1.9%
          animation leaveWave 3.8s 1s ease infinite alternate
          transform-origin 100% 100%
          top 16%
          right 35%
        &.leaf07
          width 1.7%
          animation leaveWave 3s 1s ease infinite alternate
          transform-origin 100% 100%
          top 21%
          right 41%
    // -------------------
    .wrp
      left 8%
      margin auto
      position absolute
      z-index 1000
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
  #main-img-tree,#main-img-birds
  display none
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  #main-img-tree,#main-img-birds
    display none
  .leaves
    display none
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
