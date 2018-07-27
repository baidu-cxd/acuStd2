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
| @brand | #108cee  | 品牌标准蓝色 |
| @brandHover | #209bfd | 品牌标准蓝色蓝色对应 :hover |
| @brandActive | #047bd8   | 品牌标准色对应 :active |
| @bce-red | #d0021b  | 标准红色，很重要的信息使用|
| @bce-yellow | #f5a623   | 标准黄色，用于提示，比红色级别稍弱 |
| @bgLight | #f5f5f5  | 板块背景用色 |
| @borderColor | #ebebeb   | 边框颜色 |
| @theadColor | #fbfbfb   | 表头用色 |

## 文字

| Token | 值 | 描述 | 
| ---   |--- |--- |  
| @textDark| #000000d9   | 标题文字用色 |
| @textStd | #00000099  | 一般文字用色 |
| @textLight | #00000066   | 浅色文字用色 |
| @textDark-1| rgba(255,255,255,1)| 标题文字用色-深色背景 |
| @textStd-1 | rgba(255,255,255,.8)  | 一般文字用色-深色背景  |
| @textLight-1 | rgba(255,255,255,.5)  | 浅色文字用色-深色背景  |



## 投影

| Token | 值 | 描述 | 
| ---   |--- |--- |  
| @shadowStd | 0 2px 10px 0 rgba(0, 0, 0, 0.1)  | 一般的投影 |
| @shadowBig | 0 2px 30px 0 rgba(0, 0, 0, 0.1)  | 比较重的投影 |



## 动画规范

| Token | 值 | 描述 | 
| ---   |--- |--- |  
| @easeInStd | cubic-bezier(.55, .055, .675, .19)  | 标准缓入函数 |
| @easeInSine | cubic-bezier(.47, 0, .745, .715) | 平缓的缓入函数 |
| @easeInQuint | cubic-bezier(.755, .05, .855, .06)   | 剧烈的缓入函数 |
| @easeInOutStd | cubic-bezier(.215, .61, .355, 1)  | 标准缓出函数 |
| @easeInOutSine | cubic-bezier(.39, .575, .565, 1) | 平缓的缓出函数 |
| @easeInOutQuint | cubic-bezier(0.19, 1, 0.22, 1)    | 剧烈的缓出函数 |
| @easeOutStd | cubic-bezier(.645, .045, .355, 1)  | 标准缓入缓出函数 |
| @easeOutSine | cubic-bezier(.445, .05, .55, .95) | 平缓的缓入缓出函数 |
| @easeOutQuint | cubic-bezier(.86, 0, .07, 1)   | 剧烈的缓入缓出函数 |
| @timeshort | 200ms   | 最短的时间单位 |
| @timeStd | 400ms   | 一般动画的时间 |
| @timeLong | 600ms   | 较慢的动画的时间 |
| @timeLonger | 800ms | 更慢的动画的时间 |
| @delay | 50ms  | 组件内的序列动画间距时间 |
| @delayLong | 200ms  | 组件内的序列动画较长的间距时间 |
| @transitionStd | @shortTime all @easeInOutQuint  | 标准过渡: transition: @stdTransition |
