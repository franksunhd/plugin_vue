<template>
    <div class="rotaryDrawBox">
        <div class="title">还可以抽奖次数{{drawTime}}</div>
        <!-- 转盘转 -->
        <div class="wheel_wp">
            <div class="wheel_wp_top">
                <!-- 转盘背景 -->
                <img class="bg" src="../../../assets/img/helpAndDraw/s-dial_bg.png" alt="">
                <!-- 转盘指针 -->
                <div class="wheel_pointer"
                     @click="start(1)"
                     :style="{'-webkit-transform':'rotate(' + (formItem.mode === 1 ? formItem.deg : 0) +'deg) translateZ(0)','transform':'rotate('+ (formItem.mode === 1 ? formItem.deg : 0) +'deg) translateZ(0)'}">
                    <img class="point" src="https://tweapp.top1buyer.com/s-dial_pointer.png?v=1" alt=""/>
                </div>
            </div>
            <!-- 指针转 -->
            <div class="wheel_wp_top">
                <!-- 转盘背景 -->
                <img class="bg"
                     :style="{'-webkit-transform':'rotate(' + (formItem.mode === 2 ? -formItem.deg : 0) +'deg) translateZ(0)','transform':'rotate('+ (formItem.mode === 2 ? -formItem.deg : 0) +'deg) translateZ(0)'}"
                     src="../../../assets/img/helpAndDraw/s-dial_bg.png" alt="">
                <!-- 转盘指针 -->
                <div class="wheel_pointer" @click="start(2)">
                    <img class="point" src="https://tweapp.top1buyer.com/s-dial_pointer.png?v=1" alt=""/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "rotaryDraw",
        data() {
            return {
                drawTime: 10, // 抽奖次数
                // 表单对象
                formItem: {
                    deg: 0, // 旋转的角度
                    singleAngle: 0, // 每片扇形的角度
                    isStart: false, // 是否已经开始
                    mode: 1, // 1：转盘转 2：指针转
                    speed: 16, // 速度
                    areaNumber: 6, // 奖品区域数量
                    disabled: false, // 是否禁用
                },
                timer: null,
            }
        },
        methods: {
            // 初始化数据
            initData() {
                let _this = this;
                _this.formItem.singleAngle = 360 / _this.formItem.areaNumber; // 转盘区域数量
            },
            start(flag) {
                let _this = this;
                _this.formItem.mode = flag;
                // 如果已经抽过奖了
                if (_this.formItem.isStart) {
                    _this.$message({
                        type: 'warning',
                        message: '已经抽过奖了哦',
                    });
                    return false;
                }
                _this.formItem.isStart = true; // 没开始 设置标识开始
                let awardNumber = _this.randomNum(1, _this.formItem.areaNumber); // 中奖区域
                let singleAngle = _this.formItem.singleAngle; // 每片扇形的角度
                let endAddAngle = (awardNumber - 1) * singleAngle + (singleAngle / 2) + 360; // 中奖角度
                const rangeAngle = (Math.floor(Math.random() * 4) + 4) * 360; // 随机旋转几圈再停止
                let cAngle;
                _this.formItem.deg = 0;
                _this.formItem.speed = 16;
                _this.timer = setInterval(() => {
                    if (_this.formItem.deg < rangeAngle) {
                        _this.formItem.deg += _this.formItem.speed;
                    } else {
                        cAngle = (endAddAngle + rangeAngle - _this.formItem.deg) / _this.formItem.speed;
                        cAngle = cAngle > _this.formItem.speed ? _this.formItem.speed : cAngle < 1 ? 1 : cAngle;
                        _this.formItem.deg += cAngle;
                        if (_this.formItem.deg >= (endAddAngle + rangeAngle)) {
                            _this.formItem.deg = (endAddAngle + rangeAngle);
                            _this.formItem.isStart = false;
                            clearInterval(_this.timer);
                            switch (awardNumber) {
                                case 1:
                                    _this.$alert('恭喜你获得10金币');
                                    break;
                                case 2:
                                    _this.$alert('恭喜你获得20金币');
                                    break;
                                case 3:
                                    _this.$alert('恭喜你获得30金币');
                                    break;
                                case 4:
                                    _this.$alert('恭喜你获得50金币');
                                    break;
                                case 5:
                                    _this.$alert('恭喜你获得80金币');
                                    break;
                                case 6:
                                    _this.$alert('恭喜你获得200金币');
                                    break;
                                default:
                                    _this.$alert('很遗憾没有中奖');
                                    break;
                            }
                        }
                    }
                }, 1000 / 60);
            },
            // 生成随机数的方法
            randomNum(Min, Max) {
                let Range = Max - Min;
                let Rand = Math.random();
                return Min + Math.round(Rand * Range); // 四舍五入
            },
        },
        created() {
            this.initData();
        }
    }
</script>

<style scoped>
    .rotaryDrawBox {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .rotaryDrawBox .title {
        text-align: center;
        font-size: 30px;
        margin-bottom: 20px;
        animation: show_location 50s infinite linear;
    }

    .wheel_wp {
        display: flex;
        flex-direction: row;
    }

    .wheel_wp_top {
        flex: 1;
        position: relative;
        font-size: 0;
    }

    .wheel_wp_top .wheel_pointer {
        font-size: 0;
        width: 154px;
        height: 190px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -93px;
        margin-left: -85px;
    }

    .wheel_wp_top .wheel_pointer img.point {
        width: 100%;
        height: 100%;
    }

    @keyframes show_location {
        0% {
            transform: translateX(0);
        }

        25% {
            transform: translateX(500px);
        }

        50% {
            transform: translateX(0);
        }

        75% {
            transform: translateX(-500px);
        }

        100% {
            transform: translateX(0);
        }
    }
</style>
