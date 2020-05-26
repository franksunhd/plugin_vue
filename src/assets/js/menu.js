import common from '../../config/common';

export default {
    menuList: [
        // 首页
        {
            path: '/' + common.companyName + '/index',
            icon: 'el-icon-s-home',
            name: '首页',
            isSubMenu: false
        },
        // 插件
        {
            path: '/' + common.companyName + '/plugin',
            name: '插件',
            icon: 'el-icon-menu',
            isSubMenu: true,
            children: [
                {
                    path: '/' + common.companyName + '/markdownEditor',
                    name: 'markdown编辑器',
                    icon: 'el-icon-edit-outline',
                    isSubMenu: false
                },
                {
                    path: '/' + common.companyName + '/wangEditor',
                    name: 'wangEditor编辑器',
                    icon: 'el-icon-edit-outline',
                    isSubMenu: false
                },
                {
                    path: '/' + common.companyName + '/vueUEditor',
                    name: 'vueUEditorWrap编辑器',
                    icon: 'el-icon-edit-outline',
                    isSubMenu: false
                },
                {
                    path: '/' + common.companyName + '/clipboard',
                    name: '复制粘贴插件',
                    icon: 'el-icon-edit-outline',
                    isSubMenu: false
                },
                {
                    path: '/' + common.companyName + '/qrCode',
                    name: '二维码及条形码插件',
                    icon: 'el-icon-edit-outline',
                    isSubMenu: false
                }
            ]
        },
        // 第三组
    ]
};
