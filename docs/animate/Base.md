---
title:  常见动画单元
author:  dz（wangyihan05@baidu.com）
sidebarDepth: 1
edition: v2
---

# 常见动画单元

[[toc]]

## 移入/移出

移入移出常用于页面组件的进入，离开

<ani-base :animate="['fade-down','fade-left-right']"/>

## 消失/出现

元素不产生位移，在原地消失／出现的动画

<ani-base :animate="['opacity','scale','expand','fade-near']"/>

## 旋转

元素的旋转有两种： 2D平面旋转和 3D 平面旋转

<ani-base :animate="['rotate','rotate-z']"/>

## 颜色变化

<ani-base :animate="['color']"/>


## 强调

需要强调的信息使用动画来强调，一般用于给予反馈

<ani-base :animate="['pulse','wave','wiggle','emphasize']"/>


## 涟漪

有一些需要用户能够注意到的，但是又不想打扰用户的内容可以使用涟漪动画提示

<ani-base :animate="['ripples']"/>

<!--
## 描线动画

<ani-base :animate="['outline']"/>

## 阴影扩散

<ani-base :animate="['shadow']"/>
-->





