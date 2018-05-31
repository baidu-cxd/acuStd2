---
title: 间距
author: wangyihan05@baidu.com
sidebarDepth: 0
---

# 间距

通过间距的规范化定义，让同类型的页面元素之间有同样的间距，以提高页面组件的排版布局统一感。

[[toc]]

## 间距的规范定义

百度云采用以 10px 为基元的间距规则，即 10px，20px，30px，40px……

页面的横向排版规则由间距规范和栅格系统结合规定，如果元素能够满足栅格规范布局则在栅格内排列，如果元素不能满足栅格布局的情况，则使用 10 的倍数的间距。纵向间距都使用 10 的倍数进行设计。常用的间距规则如下：

| 间距 token | 字间距大小  | 使用情况 |
| ----------|-----------| -----|
| L-0       | 0px       | 无间距   |
| L-1       | 10px      | 修饰性元素和主体元素之间的间距 |
| L-2       | 20px      | 两个组件之间的间距 |
| L-3       | 30px      | 板块标准内间距 |
| L-4       | 40px      | 板块内标题和内容的间距 |
| L-5       | 80px      | 板块的内间距 |
| Special   | n × 10px  | 其它间距需要遵循 10px 倍数规范 |

## 常用间距规则

**在一个页面板块内：**
- 板块（楼层）的内间距 `padding-top & padding-bottom` 规定为 <mark>80px</mark> 
- 板块（楼层）标题到其他模块的间距为 <mark>40px</mark>
- 两个模块的间距为 <mark>20px</mark>

![间距](http://baiduyun-guideline.bj.bcebos.com/portal%2Fstyle%2Fspace%2Fspace)

**在一个卡片模块内：**
- 卡片内间距 `padding` 一般为 <mark>30px</mark>
- 内间距特殊情况下可以为 <mark>40px</mark> ，如顶部是 icon 的情况

![卡片间距](http://baiduyun-guideline.bj.bcebos.com/portal%2Fstyle%2Fspace%2Fcard)

## 间距的拓展

我们一般使用 <mark>10</mark> 的倍数来进行间距的拓展，也就是说，我们可以使用 10px ,20px , 30px ……

在选择间距的时候，尽可能参照规范文档的说明选取，如果规范无法涵盖的情况，再选择 10 倍的拓展，当拓展依然不能实现需求，最后才考虑使用其它间距


