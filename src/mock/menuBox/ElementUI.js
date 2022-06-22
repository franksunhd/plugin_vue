/**
 * ElementUI模块导航配置
 */
import common from "../../config/common";

let companyName = common.companyName;

const menuList = [
    {
        path: companyName + "/elFormBox",
        name: "form表单",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    }
];
export default menuList;
