---
title: Design Token
author: dz(wangyihan05@baidu.com)
sidebarDepth: 0
---

# Design Token

**Design Token** 是一个设计-前端协作工具，是站在工程的角度对重要的设计参数的名称约定。

## Design Token 的作用

**1.便于设计师和前端沟通**

通过建立一个一个按照工程方式命名的沟通桥梁，设计师和前端可以进行更加良好的沟通。就像我们想要提及一个人物的时候，我们会去称呼他的名字，当我们想要提及某个设计实体的时候，我们也可以用 token 来称呼它

>有一个动画曲线是：`cubic-bezier(0.895, 0.03, 0.685, 0.22)`，如果没有 token ，设计师应该如何提及它？


**2.前端使用 token 更科学地组织代码**

通过使用 token 来组织代码，帮助前端实现和设计有更好的结合，一方面避免失误用错用样式，另一方面也便于当设计师需要调整某个样式时，能进行全网站级别的全局替换

``` css
p{
    color: #108cee   /*一般的形式*/
    color: $stdBlue  /*token的形式*/
}
``` 

**3.便于设计规范后续的进化**

通过使用 **Design Token** 设计师可以更加全局化和系统化地思考设计问题，通过调整 token 对应的参数，快速改变整个设计系统的风格

## Token 汇总

### 颜色相关

| Token         | 参数             | 描述 |
| ---------     |------------      | -----|
| $stdBlue      |#108cee           | 百度云的品牌蓝色|
| $stdBlack      |#0f1012           | 常用黑色|
| $noticeColor     |#d0021b         | 提示色|

### 间距相关

| Token           | 参数             | 描述 |
| ---------        |------------   | -----|
| $stdSpace        |20px           | 标准的间距|
| $smallSpace      |10px           | 小间距|
| $largeSpace      |30px           | 较大的间距|
| $largerSpace      |40px           | 更大的间距|
| $sectionSpace      |80px           | 板块（楼层）级别间距|


### 动画相关

| Token          | 参数              | 描述 |
| ---------      | ------------      | -----|
| $easeInStd      |cubic-bezier(0.895, 0.03, 0.685, 0.22)  | 缓入快出的动画|