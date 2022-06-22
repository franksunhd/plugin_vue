/**
 * 地图模块 页面的路由配置
 */
// 引入配置
import common from "../config/common";
// 路由前缀
let companyName = common.companyName;

const routers = [
    // 高德地图
    {
        path: companyName + "/vueAMap",
        name: "vueAMap",
        component: () => import(/* webpackChunkName: "vueAMap" */ "../page/pages/map_plugin/vueAMap/index")
    },
    // 中国肺炎地图
    {
        path: companyName + "/chinaMap",
        name: "chinaMap",
        component: () => import(/* webpackChunkName: "chinaMap" */ "../page/pages/map_plugin/chinaMap/chinaMap")
    },
    // 世界肺炎地图
    {
        path: companyName + "/worldMap",
        name: "worldMap",
        component: () => import(/* webpackChunkName: "worldMap" */ "../page/pages/map_plugin/worldMap/worldMap")
    },
    // 词云图
    {
        path: companyName + "/wordCloud",
        name: "wordCloud",
        component: () => import(/* webpackChunkName: "wordCloud" */ "../page/pages/map_plugin/wordCloud/wordCloud")
    },
    // 文学太阳图
    {
        path: companyName + "/sunMap",
        name: "sunMap",
        component: () => import(/* webpackChunkName: "sunMap" */ "../page/pages/map_plugin/sunMap/sunMap")
    },
    // 疫情海螺图
    {
        path: companyName + "/conchMap",
        name: "conchMap",
        component: () => import(/* webpackChunkName: "conchMap" */ "../page/pages/map_plugin/conchMap/conchMap")
    }
];

export default routers;
