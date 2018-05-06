/**
 * @file config.js
 * @author dz
 */

//页面顶部导航写在这里
var navData = [
  { text: '首页', link: '/' },
  {
    text: 'portal 端资料',
    items: [
      {text: 'portal 端组件查询', link: '/portal/section'},
      {text: 'portal 端规范文档', link: '/portal/style/img'},
      {text: '资源下载', link: '/portal/resource'}
    ]
  },
  {
    text: 'console 端资料',
    items: [
      {text: 'console 组件查询', link: '/console/symbol.html'},
      {text: 'console 端规范文档', link: '/console/'},
      {text: '资源下载', link: '/portal/resource'}
    ]
  },
  {
    text: '其他',
    items: [
      { text: '使用说明', link: '/appendix/'},
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
        'style/color'      /* /console/style/color.md */
      ]
    },
    {
      title: '组件',
      collapsable: true,
      children: [
        'widget/button',      /* /console/widget/Button.md */
      ]
    },
    {
      title: '组件（前端工程用）',
      collapsable: true,
      children: [
        'components/button',      /* /console/components/Button.md */
        'components/textbox'      /* /console/components/textbox.md */
      ]
    }
  ],

  '/portal/': [
    {
      title: '基础风格',
      collapsable: false,
      children: [
        'style/img',      /* /portal/style/img.md */
        'style/font',      /* /portal/style/font.md */
        'style/color',      /* /portal/style/color.md */
        'style/space',      /* /portal/style/space.md */
      ]
    },
  ],

  '/appendix/': [
    '',            /* /appendix/ */
    'howToUsemd',  /* /appendix/howToUsemd.md */
    'howToUsemd2', /* /appendix/howToUsemd2.md */
    'howToMoveMd', /* /appendix/howToMoveMd.md */
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
      toc: { includeLevel: [2] },
      config: md => {
        // 使用更多的 markdown-it 插件!
        md.use(require('markdown-it-footnote')),
        // 色块生成器
        md.use(require('markdown-it-container'), 'color', {
          validate: function(params) {
            return params.trim().match(/^color\s+(.*)$/);
          },
          render: function (tokens, idx) {
            const m = tokens[idx].info.trim().match(/^color\s+(.*)$/);
            if (tokens[idx].nesting === 1) {
              const colorTrans = md.utils.escapeHtml(m[1]);
              return '<div onclick="alert(\'已复制色号到粘贴板\')" class="colorBox" style="background:' +
              colorTrans + '" data-clipboard-text="' + colorTrans
              + '"><p>' + colorTrans + '</p>\n';
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
            const m = tokens[idx].info.trim().match(/^color-l\s+(.*)$/);
            if (tokens[idx].nesting === 1) {
              const colorTrans = md.utils.escapeHtml(m[1]);
              return '<div onclick="alert(\'已复制色号到粘贴板\')" class="colorBox light" style="background:' +
              colorTrans + '" data-clipboard-text="' + colorTrans
              + '"><p>' + colorTrans + '</p>\n';
            } else {
              return '</div>\n';
            }
          }
        });
        md.use(require('markdown-it-abbr'));
      }
    }
}
