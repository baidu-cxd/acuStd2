---
title: Icon Font
aythor: (dz) wangyihan05@baidu.com
sidebarDepth: 0
edition: v2
---

# 百度云垂直开发规范

如果您需要开发一个页面，使用在百度云的官网上，希望能够遵循一定的规范，以便我们日后的维护。

::: warning 请注意

根据现行的官网合作规范，如果垂直开发页面不能通过 UE 审核，将会拒绝上线

:::

[[toc]]

## 开发原则

#### 1. 尽可能使用线上其它页面已经完成的组件，而不是重新开发

重复造轮子一点都不好，不仅费时费力，还容易出样式问题，如果线上有能用的代码，复制过来再好不过了。

#### 2. 尽可能使用 [Design Token](./DesignToken.html) 的方式规定样式

使用 Design Token 的方式进行开发可以帮你更好约束样式，保证不会出 BUG 而且还有助于我们后续对你开发的页面进行进一步的优化。

Design Token 在代码库中的位置: `fe_source/css/variable.less`


## 文字字体自查

#### 1. 一般文字字体规范自查

如果你开发的是一个产品页/解决方案页（或者其它通常页面），请检查字体代码是否正确:

``` css
font-family: -apple-system, BlinkMacSystemFont,"SF Pro SC","SF Pro Text","Helvetica Neue",  Helvetica, "PingFang SC", Roboto, 'Arial','microsoft yahei ui',"Microsoft YaHei",SimSun, sans-serif;
/*修改浏览器渲染字体效果*/ 
-moz-osx-font-smoothing: grayscale;  
-webkit-font-smoothing: antialiased; 
``` 

#### 2. 活动类页面

如果你开发的是一个营销或者活动类页请检查出现特殊情况的位置的字体代码是否正确:


``` css
font-family: "DIN Alternate","Arial",sans-serif;
/*修改浏览器渲染字体效果*/ 
-moz-osx-font-smoothing: grayscale;  
-webkit-font-smoothing: antialiased; 
``` 

<mark>以下规范仅针对产品页/解决方案页等，营销活动之类页面的行高关系请询问 UE 是否要遵照此规范</mark>


## 文字字号行高关系以及颜色自查

#### 字号行高关系

| 字体大小  | 对应行高 |
| -------------|------------ | 
| 42px       | 64px |
| 36px       | 56px |
| 30px       | 48px |
| 24px       | 40px |
| 18px       | 32px |
| 16px       | 30px |
| 14px       | 26px |
| 12px       | 24px |

#### 颜色

| 文字类型  | 颜色 token | 真值 |
| ---------|------------ | ---- | 
| 一般正文     | <i class="color text-black-std">A</i>@text-black-std  | rgba(0, 0, 0, .60)|
| 一般浅色文字       | <i class="color text-black-weak">A</i>@text-black-weak | rgba(0, 0, 0, .40)|
| 标题等深色文字       | <i class="color text-black-heading">A</i>@text-black-heading |  rgba(0, 0, 0, .85)|
| 一般文字：反白      | <i class="color text-white-std">A</i>@text-white-std | rgba(255, 255, 255, .75)|
| 浅色文字文字：反白       | <i class="color text-white-weak">A</i>@text-white-weak |rgba(255, 255, 255, 1)|
| 标题等深色文字：反白      | <i class="color text-white-heading">A</i>@text-white-heading | rgba(255, 255, 255, .5)|


## 常见间距和尺寸参数自查

| 类型  | 常用间距 |
| -------------|------------ | 
| 页面板块的内间距（padding-top／bottom） | 80px |
| 页面板块标题(30px 大小的文字为板块标题级别，有时候下面会有小标题)到内容的间距  | 40px |
| 常用的卡片内间距（padding）  | 30px/20px |
| 常用的卡片间距  | 20px |
| 按钮的高度  | 38px |

## 按钮常见问题

#### 1. 按钮是否创建了 hover 样式?

常见的 <i class="color brand-color-main"></i>#108cee 颜色的按钮一般会有 <i class="color brand-color-main-hover"> </i> #209bfd 的 hover 样式, 并且带有缓动函数

参考代码:

``` less
div {
  background-color: @brand-color-main;// 按钮的颜色
  transition: @time-short all linear;//缓动函数也可以这么写

}
div:hover {
  background-color: @brand-color-main-hover;// 按钮 hover的颜色
}
``` 
::: tip 如果要为其它颜色的按钮创造 :hover 样式

可以参考文档 [色彩实验室](/lab/ColorLab.html)

:::

#### 2. 带边框的按钮样式是否正确

如果是带有边框的按钮，很容易产生发生错误: 如

<div class="nowPage-wrp"><div id="button-1">错误的按钮样式</div></div>

需要注意几个关键点:

1. 按钮的高度是 38px，包括边框在内

2. 仅有边框的样式变成填充的样式的时候，不要直接把 border 样式删除，否则会抖动

3. 文字需要有严格的居中

推荐写法:

<div class="nowPage-wrp"><div id="button-2">正确的按钮样式</div></div>

``` less {4,7,14}
.button {
  height: 38px;
  border: 1px solid #000;
  line-height: 36px;// 行高写作 height(38px) - 2 * border(1px) 
  text-align: center;
  transition: 200ms all linear;
  box-sizing: border-box;// 使用 border-box，防止边框撑大按钮
}

.button:hover {
 background: #108cee;
 color: #fff;
 cursor: pointer;
 border: 1px solid transparent;// 把边框设置成透明，而不是删掉它
}
``` 

## 动画效果自查

页面中如果有交互动画，应该确保动画流畅，避免卡顿

1. 尽可能使用 css `transform` 或者 `animation` 动画

2. 尽可能避免触发重布局




## 图片和图标

1. 图片禁止拉伸

2. 图标和架构图优先使用二倍图


<style>
.nowPage-wrp{
 width :160px;
 height: 40px;
 padding: 40px;
 border: 1px solid #f5f5f5;
 margin: 20px 0;
}

#button-1 {
  width:160px;
  height:38px;
  border:1px solid #000;
  line-height:38px;
  text-align:center;
  transition: 200ms all linear;
}
#button-1:hover {
 background:#108cee;
 color:#fff;
 cursor:pointer;
 border:0px solid #000;
}

#button-2 {
  width:160px;
  height:38px;
  border:1px solid #000;
  line-height:36px;
  text-align:center;
  transition: 200ms all linear;
  box-sizing:border-box;
}
#button-2:hover {
 background:#108cee;
 color:#fff;
 cursor:pointer;
 border:1px solid transparent;
}
</style>
