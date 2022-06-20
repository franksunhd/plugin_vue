<template>
    <div class="pdfBox">
        <pdf ref="pdf"
             :src="url"
             :page="pageNum"
             :rotate="pageRotate"
             @click="nextPage"
             @progress="progress($event)"
             @page-loaded="pageLoaded($event)"
             @num-pages="pageTotalNum=$event"
             @error="pdfError($event)"
             @link-clicked="page = $event"/>
        <div class="pdf-tab">
            <el-button type="default" @click.stop="prePage">
                上一页
            </el-button>
            <el-button type="primary" @click.stop="nextPage">
                下一页
            </el-button>
            <el-button type="warning" @click.stop="clock">
                顺时针
            </el-button>
            <el-button type="default" @click.stop="counterClock">
                逆时针
            </el-button>
            <el-button type="primary" @click="scaleD">
                放大
            </el-button>
            <el-button class="default" @click="scaleX">
                缩小
            </el-button>
            <div>{{ pageNum }}/{{ pageTotalNum }}</div>
            <div>加载: {{ curPageNum }}</div>
        </div>
    </div>
</template>

<script>
    import pdf from "vue-pdf";

    export default {
        name: "vuePdf",
        components: {pdf},
        data() {
            return {
                url: "http://image.cache.timepack.cn/nodejs.pdf",
                pageNum: 1,
                pageTotalNum: 1,
                pageRotate: 0,
                // 加载进度
                loadedRatio: 0,
                curPageNum: 0,
                isLoading: false,
                scale: 100, //放大系数
            };
        },
        methods: {
            // 上一页
            prePage() {
                let p = this.pageNum;
                p = p > 1 ? p - 1 : this.pageTotalNum;
                this.pageNum = p;
            },
            // 下一页
            nextPage() {
                let p = this.pageNum;
                p = p < this.pageTotalNum ? p + 1 : 1;
                this.pageNum = p;
            },
            // 顺时针
            clock() {
                this.pageRotate += 90;
            },
            // 逆时针
            counterClock() {
                this.pageRotate -= 90;
            },
            // 放大
            scaleD() {
                this.scale += 5;
                this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
            },
            // 缩小
            scaleX() {
                if (this.scale === 100) {
                    return;
                }
                this.scale += -5;
                this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
            },
            // 当前进度
            progress(e) {
                this.loadedRatio = e;
                if (this.loadedRatio === 1) {
                    this.isLoading = false;
                }
            },
            // 当前加载页
            pageLoaded(e) {
                this.curPageNum = e;
            },
            // 加载出错
            pdfError(error) {
                console.error(error);
            }
        },
        mounted() {
            this.isLoading = true;
        }
    };
</script>

<style scoped lang="less">
    .pdfBox {
        width: 100%;
        height: 100%;
        padding: 0 10%;
        margin: 0 auto;
        overflow: auto;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
    }

    .pdf-tab {
        position: absolute;
        left: 10%;
        width: 80%;
        bottom: 20px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
    }
</style>
