---
title: Design Token
author: dz(wangyihan05@baidu.com)
edition: v2
---

# Design Token

[[toc]]

## 颜色规范

| Token | 值 | 描述 | 
| ---   |--- |--- |  
| @blue-std | #108cee  | 标准蓝色，也是品牌主色 |
| @blue-std-hover | #209bfd | 品牌标准蓝色蓝色对应 :hover |
| @blue-std-active | #047bd8   | 品牌标准色对应 :active |
| @red-std | #d0021b  | 标准红色，很重要的信息使用|
| @yellow-std | #f5a623   | 标准黄色，用于提示，比红色级别稍弱 |
| @bg-color-dark <i class="iconfont icon-new-tag"></i>| #0f1012  | 背景用最黑色，用于头图背景等情况 |
| @bg-color-black <i class="iconfont icon-new-tag"></i>| #303030  | 解决方案页面内容板块深色背景 |
| @bg-color-light | #f5f5f5  | 背景用标准亮灰色，用于页面内的板块划分 |
| @border-color | #ebebeb   | 边框颜色 |
| @thead-color | #fbfbfb   | 表头用色 |



## 文字

| Token | 值 | 描述 | 
| ---   |--- |--- |  
| @text-black-heading| rgba(0, 0, 0, .85)   | 标题文字用色 |
| @text-black-std | rgba(0, 0, 0, .6)  | 一般文字用色 |
| @text-black-label | rgba(0, 0, 0, .4)  | 浅色文字用色，一般用于标签和注释情况 |
| @text-white-heading| rgba(255, 255, 255, 1)| 标题文字用色-深色背景 |
| @text-white-std | rgba(255, 255, 255, .8)  | 一般文字用色-深色背景  |
| @text-white-label | rgba(255, 255, 255, .5)  | 浅色文字用色-深色背景  |



## 投影

| Token | 值 | 描述 | 
| ---   |--- |--- |  
| @shadow-std | 0 2px 10px 0 rgba(0, 0, 0, 0.1)  | 一般的投影 |
| @shadow-big | 0 2px 30px 0 rgba(0, 0, 0, 0.1)  | 比较重的投影 |



## 动画规范

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
| @transition-std | @time-std all @ease-in-out-std <i class="iconfont icon-new-tag"></i>  | 标准过渡: transition: @transition-std  |


## 命名规范

`@[样式用途] - [后缀]`

#### 样式用途

样式用途需要能让人理解这个 token 对应的是什么用途的样式内容，比如“用于动画延时参数控制”，则 `[样式用途]` 值为 `delay`   

#### 后缀

1. 后缀一般用于一个用途的样式有多种级别的时候，所以后缀一般是表示程度的修饰词**

    如：`@delay-std` 是标准的间隔时间 `@delay-long` 则是较长的间隔时间

2. 有一些 token 过短，也需要修饰词占位，常见的占位修饰词为 `std` (standard 的缩写)

    如: `@yellow-std`

3. 有一些 token 一般不会有非标准情况的用法，也不过短，则没有修饰词

    如: `@border-color ` border 的颜色一般是没有其它情况的



<style>
    .icon-new-tag{
        font-size:14px;
        color: #d0021b ;
    }
</style>
