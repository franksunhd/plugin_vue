<template>
    <div>
        <el-divider content-position="left">画布区域</el-divider>
        <!-- 画布区域 -->
        <div class="drawImgBox" ref="drawImg">
            <ul class="a">
                <li v-for="(item,index) in list" :key="index">选项{{item+1}}</li>
            </ul>
        </div>
        <el-divider content-position="left">显示区域</el-divider>
        <div class="showImgBox">
            <img :src="imgUrl" alt="">
        </div>
    </div>
</template>

<script>
    import html2canvas from "html2canvas";

    export default {
        name: "htmlToCanvas",
        data() {
            return {
                imgUrl: "", // 图片地址
                list: [],
                timer: null
            };
        },
        methods: {
            // 点击绘图按钮
            drawImg() {
                let _t = this;
                html2canvas(_t.$refs.drawImg, {
                    logging: true, // 启用日志记录以进行调试 (发现加上对去白边有帮助)
                    allowTaint: true, // 否允许跨源图像污染画布
                    backgroundColor: null, // 解决生成的图片有白边
                    useCORS: true // 如果截图的内容里有图片,解决文件跨域问题
                }).then((canvas) => {
                    _t.imgUrl = canvas.toDataURL("image/png");
                });
            },
            dealWith() {
                let _this = this;
                let len = _this.$randomNum(5, 15);
                _this.list = [];
                _this.imgUrl = "";
                let list = [];
                for (let i = 0; i < len; i++) {
                    list.push(i);
                }
                _this.list = list;
                _this.$nextTick(() => {
                    _this.drawImg();
                });
            }
        },
        created() {
            let _this = this;
            _this.timer = setInterval(function () {
                _this.dealWith();
            }, 3000);
        },
        destroyed() {
            clearInterval(this.timer);
            this.timer = null;
        }
    };
</script>

<style scoped lang="less">
    .drawImgBox {
        background-color: #fff;
    }

    .drawImgBox .a {
        line-height: 30px;
        text-align: center;
        color: #229399;
    }

    .showImgBox {
        width: 100%;
        padding: 15px;
        box-sizing: border-box;
        background-color: #6ce26c;

        img {
            width: 100%;
        }
    }
</style>
