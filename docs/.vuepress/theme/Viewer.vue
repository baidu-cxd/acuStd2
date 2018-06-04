<!--
author: Dz (wangyihan05@baidu.com)
-->
<template>
<div class="viewer">
  <!-- 页面板块模块框的位置 -->
  <ModalSection :isShow.sync="isShow" :sectionData="sectionData"/>
  <div class="banner" v-if="kindOfpage.list && kindOfpage.list.length">
    <h1>百度云 Portal 页面板块</h1>
    <ul>
      <li v-for="i in kindOfpage.list" :id="i.className" @click="kindChose(i)"
      :class="kindOfpage.chose == i.className ? 'active' : ' '">
      {{i.name}}</li>
    </ul>
  </div>
  <div :class="gernerateClassCms(kindOfpage.chose,kindOfsection.chose)" v-if="frontmatterdata.cmsblocks && frontmatterdata.cmsblocks.length">
    <div class="select">
      <ul>
        <li v-for="i in kindOfsection.list" :id="i.className" @click="sectionKindChose(i)"
        :class="kindOfsection.chose == i.className ? 'active' : ' '">
        {{i.name}}</li>
      </ul>
    </div>
  <div class="list-wrp">
    <div :class="gernerateClass(item,'kind')" v-for="item in frontmatterdata.cmsblocks">
        <div :class="gernerateClass(item,'tag')">
          <img :src="item.img" alt="" @click="showModulePage(item)">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="stylus">
@import '../theme/styles/config.styl'

$imgwidth = 420px
$imgheight = 220px

.viewer
  margin 0 auto
  overflow hidden
  padding-bottom 100px
  width 100%
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
    background-image url(http://baiduyun-guideline.bj.bcebos.com/public%2Fportal_banner.jpg) 
    background-size 1920px
    h1
      font-size 36px
      line-height 36px
      margin 50px 0 32px
      color $textColorDark
      text-align center;
    ul
      overflow hidden
      width 360px
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
      float left
      margin 0
      .imgtag
        transition 0.2s all ease-in-out
        position relative
        overflow hidden
        width  $imgwidth
        height $imgheight
        background-color #fff
        &.dark
          background-color #282828
        display none
        margin 10px
        &:hover
          transform scale(1.02)
          box-shadow 0 10px 10px 0 #00000010
          z-index 99
          cursor pointer
      img
        display block
        width  1.2 * ($imgwidth)
        position relative
        left -0.1 * ($imgwidth)
        transition 0.2s all ease-in-out
        position absolute
        top 50%
        transform translateY(-50%)

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
  .cmsblocks.col-4
    .imgtag.col-4
      display block
  .cmsblocks.col-2
    .imgtag.col-2
      display block
  .cmsblocks.icon
    .imgtag.icon
      display block
  .cmsblocks.dark
    .imgtag.dark
      display block
  .cmsblocks.feature
    .imgtag.feature
      display block

  .cmsblocks.img
    .imgtag.img
      display block

  .cmsblocks.list
    .imgtag.list
      display block

  .cmsblocks.tab
    .imgtag.tab
      display block

  .cmsblocks.purpose
    .imgtag.purpose
      display block


</style>

<script>
import ModalSection from './ModalSection.vue'
// import _ from 'underscore';
let _ = require('underscore');

export default {
  components:{ModalSection},
  data(){
   return {
    kindOfpage: {
      chose: "product solution",
      list:[{"name":"全部","className":"product solution"},{"name":"产品页","className":"product"},{"name":"解决方案","className":"solution"}]} ,
    kindOfsection:{
      chose: "all",
      list:[
        {"name":"全部","className":"all"},
        {"name":"卡片","className":"card"},
        {"name":"特性罗列","className":"feature"},
        {"name":"列表","className":"list"},
        {"name":"切换","className":"tab"},
        {"name":"二项","className":"col-2"},
        {"name":"三项","className":"col-3"},
        {"name":"四项","className":"col-4"},
        {"name":"图标","className":"icon"},
        {"name":"图片","className":"img"},
        {"name":"深色","className":"dark"},
        {"name":"专用组件","className":"purpose"},
      ]},
    isShow: "hidden",
    sectionData: {
      title: "页面名称",
      img : "none",
      text : "介绍",
      type:"img",
      component:"none",
    },
    }
  },
  computed: {
    frontmatterdata() {
      return this.$page.frontmatter
    }
  },
  mounted () {
    let hash = this.$route.hash;
    if (hash) {
      let item = _.where(this.frontmatterdata.cmsblocks, {name: decodeURI(hash.substr(1))});
      if (item.length) {
        this.showModulePage(item[0]);
      }
    }
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
    showModulePage : function(i) {
      this.$set(this.sectionData,"title",i.name);
      this.$set(this.sectionData,"img",i.img);
      this.$set(this.sectionData,"text",i.text);
      this.$set(this.sectionData,"type",i.type);
      this.$set(this.sectionData,"component",i.component);
      this.isShow ="show";
    },
  }
}
</script>