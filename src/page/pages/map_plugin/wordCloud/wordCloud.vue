<template>
    <!-- 词云图画布 -->
    <div id="wordCloud"></div>
</template>


<script>
    import 'echarts-wordcloud'; // 引入词云组件
    import dataList from "../../../../mock/index"; // 引入mock数据

    export default {
        name: "wordCloud",
        data() {
            return {
                // myChart对象
                myChart: null,
                // 配置项
                dataOptions: {
                    backgroundColor: '#fff',
                    title: {
                        text: '词云图-各APP文章数量',
                        x: 'center',
                        y: 20
                    },
                    tooltip: {
                        trigger: 'item',
                        textStyle: {
                            fontSize: 15
                        },
                        formatter: params => {
                            const {name, value} = params
                            return `平台：${name} <br/>数量：${value}`
                        }
                    },
                    series: [{
                        type: 'wordCloud',
                        gridSize: 20,
                        shape: 'diamond', // circle, diamond
                        sizeRange: [12, 50],
                        rotationRange: [30, 120], // 旋转角度
                        textStyle: {
                            normal: {
                                color: () => {
                                    return 'rgb(' + [
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160)
                                    ].join(',') + ')';
                                }
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowColor: '#222'
                            }
                        },
                        data: dataList.worldCloud
                    }]
                }
            }
        },
        methods: {
            // 绘图
            drawWarp() {
                let _t = this;
            }
        },
        mounted() {
            let _t = this;
            _t.myChart = _t.$echarts.init(document.getElementById('wordCloud'));
            _t.drawWarp();
            _t.myChart.setOption(_t.dataOptions);

            window.addEventListener("resize", () => {
                _t.myChart.resize();
            });
        },
        destroyed() {
            this.myChart = null;
        }
    }
</script>

<style scoped>
    #wordCloud {
        width: 100%;
        height: 100%;
    }
</style>
