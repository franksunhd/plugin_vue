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
        // PC插件
        {
            path: '/' + common.companyName + '/pc_plugin',
            name: 'PC插件',
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
                },
                {
                    path: '/' + common.companyName + '/htmlToCanvas',
                    name: 'html转canvas',
                    icon: 'el-icon-edit-outline',
                    isSubMenu: false
                },
                {
                    path: '/' + common.companyName + '/vueCropper',
                    name: 'vue图片裁剪',
                    icon: 'el-icon-edit-outline',
                    isSubMenu: false
                }
            ]
        },
        // 移动端插件
        {
            path: '/' + common.companyName + '/mobile_plugin',
            name: '移动端插件',
            icon: 'el-icon-menu',
            isSubMenu: true,
            children: [
                {
                    path: '/' + common.companyName + '/circleMenu',
                    name: '圆形菜单',
                    icon: 'el-icon-edit-outline',
                    isSubMenu: false
                },
                {
                    path: '/' + common.companyName + '/vueGesture',
                    name: '手势密码',
                    icon: 'el-icon-edit-outline',
                    isSubMenu: false
                }
            ]
        },
        // 封装插件
        {
            path: '/' + common.companyName + '/my_plugin',
            name: '封装插件',
            icon: 'el-icon-menu',
            isSubMenu: true,
            children: [
                {
                    path: '/' + common.companyName + '/myToastBox',
                    name: '封装Toast',
                    icon: 'el-icon-edit-outline',
                    isSubMenu: false
                },
                {
                    path: '/' + common.companyName + '/videoPlayer',
                    name: 'videoPlayer',
                    icon: 'el-icon-edit-outline',
                    isSubMenu: false
                }
            ]
        },
        // 全局性方法
        {
            path: '/' + common.companyName + '/global_plugin',
            name: '全局性方法',
            icon: 'el-icon-menu',
            isSubMenu: true,
            children: [
                {
                    path: '/' + common.companyName + '/vueBus',
                    name: 'vue-bus',
                    icon: 'el-icon-edit-outline',
                    isSubMenu: false
                },
                {
                    path: '/' + common.companyName + '/jsCookies',
                    name: 'js-cookies',
                    icon: 'el-icon-edit-outline',
                    isSubMenu: false
                },
                {
                    path: '/' + common.companyName + '/moment',
                    name: 'moment-js',
                    icon: 'el-icon-edit-outline',
                    isSubMenu: false
                },
                {
                    path: '/' + common.companyName + '/mock-js',
                    name: 'mock-js',
                    icon: 'el-icon-edit-outline',
                    isSubMenu: false
                },
                {
                    path: '/' + common.companyName + '/lodash',
                    name: 'lodash',
                    icon: 'el-icon-edit-outline',
                    isSubMenu: false
                }
            ]
        }
    ]
};
