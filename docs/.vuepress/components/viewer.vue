<template>
<div class="viewer">
  <div class="select" v-if="kindOfpage.list && kindOfpage.list.length">
    <ul>
      <li v-for="i in kindOfpage.list" :id="i.className" v-on:click="kindChose(i)" 
      :class="kindOfpage.chose == i.className ? 'active' : ' '">
      {{i.name}}</li>
    </ul>
  </div>
  <div :class="gernerateClassCms(kindOfpage.chose)" v-if="frontmatterdata.cmsblocks && frontmatterdata.cmsblocks.length">
    <div :class="gernerateClass(item)" v-for="item in frontmatterdata.cmsblocks">
      <img :src="item.src" alt="">
    </div>
  </div>
</div>
</template>

<style lang="stylus">
@import '../theme/styles/config.styl'

$imgwidth = 420px

.viewer
  .select
    ul
      display block
      width $imgwidth * 3 + 80px
      margin 20px auto
      overflow hidden
      padding 20px 0
      li
        list-style none
        display block 
        float left 
        width 140px
        text-align center
        padding 10px
        heigt 20px
        background #e6e6e6
      li.active
        color #ffffff
        background #108cee
  .cmsblocks
    width $imgwidth * 3 + 80px
    margin 20px auto 0
    img
      width  $imgwidth
      margin 10px
      box-shadow 0 5px 10px #00000010
      float left
    &.product
      .solution
        display none

</style>

<script>
  export default {
  data(){
   return {
    kindOfpage: {
      chose: "product",
      list:[{"name":"产品页","className":"product"},{"name":"解决方案","className":"solution"}]} ,
    }
  },
  computed: {
    frontmatterdata() {
      return this.$page.frontmatter
    }
  },
  mounted () {
  },
  methods: {
    gernerateClass :function(item){
      return "imgcard " + item.tag
    } ,
    kindChose : function(i){
      this.$set(this.kindOfpage,"chose",i.className)
    },
    gernerateClassCms : function(i){
      return "cmsblocks " + i
    }
  }
}
</script>