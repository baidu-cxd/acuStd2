---
title: 图片预览页
author: Ting
sidebarDepth: 0
---
# 图片预览页

图片预览页是在原有页面上方呈现的模态页面，，作用是方便用户方便用户大屏查看各张图片的细节。

## 宽度和适配

图片预览页宽度为1010px，在标准宽度1280px的Console控制台上，能保证适当的左右留白，在1024px屏幕宽度下也不会出现横向滚动条

![图片](http://baiduyun-guideline.bj.bcebos.com/console/layout/Picture_preview/01_2x.png)

## 内容元素

图片预览页的内容分为图片标题、大图展示、图集缩略图3个模块。

![图片](http://baiduyun-guideline.bj.bcebos.com/console/layout/Picture_preview/02_2x.png)

大图展示模块的相关规范如下所示。

![图片](http://baiduyun-guideline.bj.bcebos.com/console/layout/Picture_preview/03_2x.png)

图集缩略图模块的相关规范如下所示。

图片大小为54*54px，共15张；缩略图小于15张时，保持间距10px，左右居中对齐。

<mark>屏幕之外左右还有缩略图时，选中态始终保持在正中间的第8张（配合滑动效果）；到头部或尾部的情况下，切换查看图片时各缩略图位置不变</mark>。

![图片](http://baiduyun-guideline.bj.bcebos.com/console/layout/Picture_preview/04_2x.png)



## 示例

<mark>图片分辨率低时（1：1显示小于图片显示区域），居中显示</mark>，如下所示。

![图片](http://baiduyun-guideline.bj.bcebos.com/console/layout/Picture_preview/05_2x.png)

<mark>图片分辨率高时（1：1显示大于图片显示区域），横棍图宽度铺满1010px，居中显示上下留白</mark>，如下所示。

![图片](http://baiduyun-guideline.bj.bcebos.com/console/layout/Picture_preview/06_2x.png)

<mark>图片分辨率高时（1：1显示大于图片显示区域），竖棍图高度铺满可显示区域，居中显示左右留白</mark>，如下所示。

![图片](http://baiduyun-guideline.bj.bcebos.com/console/layout/Picture_preview/07_2x.png)

