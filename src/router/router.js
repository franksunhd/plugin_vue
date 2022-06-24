import common from "../config/common";
// PC插件部分
import pcPluginRouter from "./components/pcPluginRouter";
// elementUI 部分
import elementUIRouter from "./components/elementUIRouter";
// 移动端
// import mobilePluginRouter from "./components/mobilePluginRouter";
// 封装组件
// import myPluginRouter from "./components/myPluginRouter";
// 全局方法组件
// import globalPluginRouter from "./components/globalPluginRouter";
// 地图集合组件
// import mapPluginRouter from "./components/mapPluginRouter";
// 抽奖集合组件
// import luckPluginRouter from "./components/luckPluginRouter";
// 游戏场
// import gamePluginRouter from "./components/gamePluginRouter";
// 图表集合
// import eChartsRouter from "./components/eChartsRouter";
// 其他组件
// import otherPageRouter from "./components/otherPageRouter";
// C端页面
import cPageRouter from "./components/cPageRouter";

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
            ...pcPluginRouter, // PC插件
            ...elementUIRouter, // elementUI 部分
            // ...mobilePluginRouter, // 移动端组件
            // ...myPluginRouter, // 封装组件
            // ...globalPluginRouter, // 全局方法组件
            // ...mapPluginRouter, // 地图集合组件
            // ...luckPluginRouter, // 抽奖集合组件
            // ...gamePluginRouter, // 游戏场组件
            // ...eChartsRouter, // 图表集合
            // ...otherPageRouter // 其他组件模块
        ]
    },
    ...cPageRouter, // C端页面
    {path: "*", component: () => import(/* webpackChunkName: "ErrorPage" */"../components/ErrorPage")}
];
