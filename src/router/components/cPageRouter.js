/**
 * C端模块 页面的路由配置
 */
const routers = [
    // 齿科专区首页
    {
        path: "/loveTeeth",
        name: "loveTeeth",
        component: () => import(/* webpackChunkName: "loveTeeth" */"../../page/pages/mobile/loveTeeth")
    },
    // 瀑布流页面
    {
        path: "/waterfall",
        name: "waterfall",
        component: () => import(/* webpackChunkName: "waterfall" */"../../page/pages/mobile/waterfall")
    },
    // vant页面
    {
        path: "/vantPage",
        name: "vantPage",
        component: () => import(/* webpackChunkName: "vantPage" */"../../page/pages/mobile/vantPage/index")
    }
];

export default routers;
