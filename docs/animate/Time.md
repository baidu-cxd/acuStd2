---
title:  缓动函数
author:  dz（wangyihan05@baidu.com）
sidebarDepth: 1
---

# 缓动函数


缓动函数用于控制动画的速度变化，通过对曲线地规范统一页面中的动画节奏风格。一般使用标准的动画曲线进行设计即可，但是如果有特殊的需要也可以使用较为舒缓的动画曲线，如 [涟漪动画](/animate/Base.html#涟漪)，也有时候需要使用较强的动画曲线，如 [pulse/wiggle](/animate/Base.html#强调)


[[toc]]


## 匀速曲线（linear）

匀速动画曲线即整个动画从始至终使用同样的速度，很少在页面中使用

<ani-timing :timing="['linear']"/>

## 缓入曲线（ease-in）

缓慢地开始，然后加速的动画曲线，一般用于元素从界面中离开

```stylus
$easeInStd   = cubic-bezier(.55, .055, .675, .19) //标准
$easeInSine  = cubic-bezier(.47, 0, .745, .715)  //舒缓的
$easeInQuint = cubic-bezier(.755, .05, .855, .06)  //较强的
```

### 标准缓入曲线

<ani-timing :timing="['easeInStd']"/>

### 舒缓的缓入曲线

<ani-timing :timing="['easeInSine']"/>

### 较强的缓入曲线

<ani-timing :timing="['easeInQuint']"/>

## 缓出曲线（ease-out）

很快的速度开始运动，然后持续减速动画曲线，一般用于元素进入界面

```stylus
$easeOutStd = cubic-bezier(.215, .61, .355, 1) //标准 
$easeOutSine = cubic-bezier(.39, .575, .565, 1) //舒缓的
$easeOutQuint = cubic-bezier(.23, 1, .32, 1) //较强的
```

### 标准缓出曲线 

<ani-timing :timing="['easeOutStd']"/>

### 较为舒缓的缓出曲线 

<ani-timing :timing="['easeOutSine']"/>

### 较强的缓出曲线 

<ani-timing :timing="['easeOutQuint']"/>

## 缓入缓出曲线（ease-in-out）

先加速进入，然后减速退出的动画曲线，一般用于元素在界面内的状态变化

```stylus
$easeInOutStd = cubic-bezier(.645, .045, .355, 1) //标准
$easeInOutSine = cubic-bezier(.445, .05, .55, .95) //慢舒缓的进慢出
$easeInOutQuint = cubic-bezier(.86, 0, .07, 1) //较强的
```

### 标准缓入缓出曲线

<ani-timing :timing="['easeInOutStd']"/>

### 舒缓的缓入缓出曲线

<ani-timing :timing="['easeInOutSine']"/>

### 较强的缓入缓出曲线

<ani-timing :timing="['easeInOutQuint']"/>

## 动画持续时间

根据动画的重要度，选择合适的动画触发时间：

**1.较长的动画时间：** 页面中较大的元素移动入或者展开选用较大的动画时间：<mark> 0.8s </mark>

**2.一般动画时间：** 页面中默认动画时间一般选择：<mark>  0.6s </mark>，本站示意动画基本上都是 0.6s

**3.较短的动画时间：** 如按钮动画等需要快速反馈的情况： <mark>  0.3s </mark>，本站中，强调、描线展示动画都使用的





