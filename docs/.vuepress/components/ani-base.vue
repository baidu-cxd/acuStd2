<template>
    <div class="page-component-wrp ani-base">
        <div @click="runAni(j)" v-for="(i,j) in animate" :class="i + ' ' + 'wrp'">
          <div :class="i + ' ' + 'inner-component'" ref="and"></div>
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
         let b =  a.className.replace("animate-after","")
         if (b.indexOf('animate') == -1||b.indexOf('animate-after') !== -1){
             a.setAttribute("class", b + " " + "animate-before");
             let t1 = setTimeout(function(){a.setAttribute('class', b + ' ' + 'animate')},500,a);
             let t2 = setTimeout(function(){a.setAttribute('class', b + ' ' + 'animate-after')},1500,a);
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
  height 340px
  .wrp
    float left
    width 260px //动画展示工具宽度
    height 280px
    //background-color $innerBgcolor
    border 1px solid $borderColor
    margin 20px
    position relative
    &:hover
      cursor pointer
      border 1px solid darken($borderColor,10%)
    &:first-child
      margin-left 0
    .inner-component
      width 120px
      height 120px
      background-color $stdBlue
      margin 60px auto
    .animate-name
      width 100%
      position absolute
      bottom 0px
      height 80px
      line-height 80px
      text-align center
      font-size 14px
      color $textColorMain
</style>
