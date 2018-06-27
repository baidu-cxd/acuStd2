<template>
  <div class="bezier-container" :style="{width, height, display: 'inline-block'}">
    <canvas @click="play" ref="canvas"></canvas>
    <div class="cursor" :style="{transform, transition, opacity, width: cursorWidth + 'px'}"></div>
  </div>
</template>

<script>
import Bezier from '../tools/Bezier.es6';

const cursor = {
  arrawWidth: 5,
  height: 10
}

export default {
  props: {
    height: {
      type: [String, Number],
      default: '150px'
    },
    width: {
      type: [String, Number],
      default: '150px'
    },
    param: {
      type: Array,
      default: () => [.55, .94, 0, -0.95]
    },
    cursorWidth: {
      type: Number,
      default: 15
    },
    time: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      transform: `translate(0, ${this.height})`,
      opacity: 1,
      // 箭头宽度
      arrowWidth: cursor.arrawWidth,
      cursorHeight: cursor.height,
      isPlaying: false
    }
  },
  mounted() {
    let canvas = this.$refs.canvas;
    canvas.width = this.$el.clientWidth - this.cursorWidth - this.arrowWidth;
    canvas.height = this.$el.clientHeight;
    let bezier = new Bezier(canvas, this.param);
    bezier.draw();
  },
  methods: {
    play() {
      if (!this.isPlaying) {
        this.isPlaying = true;
        this.toEnd();
        setTimeout(this.toStart, 1000 * this.time + 800);
      }
    },
    toEnd() {
      this.transform = `translate(0, 0)`;
      this.opacity = 0;
    },
    toStart() {
      this.transform = `translate(0, ${this.height})`;
      this.opacity = 1;
      setTimeout(() => this.isPlaying = false, 800);
    }
  },
  computed: {
    transition() {
      let cb = this.param.join(',');
      let time = this.time;
      return `transform ${time}s cubic-bezier(${cb}), opacity 0.2s ease ${time + 0.5}s`;
    }
  }
};
</script>

<style lang="stylus">
$arrowSize = 5px
$arrowColor = #108cee
.bezier-container
  margin 10px
  position relative
  canvas
    position relative
    top $arrowSize
  .cursor
    height 2 * $arrowSize
    background-color $arrowColor
    position absolute
    right 0
    top 0px
    &:after
      position absolute
      left -2 * $arrowSize
      content ''
      height 0
      width 0
      border $arrowSize solid transparent
      border-right $arrowSize solid $arrowColor
</style>