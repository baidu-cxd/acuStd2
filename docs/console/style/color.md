---
title: 颜色
sidebarDepth: 0
---

# 颜色

颜色，页面整体风格表现的重要基本元素，色调的选择搭配，是对整个网站品牌调性的确定、产品特性信息的有效传达。百度云 console 的用色简洁明确，力求使用最少的颜色，表达最有效的功能信息。百度云定义了 console 中使用到的基本颜色，这些颜色基本可以涵盖控制台中绝大部分的使用场景，但如果根据特殊产品需要，可以适当扩展配色，新增配色根据功能色的颜色饱和度、亮度、对比度进行调色并保持一致，新增颜色不可在页面大面积使用。

[[toc]]

## 主色

主色即品牌色，整体页面的风格调性。使用场景主要体现在导航及页面的关键点，重要使用控件、重要信息高亮等明确着重表达的位置。

<color-block :color="'#19233c'" :text="'黑色主色'"/>

<color-block :color="'#108cee'" :text="'蓝色主色'"/>

## 辅助色

辅助色是主色的延展，为了更好的展现页面风格做出的和主色相近或者偏中性的颜色。主要对关键内容的衬托和功能的引导。这类颜色主要体现在导航框架、背景底色、描边、或次级操作等场景。

::: color #121a2c
侧边导航配合辅助
:::

::: color #ea2e2e
重点提醒或细节突出等小面积辅助
:::

::: color-l #eaf6fe
次级操作以及按钮
:::

::: color-l #e2e5ec
分割线
:::

::: color-l #eceff8
边框线／强按钮禁用
:::

::: color-l #f6f7fb
浅背景色／弱按钮禁用颜色
:::


## 功能色及扩展色

具备特定功能的颜色，主要起到传递功能信息、代表某种状态等作用。主要应用于消息通知、反馈提醒、表单校验这类场景中的成功、出错、失败、提醒、链接等状态。



<div class="wrp" id="blue">

::: color #0776dd
强调加强
:::

::: color #108cee
链接/强按钮/说明色
:::

::: color #35a2f8
链接/强按钮 hover 用色
:::

::: color #6dbefd
展示/其他特殊情况
:::

::: color #8fcdfd
展示/其他特殊情况
:::

::: color-l #c6e6fc
弱按钮 hover 及次操作
:::

::: color-l #eaf6fe
弱按钮及次操作
:::


</div>


<div class="wrp" id="green">

::: color #5fb333
成功色
:::

::: color #80c85b
展示/其他特殊情况
:::

::: color #a5da89
展示/其他特殊情况
:::

::: color-l #d1f3c0
展示/其他特殊情况
:::

::: color-l #f1fdeb
底色/展示用色
:::


</div>

<div class="wrp" id="red">

::: color #ea2e2e
失败色
:::

::: color #f56464
展示/其他特殊情况
:::

::: color #f28b8b
展示/其他特殊情况
:::

::: color-l #fbdbdb
展示用色
:::

::: color-l #fff5f5
底色/展示用色
:::


</div>

<div class="wrp" id="orange">

::: color #f39000
警告色
:::

::: color #f7a73f
展示/其他特殊情况
:::

::: color #fbca8c
展示/其他特殊情况
:::

::: color-l #fde7cc
展示/其他特殊情况
:::

::: color-l #fcf7f1
底色/展示用色
:::


</div>





## 文字色

页面一般常用规范字体颜色，链接颜色。主要为标题、文本内容、链接等。

::: color #333333
标题/重要文本色
:::

::: color #666666
普通文本色
:::

::: color #999999
禁用/弱文本颜色
:::

::: color #108cee
链接/高亮文本
:::

::: color #8d99b0
侧边导航标题
:::


## 视觉层次

将品牌色赋予在重要信息或关键主动点上，并衬以大面积的中性色，可以让用户更聚焦到任务本身，从而提高任务的执行效率。

![图片](http://baiduyun-guideline.bj.bcebos.com/console/style/color/05_2x.png)






<!-- 页面样式配置文件，如不懂 css 代码请勿更改 -->

<style>
    /*蓝色颜色列表配置项*/
    div.wrp#blue .colorBox.light p{
        color:#108cee;
    }
    /*绿色颜色列表配置项*/
    div.wrp#green .colorBox.light p{
        color:#5fb333;
    }
    /*红色颜色列表配置项*/
    div.wrp#red .colorBox.light p{
        color:#ea2e2e;
    }
    /*橙色颜色列表配置项*/
    div.wrp#orange .colorBox.light p{
        color:#f39000;
    }
</style>



