/**
 * 全局方法 组件页面的路由配置
 */
// 引入配置
import common from "../config/common";
// 路由前缀
let companyName = common.companyName;

const routers = [
    {
        path: companyName + "/vueBus",
        name: "vueBus",
        component: vueBus
    },
    {
        path: companyName + "/jsCookies",
        name: "jsCookies",
        component: jsCookies
    },
    {
        path: companyName + "/moment",
        name: "moment",
        component: moment
    },
    {
        path: companyName + "/mock-js",
        name: "mock-js",
        component: mockJs
    },
    {
        path: companyName + "/lodash",
        name: "lodash",
        component: lodash
    },
    {
        path: companyName + "/crypto",
        name: "Crypto",
        component: Crypto
    },
];

export default routers;
