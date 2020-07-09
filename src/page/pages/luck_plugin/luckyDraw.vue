<template>
    <div class="luckyBox">
        <div style="text-align: center;font-size: 30px;margin-bottom: 20px;">还可以抽奖次数{{drawTime}}</div>
        <div class="HDdrawMachineBox">
            <div class="HDdrawMachine">
                <img class="HDLightBG" v-show="fresh" src="../../../assets/img/helpAndDraw/HDlight1.png" alt="">
                <img class="HDLightBG" v-show="!fresh" src="../../../assets/img/helpAndDraw/HDlight2.png" alt="">
                <div class="HDdrawMainBox" id="HDdrawMainBox">
                    <table border="0" cellpadding="0" cellspacing="0">
                        <tbody>
                        <tr>
                            <td class="lottery-unit" :class="index === 1 ? 'active' : ''">
                                <div class="prizeListImg"></div>
                                <div class="box"><em class="name">奖品1</em></div>
                            </td>
                            <td class="lottery-unit" :class="index === 2 ? 'active' : ''">
                                <div class="prizeListImg"></div>
                                <div class="box"><em class="name">奖品2</em></div>
                            </td>
                            <td class="lottery-unit" :class="index === 3 ? 'active' : ''">
                                <div class="prizeListImg"></div>
                                <div class="box"><em class="name">奖品3</em></div>
                            </td>
                        </tr>
                        <tr>
                            <td class="lottery-unit" :class="index === 8 ? 'active' : ''">
                                <div class="prizeListImg"></div>
                                <div class="box"><em class="name">谢谢参与</em></div>
                            </td>
                            <td class="start-btn1" v-if="!HDActStatus">
                                <span class="b">立即抽奖1</span>
                                <div class="box">
                                    <button class="prize_start1" :disabled="!HDActStatus"></button>
                                </div>
                            </td>
                            <td class="start-btn" v-else>
                                <span class="b">立即抽奖2</span>
                                <div class="box">
                                    <button class="prize_start" :disabled="drawtwice" @click="lotteryFun"></button>
                                </div>
                            </td>
                            <td class="lottery-unit" :class="index === 4 ? 'active' : ''">
                                <div class="prizeListImg"></div>
                                <div class="box"><em class="name">奖品4</em></div>
                            </td>
                        </tr>
                        <tr>
                            <td class="lottery-unit" :class="index === 7 ? 'active' : ''">
                                <div class="prizeListImg"></div>
                                <div class="box"><em class="name">奖品7</em></div>
                            </td>
                            <td class="lottery-unit" :class="index === 6 ? 'active' : ''">
                                <div class="prizeListImg"></div>
                                <div class="box"><em class="name">奖品6</em></div>
                            </td>
                            <td class="lottery-unit" :class="index === 5 ? 'active' : ''">
                                <div class="prizeListImg"></div>
                                <div class="box"><em class="name">奖品5</em></div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- 结果弹窗 -->
        <div class="HDActivityRulePop" v-show="resultShow">
            <!--机会用完了可邀请增加机会-->
            <div class="HDActivityResultBox StpeInAnimation" v-show="resultNum === 1">
                <div class="HDANotLuckyTitle">机会用完啦</div>
                <div class="HDANotLuckyButton" @click="resultBoxHideFun">关闭</div>
            </div>

            <!--未中奖有机会-->
            <div class="HDActivityResultBox StpeInAnimation" v-show="resultNum === 2">
                <div class="HDANotLuckyTitle">很遗憾未中奖</div>
                <div class="HDANotLuckyButton" @click="resultBoxHideFun">再玩一次</div>
            </div>

            <!--中奖-->
            <div class="HDActivityResultBox StpeInAnimation" v-show="resultNum === 3">
                <div class="HDANotLuckyTitle">恭喜您已中奖</div>
                <div class="HDANotLuckyButton" @click="resultBoxHideFun">关闭</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "luckyDraw",
        data() {
            return {
                fresh: true, // 跑马灯循环展示
                lightTimer: null, // 跑马灯定时器
                timer: null, // 转盘定时器
                alertTimer: null, // alert弹窗定时器
                HDActStatus: false, // 活动状态
                drawtwice: false, // 抽奖防止二次点击

                drawTime: 10, // 还可以抽奖次数
                resultShow: false, // 是否显示结果弹窗
                resultNum: 0, // 结果弹窗类型
                prize: 0, // 中奖位置  (接口返回)
                index: 0, // 当前转动到哪个位置，起点位置
                count: 8, // 总共有多少个位置
                speed: 200, // 初始转动速度

                times: 0, // 转动次数
                cycle: 50, // 转动基本次数：即至少需要转动多少次再进入抽奖环节, 也就是前边的动画
            }
        },
        methods: {
            /* 跑马灯 */
            lightFun() {
                let _t = this
                _t.lightTimer = setInterval(function () {
                    _t.fresh = !_t.fresh;
                }, 800);
            },
            // 抽奖方法
            lotteryFun() {
                let _t = this;
                // 避免重复点击
                if (_t.drawtwice) return false;
                // 点击了一次 再点击就会禁用, 有了抽奖结果之后再置为 false
                _t.drawtwice = true;
                // 次数用完了 显示弹窗
                if (_t.drawTime <= 0) {
                    _t.resultShow = true; // 先显示 弹窗
                    _t.resultNum = 1; // 1代表次数用完
                    _t.drawtwice = false; // 取消重复点击限制
                } else {
                    // 次数没用完 次数减1
                    _t.drawTime -= 1;
                    // 新的中奖位置
                    _t.prize = _t.randomNum(1, 8);
                    console.log('中奖位置---' + _t.prize);
                    // 重新抽奖
                    _t.activityRoll();
                }
            },
            // 定时器转盘
            activityRoll() {
                let _t = this;
                _t.times += 1;
                _t.roll(); // 转动过程调用的是roll方法,这里是第一次调用初始化
                // 转动次数大于 预先设置的次数 加 10(最后中奖减速动画转10次), 并且 中奖位置和当前位置相同
                if (_t.times > _t.cycle + 10 && _t.prize === _t.index) {
                    // 清除定时器
                    clearTimeout(_t.timer);
                    _t.prize = 0; // 中奖位置初始化
                    _t.times = 0; // 转动次数初始化
                    _t.speed = 200; // 转动速度初始化
                    // 延迟显示弹窗
                    clearTimeout(_t.alertTimer);
                    _t.alertTimer = null;
                    _t.alertTimer = setTimeout(function () {
                        if (_t.index !== 8) {
                            // 3: 中奖了
                            _t.resultNum = 3;
                        } else {
                            // 2: 未中奖 还有机会
                            _t.resultNum = 2;
                        }
                        _t.resultShow = true;
                        _t.drawtwice = false;
                    }, 500);
                } else {
                    // 动画阶段 还没进入抽奖
                    if (_t.times < _t.cycle) {
                        // 起步动画加快
                        _t.speed -= 10;
                    } else {
                        if (_t.times > _t.cycle + 10 && (_t.prize === 1 && _t.index === 8) || _t.prize === _t.index) {
                            _t.speed += 110;
                        } else {
                            _t.speed += 20;
                        }
                    }

                    // 控制速度不能小于40
                    if (_t.speed < 40) {
                        _t.speed = 40;
                    }
                    // 循环调用
                    _t.timer = setTimeout(_t.activityRoll, _t.speed);
                }
            },
            // 添加删除类名的方法
            roll() {
                let _t = this;
                let index = _t.index;
                index += 1;
                if (index > _t.count) {
                    index = 1;
                }
                _t.index = index;
            },
            // 生成随机数的方法
            randomNum(Min, Max) {
                let Range = Max - Min;
                let Rand = Math.random();
                let num = Min + Math.round(Rand * Range); // 四舍五入
                return num;
            },
            // 再玩一次
            resultBoxHideFun() {
                let _t = this;
                _t.resultShow = false;
                _t.resultNum = 0;
            },
        },
        mounted() {
            let _t = this;
            // 开启跑马灯定时器
            _t.lightFun();
            // 活动中
            _t.HDActStatus = true;
        },
        destroyed() {
            clearInterval(this.lightTimer);
            this.lightTimer = null;
        }
    }
