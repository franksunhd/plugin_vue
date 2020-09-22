<template>
    <div class="loveTeethBox">
        <!--定位-->
        <div class="lovePosition">
            <img src="../../../assets/img/loveTeeth/location.png" alt="">
            <span>北京市</span>
            <img src="../../../assets/img/loveTeeth/right.png" alt="">
        </div>
        <!--banner-->
        <div class="banner">
            <img style="visibility:hidden;" src="../../../assets/img/loveTeeth/bg.png" alt="">
        </div>
        <!--menu-->
        <ul class="menuBox">
            <li>
                <img src="../../../assets/img/loveTeeth/menu.png" alt="">
                <div>门店导航</div>
            </li>
            <li>
                <img src="../../../assets/img/loveTeeth/phone.png" alt="">
                <div>电话咨询</div>
            </li>
            <li>
                <img src="../../../assets/img/loveTeeth/money.png" alt="">
                <div>齿科卡券</div>
            </li>
            <li>
                <img src="../../../assets/img/loveTeeth/message.png" alt="">
                <div>齿科档案</div>
            </li>
        </ul>
        <!--按钮-->
        <div class="loveTeethBtn">
            <img src="../../../assets/img/loveTeeth/time.png" alt="">
            <span>一键预约牙医</span>
        </div>
        <!--banner-->
        <div class="bannerBox">
            <img src="../../../assets/img/loveTeeth/bg.png" alt="">
            <div class="tip">您暂无口腔健康得分</div>
            <div class="btn">限时免费去测评 ></div>
        </div>
        <!--附近门店-->
        <div class="titleBox">
            <span class="title">附件门店</span>
            <div>
                <span>查看其它门店</span>
                <img src="../../../assets/img/loveTeeth/right.png" alt="">
            </div>
        </div>
        <!--门诊部-->
        <div class="box_1">
            <div class="title_box">
                <div class="title_left">
                    <span class="name">中关村门诊部</span>
                    <span class="left">距您879m</span>
                </div>
                <img src="../../../assets/img/loveTeeth/right.png" alt="">
            </div>
            <div class="title_des">中关村科学院南路2号融科资讯中心B座二层</div>
            <!--医师-->
            <ul class="userBox">
                <li>
                    <span class="headImg"></span>
                    <span class="name">柏景坪</span>
                    <span class="des">副主任医师</span>
                    <span class="tag">植牙</span>
                </li>
                <li>
                    <span class="headImg"></span>
                    <span class="name">肖建杰</span>
                    <span class="des">住院医师</span>
                    <span class="tag">牙周病</span>
                </li>
                <li>
                    <span class="headImg"></span>
                    <span class="name">马玉洁</span>
                    <span class="des">主治医师</span>
                    <span class="tag">美容</span>
                </li>
            </ul>
            <!--口腔头条-->
            <div class="titleBox">
                <span class="title">口腔头条</span>
                <div>
                    <span>更多</span>
                    <img src="../../../assets/img/loveTeeth/right.png" alt="">
                </div>
            </div>
            <div class="title_1">
                此时此刻 健康不掉线第三期
            </div>
            <div class="imgBox">
                <img style="visibility: hidden;" src="../../../assets/img/loveTeeth/bg.png" alt="">
            </div>
            <div class="imgTipBox">
                <span>2020-03-26</span>
                <div>
                    <img src="../../../assets/img/loveTeeth/show.png" alt="">
                    <span>47</span>
                    <img src="../../../assets/img/loveTeeth/good.png" alt="">
                    <span>1</span>
                </div>
            </div>
            <!--新闻-->
            <ul class="newBox">
                <li>
                    <div class="text_1">
                        <div class="text_title">春暖花开，泰康拜博口腔陆续开诊啦！</div>
                        <div class="text_num">
                            <span class="text_time">2020-03-26</span>
                            <div class="text_box">
                                <img src="../../../assets/img/loveTeeth/show.png" alt="">
                                <span>47</span>
                                <img src="../../../assets/img/loveTeeth/good.png" alt="">
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                    <div class="img_2"></div>
                </li>
                <li>
                    <div class="text_1">
                        <div class="text_title">健康界 | 穿越疫情危机，汇入大医疗，泰康拜博开启疫后战略</div>
                        <div class="text_num">
                            <span class="text_time">2020-03-26</span>
                            <div class="text_box">
                                <img src="../../../assets/img/loveTeeth/show.png" alt="">
                                <span>47</span>
                                <img src="../../../assets/img/loveTeeth/good.png" alt="">
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                    <div class="img_2"></div>
                </li>
                <li>
                    <div class="text_1">
                        <div class="text_title">爸妈相见恨晚的神器，孩子刷牙不在心累！</div>
                        <div class="text_num">
                            <span class="text_time">2020-03-26</span>
                            <div class="text_box">
                                <img src="../../../assets/img/loveTeeth/show.png" alt="">
                                <span>47</span>
                                <img src="../../../assets/img/loveTeeth/good.png" alt="">
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                    <div class="img_2"></div>
                </li>
            </ul>
            <div class="footerBox">
                <span>查看更多口腔头条</span>
                <img src="../../../assets/img/loveTeeth/right.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loveTeeth"
    }
</script>

