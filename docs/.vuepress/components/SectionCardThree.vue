<template>
  <div class="section-viewer">
      <div class="title-box">
          <h2>{{sectiondata.title}}</h2>
          <p v-if="sectiondata.subtitle">{{sectiondata.subtitle}}</p>
      </div>
      <div class="module-box">
          <div class="card col-3">
            <div class="icon-wrp"><img src="./img/icon32-baidu.png" alt=""></div>
            <h3>这是一张卡片</h3>
            <p>百度云—百度基于17年技术积累为公有云需求者提供稳定、高可用、可扩展的云计算服务,拥有四大平台解决方案</p>
            <div class="light-button">了解更多</div>
          </div>

          <div class="card col-3" style="animation-delay:.4s;">
            <div class="icon-wrp"><img src="./img/icon32-opensource.png" alt=""></div>
            <h3>这是一张卡片</h3>
            <p>百度云—百度基于17年技术积累为公有云需求者提供稳定、高可用、可扩展的云计算服务,拥有四大平台解决方案</p>
            <div class="light-button">了解更多</div>
          </div>

          <div class="card col-3" style="animation-delay:.5s;">
              <div class="icon-wrp"><img src="./img/icon32-ser.png" alt=""></div>
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

.modal-section.show
  .title-box  
    animation move-in .6s .2s forwards cubic-bezier(0.165, 0.84, 0.44, 1)

.section-viewer
  width 100%
  min-width 1180px 
  margin  auto
  padding 80px 0
  background-color #f5f5f5
  overflow hidden
  .title-box 
    max-width 1180px 
    opacity 0
    margin auto
    position relative
    top 60px
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
      width 72px
      height 72px
      border-radius 40px
      background-color #121218
      margin 10px auto 20px
      position relative
      img
        width 32px
        hright 32px
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
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
      transition .02s all ease-out
      &:hover
        background-color #108cee
        color #fff
        border 1px solid #108cee
        cursor pointer
        transition .05s all ease-out

</style>

<script>
  export default {
    props: {
      sectiondata:{
        type: Object,
        default: function () {
          return{
            title: '板块标题',
            subtitle:'板块标题内容',
          }
        },    
      }
    },
  }
</script>