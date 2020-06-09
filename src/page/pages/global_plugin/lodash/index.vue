<template>
    <div>
        <div class="marginBottom20">A数组：{{JSON.stringify(arrA)}}</div>
        <div class="marginBottom20">B数组：{{JSON.stringify(arrB)}}</div>
        <el-divider content-position="left">结果</el-divider>
        <div class="marginBottom20">{{lodash.difference(arrA,arrB)}}</div>
    </div>
</template>

<script>
    import _ from 'lodash';

    export default {
        name: "index",
        data() {
            return {
                arrA: [1, 2, 3],
                arrB: [2],
                arrC: []
            }
        },
        methods: {
            getData() {
                let _t = this;
                console.log(_.difference())
                // _t.arrC = _.difference(arrA, arrB);
            }
        },
        created() {
            let _t = this;
            _t.getData();
        }
    }
</script>

<style scoped>

</style>
