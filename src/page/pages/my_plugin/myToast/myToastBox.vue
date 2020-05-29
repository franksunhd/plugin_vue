<template>
    <div class="myButtonBox">
        <p class="marginBottom20">
            这是一个造插件的页面.
        </p>
        <div class="marginBottom20">
            <el-button type="success" size="small" @click="showToast('S')">显示Toast(成功)</el-button>
            <el-button type="danger" size="small" @click="showToast('F')">显示Toast(失败)</el-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'myToastBox',
        data () {
            return {
                timer: null,
            };
        },
        methods: {
            showToast (item) {
                let _t = this;
                _t.$toast.show(item, '提示信息');
            }
        }
    };
</script>

<style>
    #toastNum li {
        line-height: 30px;
    }
</style>
