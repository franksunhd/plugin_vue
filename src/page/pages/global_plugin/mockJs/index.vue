<template>
    <div>
        <div class="marginBottom20">
            这是一个mock-js的页面.
        </div>
        <div class="marginBottom20">
            <el-button type="primary" size="mini" @click="getData">点击</el-button>
        </div>
        <div class="marginBottom20">1-10个随机★：{{arr.a}}</div>
        <div class="marginBottom20">1-100随机数：{{arr.b}}</div>
        <div class="marginBottom20">随机true/false：{{arr.c}}</div>
        <div class="marginBottom20">
            <div>随机颜色(hex)：{{arr.d}}</div>
            <div :style="{width:'100px',height:'100px',backgroundColor:arr.d}"></div>
        </div>
        <div class="marginBottom20">
            <div>随机颜色(rgb)：{{arr.e}}</div>
            <div :style="{width:'100px',height:'100px',backgroundColor:arr.e}"></div>
        </div>
        <div class="marginBottom20">
            <div>随机颜色(rgba)：{{arr.f}}</div>
            <div :style="{width:'100px',height:'100px',backgroundColor:arr.f}"></div>
        </div>
        <div class="marginBottom20">随机短文：{{str.a}}</div>
        <div class="marginBottom20">随机文章：{{str.b}}</div>
        <div class="marginBottom20">随机URL：{{str.c}}</div>
        <div class="marginBottom20">随机地址：{{str.d}}</div>
    </div>
</template>

<script>
    import mockJs from "mockjs";
    import mock from "./mock";

    export default {
        name: "index",
        data() {
            return {
                arr: {
                    a: "",
                    b: "",
                    c: "",
                    d: "",
                    e: "",
                    f: ""
                },
                str: {
                    a: "",
                    b: "",
                    c: "",
                    d: ""
                },
                list: mock.list
            };
        },
        methods: {
            getData() {
                let _t = this;
                let a = mockJs.mock({
                    "a|1-10": "★"
                });
                _t.arr.a = a.a;
                let b = mockJs.mock({
                    "number|1-100": 100
                });
                _t.arr.b = b.number;
                let c = mockJs.mock({
                    "bool|1": true
                });
                _t.arr.c = c.bool;
                _t.arr.d = mockJs.mock("@hex");
                _t.arr.e = mockJs.mock("@rgb");
                _t.arr.f = mockJs.mock("@rgba");

                _t.str.a = mockJs.mock("@paragraph");
                _t.str.b = mockJs.mock("@cparagraph");
                _t.str.c = mockJs.mock("@url");
                _t.str.d = mockJs.mock("@county(true)");
            }
        },
        created() {
            let _t = this;
            _t.getData();
            console.log(_t.list);
        }
    };
</script>

<style scoped>

</style>
