---
title: Md 文档迁移流程
sidebarDepth: 0
---

# Md 文档迁移流程

为了方便 UE 同学从原系统中迁移`.md`文档，把流程进行了梳理，请按照以下流程进行：

## Step1：在 Agroup 上创建新的 Makedown 文件

进入 Agroup 系统，在目录 `群组文件 > 百度云设计规范 > 百度云 md 规范文档 v2.0 > console  ` 下的合适位置创建一个新的文档，<mark>建议使用英文命名</mark>

## Step2：在Makedown文档内添加头信息

打开刚才创建的文档，在文档的第一行添加以下内容：

    ---
    title: 本篇文档的名称
    sidebarDepth: 0
    ---

例如，如果是 <mark>按钮（Button)</mark> 的文档,就应该写为：

    ---
    title: 按钮（Button)
    sidebarDepth: 0
    ---

## Step3：把原文档的内容全部复制到新文档中

`Ctrl C` + `Ctrl V`

## Step4：替换页面内索引语法

如果文档有索引部分，就像下面这样的格式：

        响应用户操作，触发相应页面交互和功能，按钮包括如下几种：

        - [普通按钮](#普通按钮)
        - [强调按钮](#强调按钮)
        - [大按钮](#大按钮)
        - [图标按钮](#图标按钮)

<mark>删掉它，然后在原位置添加 `[[toc]]`</mark>

## Step5：替换强调语法

找到原文档中的 `<del>` `</del>` 替换成 `<mark>` `</mark>`

## Step6：替换页间跳转链接

找到原文档中的跳转链接，如：

    [按钮](../docs/控件/按钮（button）.html)

修改成以下形式：

    [按钮](/console/components/button.html)

同理，如果要创建一个跳转到 portal 规范中设计原则文档的链接：

    [设计原则](/portal/principle.html)

<mark>页内跳转的语法和以前一样，如`[Step6：替换页间跳转链接](#Step6：替换页间跳转链接)`</mark>


[Step6：替换页间跳转链接](#Step6：替换页间跳转链接)