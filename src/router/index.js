import Vue from 'vue';
import Router from 'vue-router';
import common from '../config/common';
// 主页
import Index from '../page/index';
// 首页
import Home from '../page/pages/Home';
// 错误页面
import ErrorPage from '../components/ErrorPage';
// markdown编辑器
import markdownEditor from '../page/pages/pc_plugin/markdownEditor';
// wangEditor富文本编辑器
import wangEditor from '../page/pages/pc_plugin/wangEditor';
// 复制粘贴插件
import clipboard from '../page/pages/pc_plugin/clipboard';
// 二维码插件
import qrCode from '../page/pages/pc_plugin/qrCode';
// vue-uEditor-warp 富文本插件
import vueUEditor from '../page/pages/pc_plugin/vueUEditor';
// html2canvas
import htmlToCanvas from '../page/pages/pc_plugin/htmlToCanvas';
// vue图片裁剪
import vueCropper from '../page/pages/pc_plugin/vueCropper';
// 封装提示
import myToastBox from '../page/pages/my_plugin/myToast/myToastBox';
// vueBus
import vueBus from '../page/pages/global_plugin/vueBus/vueBus';
// js-Cookies
import jsCookies from '../page/pages/global_plugin/jsCookies/index';
// moment-js
import moment from '../page/pages/global_plugin/Moment/moment';
// mock-js
import mockJs from '../page/pages/global_plugin/mockJs/index';
// lodash
import lodash from '../page/pages/global_plugin/lodash/index';
// videoPlayer
import videoPlayer from '../page/pages/my_plugin/videoPlayer';
// circleMenu
import circleMenu from '../page/pages/mobile_plugin/circleMenu/circleMenu';
// 手势密码
import vueGesture from '../page/pages/mobile_plugin/gesture/index';
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

Vue.use(Router);

let companyName = common.companyName;

export default new Router({
    routes: [
        {path: '/', redirect: '/' + companyName + '/index'},
        // Home页
        {path: '/' + companyName, redirect: '/' + companyName + '/index'},
        {
            path: '/' + companyName, name: 'index', component: Index, children: [
                // Home页的页面内容
                {path: '/' + companyName + '/index', name: 'Home', component: Home},
                {path: '/' + companyName + '/markdownEditor', name: 'markdownEditor', component: markdownEditor},
                {path: '/' + companyName + '/wangEditor', name: 'wangEditor', component: wangEditor},
                {path: '/' + companyName + '/clipboard', name: 'clipboard', component: clipboard},
                {path: '/' + companyName + '/qrCode', name: 'qrCode', component: qrCode},
                {path: '/' + companyName + '/vueUEditor', name: 'vueUEditor', component: vueUEditor},
                {path: '/' + companyName + '/htmlToCanvas', name: 'htmlToCanvas', component: htmlToCanvas},
                {path: '/' + companyName + '/vueCropper', name: 'vueCropper', component: vueCropper},
                {path: '/' + companyName + '/myToastBox', name: 'myToastBox', component: myToastBox},
                {path: '/' + companyName + '/vueBus', name: 'vueBus', component: vueBus},
                {path: '/' + companyName + '/jsCookies', name: 'jsCookies', component: jsCookies},
                {path: '/' + companyName + '/moment', name: 'moment', component: moment},
                {path: '/' + companyName + '/mock-js', name: 'mock-js', component: mockJs},
                {path: '/' + companyName + '/lodash', name: 'lodash', component: lodash},
                {path: '/' + companyName + '/videoPlayer', name: 'videoPlayer', component: videoPlayer},
                {path: '/' + companyName + '/circleMenu', name: 'circleMenu', component: circleMenu},
                {path: '/' + companyName + '/vueGesture', name: 'vueGesture', component: vueGesture},
                {path: '/' + companyName + '/distPicker', name: 'distPicker', component: distPicker},
                {path: '/' + companyName + '/svgIcon', name: 'svgIcon', component: svgIcon},
                {path: '/' + companyName + '/vueMeta', name: 'vueMeta', component: vueMeta},
                {path: '/' + companyName + '/aweDnd', name: 'aweDnd', component: aweDnd},
                {path: '/' + companyName + '/aweSwiper', name: 'aweSwiper', component: aweSwiper},
            ]
        },
        {path: '*', component: ErrorPage}
    ]
});
