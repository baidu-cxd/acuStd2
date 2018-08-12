<template>
    <div class="home-introduction">
        <div v-for="item in intro" class="intro-cell">
            <div class="img-container">
                <img :src="$bosLink(item.img)">
            </div>
            <dl>
                <dt>
                    {{item.title}}
                </dt>
                <dd>
                    {{item.detail}}
                </dd>
            </dl>
            <a :href="item.link">READ MORE</a>
        </div>
    </div>
</template>

<script>

export default {
    mounted() {
    },
    data() {
        return {
            intro: [
                {
                    img: 'public/intro-portal.png',
                    title: 'portal端',
                    detail: '百度云 Portal 端平台规范是针对百度云官网页面编写，意义在于保证统一、提高效率、利于设计自查、利于跨部门协作、共享资源',
                    link: '/portal/summarize/Summarize.html'
                },
                {
                    img: 'public/intro-console.png',
                    title: 'console端',
                    detail: '百度云 Console 端平台规范是针对百度云控制台页面编写，意义在于保证平台设计的统一性，提升设计和开发的效率，保证最佳设计实践的复用',
                    link: '/console/outline/Outline.html'
                },
                {
                    img: 'public/intro-animate.png',
                    title: '动效',
                    detail: '在页面中引入动画的主要为了帮助用户理解页面交互形式，提高页面视觉效果，加深用户对页面的印象，降低长时间浏览的枯燥感',
                    link: '/animate/Summarize.html'
                }
            ]
        };
    }
};
</script>

<style lang="less" scoped>
.home-introduction {
    width: 80%;
    height: 490px;
    position: fixed;
    right: 10%;
    bottom: 10%;
    display: flex;
    justify-content: space-around;
    min-width: 900px;
    .intro-cell {
        .img-container {
            height: 134px;
        }
        width: 280px;
        text-align: center;
        dl {
            margin: 70px 0;
        }
        dt {
            font-size: 20px;
        }
        dd {
            font-size: 14px;
            margin-top: 30px;
            margin-left: 0;
            line-height: 24px;
            height: 80px;
        }
        a {
            color: #4db1ff;
            position: relative;
            &:after {
                content: '→';
                right: -28px;
                position: absolute;
                color: #fff;
                height: 18px;
                width: 18px;
                border-radius: 50%;
                background-color: #4db1ff;
            }
        }
    }
    &:after {
        content: '';
        width: 100%;
        height: 425px;
        position: absolute;
        bottom: 0;
        box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.2);
        background-color: #fff;
        z-index: -1;
        border-radius: 2px;
    }
}
</style>
