<!-- 暂时停用 -->

<template>
    <div class="colorBox" 
    v-if="color2 == null"
    :style="{backgroundColor: color}">
        <p>{{color}}</p><p>{{text}}</p>
    </div>
    <div :class="['colorBox','gra',type]" 
    v-else-if="color2 !== null"
    :style="gradients">
        <p class="color-box-color">{{color}} → {{color2}}</p><p class="color-box-text">{{text}}</p>
        <div class="color-1 colorBox-in" 
        :data-clipboard-text="color"
        :style="{backgroundColor: color}"><p @click="showAlert()">{{color}}</p>
        </div>
        <div class="color-2 colorBox-in"  
        :data-clipboard-text="color2"
        :style="{backgroundColor: color2}">
        <p @click="showAlert()">{{color2}}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    color: {
      default: null
    },
    color2: {
      default: null
    },
    text: {
      default: null
    },
    type: {
      default: 'dark'
    },
  },
  methods: {
    showAlert: function(){
      alert('复制到粘贴板')
    },
  },
  mounted() {
    import("clipboard").then(cb => {
      new cb.default(".colorBox-in");
    });
  },
  computed: {
    gradients(){
      let a = this.color
      let b = this.color2
      let c = 'background: linear-gradient(90deg,'+ a+','+ b+')'
      return c
    }
  }
};
</script>

<style lang="stylus">
@import '../theme/styles/config.styl' 
  .colorBox.gra
    transition .8s all $easeInOutStd
    position relative
    .color-1,.color-2
      height 100%
      width 160px
      position absolute
      background-color #000
      top 0
      transition .8s transform $easeInOutStd
      &:hover
        cursor pointer
      p,p:first-child
        position absolute
        left 50%
        top 50%
        width 100%
        text-align center
        line-height 100px
        transform translate(-50%,-50%)
        display block
        transition .4s all $easeInOutStd
        &:hover
          background-color #000
    .color-1
      left 0
      transform translateX(-100%)
    .color-2
      right 0
      transform translateX(100%)
    p.color-box-color,p.color-box-text
      transition .4s all $easeInOutStd
      opacity 1
    &:hover
      cursor default
      .color-1,.color-2
        transform translateX(0px)
        p:hover
          color #fff
      p.color-box-color
        transform translateX(30px)
        opacity 0
      p.color-box-text
        transform translateX(-30px)
        opacity 0
</style>

