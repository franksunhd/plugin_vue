<template>
    <div class="menuBox">
        <el-menu :default-active="current" :router="true" :unique-opened="true"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <template v-for="(item,index) in menuList">
                <el-menu-item v-if="item.isSubMenu === false" :index="item.path">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{item.name}}</span>
                    </template>
                </el-menu-item>
                <el-submenu v-if="item.isSubMenu === true" :index="item.path">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item v-for="(val,i) in item.children" :key="i" :index="val.path">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span>{{val.name}}</span>
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
        data () {
            return {
                menuList: menu.menuList
            };
        },
        computed: {
            current () {
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
    .menuBox .el-submenu.is-active .el-submenu__title,
    .menuBox .el-menu-item.is-active {
        background-color: rgb(67, 74, 80) !important;
        color: rgb(255, 208, 75) !important;
    }

    .menuBox .el-submenu.is-active .el-submenu__title > i {
        color: rgb(255, 208, 75) !important;
    }
</style>
