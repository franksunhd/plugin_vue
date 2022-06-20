<template>
    <div class="homeBox">
        <div class="marginBottom20">
            <div class="title" style="height: auto !important;">
                <span class="marginRight50">{{$t("isLanguage")}}：{{navigatorItem.language}}</span>
                <span class="marginRight50">{{$t("isToCookies")}}：{{navigatorItem.cookieEnabled}}</span>
                <span class="marginRight50">{{$t("isOnLine")}}：{{navigatorItem.onLine}}</span>
            </div>
        </div>
        <p>本项目主要针对vue常用的一些插件进行展示,并附带了插件对应的API文档.</p>
        <p class="marginBottom20">具体包含了以下插件：</p>
        <div class="marginBottom20" v-for="(item,index) in menuList" :key="index">
            <div class="title" v-if="item.name !== '首页'">{{item.name}}</div>
            <template v-if="item.children">
                <div @click="clickTo(val)" class="childrenTitle" v-for="(val,i) in item.children" :key="i">
                    {{val.name}}
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import menu from "../../mock/index";

    export default {
        name: "Home",
        data() {
            return {
                menuList: [],
                navigatorItem: {}
            };
        },
        methods: {
            // 点击跳转页面
            clickTo(val) {
                this.$router.push({path: val.path});
            }
        },
        created() {
            this.menuList = menu.menuList;
            this.navigatorItem = navigator;
            console.log(navigator);
        }
    };
</script>

<style scoped>
    .homeBox {
        line-height: 30px;
    }

    .homeBox p {
        font-size: 20px;
    }

    .title,
    .childrenTitle {
        line-height: 40px;
        height: 40px;
        font-size: 24px;
    }

    .title {
        color: var(--conTitleColor);
    }

    .childrenTitle {
        display: inline-block;
        margin-left: 30px;
        color: var(--conChildTitleColor);
        cursor: pointer;
    }
</style>
