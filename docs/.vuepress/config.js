/**
 * @file config.js
 * @author dz
 */

//页面顶部导航写在这里
var navData = [
  { text: '首页', link: '/' },
  { text: 'console 端规范', link: '/console/' },
  { text: 'portal 端规范', link: '/portal/' },
  {
    text: '相关资料',
    items: [
      { text: '使用文档', items: [{text: '规范系统说明', link: '/appendix/'}] },
      { text: '资源下载', items: [{text: 'sketch 控件库', link: '/resource/sketch'}] },

    ]
  }
];


//页面侧边导航写在这里

var sidebarData = {
  '/console/': [
    {
      title: '概述',
      collapsable: false,
      children: [
        '',      /* /console/ */
      ]
    },
    {
      title: '设计原则',
      collapsable: true,
      children: [
        'one'      /* /console/one.md */
      ]
    },
    {
      title: '风格',
      collapsable: true,
      children: [
        'color'      /* /console/color.md */
      ]
    },
    {
      title: '组件',
      collapsable: true,
      children: [
        'components/button'      /* /console/components/button.md */
      ]
    }
  ],

  '/portal/': [
    '',      /* /portal/ */
    'one',   /* /portal/one */
    'two'    /* /portal/two */
  ],

  '/appendix/': [
    '',            /* /appendix/ */
    'howToUsemd',  /* /appendix/howToUsemd.md */
    'howToUsemd2', /* /appendix/howToUsemd2.md */
  ],


  // fallback
  '/': [
    '',        /* / */
  ]
};


module.exports = {
    title: '百度云设计规范',
    description: '百度云设计规范',
    base:'/acuStd2/',
    themeConfig: {
      nav: navData,
      sidebar: sidebarData
    },
    markdown: {
      // markdown-it-toc 的选项
      toc: { includeLevel: [2, 3, 4] },
      config: md => {
        // 使用更多的 markdown-it 插件!
        md.use(require('markdown-it-footnote')),
        // 色块生成器
        md.use(require('markdown-it-container'), 'color', {
          validate: function(params) {
            return params.trim().match(/^color\s+(.*)$/);
          },
          render: function (tokens, idx) {
            var m = tokens[idx].info.trim().match(/^color\s+(.*)$/);
            if (tokens[idx].nesting === 1) {
              return '<div class="colorBox" style="background-color:' +
              md.utils.escapeHtml(m[1]) + '"><p>' + md.utils.escapeHtml(m[1]) + '</p>\n';
            } else {
              return '</div>\n';
            }
          }
        });
        // 色块生成器-浅色
        md.use(require('markdown-it-container'), 'color-l', {
          validate: function(params) {
            return params.trim().match(/^color-l\s+(.*)$/);
          },
          render: function (tokens, idx) {
            var m = tokens[idx].info.trim().match(/^color-l\s+(.*)$/);
            if (tokens[idx].nesting === 1) {
              return '<div class="colorBox light" style="background-color:' +
              md.utils.escapeHtml(m[1]) + '"><p>' + md.utils.escapeHtml(m[1]) + '</p>\n';
            } else {
              return '</div>\n';
            }
          }
        });
        md.use(require('markdown-it-abbr'));
      }
    }
}
