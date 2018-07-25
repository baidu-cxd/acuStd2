<template>
  <div class="line-height">
    <div v-if="ask" v-for="i in ask" class="size-item"
    :style="resourveStyle(i)">
      字号: {{i}}  行高:{{resourveLineHeiht(i)}} <br> 对酒当歌，人生几何 <br> 譬如朝露，去日苦多
    </div>
  </div>
</template>
<script>
export default {
    props: {
      small: {
        type: Object,
        default: function() {
          return {
          'fontSize': 12,
          'lineHeiht': 24
          }
        }
      },
      big: {
        type: Object,
        default: function() {
          return {
          'fontSize': 42,
          'lineHeiht': 64
          }
        }
      },
      ask: {
        type: Array,
        default: [12,48]
      }
    },
    methods: {
      resourveStyle(i) {
        const h = this.resourveLineHeiht(i)
        return "font-size:" + i + "px; line-height:" + h + "px;"
      },
      resourveLineHeiht(i) {
        const a = this.small.fontSize
        const b = this.small.lineHeiht
        const c = this.big.fontSize
        const d = this.big.lineHeiht
        const e = (d - b) / (c - a) * (i - a) + b
        const f = e/2
        const g = Math.round(f)*2
        return g
      }
    }
}
</script>

<style lang="stylus">
.line-height
  .size-item
    width 400px
    border 1px solid #ebebeb
    margin 40px 0
    padding 0 10px
</style>
