<template>
    <div>
        <el-button type="warning" size="small" @click="sendMessage">测试bus传值</el-button>
    </div>
</template>

<script>
    export default {
        name: 'childToast',
        methods: {
            // 发送信息
            sendMessage () {
                let _t = this;
                _t.$bus.emit('getMenu', true);
            }
        }
    };
</script>

<style scoped>

</style>
