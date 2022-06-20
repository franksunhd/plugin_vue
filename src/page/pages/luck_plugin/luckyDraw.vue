<template>
    <div class="luckyBox">
        <div class="luckyTitle">还可以抽奖次数{{drawTime}}</div>
        <div class="luckyTitle">中奖位置：奖品{{prize}}</div>
        <div class="drawMachineBox">
            <div class="drawMachine">
                <img class="lightBG" v-show="fresh" src="../../../assets/img/helpAndDraw/light1.png" alt="">
                <img class="lightBG" v-show="!fresh" src="../../../assets/img/helpAndDraw/light2.png" alt="">
                <div class="drawMainBox" id="drawMainBox">
                    <table>
                        <tbody>
                        <tr>
                            <td class="lottery-unit" :class="index === 1 ? 'active' : ''">
                                <div class="box">
                                    <div class="text">奖品1</div>
                                </div>
                            </td>
                            <td class="lottery-unit" :class="index === 2 ? 'active' : ''">
                                <div class="box">
                                    <div class="text">奖品2</div>
                                </div>
                            </td>
                            <td class="lottery-unit" :class="index === 3 ? 'active' : ''">
                                <div class="box">
                                    <div class="text">奖品3</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="lottery-unit" :class="index === 8 ? 'active' : ''">
                                <div class="box">
                                    <div class="text">谢谢参与</div>
                                </div>
                            </td>
                            <td class="start-btn">
                                <span class="b">立即抽奖</span>
                                <div class="box">
                                    <button class="prize_start" :disabled="drawTwice" @click="lotteryFun"></button>
                                </div>
                            </td>
                            <td class="lottery-unit" :class="index === 4 ? 'active' : ''">
                                <div class="box">
                                    <div class="text">奖品4</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="lottery-unit" :class="index === 7 ? 'active' : ''">
                                <div class="box">
                                    <div class="text">奖品7</div>
                                </div>
                            </td>
                            <td class="lottery-unit" :class="index === 6 ? 'active' : ''">
                                <div class="box">
                                    <div class="text">奖品6</div>
                                </div>
                            </td>
                            <td class="lottery-unit" :class="index === 5 ? 'active' : ''">
                                <div class="box">
                                    <div class="text">奖品5</div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- 结果弹窗 -->
        <div class="activityRulePop" v-show="resultShow">
            <!--机会用完了可邀请增加机会-->
            <div class="activityResultBox StepInAnimation" v-show="resultNum === 1">
                <div class="aNotLuckyTitle">机会用完啦</div>
                <div class="aNotLuckyButton" @click="resultBoxHideFun">关闭</div>
            </div>

            <!--未中奖有机会-->
            <div class="activityResultBox StepInAnimation" v-show="resultNum === 2">
                <div class="aNotLuckyTitle">很遗憾未中奖</div>
                <div class="aNotLuckyButton" @click="resultBoxHideFun">再玩一次</div>
            </div>

            <!--中奖-->
            <div class="activityResultBox StepInAnimation" v-show="resultNum === 3">
                <div class="aNotLuckyTitle">恭喜您已中奖</div>
                <div class="aNotLuckyButton" @click="resultBoxHideFun">关闭</div>
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
                drawTwice: false, // 抽奖防止二次点击

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
                let _t = this;
                _t.lightTimer = setInterval(function () {
                    _t.fresh = !_t.fresh;
                }, 800);
            },
            // 抽奖方法
            lotteryFun() {
                let _t = this;
                // 避免重复点击
                if (_t.drawTwice) return false;
                // 点击了一次 再点击就会禁用, 有了抽奖结果之后再置为 false
                _t.drawTwice = true;
                // 次数用完了 显示弹窗
                if (_t.drawTime <= 0) {
                    _t.resultShow = true; // 先显示 弹窗
                    _t.resultNum = 1; // 1代表次数用完
                    _t.drawTwice = false; // 取消重复点击限制
                } else {
                    // 次数没用完 次数减1
                    _t.drawTime -= 1;
                    // 新的中奖位置
                    _t.prize = _t.$randomNum(1, 8);
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
                        _t.drawTwice = false;
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
        },
        destroyed() {
            clearInterval(this.lightTimer);
            this.lightTimer = null;
        }
    }
