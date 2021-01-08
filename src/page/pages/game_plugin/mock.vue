<template>
    <div>
        <div class="contentBox" v-for="(item,index) in list" :key="index">{{item}}</div>
    </div>
</template>

<script>
    export default {
        name: "mock",
        data() {
            return {
                list: []
            };
        },
        methods: {
            getData() {
                let _this = this;
                let len = 10000;
                let cycleArr = [];
                do {
                    let num = _this.$randomNum(1, len); // 生成一个随机数
                    if (cycleArr.indexOf(num) === -1) {
                        cycleArr.push(num);
                    }
                } while (cycleArr.length < len);
                _this.list = cycleArr;
            }
        },
        mounted() {
            this.getData();
        }
    };
</script>

<style scoped>
    .contentBox {
        padding: 10px;
        display: inline-block;
    }
</style>
