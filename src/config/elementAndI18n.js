import Vue from "vue";
// 引入elementUI
import elementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 引入国际化语言
import i18n from "../lang/index";

Vue.use(elementUI, {
    i18n: (key, value) => i18n.t(key, value)
});
