---
title: 规范字典
author: DZ（wangyihan05@baidu.com）
sidebarDepth: 0
---

# 规范字典

为了确保设计师，产品经理和程序员对规范有统一的认识，在此针对常见的重要名词进行阐述：
[[toc]]


## 速查表

| 中文名         | 西文名             | 描述 |
| ---------      |------------      | -----|
| 入口页       | portal      |百度云的官网，产品页，解决方案页等展示型页面 |
| 控制台       | console      |百度云的控制台页面 |
| [塔设计](#塔设计-tower-design)       | Tower Design      |百度云 portal 端设计规范的昵称 |
| 组件           | component          | 页面的基本组成单元，如 <mark>按钮</mark> ，<mark>输入表单</mark> |
| 基础组件        | base-component     |最小的组件单元，如<mark>按钮</mark>，<mark>输入框</mark> |
| 模块组件        | module-component   |由基础组件组合成的复杂组件，如 <mark>卡片</mark>，<mark>模态框</mark> |
| [板块组件/楼层](#板块-楼层)    | module-component  |组成页面的直接单元，比如由3个卡片并列组成的 <mark>三项卡片板块</mark> 因为我们的页面一般是由很多板块一层一层堆砌起来的，所以也可以称之为 <mark>楼层</mark>|

## 重要名词注释

### 塔设计 (Tower Design)

百度云 portal 端页面在设计页面的时候，就像修塔一样，按板块（section）一层一层地堆砌，因此我们把我们的平台设计规范称为 “塔（Tower）”，我们的组件库名称为 Tower Design UI Kit

### 板块/楼层

组成页面的层状态单元，页面的楼层结构如下图所示：

![参考图](http://baiduyun-guideline.bj.bcebos.com/portal%2Fpage%2Fsolution%2Fsolutionpage.png)