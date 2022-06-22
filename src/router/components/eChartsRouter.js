/**
 * 图表模块 页面的路由配置
 */
// 引入配置
import common from "../../config/common";
// 路由前缀
let companyName = common.companyName;

const routers = [
    // 交叉正负轴
    {
        path: companyName + "/barNegative",
        name: "barNegative",
        component: () => import(/* webpackChunkName: "barNegative" */"../../page/pages/eCharts/bar-negative")
    },
    // 七色小花
    {
        path: companyName + "/drawCircle",
        name: "drawCircle",
        component: () => import(/* webpackChunkName: "drawCircle" */"../../page/pages/eCharts/drawCircle")
    },
];

export default routers;
