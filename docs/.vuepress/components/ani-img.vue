<template>
    <div @click="runAni()" class="page-component-wrp ani-img" :style="{width: width, height: width}">
        <img :src="img" class="animate">
    </div>
</template>

<script>
export default {
    props: ['img','width'],
    methods:{
      runAni(){
         alert()
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
      animation imganimate 4s steps(48) infinite ;
      transition-timing-function: cubic-bezier(0, 3.33, 1, 1.01);
@keyframes imganimate
  from {top: 0;}
  to {top: -4800px;}
</style>

