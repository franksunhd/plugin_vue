<template>
    <div>
        <div class="marginBottom20">规则：左右各点击一次记录1米,连续点击一个按钮不会记录距离.</div>
        <div class="marginBottom20 title">前进了{{times}}米</div>
        <el-button type="primary" @click="clickStep(1)">左</el-button>
        <el-button type="primary" @click="clickStep(2)">右</el-button>
    </div>
</template>

<script>
    export default {
        name: "playground",
        data() {
            return {
                left: false,
                right: false,
                times: 0, // 点击的次数
            }
        },
        methods: {
            // 点击
            clickStep(flag) {
                let _t = this;
                if (flag === 1) {
                    _t.left = true;
                } else {
                    _t.right = true;
                }

                if (_t.left === true && _t.right === true) {
                    _t.times += 1;
                    _t.left = false;
                    _t.right = false;
                }
            }
        }
    }
</script>

<style scoped>
    .title {
        font-size: 30px;
    }
</style>
