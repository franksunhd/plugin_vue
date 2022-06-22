/**
 * 抽奖模块导航配置
 */
import common from "../../config/common";

let companyName = common.companyName;

const menuList = [
    {
        path: companyName + "/luckyDraw",
        name: "九宫格抽奖",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/luckyDraw_new",
        name: "九宫格抽奖(新)",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/rotaryDraw",
        name: "转盘抽奖",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/tigerDraw",
        name: "老虎机抽奖",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/eggDraw",
        name: "扭蛋机抽奖",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    }
];
export default menuList;
