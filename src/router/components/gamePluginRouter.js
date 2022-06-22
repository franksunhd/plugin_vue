/**
 * 游戏模块 页面的路由配置
 */
// 引入配置
import common from "../../config/common";
import mock from "../../page/pages/game_plugin/mock";
// 路由前缀
let companyName = common.companyName;

const routers = [
    // 运动场
    {
        path: companyName + "/playground",
        name: "playground",
        component: () => import(/* webpackChunkName: "playground" */"../../page/pages/game_plugin/playground")
    },
    // 房价计算
    {
        path: companyName + "/Countdown",
        name: "Countdown",
        component: () => import(/* webpackChunkName: "Countdown" */"../../page/pages/game_plugin/Countdown")
    },
    // 加班费
    {
        path: companyName + "/overtimePay",
        name: "overtimePay",
        component: () => import(/* webpackChunkName: "overtimePay" */"../../page/pages/game_plugin/overtimePay")
    },
    // 加载进度条
    {
        path: companyName + "/nprogress",
        name: "nprogress",
        component: () => import(/* webpackChunkName: "nprogress" */"../../page/pages/game_plugin/nprogress")
    },
    // mock
    {
        path: companyName + "/mock",
        name: "mock",
        component: () => import(/* webpackChunkName: "mock" */"../../page/pages/game_plugin/mock")
    },
    // 鼠标点击
    {
        path: companyName + "/mouseClick",
        name: "mouseClick",
        component: () => import(/* webpackChunkName: "mouseClick" */"../../page/pages/game_plugin/mouseClick")
    }
];

export default routers;
