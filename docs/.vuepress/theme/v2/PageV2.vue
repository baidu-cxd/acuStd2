<template>
  <div class="pageV2">
    <Content :custom="false" class="article"/>
  </div>
</template>
<script>
import { resolvePage } from '../util'
export default {
  computed: {
    frontmatterdata () {
      return this.$page.frontmatter
    },
  }
}
</script>

<style lang="stylus">
@import '../styles/config.styl'
@import './styles/articleV2.styl'
.pageV2
  background-color #fff
  padding 56px 0 0px
</style>

