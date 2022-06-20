<template>
    <div id="barNegative"></div>
</template>

<script>
    export default {
        name: "bar-negative",
        mounted() {
            let _this = this;
            let myChart = _this.$echarts.init(document.getElementById("barNegative"));
            let option = {
                title: {
                    text: "交错正负轴标签",
                    subtext: "From ExcelHome",
                    sublink: "http://e.weibo.com/1341556070/AjwF2AgQm"
                },
                tooltip: {trigger: "axis", axisPointer: {type: "shadow"}},
                grid: {top: 80, bottom: 30},
                xAxis: {
                    type: "value",
                    position: "top",
                    splitLine: {lineStyle: {type: "dashed"}}
                },
                yAxis: {
                    type: "category",
                    axisLine: {show: false},
                    axisLabel: {show: false},
                    axisTick: {show: false},
                    splitLine: {show: false},
                    data: ["ten", "nine", "eight", "seven", "six", "five", "four", "three", "two", "one"]
                },
                series: [
                    {
                        name: "生活费",
                        type: "bar",
                        stack: "总量",
                        label: {show: true, formatter: "{b}"},
                        data: [
                            {value: -0.07, label: {position: "right"}},
                            {value: -0.09, label: {position: "right"}},
                            {value: 0.2, label: {position: "left"}},
                            {value: 0.44, label: {position: "left"}},
                            {value: -0.23, label: {position: "right"}},
                            {value: 0.08, label: {position: "left"}},
                            {value: -0.17, label: {position: "right"}},
                            {value: 0.47, label: {position: "left"}},
                            {value: -0.36, label: {position: "right"}},
                            {value: 0.18, label: {position: "left"}}
                        ]
                    }
                ]
            };
            myChart.setOption(option);
        }
    };
</script>

<style scoped>
    #barNegative {
        width: 100%;
        height: 100%;
    }
</style>
