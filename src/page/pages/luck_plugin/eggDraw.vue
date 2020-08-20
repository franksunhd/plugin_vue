<template>
    <div class="niu_danBox">
        <div class="niu_dan">
            <!--机器-->
            <div class="game_qu">
                <!--go-->
                <div class="game_go" @click="beginGame">{{drawItem.everyNum}}/次</div>
                <div class="game_num">{{drawItem.totalNum}}</div>
            </div>
            <!--球-->
            <div class="dan_gun">
                <span
                    v-for="(item,index) in 11"
                    :key="index"
                    :class="'qiu_' + item +
                     (drawItem.clearLocation ? ' wieyi_' + item : ' ') + (drawItem.isShowDown ? ' diaol_' + item : '')"></span>
            </div>
            <!--中奖掉落-->
            <div class="menDong">
                <img src="../../../assets/img/eggDraw/mendong.png" alt="">
            </div>
            <!---->
            <div class="zjdl" :class="level ? 'dila_Y' : ''">
                <span v-if="drawItem.prizeLevel === 1" class="diaL_one"></span>
                <span v-if="drawItem.prizeLevel === 2" class="diaL_two"></span>
                <span v-if="drawItem.prizeLevel === 3" class="diaL_three"></span>
                <span v-if="drawItem.prizeLevel === 4" class="diaL_four"></span>
            </div>
        </div>
        <!--结果弹窗-->
        <div class="zonj_zezc" v-if="isShowToast">
            <div class="jpzs tc_anima">
                <div @click="closeToast" class="closeBox">
                    <img src="../../../assets/img/eggDraw/close.png" alt="">
                </div>
                <h2 v-if="prizeLevel === 1">
                    <b>恭喜你！<br>获得一等奖！</b>
                </h2>
                <h2 v-if="prizeLevel === 2">
                    <b>恭喜你！<br>获得二等奖！</b>
                </h2>
                <h2 v-if="prizeLevel === 3">
                    <b>恭喜你！<br>获得三等奖！</b>
                </h2>
                <h2 v-if="prizeLevel === 0">
                    咦？没有抽中？
                </h2>
                <h2 v-if="prizeLevel === -1">
                    对不起，积分不足！
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "eggDraw",
        data() {
            return {
                prizeLevel: 0, // 中奖等级
                isShowToast: false, // 是否显示弹窗
                // 抽奖集合
                drawItem: {
                    totalNum: 10000, //总积分
                    everyNum: 100, // 每次抽奖消耗积分
                    isStart: false, // 是否开始
                    clearLocation: false, // 是否清除位移
                    isShowDown: false, // 是否加载掉的动画
                    prizeLevel: 0, // 中奖等级
                },
                level: false,
            }
        },
        methods: {
            // 关闭弹窗
            closeToast() {
                this.prizeLevel = 0;
                this.isShowToast = false;
            },
            // 点击开始游戏
            beginGame() {
                let _t = this;
                if (_t.drawItem.isStart) {
                    return false;
                }
                _t.drawItem.isStart = true;
                // 减分数
                _t.level = false;
                _t.drawItem.prizeLevel = 0;
                let score = _t.drawItem.totalNum;
                score -= _t.drawItem.everyNum;
                if (score < 0) {
                    _t.prizeLevel = -1; // 中奖等级没有积分
                    _t.isShowToast = true; // 显示弹窗
                    _t.drawItem.clearLocation = false; // 清除位移
                } else {
                    _t.drawItem.totalNum = score;
                    _t.draw();
                }
            },
            // 中奖结果
            draw() {
                let _t = this;
                let number = _t.randomNum(1, 4); // 随机中奖等级
                _t.drawItem.isShowDown = false; // 不显示加载掉落动画
                _t.drawItem.clearLocation = true; // 显示小球滚动动画
                setTimeout(function () {
                    _t.drawItem.clearLocation = false; // 停止滚动动画
                    _t.level = true;
                    _t.drawItem.prizeLevel = number;
                    setTimeout(function () {
                        _t.prizeLevel = number === 4 ? 0 : number; // 中奖等级没有积分
                        _t.isShowToast = true; // 显示弹窗
                        _t.drawItem.isStart = false;
                    }, 900);
                    // 取消动画
                    setTimeout(function () {
                        _t.level = false;
                    }, 2500);
                }, 3000);
            },
            // 生成随机数的方法
            randomNum(Min, Max) {
                let Range = Max - Min;
                let Rand = Math.random();
                return Min + Math.round(Rand * Range); // 四舍五入
            },
        },
        created() {
        }
    }
