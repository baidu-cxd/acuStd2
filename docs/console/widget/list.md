---
title: 列表（List）
sidebarDepth: 0
---

# 列表（List）

列表可将数据内容有秩序的展现给用户，同时便于筛选、排序查看。根据内容聚合形式，包含如下分类：

[[toc]]

## 表格

适用于大量数据的结构化呈现。用户可以通过表格控件添加内容，进行排序、筛选、折叠展开等操作。
通常，表格会根据父级页面定义宽度，或根据父级页面自适应宽度，因此本文只对表格内容设计和高度进行了定义。

### ① 基础表格样式

单行内容，基础表格高度40px（10+20+10）：

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/list/list-1@2x.png?process=none)

说明：

1. 列表需要定义一页显示的内容数量。点击查看[翻页控件规范](/console/widget/Pagination.html)

2. 鼠标悬浮可以作为一些辅助功能和信息显示的触发方式，如表格内图标。点击查看[图标](/console/style/Icons.html)

多行内容（每多一行文字内容，高度增加20）：

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/list/list-2@2x.png?process=none)

表内滚动：

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/list/list-3@2x.png?process=none)

<mark>★ 关于列表翻页和滚动的使用提示 </mark>

1. 翻页形式表格，不可跨页多选，会有一定的操作不便。但每页显示内容较固定，反复查看容易定位。适合承载较多条目。
2. 滚动表格便于用户浏览所有条目，适合有多选、表内添加的需求时使用。但缺点在于如果内容过多，就不容易定位查找。

无限列表：

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/list/list-4@2x.png?process=none)

### ② 单选/多选

表格可支持单选、多选：用户点击选择控件，选中某一列或多列内容后可进行后续操作。

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/list/list-5@2x.png?process=none)

### ③ 数据筛选及搜索

支持表头筛选、与其他控件组合筛选、搜索。（筛选排序是针对所有数据进行的，且会触发列表刷新）

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/list/list-6@2x.png?process=none)

### ④ 具有层级关系的列表

需要表达每一行数据之间层级关系且列表项可以共用时，可以使用如下样式：

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/list/list-7@2x.png?process=none)

### ⑤ 嵌套列表/展开列表

使用嵌套列表可以清晰的表达内容的包含关系，且不受列表项制约，被包含的列表可具有独立的表头。通常嵌套列表伴随着展开/收起交互。

▼ 嵌套内容为静态信息样式：

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/list/list-8@2x.png?process=none)

▼ 嵌套内容为表格样式：

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/list/list-9@2x.png?process=none)

### ⑥ 表格内图标：

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/list/list-10@2x.png?process=none)

### ⑦ 表格包含缩略图：

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/list/list-11@2x.png?process=none)

### ⑧ 表内添加/编辑

通常，添加内容会采用新开页面或弹框的形式，但如果你<mark>希望添加和编辑的操作非常高效便捷</mark>，可以使用表内添加/编辑的交互形式。
点击添加，出现的<mark>新输入行通常在列表上方</mark>，与列表按时间倒叙排序相吻合。

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/list/list-12@2x.png?process=none)

### ⑨ 列表为空：

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/list/list-13@2x.png?process=none)

## 示例

列表和其他组件搭配，构成的常规列表（通常列表页表格为通栏样式，布局详见[列表页设计规范](/console/style/list_page.html)）：

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/list/list-14@2x.png?process=none)

弹框中列表（弹框中列表尺寸遵循[弹框设计规范](console/widget/modal.html)）：

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/list/list-15@2x.png?process=none)

## 组件参考

暂无


## 卡片列表

固定的内容集合成一张“卡片”，由多个卡片组成了网格形态的卡片列表，主要用于批量呈现图片类内容。
卡片内容应根据产品功能单独定义，本文内容可作为参考，不做强制设计要求。

### ① 样式1-卡片内图文混排

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/list/grid-view-1@2x.png?process=none)

### ② 样式2-卡片内为文字排版

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/select-control/03_2x.png)

### ③ 样式-卡片内为图形样式

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/select-control/05_2x.png)

## 示例

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/list/grid-view-4@2x.png?process=none)

## 组件参考

暂无


