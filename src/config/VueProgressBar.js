import Vue from "vue";
import VueProgressBar from "vue-progressbar";

const options = {
    color: "#229399", // 成功颜色
    failedColor: "red", // 失败颜色
    thickness: "15px", // 进度条宽度
    // 速度
    transition: {
        speed: "0.2s",
        opacity: "0.6s",
        termination: 300
    },
    autoRevert: true,
    location: "top", // 位置
    inverse: true,
    position: "relative" // 定位 relative absolute fixed
};
Vue.use(VueProgressBar, options);
