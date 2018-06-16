---
title:  动效设计语言
author:  dz（wangyihan05@baidu.com）
sidebarDepth: 1
---

# 动效设计语言

为了实现设计目的，将页面中常见的动效形式进行整理，抽象出属于百度云的动效设计语言

[[toc]]


## 板块浮入

滚动页面时，部分页面板块会从屏幕底部浮入，以缓解浏览页面的枯燥感

<mark>当页面板块区域位移到屏幕中线以上，动画会触发</mark>


    此处会有动图展示
    此处会有动图展示
    此处会有动图展示
 


**相关资料：**

- [浮入](/animate/Base.html#浮入动画)  
- [始快终慢曲线](/animate/Base.html#始快终慢) 

## 阵列次序

#### 列表动画

列表进入动画触发时，每一项会依次进入，而不是同时进入：

    此处会有动图展示
    此处会有动图展示
    此处会有动图展示

#### 二维阵列动画

如果有二维阵列的内容进入，也会按照左上先进入，右下后进入的次序

    此处会有动图

**相关资料：**

- [浮入](/animate/Base.html#浮入) 

## 空间层次

网页虽然是平面的，但是如果元素之间有内在的空间层次逻辑存在，需要应用 “视差” 的方法来表现内容的空间层次

    此处会有图片说明

**相关资料：**

- [鼠标视差移动](/animate/Base.html#鼠标视差移动) 
- [延时](/animate/Base.html#延时) 


## 定位变化

页面中的组件，有时会因为页面的滚动改变定位规则，如页面内导航组件在页面向下滚动时变为 `fixed` 定位，始终固定在屏幕的某个位置，而不会离开可视区域 

## 状态变化

如组件 tab 会有切换的状态变化，应该通过动画帮助用户理解切换过程

## 操作反馈

进行了点击之类的操作，应该有一定的反馈，告诉用户操作已经产生效果

## 过程提示

加载，下载或者其他存在中间状态的情况需要有动画展示

## 要点提示

动画具有吸引注意力的功能，可以用动画来提醒用户注意一些关键的内容

## 视觉甜点

大多数人都会喜欢页面中有趣的小动画，可以带给用户一些趣味感，如图标动画，也可以在让用户觉得沮丧的场合使用一些动画

## 辅助理解

通过对用户能理解的一些模型的模拟，帮助用户理解页面交互，如用户拖拽组件改变组件排列顺序时，添加一个位置移动过渡动画，展开隐藏内容时添加一个缩放动画

## 内容转场

切换同一个组件的展示形式的时候，应该有一个过渡动画，如浮层的出现和消失，或者组件在不同呈现形式之间切换