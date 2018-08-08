<template>
    <div @click="runAni()" class="page-component-wrp ani-img" 
    :style="{width: width, height: width}">
        <img :src="img"
        :class="[isAnimate ? 'animate':'non-animate']">
    </div>
</template>

<script>
export default {
    props: ['img','width'],
    data() {
      return {
        isAnimate: false
      }
    },
    methods:{
      runAni(){
         this.isAnimate = !this.isAnimate
         console.log(this.isAnimate)
      },
    }
}
</script>

<style lang="stylus">
.content .page-component-wrp.ani-img
  overflow hidden
  img 
    position relative
    top 0
    margin 0
    &.animate
      animation imganimate 1s steps(24) forwards ;
@keyframes imganimate
  from {top: 0;}
  to {top: -4800px;}
</style>

