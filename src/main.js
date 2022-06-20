// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
// 兼容性
import "babel-polyfill";
// px转rem
import "lib-flexible";
// 格式化样式
import "./assets/css/base.css";
import "./assets/css/common.css";
// 引入ElementUI
import "./config/elementAndI18n";
// 引入国际化语言
import i18n from "./lang/index";
// 引入vuex
import store from "./store/index";
// 引入vue的markdown编辑器
import markdownEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
// 自定义组件
import myButton from "./page/pages/my_plugin/myToast/detail/myToast";
// 总线
import vueBus from "vue-bus";
// cookies
import jsCookies from "js-cookies";
// 引入过滤器
import * as custom from "./config/formatDate";
// lodash
import lodash from "lodash";
// 视频播放器
import videoPlayer from "vue-video-player";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
// 颜色选择器
import colorPicker from "vcolorpicker";
// meta 设置
import VueMeta from "vue-meta";
// 拖拽
import VueDND from "awe-dnd";
// 轮播图
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
// 引入vConsole
import VConsole from "vconsole";

// vue-scroll
import vueScroll from "vuescroll";
import "vuescroll/dist/vuescroll.css";
// 打字机效果
import Typewriter from "vue-typewriter";
// echarts
import echarts from "echarts";
// 引入api
import api from "./api/index";
// 高德地图
import "./config/aMap";
// 引入vant
import "./config/vantJS";
// 引入进度条
import "./config/VueProgressBar";
// 引入过滤函数
import "./config/formatNum";
// 公用方法
import commonJS from "./config/common";

Vue.use(vueBus);
Vue.use(myButton);
Vue.use(markdownEditor);
Vue.use(videoPlayer);
Vue.use(colorPicker);
Vue.use(VueMeta);
Vue.use(VueDND);
Vue.use(VueAwesomeSwiper);
Vue.use(vueScroll);
Vue.use(Typewriter);

Vue.prototype.$cookies = jsCookies;
Vue.prototype.$lodash = lodash;
Vue.prototype.$echarts = echarts;
Vue.prototype.$api = api;
Vue.prototype.$randomNum = commonJS.randomNum;
Vue.config.productionTip = false;

Object.keys(custom).forEach(key => {
    Vue.filter(key, custom[key]);
});

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    i18n,
    store: store,
    components: {App},
    template: "<App/>"
});
