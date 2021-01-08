<template>
    <div id="waterfallBox" class="waterfallBox">
        <p style="color: red;"><strong>共有图片总数为：{{dataList.length}}</strong></p>
        <p style="color: #00a1d6;"><strong>当前显示的图片总数为：{{imgArr.length}}</strong></p>
        <div style="flex: 1;">
            <vue-waterfall-easy
                :imgsArr="imgArr"
                :gap="20"
                :maxCols="20"
                :imgWidth="250"
                :loadingDotCount="0"
                @scrollLoadImg="fetchImgData">
                <div slot-scope="props">
                    <div class="tip size" v-html="props.value.link"></div>
                    <div class="tip">{{props.value.info}}</div>
                </div>
            </vue-waterfall-easy>
        </div>
    </div>
</template>

<script>
    import vueWaterfallEasy from "vue-waterfall-easy";
    import mockList from "../../../mock/index";

    export default {
        name: "waterfall",
        components: {vueWaterfallEasy},
        data() {
            return {
                imgArr: [],         //存放所有已加载图片的数组（即当前页面会加载的所有图片）
                fetchImgArr: [],     //存放每次滚动时下一批要加载的图片的数组
                allNum: 0, // 预加载的数据条数
                pageSize: 10, // 步频
                dataList: mockList.imgUrl // 总的图片的数据
            };
        },
        methods: {
            // 初始化图片数组的方法，把要加载的图片装入
            initImgArr(n, m) {
                let _t = this;
                let arr = [];
                for (let i = n; i < m; i++) {
                    if (_t.dataList[i]) {
                        console.log("i----", i);
                        arr.push({
                            index: i + 1,
                            src: _t.dataList[i],  //src为加载的图片的地址
                            link: `这是第<strong>${i + 1}</strong>张图片`, // link为超链接的链接地址
                            info: "一些图片描述文字" // info为自定义的图片展示信息，请根据自己的情况自行填写
                        });
                    }
                }
                return arr;
            },
            // 获取新的图片数据的方法，用于页面滚动满足条件时调用
            fetchImgData() {
                let _t = this;
                // 数组拼接，把下一批要加载的图片放入所有图片的数组中
                if (_t.dataList.length !== _t.imgArr.length) {
                    _t.imgArr = _t.imgArr.concat(_t.fetchImgArr);
                }
                let oldNum = _t.allNum;
                _t.allNum = oldNum + _t.pageSize > _t.dataList.length ? _t.dataList.length : oldNum + _t.pageSize;
                console.log("oldNum----", oldNum, "newNum---", _t.allNum);
                // 模拟每次请求的下一批新的图片的数据数据
                _t.fetchImgArr = _t.initImgArr(oldNum, _t.allNum);
                console.log("fetchImgArr---", _t.fetchImgArr);
            }
        },
        mounted() {
            let _t = this;
            // 初始化第一次（即页面加载完毕时）要加载的图片数据
            _t.fetchImgArr = _t.initImgArr(0, _t.allNum + _t.pageSize);
            _t.allNum = _t.allNum + _t.pageSize > _t.dataList.length ? _t.dataList.length : _t.allNum + _t.pageSize;
            document.body.onclick = function () {
                console.log("--点击了屏幕--");
                _t.fetchImgData();
            };
            document.body.click();
        }
    };
</script>

<style scoped lang="less">
    .waterfallBox {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        p {
            text-align: center;
            font-size: 30px;
            line-height: 60px;
        }

        /deep/ .vue-waterfall-easy-container {

            .vue-waterfall-easy {
            }

            .ball-beat {
                width: 100%;
            }
        }

        .tip {
            word-wrap: break-word;
            white-space: normal;
            word-break: break-all;
            padding-bottom: 10px;
        }

        .size {
            font-size: 30px;
        }
    }

</style>
