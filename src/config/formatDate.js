import moment from "moment";
// 默认修改语言为中文简体
moment.locale("zh-cn");

function isNotTime(time) {
    if (time === "" || !time) {
        return null;
    }
}

// 1900-01-01 12:00:00
let formatDate = (time) => {
    isNotTime(time);
    return moment(time).format("YYYY-MM-DD HH:mm:ss");
};

// 当前星期
let currentWeek = (time) => {
    isNotTime(time);
    return moment(time).format("dddd");
};

// 10:53
let format_LT = (time) => {
    isNotTime(time);
    return moment(time).format("LT");
};

// 10:53:49
let format_LTS = (time) => {
    isNotTime(time);
    return moment(time).format("LTS");
};

// 2020/05/29
let format_L = (time) => {
    isNotTime(time);
    return moment(time).format("L");
};

// 2020/5/29
let format_l = (time) => {
    isNotTime(time);
    return moment(time).format("l");
};

// 2020年5月29日
let format_LL = (time) => {
    isNotTime(time);
    return moment(time).format("LL");
};

// 2020年5月29日
let format_ll = (time) => {
    isNotTime(time);
    return moment(time).format("ll");
};

// 2020年5月29日上午10点53分
let format_LLL = (time) => {
    isNotTime(time);
    return moment(time).format("LLL");
};

// 2020年5月29日 10:53
let format_lll = (time) => {
    isNotTime(time);
    return moment(time).format("lll");
};

// 2020年5月29日星期五上午10点53分
let format_LLLL = (time) => {
    isNotTime(time);
    return moment(time).format("LLLL");
};

// 2020年5月29日星期五 10:53
let format_llll = (time) => {
    isNotTime(time);
    return moment(time).format("llll");
};

export {
    formatDate,
    currentWeek,
    format_LT,
    format_LTS,
    format_L,
    format_l,
    format_LL,
    format_ll,
    format_LLL,
    format_lll,
    format_LLLL,
    format_llll
};
