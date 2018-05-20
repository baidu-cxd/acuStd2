---
title:  解决方案页
author:  wangyihan05@baidu.com
sidebarDepth: 0
---

# 解决方案页

解决方案页面用于介绍针对行业和各个实际场景的实际应用方案。使用丰富灵活的布局和样式让页面充满变化，提升页面表现力；采用组件化设计方式提升设计和开发效率与质量。

[[toc]]

## 页面结构综述

解决方案页面主要由一个 **头部板块** 和若干 **内容板块** 组件组成。

当用户滚动页面时，浏览器顶部会出现一个 [快速导航](portal/navgation/fastguide.html) ，和产品页快速导航相同，使用百度云通用组件。

### 页面内容板块组合示意

解决方案页面的基本板块示意如下：内容板块的底色可以使用 <label class="color" id="color-fff">#ffffff</label> 、<label class="color" id="color-f5">#f5f5f5</label> 以及深色背景 <label class="color" id="color-28">#282828</label> 交叉的方式区分:

![解决方案框架](http://baiduyun-guideline.bj.bcebos.com/portal%2Fpage%2Fsolution%2Fsolutionpage.png)

::: tip 注意

1. 禁止连续两个板块都是深色背景样式
2. 顶部 banner 板块下的首个内容板块禁止使用深色背景样式
3. 深色背景前后的板块样式允许使用 <label class="color" id="color-fff1">#ffffff</label> 和 <label class="color" id="color-f52">#f5f5f5</label> 两种背景颜色
4. 底部页脚之上必须要有一个行为引导板块，见 [行为引导板块](#行为引导板块)

:::




## 行为引导板块

每一个解决方案页面的页脚之前都需要有一个 **行为引导板块** ，如下所示:



![行为引导板块示意](http://baiduyun-guideline.bj.bcebos.com/portal%2Fpage%2Fsolution%2Fpageaction.png)

::: tip 注意

行为引导板块的背景必须有一张图片，但是要注意控制颜色保持和前后板块的区分对比度

:::








<!-- 样式 -->

<style>

#color-fff:before,#color-fff1:before{
  background : #fff;
  border : 1px solid #ebebeb;
}


#color-f5:before,#color-f52:before{
  background : #f5f5f5;
  border : 1px solid #ebebeb;
}

#color-28:before{
  background : #282828;
}

</style>