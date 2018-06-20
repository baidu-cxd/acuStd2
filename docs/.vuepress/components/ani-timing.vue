<template>
    <div class="page-component-wrp ani-timing" ref="timingwrp" @click="runAni()">
        <div :class="timing +' ' + 'timing-inner'">
          <div class="run-linear run"></div>
          <div :class="timing + ' ' +'run'"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['timing'],
    methods:{
      runAni(){
         let a = this.$refs.timingwrp
         let b = a.className.replace("animate-out","").replace("animate-in","")
         let c = a.className
         if (c.indexOf('animate') == -1 || c.indexOf('animate-in') !== -1){
             a.setAttribute("class", b + " " + "animate-out");
         }
         else if (c.indexOf('animate-out') !== -1){
             a.setAttribute("class", b + " " + "animate-in");
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

.content .page-component-wrp.ani-timing
  width 360px
  overflow hidden
  border 1px solid $borderColor
  margin 20px 0
  &:hover
    border 1px solid darken($borderColor,10%)
    cursor pointer
  .timing-inner
    height 80px
    overflow hidden
    position relative
    .run
      width 20px
      height 20px
      border-radius 100px 
      background-color $stdBlue
      position absolute
      left 20px
      top 30px
      &.run-linear
        opacity .3
    &.linear .run.linear
      opacity 1
    

  
</style>
