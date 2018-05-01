---
title: 按钮
sidebarDepth: 0
---

# 按钮（Button)

响应用户操作，触发相应页面交互和功能，按钮包括如下几种：

[[toc]]

## 普通按钮

普通按钮颜色风格较弱，不会打扰用户，可在一个页面或对话框内放置多个普通按钮。（按钮文案均默认居中对齐）

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/button/button-1@2x.png?process=none)

## 强调按钮

一个页面内强调按钮使用数量建议1-2个。目前强调按钮主要用于新建/购买入口、弹框的“确定”操作。

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/button/button-2@2x.png?process=none)

## 大按钮

主要用于购买时的“下一步”和“支付”或者创建页面中底部“确定/保存”“取消”按钮。

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/button/button-3@2x.png?process=none)

## 图标按钮

为了界面的排版及突出功能，考虑使用图标按钮而非图标来设计；图标按钮表述功能应简单易懂，同时配合鼠标悬浮提示使用，<del>对于表意有可能不清晰的功能应该使用文字按钮而不是图标按钮。</del>

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/button/button-4@2x.png?process=none)

## 示例

### ① 按钮组合：

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/button/button-5@2x.png?process=none)

### ② 界面使用样例：

创建页表单按钮推荐使用大按钮起到引起注意效果：

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/button/button-6@2x.png?process=none)

## 代码参考

暂无


<san-button :skin="'primary'" :disabled="false" :text="'点点点'" />

<san-button :disabled="false" :text="'正常'" />

<san-button :disabled="true" :text="'禁用'" />

<san-button :icon="'plus'" :skin="'warning'" :text="'添加'" />

<san-button :skin="'stringfy'" :size="'large'" :text="'大的'" />
