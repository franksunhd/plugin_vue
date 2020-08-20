<template>
    <div class="toJSONBox">
        <p class="marginBottom20">
            这是一个控制el-select可选最多数量的限制
        </p>
        <el-select
            v-model="value1"
            multiple
            @change="changeOption"
            :collapse-tags="true"
            :multiple-limit="3"
            placeholder="请选择,最多3个">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.label">
            </el-option>
        </el-select>
        <el-button @click="getData">点击获取结果</el-button>
    </div>
</template>

<script>
    export default {
        name: "toJson",
        data() {
            return {
                options: [
                    {value: '选项1', label: '黄金糕'},
                    {value: '选项2', label: '双皮奶'},
                    {value: '选项3', label: '蚵仔煎'},
                    {value: '选项4', label: '龙须面'},
                    {value: '选项5', label: '北京烤鸭'}
                ],
                value1: []
            }
        },
        methods: {
            changeOption(val) {
                // if (val.length > 3) {
                //     this.$message({
                //         type: 'warning',
                //         message: '最多3个'
                //     });
                //     val = val.splice(val.length - 1);
                // }
            },
            getData() {
                console.log(this.value1)
            }
        },
        created() {

        }
    }
</script>

<style scoped>

</style>
