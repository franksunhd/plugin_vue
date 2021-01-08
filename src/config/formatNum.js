import Vue from "vue";

// 数字四舍五入保留两位小数
Vue.filter("formatNumToFixed", function (val) {
    if (typeof val == "number") {
        return val.toFixed(2);
    } else {
        return val;
    }
});
