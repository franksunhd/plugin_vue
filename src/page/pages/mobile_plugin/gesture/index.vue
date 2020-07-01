<template>
    <div class="hello">
        <el-button type="primary" size="small" @click="showClicked">手势密码</el-button>
        <vueGesture v-model="showPwd" @handPwd="handPwd"/>
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
            // 显示控件
            showClicked() {
                this.showPwd = true;
            },
            // 打印数据
            handPwd(val) {
                console.log(val);
            }
        },
    }
</script>

<style scoped>

</style>
