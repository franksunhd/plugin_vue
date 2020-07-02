<template>
    <div class="aweSiperBox">
        <div class="title">{{ currentIndex }}/{{ imgList.length }}</div>
        <swiper :options="swiperOptions">
            <swiper-slide v-for="(item,index) in imgList" :key="index">
                <div class="FDWXSelectImgBox">
                    <img class="swiper-slideImg" :src="item.url"/>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "vueAwesomeSwiper",
        data() {
            return {
                currentIndex: 2,
                swiperOptions: {
                    direction: 'horizontal',
                    initialSlide: 1,
                    slidesPerView: 1.5, // 可见图片张数
                    centeredSlides: true, // 默认选中中间一张
                    loop: true, // 无限循环
                    autoplay: 4000, // 自动播放时间间隔
                    on: {
                        slideChange() {
                            this.currentIndex = this.activeIndex + 1
                        }
                    }
                },
                imgList: [
                    {url: require('../../../../assets/img/resource/1.png')},
                    {url: require('../../../../assets/img/resource/2.png')},
                    {url: require('../../../../assets/img/resource/3.png')},
                    {url: require('../../../../assets/img/resource/4.png')},
                    {url: require('../../../../assets/img/resource/5.png')},
                    {url: require('../../../../assets/img/resource/6.png')},
                    {url: require('../../../../assets/img/resource/7.png')},
                    {url: require('../../../../assets/img/resource/8.png')},
                    {url: require('../../../../assets/img/resource/9.png')},
                    {url: require('../../../../assets/img/resource/10.png')},
                    {url: require('../../../../assets/img/resource/11.png')},
                    {url: require('../../../../assets/img/resource/12.png')},
                ]
            }
        }
    }
</script>

<style>
    .aweSiperBox {
        display: inline-block;
        padding: 30px 20px;
        background-color: #9cb945;
    }

    .aweSiperBox .title {
        font-size: 30px;
        margin-bottom: 20px;
        text-align: center;
    }

    .aweSiperBox .swiper-container {
        width: 100%;
        max-width: 1000px;
        height: 100%;
        overflow: hidden !important;
    }

    .aweSiperBox .FDWXSelectImgBox {
        height: 100%;
        padding: 20px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 3px 2px 0 rgba(149, 97, 1, 0.41);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 1s;
    }

    .aweSiperBox .swiper-slideImg {
        width: 100%;
        height: 100%;
    }

    .aweSiperBox .swiper-slide {
        transition: 1s;
        transform: scale(0.9);
    }

    .aweSiperBox .swiper-slide-active,
    .aweSiperBox .swiper-slide-duplicate-active {
        transform: scale(1);
    }
</style>
