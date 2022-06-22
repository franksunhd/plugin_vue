import common from "../config/common";
// PC插件部分
import pcPluginRouter from "./pcPluginRouter";
// elementUI 部分
import elementUIRouter from "./elementUIRouter";
// 移动端
import mobilePluginRouter from "./mobilePluginRouter";
// 封装组件
import myPluginRouter from "./myPluginRouter";
// 全局方法组件
import globalPluginRouter from "./globalPluginRouter";
// 地图集合组件
import mapPluginRouter from "./mapPluginRouter";
// 抽奖集合组件
import luckPluginRouter from "./luckPluginRouter";
// 游戏场
import gamePluginRouter from "./gamePluginRouter";
// 图表集合
import eChartsRouter from "./eChartsRouter";
// 其他组件
import otherPageRouter from "./otherPageRouter";
// C端页面
import cPageRouter from "./cPageRouter";

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
            ...mobilePluginRouter, // 移动端组件
            ...myPluginRouter, // 封装组件
            ...globalPluginRouter, // 全局方法组件
            ...mapPluginRouter, // 地图集合组件
            ...luckPluginRouter, // 抽奖集合组件
            ...gamePluginRouter, // 游戏场组件
            ...eChartsRouter, // 图表集合
            ...otherPageRouter // 其他组件模块
        ]
    },
    ...cPageRouter, // C端页面
    {path: "*", component: () => import(/* webpackChunkName: "ErrorPage" */"../components/ErrorPage")}
];
