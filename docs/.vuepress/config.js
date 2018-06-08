/**
 * @file config.js
 * @author wangyihan05@baidu.com
 */

//页面顶部导航配置文件
const navData = require('./config/navData.json')


//页面侧边导航配置文件
var sidebarData = require('./config/sidebarData.json')


module.exports = {
    title: '百度云设计规范',
    description: '百度云设计规范',
    base:'/',
    themeConfig: {
      nav: navData,
      sidebar: sidebarData,
      logo: 'http://baiduyun-guideline.bj.bcebos.com/public%2Fcxd.svg',
      favicon: '',
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
