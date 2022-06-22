import common from "../../config/common";

let companyName = common.companyName;
// PC插件
import pc_plugin from "./pc_plugin";
// ElementUI
import ElementUI from "./ElementUI";
/// 移动端插件
import mobile_plugin from "./mobile_plugin";
// 封装插件
import my_plugin from "./my_plugin";
// 全局性方法
import global_plugin from "./global_plugin";
// 地图集合
import map_plugin from "./map_plugin";
// 抽奖
import luck_plugin from "./luck_plugin";
// 游戏集合
import game_plugin from "./game_plugin";
// C端页面
import c_page from "./c_page";
// 图表
import eCharts from "./eCharts";
// 其他
import others from "./others";

export default [
    // 首页
    {
        path: companyName + "/index",
        icon: "el-icon-s-home",
        name: "首页",
        isSubMenu: false,
        children: null
    },
    // PC插件
    {
        path: companyName + "/pc_plugin",
        name: "PC插件",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [...pc_plugin]
    },
    // ElementUI
    {
        path: companyName + "/element_plugin",
        name: "ElementUI",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [...ElementUI]
    },
    // 移动端插件
    {
        path: companyName + "/mobile_plugin",
        name: "移动端插件",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [...mobile_plugin]
    },
    // 封装插件
    {
        path: companyName + "/my_plugin",
        name: "封装插件",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [...my_plugin]
    },
    // 全局性方法
    {
        path: companyName + "/global_plugin",
        name: "全局性方法",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [...global_plugin]
    },
    // 地图集合
    {
        path: companyName + "/map_plugin",
        name: "地图集合",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [...map_plugin]
    },
    // 抽奖
    {
        path: companyName + "/luck_plugin",
        name: "抽奖集合",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [...luck_plugin]
    },
    // 游戏
    {
        path: companyName + "/game_plugin",
        name: "游戏集合",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [...game_plugin]
    },
    // 移动端
    {
        path: "/loveTeeth",
        name: "C端页面",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [...c_page]
    },
    // eCharts
    {
        path: companyName + "/eCharts",
        name: "图表",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [...eCharts]
    },
    // 其他
    {
        path: companyName + "/others",
        name: "其他",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [...others]
    }
];
