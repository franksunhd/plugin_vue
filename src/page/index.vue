<template>
    <div class="appBox">
        <div class="elHeader">Header</div>
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
    import menuBox from '../components/menu';

    export default {
        name: 'HomeBox',
        components: {menuBox},
        data() {
            return {
                isShow: true
            }
        },
        methods: {
            isShowFun(val) {
                console.log(val)
            }
        }
    };
</script>

<style>
    .appBox {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .elHeader {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        font-size: 26px;
        padding: 0 20px;
        height: 80px !important;
        background-color: #229399;
        line-height: 80px !important;
    }

    .elAside {
        position: fixed;
        top: 80px;
        left: 0;
        bottom: 0;
        z-index: 1;
        padding-bottom: 80px;
        background-color: rgb(84, 92, 100);
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

    .elAside .el-submenu .el-menu-item {
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
        background-color: #e0e0e0;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .iconItem {
        font-size: 26px;
        line-height: normal;
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
</style>
