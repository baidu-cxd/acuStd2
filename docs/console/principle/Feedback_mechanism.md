---
title: 反馈机制
author: Ting
sidebarDepth: 0
---
# 反馈机制

用户使用产品就是一个和产品发生互动的过程，站在用户的角度去考虑，好的系统要满足如下的场景——操作前用户要了解自己需要做些什么以及相应的规则是什么？操作中要知道自己所处的当前位置以及相应的控件是否已触发？操作后要明确操作是否成功或者失败，以及失败的原因是什么？

## 如何实现

### 信息提示

填写规则、名词解释、是否为必填项、控件是否不可用（以及不可用原因）、温馨提示、常驻提示等都属于应该提前告知用户的范畴，用户了解了规则，操作时就能有效减少事后报错，从而打造更流畅的体验，详情请见章节[信息提示](/console/feedback/Message_prompt.html)。

![图片](http://baiduyun-guideline.bj.bcebos.com/console/principle/feedback_mechanism/01_2x.png)

### 过程反馈

用户的操作过程分两种，实时生效的要实时反馈，如输入框的输入态、按钮的点击态等；有些操作需要一定的运行时长，要告诉用户系统正在执行操作，避免用户产生“怎么了？”、“点击生效了吗？”、“系统在运行吗？”之类的迷惑，样式可以用进度条、加载动画等，详情请见章节[过程反馈](/console/feedback/Process_feedback.html)。

![图片](http://baiduyun-guideline.bj.bcebos.com/console/principle/feedback_mechanism/02_2x.png)

### 结果反馈

对于简单的操作，通过内容实时展示（如输入合乎命名规则）、页面跳转（如点击后进入详情页）、局部变化（如点击“添加”按钮，多出一条待填写的内容）就可以起到很好的提示的作用，因此不需要专门的形式上的反馈；但是对于没有发生如上变化的简单操作，还是需要成功型提示反馈，如复制成功后加浮窗提示，详情请见章节[结果反馈](/console/feedback/Result_feedback.html)。

![图片](http://baiduyun-guideline.bj.bcebos.com/console/principle/feedback_mechanism/03_2x.png)

用户的输入不合规则、选择项有问题等反馈，直接在控件右侧（多数在右侧，空间不够时在下面）显示即可，简言之就是用户通过简单调整就可以修正的问题使用页面内反馈；用户的输入没有问题，但是服务器错误等情况则需要用模态弹窗来告知用户，详情请见章节[结果反馈](/console/feedback/Result_feedback.html)。

![图片](http://baiduyun-guideline.bj.bcebos.com/console/principle/feedback_mechanism/04_2x.png)