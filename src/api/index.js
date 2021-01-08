import axios from "axios";

let root = "https://scrmsit.taikang.com/api/";

function apiAxios(method, url, params, success) {
    axios({
        method: method, // 请求方式 post get delete get等
        url: url, // 具体接口地址
        data: method === "POST" || method === "PUT" ? params : null,
        params: method === "GET" || method === "DELETE" ? params : null,
        baseURL: root, // base_url
        withCredentials: false  // cookie
    }).then(function (res) {
        // 成功时回调
        if (success) {
            success(res.data);
        }
    }).catch(function (err) {
        // 异常时回调
        return false;
    });
}

export default {
    get: function (url, params, success) {
        return apiAxios("GET", url, params, success);
    },
    post: function (url, params, success) {
        return apiAxios("POST", url, params, success);
    }
};

