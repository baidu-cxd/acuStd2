<template>
  <div class="section-viewer">
      <div class="title-box">
          <h2>{{sectiondata.title}}</h2>
          <p v-if="sectiondata.subtitle">{{sectiondata.subtitle}}</p>
      </div>
      <div class="module-box">
          <div class="card col-3">
              <div class="icon-wrp"></div>
             <h3>这是一张卡片</h3>
             <p>百度云—百度基于17年技术积累为公有云需求者提供稳定、高可用、可扩展的云计算服务,拥有四大平台解决方案</p>
             <div class="light-button">
               了解更多
             </div>
          </div>

          <div class="card col-3">
              <div class="icon-wrp"></div>
             <h3>这是一张卡片</h3>
             <p>百度云—百度基于17年技术积累为公有云需求者提供稳定、高可用、可扩展的云计算服务,拥有四大平台解决方案</p>
             <div class="light-button">
               了解更多
             </div>
          </div>

          <div class="card col-3">
              <div class="icon-wrp"></div>
             <h3>这是一张卡片</h3>
             <p>百度云—百度基于17年技术积累为公有云需求者提供稳定、高可用、可扩展的云计算服务,拥有四大平台解决方案</p>
             <div class="light-button">
               了解更多
             </div>
          </div>  
         
      </div>
  </div>
</template>

<style lang="stylus">
@import '../theme/styles/config.styl'
@import '/styles/clean.styl'
@import '/styles/base.styl'

.section-viewer
  width 100%
  min-width 1180px 
  margin  auto
  padding 80px 0
  background-color #f5f5f5
  overflow hidden
  .title-box 
    max-width 1180px 
    margin auto
    h2
      width 1180px
      display block 
      text-align center
      margin auto
    p
      color #999
      width 1180px
      text-align center
      margin 10px 0 0 0
  .module-box 
    width 1180px
    margin 40px auto 0
    .icon-wrp
      width 80px
      height 80px
      border-radius 40px
      background-color #121218
      margin 10px auto 20px
    h3
      text-align center
    p
      margin 10px 0
    .light-button
      box-sizing border-box
      font-size 14px
      line-height 34px
      color #999999
      border 1px solid #ededed
      width 140px
      text-align center
      margin 20px auto 0
      &:hover
        background-color #108cee
        color #fff
        border 1px solid transparent
        cursor pointer

</style>

<script>
  export default {
    props: {
      sectiondata:{
        type: Object,
        default: function () {
          return{
            title: '板块标题',
            subtitle:'板块小标题',
          }
        },    
      }
    },
  }
</script>