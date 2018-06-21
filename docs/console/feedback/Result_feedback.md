---
title: 结果反馈
author: hwj
sidebarDepth: 0
---

# 结果反馈

及时告诉用户操作后的任务状态、操作结果等，增加用户信赖感。

[[toc]]

## 文字反馈

一般用于输入框的报错，对输入框输入的内容进行失焦验证，出现错误时告知用户出现错误的原因，指引用户进行修改，详见[输入框控件](/console/widget/Input.html)

![图片](http://baiduyun-guideline.bj.bcebos.com/console/feedback/Resultfeedback/01_2x.png)

## toast反馈

对当前操作结果的轻量级反馈方式，页面中停留3秒后自动消失且不打断用户的操作。toast结果态有成功、失败、警告以及指示性4种反馈状态，具体样式详见[浮窗控件](/console/widget/Toast.html)。<mark>若重要的操作出现失败时推荐使用弹窗反馈。</mark>

![图片](http://baiduyun-guideline.bj.bcebos.com/console/feedback/Resultfeedback/02_2x.png)

## 弹窗反馈

对当前操作结果的重量级反馈方式，用户在反馈层出现时不可进行任何的操作，一般用于重要操作时的警示反馈即让用户进行2次确认，或用于重要操作失败时的结果反馈。具体样式详见[弹窗控件](/console/widget/Modal.html)

![图片](http://baiduyun-guideline.bj.bcebos.com/console/feedback/Resultfeedback/03_2x.png)

## 页面反馈

当进行了某些失效操作（如点击了一些本身不存在的页面链接或者已经被删除的页面链接），则会出现特定的页面反馈给用户，有404页面、页面报错页面。详见[占位控件](/console/widget/Placeholder.html)

![图片](http://baiduyun-guideline.bj.bcebos.com/console/feedback/Resultfeedback/04_2x.png)