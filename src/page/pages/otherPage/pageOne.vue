<template>
    <div class="pageOneBox">
        <p>{{str}}</p>
        <p>{{str.replace(/(.{4}).*/, "$1*")}}</p>
        <p>{{compareVersion("2.0.2.1","2.0.8")}}</p>
    </div>
</template>

<script>
    export default {
        name: "pageOne",
        data() {
            return {
                str: "你好你都唔到呢哦对"
            };
        },
        methods: {
            // 比较版本号
            compareVersion(now, old) {
                let nowArr = now.split("."); // 当前版本
                let oldArr = old.split("."); // 最低版本
                let xArr = [100000, 10000, 1], result = 0;
                // xArr 权重集合

                if (nowArr.length > oldArr.length) {
                    return true;
                } else if (nowArr.length === oldArr.length) {
                    nowArr.forEach((item, index) => {
                        result += (item - oldArr[index]) * xArr[index];
                    });
                    return result > 0;
                } else {
                    return false;
                }
            }
        }
    };
</script>

<style scoped lang="less">
    .pageOneBox {
        font-size: 20px !important;
    }
</style>
