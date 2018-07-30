---
title:  节奏
author:  dz（wangyihan05@baidu.com）
sidebarDepth: 1
edition: v2
---

# 节奏

通过控制动画的时间和速度控制动画的节奏感，可以带来更愉悦的体验。为了统一百度云页面的动画风格并协调开发和设计，对常见的动画时间相关参数进行规定


[[toc]]

## 缓动函数

缓动函数用于控制动画的速度变化，通过对曲线地规范统一页面中的动画节奏风格。一般使用标准的动画曲线进行设计即可，但是如果有特殊的需要也可以使用较为舒缓的动画曲线，如 [涟漪动画](/animate/Base.html#涟漪)，也有时候需要使用较强的动画曲线，如 [pulse/wiggle](/animate/Base.html#强调)

### 匀速曲线（linear）

匀速动画曲线即整个动画从始至终使用同样的速度，很少在页面中使用

<cubic-bezier :param="[0, 0, 0, 0]" />

### 缓入曲线（ease-in）

缓慢地开始，然后加速的动画曲线，一般用于元素从界面中离开

```stylus
$easeInStd   = cubic-bezier(.55, .055, .675, .19) //标准，用于一般情况
$easeInSine  = cubic-bezier(.47, 0, .745, .715)  //舒缓的，用于不想干扰用户的时候
$easeInQuint = cubic-bezier(.755, .05, .855, .06)  //较强的，用于突出强调
```

#### 标准缓入曲线

<cubic-bezier :param="[.55, .055, .675, .19]" />

#### 舒缓的缓入曲线

<cubic-bezier :param="[.47, 0, .745, .715]" />

#### 较强的缓入曲线

<cubic-bezier :param="[.755, .05, .855, .06]" />

### 缓出曲线（ease-out）

很快的速度开始运动，然后持续减速动画曲线，一般用于元素进入界面

```stylus
$easeOutStd = cubic-bezier(.215, .61, .355, 1) //标准 
$easeOutSine = cubic-bezier(.39, .575, .565, 1) //舒缓的，用于不想干扰用户的时候
$easeOutQuint = cubic-bezier(0.19, 1, 0.22, 1) //较强的，用于突出强调
```

#### 标准缓出曲线 

<cubic-bezier :param="[.215, .61, .355, 1]" />

#### 较为舒缓的缓出曲线 

<cubic-bezier :param="[.39, .575, .565, 1]" />

#### 较强的缓出曲线 

<cubic-bezier :param="[0.19, 1, 0.22, 1]" />

### 缓入缓出曲线（ease-in-out）

先加速进入，然后减速退出的动画曲线，一般用于元素在界面内的状态变化

```stylus
$easeInOutStd = cubic-bezier(.645, .045, .355, 1) //标准，用于一般情况
$easeInOutSine = cubic-bezier(.445, .05, .55, .95) //舒缓的，用于不想干扰用户的时候
$easeInOutQuint = cubic-bezier(.86, 0, .07, 1) //较强的，用于突出强调
```

#### 标准缓入缓出曲线

<cubic-bezier :param="[.645, .045, .355, 1]" />

#### 舒缓的缓入缓出曲线

<cubic-bezier :param="[.445, .05, .55, .95]" />

#### 较强的缓入缓出曲线

<cubic-bezier :param="[.86, 0, .07, 1]" />

## 动画持续时间

根据动画的重要度，选择合适的动画触发时间：

**1.较长的动画时间：** 页面中较大的元素移动入或者展开选用较大的动画时间：<mark> 0.8s </mark>

**2.一般动画时间：** 页面中默认动画时间一般选择：<mark>  400ms </mark>，一般情况下都使用这个速度的动画
**3.较短的动画时间：** 较慢的动画： <mark>  600ms </mark>，如果 400ms 时间太短，可以使用 600ms 的动画，显得更为舒缓

**3.极短的动画时间：** 极快的动画： <mark>  200ms </mark>，功能按钮 `:hover` 等其它及时反馈的内容


::: tip  更长的动画时间？

特殊情况下，也允许使用更长时间的动画。但是建议不要使用超过 1.2s 长度的动画

:::

>感受一下不同的动画持续时间：

<ani-base :animate="['time-800ms','time-600ms','time-400ms','time-200ms']"/>

## 间隔时间

### 标准间隔时间

如果某个情境下会触发多个动画，那么两个动画之间间隔时间如何选取：

**1.标准的间隔：** 一般选择间隔时间：<mark>  200ms </mark>，两个不同的动画组件之间如果想要有一定的的间隔节奏感，选用 200ms

**3.较短的动画时间：** 较快的动画： <mark>  0.4s </mark>，如果不希望给人间隔感，而是连续的有层次的动画，选用 50ms

>体验不同的时间间隔：

<ani-base :type="'list'" :animate="['delay-200ms']"/>

<ani-base :type="'list'" :animate="['delay-50ms']"/>

### 间隔时间规律

界面中的元素按从左到右从上到下的顺序播放动画，播放如图：![时间](http://baiduyun-guideline.bj.bcebos.com/animate%2Ftime.png)

>体验动画阵列：

<ani-base :type="'list-2'" :animate="['delay-50ms']"/>




