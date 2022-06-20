<template>
    <div class="menuBox">
        <el-menu
            :class="isShow ? 'elMenu' : 'elMenuNo'"
            :default-active="current"
            :router="true"
            :unique-opened="false"
            :collapse="!isShow"
            :collapse-transition="false">
            <template v-for="item in menuList">
                <el-menu-item v-if="item.isSubMenu === false" :index="item.path">
                    <template>
                        <i class="menuItemIcon" :class="!isShow ? item.icon : 'menuItemIconRight ' + item.icon"></i>
                        <span slot="title" class="menuItem">{{item.name}}</span>
                    </template>
                </el-menu-item>
                <el-submenu v-if="item.isSubMenu === true" :index="item.path">
                    <template slot="title">
                        <i class="menuItemIcon" :class="!isShow ? item.icon : 'menuItemIconRight ' + item.icon"></i>
                        <span class="menuItem">{{item.name}}</span>
                    </template>
                    <el-menu-item v-for="(val,i) in item.children" :key="i" :index="val.path">
                        <template slot="title">
                            <i class="menuItemIcon" :class="!isShow ? val.icon : 'menuItemIconRight ' + val.icon"></i>
                            <span class="menuItem">{{val.name}}</span>
                        </template>
                    </el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import menu from "../mock/index";

    export default {
        name: "menuBox",
        props: {
            isShow: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                menuList: menu.menuList
            };
        },
        watch: {
            isShow: function (oldVal, newVal) {
                this.$emit("isShow", newVal);
            }
        },
        computed: {
            current() {
                let _t = this;
                let arr = _t.$route.path.split("/");
                if (arr.length > 3) {
                    arr.pop();
                    return arr.join("/");
                } else {
                    return _t.$route.path;
                }
            }
        }
    };
</script>

<style scoped lang="less">
    .menuBox {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 60px;
        z-index: 1;
        overflow-y: auto;

        /* 隐藏滚动条 */

        &::-webkit-scrollbar {
            display: none;
        }

        /deep/ .el-menu {
            border-right: none;
            background-color: var(--menuBg);

            .el-submenu .el-submenu__title:hover,
            .el-menu-item:focus,
            .el-menu-item:hover,
            .el-submenu__title:hover {
                background-color: var(--mainColor);
            }
        }

        /deep/ .el-menu--collapse {
            width: auto;
        }

        /deep/ .elMenu {
            .el-menu-item,
            .el-submenu .el-submenu__title {
                padding: 0 10px !important;
                height: 70px;
                line-height: 70px;
                color: var(--menuActiveText);
            }

            .el-submenu .el-menu-item {
                padding: 0 15px 0 30px !important;
            }
        }

        /deep/ .elMenuNo {
            .el-menu-item .el-tooltip,
            .el-submenu .el-submenu__title {
                padding: 0 !important;
                text-align: center !important;
                height: 70px;
                line-height: 70px;
            }

            .el-menu-item,
            .el-menu--vertical .el-menu-item {
                height: 70px;
                line-height: 70px;
            }

            .el-menu-item {
                padding: 0 !important;
                text-align: center !important;
            }
        }


        .el-submenu.is-active .el-submenu__title,
        .el-menu-item.is-active {
            background-color: var(--menuCurrentBg) !important;
            color: var(--menuActiveText) !important;
        }

        .el-submenu.is-active .el-submenu__title > i {
            color: var(--menuActiveText) !important;
        }

        .menuItem {
            font-size: 20px;
        }

        .menuItemIcon {
            font-size: 26px;
            color: var(--whiteColor);
        }

        .menuItemIconRight {
            margin-right: 10px;
        }

        .elMenu {
            width: 400px;
        }
    }
</style>
