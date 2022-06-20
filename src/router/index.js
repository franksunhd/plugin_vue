import Vue from "vue";
import Router from "vue-router";
import menu from "../mock/index";
import {routers} from "./router";
// Progress 进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);

let router = new Router({
    mode: process.env.NODE_ENV === "production" ? "hash" : "history",
    base: process.env.BASE_URL,
    routes: routers
});

router.beforeEach((to, from, next) => {
    let menuList = menu.menuList;
    NProgress.start();
    menuList.forEach((item) => {
        if (!!item.children) {
            item.children.forEach((val) => {
                if (val.path === to.path) {
                    document.title = val.name;
                    next();
                }
            });
        } else {
            document.title = !!item.name ? item.name : "";
            next();
        }
    });
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
