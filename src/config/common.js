// 路由中嵌套的级别名称
let companyName = "yUser";

// 生成随机数的方法
function randomNum(Min, Max) {
    let Range = Max - Min;
    let Rand = Math.random();
    return Min + Math.round(Rand * Range); // 四舍五入
}

// 获取浏览器的语言
function getLanguage() {
    let lang = navigator.language || navigator.userLanguage; // 常规浏览器语言和IE浏览器
    lang = lang.substr(0, 2); // 截取lang前2位字符
    return lang;
}

// 获取对象类型
function getType(obj) {
    // tostring会返回对应不同的标签的构造函数
    let toString = Object.prototype.toString;
    let map = {
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object String]": "string",
        "[object Function]": "function",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regExp",
        "[object Undefined]": "undefined",
        "[object Null]": "null",
        "[object Object]": "object"
    };
    if (obj instanceof Element) {
        return "element";
    }
    return map[toString.call(obj)];
}

// 是否安卓
function isAndroid() {
    let isAndroid;
    let u = navigator.userAgent;
    isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1;
    return isAndroid;
}

// 是否iOS
function isiOS() {
    let isiOS;
    let u = navigator.userAgent;
    isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    return isiOS;
}


export default {
    companyName,
    randomNum,
    getLanguage,
    getType,
    isAndroid,
    isiOS
};
