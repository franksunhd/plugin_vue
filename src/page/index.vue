<template>
    <div class="appBox">
        <div class="elHeader">
            <div class="title">
                <span class="marginRight50">LOGO</span>
                <span class="fontSize">{{!!nowTime.year ? nowTime.year : "--"}}年</span>
                <span class="fontSize">{{!!nowTime.month ? nowTime.month : "--"}}月</span>
                <span class="fontSize">{{!!nowTime.day ? nowTime.day : "--"}}日</span>
                <span class="fontSize">{{!!nowTime.hour ? nowTime.hour : "--"}}时</span>
                <span class="fontSize">{{!!nowTime.min ? nowTime.min : "--"}}分</span>
                <span class="fontSize">{{!!nowTime.sec ? nowTime.sec : "--"}}秒</span>
            </div>
            <div>
                <el-select class="languageSelect marginRight20" v-model="defaultTheme"
                           @change="changeTheme">
                    <el-option
                            v-for="(item,index) in themeList"
                            :key="index"
                            :label="item.name"
                            :value="item.code"/>
                </el-select>
                <el-select class="languageSelect" v-model="defaultLang" @change="changeLang">
                    <el-option
                            v-for="(item,index) in languageList"
                            :key="index"
                            :label="item.name"
                            :value="item.code"/>
                </el-select>
            </div>
        </div>
        <div class="elAside" :class="isShow ? 'elAside_old' : 'elAside_new'">
            <menuBox :isShow="isShow" @isShow="isShowFun"/>
            <div class="elAside_bottom" @click="isShow = !isShow">
                <i v-show="isShow" class="iconItem el-icon-d-arrow-left"></i>
                <i v-show="!isShow" class="iconItem el-icon-d-arrow-right"></i>
            </div>
        </div>
        <div class="elMain" :class="isShow ? 'elMain_old' : 'elMain_new'">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import menuBox from "../components/menu";
    import {mapState, mapMutations} from "vuex";

    export default {
        name: "HomeBox",
        components: {menuBox},
        data() {
            return {
                isShow: false,
                defaultLang: sessionStorage.getItem("plugin_language") || "zh_CN", // 默认语言
                defaultTheme: sessionStorage.getItem("plugin_theme") || "light", // 默认主题
                languageList: [
                    {name: "简体中文", code: "zh_CN"},
                    {name: "EN", code: "en"}
                ],
                themeList: [
                    {name: "深色模式", code: "dark"},
                    {name: "浅色模式", code: "light"}
                ],
                nowTime: {
                    year: "", // 年
                    month: "", // 月
                    day: "", // 日
                    hour: "", // 时
                    min: "", // 分
                    sec: "" // 秒
                }
            };
        },
        computed: {
            ...mapState(["language"])
        },
        methods: {
            ...mapMutations(["changeLanguage"]),
            isShowFun(val) {
            },
            // 切换语言
            changeLang(val) {
                this.changeLanguage(val);
                sessionStorage.setItem("plugin_language", val);
                // 不刷新页面修改语言
                this.$i18n.locale = val;
            },
            // 切换主题
            changeTheme(val) {
                sessionStorage.setItem("plugin_theme", val);
                window.location.reload();
            },
            // 获取当前时间
            getCurrentTime() {
                let _this = this;
                let nowTime = new Date();
                _this.nowTime = {
                    year: nowTime.getFullYear(), // 年
                    month: _this.getDoubleNum(nowTime.getMonth() + 1), // 月
                    day: _this.getDoubleNum(nowTime.getDay()), // 日
                    hour: _this.getDoubleNum(nowTime.getHours()), // 时
                    min: _this.getDoubleNum(nowTime.getMinutes()), // 分
                    sec: _this.getDoubleNum(nowTime.getSeconds()) // 秒
                };
            },
            // 不够补0
            getDoubleNum(num) {
                if (num - 0 < 10) {
                    num = "0" + num;
                }
                return num;
            }
        },
        created() {
            let _this = this;
            _this.getCurrentTime();
            setInterval(function () {
                _this.getCurrentTime();
            }, 1000);
        }
    };
</script>

<style scoped lang="less">
    .appBox {
        width: 100%;
        height: 100%;
        overflow: hidden;

        .elHeader {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1;
            font-size: 0;
            padding: 0 20px;
            height: 80px !important;
            background-color: var(--mainColor);
            line-height: 80px !important;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .title {
                font-size: 26px;
                color: var(--whiteColor);
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
            }

            .fontSize {
                font-size: 22px;
            }

            /deep/ .languageSelect {
                width: 150px;

                .el-input__inner {
                    background-color: transparent;
                    color: var(--whiteColor);
                    font-weight: bolder;
                    border-color: var(--whiteColor);
                }

                .el-select,
                .el-input,
                .el-select__caret {
                    color: var(--whiteColor);
                }
            }
        }

        .elAside_old {
            width: 400px !important;
        }

        .elAside_new {
            width: 60px !important;
        }

        .elMain_old {
            left: 400px !important;
        }

        .elMain_new {
            left: 60px !important;
        }

        .elAside {
            position: fixed;
            top: 80px;
            left: 0;
            bottom: 0;
            z-index: 1;
            padding-bottom: 80px;
            background-color: var(--menuBg);

            /deep/ .el-submenu .el-menu-item {
                min-width: auto;
                box-sizing: border-box;
                padding: 0;
            }

            .elAside_bottom {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                line-height: 60px;
                height: 60px;
                background-color: var(--mainColor);
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;

                .iconItem {
                    font-size: 26px;
                    line-height: normal;
                    color: var(--whiteColor);
                }
            }
        }

        .elMain {
            position: fixed;
            top: 80px;
            right: 0;
            bottom: 0;
            z-index: 1;
            padding: 20px;
            overflow-y: auto;
        }
    }
</style>
