---
title: Design Token
author: dz(wangyihan05@baidu.com)
edition: v2
---

# Design Token

Design Token 是一个设计前端协作的工具，是为了提高页面样式的规范性和统一性和后期修改的灵活性

::: more :::

### 定义

Design Token (设计变量) 是设计系统中的原子级单元, 它们是命名实体，用于存储视觉设计属性。我们使用它们代替编码值（例如颜色的十六进制值或间距的像素值），以便为 UI 开发维护可扩展且一致的可视系统


### 为什么要这么做？

**确保样式统一:** &nbsp;对两个不同的按钮组件，如果使用同样的颜色，那么我们可以规定一个 token ,在组件使用这个 token ，以确保统一

**约束设计规范:** &nbsp;设计师站在更高的层面进行设计：不去思考具体每个位置的样式，而是思考某个类型的样式，然后将类型注册为 token

**更改样式灵活:** &nbsp;如果我们希望让页面中某个用于按钮的颜色都替换成另一个颜色，那么我们就可以直接在 token 中变更数值

**降低沟通成本:** &nbsp;Design Token 可以作为设计前端沟通的桥梁和页面样式控制的唯一来源

::: more-end :::

[[toc]]


## 一般颜色

| Token | 值 | 描述 | 
| ---   |--- |--- |  
| @brand-color-main |  <i class="color brand-color-main"></i> #108cee  | 品牌标准色 |
| @brand-color-main-hover | <i class="color brand-color-main-hover"></i> #209bfd | 品牌标准色对应 :hover |
| @brand-color-main-active | <i class="color brand-color-main-active"></i> #047bd8   | 品牌标准色对应 :active |
| @emphasize-color | <i class="color emphasize-color"></i> #d0021b  | 需要突出强调的时候使用的颜色 |
| @tips-color | <i class="color tips-color"></i> #f5a623   | 标准黄色，用于提示，比红色级别稍弱 |
| @bg-color-dark | <i class="color bg-color-dark"></i> #0f1012  | 背景用最黑色，用于头图背景等情况 |
| @bg-color-black | <i class="color bg-color-black"></i> #303030  | 解决方案页面内容板块深色背景 |
| @bg-color-black-1 | <i class="color bg-color-black-1"></i> #434547  | 解决方案页面深色卡片背景 |
| @bg-color-black-2 | <i class="color bg-color-black-2"></i> #565759  | 解决方案页面深色卡片内元素背景 |
| @bg-color-light | <i class="color bg-color-light"></i> #f5f5f5  | 背景用标准亮灰色，用于页面内的板块划分 |
| @border-color | <i class="color border-color"></i>#ebebeb   | 边框颜色 |
| @thead-color | <i class="color thead-color"></i>#fbfbfb   | 表头用色 |



## 文字颜色

| Token | 值 | 描述 | 
| ---   |--- |--- |  
| @text-black-heading|  <i class="color text-black-heading">A</i> rgba(0, 0, 0, .85)   | 标题文字用色 |
| @text-black-std | <i class="color text-black-std">A</i> rgba(0, 0, 0, .6)  | 一般文字用色 |
| @text-black-weak | <i class="color text-black-weak">A</i> rgba(0, 0, 0, .4)  | 浅色文字用色，一般用于标签和注释情况 |
| @text-white-heading| <i class="color text-white-heading">A</i> rgba(255, 255, 255, 1)| 标题文字用色-深色背景 |
| @text-white-std | <i class="color text-white-std">A</i> rgba(255, 255, 255, .75)  | 一般文字用色-深色背景  |
| @text-white-weak | <i class="color text-white-weak">A</i> rgba(255, 255, 255, .5)  | 浅色文字用色-深色背景  |



## 投影

| Token | 值 | 描述 | 
| ---   |--- |--- |  
| @shadow-std | 0 2px 10px 0 rgba(0, 0, 0, 0.05)  | 一般的投影 |
| @shadow-big | 0 4px 12px 0 rgba(0, 0, 0, 0.2)  | 比较重的投影 |



## 动画

| Token | 值 | 描述 | 
| ---   |--- |--- |  
| @ease-in-std | cubic-bezier(.55, .055, .675, .19)  | 标准缓入函数 |
| @ease-in-std-sine | cubic-bezier(.47, 0, .745, .715) | 平缓的缓入函数 |
| @ease-in-std-quint | cubic-bezier(.755, .05, .855, .06)   | 剧烈的缓入函数 |
| @ease-out-std | cubic-bezier(.215, .61, .355, 1)  | 标准缓出函数 |
| @ease-out-sine | cubic-bezier(.39, .575, .565, 1) | 平缓的缓出函数 |
| @ease-out-quint | cubic-bezier(0.19, 1, 0.22, 1)    | 剧烈的缓出函数 |
| @ease-in-out-std| cubic-bezier(.645, .045, .355, 1)  | 标准缓入缓出函数 |
| @ease-in-out-sine | cubic-bezier(.445, .05, .55, .95) | 平缓的缓入缓出函数 |
| @ease-in-out-quint | cubic-bezier(.86, 0, .07, 1)   | 剧烈的缓入缓出函数 |
| @time-short | 200ms   | 最短的时间单位 |
| @time-std | 400ms   | 一般动画的时间 |
| @time-long | 600ms   | 较慢的动画的时间 |
| @time-longer | 800ms | 更慢的动画的时间 |
| @delay-std | 50ms  | 组件内的序列动画间距时间 |
| @delay-long | 200ms  | 组件内的序列动画较长的间距时间 |
| @transition-std | @time-std all @ease-in-out-std   | 标准过渡: transition: @transition-std  |


## 命名规范

`@[样式用途] - [样式类型] - [后缀]`

1. 如果某种情况下的样式仅有一种，可以省略后缀

2. 推荐后缀带有一定的语义，如果是难以找到合适的语义，在考虑用 1，2，3

3. 后缀可以有多个

#### 举例

`@brand-color-main`&nbsp; 主品牌色

`@brand-color-main-hover` &nbsp; 主品牌色对应的 hover 样式

`@border-color` &nbsp; border 使用的颜色 





<style>
    .icon-new-tag{
        font-size:14px;
        color: #d0021b ;
    }
</style>
