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
import myToastBox from '../page/pages/my_plugin/myToastBox';

Vue.use(Router);

let companyName = common.companyName;

export default new Router({
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
                { path: '/' + companyName + '/vueCropper', name: 'vueCropper', component: vueCropper },
                { path: '/' + companyName + '/myToastBox', name: 'myToastBox', component: myToastBox },
            ]
        },
        { path: '*', component: ErrorPage }
    ]
});
