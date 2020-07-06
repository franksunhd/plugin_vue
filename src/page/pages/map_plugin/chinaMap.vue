<template>
    <div id="eChartsMap"></div>
</template>

<script>
    export default {
        name: "chinaMap",
        mounted() {
            let _t = this;
            let myChart = _t.$echarts.init(document.getElementById('eChartsMap'));
            let options = {
                title: {
                    text: '模拟肺炎趋势图',
                    textStyle: {
                        color: '#333',
                        fontFamily: 'MicrosoftYaHei',
                        fontSize: 20,
                        fontWeight: 'normal',
                        align:'center'
                    },
                },
            };
            myChart.setOption(options);
        }
    }
</script>

<style scoped>
    #eChartsMap {
        width: 100%;
        height: 100%;
    }
</style>
