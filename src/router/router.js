import common from "../config/common";
// 主页
import Index from "../page/index";
// 首页
import Home from "../page/pages/Home";
// 错误页面
import ErrorPage from "../components/ErrorPage";
// markdown编辑器
import markdownEditor from "../page/pages/pc_plugin/markdownEditor";
// wangEditor富文本编辑器
import wangEditor from "../page/pages/pc_plugin/wangEditor";
// 复制粘贴插件
import clipboard from "../page/pages/pc_plugin/clipboard";
// 二维码插件
import qrCode from "../page/pages/pc_plugin/qrCode";
// vue-uEditor-warp 富文本插件
import vueUEditor from "../page/pages/pc_plugin/vueUEditor";
// html2canvas
import htmlToCanvas from "../page/pages/pc_plugin/htmlToCanvas";
// vue图片裁剪
import vueCropper from "../page/pages/pc_plugin/vueCropper";
// 封装提示
import myToastBox from "../page/pages/my_plugin/myToast/myToastBox";
// vueBus
import vueBus from "../page/pages/global_plugin/vueBus/vueBus";
// js-Cookies
import jsCookies from "../page/pages/global_plugin/jsCookies/index";
// moment-js
import moment from "../page/pages/global_plugin/Moment/moment";
// mock-js
import mockJs from "../page/pages/global_plugin/mockJs/index";
// lodash
import lodash from "../page/pages/global_plugin/lodash/index";
// videoPlayer
import videoPlayer from "../page/pages/my_plugin/videoPlayer";
// circleMenu
import circleMenu from "../page/pages/mobile_plugin/circleMenu/circleMenu";
// 手势密码
import vueGesture from "../page/pages/mobile_plugin/gesture/index";
// 省市县三级联动
import distPicker from "../page/pages/my_plugin/distPicker/distPicker";
// 可变色的svg
import svgIcon from "../page/pages/my_plugin/svgIcon/svgIcon";
// vueMeta
import vueMeta from "../page/pages/my_plugin/vueMeta/vueMeta";
// 元素拖拽
import aweDnd from "../page/pages/my_plugin/aweDnd/aweDnd";
// vue-awesome-swiper
import aweSwiper from "../page/pages/mobile_plugin/vueAwesomeSwiper/vueAwesomeSwiper";
// 录音
import Recorder from "../page/pages/mobile_plugin/Recorder/Recorder";
// 图片裁剪
import imageClip from "../page/pages/pc_plugin/imgClip/index";
// vue-scroll
import vueScroll from "../page/pages/mobile_plugin/vueScroll/index";
// vueTyper
import vueTyper from "../page/pages/pc_plugin/vueTyper/index";
// vue-amap
import vueAMap from "../page/pages/map_plugin/vueAMap/index";
// 中国地图
import chinaMap from "../page/pages/map_plugin/chinaMap/chinaMap";
// 世界地图
import worldMap from "../page/pages/map_plugin/worldMap/worldMap";
// 词云图
import wordCloud from "../page/pages/map_plugin/wordCloud/wordCloud";
// 文学太阳图
import sunMap from "../page/pages/map_plugin/sunMap/sunMap";
// 疫情海螺图
import conchMap from "../page/pages/map_plugin/conchMap/conchMap";
// 九宫格抽奖
import luckyDraw from "../page/pages/luck_plugin/luckyDraw";
// 九宫格抽奖新
import luckyDraw_new from "../page/pages/luck_plugin/luckyDraw_new";
// 大转盘抽奖
import rotaryDraw from "../page/pages/luck_plugin/rotaryDraw";
// 老虎机
import tigerDraw from "../page/pages/luck_plugin/tigerDraw";
// 转json
import toJson from "../page/pages/global_plugin/toJson/toJson";
// 扭蛋机抽奖
import eggDraw from "../page/pages/luck_plugin/eggDraw";
// 运动场
import playground from "../page/pages/game_plugin/playground";
// 动态表单
import dyForm from "../page/pages/my_plugin/dy_form/dyForm.vue";
// 齿科专区首页
import loveTeeth from "../page/pages/mobile/loveTeeth";
// 瀑布流页面
import waterfall from "../page/pages/mobile/waterfall";
// vant页面
import vantPage from "../page/pages/mobile/vantPage/index";
// 加解密
import Crypto from "../page/pages/global_plugin/crypto/index";
// 房价计算
import Countdown from "../page/pages/game_plugin/Countdown";
// 加班费
import overtimePay from "../page/pages/game_plugin/overtimePay";
// 加载进度条
import nprogress from "../page/pages/game_plugin/nprogress";
// mock
import mock from "../page/pages/game_plugin/mock";
// 鼠标点击
import mouseClick from "../page/pages/game_plugin/mouseClick";
// 交叉正负轴
import barNegative from "../page/pages/eCharts/bar-negative";
// 七色小花
import drawCircle from "../page/pages/eCharts/drawCircle";
// vue-pdf 预览
import vuePdf from "../page/pages/pc_plugin/vuePdf";
// 其他
import pageOne from "../page/pages/otherPage/pageOne";
import pageTwo from "../page/pages/otherPage/pageTwo";
// 相册
import viewerJs from "../page/pages/pc_plugin/viewerJs";
// leaflet 地图
import leaflet from "../page/pages/pc_plugin/leafletMap/leaflet";
/*------ elementUI 部分 start -----*/
// 表单
import elForm from "../page/pages/pc_plugin/ElementUI/elForm";

/*------ elementUI 部分 end -----*/


let companyName = common.companyName;

