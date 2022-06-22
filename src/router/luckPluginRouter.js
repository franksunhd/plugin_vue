/**
 * 抽奖模块 页面的路由配置
 */
// 引入配置
import common from "../config/common";
// 路由前缀
let companyName = common.companyName;

const routers = [
    // 九宫格抽奖
    {
        path: companyName + "/luckyDraw",
        name: "luckyDraw",
        component: () => import(/* webpackChunkName: "luckyDraw" */"../page/pages/luck_plugin/luckyDraw")
    },
    // 九宫格抽奖(新)
    {
        path: companyName + "/luckyDraw_new",
        name: "luckyDraw_new",
        component: () => import(/* webpackChunkName: "luckyDraw_new" */"../page/pages/luck_plugin/luckyDraw_new")
    },
    // 大转盘抽奖
    {
        path: companyName + "/rotaryDraw",
        name: "rotaryDraw",
        component: () => import(/* webpackChunkName: "rotaryDraw" */"../page/pages/luck_plugin/rotaryDraw")
    },
    // 老虎机
    {
        path: companyName + "/tigerDraw",
        name: "tigerDraw",
        component: () => import(/* webpackChunkName: "tigerDraw" */"../page/pages/luck_plugin/tigerDraw")
    },
    // 扭蛋机抽奖
    {
        path: companyName + "/eggDraw",
        name: "eggDraw",
        component: () => import(/* webpackChunkName: "eggDraw" */"../page/pages/luck_plugin/eggDraw")
    }
];

export default routers;
