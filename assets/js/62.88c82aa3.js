(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{443:function(t,e,r){"use strict";r.r(e);var i=r(0),s=Object(i.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),r("p",[t._v("抽屉是一个右侧滑出的非模态窗口，用于快速查看某个条目的一些重要指标或相关信息。")]),t._m(1),t._m(2),t._m(3),r("p",[t._v("对话框窗口一般分为两种类型：模态窗口与非模态窗口。\n所谓模态窗口，就是指除非关闭模态窗口，否则用户无法操作模态窗口之外的内容，一般会有半透明蒙版来区分前面的模态窗口和背景页面。常见的表现形式有删除弹窗、创建弹窗等，在百度云设计规范中，我们统称模态窗口为"),r("router-link",{attrs:{to:"/console/widget/Modal.html"}},[t._v("弹窗")])],1),t._m(4),r("p",[t._v("非模态窗口则不会有此限制，用户可以在非模态窗口背景页面间任意操作，也不会有半透明蒙版来区分二者。常见的表现形式有成功提示，失败提示等，详见"),r("router-link",{attrs:{to:"/console/widget/Toast.html"}},[t._v("浮窗")]),t._v("，抽屉属于浮窗之外的另一种非模态窗口，用户在操作抽屉时会有更复杂的交互逻辑出现。")],1),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),r("p",[t._v("抽屉浮层除了样式比较轻盈以外，可以方便用户在不同实例中快速切换查看，所以要注意呼起浮层的按钮／文字链接要在左边不被浮层挡住的区域（如上图标记1的查看监控按钮；如果做不到，建议考虑其他交互样式）")]),t._m(13),t._m(14),t._m(15),t._m(16)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"抽屉（drawer）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#抽屉（drawer）","aria-hidden":"true"}},[this._v("#")]),this._v(" 抽屉（Drawer）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("抽屉只能出现在屏幕右侧，宽度为400-600px，具体宽度视实际情况而定；")]),e("li",[this._v("一个页面内如果需要应用抽屉样式，只能有一个功能来应用（即每个页面可以选择不应用该样式，但要应用的话请确保使用在最需要的功能上）；")]),e("li",[this._v("抽屉支持的功能有： 浮层内纵向滚动（滚动时标题区域悬浮置顶），浮层内可以加诸如按钮、跳转链接等控件，但抽屉里不能有类似表单的编辑态；")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://baiduyun-guideline.bj.bcebos.com/console/widget/Drawer/01_2x.png",alt:"图片"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"模态vs非模态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模态vs非模态","aria-hidden":"true"}},[this._v("#")]),this._v(" 模态VS非模态")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://baiduyun-guideline.bj.bcebos.com/console/widget/Drawer/02_2x.png",alt:"图片"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"抽屉的交互逻辑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#抽屉的交互逻辑","aria-hidden":"true"}},[this._v("#")]),this._v(" 抽屉的交互逻辑")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"抽屉窗口里面的操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#抽屉窗口里面的操作","aria-hidden":"true"}},[this._v("#")]),this._v(" 抽屉窗口里面的操作")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("如果该操作在当前页面执行，抽屉是不收起的，操作完成后刷新数据即可，如展开按钮（下图中标记1），或者查看大图的弹窗（下图中标记2）；")]),e("li",[this._v("如果该操作需要跳转到新页面，在新页面里点击返回到原页面后，抽屉是处于收起状态的，如点击了超链接（下图中标记3）；")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://baiduyun-guideline.bj.bcebos.com/console/widget/Drawer/03_2x.png",alt:"图片"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"抽屉窗口外面的操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#抽屉窗口外面的操作","aria-hidden":"true"}},[this._v("#")]),this._v(" 抽屉窗口外面的操作")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("点击呼出另一个条目的抽屉的操作，抽屉不收起直接刷新抽屉窗口内的数据，如下图中标记1；")]),e("li",[this._v("点击其他操作，抽屉收起的同时，执行新操作，无论是当前页面执行还是需要跳转执行，如下图中标记2；")]),e("li",[this._v("点击空白区域，抽屉收起，如下图中标记3；")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://baiduyun-guideline.bj.bcebos.com/console/widget/Drawer/04_2x.png",alt:"图片"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[this._v("#")]),this._v(" 注意事项")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"示-例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示-例","aria-hidden":"true"}},[this._v("#")]),this._v(" 示 例")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://baiduyun-guideline.bj.bcebos.com/console/widget/Drawer/05_2x.png",alt:"图片"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"代码参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码参考","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码参考")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("抽屉")])])}],!1,null,null,null);e.default=s.exports}}]);