<template>
  <div class="modal-section" :class="modal.isshow">
    <div class="modal-bg"></div>
    <div class="modal-std-windows">
      <div class="modal-header">
        <p class="title">{{modal.title}}</p>
        <span class="std-button" @click="closeModal()">关闭</span>
      </div>
      <div class="textwrp"><p class="inner">{{modal.text}}</p></div>
      <div class="img-wrp" :style="isImg">
        <img :src="modal.img" alt="">
      </div>
      <div class="component-wrp"  v-if="modal.type == 'component'"  :style="isComponent">
        <component :is="modal.component"/>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
@import '../theme/styles/config.styl'

.modal-section
  .modal-std-windows
    .img-wrp
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
      margin 0
     

.modal-section
  .modal-std-windows
    .textwrp
      max-width 1180px
      margin 20px auto 0
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
      transition .2s all $fastSlow //进入 .2s完成缩放
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
    transition .05s opacity $fastSlow  .05s //缩放完成后开始消失
  .modal-std-windows
    overflow-x hidden
    overflow-y scroll
    background-color #fff
    box-shadow 0 2px 10px 0 #00000030
    position absolute
    top 10px
    left 10px
    bottom 10px
    right 10px
    transition .2s all $fastSlow  //退出 .2s完成缩放
    transform translateY(100px) scale(.96)
    opacity 0
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
    color $textColorMain
    margin 0
    padding 0
    font-size 14px
    line-height 26px
    &.title
      color #ffffff
      opacity .8
      font-size 16px
      line-height 80px
      font-weight 600
      text-align center
    &.inner
      margin-bottom 20px


</style>
<script>
  export default {
    props: {
      modal:{
        type: Object,
        default: function () {
          return{
            isshow: 'hidden',
            title:'From:百度云设计规范',
            text:'弹窗文本', 
            img:'none', 
            type:'img', 
            component:'none',
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
        if (this.modal.type == "img"){
          return "display:block"
        }
        else{
          return "display:none;"
        }
      },
      isComponent(){
        if (this.modal.type == "component"){
          return "display:block"
        }
        else{
          return "display:none;"
        }
      }
    },
    methods:{
      closeModal(){
        this.$set(this.modal,"isshow","hidden");
      },
    }
  }

</script>
