<script>
import { isActive, hashRE, groupHeaders } from './util'

export default {
  functional: true,
  props: ['item'],
  render (h, { parent: { $page, $site, $route }, props: { item }}) {
    // use custom active class matching logic
    // due to edge case of paths ending with / + hash
    const selfActive = isActive($route, item.path)
    // for sidebar: auto pages, a hash link should be active if one of its child
    // matches
    const active = item.type === 'auto'
      ? selfActive || item.children.some(c => isActive($route, item.basePath + '#' + c.slug))
      : selfActive
    const link = renderLink(h, item.path, item.title || item.path, active, item.icon)
    const configDepth = $page.frontmatter.sidebarDepth != null
      ? $page.frontmatter.sidebarDepth
      : $site.themeConfig.sidebarDepth
    const maxDepth = configDepth == null ? 1 : configDepth
    if (item.type === 'auto') {
      return [link, renderChildren(h, item.children, item.basePath, $route, maxDepth)]
    } else if (active && item.headers && !hashRE.test(item.path)) {
      const children = groupHeaders(item.headers)
      return [link, renderChildren(h, children, item.path, $route, maxDepth)]
    } else {
      return link
    }
  }
}


function renderLink (h, to, text, active, icon) {
  let htmlTemplate = null
  if(icon){
    htmlTemplate = '<img class="sidebar-icon" src= '+ icon +'>' + '<p class="sidebar-heading">' + text + '</p>'
  }
  else{
    htmlTemplate = '<p>' + text + '</p>'
  }
  return h('router-link', {
    props: {
      to,
      activeClass: '',
      exactActiveClass: '',
    },
    class: {
      active,
      'sidebar-link': true
    },
    domProps: {
      innerHTML: htmlTemplate
    }
  })
}

/*function renderLink (h, to, text, active, icon) {
  return h('router-link', {
    props: {
      to,
      activeClass: '',
      exactActiveClass: '',
    },
    class: {
      active,
      'sidebar-link': true
    },
  },text)
}*/

function renderChildren (h, children, path, route, maxDepth, depth = 1) {
  if (!children || depth > maxDepth) return null
  return h('ul', { class: 'sidebar-sub-headers' }, children.map(c => {
    const active = isActive(route, path + '#' + c.slug)
    return h('li', { class: 'sidebar-sub-header' }, [
      renderLink(h, '#' + c.slug, c.title, active, c.icon),
      renderChildren(h, c.children, path, route, maxDepth, depth + 1)
    ])
  }))
}
</script>

<style lang="stylus">
@import './styles/config.styl'
</style>
