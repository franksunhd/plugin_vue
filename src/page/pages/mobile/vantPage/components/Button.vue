<template>
    <div>
        <div class="title">按钮类型</div>
        <van-button type="primary" @click="clickBtn('主要按钮')">主要按钮</van-button>
        <van-button type="info" @click="clickBtn('信息按钮')">信息按钮</van-button>
        <van-button type="default">默认按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>

        <div class="title">朴素按钮</div>
        <van-button plain type="primary">朴素按钮</van-button>
        <van-button plain type="info">朴素按钮</van-button>

        <div class="title">细边框</div>
        <van-button plain hairline type="primary">细边框按钮</van-button>
        <van-button plain hairline type="info">细边框按钮</van-button>

        <div class="title">禁用状态</div>
        <van-button disabled type="primary">禁用状态</van-button>
        <van-button disabled type="info">禁用状态</van-button>

        <div class="title">加载状态</div>
        <van-button loading type="primary"/>
        <van-button loading type="primary" loading-type="spinner"/>
        <van-button loading type="info" loading-text="加载中..."/>

        <div class="title">按钮形状</div>
        <van-button square type="primary">方形按钮</van-button>
        <van-button round type="info">圆形按钮</van-button>

        <div class="title">图标按钮</div>
        <van-button icon="plus" type="primary"/>
        <van-button icon="plus" type="info">按钮</van-button>
        <van-button icon="https://img.yzcdn.cn/vant/user-active.png" plain type="info">按钮</van-button>

        <div class="title">按钮尺寸</div>
        <van-button type="primary" size="large">大号按钮</van-button>
        <van-button type="primary" size="normal">普通按钮</van-button>
        <van-button type="primary" size="small">小型按钮</van-button>
        <van-button type="primary" size="mini">迷你按钮</van-button>

        <div class="title">块级元素</div>
        <van-button type="primary" block>块级元素</van-button>

        <div class="title">页面导航</div>
        <van-button type="primary" url="/#/vantPage">URL 跳转</van-button>
        <van-button type="primary" to="vantPage">路由跳转</van-button>

        <div class="title">自定义颜色</div>
        <van-button color="#7232dd">单色按钮</van-button>
        <van-button color="#7232dd" plain>单色按钮</van-button>
        <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
            渐变色按钮
        </van-button>
    </div>
</template>

<script>
    import {Toast} from "vant";

    export default {
        name: "Button",
        methods: {
            clickBtn(item) {
                Toast({
                    message: item,
                    icon: "success"
                });
            }
        }
    };
</script>

<style scoped>

</style>
