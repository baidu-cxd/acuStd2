---
title: 文字
author: wangyihan05@baidu.com
sidebarDepth: 0
---

# 文字

为确保百度云 Portal 端各页面有统一的视觉效果，对文字的使用规范进行了规定，力求在各个操作系统下都有最佳的文字显示效果。

[[toc]]

## 设计用字体

我们一般使用 `PingFang SC` 字体完成设计稿

## 详细字体规范


页面的实际实现效果根据不同的平台和用户系统中的字体情况进行匹配：


<table>
    <tr>
        <th>平台</th> 
        <th>系统</th> 
        <th>中文字体规范</th> 
        <th>西文字体规范</th> 
   </tr>
    <tr>
        <td rowspan="2">pc</td>    
        <td >Windows</td>  
        <td >Microsoft Yahei</td> 
        <td >Arial</td> 
    </tr>
    <tr>
        <td >Mac Os</td> 
        <td >PingFang SC</td> 
        <td >SF Pro SC/Helvetica</td>  
    </tr>
       <tr>
        <td rowspan="2">移动端</td>    
        <td >Android</td>  
        <td >Noto Sans CJK</td> 
        <td >Roboto</td> 
    </tr>
    <tr>
        <td >iOS</td> 
        <td >PingFang SC</td> 
        <td >SF Pro SC/Helvetica</td>  
    </tr>
</table>



## 前端实现



``` css
font-family: -apple-system, BlinkMacSystemFont,"SF Pro SC","SF Pro Text","Helvetica Neue",  Helvetica, "PingFang SC", Roboto, 'Arial','microsoft yahei ui',"Microsoft YaHei",SimSun, sans-serif;
/*修改浏览器渲染字体效果*/ 
-moz-osx-font-smoothing: grayscale;  
-webkit-font-smoothing: antialiased; 
``` 

## 文字大小规范

| 类型    | 字体大小  | 对应行高 |使用条件 |
| -------------|------------ | -----|-----|
| Special      | 42 + 6n(px)   | -      |拓展规则 |
| H1           | 42px       | 64px |首页/产品和解决方案页面的标题 |
| H2           | 30px       | 48px |页面中板块的标题 |
| H3           | 18px       | 32px |板块中模块的标题 |
| H4           | 16px       | 30px |模块内部的标题 |
| p            | 14px       | 26px |正文 |
| p.small      | 12px       | 24px |备注说明文字 |

**备选文字大小：**

>**H1.small** : 36px; 行高：56px<br>
**H2.small** : 24px; 行高：40px<br>
用于上述规范无法涵盖的特殊情况，<mark>一般不建议使用</mark>

## 列表

列表分为有序列表和无序列表

![列表](http://baiduyun-guideline.bj.bcebos.com/portal%2Fstyle%2Ffont%2Ful)