<template>
  <div class="modal-section" :class="isShow">
    <div class="modal-bg"></div>
    <div class="modal-std-windows">
      <div class="modal-header">
        <p class="title">{{sectionData.title}}</p>
        <span class="std-button" @click="closeModal()">关闭</span>
      </div>
      <div class="content-wrp">
        <div class="textwrp"><p class="inner">{{sectionData.text}}</p></div>
        <div class="img-wrp" :style="isImg">
          <img :src="sectionData.img" alt="">
        </div>
        <div class="component-wrp"  v-if="sectionData.type == 'component'"  :style="isComponent">
          <component :is="sectionData.component"/>
        </div>        
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
@import '../theme/styles/config.styl'

.modal-section
  .modal-std-windows
    .img-wrp
      border-top 1px solid #ededed
      width 1920px
      position absolute
      left 50%
      transform translateX(-50%)
      float left
      background-color #f5f5f5
      img 
        width 100%
    .component-wrp
      width 100%
      margin 0 0 200px 0
     

.modal-section
  .modal-std-windows
    .textwrp
      max-width 1180px
      margin 40px auto 0
      border-bottom 0px solid $borderColor
      min-height 52px





.modal-section
  z-index 101
  width 100%
  height 100%
  position fixed
  left 0
  top 0
  &.hidden
    top 100%
    transition .1s top linear .3s //退出 .3-.4s 完成
  &.show
    top 0
    .modal-bg
      transition .1s opacity linear
      opacity .4
    .modal-std-windows
      transition .2s all $easeOutStd //进入 .2s完成缩放
      transform scale(1)
      opacity 1
  .modal-bg
    background $darkBlack
    content ""
    display block 
    width 100%
    height 100%
    position absolute
    z-index -1
    left 0
    opacity 0
    transition .05s opacity $easeOutStd  .05s //缩放完成后开始消失
  .modal-std-windows
    overflow hidden
    background-color #fff
    box-shadow 0 2px 10px 0 #00000030
    position absolute
    top 10px
    left 10px
    bottom 10px
    right 10px
    transition .2s all $easeOutStd  //退出 .2s完成缩放
    transform translateY(100px) scale(.96)
    opacity 0
    .content-wrp
      margin-top 80px
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      overflow-x hidden 
      overflow-y scroll
  .modal-header
    width 100%
    height 80px
    background-color $darkBlack
    .std-button
      width 80px
      background-color $stdBlue
      display block
      text-align center
      line-height 32px
      color #fff
      position absolute
      top   20px
      right 20px
      transition .3s all linear
      &:hover
        transition .3s all linear
        cursor pointer
        background-color darken($stdBlue,20%)


.modal-section
  p
    color #666
    margin 0
    padding 0
    font-size 14px
    line-height 26px
    &.title
      color #ffffff
      opacity .8
      font-size 16px
      line-height 80px
      font-weight 500
      text-align center
    &.inner
      margin-bottom 20px

 @media (max-width: $MQMobile)
   .modal-section
     .modal-header
       height 80px
       p
         text-align left 
         margin-left 20px
     .modal-std-windows
       .textwrp
         width 90%
       .img-wrp
         width 400px

</style>
<script>
  export default {
    props: {
      isShow:{
        type: String,
        default:function(){
          return 'show'  // show:展开 ; hidden:隐藏
        }
      }, 
      sectionData:{
        type: Object,
        default: function () {
          return{
            title:'标题',//板块的标题
            text:'弹窗文本', //板块介绍文本
            img:'none', //配图
            type:'img', //img:显示图片 component：显示自定义组件
            component:'none',//自定义组件名称
          }
        },    
      }
    },
    data(){
      return {
        self:{
          
        }
      }
    },
    computed:{
      isImg(){
        if (this.sectionData.type == "img"){
          return "display:block"
        }
        else{
          return "display:none;"
        }
      },
      isComponent(){
        if (this.sectionData.type == "component"){
          return "display:block"
        }
        else{
          return "display:none;"
        }
      }
    },
    methods:{
      closeModal(){
         this.$emit('update:isShow','hidden')
      },
    }
  }

</script>
