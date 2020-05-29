// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'babel-polyfill';
// 引入elementUI
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入vue的markdown编辑器
import markdownEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import './assets/css/base.css';
import './assets/css/common.css';
import myButton from './page/pages/my_plugin/myToast/detail/myToast';
import vueBus from 'vue-bus';
import jsCookies from 'js-cookies';
// 引入过滤器
import * as custom from './assets/js/formatDate';

Vue.use(vueBus);
Vue.use(myButton);
Vue.use(markdownEditor);
Vue.use(elementUI);

Vue.prototype.$cookies = jsCookies;
Vue.config.productionTip = false;
Object.keys(custom).forEach(key => {
    Vue.filter(key, custom[key])
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
