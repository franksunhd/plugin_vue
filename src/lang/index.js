import Vue from "vue";
import VueI18n from "vue-i18n";
import elementEnLocale from "element-ui/lib/locale/lang/en";
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN";
import enLocale from "./en";
import zhLocale from "./zh-cn";

Vue.use(VueI18n);

const messages = {
    en: {
        ...enLocale,
        ...elementEnLocale
    },
    zh_CN: {
        ...zhLocale,
        ...elementZhLocale
    }
};

const i18n = new VueI18n({
    locale: sessionStorage.getItem("plugin_language") || "zh_CN", // 语言标识
    messages,
    silentFallbackWarn: true  // 设置为true后，在组件内使用时在浏览器不会报警告
});

export default i18n;
