<template>
  <div :class="['pageV2',frontmatterdata.grid? 'page-grid':' ',
    this.frontmatterdata.hero? 'has-hero':' ']">
    <Content :custom="false" class="article"/>
  </div>
</template>
<script>
import { resolvePage } from './utilv2'
export default {
  computed: {
    frontmatterdata () {
      return this.$page.frontmatter
    },
  }
}
</script>

<style lang="stylus">
@import './styles/V2.styl'
@import './styles/articleV2.styl'
@import './styles/layoutGrid.styl'
.pageV2
  width 100%
  max-width 960px
  margin auto