</script>

<style scoped>
    .HDdrawMachineBox {
        width: 9.04rem;
        height: 7.706666666666667rem;
        border-radius: 0.26666666666666666rem;
        background-color: #B43A11;
        margin: 0 auto;
    }

    .HDdrawMachine {
        position: relative;
        width: 9.04rem;
        height: 7.52rem;
        background: rgba(254, 213, 72, 1);
        border-radius: 0.26666666666666666rem;
        margin: 0 auto;
    }

    .HDLightBG {
        width: 8.906666666666666rem;
        height: 7.386666666666667rem;
        margin: 0.06666666666666667rem;
    }

    .HDdrawMainBox {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8.133333333333333rem;
        height: 6.613333333333333rem;
        background: rgba(234, 84, 33, 1);
        border-radius: 0.26666666666666666rem;
        padding: 0.08rem 0 0 0.08rem;
        box-sizing: border-box;
    }

    .HDdrawMainBox td {
        width: 2.6133333333333333rem;
        height: 2.1066666666666665rem;
        text-align: center;
        vertical-align: middle;
        position: relative;
        box-sizing: border-box;
        margin-right: 0.062rem;
        margin-bottom: 0.06666666666666667rem;
        display: inline-block;
    }

    .HDdrawMainBox td img {
        max-width: 34%;
        max-height: 0.9rem;
        position: relative;
        top: 0.05rem;
        z-index: 10;
    }

    .HDdrawMainBox td .prizeListImg {
        width: 1.46666666667rem;
        height: 0.88rem;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        position: relative;
        top: 0.24rem;
        z-index: 10;
        left: 50%;
        transform: translateX(-50%);
    }

    .HDdrawMainBox td .box {
        width: 2.6133333333333333rem;
        height: 2.1066666666666665rem;
        margin: 0 auto;
        overflow: hidden;
        border-radius: 0.26666666666666666rem;
        background: #ffbfbf;
        position: absolute;
        top: 0;
    }

    .HDdrawMainBox td .box:before {
        content: '';
        width: 100%;
        height: 1.8666666666666667rem;
        border-radius: 0.26666666666666666rem;
        background: #ffeeee;
        position: absolute;
        top: 0;
        left: 0;
    }

    .HDdrawMainBox td .name {
        color: #d80015;
        font-size: 0.32rem;
        display: block;
        width: 95%;
        text-align: center;
        position: absolute;
        left: 50%;
        bottom: 0.43rem;
        transform: translateX(-50%);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .HDdrawMainBox td .prize_start {
        display: block;
        position: absolute;
        z-index: 10;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background: transparent;
    }

    .HDdrawMainBox .active .box {
        background: #ffd213;
    }

    .HDdrawMainBox .active .box:before {
        background: #ffe462;
    }

    .HDdrawMainBox .start-btn {
        padding-bottom: 0.4rem;
    }

    .HDdrawMainBox .start-btn .b {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        color: #ffffff;
        font-size: 0.48rem;
        font-weight: bold;
        display: block;
        width: 100%;
    }

    .HDdrawMainBox .start-btn .box {
        background: #C74000;
    }

    .HDdrawMainBox .start-btn .box:before {
        background: linear-gradient(180deg, rgba(255, 218, 81, 1) 0%, rgba(255, 104, 0, 1) 100%);
    }

    .HDdrawMainBox .start-btn .box .text {
        color: #ffe461;
        font-size: 0.26666666666666666rem;
        width: 2.16rem;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        position: absolute;
        bottom: 0.4rem;
        left: 50%;
        margin-left: -1.08rem;
        display: block;
        border-radius: 0.6rem;
        background: #db2332;
    }

    .HDdrawMainBox .start-btn1 {
        padding-bottom: 0.4rem;
    }

    .HDdrawMainBox .start-btn1 .b {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        color: #ff975d;
        font-size: 0.48rem;
        font-weight: bold;
        display: block;
        width: 100%;
    }

    .HDdrawMainBox .start-btn1 .box {
        background: #C74000;
    }

    .HDdrawMainBox .start-btn1 .box:before {
        background: #F96615;
    }

    .HDdrawMainBox .start-btn1 .box .text {
        color: #ffe461;
        font-size: 0.26666666666666666rem;
        width: 2.16rem;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        position: absolute;
        bottom: 0.4rem;
        left: 50%;
        margin-left: -1.08rem;
        display: block;
        border-radius: 0.6rem;
        background: #ff975d;
    }

    .HDActivityRulePop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
    }

    .HDActivityResultBox {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -4.4rem;
        margin-left: -3.933333333333333rem;
        width: 7.866666666666666rem;
        height: 8.8rem;
        background: linear-gradient(135deg, rgba(255, 151, 81, 1), 0, rgba(255, 72, 51, 1) 100%);
        border-radius: 0.26666666666666666rem;
        text-align: center;
    }

    .StpeInAnimation {
        animation-name: slideInUp, slideInDownBack;
        animation-duration: 0.2s, 0.18s;
        animation-timing-function: linear, linear;
        animation-delay: 0s, 0.2s;
        animation-iteration-count: 1, 1;
        animation-fill-mode: forwards, forwards;
    }

    .HDActivityResult {
        font-size: 0.56rem;
        color: #ffffff;
        line-height: 1;
        margin-bottom: 0.32rem;
    }

    .HDActivityResultText {
        font-size: 0.4533333333333333rem;
        color: #ffffff;
        line-height: 1;
        margin-bootm: 0.72rem;
    }

    .HDANotLuckyButton {
        position: absolute;
        bottom: 0.6666666666666666rem;
        left: 50%;
        margin-left: -3.1333333333333333rem;
        font-size: 0.4533333333333333rem;
        color: #ffffff;
        width: 6.266666666666667rem;
        height: 1.0666666666666667rem;
        line-height: 1.0666666666666667rem;
        text-align: center;
        background: linear-gradient(360deg, rgba(253, 130, 44, 1) 0%, rgba(255, 233, 56, 1) 100%);
        box-shadow: 0rem 0.05333333333333334rem 0.16rem 0rem rgba(211, 114, 35, 0.67);
        border-radius: 0.6666666666666666rem;
    }

    .HDANotLuckyTitle {
        margin-top: 1.0666666666666667rem;
        color: #ffffff;
        font-size: 0.56rem;
        font-weight: bold;
    }

    .HDANotLuckyText {
        font-size: 0.4rem;
        color: #ffffff;
    }
</style>
