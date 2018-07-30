<template>
  <div class="prev-next" v-if="prev || next">
    <div class="std-wrp-v2">
      <span v-if="prev" class="prev">
        <router-link v-if="prev" class="prev" :to="prev.path">
          ← {{ prev.title || prev.path }}
        </router-link>
      </span>
      <span v-if="next" class="next">
        <router-link v-if="next" :to="next.path">
          {{ next.title || next.path }} →
        </router-link>
      </span>
    </div>
  </div>
</template>


<style lang="stylus">
@import '../styles/config.styl'
@import './styles/v2.styl'
.v2 .prev-next
  display none
  background-color #ffc107
  height 120px
  width 100%
  span
    width 480px
    height 120px
    display block
    text-align center
    line-height 80px
    margin 0
    &.prev
      float left 
    &.next
      float right
    a 
      display block
      width 100%
      height 100%
      line-height 120px
      color #000
      font-size 18px
      &:hover
        background-color #ffffff
        color #000
</style>





<script>
import { resolvePage } from '../util'
export default {
  props: ['sidebarItems'],
  computed: {
    frontmatterdata () {
      return this.$page.frontmatter
    },
    prev () {
      const prev = this.$page.frontmatter.prev
      if (prev === false) {
        return
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path)
      } else {
        return resolvePrev(this.$page, this.sidebarItems)
      }
    },
    next () {
      const next = this.$page.frontmatter.next
      if (next === false) {
        return
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path)
      } else {
        return resolveNext(this.$page, this.sidebarItems)
      }
    },
  }    
}
function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

function find (page, items, offset) {
  const res = []
  items.forEach(item => {
    if (item.type === 'group') {
      res.push(...item.children || [])
    } else {
      res.push(item)
    }
  })
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === page.path) {
      return res[i + offset]
    }
  }
}
</script>

