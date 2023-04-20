/**
 * 移动端 模块页面的路由配置
 */
// 引入配置
import common from "../../config/common";
// 路由前缀
let companyName = common.companyName;

const routers = [
    // 圆形菜单
    {
        path: companyName + "/circleMenu",
        name: "circleMenu",
        component: () => import( /* webpackChunkName: "circleMenu" */ "../../page/pages/mobile_plugin/circleMenu/circleMenu")
    },
    // 手势密码
    {
        path: companyName + "/vueGesture",
        name: "vueGesture",
        component: () => import( /* webpackChunkName: "vueGesture" */ "../../page/pages/mobile_plugin/gesture/index")
    },
    // vue-awesome-swiper
    {
        path: companyName + "/aweSwiper",
        name: "aweSwiper",
        component: () => import( /* webpackChunkName: "aweSwiper" */ "../../page/pages/mobile_plugin/vueAwesomeSwiper/vueAwesomeSwiper")
    },
    // Recorder录音
    {
        path: companyName + "/Recorder",
        name: "Recorder",
        component: () => import( /* webpackChunkName: "Recorder" */ "../../page/pages/mobile_plugin/Recorder/Recorder")
    },
    // vueScroll自定义滚动条
    {
        path: companyName + "/vueScroll",
        name: "vueScroll",
        component: () => import( /* webpackChunkName: "vueScroll" */ "../../page/pages/mobile_plugin/vueScroll/index")
    },
    // getIP
    {
        path: companyName + "/getIP",
        name: "getIP",
        component: () => import(/* webpackChunkName: "getIP" */"../../page/pages/mobile_plugin/getIP/getIP")
    }
];

export default routers;
