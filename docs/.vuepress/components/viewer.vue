<template>
<div class="viewer">
<div :class="gernerateModuleClass()">
  <div class="moheader">
    <div class="system" >
      <p>组件浏览器</p>
      <span v-on:click="closeModulePage()">退出</span>
    </div>
    <h1>组件名：{{section.name}}</h1>
    <p>{{section.text}}</p>
    <p class="tips">{{section.tips}}</p>
  </div>
  <img :src="section.src" alt="">
</div>
  <div class="banner" v-if="kindOfpage.list && kindOfpage.list.length">
    <h1>百度云 Portal 页面板块</h1>
    <ul>
      <li v-for="i in kindOfpage.list" :id="i.className" v-on:click="kindChose(i)" 
      :class="kindOfpage.chose == i.className ? 'active' : ' '">
      {{i.name}}</li>
    </ul>
  </div>
  <div :class="gernerateClassCms(kindOfpage.chose,kindOfsection.chose)" v-if="frontmatterdata.cmsblocks && frontmatterdata.cmsblocks.length">
    <div class="select">
      <ul>
        <li v-for="i in kindOfsection.list" :id="i.className" v-on:click="sectionKindChose(i)" 
        :class="kindOfsection.chose == i.className ? 'active' : ' '">
        {{i.name}}</li>
      </ul>
    </div>
    <div :class="gernerateClass(item,'kind')" v-for="item in frontmatterdata.cmsblocks">
      <div :class="gernerateClass(item,'tag')">
        <img :src="item.src" alt="" v-on:click="showModulePage(item)"> 
      </div>
    </div>
  </div>
</div>
</template>

<style lang="stylus">
@import '../theme/styles/config.styl'

$imgwidth = 420px

.viewer
  margin 0 auto 
  overflow hidden
  padding-bottom 100px
  width 100%
  height 100%
  ul
    li
      list-style none 
      box-sizing border-box   
  .banner
    margin-top 60px;
    width 100%
    height 200px
    padding 0
    background-color #353638
    padding 20px 0
    overflow hidden
    background-image url(../../portal/publicresource/sectionbg.jpg)
    h1
      font-size 36px
      line-height 36px
      margin 50px 0 32px
      color #fff
      text-align center;
    ul
      overflow hidden
      width 240px
      margin 20px auto 
      li
        &:first-child 
           margin-left 0px 
        margin-left -1px 
        float left 
        width 120px
        text-align center
        padding 0px
        line-height 34px
        font-size 14px
        border 1px solid #ffffff60
        color #ffffffee
        position relative
        z-index 5
        font-size 14px
        &:hover
          cursor pointer
        &.active
          color #333
          font-weight 400
          background-color #ffffff
          border 1px solid transparent
          z-index 10 
  .cmsblocks
    width $imgwidth * 3 + 60px
    margin 40px auto 40px
    .select
      margin 40px 10px 30px
      width 100%
      min-height 40px
      overflow hidden
      ul
        padding 0
        display block
        overflow hidden
        margin 0 0 0 0
        li 
          margin 0
          display block 
          width 88px
          font-size 14px
          background-color transparent
          border 1px solid $borderColor
          float left
          margin-left -1px
          line-height 34px
          text-align center
          color #999
          transition .1s all ease-out
          &:first-child
            margin-left 0
          &:hover
            cursor pointer
            color #333
          &.active
            color #fff
            background-color #108cee
            border 1px solid transparent
    .imgcard
      display none
      height auto
      float left
      margin 0 10px 
      .imgtag
        transition 0.2s all ease-in-out
        position relative
        overflow hidden 
        width  $imgwidth
        display none
        margin 10px 0px 
        &:hover
          transform scale(1.02)
          box-shadow 0 10px 10px 0 #00000010
          z-index 100
          cursor pointer
      img
        display block
        width  1.2 * ($imgwidth)
        position relative
        left -0.1 * ($imgwidth)
        transition 0.2s all ease-in-out
        &:hover
          transform scale(1.05)

//筛选控制器

.viewer 
  .cmsblocks.product
    .imgcard.product
      display block
  .cmsblocks.solution
    .imgcard.solution
      display block
  .cmsblocks.all
    .imgtag
      display block
  .cmsblocks.card
    .imgtag.card
      display block
  .cmsblocks.col-3
    .imgtag.col-3
      display block

//模态框

.module 
  position fixed;
  width 100%
  height 100%
  background-color #f5f5f5
  z-index 9999
  display block 
  overflow-y scroll
  overflow-x hidden
  top 100%
  transition .5s top ease-out
  &.show
    display block
    transition .5s top ease-in-out
    top 60px
  .moheader 
    width 100%
    min-height 150px
    padding-bottom 20px
    background-color  #f5f5f5
    border-bottom 1px solid $borderColor
    h1 
      font-size 18px
      font-weight 400
      color #333333
      line-height 36px
      margin 20px 0 0 120px
      width 800px
      display block
    p
      font-size 14px
      font-weight 400
      color #999999
      line-height 26px
      margin 0px 0 0 120px
      width 800px
      display block
      &.tips 
        color #666
    .system
      width 100%
      height 40px
      background-color #333333
      border-bottom 1px solid #222222
      p 
        color #fff
        display block 
        padding 0
        margin 0 20px
        line-height 40px
        font-size 12px
        float left
      span 
        font-size 12px
        color #fff
        float right
        margin 0 20px
        line-height 40px
        &:hover 
          cursor pointer
  img 
    width 1920px
    position absolute
    left 50%
    transform translateX(-50%)
    display block
</style>

<script>
export default {
  data(){
   return {
    kindOfpage: {
      chose: "product",
      list:[{"name":"产品页","className":"product"},{"name":"解决方案","className":"solution"}]} ,
    kindOfsection:{
      chose: "all",
      list:[
        {"name":"全部","className":"all"},
        {"name":"卡片","className":"card"},
        {"name":"三项","className":"col-3"},
        {"name":"相关产品","className":"about"},
      ]},
    section: {
      name: "页面名称",
      src : "none",
      text : "none",
      show : "none",
      tips : "一些注意事项",
    },
    }
  },
  computed: {
    frontmatterdata() {
      return this.$page.frontmatter
    }
  },
  mounted () {
  },
  methods: {
    gernerateClass :function(item,j){
      if (j === "kind"){
        return "imgcard " + item.kind
      }
      if (j === "tag"){
        return "imgtag " + item.tag
      }
      else{
        return "none " 
      }
    } ,
    kindChose : function(i){
      this.$set(this.kindOfpage,"chose",i.className)
    },
    sectionKindChose : function(i){
      this.$set(this.kindOfsection,"chose",i.className)
    },
    gernerateClassCms : function(i,j){
      return "cmsblocks " + i + " " + j
    },
    gernerateModuleClass(){
      return "module" + " " + this.section.show
    },
    showModulePage : function(i) {
      this.$set(this.section,"show","show");
      this.$set(this.section,"name",i.name);
      this.$set(this.section,"src",i.src);
      this.$set(this.section,"text",i.text);
      this.$set(this.container,"scroll","overflow:hidden;");
    },
    closeModulePage : function() {
      this.$set(this.section,"show","none");
      this.$set(this.container,"scroll","height:auto");
    },
  }
}
</script>