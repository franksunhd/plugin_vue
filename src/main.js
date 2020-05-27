// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// 引入elementUI
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入vue的markdown编辑器
import markdownEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
// 使用vue的markdown编辑器
Vue.use(markdownEditor);
// 使用ElementUI
Vue.use(elementUI);
import './assets/css/base.css';
import './assets/css/common.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
