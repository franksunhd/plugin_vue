/**
 * 地图模块导航配置
 */
import common from "../../config/common";

let companyName = common.companyName;

const menuList = [
    {
        path: companyName + "/vueAMap",
        name: "高德地图",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/chinaMap",
        name: "模拟中国肺炎效果",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/worldMap",
        name: "模拟世界肺炎效果",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/wordCloud",
        name: "词云图",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/sunMap",
        name: "文学太阳图",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/conchMap",
        name: "疫情海螺图",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    }
];
export default menuList;