<style scoped>
    .footerBox {
        font-size: 0;
        text-align: center;
        margin: 50px 0;
    }

    .footerBox span {
        height: 34px;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999;
        line-height: 34px;
        vertical-align: middle;
    }

    .footerBox img {
        height: 30px;
        margin-left: 10px;
        vertical-align: middle;
    }

    .newBox li .text_num,
    .newBox li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .newBox li {
        padding: 30px 0;
        border-bottom: 1px solid #F2F2F2;
    }

    .newBox li:last-child {
        border-bottom: none;
    }

    .newBox li .text_1 {
        flex: 1;
    }

    .newBox li .text_title {
        font-size: 32px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #333;
        flex: 1;
        height: 132px;
        font-weight: bold;
        line-height: 44px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .newBox li .text_time {
        height: 34px;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999;
        line-height: 34px;
    }

    .imgTipBox > div,
    .text_box {
        font-size: 0;
    }

    .text_box img {
        height: 32px;
        margin-right: 10px;
        vertical-align: middle;
    }

    .text_box span {
        height: 34px;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        vertical-align: middle;
        color: #999;
        line-height: 34px;
    }

    .text_box span:nth-of-type(1) {
        margin-right: 20px;
    }

    .newBox .img_2 {
        width: 252px;
        height: 172px;
        background-color: #ddd;
        border-radius: 20px;
        margin-left: 16px;
    }

    .imgBox {
        width: 100%;
        background-color: #ddd;
        margin-top: 20px;
        border-radius: 20px;
    }

    .bannerBox img,
    .banner img,
    .imgBox img {
        width: 100%;
    }

    .imgTipBox {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
    }

    .imgTipBox > span {
        height: 34px;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999;
        line-height: 34px;
    }

    .imgTipBox > div > img {
        width: 32px;
        height: 32px;
        margin-right: 10px;
        vertical-align: middle;
    }

    .imgTipBox > div > span {
        height: 34px;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999;
        line-height: 34px;
        vertical-align: middle;
    }

    .imgTipBox > div > span:nth-of-type(1) {
        margin-right: 30px;
    }

    .loveTeethBox {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        box-sizing: border-box;
        padding: 0 16px;
    }

    .lovePosition {
        font-size: 0;
        margin: 20px 0;
    }

    .lovePosition img {
        vertical-align: middle;
        height: 30px;
    }

    .lovePosition span {
        font-size: 14px;
        height: 30px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: bold;
        color: #333;
        margin: 0 10px;
        vertical-align: middle;
        line-height: 30px;
    }

    .banner {
        width: 100%;
        border-radius: 20px;
        font-size: 0;
        background: linear-gradient(238deg, #ABF4E1 0%, #73E6BF 100%);
    }

    .menuBox {
        margin-top: 30px;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .menuBox li {
        flex: 1;
        box-sizing: border-box;
        font-size: 0;
        text-align: center;
        display: inline-block;
    }

    .menuBox li img {
        width: 96px;
        height: 96px;
        margin-bottom: 10px;
    }

    .menuBox li div {
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333;
        line-height: 40px;
    }

    .loveTeethBtn {
        width: 100%;
        height: 96px;
        font-size: 0;
        line-height: 96px;
        text-align: center;
        background: linear-gradient(180deg, #457AE6 0%, #295FCC 100%);
        border-radius: 48px;
        margin-top: 40px;
        margin-bottom: 60px;
    }

    .loveTeethBtn img {
        width: 35px;
        height: 35px;
        vertical-align: middle;
    }

    .loveTeethBtn span {
        font-size: 32px;
        color: #fff;
        margin-left: 10px;
        vertical-align: middle;
    }

    .bannerBox {
        position: relative;
    }

    .bannerBox .tip {
        font-size: 32px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: bold;
        color: #333;
        line-height: 44px;
        position: absolute;
        top: 36px;
        left: 30px;
        z-index: 1;
    }

    .bannerBox .btn {
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #3D97F2;
        line-height: 60px;
        height: 60px;
        padding: 0 20px;
        background: #F2F9FF;
        border-radius: 30px;
        border: 2px solid #6DAFF2;
        display: inline-block;
        position: absolute;
        bottom: 28px;
        left: 30px;
        z-index: 1;
    }

    .titleBox {
        margin-top: 70px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .titleBox .title {
        height: 56px;
        font-size: 40px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: bold;
        color: #000000;
        line-height: 56px;
    }

    .titleBox > div {
        vertical-align: middle;
    }

    .titleBox > div > img {
        width: 25px;
        vertical-align: middle;
    }

    .titleBox > div > span {
        height: 40px;
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999;
        line-height: 40px;
        vertical-align: middle;
    }

    .box_1 {
        padding: 30px;
        background: #FAFAFA;
        border-radius: 16px;
        border: 2px solid #F5F5F5;
    }

    .title_box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .title_box > img {
        width: 30px;
    }

    .title_left .name {
        height: 44px;
        font-size: 32px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #333;
        line-height: 44px;
    }

    .title_box .left {
        margin-left: 20px;
        padding: 0 10px;
        height: 34px;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666;
        line-height: 34px;
        background: #F2F2F2;
        border-radius: 17px;
        border: 2px solid #EDEDED;
    }

    .box_1 .title_des {
        height: 40px;
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666;
        line-height: 40px;
        margin-top: 30px;
    }

    .userBox {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    .userBox li {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .userBox li span.headImg {
        display: inline-block;
        width: 96px;
        height: 96px;
        border-radius: 50%;
        background-color: #00a1d6;
        overflow: hidden;
    }

    .userBox li span.name {
        margin-top: 6px;
        height: 40px;
        font-size: 28px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: bold;
        color: #333;
        line-height: 40px;
    }

    .userBox li span.des {
        height: 34px;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666;
        line-height: 34px;
    }

    .userBox li span.tag {
        padding: 0 10px;
        height: 32px;
        font-size: 22px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999;
        line-height: 32px;
        border-radius: 16px;
        border: 2px solid #E6E6E6;
    }

    .title_1 {
        width: 100%;
        height: 44px;
        font-size: 32px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333;
        line-height: 44px;
    }
</style>
