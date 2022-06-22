/**
 * pc_plugin 模块页面的路由配置
 */
// 引入配置
import common from "../config/common";
// 路由前缀
let companyName = common.companyName;

const routers = [
    // markdown编辑器
    {
        path: companyName + "/markdownEditor",
        name: "markdownEditor",
        component: () => import(/* webpackChunkName: "markdownEditor" */"../page/pages/pc_plugin/markdownEditor")
    },
    // wangEditor富文本编辑器
    {
        path: companyName + "/wangEditor",
        name: "wangEditor",
        component: () => import(/* webpackChunkName: "wangEditor" */"../page/pages/pc_plugin/wangEditor")
    },
    // vue-uEditor-warp 富文本插件
    {
        path: companyName + "/vueUEditor",
        name: "vueUEditor",
        component: () => import(/* webpackChunkName: "vueUEditor" */"../page/pages/pc_plugin/vueUEditor")
    },
    // 复制粘贴插件
    {
        path: companyName + "/clipboard",
        name: "clipboard",
        component: () => import(/* webpackChunkName: "clipboard" */"../page/pages/pc_plugin/clipboard")
    },
    // 二维码插件
    {
        path: companyName + "/qrCode",
        name: "qrCode",
        component: () => import(/* webpackChunkName: "qrCode" */"../page/pages/pc_plugin/qrCode")
    },
    // html2canvas
    {
        path: companyName + "/htmlToCanvas",
        name: "htmlToCanvas",
        component: () => import(/* webpackChunkName: "htmlToCanvas" */"../page/pages/pc_plugin/htmlToCanvas")
    },
    // vue图片裁剪
    {
        path: companyName + "/vueCropper",
        name: "vueCropper",
        component: () => import(/* webpackChunkName: "vueCropper" */"../page/pages/pc_plugin/vueCropper")
    },
    // 打字预览
    {
        path: companyName + "/vueTyper",
        name: "vueTyper",
        component: () => import(/* webpackChunkName: "vueTyper" */"../page/pages/pc_plugin/vueTyper/index")
    },
    // vue-pdf 预览
    {
        path: companyName + "/vuePdf",
        name: "vuePdf",
        component: () => import(/* webpackChunkName: "vuePdf" */"../page/pages/pc_plugin/vuePdf")
    },
    // 相册
    {
        path: companyName + "/viewerJs",
        name: "viewerJs",
        component: () => import(/* webpackChunkName: "viewerJs" */"../page/pages/pc_plugin/viewerJs")
    },
    // leaflet 地图
    {
        path: companyName + "/leaflet",
        name: "leaflet",
        component: () => import( /* webpackChunkName: "leaflet" */ "../page/pages/pc_plugin/leafletMap/leaflet")
    }
];

export default routers;
