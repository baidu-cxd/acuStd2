---
author: dz
title: md实验室-栅格布局
sidebarDepth: 0
edition: v2
grid: true
---

# 布局测试

## MarkDown 语法

在 Markdown 里面写一个栅格一共只需要两步

#### 第一步：首先创建一个行

    ::: raw :::

    [行内容]

    ::: end raw :::

#### 第二步：在 [行内容] 位置内写一个 1/3 的列

    ::: raw :::

    ::: col 1-in-3 :::

    [列内容]

    ::: end col :::

    ::: end raw :::

就是这样简单



#### 实例：三等分的写法

    ::: raw :::

    ::: col 1-in-3 :::
     
    [内容放在这里]

    ::: end col :::

    ::: end raw :::


::: raw :::

::: col  1-in-3 :::

<div class="content-test"></div>

::: end col :::

::: col  1-in-3 :::

<div class="content-test"></div>

::: end col :::

::: col  1-in-3 :::

<div class="content-test"></div>

::: end col :::


::: end row :::


## 其它布局效果展示

只要把语法中的 `1-3` 改成其它数字，比如 `1-in-4` , `2-in-3` 即可实现其它布局


#### 标注示意

::: raw :::

::: col  2-in-3 :::

<div class="content-test"></div>

::: end col :::

::: col  1-in-3 :::

<div class="content-test"></div>

::: end col :::


::: end row :::


::: raw :::

::: col  1-in-2 :::

<div class="content-test"></div>

::: end col :::

::: col  1-in-2 :::

<div class="content-test"></div>

::: end col :::


::: end row :::


::: raw :::

::: col  1-in-4 :::

<div class="content-test"></div>

::: end col :::

::: col  1-in-4 :::

<div class="content-test"></div>

::: end col :::

::: col  1-in-4 :::

<div class="content-test"></div>

::: end col :::

::: col  1-in-4 :::

<div class="content-test"></div>

::: end col :::


::: end row :::


#### 两个 1-in-3 效果

::: raw :::

::: col  1-in-3 :::

<div class="content-test"></div>

::: end col :::

::: col  1-in-3 :::

<div class="content-test"></div>

::: end col :::

::: end row :::


#### 四个 1-in-3 效果

::: raw :::

::: col  1-in-3 :::

<div class="content-test"></div>

::: end col :::

::: col  1-in-3 :::

<div class="content-test"></div>

::: end col :::

::: col  1-in-3 :::

<div class="content-test"></div>

::: end col :::

::: col  1-in-3 :::

<div class="content-test"></div>

::: end col :::

::: end row :::


::: raw :::

::: col 1-in-3 :::

#### 网站结构统一

网站的结构就是页面的骨架，决定了用户的浏览习惯和设计风格，整体布局采用白灰/白黑相见的搭配方式，更好的区分板块间内容，给用户传达更好的视觉浏览体验

::: end col :::

::: col 1-in-3 :::

#### 导航逻辑统一

导航上我们设置了统一的跳转逻辑，当鼠标滚轮超过一屏的时候会在顶部默认出现快捷导航，可以快速定位到用户想查找的信息

::: end col :::

::: col 1-in-3 :::

#### 标志性元素的统一

标志性元素为最具有页面识别性的内容符号，例如标准色#108cee的使用以及图标设计风格的统一都能够在一定程度上加深用户对产品的记忆

::: end col :::

::: end raw :::