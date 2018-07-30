<template>
  <div class="line-height">
    <div class="size-item item-head">
    <p class="label">输入字号查询:</p>
    <input v-model="changeAsk" placeholder="输入字号查询">
    <p :style="resourveStyle(changeAsk)" class="text-show-first">
      字号: {{ changeAsk }}  px
    </p>
    <p :style="resourveStyle(changeAsk)" class="text-show">
      行高:{{resourveLineHeiht(changeAsk)}} px
    </p>
    </div>
    <h3>百度云官网规范:</h3>
    <div v-if="ask" v-for="i in ask" class="size-item"
    :style="resourveStyle(i)">
      字号: {{i}}  行高:{{resourveLineHeiht(i)}} <br> 对酒当歌，人生几何 <br> 譬如朝露，去日苦多
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        changeAsk: 12
      }
    },
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
  width 100%
  overflow hidden
  border 1px solid #ebebeb
  margin-top 40px
  h3
    padding-left 40px
    margin-bottom 0
  .size-item
    box-sizing border-box
    border-bottom 1px solid #ebebeb
    margin 0 40px
    padding 20px 0
  .item-head
    margin 0 0
    padding 20px 40px
    p.text-show-first
      margin 20px 0 0 0
      color #999
      display block
      min-height 24px
    p.text-show
      margin 0 0 0 0
      color #999
      display block
      min-height 24px
    p.label
      margin-bottom 10px
</style>
