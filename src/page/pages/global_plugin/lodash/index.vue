<template>
    <div>
        <div class="marginBottom20">这是一个lodash页面</div>
        <el-divider content-position="left">数组方法</el-divider>
        <div class="marginBottom20">A数组：{{JSON.stringify(arrA)}}</div>
        <div class="marginBottom20">B数组：{{JSON.stringify(arrB)}}</div>
        <div class="marginBottom20">A数组中与B数组中不同的元素：{{JSON.stringify(arrC)}}</div>
        <div class="marginBottom20">拆分A数组：{{JSON.stringify(arrD)}}</div>
        <div class="marginBottom20">过滤假值数据：{{JSON.stringify(arrE)}}</div>
        <div class="marginBottom20">数组连接：{{JSON.stringify(arrF)}}</div>
    </div>
</template>

<script>


    export default {
        name: "index",
        data() {
            return {
                arrA: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, false, null, undefined, NaN, ''],
                arrB: [2, 7, 10, 13],
                arrC: [],
                arrD: [],
                arrE: [],
                arrF: [],
                arrG: [],
                arrH: [],
            }
        },
        methods: {
            getData() {
                let _t = this;
                _t.arrC = _t.$lodash.difference(_t.arrA, _t.arrB);

                _t.arrD = _t.$lodash.chunk(_t.arrA, 4);

                _t.arrE = _t.$lodash.compact(_t.arrA);

                _t.arrF = _t.$lodash.concat(_t.arrA, _t.arrC);


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
