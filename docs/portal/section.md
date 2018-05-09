---
title: portal 规范样式汇总
layout: viewer
sidebar: false


cmsblocks:

- name     : 三项基本卡片
  type     : component
  component: SectionCardThree
  img      : http://baiduyun-guideline.bj.bcebos.com/portal%2FCMSsection%2Fcol-3-card
  text     : 三项基本卡片适用于单行三项情况，能够集中视觉上的注意力，推荐作为第一个板块承载“优势”之类的文本
  kind     : product solution
  tag      : col-3 card icon

- name     : 三项基本特性列表
  type     : img
  component: none
  img      : http://baiduyun-guideline.bj.bcebos.com/portal%2FCMSsection%2Ffeature-col3.png
  text     : 三项基本特性列表适用于单行三项情况，能够集中视觉上的注意力，推荐作为第一个板块承载“优势”之类的文本
  kind     : product solution
  tag      : col-3 feature icon

- name     : 三项基本特性列表-深色
  type     : img
  component: none
  img      : http://baiduyun-guideline.bj.bcebos.com/portal%2FCMSsection%2Ffeature-col3-dark.png
  text     : 三项基本特性列表适用于单行三项情况，能够集中视觉上的注意力，推荐作为第一个板块承载“优势”之类的文本
  kind     : product solution
  tag      : col-3 feature icon  

- name     : 六项特性列表
  type     : img
  component: none
  img      : http://baiduyun-guideline.bj.bcebos.com/portal%2FCMSsection%2Ffeature-col3-raw2.png
  text     : 适用于双行六项项情况，占据比较多的位置，如果是比较重要的内容请使用
  kind     : product solution
  tag      : col-3 feature icon


- name     : 双项小图标田字格特性列表
  type     : img
  component: none
  img      : http://baiduyun-guideline.bj.bcebos.com/portal%2FCMSsection%2Ffeature-col2-raw2-small.png
  text     : 三项基本卡片适用于四项/六项情况，视觉重量中等（六项使用双行）
  kind     : product solution
  tag      : col-2 card icon

- name     : 六项小图标田字格特性列表
  type     : img
  component: none
  img      : http://baiduyun-guideline.bj.bcebos.com/portal%2FCMSsection%2Ffeature-col3-raw2-small.png
  text     : 三项基本卡片适用于双行六项项情况，能够集中视觉上的注意力，推荐作为第一个板块承载“优势”之类的文本
  kind     : product solution
  tag      : col-3 card icon




---

拉取摘要
<!-- more -->

注释：

`name`      ：板块的名称

`type`      ：显示在页面上的形式，允许的数值为 `component` 或者 `img`

`component` ：如果在 `type` 处输入了 `component`,这里输入组件对应的代码模版名称，没有的话填 `none`

`img`       ：这里输入图片链接，图片请上传 1920px@2x ，无论 `type` 内容是什么这里都必须填写，否则将没有预览图

`text`      ：一段介绍文本，仅允许一段话，纯文本，字数不限

`kind`      ：板块的使用页面类型，允许多个值，如果是产品页专属则填写 `product` 解决方案 `solution`

`tag`       ：板块的检索标签，允许多个值，下面有参考标签：

标签汇总：

`col-3`     ：三项式

`col-4`     ：四项式

`card`      ：卡片

`feature`   ：特性罗列

`tab`       ：可切换

`dark`      ：深色背景