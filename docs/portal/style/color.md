---
title: 颜色
author: wangyihan05@baidu.com
sidebarDepth: 0
---

# 颜色
百度云官网的用色简洁明确，力求使用最少的颜色，表达最有效的功能信息。

我们定义了官网中常用的基本颜色，这些颜色基本可以涵盖官网中绝大部分的常规页面需求，但如果根据特殊产品需要，<mark>可以适当扩展配色</mark>,新增配色需根据主色的颜色饱和度、亮度、对比度进行调色并保持一致。


[[toc]]

## 主色

主色即品牌色，传达整体页面的风格调性。层级最高色值，使用场景主要体现在页面图标、按钮等控件、重要信息高亮等明确着重表达的位置

::: color #108cee
标准色
:::

**主色拓展色：**
<div class="wrp">
::: color #209bfd
滑过状态
:::

::: color #047BD8
点击状态
:::
</div>

**渐变拓展色：**

<div class="wrp" id="gra-0">

::: color gradient(left,#1EC5E7,#0A65FF)
主色对应渐变色
:::

</div>

## 辅助色

**辅助色** 是主色的延展，为了更好的展现页面风格做出的和主色互补的颜色。主要对关键内容的衬托和功能的引导。这类颜色主要体现在导航框架、背景底色、描边、或次级操作等场景。


::: color #0F1012
背景、页面头部、底部等处使用
:::

**辅助拓展色：**
<div class="wrp">
::: color #1E1E28
在辅助色的基础上，根据需要搭配使用的辅色拓展色
:::

::: color #3C3C4D
模块标题栏背景、按钮等处使用
:::
</div>

<div class="wrp" id="gra-1">

**渐变辅助：**

::: color gradient(left,#3C3C4D,#0F1012)
辅助色对应渐变色
:::

</div>

## 点缀色

为了完善页面的设计需求，在一些特殊情况下，小面积出现的点缀色，和主色搭配使用，丰富页面的设计效果，起到强调突显重要信息内容的作用。

:::color #D0021B
价格、折扣、促销等高提示性信息颜色
:::

## 文本色

页面一般常用规范字体颜色。主要为栏目标题、文本内容等。

:::color #333333
标题/重要文本色
:::

:::color #666666
一般文本色
:::

:::color #999999
轻文本色
:::

## 其他颜色

页面中某一些特定辅助修饰的浅灰色。主要为卡片、表格描边，板块背景色等

:::color-l #F5F5F5
板块底色
:::

:::color-l #EBEBEB
卡片描边、表格描边、分割线等颜色
:::

:::color-l #FBFBFB
表头颜色
:::

## 视觉层次

主色 <label class="color" id="color-108cee">#108cee</label> 赋予在 <mark>重要信息或关键主动点</mark> 上，利用大量留白和大面积中性色区分各个板块，去除多余的视觉干扰，以最简洁的页面元素搭配排版，从而最大限度提高用户阅读浏览效率。

![视觉层次](http://baiduyun-guideline.bj.bcebos.com/portal%2Fstyle%2Fcolor%2Fcolor_1.png)

<style>
#gra-0 .colorBox{
  background: -webkit-linear-gradient(left,#1EC5E7,#0A65FF);
}

#gra-1 .colorBox{
  background: -webkit-linear-gradient(left,#3C3C4D,#0F1012);
}

#color-108cee:before{
  background:#108cee;
}

</style>