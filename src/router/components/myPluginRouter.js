/**
 * 封装插件 组件页面的路由配置
 */
// 引入配置
import common from "../../config/common";
// 路由前缀
let companyName = common.companyName;

const routers = [
    // 封装提示
    {
        path: companyName + "/myToastBox",
        name: "myToastBox",
        component: () => import(/* webpackChunkName: "myToastBox" */ "../../page/pages/my_plugin/myToast/myToastBox")
    },
    // videoPlayer
    {
        path: companyName + "/videoPlayer",
        name: "videoPlayer",
        component: () => import(/* webpackChunkName: "videoPlayer" */ "../../page/pages/my_plugin/videoPlayer/index")
    },
    // 省市县三级联动
    {
        path: companyName + "/distPicker",
        name: "distPicker",
        component: () => import(/* webpackChunkName: "distPicker" */ "../../page/pages/my_plugin/distPicker/distPicker")
    },
    // 可变色的svg
    {
        path: companyName + "/svgIcon",
        name: "svgIcon",
        component: () => import(/* webpackChunkName: "svgIcon" */ "../../page/pages/my_plugin/svgIcon/svgIcon")
    },
    // vueMeta
    {
        path: companyName + "/vueMeta",
        name: "vueMeta",
        component: () => import(/* webpackChunkName: "vueMeta" */ "../../page/pages/my_plugin/vueMeta/vueMeta")
    },
    // 元素拖拽
    {
        path: companyName + "/aweDnd",
        name: "aweDnd",
        component: () => import(/* webpackChunkName: "aweDnd" */ "../../page/pages/my_plugin/aweDnd/aweDnd")
    },
    // 图片裁剪
    {
        path: companyName + "/imageClip",
        name: "imageClip",
        component: () => import(/* webpackChunkName: "imageClip" */"../../page/pages/my_plugin/imgClip/index")
    },
    // 转json
    {
        path: companyName + "/toJson",
        name: "toJson",
        component: () => import(/* webpackChunkName: "toJson" */ "../../page/pages/my_plugin/toJson/toJson")
    }
];

export default routers;
