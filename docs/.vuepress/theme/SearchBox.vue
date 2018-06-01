<template>
  <div class="search-box">
    <input
      @input="query = $event.target.value"
      aria-label="Search"
      :value="query"
      autocomplete="off"
      spellcheck="false"
      @focus="focused = true"
      @blur="focused = false"
      @keyup.enter="go(focusIndex)"
      @keyup.up="onUp"
      @keyup.down="onDown">
    <ul class="suggestions"
      v-if="showSuggestions"
      :class="{ 'align-right': alignRight }"
      @mouseleave="unfocus">
      <li class="suggestion" v-for="(s, i) in suggestions"
        :class="{ focused: i === focusIndex }"
        @mousedown="go(i)"
        @mouseenter="focus(i)">
        <a :href="s.path" @click.prevent>
          <span class="page-title">{{ s.title || s.path }}</span>
          <span v-if="s.header" class="header">&gt; {{ s.header.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: '',
      focused: false,
      focusIndex: 0
    }
  },
  computed: {
    showSuggestions () {
      return (
        this.focused &&
        this.suggestions &&
        this.suggestions.length
      )
    },
    suggestions () {
      const query = this.query.trim().toLowerCase()
      if (!query) {
        return
      }

      const { pages, themeConfig } = this.$site
      const max = themeConfig.searchMaxSuggestions || 5
      const localePath = this.$localePath
      const matches = item => (
        item.title &&
        item.title.toLowerCase().indexOf(query) > -1
      )
      const res = []
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) break
        const p = pages[i]
        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue
        }
        if (matches(p)) {
          res.push(p)
        } else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            if (res.length >= max) break
            const h = p.headers[j]
            if (matches(h)) {
              res.push(Object.assign({}, p, {
                path: p.path + '#' + h.slug,
                header: h
              }))
            }
          }
        }
      }
      return res
    },
    // make suggestions align right when there are not enough items
    alignRight () {
      const navCount = (this.$site.themeConfig.nav || []).length
      const repo = this.$site.repo ? 1 : 0
      return navCount + repo <= 2
    }
  },
  methods: {
    getPageLocalePath (page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
          return localePath
        }
      }
      return '/'
    },
    onUp () {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--
        } else {
          this.focusIndex = this.suggestions.length - 1
        }
      }
    },
    onDown () {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++
        } else {
          this.focusIndex = 0
        }
      }
    },
    go (i) {
      this.$router.push(this.suggestions[i].path)
      this.query = ''
      this.focusIndex = 0
    },
    focus (i) {
      this.focusIndex = i
    },
    unfocus () {
      this.focusIndex = -1
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.search-box
  display inline-block
  position relative
  margin-right 0.5rem
  &:before
    position absolute
    background #fff url(http://baiduyun-guideline.bj.bcebos.com/public%2Fsearch.svg)  no-repeat
    background-size 100%
    content ""
    display block
    top 11px
    left 11px
    width 16px
    height 16px
    z-index 0
    opacity .8
  input
    background-color transparent
    cursor pointer
    width 36px
    height 36px
    color transparent
    display inline-block
    border 1px solid $borderColor
    border-radius 20px
    padding 0
    font-size 0.9rem
    line-height 2rem
    outline none
    transition all .2s ease
    position relative
    z-index 1
    &:focus
      width 160px
      padding-left 36px
      cursor auto
      border-color $accentColor
      color $textColorMain
  .suggestions
    background #fff
    width 20rem
    position absolute
    top 1.5rem
    border 1px solid darken($borderColor, 10%)
    border-radius 6px
    padding 0.4rem
    list-style-type none
    &.align-right
      right 0
  .suggestion
    line-height 1.4
    padding 0.4rem 0.6rem
    border-radius 4px
    a
      color lighten($textColorDark, 35%)
      .page-title
        font-weight 500
      .header
        font-size 0.9em
        margin-left 0.25em
    &.focused
      background-color #f3f4f5
      a
        color $accentColor

@media (max-width: $MQNarrow)
  .search-box input
    border-color transparent
    &:focus
      left 0px
      width 120px

@media (max-width: $MQMobile)
  .search-box
    margin-right 0
    .suggestions
      right 0

@media (max-width: $MQMobileNarrow)
  .search-box
    .suggestions
      width calc(100vw - 4rem)
    input:focus
      width 8rem
</style>
