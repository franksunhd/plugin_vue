<template>
    <div class="homeBox">
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
    import menu from "../../assets/js/menu";

    export default {
        name: 'Home',
        data() {
            return {
                menuList: []
            }
        },
        methods: {
            // 点击跳转页面
            clickTo(val) {
                this.$router.push({path: val.path});
            }
        },
        created() {
            this.menuList = menu.menuList;
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
        color: #2D64B3;
    }

    .childrenTitle {
        display: inline-block;
        margin-left: 30px;
        color: #9cb945;
        cursor: pointer;
    }
</style>
