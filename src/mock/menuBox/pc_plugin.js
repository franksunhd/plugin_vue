/**
 * PC端模块导航配置
 */
import common from "../../config/common";

let companyName = common.companyName;

const menuList = [
    {
        path: companyName + "/markdownEditor",
        name: "markdown编辑器",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/wangEditor",
        name: "wangEditor编辑器",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/vueUEditor",
        name: "vueUEditorWrap编辑器",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/clipboard",
        name: "复制粘贴插件",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/qrCode",
        name: "二维码及条形码插件",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/htmlToCanvas",
        name: "html转canvas",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/vueCropper",
        name: "vue图片裁剪",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/vueTyper",
        name: "打字效果",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/vuePdf",
        name: "pdf文件预览",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/viewerJs",
        name: "相册",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    },
    {
        path: companyName + "/leaflet",
        name: "leaflet地图",
        icon: "el-icon-bottom-right",
        isSubMenu: false
    }
];

export default menuList;
