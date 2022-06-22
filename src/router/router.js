import common from "../config/common";

// vueBus
import vueBus from "../page/pages/global_plugin/vueBus/vueBus";
// js-Cookies
import jsCookies from "../page/pages/global_plugin/jsCookies/index";
// moment-js
import moment from "../page/pages/global_plugin/Moment/moment";
// mock-js
import mockJs from "../page/pages/global_plugin/mockJs/index";
// lodash
import lodash from "../page/pages/global_plugin/lodash/index";
// 加解密
import Crypto from "../page/pages/global_plugin/crypto/index";


// 高德地图
import vueAMap from "../page/pages/map_plugin/vueAMap/index";
// 中国肺炎地图
import chinaMap from "../page/pages/map_plugin/chinaMap/chinaMap";
// 世界肺炎地图
import worldMap from "../page/pages/map_plugin/worldMap/worldMap";
// 词云图
import wordCloud from "../page/pages/map_plugin/wordCloud/wordCloud";
// 文学太阳图
import sunMap from "../page/pages/map_plugin/sunMap/sunMap";
// 疫情海螺图
import conchMap from "../page/pages/map_plugin/conchMap/conchMap";


// 九宫格抽奖
import luckyDraw from "../page/pages/luck_plugin/luckyDraw";
// 九宫格抽奖(新)
import luckyDraw_new from "../page/pages/luck_plugin/luckyDraw_new";
// 大转盘抽奖
import rotaryDraw from "../page/pages/luck_plugin/rotaryDraw";
// 老虎机
import tigerDraw from "../page/pages/luck_plugin/tigerDraw";
// 扭蛋机抽奖
import eggDraw from "../page/pages/luck_plugin/eggDraw";


// 运动场
import playground from "../page/pages/game_plugin/playground";
// 房价计算
import Countdown from "../page/pages/game_plugin/Countdown";
// 加班费
import overtimePay from "../page/pages/game_plugin/overtimePay";
// 加载进度条
import nprogress from "../page/pages/game_plugin/nprogress";
// mock
import mock from "../page/pages/game_plugin/mock";
// 鼠标点击
import mouseClick from "../page/pages/game_plugin/mouseClick";


// 齿科专区首页
import loveTeeth from "../page/pages/mobile/loveTeeth";
// 瀑布流页面
import waterfall from "../page/pages/mobile/waterfall";
// vant页面
import vantPage from "../page/pages/mobile/vantPage/index";


// 交叉正负轴
import barNegative from "../page/pages/eCharts/bar-negative";
// 七色小花
import drawCircle from "../page/pages/eCharts/drawCircle";


// PC插件部分
import pcPluginRouter from "./pcPluginRouter";
// elementUI 部分
import elementUIRouter from "./elementUIRouter";
// 移动端
import mobilePluginRouter from "./mobilePluginRouter";
// 封装组件
import myPluginRouter from "./myPluginRouter";


// 其他组件
import otherPageRouter from "./otherPageRouter";


let companyName = common.companyName;

export const routers = [
    {path: "/", redirect: companyName + "/index"},
    // Home页
    {path: companyName, redirect: companyName + "/index"},
    {
        path: companyName,
        name: "index",
        component: () => import(/* webpackChunkName: "index" */"../page/index"),
        children: [
            // Home页的页面内容
            {
                path: companyName + "/index",
                name: "Home",
                component: () => import(/* webpackChunkName: "Home" */"../page/pages/Home")
            },


            {
                path: companyName + "/vueAMap",
                name: "vueAMap",
                component: vueAMap
            },
            {
                path: companyName + "/chinaMap",
                name: "chinaMap",
                component: chinaMap
            },
            {
                path: companyName + "/worldMap",
                name: "worldMap",
                component: worldMap
            },
            {
                path: companyName + "/wordCloud",
                name: "wordCloud",
                component: wordCloud
            },
            {
                path: companyName + "/sunMap",
                name: "sunMap",
                component: sunMap
            },
            {
                path: companyName + "/conchMap",
                name: "conchMap",
                component: conchMap
            },
            {
                path: companyName + "/luckyDraw",
                name: "luckyDraw",
                component: luckyDraw
            },
            {
                path: companyName + "/luckyDraw_new",
                name: "luckyDraw_new",
                component: luckyDraw_new
            },
            {
                path: companyName + "/rotaryDraw",
                name: "rotaryDraw",
                component: rotaryDraw
            },
            {
                path: companyName + "/tigerDraw",
                name: "tigerDraw",
                component: tigerDraw
            },

            {
                path: companyName + "/eggDraw",
                name: "eggDraw",
                component: eggDraw
            },
            {
                path: companyName + "/playground",
                name: "playground",
                component: playground
            },


            {
                path: companyName + "/Countdown",
                name: "Countdown",
                component: Countdown
            },
            {
                path: companyName + "/overtimePay",
                name: "overtimePay",
                component: overtimePay
            },
            {
                path: companyName + "/nprogress",
                name: "nprogress",
                component: nprogress
            },
            {
                path: companyName + "/mock",
                name: "mock",
                component: mock
            },
            {
                path: companyName + "/mouseClick",
                name: "mouseClick",
                component: mouseClick
            },
            {
                path: companyName + "/barNegative",
                name: "barNegative",
                component: barNegative
            },
            {
                path: companyName + "/drawCircle",
                name: "drawCircle",
                component: drawCircle
            },


            ...pcPluginRouter, // PC插件
            ...mobilePluginRouter, // 移动端组件
            ...myPluginRouter, // 封装组件
            ...elementUIRouter, // elementUI 部分

            ...otherPageRouter // 其他组件模块
        ]
    },
    {path: "/loveTeeth", name: "loveTeeth", component: loveTeeth},
    {path: "/waterfall", name: "waterfall", component: waterfall},
    {path: "/vantPage", name: "vantPage", component: vantPage},
    {path: "*", component: () => import(/* webpackChunkName: "ErrorPage" */"../components/ErrorPage")}
];
