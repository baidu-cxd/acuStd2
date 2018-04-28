<!-- my-component.vue -->
<template>
  <div id="test" onclick="alert('为了证明这是个定制组件，我做了一个弹窗')">这是一个外部 html 组件，可以点一下试试</div>
</template>

<style>
#test{
 height: 100px;
 width: 100%;
 border: 1px solid #e6e6e6;
 line-height: 100px;
 text-align: center;
 margin: 40px 0;
 color:#999;
}
#test:hover{
 cursor: pointer;
 border: 1px solid #108cee;
 color:#108cee;
}
</style>
