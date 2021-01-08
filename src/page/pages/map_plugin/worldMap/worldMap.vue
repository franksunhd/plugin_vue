<template>
    <div id="worldMap"></div>
</template>

<script>
    import 'echarts/map/js/world'; // 引入世界地图
    import worldMap from "../../../../mock/index"; // 引入翻译

    export default {
        name: "worldMap",
        data() {
            return {
                // myChart对象
                myChart: null,
            }
        },
        methods: {
            // 绘制地图
            drawMap() {
                let _t = this;
                let options = {
                    title: {
                        show: true,
                        text: '模拟世界肺炎效果',
                        top: 20,
                        left: 'center', // 值: 'left', 'center', 'right' 同上
                        textStyle: {
                            fontSize: 24,
                            fontWeight: 600,
                        }
                    },
                    tooltip: {
                        show: true,
                        formatter: function (e, t, n) {
                            return e.name + "：" + e.value
                        }
                    },
                    grid: {
                        right: '0',
                        top: '20%',
                    },
                    visualMap: {
                        show: true,
                        min: 0,
                        left: 26,
                        bottom: 40,
                        pieces: [
                            {
                                gt: 10000,
                                label: ">10000人",
                                color: "rgb(184,9,9)"
                            },
                            {
                                gte: 1000,
                                lte: 10000,
                                label: "1000-10000",
                                color: "rgb(230,69,70)"
                            },
                            {
                                gte: 100,
                                lte: 1000,
                                label: "100-1000",
                                color: "rgb(245,107,113)"
                            },
                            {
                                gte: 10,
                                lt: 100,
                                label: "10-100",
                                color: "rgb(255,153,133)"
                            },
                            {
                                gte: 1,
                                lt: 9,
                                label: "1-9",
                                color: "rgb(255,229,219)"
                            },
                            {
                                value: 0,
                                color: "rgb(255,255,255)"
                            }
                        ]
                    },
                    scaleLimit: {
                        min: 1,
                        max: 2
                    },
                    series: [
                        {
                            type: 'map', // 类型
                            name: '模拟世界肺炎效果',
                            mapType: 'world', // 地图类型
                            roam: true,
                            label: {
                                show: false // 是否显示对应地名
                            },
                            // 地图区域的多边形 图形样式
                            itemStyle: {
                                areaColor: '#f2d5ad', // 地图区域的颜色 如果设置了visualMap，areaColor属性将不起作用
                                borderWidth: 0.5, // 描边线宽 为 0 时无描边
                                borderColor: '#000', // 图形的描边颜色 支持的颜色格式同 color，不支持回调函数
                                borderType: 'solid' // 描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'
                            },
                            nameMap: worldMap.worldMap
                        }
                    ]
                };

                _t.myChart.setOption(options);
            }
        },
        mounted() {
            let _t = this;
            _t.myChart = _t.$echarts.init(document.getElementById('worldMap'));
            _t.drawMap();
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
    #worldMap {
        width: 100%;
        height: 100%;
    }
</style>
