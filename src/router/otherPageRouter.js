/**
 * 其他模块 页面的路由配置
 */
// 引入配置
import common from "../config/common";
// 路由前缀
let companyName = common.companyName;

const routers = [
    {
        path: companyName + "/pageOne",
        name: "pageOne",
        component: () => import(/* webpackChunkName: "pageOne" */ "../page/pages/otherPage/pageOne")
    },

    {
        path: companyName + "/pageTwo",
        name: "pageTwo",
        component: () => import(/* webpackChunkName: "pageOne" */ "../page/pages/otherPage/pageTwo")
    }
];

export default routers;