<template>
    <!--只有一个动画-->
    <div v-if="type == 'solo'" class="page-component-wrp ani-base">
        <div @click="runAni(j)" v-for="(i,j) in animate" :class="i + ' ' + 'wrp'">
          <div :class="i + ' ' + 'inner-component'" ref="and">
            CXD
            <div v-if="i == 'outline'" class="inner-outline one"></div>
            <div v-if="i == 'outline'" class="inner-outline two"></div>
          </div>
          <div class="animate-name">{{i}}</div>
        </div>
    </div>
    <!--一组动画-->
    <div v-else-if="type == 'list' || type == 'list-2'" :class="['page-component-wrp ani-base', type]">
      <div @click="runAni(j)" v-for="(i,j) in animate" :class="animate + ' ' + 'wrp'" ref="and"> 
        <div :class="[i,'inner-component','list-1']"></div>
        <div :class="[i,'inner-component','list-2']"></div>
        <div :class="[i,'inner-component','list-3']"></div>
        <div :class="[i,'inner-component','list-4']"></div>
        <div :class="[i,'inner-component','list-5']" v-if="type == 'list-2'"></div>
        <div :class="[i,'inner-component','list-6']" v-if="type == 'list-2'"></div>
        <div :class="[i,'inner-component','list-7']" v-if="type == 'list-2'"></div>
        <div :class="[i,'inner-component','list-8']" v-if="type == 'list-2'"></div>
        <div class="animate-name">{{i}}</div>
      </div>
    </div>
</template>

<script>
export default {
      props: {
        animate: {
          default: null
        },
        type: {
          default: 'solo'
        }
    },
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
    transition all .6s $easeOutStd
    &:hover
      cursor pointer
      border 1px solid darken($borderColor,10%)
      background-color #f7f7f7
      transition all .6s $easeOutStd
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
        border solid 1px $borderColor
        box-sizing border-box
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
      color $textStd 

.content .page-component-wrp.ani-base.list,.page-component-wrp.ani-base.list-2
  .wrp
    width 100%
    box-sizing border-box
    .inner-component
      width 18.5%
      height 100px
      float  left 
      margin-left 5%
  .wrp.animate-in
    .delay-200ms.list-1
      animation-delay 200ms
    .delay-200ms.list-2
      animation-delay 400ms 
    .delay-200ms.list-3
      animation-delay 600ms 
    .delay-200ms.list-4
      animation-delay 800ms 
    .delay-50ms.list-1
      animation-delay 50ms
    .delay-50ms.list-2
      animation-delay 100ms 
    .delay-50ms.list-3
      animation-delay 150ms 
    .delay-50ms.list-4
      animation-delay 200ms 
    .delay-50ms.list-5
      animation-delay 100ms
    .delay-50ms.list-6
      animation-delay 150ms 
    .delay-50ms.list-7
      animation-delay 200ms 
    .delay-50ms.list-8
      animation-delay 250ms 
  .wrp.animate-out
    .delay-200ms.list-1
      animation-delay 800ms
    .delay-200ms.list-2
      animation-delay 600ms 
    .delay-200ms.list-3
      animation-delay 400ms 
    .delay-200ms.list-4
      animation-delay 200ms 
    .delay-50ms.list-1
      animation-delay 250ms
    .delay-50ms.list-2
      animation-delay 200ms 
    .delay-50ms.list-3
      animation-delay 150ms 
    .delay-50ms.list-4
      animation-delay 100ms
    .delay-50ms.list-5
      animation-delay 200ms
    .delay-50ms.list-6
      animation-delay 150ms 
    .delay-50ms.list-7
      animation-delay 100ms 
    .delay-50ms.list-8
      animation-delay 50ms 
.content .page-component-wrp.ani-base.list-2
  .wrp
    height 360px
    padding 40px 0 20px 0
    .inner-component
      height 60px
      margin 40px 0 0 0 
      margin-left 5%
    
</style>


