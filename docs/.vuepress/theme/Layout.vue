<template>
  <!-- 原版 -->
  <div class="theme-container v1"
    v-if="edition === 'v1'"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd">
    <!-- 导航的位置 -->
    <div>
      <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>
      <div class="sidebar-mask" @click="toggleSidebar(false)"></div>
      <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
        <slot name="sidebar-top" slot="top"/>
        <slot name="sidebar-bottom" slot="bottom"/>
      </Sidebar>
    </div>
    <!-- 自定义组件 -->
    <div class="custom-layout" v-if="$page.frontmatter.layout">
      <component :is="$page.frontmatter.layout"/>
    </div>
    <Home v-else-if="$page.frontmatter.home"/>
    <Page v-else :sidebar-items="sidebarItems">
      <slot name="page-top" slot="top"/>
      <slot name="page-bottom" slot="bottom"/>
    </Page>
  </div>
  <!-- 新版v2 -->
  <div class="theme-container v2"
    v-else-if="edition === 'v2'"
    :class="pageClasses">
    <NavV2 @toggle-sidebar-hidden="toggleSidebarHidden"/>
    <div class="main-wrp-v2">   
      <Hero/>
      <div class="page-wrp-v2">  
        <PageV2/>
        <PrevNext :sidebar-items="sidebarItems"/>
      </div>  
    </div>
    <Footer/>
  </div>
</template>


<script>
import Vue from 'vue'
import nprogress from 'nprogress'
import Home from './Home.vue'
import Navbar from './Navbar.vue'
import Page from './Page.vue'
import Sidebar from './Sidebar.vue'
import Viewer from './Viewer.vue'
import { pathToComponentName } from '@app/util'
import { resolveSidebarItems } from './util'
import TransitionContent from './TransitionContent.vue'
/* 新版组件 */
import NavV2 from './v2/NavV2.vue'
import PageV2 from './v2/PageV2.vue'
import Hero from './v2/Hero.vue'
import PrevNext from './v2/PrevNext.vue'
import Footer from './v2/Footer.vue'
export default {
  props:{
  },
  components: { Home, Page, Sidebar, Navbar ,Viewer, NavV2, PageV2, Hero, PrevNext, Footer, TransitionContent},
  data () {
    return {
      isSidebarOpen: false,
      isSidebarHidden: false,
    }
  },
  computed: {
    section(dataIn){
      return dataIn.section
    },
    edition () {
      const { frontmatter } = this.$page
      if (frontmatter.edition === 'v2') return frontmatter.edition
      return 'v1'
    },
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (frontmatter.navbar === false) return false
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      )
    },
    shouldShowSidebar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      return (
        !frontmatter.layout &&
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      )
    },
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$route,
        this.$site,
        this.$localePath
      )
    },
    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'sidebar-hidden': this.isSidebarHidden,
          'no-sidebar': !this.shouldShowSidebar,
        },
        userPageClass
      ]
    }
  },

  created () {
    if (this.$ssrContext) {
      this.$ssrContext.title = this.$title
      this.$ssrContext.lang = this.$lang
      this.$ssrContext.description = this.$page.description || this.$description
    }

  },

  mounted () {
    // update title / meta tags
    this.currentMetaTags = []
    const updateMeta = () => {
      document.title = this.$title
      document.documentElement.lang = this.$lang
      const meta = [
        {
          name: 'description',
          content: this.$description
        },
        ...(this.$page.frontmatter.meta || [])
      ]
      this.currentMetaTags = updateMetaTags(meta, this.currentMetaTags)
    }
    this.$watch('$page', updateMeta)
    updateMeta()

    // configure progress bar
    nprogress.configure({ showSpinner: false })

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(pathToComponentName(to.path))) {
        nprogress.start()
      }
      next()
    })

    this.$router.afterEach(() => {
      nprogress.done()
      this.isSidebarOpen = false
    })
  },

  beforeDestroy () {
    updateMetaTags(null, this.currentMetaTags)
  },

  methods: {
    showModalSection(sectionto){
      this.$set(this.isShow,sectionto.isShow);
    },
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },
    toggleSidebarHidden (to) {
      this.isSidebarHidden = typeof to === 'boolean' ? to : !this.isSidebarHidden
    },
    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },
    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}

function updateMetaTags (meta, current) {
  if (current) {
    current.forEach(c => {
      document.head.removeChild(c)
    })
  }
  if (meta) {
    return meta.map(m => {
      const tag = document.createElement('meta')
      Object.keys(m).forEach(key => {
        tag.setAttribute(key, m[key])
      })
      document.head.appendChild(tag)
      return tag
    })
  }
}

</script>

<!-- 不要改变下面几个样式文件的引用顺序 -->
<style src="./styles/reset.styl" lang="stylus"></style>
<style src="./san-xui/iconfont.css"></style>
<style src="./san-xui/xui.scss" lang="scss"></style>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/theme.styl" lang="stylus"></style>
<style src="./v2/styles/v2.styl" lang="stylus"></style>

<!-- Hotjar Tracking Code for http://yunshe.design/ -->