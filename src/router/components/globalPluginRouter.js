/**
 * 全局方法 组件页面的路由配置
 */
// 引入配置
import common from "../../config/common";
// 路由前缀
let companyName = common.companyName;

const routers = [
    // vueBus
    {
        path: companyName + "/vueBus",
        name: "vueBus",
        component: () => import(/* webpackChunkName: "vueBus" */"../../page/pages/global_plugin/vueBus/vueBus")
    },
    // js-Cookies
    {
        path: companyName + "/jsCookies",
        name: "jsCookies",
        component: () => import(/* webpackChunkName: "jsCookies" */"../../page/pages/global_plugin/jsCookies/index")
    },
    // moment-js
    {
        path: companyName + "/moment",
        name: "moment",
        component: () => import(/* webpackChunkName: "moment" */"../../page/pages/global_plugin/Moment/moment")
    },
    // mock-js
    {
        path: companyName + "/mock-js",
        name: "mock-js",
        component: () => import(/* webpackChunkName: "mock-js" */"../../page/pages/global_plugin/mockJs/index")
    },
    // lodash
    {
        path: companyName + "/lodash",
        name: "lodash",
        component: () => import(/* webpackChunkName: "lodash" */"../../page/pages/global_plugin/lodash/index")
    },
    // 加解密
    {
        path: companyName + "/crypto",
        name: "Crypto",
        component: () => import(/* webpackChunkName: "Crypto" */"../../page/pages/global_plugin/crypto/index")
    }
];

export default routers;
