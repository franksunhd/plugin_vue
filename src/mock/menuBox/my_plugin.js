/**
 * 封装插件模块导航配置
 */
import common from "../../config/common";

let companyName = common.companyName;

const menuList = [
    {
        path: companyName + "/myToastBox",
        name: "封装Toast",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/videoPlayer",
        name: "videoPlayer",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/distPicker",
        name: "省市县三级联动",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/svgIcon",
        name: "可变色的svg",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/vueMeta",
        name: "vue-meta",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/aweDnd",
        name: "元素元素拖拽",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/imageClip",
        name: "vue图片裁剪封装",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/toJson",
        name: "toJson",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/elFormBox",
        name: "动态表单",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    }
];
export default menuList;
