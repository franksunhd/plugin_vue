<template>
    <div class="appBox">
        <el-container class="elContainer">
            <el-header class="elHeader">Header</el-header>
            <el-container class="elMain">
                <el-aside width="250px" class="elAside">
                    <menuBox/>
                </el-aside>
                <el-container>
                    <el-main class="elContent">
                        <router-view/>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import menuBox from '../components/menu';

    export default {
        name: 'HomeBox',
        components: { menuBox }
    };
</script>

<style scoped>
    .appBox,
    .elContainer,
    .elContent {
        height: 100%;
        overflow-y: auto;
    }

    .elHeader {
        background-color: #229399;
        line-height: 60px;
    }

    .elAside {
        background-color: rgb(84, 92, 100);
    }

    .elMain {
        height: calc(100% - 60px);
    }
</style>