</script>

<style scoped>
    /*扭蛋机*/
    .niu_dan {
        width: 640px;
        height: 1039px;
        background: #1b1009;
        margin: 0 auto;
        overflow: hidden;
        position: relative
    }

    .niu_dan .game_qu {
        background: url(../../../assets/img/eggDraw/game_ndj.png) no-repeat;
        background-size: 100% 100%;
        width: 553px;
        height: 767px;
        left: 47px;
        top: 74px;
        position: absolute;
        z-index: 3
    }

    .niu_dan .game_go {
        width: 134px;
        height: 140px;
        box-sizing: border-box;
        position: absolute;
        left: 210px;
        bottom: 225px;
        background: url(../../../assets/img/eggDraw/an_go.png) no-repeat;
        background-size: 100% 100%;
        font-size: 18px;
        color: #fff;
        padding-top: 90px;
        text-align: center;
        cursor: pointer;
    }

    .niu_dan .game_num {
        font-size: 20px;
        color: #e00b37;
        width: 128px;
        height: 35px;
        line-height: 35px;
        position: absolute;
        left: 206px;
        bottom: 120px;
        text-align: center
    }

    .niu_dan .an_jfgr {
        width: 100%;
        text-align: center;
        padding-top: 23px;
        position: absolute;
        left: 0;
        bottom: 60px;
    }

    .niu_dan .an_jfgr img {
        margin: 0 7px;
    }

    .niu_dan .dan_gun {
        width: 500px;
        height: 447px;
        position: absolute;
        left: 68px;
        top: 80px;
        z-index: 1;
        -webkit-border-radius: 240px 240px 0 0;
        -moz-border-radius: 240px 240px 0 0;
        border-radius: 240px 240px 0 0;
        overflow: hidden
    }

    .niu_dan .dan_gun span {
        width: 95px;
        height: 95px;
    }

    /*中奖*/
    .zonj_zezc {
        width: 640px;
        min-height: 1039px;
        position: absolute;
        left: 50%;
        top: 0;
        z-index: 4;
        background: rgba(0, 0, 0, 0.85);
        margin-left: -320px;
    }

    .zonj_zezc .jpzs {
        width: 450px;
        height: 286px;
        position: relative;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        background: #fff;
        margin: 300px auto 0 auto;
    }

    .zonj_zezc .jpzs .closeBox {
        width: 30px;
        position: absolute;
        right: 0;
        top: -40px;
        font-size: 0;
    }

    .zonj_zezc .jpzs .closeBox img {
        width: 100%;
    }

    .zonj_zezc .jpzs h2 {
        font-size: 36px;
        color: #ff1a4b;
        text-align: center;
        line-height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 286px;
    }

    .qiu_1 {
        position: absolute;
        left: 55px;
        top: 272px;
    }

    .qiu_2 {
        position: absolute;
        left: 3px;
        top: 200px
    }

    .qiu_3 {
        position: absolute;
        left: 10px;
        top: 345px;
    }

    .qiu_4 {
        position: absolute;
        left: 130px;
        top: 227px;
    }

    .qiu_5 {
        position: absolute;
        left: 174px;
        top: 305px;
    }

    .qiu_6 {
        position: absolute;
        left: 100px;
        top: 345px;
    }

    .qiu_7 {
        position: absolute;
        left: 216px;
        top: 229px;
    }

    .qiu_8 {
        position: absolute;
        left: 265px;
        top: 306px;
    }

    .qiu_9 {
        position: absolute;
        left: 405px;
        top: 290px;
    }

    .qiu_10 {
        position: absolute;
        left: 345px;
        top: 345px;
    }

    .qiu_11 {
        position: absolute;
        left: 333px;
        top: 248px;
    }

    .qiu_1:after,
    .qiu_2:after,
    .qiu_3:after,
    .qiu_4:after,
    .qiu_5:after,
    .qiu_6:after,
    .qiu_7:after,
    .qiu_8:after,
    .qiu_9:after,
    .qiu_10:after,
    .qiu_11:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: block;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center center;
        animation: zhuan 1s linear forwards;
        -webkit-animation: zhuan 1s linear forwards;
    }

    .qiu_1:after,
    .qiu_5:after,
    .qiu_11:after {
        background-image: url(../../../assets/img/eggDraw/canpin_4.png);
    }

    .qiu_2:after,
    .qiu_6:after,
    .qiu_9:after {
        background-image: url(../../../assets/img/eggDraw/canpin_3.png);
    }

    .qiu_3:after,
    .qiu_7:after,
    .qiu_10:after {
        background-image: url(../../../assets/img/eggDraw/canpin_1.png);
    }

    .qiu_4:after,
    .qiu_8:after {
        background-image: url(../../../assets/img/eggDraw/canpin_2.png);
    }


    /*掉落动画*/
    .diaol_1 {
        animation: dialuodn 1s linear 0.9s backwards;
        -webkit-animation: dialuodn 1s linear 0.9s backwards
    }

    .diaol_1:after {
        animation-delay: 0.8s;
        -webkit-animation-delay: 0.8s
    }

    .diaol_2 {
        animation: dialuodn 1s linear 0.6s backwards;
        -webkit-animation: dialuodn 1s linear 0.6s backwards
    }

    .diaol_2:after {
        animation-delay: 0.5s;
        -webkit-animation-delay: 0.5s
    }

    .diaol_3 {
        animation: dialuodn 1s linear backwards;
        -webkit-animation: dialuodn 1s linear backwards
    }

    .diaol_4 {
        animation: dialuodn 1s linear 1.1s backwards;
        -webkit-animation: dialuodn 1s linear 1.1s backwards
    }

    .diaol_4:after {
        animation-delay: 1s;
        -webkit-animation-delay: 1s
    }

    .diaol_5 {
        animation: dialuodn 1s linear 0.8s backwards;
        -webkit-animation: dialuodn 1s linear 0.8s backwards
    }

    .diaol_5:after {
        animation-delay: 0.7s;
        -webkit-animation-delay: 0.7s
    }

    .diaol_6 {
        animation: dialuodn 1s linear 0.4s backwards;
        -webkit-animation: dialuodn 1s linear 0.4s backwards;
    }

    .diaol_6:after {
        animation-delay: 0.3s;
        -webkit-animation-delay: 0.3s
    }

    .diaol_7 {
        animation: dialuodn 1s linear 0.9s backwards;
        -webkit-animation: dialuodn 1s linear 0.9s backwards
    }

    .diaol_7:after {
        animation-delay: 0.8s;
        -webkit-animation-delay: 0.8s
    }

    .diaol_8 {
        animation: dialuodn 1s linear 0.6s backwards;
        -webkit-animation: dialuodn 1s linear 0.6s backwards;
    }

    .diaol_8:after {
        animation-delay: 0.5s;
        -webkit-animation-delay: 0.5s;
    }

    .diaol_9 {
        animation: dialuodn 1s linear 1.1s backwards;
        -webkit-animation: dialuodn 1s linear 1.1s backwards;
    }

    .diaol_9:after {
        animation-delay: 1s;
        -webkit-animation-delay: 1s;
    }

    .diaol_10 {
        animation: dialuodn 1s linear 0.2s backwards;
        -webkit-animation: dialuodn 1s linear 0.2s backwards;
    }

    .diaol_11 {
        animation: dialuodn 1s linear 1.4s backwards;
        -webkit-animation: dialuodn 1s linear 1.4s backwards;
    }

    .diaol_11:after {
        animation-delay: 1.3s;
        -webkit-animation-delay: 1.3s;
    }

    .niu_dan .zjdl {
        width: 128px;
        height: 90px;
        box-sizing: border-box;
        padding: 32px 22px 0 22px;
        position: absolute;
        left: 253px;
        top: 715px;
        z-index: 2;
    }

    .niu_dan .menDong {
        width: 136px;
        height: 138px;
        position: absolute;
        left: 248px;
        top: 721px;
        z-index: 1;
    }

    .niu_dan .menDong img {
        width: 100%;
    }

    .niu_dan .dila_Y {
        width: 128px;
        height: 90px;
        box-sizing: border-box;
        animation: cujpin 0.7s ease-out forwards;
        -webkit-animation: cujpin 0.7s ease-out forwards;
    }

    .niu_dan .diaL_one,
    .niu_dan .diaL_two,
    .niu_dan .diaL_three,
    .niu_dan .diaL_four {
        width: 85px;
        height: 85px;
        display: inline-block;
        position: relative;
    }

    .niu_dan .diaL_one:after,
    .niu_dan .diaL_two:after,
    .niu_dan .diaL_three:after,
    .niu_dan .diaL_four:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 85px;
        height: 85px;
        display: block;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        animation: fanda 0.7s ease-out forwards;
        -webkit-animation: fanda 0.7s ease-out forwards;
    }

    .niu_dan .diaL_one:after {
        background-image: url(../../../assets/img/eggDraw/zj_1.png);
    }

    .niu_dan .diaL_two:after {
        background-image: url(../../../assets/img/eggDraw/zj_2.png);
    }

    .niu_dan .diaL_three:after {
        background-image: url(../../../assets/img/eggDraw/zj_3.png);
    }

    .niu_dan .diaL_four:after {
        background-image: url(../../../assets/img/eggDraw/zj_4.png);
    }

    @-webkit-keyframes cujpin {
        0% {
            -webkit-transform: translateY(-100px);
        }
        100% {
            -webkit-transform: translateY(0);
        }
    }

    @keyframes cujpin {
        0% {
            transform: translateY(-100px);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes fanda {
        0% {
            transform: scale(0.7);
        }
        100% {
            transform: scale(1);
        }
    }

    @-webkit-keyframes fanda {
        0% {
            -webkit-transform: scale(0.7);
        }
        100% {
            -webkit-transform: scale(1);
        }
    }

    .tc_anima {
        animation: title1 0.3s linear;
        -webkit-animation: title1 0.3s linear;
    }

    @keyframes title1 {
        from {
            opacity: 0;
            transform: scale(0, 0);
        }
        to {
            opacity: 1;
            transform: scale(1, 1);
        }
    }

    @-webkit-keyframes title1 {
        from {
            opacity: 0;
            -webkit-transform: scale(0, 0)
        }
        to {
            opacity: 1;
            -webkit-transform: scale(1, 1)
        }
    }

    .wieyi_1,
    .wieyi_2,
    .wieyi_3,
    .wieyi_4,
    .wieyi_5,
    .wieyi_6,
    .wieyi_7,
    .wieyi_8,
    .wieyi_9,
    .wieyi_10,
    .wieyi_11 {
        animation-duration: 2s;
        -webkit-animation-duration: 2s;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear;
    }

    .wieyi_1 {
        animation-name: around1;
        -webkit-animation-name: around1;
    }

    .wieyi_2 {
        animation-name: around2;
        -webkit-animation-name: around2;
    }

    .wieyi_3 {
        animation-name: around3;
        -webkit-animation-name: around3;
    }

    .wieyi_4 {
        animation-name: around4;
        -webkit-animation-name: around4;
    }

    .wieyi_5 {
        animation-name: around5;
        -webkit-animation-name: around5;
    }

    .wieyi_6 {
        animation-name: around6;
        -webkit-animation-name: around6;
    }

    .wieyi_7 {
        animation-name: around7;
        -webkit-animation-name: around7;
    }

    .wieyi_8 {
        animation-name: around8;
        -webkit-animation-name: around8;
    }

    .wieyi_9 {
        animation-name: around9;
        -webkit-animation-name: around9;
    }

    .wieyi_10 {
        animation-name: around10;
        -webkit-animation-name: around10;
    }

    .wieyi_11 {
        animation-name: around11;
        -webkit-animation-name: around11;
    }

    .zuadon_dh {
        animation: around 2s linear backwards;
        -webkit-animation: around 2s linear backwards;
    }

    @keyframes dialuodn {
        0% {
            transform: translateY(-200%);
            opacity: 0
        }
        5% {
            transform: translateY(-200%);
        }
        15% {
            transform: translateY(0);
        }
        30% {
            transform: translateY(-100%);
        }
        40% {
            transform: translateY(0%);
        }
        50% {
            transform: translateY(-60%);
        }
        70% {
            transform: translateY(0%);
        }
        80% {
            transform: translateY(-30%);
        }
        90% {
            transform: translateY(0%);
        }
        95% {
            transform: translateY(-14%);
        }
        97% {
            transform: translateY(0%);
        }
        99% {
            transform: translateY(-6%);
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @-webkit-keyframes dialuodn {
        0% {
            -webkit-transform: translateY(-200%);
            opacity: 0
        }
        5% {
            -webkit-transform: translateY(-200%);
        }
        15% {
            -webkit-transform: translateY(0);
        }
        30% {
            -webkit-transform: translateY(-100%);
        }
        40% {
            -webkit-transform: translateY(0%);
        }
        50% {
            -webkit-transform: translateY(-60%);
        }
        70% {
            -webkit-transform: translateY(0%);
        }
        80% {
            -webkit-transform: translateY(-30%);
        }
        90% {
            -webkit-transform: translateY(0%);
        }
        95% {
            -webkit-transform: translateY(-14%);
        }
        97% {
            -webkit-transform: translateY(0%);
        }
        99% {
            -webkit-transform: translateY(-6%);
        }
        100% {
            -webkit-transform: translateY(0);
            opacity: 1;
        }
    }

    @-webkit-keyframes zhuan {
        0% {
            -webkit-transform: rotate(0)
        }
        100% {
            -webkit-transform: rotate(360deg)
        }
    }

    @keyframes zhuan {
        0% {
            transform: rotate(0)
        }
        100% {
            transform: rotate(360deg)
        }
    }

    @-webkit-keyframes around1 {
        0% {
            -webkit-transform: translate(0px, 0px)
        }
        20% {
            -webkit-transform: translate(300px, 230px)
        }
        40% {
            -webkit-transform: translate(200px, -100px)
        }
        60% {
            -webkit-transform: translate(50px, 230px)
        }
        80% {
            -webkit-transform: translate(300px, -50px)
        }
        100% {
            -webkit-transform: translate(200px, 240px)
        }
    }

    @keyframes around1 {
        0% {
            transform: translate(0px, 0px)
        }
        20% {
            transform: translate(300px, 230px)
        }
        40% {
            transform: translate(200px, -100px)
        }
        60% {
            transform: translate(50px, 230px)
        }
        80% {
            transform: translate(300px, -50px)
        }
        100% {
            transform: translate(200px, 240px)
        }
    }

    @-webkit-keyframes around2 {
        0% {
            -webkit-transform: translate(0px, 0px)
        }
        10% {
            -webkit-transform: translate(300px, -120px)
        }
        30% {
            -webkit-transform: translate(250px, 130px)
        }
        50% {
            -webkit-transform: translate(-50px, -120px)
        }
        80% {
            -webkit-transform: translate(0px, 140px)
        }
        100% {
            -webkit-transform: translate(300px, -180px)
        }
    }

    @keyframes around2 {
        0% {
            transform: translate(0px, 0px)
        }
        10% {
            transform: translate(300px, -120px)
        }
        30% {
            transform: translate(250px, 130px)
        }
        50% {
            transform: translate(-50px, -120px)
        }
        80% {
            transform: translate(0px, 140px)
        }
        100% {
            transform: translate(300px, -180px)
        }
    }

    @-webkit-keyframes around3 {
        0% {
            -webkit-transform: translate(0px, 0px)
        }
        25% {
            -webkit-transform: translate(70px, -290px)
        }
        50% {
            -webkit-transform: translate(320px, 0px)
        }
        80% {
            -webkit-transform: translate(-20px, -290px)
        }
        100% {
            -webkit-transform: translate(290px, 0px)
        }
    }

    @keyframes around3 {
        0% {
            transform: translate(0px, 0px)
        }
        25% {
            transform: translate(70px, -290px)
        }
        50% {
            transform: translate(320px, 0px)
        }
        80% {
            transform: translate(-20px, -290px)
        }
        100% {
            transform: translate(290px, 0px)
        }
    }

    @-webkit-keyframes around4 {
        0% {
            -webkit-transform: translate(0px, 0px)
        }
        12% {
            -webkit-transform: translate(50px, 250px)
        }
        30% {
            -webkit-transform: translate(-150px, -30px)
        }
        60% {
            -webkit-transform: translate(-140px, 260px)
        }
        80% {
            -webkit-transform: translate(-10px, -30px)
        }
        100% {
            -webkit-transform: translate(-20px, 260px)
        }
    }

    @keyframes around4 {
        0% {
            transform: translate(0px, 0px)
        }
        12% {
            transform: translate(50px, 250px)
        }
        30% {
            transform: translate(-150px, -30px)
        }
        60% {
            transform: translate(-140px, 260px)
        }
        80% {
            transform: translate(-10px, -30px)
        }
        100% {
            transform: translate(-20px, 260px)
        }
    }

    @-webkit-keyframes around5 {
        0% {
            -webkit-transform: translate(0px, 0px)
        }
        22% {
            -webkit-transform: translate(-50px, -170px)
        }
        46% {
            -webkit-transform: translate(150px, 145px)
        }
        80% {
            -webkit-transform: translate(200px, -115px)
        }
        100% {
            -webkit-transform: translate(-100px, 145px)
        }
    }

    @keyframes around5 {
        0% {
            transform: translate(0px, 0px)
        }
        22% {
            transform: translate(-50px, -170px)
        }
        46% {
            transform: translate(150px, 145px)
        }
        80% {
            transform: translate(200px, -115px)
        }
        100% {
            transform: translate(-100px, 145px)
        }
    }

    @-webkit-keyframes around6 {
        0% {
            -webkit-transform: translate(0px, 0px)
        }
        15% {
            -webkit-transform: translate(260px, 40px)
        }
        30% {
            -webkit-transform: translate(-80px, -260px)
        }
        45% {
            -webkit-transform: translate(-40px, 40px)
        }
        60% {
            -webkit-transform: translate(100px, -290px)
        }
        75% {
            -webkit-transform: translate(-80px, -280px)
        }
        100% {
            -webkit-transform: translate(10px, 40px)
        }
    }

    @keyframes around6 {
        0% {
            transform: translate(0px, 0px)
        }
        15% {
            transform: translate(260px, 40px)
        }
        30% {
            transform: translate(-80px, -260px)
        }
        45% {
            transform: translate(-40px, 40px)
        }
        60% {
            transform: translate(100px, -290px)
        }
        75% {
            transform: translate(-80px, -280px)
        }
        100% {
            transform: translate(10px, 40px)
        }
    }

    @-webkit-keyframes around7 {
        0% {
            -webkit-transform: translate(0px, 0px)
        }
        20% {
            -webkit-transform: translate(-60px, -170px)
        }
        40% {
            -webkit-transform: translate(90px, 160px)
        }
        60% {
            -webkit-transform: translate(-220px, -140px)
        }
        80% {
            -webkit-transform: translate(160px, -60px)
        }
        100% {
            -webkit-transform: translate(-100px, -100px)
        }
    }

    @keyframes around7 {
        0% {
            transform: translate(0px, 0px)
        }
        20% {
            transform: translate(-60px, -170px)
        }
        40% {
            transform: translate(90px, 160px)
        }
        60% {
            transform: translate(-220px, -140px)
        }
        80% {
            transform: translate(160px, -60px)
        }
        100% {
            transform: translate(-100px, -100px)
        }
    }

    @-webkit-keyframes around8 {
        0% {
            -webkit-transform: translate(0px, 0px)
        }
        20% {
            -webkit-transform: translate(140px, -120px)
        }
        40% {
            -webkit-transform: translate(-140px, 40px)
        }
        60% {
            -webkit-transform: translate(-180px, -240px)
        }
        80% {
            -webkit-transform: translate(100px, 50px)
        }
        100% {
            -webkit-transform: translate(-180px, -220px)
        }
    }

    @keyframes around8 {
        0% {
            transform: translate(0px, 0px)
        }
        20% {
            transform: translate(140px, -120px)
        }
        40% {
            transform: translate(-140px, 40px)
        }
        60% {
            transform: translate(-180px, -240px)
        }
        80% {
            transform: translate(100px, 50px)
        }
        100% {
            transform: translate(-180px, -220px)
        }
    }

    @-webkit-keyframes around9 {
        0% {
            -webkit-transform: translate(0px, 0px)
        }
        30% {
            -webkit-transform: translate(-300px, -180px)
        }
        60% {
            -webkit-transform: translate(-350px, 120px)
        }
        80% {
            -webkit-transform: translate(-100px, -200px)
        }
        100% {
            -webkit-transform: translate(-200px, 100px)
        }
    }

    @keyframes around9 {
        0% {
            transform: translate(0px, 0px)
        }
        30% {
            transform: translate(-300px, -180px)
        }
        60% {
            transform: translate(-350px, 120px)
        }
        80% {
            transform: translate(-100px, -200px)
        }
        100% {
            transform: translate(-200px, 100px)
        }
    }

    @-webkit-keyframes around10 {
        0% {
            -webkit-transform: translate(0px, 0px)
        }
        15% {
            -webkit-transform: translate(-300px, -270px)
        }
        30% {
            -webkit-transform: translate(20px, -220px)
        }
        50% {
            -webkit-transform: translate(-350px, 10px)
        }
        75% {
            -webkit-transform: translate(0px, -150px)
        }
        100% {
            -webkit-transform: translate(-300px, -300px)
        }
    }

    @keyframes around10 {
        0% {
            transform: translate(0px, 0px)
        }
        15% {
            transform: translate(-300px, -270px)
        }
        30% {
            transform: translate(20px, -220px)
        }
        50% {
            transform: translate(-350px, 10px)
        }
        75% {
            transform: translate(0px, -150px)
        }
        100% {
            transform: translate(-300px, -300px)
        }
    }

    @-webkit-keyframes around11 {
        0% {
            -webkit-transform: translate(0px, 0px)
        }
        32% {
            -webkit-transform: translate(-270px, -70px)
        }
        60% {
            -webkit-transform: translate(-320px, 220px)
        }
        80% {
            -webkit-transform: translate(10px, -10px)
        }
        100% {
            -webkit-transform: translate(-260px, 220px)
        }
    }

    @keyframes around11 {
        0% {
            transform: translate(0px, 0px)
        }
        32% {
            transform: translate(-270px, -70px)
        }
        60% {
            transform: translate(-320px, 220px)
        }
        80% {
            transform: translate(10px, -10px)
        }
        100% {
            transform: translate(-260px, 220px)
        }
    }
</style>
