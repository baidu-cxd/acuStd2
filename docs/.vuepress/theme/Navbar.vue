<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
    <router-link :to="$localePath" class="home-link">
      <img class="logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)">
      <span class="site-name"
        v-if="$siteTitle"
        :class="{ 'can-hide': $site.themeConfig.logo }">
        {{ $siteTitle }}
      </span>
    </router-link>
    <div class="links">
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/>
      <SearchBox v-else-if="$site.themeConfig.search !== false"/>
      <NavLinks class="can-hide"/>
    </div>
  </header>
</template>

<script>
import SidebarButton from './SidebarButton.vue'
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from './SearchBox.vue'
import NavLinks from './NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },
  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },
    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.navbar
  position relative
  a, span, img
    display inline-block
  .logo
    height 20px
    margin 20px
    vertical-align top
  .site-name
    font-size 14px
    line-height 60px
    margin-left 0px
    font-weight 400
    color $textColorLight
    position relative
  .links
    position absolute
    right 12px
    top 0
    a
      font-size 14px
      font-weight normal

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none  
    .links
      width auto
      top 12px
</style>