</script>

<style scoped>
    .drawMachineBox {
        width: 700px;
        height: 600px;
        border-radius: 20px;
        background-color: var(--errorColor);
        margin: 0 auto;
    }

    .luckyTitle {
        text-align: center;
        font-size: 30px;
        margin-bottom: 20px;
    }

    .drawMachine {
        position: relative;
        width: 100%;
        height: 98%;
        background: var(--circleColor);
        border-radius: 20px;
        margin: 0 auto;
    }

    .lightBG {
        width: 98%;
        height: 98%;
        margin: 1%;
    }

    .drawMainBox {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 85%;
        height: 85%;
        background: var(--menuCurrentBg);
        border-radius: 20px;
        padding: 10px 0 0 10px;
        box-sizing: border-box;
    }

    .drawMainBox table {
        width: 100%;
        height: 100%;
        font-size: 0;
        border: none;
    }

    .drawMainBox table tr {
        text-align: center;
        vertical-align: middle;
    }

    .drawMainBox td {
        width: calc(33.333% - 10px);
        height: calc(100% - 10px);
        margin: 0 10px 10px 0;
        text-align: center;
        position: relative;
        box-sizing: border-box;
        display: inline-block;
    }

    .drawMainBox td .box {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background: var(--mainColor);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .drawMainBox td .box:before {
        content: '';
        width: 100%;
        height: 90%;
        border-radius: 20px;
        background: var(--whiteColor);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .drawMainBox td .box .text {
        width: 100%;
        font-size: 30px;
        color: var(--errorColor);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
    }

    .drawMainBox td .prize_start {
        display: block;
        position: absolute;
        z-index: 10;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background: transparent;
    }

    .drawMainBox .active .box {
        background: var(--boxColor);
    }

    .drawMainBox .active .box:before {
        background: var(--boxActiveColor);
    }

    .drawMainBox .start-btn .b {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        color: var(--whiteColor);
        font-size: 30px;
        font-weight: bold;
        display: inline-block;
    }

    .drawMainBox .start-btn .box {
        background: var(--errorColor);
    }

    .drawMainBox .start-btn .box:before {
        background: linear-gradient(180deg, rgba(255, 218, 81, 1) 0%, rgba(255, 104, 0, 1) 100%);
    }

    .drawMainBox .start-btn .box {
        color: var(--boxActiveColor);
        font-size: 20px;
        width: 100%;
        height: 100%;
        text-align: center;
        position: absolute;
        border-radius: 20px;
        background: var(--errorColor);
    }

    /* 弹窗部分 */
    .activityRulePop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--opacityBlackColor);
    }

    .activityResultBox {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        height: 500px;
        background: linear-gradient(135deg, rgba(255, 151, 81, 1) 0%, rgba(255, 72, 51, 1) 100%);
        border-radius: 20px;
        text-align: center;
    }

    .StepInAnimation {
        animation-name: slideInUp, slideInDownBack;
        animation-duration: 0.2s, 0.18s;
        animation-timing-function: linear, linear;
        animation-delay: 0s, 0.2s;
        animation-iteration-count: 1, 1;
        animation-fill-mode: forwards, forwards;
    }

    .aNotLuckyButton {
        position: absolute;
        width: 80%;
        height: 60px;
        line-height: 60px;
        left: 50%;
        bottom: 5%;
        transform: translateX(-50%);
        font-size: 30px;
        color: var(--whiteColor);
        text-align: center;
        background: linear-gradient(360deg, rgba(253, 130, 44, 1) 0%, rgba(255, 233, 56, 1) 100%);
        box-shadow: 5px 5px 0 var(--conChildTitleColor);
        border-radius: 20px;
    }

    .aNotLuckyTitle {
        margin-top: 50px;
        color: var(--whiteColor);
        font-size: 30px;
        font-weight: bold;
    }
</style>
