/**
 * 移动端模块导航配置
 */
import common from "../../config/common";

let companyName = common.companyName;

const menuList = [
    {
        path: companyName + "/circleMenu",
        name: "圆形菜单",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/vueGesture",
        name: "手势密码",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/aweSwiper",
        name: "vue-awesome-swiper",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/Recorder",
        name: "Recorder录音",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/vueScroll",
        name: "vue自定义滚动条",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/getIP",
        name: "获取IP地址",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    }
];
export default menuList;
