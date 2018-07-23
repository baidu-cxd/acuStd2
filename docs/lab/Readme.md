---
author: dz
title: 行高实验室
sidebarDepth: 0
edition: v2
grid: true
---

# 布局测试

## MarkDown 语法

#### 第一步：首先创建一个行

    ::: raw :::

    (内容写在这里)

    ::: end raw :::

#### 第二步：在行内创建一个 1/3 单元

    ::: col 1-in-3 :::

    [内容]

    ::: end col :::

就是这样



#### 例子：三等分的写法

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