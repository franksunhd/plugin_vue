<template>
    <div id="index">
        <ul>
            <li v-if="false">地址：<a href="https://segmentfault.com/a/1190000016584946">点击查看</a></li>
            <li v-for="(item,index) of imgArr" :key="index">
                <img :src="item" alt="图片描述">
            </li>
        </ul>
    </div>
</template>

<script>
    import Viewer from "viewerjs";
    import "viewerjs/dist/viewer.css";
    import imgData from "../../../mock/index";

    export default {
        name: "viewerjs",
        data() {
            return {
                imgArr: imgData.imgUrl
            };
        },
        mounted() {
            const ViewerDom = document.getElementById("index");
            const viewer = new Viewer(ViewerDom, {
                // 相关配置项,详情见下面
            });
        }
    };
</script>

<style scoped>
    ul {
        display: flex;
        flex-wrap: wrap;
    }

    ul li {
        width: 265px;
        height: 180px;
        list-style: none;
        border: 2px solid #CCC;
        border-radius: 3px;
        padding: 1px;
        margin: 10px;
        cursor: pointer;
    }

    ul li img {
        width: 100%;
        height: 100%;
    }
</style>
