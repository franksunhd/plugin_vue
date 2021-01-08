<template>
    <div>
        <van-tabs v-model="active">
            <van-tab title="用法示例">
                <div class="title">基础用法</div>
                <div class="content">
                    <van-icon name="chat-o" size="40"/>
                    <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size="40"/>
                </div>


                <div class="title">徽标提示</div>
                <div class="content">
                    <van-icon name="chat-o" dot size="40"/>
                    <van-icon name="chat-o" badge="9" size="40"/>
                    <van-icon name="chat-o" badge="99+" size="40"/>
                </div>

                <div class="title">图标颜色</div>
                <div class="content">
                    <van-icon name="cart-o" color="#1989fa" size="40"/>
                    <van-icon name="fire-o" color="#ee0a24" size="40"/>
                </div>

                <div class="title">图标大小</div>
                <div class="content">
                    <van-icon name="chat-o" size="40"/>
                    <van-icon name="chat-o" size="2rem"/>
                </div>
            </van-tab>
            <van-tab title="基础图标">
                <div class="fatherIcon">
                    <div class="sonIcon" v-for="(item,index) in baseIcon" :key="index">
                        <van-icon :name="item" size="40"/>
                        <p>{{item}}</p>
                    </div>
                </div>
            </van-tab>
            <van-tab title="线框风格">
                <div class="fatherIcon">
                    <div class="sonIcon" v-for="(item,index) in lineIcon" :key="index">
                        <van-icon :name="item" size="40"/>
                        <p>{{item}}</p>
                    </div>
                </div>
            </van-tab>
            <van-tab title="实底风格">
                <div class="fatherIcon">
                    <div class="sonIcon" v-for="(item,index) in solidIcon" :key="index">
                        <van-icon :name="item" size="40"/>
                        <p>{{item}}</p>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import IconList from "../../../../../mock/index";

    export default {
        name: "Icon",
        data() {
            return {
                active: "",
                baseIcon: IconList.IconList.baseIcon,
                lineIcon: IconList.IconList.lineIcon,
                solidIcon: IconList.IconList.solidIcon
            };
        }
    };
</script>

<style scoped lang="less">
    .content {
        padding: 0 16px;
    }

    .fatherIcon {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .sonIcon {
            width: 25%;
            text-align: center;
            padding-top: 20px;
            display: inline-block;
        }
    }
</style>
