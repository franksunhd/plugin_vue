<template>
    <div class="vantPage">
        <div class="firstPage" v-show="activeName === ''">
            <div class="titleBox">
                <img src="https://img.yzcdn.cn/vant/logo.png" alt="">
                <span>Vant</span>
            </div>
            <div class="desBox">轻量、可靠的移动端 Vue 组件库</div>
            <ul class="navBox">
                <li class="title">基础组件</li>
                <li v-for="item in mockList.baseData" :key="item.key" @click="clickNav(item)">{{item.key}}
                    {{item.value}}
                </li>
                <li class="title">表单组件</li>
                <li v-for="item in mockList.formData" :key="item.key" @click="clickNav(item)">{{item.key}}
                    {{item.value}}
                </li>
                <li class="title">反馈组件</li>
                <li v-for="item in mockList.feedBackData" :key="item.key" @click="clickNav(item)">{{item.key}}
                    {{item.value}}
                </li>
                <li class="title">展示组件</li>
                <li v-for="item in mockList.showData" :key="item.key" @click="clickNav(item)">{{item.key}}
                    {{item.value}}
                </li>
                <li class="title">导航组件</li>
                <li v-for="item in mockList.navData" :key="item.key" @click="clickNav(item)">{{item.key}}
                    {{item.value}}
                </li>
                <li class="title">业务组件</li>
                <li v-for="item in mockList.businessData" :key="item.key" @click="clickNav(item)">{{item.key}}
                    {{item.value}}
                </li>
            </ul>
        </div>
        <div class="childrenPage" v-show="activeName !== ''">
            <div class="topNav">
                <div @click="clickNav(false)" class="el-icon-arrow-left"></div>
                <p>{{activeTitle}}</p>
            </div>
            <div class="bottomContent">
                <!--Button按钮-->
                <v-button v-if="activeName === 'Button'"/>
                <!--Cell单元格-->
                <v-cell v-else-if="activeName === 'Cell'"/>
                <!--Icon图标-->
                <v-icon v-else-if="activeName === 'Icon'"/>
                <!--calendar日历-->
                <v-calendar v-else-if="activeName === 'Calendar'"/>
                <!--checkbox复选框-->
                <v-checkbox v-else-if="activeName === 'Checkbox'"/>
            </div>
        </div>
    </div>
</template>

<script>
    import mockList from "./mock/index";
    import vButton from "./components/Button";
    import vCell from "./components/Cell";
    import vIcon from "./components/Icon";
    import vCalendar from "./components/Calendar";
    import vCheckbox from "./components/Checkbox";

    export default {
        name: "index",
        components: {
            vButton, vCell,
            vIcon, vCalendar,
            vCheckbox
        },
        data() {
            return {
                mockList: mockList, // mock的模拟数据
                activeName: "", // 组件模块
                activeTitle: "" // 组件标题
            };
        },
        methods: {
            // 点击导航
            clickNav(item) {
                if (item) {
                    this.activeName = item.key;
                    this.activeTitle = item.value;
                } else {
                    this.activeName = "";
                    this.activeTitle = "";
                }
            }
        }
    };
</script>

<style scoped lang="less">
    .vantPage {
        .firstPage {
            box-sizing: border-box;
            width: 100%;
            min-height: 100vh;
            background: #fff;

            .titleBox {
                margin-top: 46px;
                font-size: 0;
                line-height: 60px;
                text-align: center;

                img {
                    width: 60px;
                    vertical-align: middle;
                }

                span {
                    display: inline-block;
                    line-height: 60px;
                    vertical-align: middle;
                    font-size: 40px;
                    font-weight: bold;
                    margin-left: 10px;
                }
            }

            .desBox {
                font-size: 20px;
                color: rgba(69, 90, 100, 0.6);
                text-align: center;
                margin-bottom: 30px;
            }

            .title {
                margin: 0;
                padding: 32px 16px 16px;
                color: rgba(69, 90, 100, 0.6);
                font-weight: normal;
                font-size: 14px;
            }

            .navBox {
                overflow: auto;
                padding: 0 20px;
                height: calc(100vh - 16px - 15px - 30px - 23px);

                li:not(.title) {
                    padding: 32px 16px 16px;
                    line-height: 30px;
                    text-align: left;
                    background-color: #f7f8fa;
                    color: #333;
                    border-radius: 20px;
                    margin-bottom: 10px;
                    position: relative;

                    &::after {
                        color: rgba(69, 90, 100, 0.6);
                        content: ">";
                        position: absolute;
                        top: 50%;
                        right: 20px;
                        transform: translateY(-50%);
                        font-size: 30px;
                        font-weight: bold;
                    }
                }
            }
        }

        .childrenPage {
            height: 100vh;

            .topNav {
                position: relative;
                height: 80px;
                line-height: 80px;

                div {
                    position: absolute;
                    font-size: 40px;
                    font-weight: bold;
                    color: #666;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 20px;
                }

                p {
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    font-size: 40px;
                }
            }

            /deep/ .title {
                margin: 0;
                padding: 32px 16px 16px;
                color: rgba(69, 90, 100, 0.6);
                font-weight: normal;
                font-size: 14px;
            }

            .bottomContent {
                height: calc(100vh - 80px - 50px);
                overflow: auto;
                padding-bottom: 50px;
            }
        }
    }
</style>
