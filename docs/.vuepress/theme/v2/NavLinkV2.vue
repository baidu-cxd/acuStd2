<template>
  <router-link
    class="nav-link"
    :to="link"
    v-if="!isExternal(link)"
    :exact="link === '/'">
    <img v-if="hasIcon === true && item.icon" :src="item.icon" alt="" class=""/>
    <span class="text">{{ item.text }}</span>
  </router-link>
  <a
    v-else
    :href="link"
    class="nav-link"
    :target="isMailto(link) ? null : '_blank'"
    :rel="isMailto(link) ? null : 'noopener noreferrer'">
    {{ item.text }}
  </a>
</template>

<script>
import { isExternal, isMailto, ensureExt } from './utilv2'

export default {
  props: {
    item: {
      required: true
    },
    hasIcon: {
      default: false
    }
  },
  computed: {
    link() {
      return ensureExt(this.item.link)
    }
  },
  methods: {
    isExternal,
    isMailto
  }
}
</script>
