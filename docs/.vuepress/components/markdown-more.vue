<template>
  <div class="page-markdown-more">
    <transition name="more"> 
      <div v-show="isShowMore" class="more-content">
        <slot></slot>
      </div>
    </transition> 
    <div 
      :class="[isShowMore ? 'more':'not-more','control']"
      @click="toggle()">
      {{isShowMore ? '收起内容 ' :'了解更多 '}} <i class="iconfont icon-youjiantou" style="font-size:12px;"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowMore : false
    }
  },
  methods: {
    toggle() {
      this.isShowMore =! this.isShowMore
    }
  }
}
</script>

<style lang="stylus">
@import '../theme/v2/styles/v2'
  .page-markdown-more
    .more-content
      padding 0
    .control
      margin-top 20px
      width 160px
      height 28px
      font-size 14px
      line-height (28 - 2)px
      //text-align center
      //border 1px solid $black10
      transition $longt
      box-sizing border-box
      color $stdBlue
      &:hover
        cursor pointer
        //border 1px solid $black20 
        color $stdBlue
        line-height (28 - 2)px
      i 
        display inline-block
        transition $stdt 200ms
      &.not-more
        i 
          transform rotate(0) translateY(-1px)
      &.more
        i 
          transform rotate(-90deg) translateX(1px)

//动画

.more-enter-active, .more-leave-active
  transition $longt
.more-enter
  opacity 0
  transform translateX(-10px)
.more-leave-to
  transform translateX(10px)
  opacity 0
</style>


