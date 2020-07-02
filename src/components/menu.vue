<template>
    <div class="menuBox">
        <el-menu
            :class="isShow ? 'elMenu' : ''"
            :default-active="current"
            :router="true"
            :unique-opened="false"
            :collapse="!isShow"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <template v-for="(item,index) in menuList">
                <el-menu-item v-if="item.isSubMenu === false" :index="item.path">
                    <template>
                        <i class="menuItemIcon" :class="item.icon"></i>
                        <span slot="title" class="menuItem">{{item.name}}</span>
                    </template>
                </el-menu-item>
                <el-submenu v-if="item.isSubMenu === true" :index="item.path">
                    <template slot="title">
                        <i class="menuItemIcon" :class="item.icon"></i>
                        <span class="menuItem">{{item.name}}</span>
                    </template>
                    <el-menu-item v-for="(val,i) in item.children" :key="i" :index="val.path">
                        <template slot="title">
                            <i class="menuItemIcon" :class="item.icon"></i>
                            <span class="menuItem">{{val.name}}</span>
                        </template>
                    </el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import menu from '../assets/js/menu';

    export default {
        name: 'menuBox',
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
                this.$emit('isShow', newVal);
            }
        },
        computed: {
            current() {
                let _t = this;
                let arr = _t.$route.path.split('/');
                if (arr.length > 3) {
                    arr.pop();
                    return arr.join('/');
                } else {
                    return _t.$route.path;
                }
            }
        },
    };
</script>

<style>
    .menuBox {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 60px;
        z-index: 1;
        overflow-y: auto;
    }

    /* 隐藏滚动条 */
    .menuBox::-webkit-scrollbar {
        display: none;
    }

    .menuItem {
        font-size: 20px;
    }

    .menuItemIcon {
        font-size: 26px;
    }

    .elMenu {
        width: 400px;
    }

    .menuBox .el-menu {
        border-right: none;
    }

    .menuBox .el-menu--collapse {
        width: auto;
    }

    .menuBox .el-submenu.is-active .el-submenu__title,
    .menuBox .el-menu-item.is-active {
        background-color: rgb(67, 74, 80) !important;
        color: rgb(255, 208, 75) !important;
    }

    .menuBox .el-submenu.is-active .el-submenu__title > i {
        color: rgb(255, 208, 75) !important;
    }
</style>
