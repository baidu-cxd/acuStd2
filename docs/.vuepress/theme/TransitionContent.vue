<template>
  <transition
    :name="transitionName"
    mode="out-in">
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
          return 'horizontal'  
        }
    }
  },
  computed:{
    transitionName () {
      if (this.aniType === 'horizontal') {
        return 'slide-left'
      } else if (this.aniType === 'verticle') {
        return 'slide-up'
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
  transition .6s all $easeOutSine .2s
 .slide-up-leave-active
  transition .6s all $easeInSine 
//从左到右
.slide-left-enter
  opacity 0
  transform translateX(-10%)
.slide-left-enter-to
  opacity 1
  transform translateX(0)
.slide-left-leave
  opacity 1
  transform translateX(0)
.slide-left-leave-to
  opacity 0
  transform translateX(10%)
.slide-left-enter-active
  transition 1s all ease
.slide-left-leave-active
  transition 1s all ease
//从右到左
.slide-right-enter
  opacity 0
  transform translateX(10%)
.slide-right-enter-to
  opacity 1
  transform translateX(0)
.slide-right-leave
  opacity 1
  transform translateX(0)
.slide-right-leave-to
  opacity 0
  transform translateX(-10%)
.slide-right-enter-active
  transition 1s all ease
.slide-right-leave-active
  transition 1s all ease
</style>
