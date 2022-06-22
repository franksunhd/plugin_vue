import common from "../config/common";

export default [
    // 首页
    {
        path: "/" + common.companyName + "/index",
        icon: "el-icon-s-home",
        name: "首页",
        isSubMenu: false,
        children: null
    },
    // PC插件
    {
        path: "/" + common.companyName + "/pc_plugin",
        name: "PC插件",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [
            {
                path: "/" + common.companyName + "/markdownEditor",
                name: "markdown编辑器",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/wangEditor",
                name: "wangEditor编辑器",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/vueUEditor",
                name: "vueUEditorWrap编辑器",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/clipboard",
                name: "复制粘贴插件",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/qrCode",
                name: "二维码及条形码插件",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/htmlToCanvas",
                name: "html转canvas",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/vueCropper",
                name: "vue图片裁剪",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/vueTyper",
                name: "打字效果",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/vuePdf",
                name: "pdf文件预览",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/viewerJs",
                name: "相册",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/leaflet",
                name: "leaflet地图",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            }
        ]
    },
    // ElementUI
    {
        path: "/" + common.companyName + "/element_plugin",
        name: "ElementUI",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [
            {
                path: "/" + common.companyName + "/elFormBox",
                name: "form表单",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
        ]
    },
    // 移动端插件
    {
        path: "/" + common.companyName + "/mobile_plugin",
        name: "移动端插件",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [
            {
                path: "/" + common.companyName + "/circleMenu",
                name: "圆形菜单",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/vueGesture",
                name: "手势密码",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/aweSwiper",
                name: "vue-awesome-swiper",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/Recorder",
                name: "Recorder录音",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/vueScroll",
                name: "vue自定义滚动条",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            }
        ]
    },
    // 封装插件
    {
        path: "/" + common.companyName + "/my_plugin",
        name: "封装插件",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [
            {
                path: "/" + common.companyName + "/myToastBox",
                name: "封装Toast",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/videoPlayer",
                name: "videoPlayer",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/distPicker",
                name: "省市县三级联动",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/svgIcon",
                name: "可变色的svg",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/vueMeta",
                name: "vue-meta",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/aweDnd",
                name: "元素元素拖拽",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/imageClip",
                name: "vue图片裁剪封装",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/toJson",
                name: "toJson",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/dyForm",
                name: "动态表单",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            }
        ]
    },
    // 全局性方法
    {
        path: "/" + common.companyName + "/global_plugin",
        name: "全局性方法",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [
            {
                path: "/" + common.companyName + "/vueBus",
                name: "vue-bus",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/jsCookies",
                name: "js-cookies",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/moment",
                name: "moment-js",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/mock-js",
                name: "mock-js",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/lodash",
                name: "lodash",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/crypto",
                name: "加解密",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            }
        ]
    },
    // 地图集合
    {
        path: "/" + common.companyName + "/map_plugin",
        name: "地图集合",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [
            {
                path: "/" + common.companyName + "/vueAMap",
                name: "高德地图",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/chinaMap",
                name: "模拟中国肺炎效果",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/worldMap",
                name: "模拟世界肺炎效果",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/wordCloud",
                name: "词云图",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/sunMap",
                name: "文学太阳图",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/conchMap",
                name: "疫情海螺图",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            }
        ]
    },
    // 抽奖
    {
        path: "/" + common.companyName + "/luck_plugin",
        name: "抽奖集合",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [
            {
                path: "/" + common.companyName + "/luckyDraw",
                name: "九宫格抽奖",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/luckyDraw_new",
                name: "九宫格抽奖(新)",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/rotaryDraw",
                name: "转盘抽奖",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/tigerDraw",
                name: "老虎机抽奖",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/eggDraw",
                name: "扭蛋机抽奖",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            }
        ]
    },
    // 游戏
    {
        path: "/" + common.companyName + "/game_plugin",
        name: "游戏集合",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [
            {
                path: "/" + common.companyName + "/playground",
                name: "运动场",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/Countdown",
                name: "房价计算",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/overtimePay",
                name: "加班费",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/nprogress",
                name: "nprogress进度条",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/mock",
                name: "mock",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/mouseClick",
                name: "鼠标点击",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            }
        ]
    },
    // 移动端
    {
        path: "/loveTeeth",
        name: "C端页面",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [
            {
                path: "/loveTeeth",
                name: "齿科专区",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/waterfall",
                name: "瀑布流页面",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/vantPage",
                name: "vant组件",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            }
        ]
    },
    // eCharts
    {
        path: "/" + common.companyName + "/eCharts",
        name: "图表",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [
            {
                path: "/" + common.companyName + "/barNegative",
                name: "eCharts交叉正负轴",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/drawCircle",
                name: "七色小花",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            }
        ]
    },
    // 其他
    {
        path: "/" + common.companyName + "/others",
        name: "其他",
        icon: "el-icon-s-help",
        isSubMenu: true,
        children: [
            {
                path: "/" + common.companyName + "/pageOne",
                name: "其他项一",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            },
            {
                path: "/" + common.companyName + "/pageTwo",
                name: "其他项二",
                icon: "el-icon-bottom-right",
                isSubMenu: false
            }
        ]
    }
];
