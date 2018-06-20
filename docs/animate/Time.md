---
title:  缓动函数
author:  dz（wangyihan05@baidu.com）
sidebarDepth: 1
---

# 缓动函数


缓动函数用于控制动画的速度变化，通过对曲线地规范统一页面中的动画节奏风格。一般使用标准的动画曲线进行设计即可，但是如果有特殊的需要也可以使用较为舒缓或者更加剧烈的动画曲线，如 [涟漪动画](/animate/Base.html#涟漪)


[[toc]]


## 匀速曲线（linear）

匀速动画曲线即整个动画从始至终使用同样的速度，很少在页面中使用

<ani-timing :timing="['linear']"/>

## ease-in

缓慢地开始，然后加速的动画曲线，一般用于元素从界面中离开

### 标准 ease-in

<ani-timing :timing="['easeInStd']"/>

### 较为舒缓的 ease-in

<ani-timing :timing="['easeInSine']"/>

### 剧烈的 ease-in

<ani-timing :timing="['easeInQuint']"/>

## ease-out

很快的速度开始运动，然后持续减速动画曲线，一般用于元素进入界面

### 标准 ease-out

<ani-timing :timing="['easeOutStd']"/>

### 较为舒缓的 ease-out

<ani-timing :timing="['easeOutSine']"/>

### 剧烈的 ease-out

<ani-timing :timing="['easeOutQuint']"/>

## ease-in-out

先加速进入，然后减速退出的动画曲线，一般用于元素在界面内的状态变化

### 标准 ease-in-out

<ani-timing :timing="['easeInOutStd']"/>

### 较为舒缓的 ease-in-out

<ani-timing :timing="['easeInOutSine']"/>

### 剧烈的 ease-in-out

<ani-timing :timing="['easeInOutQuint']"/>

## 动画持续时间

根据动画的重要度，选择合适的动画触发时间：

**1.较长的动画时间：** 页面中较大的元素移动入或者展开选用较大的动画时间：<mark> 0.8s </mark>

**2.一般动画时间：** 页面中默认动画时间一般选择：<mark>  0.6s </mark>，本站示意动画基本上都是 0.6s

**3.较短的动画时间：** 如按钮动画等需要快速反馈的情况： <mark>  0.3s </mark>，本站中，强调、描线展示动画都使用的





