<template>
  <div class="modal" :class="modal.isshow">
    <div class="modal-bg" :style="modalbg"></div>
    <div class="modal-std-windows">
      <p class="title">{{modal.title}}</p>
      <p class="inner">{{modal.text}}</p>
      <span class="std-button" v-on:click="closeModal()">确认</span>
    </div>
  </div>
</template>

<style lang="stylus">
@import '../theme/styles/config.styl'

.modal
  z-index 101
  width 100%
  height 100%
  position fixed
  display none
  top 0
  left 0
  &.show
    display block
.modal-bg
    opacity .8 
    background $darkBlack
    content ""
    display block 
    width 100%
    height 100%
    position absolute
    z-index -1
    top 0
    left 0
  .modal-std-windows
    padding 20px
    width 360px
    background-color #fff
    margin 100px auto 0
    box-shadow 0 2px 10px 0 #00000030
    position relative

.modal
  p
    color $textColorMain
    margin 0
    padding 0
    font-size 14px
    line-height 26px
    &.title
      color $textColorDark
      font-size 16px
      line-height 16px
      font-weight 600
      margin-bottom 20px
    &.inner
      margin-bottom 20px + 32px +20px
  .std-button
    width 80px
    background-color $stdBlue
    display block
    text-align center
    line-height 32px
    color #fff
    position absolute
    bottom  20px
    right 20px
    ransition .3s all linear
    &:hover
      transition .3s all linear
      cursor pointer
      background-color lighten($stdBlue,10%)




</style>

<script>

  export default {
    data(){
      return {
        modal:{
          isshow:'show',
          bg:'.8',
          title:'From:百度云设计规范',
          text:'弹窗文本',
        }
      }
    },
    computed:{
      modalbg: function(){
        return "opacity:" + this.modal.bg
      }
    },
    methods:{
      closeModal: function(){
        this.$set(this.modal,"isshow","none");
      },
      showModal: function(){
        this.$set(this.modal,"isshow","show");
      }
    }
  }

</script>
