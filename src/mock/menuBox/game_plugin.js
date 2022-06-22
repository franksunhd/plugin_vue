/**
 * 游戏模块导航配置
 */
import common from "../../config/common";

let companyName = common.companyName;

const menuList = [
    {
        path: companyName + "/playground",
        name: "运动场",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/Countdown",
        name: "房价计算",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/overtimePay",
        name: "加班费",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/nprogress",
        name: "nprogress进度条",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/mock",
        name: "mock",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/mouseClick",
        name: "鼠标点击",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    }
];
export default menuList;


