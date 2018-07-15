<template>
  <transition
    :name="transitionName">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'TransitionContent',
  props: {
    aniType: {
      type: String,
        default:function(){
          return 'left'  
        }
    }
  },
  computed:{
    transitionName () {
      if (this.aniType === 'left') {
        return 'slide-left'
      } else if (this.aniType === 'right') {
        return 'slide-right'
      } else {
        return 'slide-no'
      }
    }
  }
  /* beforeRouteUpdate (to, from, next) {
    console.log('test')
  } */
}
</script>

<style lang="stylus">
@import './styles/config.styl'
//原地
.slide-no-enter
  opacity 0
  transform translateY(0px) 
.slide-no-enter-to
  opacity 1
  transform translateY(0)
.slide-no-leave
  opacity 1
  transform translateY(0)
.slide-no-leave-to
  opacity 0
  transform translateY(0px) 
.slide-no-enter-active
  transition .4s all $easeOutSine
 .slide-no-leave-active
  transition .4s all $easeInSine 
//从上到下
.slide-up-enter
  opacity 0
  transform translateY(-50px) 
.slide-up-enter-to
  opacity 1
  transform translateY(0)
.slide-up-leave
  opacity 1
  transform translateY(0)
.slide-up-leave-to
  opacity 0
  transform translateY(50px) 
.slide-up-enter-active
  transition .6s all $easeOutSine
 .slide-up-leave-active
  transition .6s all $easeInSine 
//从左到右
.slide-left-enter
  opacity 0
  transform translateX(-40px)
.slide-left-enter-to
  opacity 1
  transform translateX(0)
.slide-left-leave
  opacity 1
  transform translateX(0)
.slide-left-leave-to
  opacity 0
  transform translateX(0)
.slide-left-enter-active
  transition .6s all ease-out
.slide-left-leave-active
  transition .2s all ease-in
//从右到左
.slide-right-enter
  opacity 0
  transform translateX(40px)
.slide-right-enter-to
  opacity 1
  transform translateX(0)
.slide-right-leave
  opacity 1
  transform translateX(0)
.slide-right-leave-to
  opacity 0
  transform translateX(0)
.slide-right-enter-active
  transition .6s all ease-out
.slide-right-leave-active
  transition .2s all ease-in
</style>
