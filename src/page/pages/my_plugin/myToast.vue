<template>
    <div class="myButtonBox">
        <p class="marginBottom20">
            这是一个造插件的页面.
        </p>
        <div>
            <el-button type="primary" size="small" @click="showToast">显示Toast</el-button>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'myButton',
        data () {
            return {
                timer: null,
            };
        },
        methods: {
            showToast () {
                let _t = this;
                _t.$toast.show('F', '成功');
            }
        }
    };
</script>

<style scoped>

</style>
