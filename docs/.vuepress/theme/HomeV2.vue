<template>
    <div class="home-pc" @scroll.native="scroll">
        <!-- svg 背景 -->
        <svg id="background-svg" width="90%" viewBox="0 0 615 620" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="#d3fdff" fill-rule="evenodd">
            <path :d="path" stroke="#d3fdff"></path>
        </g>
        </svg>
        <!-- 大树小鸟 -->
        <div class="tree-and-bird" :style="tbStyle">
            <img :src="$bosLink('public/trunk.png')" alt="tree" id="main-img-tree">
            <img :src="$bosLink('public/birds.png')" alt="birds" id="main-img-birds">
            <div class="leaves">
                <img :src="$bosLink('public/bigleaf01.png')" class="bigleaf bigleaf01">
                <img :src="$bosLink('public/bigleaf02.png')" class="bigleaf bigleaf02">
                <img :src="$bosLink('public/bigleaf03.png')" class="bigleaf bigleaf03">
                <img :src="$bosLink('public/leaf01.png')" class="leaf leaf01">
                <img :src="$bosLink('public/leaf02.png')" class="leaf leaf02">
                <img :src="$bosLink('public/leaf03.png')" class="leaf leaf03 wave">
                <img :src="$bosLink('public/leaf01.png')" class="leaf leaf04 wave">
                <img :src="$bosLink('public/leaf04.png')" class="leaf leaf05 wave">
                <img :src="$bosLink('public/leaf05.png')" class="leaf leaf06 wave">
                <img :src="$bosLink('public/leaf05.png')" class="leaf leaf07 wave">
            </div>
        </div>
        <!-- logo -->
        <img :src="$bosLink('public/cxd.svg')" alt="cxd" class="logo">
        <!-- 文字介绍 -->
        <div class="warp" :style="warpStyle">
            <h1 class="title">{{ $page.frontmatter.mainText}}</h1>
            <p class="description">
                {{ $page.frontmatter.subtitle || $description}}
            </p>
        </div>
        <!-- 下面三个介绍 -->
        <Introduction :style="introStyle"/>
    </div>
</template>

<script>
import {TweenLite} from 'gsap/TweenMax';
import NavLink from './NavLink.vue';
import Introduction from './HomeIntroduction.vue';

export default {
    components: {
        NavLink, Introduction
    },
    mounted() {
        this.x = 20;
    },
    data() {
        return {
            x: 0,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            flag: 1,
            warpStyle: {},
            introStyle: {
                opacity: 0
            },
            tbStyle: {}
        };
    },
    computed: {
        path() {
            return `M0.83984375,0.8515625
                C123.808594,19.140625
                ${152.736785 + this.x1},${71.3640394 + this.y1}
                ${132.273437 + this.x1},${165.828125 + this.y1}
                C${110.9375 + this.x1},${264.320312 + this.y1}
                ${241.916834 + this.x2},${318.233859 + this.y2}
                ${269.523437 + this.x2},${346.398438 + this.y2}
                C${359.84375 + this.x2},${438.544271 + this.y2}
                337.47526,529.384115 202.417969,618.917969
                L613.902344,618.917969 L613.902344,0.8515625
                C315.779948,0.8515625 111.425781,0.8515625 0.83984375,0.8515625 Z`;
        }
    },
    watch: {
        x(newValue) {
            let me = this;
            TweenLite.to(this.$data, 7, {
                x1: 40 - newValue,
                y1: newValue + 30,
                x2: newValue / 1.5,
                y2: newValue,
                onComplete() {
                    me.flag = -me.flag;
                    me.x += me.flag * 20;
                }
            });
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            // 滚动超过一半 显示第二屏
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            let clientHeight = window.innerHeight;
            let totalScrollHeight = scrollHeight - clientHeight;
            let radio = scrollTop / totalScrollHeight;
            this.warpStyle.opacity = 1 - 2 * radio;
            this.warpStyle.transform = `translateY(-${150 * radio}px)`;
            this.introStyle.opacity = radio * 2 - 1;
            this.introStyle.transform = `translateY(${150 - 150 * radio}px)`;
            this.tbStyle.transform = `translateY(${-450 * radio}px)`;
        }
    }
};
</script>

<style lang="stylus">
@import './styles/leavesFalling.styl';
minWidth = 900px
.home-pc
    font-family: Avenir;
    min-width: minWidth;
    width: 100%;
    overflow-x hidden;
    #background-svg
        min-width: minWidth;
        position: absolute;
        left: 10%;
    img.logo
      width 120px
      position fixed
      top 80px
      left 10%
    .warp
        position: fixed;
        height: 350px;
        top: 40%;
        left: 10%;
        .title
            font-size: 64px;
            margin: 0 0 30px 0;
            font-weight: 800;
            letter-spacing: 4px;
            color: #282828;
        .description
            z-index 100
            line-height 2
            width 760px
            font-size 18px
            color #314659

    .tree-and-bird
        position fixed
        width 100%
        min-width minWidth

        overflowY hidden
        #main-img-tree, #main-img-birds
            position absolute
            top 0
            width 100%
            z-index 0
    .leaves
        width 100%
        height 100vw
        .bigleaf
            position absolute
            top 0
            width 100%
            transform-origin 84% 60%
            &.bigleaf01
                z-index 20
                animation bigWave 4s 0.3s ease-in-out infinite alternate
            &.bigleaf03
                z-index 21
                animation bigWave 4s 0.5s ease-in-out infinite alternate
            &.bigleaf02
                z-index 22
                animation bigWave 4s ease-in-out infinite alternate
        .leaf
            position absolute
            transform rotate(-12deg)
            &.leaf01
                z-index 9
                width 1.8%
                animation leafsMoving01 8s linear infinite, leafsRotation01 4s linear infinite
            &.leaf02
                z-index 31
                width 1.5%
                animation leafsMoving02 7s linear infinite, leafsRotation02 3s linear infinite
            &.leaf03
                width 1.8%
                animation leaveWave 4s ease infinite alternate
                transform-origin 0 100%
                top 20%
                right 15.5%
            &.leaf04
                width 1.8%
                animation leaveWave 4s 0.3s ease infinite alternate
                transform-origin 0 100%
                top 7%
                right 29%
            &.leaf05
                width 1.9%
                animation leaveWave 4s 1s ease infinite alternate
                transform-origin 0 100%
                top 16%
                right 25%
            &.leaf06
                width 1.9%
                animation leaveWave 4s 0.2s ease infinite alternate
                transform-origin 100% 100%
                top 16%
                right 35%
            &.leaf07
                width 1.7%
                animation leaveWave 4s 0.8s ease infinite alternate
                transform-origin 100% 100%
                top 21%
                right 41%
</style>
