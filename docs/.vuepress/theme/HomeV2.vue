<template>
    <div class="home-pc" @scroll.native="scroll">
        <!-- svg 背景 -->
        <svg id="background-svg" width="90%" viewBox="0 0 615 620" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="#d3fdff" fill-rule="evenodd">
            <path :d="path" stroke="none"></path>
        </g>
        </svg>
        <!-- 文字介绍 -->
        <div class="warp" :style="warpStyle">
            <h1 class="title">{{ $page.frontmatter.mainText}}</h1>
                <p class="description">
                {{ $page.frontmatter.subtitle || $description}}
                </p>
        </div>
    </div>
</template>

<script>
import {TweenLite} from 'gsap/TweenMax';
import NavLink from './NavLink.vue';

export default {
    components: {
        NavLink
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
            warpStyle: {}
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
        // warpStyle() {
        //     let x = document.body.scrollTop+document.documentElement.scrollTop;
        //     return {
        //         transform: `translateX(${x})`,
        //         opacity: 1
        //     };
        // }
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
            this.warpStyle.opacity = 1.2 - 2 * radio;
            this.warpStyle.transform = `translateY(-${150 * radio}px)`;
        }
    }
};
</script>

<style lang="less" scoped>
.home-pc {
    min-width: 1000px;
    #background-svg {
        min-width: 1200px;
        position: absolute;
        right: 0;
    }

    .warp {
        position: fixed;
        width: 40%;
        height: 350px;
        top: 30%;
        left: 10%;
    }
}
</style>
