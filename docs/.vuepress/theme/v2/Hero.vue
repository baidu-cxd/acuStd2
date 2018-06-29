<template>
  <div :class="[frontmatterdata.hero ? 'has-hero':'no-hero','hero']">
    <img :src="frontmatterdata.hero" alt=""
      v-if="frontmatterdata.hero || frontmatterdata.smallHero">
    </div>
</template>
<script>
export default {
  computed: {
    frontmatterdata () {
      return this.$page.frontmatter
    }
  }
}
</script>
<style lang="stylus">
@import '../styles/config.styl'
@import '../styles/v2.styl'
.v2 .hero
  width 100%
  height 10px
  background-color #ffc107
  overflow hidden
  position relative
  &.has-hero
    height 200px
  img 
    width 100%
    min-width 1920px
    position absolute
    top 50%
    left 50%
    transform  translate(-50%,-50%)
</style>


