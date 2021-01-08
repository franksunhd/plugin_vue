<template>
    <div>
        <vue-progress-bar class="marginBottom20"/>
        <el-button type="primary" size="small" @click="goFinish(1)">重新加载Finish</el-button>
        <el-button type="primary" size="small" @click="goFinish(2)">重新加载Fail</el-button>
    </div>
</template>

<script>
    export default {
        name: "nprogress",
        methods: {
            goFinish(flag) {
                let _this = this;

                _this.$Progress.start();
                setTimeout(function () {
                    if (flag === 1) {
                        _this.$Progress.finish();
                    } else {
                        _this.$Progress.fail();
                    }
                }, 3000);
            }
        },
        mounted() {
            let _this = this;
            _this.goFinish(1);
        }
    };
</script>

<style scoped>

</style>
