import Vue from "vue";
// 高德地图
import aMap from "vue-amap";

Vue.use(aMap);

aMap.initAMapApiLoader({
    key: "59d042d7d0c0d51c89adad1c468fd711",
    plugin: [
        "AMap.Autocomplete",
        "AMap.PlaceSearch",
        "AMap.Scale",
        "AMap.OverView",
        "AMap.ToolBar",
        "AMap.MapType",
        "AMap.PolyEditor",
        "AMap.CircleEditor"
    ],
    uiVersion: "1.0",
    // 默认高德 sdk 版本为 1.4.4
    v: "1.4.4"
});
