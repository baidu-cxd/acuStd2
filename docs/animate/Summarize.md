---
title:  动画设计概述
author:  dz（wangyihan05@baidu.com）
sidebarDepth: 0
edition: v1
hero: https://cdn.dribbble.com/users/10958/screenshots/4761268/53.jpg
---

# 动画设计概述

## 引入动画的目的

在页面中引入动画的主要目的有两个：

>1. 帮助用户理解页面交互形式
>2. 提高页面视觉效果，加深用户对页面的印象，降低长时间浏览的枯燥感


## 为不同的页面设计动画

百度云有 [Portal 端页面](/portal/summarize/Summarize.html) ，[Console 端页面](/console/outline/Outline.html) 等不同类型的页面，在动画的设计形式上会有细微的差距，文档主要描述动画的通用单元和风格，使用的时候应该根据页面自身的特点选择合适的形式。更多的说明见：[动画设计准则](/animate/Principle.html)

## 开始设计动画：

### 1. 使用准备好的动画：

我们将常见的动画形式做了预设，如果需要使用某种动画，可以查阅 [常见动画组件](/animate/Component.html)

### 2. 开始设计全新的动画：

如果现有的动画组件无法满足要求，就需要设计新的动画，一个完整的动画设计应该包括以下几点：

>1. 动画什么时候开始
>2. 动画持续多长时间
>3. 使用哪种 [基础动画](/animate/Base.html)
>4. 使用哪种 [缓动函数](/animate/Time.html#缓动函数)
>5. 一个动画周期完成后做什么

可以使用 AE 或者其它动画软件设计，但是为了更好地帮助开发人员理解，推荐使用时间轴序列图来向开发人员描述你的设计：

![动画](http://baiduyun-guideline.bj.bcebos.com/animate%2FtimeLine.png)