export const routers = [
    {path: "/", redirect: "/" + companyName + "/index"},
    // Home页
    {path: "/" + companyName, redirect: "/" + companyName + "/index"},
    {
        path: "/" + companyName, name: "index", component: Index, children: [
            // Home页的页面内容
            {path: "/" + companyName + "/index", name: "Home", component: Home},
            {path: "/" + companyName + "/markdownEditor", name: "markdownEditor", component: markdownEditor},
            {path: "/" + companyName + "/wangEditor", name: "wangEditor", component: wangEditor},
            {path: "/" + companyName + "/clipboard", name: "clipboard", component: clipboard},
            {path: "/" + companyName + "/qrCode", name: "qrCode", component: qrCode},
            {path: "/" + companyName + "/vueUEditor", name: "vueUEditor", component: vueUEditor},
            {path: "/" + companyName + "/htmlToCanvas", name: "htmlToCanvas", component: htmlToCanvas},
            {path: "/" + companyName + "/vueCropper", name: "vueCropper", component: vueCropper},
            {path: "/" + companyName + "/myToastBox", name: "myToastBox", component: myToastBox},
            {path: "/" + companyName + "/vueBus", name: "vueBus", component: vueBus},
            {path: "/" + companyName + "/jsCookies", name: "jsCookies", component: jsCookies},
            {path: "/" + companyName + "/moment", name: "moment", component: moment},
            {path: "/" + companyName + "/mock-js", name: "mock-js", component: mockJs},
            {path: "/" + companyName + "/lodash", name: "lodash", component: lodash},
            {path: "/" + companyName + "/videoPlayer", name: "videoPlayer", component: videoPlayer},
            {path: "/" + companyName + "/circleMenu", name: "circleMenu", component: circleMenu},
            {path: "/" + companyName + "/vueGesture", name: "vueGesture", component: vueGesture},
            {path: "/" + companyName + "/distPicker", name: "distPicker", component: distPicker},
            {path: "/" + companyName + "/svgIcon", name: "svgIcon", component: svgIcon},
            {path: "/" + companyName + "/vueMeta", name: "vueMeta", component: vueMeta},
            {path: "/" + companyName + "/aweDnd", name: "aweDnd", component: aweDnd},
            {path: "/" + companyName + "/aweSwiper", name: "aweSwiper", component: aweSwiper},
            {path: "/" + companyName + "/Recorder", name: "Recorder", component: Recorder},
            {path: "/" + companyName + "/imageClip", name: "imageClip", component: imageClip},
            {path: "/" + companyName + "/vueScroll", name: "vueScroll", component: vueScroll},
            {path: "/" + companyName + "/vueTyper", name: "vueTyper", component: vueTyper},
            {path: "/" + companyName + "/vueAMap", name: "vueAMap", component: vueAMap},
            {path: "/" + companyName + "/chinaMap", name: "chinaMap", component: chinaMap},
            {path: "/" + companyName + "/worldMap", name: "worldMap", component: worldMap},
            {path: "/" + companyName + "/wordCloud", name: "wordCloud", component: wordCloud},
            {path: "/" + companyName + "/sunMap", name: "sunMap", component: sunMap},
            {path: "/" + companyName + "/conchMap", name: "conchMap", component: conchMap},
            {path: "/" + companyName + "/luckyDraw", name: "luckyDraw", component: luckyDraw},
            {path: "/" + companyName + "/luckyDraw_new", name: "luckyDraw_new", component: luckyDraw_new},
            {path: "/" + companyName + "/rotaryDraw", name: "rotaryDraw", component: rotaryDraw},
            {path: "/" + companyName + "/tigerDraw", name: "tigerDraw", component: tigerDraw},
            {path: "/" + companyName + "/toJson", name: "toJson", component: toJson},
            {path: "/" + companyName + "/eggDraw", name: "eggDraw", component: eggDraw},
            {path: "/" + companyName + "/playground", name: "playground", component: playground},
            {path: "/" + companyName + "/dyForm", name: "dyForm", component: dyForm},
            {path: "/" + companyName + "/crypto", name: "Crypto", component: Crypto},
            {path: "/" + companyName + "/Countdown", name: "Countdown", component: Countdown},
            {path: "/" + companyName + "/overtimePay", name: "overtimePay", component: overtimePay},
            {path: "/" + companyName + "/nprogress", name: "nprogress", component: nprogress},
            {path: "/" + companyName + "/mock", name: "mock", component: mock},
            {path: "/" + companyName + "/mouseClick", name: "mouseClick", component: mouseClick},
            {path: "/" + companyName + "/barNegative", name: "barNegative", component: barNegative},
            {path: "/" + companyName + "/drawCircle", name: "drawCircle", component: drawCircle},
            {path: "/" + companyName + "/vuePdf", name: "vuePdf", component: vuePdf},
            {path: "/" + companyName + "/pageOne", name: "pageOne", component: pageOne},
            {path: "/" + companyName + "/viewerJs", name: "viewerJs", component: viewerJs},
            {path: "/" + companyName + "/pageTwo", name: "pageTwo", component: pageTwo},
            {path: "/" + companyName + "/leaflet", name: "leaflet", component: leaflet},
            {path: "/" + companyName + "/elFormBox", name: "elForm", component: elForm}

        ]
    },
    {path: "/loveTeeth", name: "loveTeeth", component: loveTeeth},
    {path: "/waterfall", name: "waterfall", component: waterfall},
    {path: "/vantPage", name: "vantPage", component: vantPage},
    {path: "*", component: ErrorPage}
];
