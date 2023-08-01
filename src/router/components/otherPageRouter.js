/**
 * 其他模块 页面的路由配置
 */
// 引入配置
import common from "../../config/common";
// 路由前缀
let companyName = common.companyName;

const routers = [
    // 其他项一
    {
        path: companyName + "/pageOne",
        name: "pageOne",
        component: () => import(/* webpackChunkName: "pageOne" */ "../../page/pages/otherPage/pageOne")
    },
    // 分屏
    {
        path: companyName + "/pageTwo",
        name: "pageTwo",
        component: () => import(/* webpackChunkName: "pageTwo" */ "../../page/pages/otherPage/pageTwo")
    },
    // JSON数据解析
    {
        path: companyName + "/pageJSON",
        name: "pageJSON",
        component: () => import(/* webpackChunkName: "pageJSON" */ "../../page/pages/otherPage/pageJSON")
    },
    // 花费
    {
        path: companyName + "/pageThree",
        name: "pageThree",
        component: () => import(/* webpackChunkName: "pageThree" */ "../../page/pages/otherPage/pageThree")
    },
    // 链接生成二维码
    {
        path: companyName + "/codeImg",
        name: "codeImg",
        component: () => import(/* webpackChunkName: "codeImg" */ "../../page/pages/otherPage/codeImg")
    },
    // 鼠标全屏移动
    {
        path: companyName + "/mouseScreen",
        name: "mouseScreen",
        component: () => import(/* webpackChunkName: "mouseScreen" */ "../../page/pages/otherPage/mouseScreen")
    },
];

export default routers;
