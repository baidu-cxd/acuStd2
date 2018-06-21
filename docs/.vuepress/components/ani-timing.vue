<template>
    <div class="page-component-wrp ani-timing" ref="timingwrp" @click="runAni()">
        <div :class="timing +' ' + 'timing-inner'">
          <div class="run-linear run"></div>
          <div :class="timing + ' ' +'run'"></div>
          <div class="img-wrp">
            <img :src="'http://baiduyun-guideline.bj.bcebos.com/animate/'+ timing +'.jpg'" alt="">
          </div>
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

@media (min-width: $MQMobile)
  .content .page-component-wrp.ani-timing
    .timing-inner
      .img-wrp
        width 3em
        height 3em
        top -1px
        position absolute
        right -5em
        border 1px solid darken($borderColor,10%)
        opacity 0
        transition all .3s $easeInStd
        img
          width 100%
          height 100%
    &:hover
      .timing-inner
        .img-wrp
          opacity 1
          right -3.5em
          transition all .3s $easeOutStd
    
.content .page-component-wrp.ani-timing
  .timing-inner
    .img-wrp
     display none
     img 
       position absolute
       margin 0
       

.content .page-component-wrp.ani-timing
  font-size 25px
  width 18em
  border 1px solid $borderColor
  margin 20px 0
  transition all .6s $easeOutStd
  &:hover
    border 1px solid darken($borderColor,10%)
    transition all .6s $easeOutStd
    cursor pointer
  .timing-inner
    height 3em
    position relative
    .run
      width 1em
      height 1em
      border-radius 100px 
      background-color $stdBlue
      position absolute
      left 1em
      bottom 1em
      &.run-linear
        opacity .3
    &.linear .run.linear
      opacity 1

@media (max-width: $MQMobile)
  .content .page-component-wrp.ani-timing
    font-size 16px
    

  
</style>
