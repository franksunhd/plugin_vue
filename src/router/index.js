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
import markdownEditor from '../page/pages/markdownEditor';
// wangEditor富文本编辑器
import wangEditor from '../page/pages/wangEditor';
// 复制粘贴插件
import clipboard from '../page/pages/clipboard';
// 二维码插件
import qrCode from '../page/pages/qrCode';
// vue-uEditor-warp 富文本插件
import vueUEditor from '../page/pages/vueUEditor';
// html2canvas
import htmlToCanvas from '../page/pages/htmlToCanvas';

Vue.use(Router);

let companyName = common.companyName;

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        { path: '/', redirect: '/' + companyName + '/index' },
        // Home页
        { path: '/' + companyName, redirect: '/' + companyName + '/index' },
        {
            path: '/' + companyName, name: 'index', component: Index, children: [
                // Home页的页面内容
                { path: '/' + companyName + '/index', name: 'Home', component: Home },
                { path: '/' + companyName + '/markdownEditor', name: 'markdownEditor', component: markdownEditor },
                { path: '/' + companyName + '/wangEditor', name: 'wangEditor', component: wangEditor },
                { path: '/' + companyName + '/clipboard', name: 'clipboard', component: clipboard },
                { path: '/' + companyName + '/qrCode', name: 'qrCode', component: qrCode },
                { path: '/' + companyName + '/vueUEditor', name: 'vueUEditor', component: vueUEditor },
                { path: '/' + companyName + '/htmlToCanvas', name: 'htmlToCanvas', component: htmlToCanvas },
            ]
        },
        { path: '*', component: ErrorPage }
    ]
});
