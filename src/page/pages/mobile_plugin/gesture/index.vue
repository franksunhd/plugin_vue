<template>
    <div class="hello">
        <el-button type="primary" size="small" @click="showPwd = true">手势密码</el-button>
        <!--手势组件-->
        <vueGesture :currentValue="showPwd" @control="isShowControl"/>
    </div>
</template>

<script>
    import vueGesture from './vueGesture';

    export default {
        name: "index",
        components: {vueGesture},
        data() {
            return {
                // 控制是否显示密码控件
                showPwd: false,
            }
        },
        methods: {
            // 接收子组件的值控制显示隐藏
            isShowControl(val) {
                this.showPwd = val;
            }
        },
    }
</script>

<style scoped>

</style>
