---
title: Md 文档编写说明（高级）
---

# Md 文档编写说明（高级）

[[toc]]

### 设置侧边导航栏深度
默认的侧边导航栏会获取到页面中的 H2 级别的内容，如果要禁止获取到 H2 内容，在 .md 文件头部添加：

    ---
    sidebarDepth: 0
    ---

如果想让页面侧边导航栏只有页面内的 H 标签组成：

    ---
    sidebar: auto
    ---


### 插入其它组件
如果预先开发了组件，可以引入到页面内，组件存放在 `.vuepress/components`

        <组件名/>

<demo-1/>

### .md 内创建组件

        <p id="PInMd" onclick="alert('bingo')">这个组件直接写在 .md 内，点一下试试</p>
    
        <style>
          #PInMd{ color :#999999;}
          #PInMd:hover{ color :#108cee; cursor:pointer;}
        </style>

<p id="PInMd" onclick="alert('为了证明这是个定制组件，我做了一个弹窗')">这个组件直接写在 .md 内，点一下试试</p>
    
<style>
    #PInMd{ 
        color :#999; 
        display:block; 
        width: 100%; 
        height:100px;
        line-height:100px;
        margin:40px 0;
        text-align:center;
        border:solid 1px #e6e6e6;
        }
    #PInMd:hover{ color :#108cee; cursor:pointer;}
</style>
