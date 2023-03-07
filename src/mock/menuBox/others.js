/**
 * 其他模块导航配置
 */
import common from "../../config/common";

let companyName = common.companyName;

const menuList = [
    {
        path: companyName + "/pageOne",
        name: "其他项一",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/pageTwo",
        name: "分屏",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/pageJSON",
        name: "JSON解析",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/pageThree",
        name: "花费",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
];
export default menuList;
