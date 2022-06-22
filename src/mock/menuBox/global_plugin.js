/**
 * 全局方法模块导航配置
 */
import common from "../../config/common";

let companyName = common.companyName;

const menuList = [
    {
        path: companyName + "/vueBus",
        name: "vue-bus",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/jsCookies",
        name: "js-cookies",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/moment",
        name: "moment-js",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/mock-js",
        name: "mock-js",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/lodash",
        name: "lodash",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/crypto",
        name: "加解密",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    }
];
export default menuList;
