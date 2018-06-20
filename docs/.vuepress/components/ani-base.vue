<template>
    <div class="page-component-wrp ani-base">
        <div @click="runAni(j)" v-for="(i,j) in animate" :class="i + ' ' + 'wrp'">
          <div :class="i + ' ' + 'inner-component'" ref="and">
            CXD
            <div v-if="i == 'outline'" class="inner-outline one"></div>
            <div v-if="i == 'outline'" class="inner-outline two"></div>
          </div>
          <div class="animate-name">{{i}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['animate'],
    methods:{
      runAni(j){
         let a = this.$refs.and[j]
         let b = a.className.replace("animate-out","").replace("animate-in","")
         let c = a.className
         if (c.indexOf('animate') == -1 || c.indexOf('animate-in') !== -1){
             a.setAttribute("class", b + " " + "animate-out");
             //let t1 = setTimeout(function(){a.setAttribute('class', b + ' ' + 'animate')},500,a);
         }
         else if (c.indexOf('animate-out') !== -1){
             a.setAttribute("class", b + " " + "animate-in");
             //let t1 = setTimeout(function(){a.setAttribute('class', b + ' ' + 'animate')},500,a);
         }
         else{         
         }
      },
    }
}
</script>

<style lang="stylus">
@import '../theme/styles/config.styl' 
@import '../theme/styles/animate.styl' 

.content .page-component-wrp.ani-base
  width 100%
  overflow-y hidden
  margin 20px 0
  .wrp
    float left
    width 300px //动画展示工具宽度
    height 280px
    overflow hidden
    //background-color $innerBgcolor
    border 1px solid $borderColor
    margin 0 20px 20px 0
    position relative
    &:hover
      cursor pointer
      border 1px solid darken($borderColor,10%)
    &:first-child
      margin-left 0
    .inner-component
      &.animate-out
        .inner-outline.one,.inner-outline.two
          &:before
            width 0px
            transition all .3s $easeInOutQuint
          &:after
            height 0px
            transition all .3s $easeInOutQuint
      &.outline
        color $stdBlue
        background-color transparent
        width 160px
        height 160px
        margin-top 40px
        line-height 160px
      .inner-outline
        width 130px
        height 38px
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        z-index 1
        &:before,&:after
          transition all .3s $easeInOutStd
          content ""
          display block
          width 1px
          height 1px
          position absolute
          background-color $stdBlue
        &.one:before
          width 100%
          top 0
          left 0
        &.one:after
          height 100%
          bottom 0
          left 0
        &.two:before
          width 100%
          bottom  0
          right 0
        &.two:after
          height 100%
          top 0
          right 0          
      line-height 90px
      text-align center
      color #fff
      width 90px
      height 90px
      background-color $stdBlue
      margin 80px auto
      position relative
      z-index 1
      &.ripples
        border-radius 100px
        z-index 10
        &:before
          width 100%
          height 100%
          content ""
          display block
          transform scale(1)
          background-color $stdBlue
          border-radius 1000px
          opacity .5
          z-index -1
          position absolute
          top 0
          left 0
        &:after
          width 100%
          height 100%
          content ""
          display block
          transform scale(1)
          background-color $stdBlue
          border-radius 1000px
          opacity .5
          z-index -2
          position absolute
          top 0
          left 0
    .animate-name
      width 100%
      position absolute
      bottom 0px
      height 90px
      line-height 90px
      text-align center
      font-size 14px
      color $textColorMain
</style>
