<template>
    <div class="tigerDrawBox">
        <div style="text-align: center;font-size: 30px;margin-bottom: 20px;">还可以抽奖次数：{{drawTime}}</div>
        <div style="text-align: center;font-size: 30px;margin-bottom: 20px;">抽奖结果：{{resultNum}}</div>
        <div class="tigerDraw">
            <img class="main_bg" src="../../../assets/img/helpAndDraw/main_bg.jpg" alt="">
            <div class="num_box">
                <div class="numBox">
                    <div class="num" v-for="(item,index) in list"
                         :key="index"
                         :style="{'background-position-y': + item.location + 'rem'}"></div>

                </div>
                <div class="mask"></div>
            </div>
            <img @click="runClick" class="btn_start" src="../../../assets/img/helpAndDraw/btn_start.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "tigerDraw",
        data() {
            return {
                drawTime: 10, // 还可以抽奖次数
                resultNum: "", // 抽奖结果
                isBegin: false, // 是否开始 避免重复点击
                timerArr: [], // 延时定时器组
                list: [
                    {location: 0},
                    {location: 0},
                    {location: 0},
                    {location: 0}
                ]
            };
        },
        methods: {
            // 点击开始
            runClick() {
                let _t = this;
                // 避免重复点击
                if (_t.isBegin) return false;
                // 点击之后先禁用
                _t.isBegin = true;
                // 随机结果
                _t.resultNum = _t.$randomNum(1111, 9999);
                let new_arr = _t.resultNum.toString().split("");
                let u = 3.2; // 基础比例
                _t.list.forEach((item, index) => {
                    item.location = 0;
                    let positionY = (u * 10) - (u * new_arr[index]);
                    let num = 0;
                    let speed = 200;
                    // 延时定时器
                    setTimeout(function () {
                        _t.timerArr[index] = setInterval(function () {
                            num += 10;
                            item.location = num;
                            if (num >= 1000 + index * 3000) {
                                item.location = positionY;
                                _t.isBegin = false;
                                clearInterval(_t.timerArr[index]);
                            }
                        });
                    }, index * speed);
                });
            }
        },
        destroyed() {
            let _t = this;
            _t.timerArr.forEach((item, index) => {
                clearTimeout(item);
            });
            _t.timerArr = [];
        }
    };
</script>

<style scoped>
    .tigerDrawBox {
        width: 1500px;
        margin: 0 auto;
    }

    .tigerDraw {
        font-size: 0;
        position: relative;
    }

    .main_bg {
        width: 100%;
    }

    .btn_start {
        width: 264px;
        position: absolute;
        left: 50%;
        bottom: 200px;
        z-index: 20;
        transform: translateX(-50%);
        cursor: pointer;
    }

    .num_box {
        height: 440px;
        width: 695px;
        position: absolute;
        left: 50%;
        top: 320px;
        transform: translateX(-50%);
        z-index: 8;
        overflow: hidden;
        text-align: center;
    }

    .num {
        background: url(../../../assets/img/helpAndDraw/num.png) top center / 85% repeat-y;
        width: calc(25% - 5px);
        height: 245px;
        display: inline-block;
        box-sizing: border-box;
        margin-right: 6px;
    }

    .num:last-child {
        margin-right: 0;
    }

    .mask {
        height: 138px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        background: url(../../../assets/img/helpAndDraw/num_mask.png) top center / 100% repeat-y;
    }
</style>
