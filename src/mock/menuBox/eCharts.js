/**
 * eCharts模块导航配置
 */
import common from "../../config/common";

let companyName = common.companyName;

const menuList = [

    {
        path: companyName + "/barNegative",
        name: "eCharts交叉正负轴",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/drawCircle",
        name: "七色小花",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    }

];
export default menuList;
