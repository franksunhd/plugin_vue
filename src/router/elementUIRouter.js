/**
 * elementUI 组件页面的路由配置
 */
// 引入配置
import common from "../config/common";
// 路由前缀
let companyName = common.companyName;

const routers = [
    // el-form 表单
    {
        path: companyName + "/elFormBox", name: "elFormBox",
        component: () => import( /* webpackChunkName: "elFormBox" */ "../page/pages/pc_plugin/ElementUI/elForm")
    }
];

export default routers;
