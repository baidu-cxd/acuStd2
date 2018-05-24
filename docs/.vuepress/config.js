/**
 * @file config.js
 * @author wangyihan05@baidu.com
 */

//页面顶部导航写在这里
var navData = [
  { text: '首页', link: '/' },
  {
    text: 'portal 端规范',
    items: [
      {text: 'portal 端规范文档', link: '/portal/style/img'},
      {text: '板块(楼层)查询器', link: '/portal/section'},
    ]
  },
  {
    text: 'console 端资料',
    link: '/console/',
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
      collapsable: true,
      children: [
        'outline/Outline',      /* /outline/Outline.md */
      ]
    },
    {
      title: '设计原则',
      collapsable: true,
      children: [
        'principle/Wayfinding' ,             /* /principle/Wayfinding.md */
        'principle/Simplicity' ,             /* /principle/Simplicity.md */
        'principle/Consistency' ,            /* /principle/Consistency.md */
        'principle/Proximity' ,              /* /principle/Proximity.md */
        'principle/Feedback_mechanism' ,     /* /principle/Feedback_mechanism.md */
      ]
    },
    {
      title: '风格',
      collapsable: true,
      children: [
        'style/Color' ,     /* /console/style/Color.md */
        'style/Typography' ,     /* /console/style/Typography.md */
        'style/Icons' ,    /* /console/style/Icons.md */
        'style/Writing' ,     /* /console/style/Writing.md */
        
      ]
    },
    {
      title: '组件',
      collapsable: true,
      children: [
        'widget/Button',      /* /console/widget/Button.md */
        'widget/List',      /* /console/widget/List.md */
        'widget/Placeholder',      /* /console/widget/Placeholder.md */
        'widget/Introduction',      /* /console/widget/Introduction.md */
        'widget/Chart',      /* /console/widget/Chart.md */
        'widget/Collection',      /* /console/widget/Collection.md */
        'widget/Pagination',      /* /console/widget/Pagination.md */
        'widget/Link',      /* /console/widget/Link.md */
        'widget/Input',      /* /console/widget/Input.md */
        'widget/Switch',      /* /console/widget/Switch.md */
        'widget/Time',      /* /console/widget/Time.md */
        'widget/Stepper',      /* /console/widget/Stepper.md */
        'widget/Upload',      /* /console/widget/Upload.md */
        'widget/Select',      /* /console/widget/Select.md */
        'widget/Radio',      /* /console/widget/Radio.md */
        'widget/CheckBox',      /* /console/widget/CheckBox.md */
        'widget/Dropdown',      /* /console/widget/Dropdown.md */
        'widget/Slider',      /* /console/widget/Slider.md */
        'widget/Search',      /* /console/widget/Search.md */
        'widget/Menu',      /* /console/widget/Menu.md */
        'widget/Tabs',      /* /console/widget/Tabs.md */
        'widget/Steps',      /* /console/widget/Steps.md */
        'widget/Loading',      /* /console/widget/Loading.md */
        'widget/Toast',      /* /console/widget/Toast.md */
        'widget/Modal',      /* /console/widget/Modal.md */
        'widget/Drawer',      /* /console/widget/Drawer.md */
        'widget/Tips',      /* /console/widget/Tips.md */
        'widget/Badge',      /* /console/widget/Badge.md */

      ]
    },
    {
      title: '反馈',
      collapsable: true,
      children: [
        'feedback/Feedback_review',      /* /console/feedback/Feedback_review.md */
        'feedback/Message_prompt',      /* /console/feedback/Message_prompt.md */
        'feedback/Process_feedback',      /* /console/feedback/Process_feedback.md */
        'feedback/Result_feedback',      /* /console/feedback/Result_feedback.md */
        
      ]
    },
    {
      title: '校验',
      collapsable: true,
      children: [
        'check/Check'      /* /console/check/Check.md */
        
      ]
    },
    {
      title: '下载',
      collapsable: true,
      children: [
        'download/Download'      /* /console/style/Download.md */
        
      ]
    },
  ],


//portal



  '/portal/': [
    {
      title: '概述',
      collapsable: true,
      children: [
        'summarize/summarize',      /* 概述 */
      ]
    },
    {
      title: '设计原则',
      collapsable: true,
      children: [
        'summarize/summarize',      /* 概述 */
        'summarize/Dictionaries',    /* 字典 */
      ]
    },
    {
      title: '布局',
      collapsable: true,
      children: [
        'layout/GridLayout',      /* /portal/layout/GridLayout.md */
        'layout/ComposingLayout',   /* /portal/layout/ComposingLayout.md */
      ]
    },
    {
      title: '风格指南',
      collapsable: true,
      children: [
        'style/img',      /* /portal/style/img.md */
        'style/font',      /* /portal/style/font.md */
        'style/color',      /* /portal/style/color.md */
        'style/space',      /* /portal/style/space.md */
        'style/icon',      /* /portal/style/icon.md */
        'style/shadow',      /* /portal/style/shadow.md */
      ]
    },
    {
      title: '导航',
      collapsable: true,
      children: [
        'navgation/Tag',      /* /portal/navgation/Tag.md */
        'navgation/fastguid',      /* /portal/navgation/fastguid.md */
      ]
    },
    {
      title: '基础组件',
      collapsable: true,
      children: [
        'component/Base_component',      /* /portal/component/Base_component.md */
        'component/button',      /* /portal/component/button.md */
        'component/hyperlink',      /* /portal/component/hyperlink.md */
        'component/form',      /* /portal/component/form.md */
      ]
    },
    {
      title: '页面',
      collapsable: true,
      children: [
        'page/home',      /* /portal/page/home.md */
        'page/solution',      /* /portal/page/solution.md */
      ]
    },
    {
      title: '营销',
      collapsable: true,
      children: [
        'marketing/style',      /* /portal/marketing/style.md */
      ]
    },
    {
      title: '其他资料',
      collapsable: true,
      children: [
        'other/Dictionaries',      /* 字典 */
        'other/Token',      /* 字典 */
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
    base:'/',
    themeConfig: {
      nav: navData,
      sidebar: sidebarData,
      logo: 'http://baiduyun-guideline.bj.bcebos.com/public%2FCxD.svg',
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
