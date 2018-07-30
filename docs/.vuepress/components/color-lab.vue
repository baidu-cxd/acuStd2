<template>
  <div class="color-lab guide">
    <h3>色彩实验室</h3>
    <p>输入基础色（16进制）</p>
    <input v-model="normal" placeholder="输入字号查询">
    <div class="button-test"
    :style="{background:color }"
    @mouseenter="hover()"
    @mouseleave="clean()"
    @mouseup="click()">按钮测试</div>
    <!-- <div class="raw clear-float">
      <div class="p-col col-1-in-3 color-block normal"
        :style="{background:resolveHover(normal) }">亮色: {{resolveHover(normal)}}</div>
      <div class="p-col col-1-in-3 color-block normal"
        :style="{background:normal }">基础颜色: {{normal}}</div>
      <div class="p-col col-1-in-3 color-block normal"
        :style="{background:resolveActive(normal) }">暗色: {{resolveActive(normal)}}</div>
    </div> -->
    <div class="raw clear-float">
      <div class="p-col col-1-in-3 color-block normal"
        :style="{background:resolveHSVHover(normal) }">亮色: {{resolveHSVHover(normal)}}</div>
      <div class="p-col col-1-in-3 color-block normal"
        :style="{background:normal }">基础颜色: {{normal}}</div>
      <div class="p-col col-1-in-3 color-block normal"
        :style="{background:resolveHSVActive(normal) }">暗色: {{resolveHSVActive(normal)}}</div>
    </div>
  </div>
</template>

<style lang="stylus">
@import '../theme/v2/styles/v2'
.color-lab
  box-sizing border-box
  border 1px solid $borderColor
  padding 0 30px 20px
  margin 40px 0 20px 0
  .button-test
    transition $stdt
    cursor pointer
    width 160px
    height 38px
    margin 20px 0
    color #fff
    line-height 38px
    text-align center
  .raw
    border-top 1px solid $borderColor
    padding-top 40px
    margin 40px 0
  .color-block
    height 120px
    background-color #000
    line-height 120px
    text-align center
    color #fff
</style>

<script>
export default {
  data() {
    return {
      color : ' ',
      normal : '#108cee'
    }
  },
  mounted: function(){
    this.color = this.normal
  },
  methods: {
    hover() {
      this.color = this.resolveHSVHover(this.normal)
    },
    click() {
      this.color = this.resolveHSVActive(this.normal)
    },
    clean() {
      this.color = this.normal
    },
    resolveHover(normal){
      return lightenColor(normal,0.1) 
    },
    resolveActive(normal){
      return darkenColor(normal,0.1) 
    },
    resolveHSVHover(normal){
      return lightenHSVColor(normal,0.2) 
    },
    resolveHSVActive(normal){
      return darkenHSVColor(normal,0.1) 
    },
  }
}
//将hex颜色值str转化成HSL数组
function colorHSL(str){
  str = str.replace("#", "");
  let hxs = str.match(/../g);
  for (let i = 0; i < 3; i++) hxs[i] = parseInt(hxs[i], 16);
  let r = hxs[0];
  let g = hxs[1];
  let b = hxs[2];
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max == min){ 
    h = s = 0; 
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch(max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h, s, l];
}
//HSL 转 RGB
function HSLToRGB(hsl) {
  const h = hsl[0];
  const s = hsl[1];
  const l = hsl[2];
  let r, g, b;
  if(s == 0) {
    r = g = b = l; // achromatic
  } else {
    let hue2rgb = function hue2rgb(p, q, t) {
      if(t < 0) t += 1;
      if(t > 1) t -= 1;
      if(t < 1/6) return p + (q - p) * 6 * t;
      if(t < 1/2) return q;
      if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }
    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
//将hex颜色值str转化成HSV数组
function colorHSV(str){
  str = str.replace("#", "");
  let hxs = str.match(/../g);
  for (let i = 0; i < 3; i++) hxs[i] = parseInt(hxs[i], 16);
  let r = hxs[0];
  let g = hxs[1];
  let b = hxs[2];
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, v = max;
  if (max == min){ 
    h = s = 0; 
  } else {
    let d = max - min;
    if(max == 0){ 
      s = 0
    } else {
      s = d/max 
    }
    switch(max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
    h = 360 * h
  }
  return [h, s, v];
}
//HSV 转 RGB
function HSVToRGB(hsv) {
  const h = hsv[0];
  const s = hsv[1];
  const v = hsv[2];
  let r, g, b;
  const h1 = Math.floor(h / 60) % 6
  const f = h / 60 - h1
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - ( 1 - f) * s)
  let rgb = []
  switch(h1) {
    case 0: rgb = [v, t, p]; break;
    case 1: rgb = [q, v, p]; break;
    case 2: rgb = [p, v, t]; break;
    case 3: rgb = [p, q, v]; break;
    case 4: rgb = [t, p, v]; break;
    case 5: rgb = [v, p, q]; break;
  } 
  return [Math.round(rgb[0] * 255), Math.round(rgb[1] * 255), Math.round(rgb[2] * 255)];
}
//将rgb颜色值为a,b,c转化成hex颜色值
function colorRGBToHex(rgb){
  const r = rgb[0];
  const g = rgb[1];
  const b = rgb[2];
  let hexs = [r.toString(16), g.toString(16), b.toString(16)];
  for (let i = 0; i < 3; i++) if (hexs[i].length == 1) hexs[i] = "0" + hexs[i];
  return "#" + hexs.join("");
}
//加深颜色
function darkenColor(color,level){
  let hslc = colorHSL(color);
  hslc[2] = hslc[2] - level
  if(hslc[2] < 0){
    hslc[2] = 0
  }
  if(hslc[1] > 1){
    hslc[1] = 1
  }
  return colorRGBToHex(HSLToRGB(hslc));
} 
//减淡颜色
function lightenColor(color,level){
  let hslc = colorHSL(color);
  hslc[2] = hslc[2] + level
  if(hslc[2] > 1){
    hslc[2] = 1
  }
  if(hslc[1] < 0){
    hslc[1] = 0
  }
  return colorRGBToHex(HSLToRGB(hslc));
} 
//加深颜色-hsv模式
function darkenHSVColor(color,level){
  let hsvc = colorHSV(color);
  hsvc[2] = hsvc[2] - level
  let de
  if(hsvc[2] < 0){
    de = 0 - hsvc[2]
    hsvc[1] = hsvc[1] + 0.5 * de// 溢出的加深用于增加饱和度
    hsvc[2] = 0
  }
  hsvc[1] = hsvc[1] + 0.1 * level// 默认加深时候微调饱和度
  if(hsvc[1] > 1){
    hsvc[1] = 1
  }
  return colorRGBToHex(HSVToRGB(hsvc));
} 
//减淡颜色-hsv模式
function lightenHSVColor(color,level){
  let hsvc = colorHSV(color);
  hsvc[2] = hsvc[2] + level
  let de
  if(hsvc[2] > 1){
    de = hsvc[2] - 1
    hsvc[2] = 1
    hsvc[1] = hsvc[1] - 0.5 * de// 溢出的减淡用于降低饱和度
  }
  hsvc[1] = hsvc[1] - 0.1 * level// 默认减淡时候微调饱和度
  if(hsvc[1] < 0){
    hsvc[1] = 0
  }
  return colorRGBToHex(HSVToRGB(hsvc));
} 
</script>


