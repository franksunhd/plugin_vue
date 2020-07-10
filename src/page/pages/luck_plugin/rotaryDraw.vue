<template>
    <div class="rotaryDrawBox">
        <div style="text-align: center;font-size: 30px;margin-bottom: 20px;">还可以抽奖次数{{drawTime}}</div>
        <!-- 转盘转 -->
        <div class="wheel_wp">
            <div class="wheel_wp_top">
                <!-- 转盘背景 -->
                <img class="bg" src="../../../assets/img/helpAndDraw/s-dial_bg.png" alt="">
                <!-- 转盘指针 -->
                <div class="wheel_pointer">
                    <img class="point" src="https://tweapp.top1buyer.com/s-dial_pointer.png?v=1" alt=""/>
                </div>
            </div>
            <!-- 指针转 -->
            <div class="wheel_wp_top">
                <!-- 转盘背景 -->
                <img class="bg" src="../../../assets/img/helpAndDraw/s-dial_bg.png" alt="">
                <!-- 转盘指针 -->
                <div class="wheel_pointer">
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
            }
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
        transform: translate(-50%, -50%);
        animation: show_tips 1s;
    }

    .wheel_wp_top .wheel_pointer img.point {
        width: 100%;
        height: 100%;
        /*opacity: 0.3*/
    }

    @keyframes show_tips {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>
