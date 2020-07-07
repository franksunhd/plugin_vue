<template>
    <div id="eChartsMap" ref="eChartsMap"></div>
</template>

<script>
    import 'echarts/map/js/china.js'; // 引入中国地图数据
    import './province'; // 引入各省的地图数据

    export default {
        name: "chinaMap",
        data() {
            return {
                // 实时数据
                dataList: [
                    {name: "南海诸岛", value: 0},
                    {name: '北京', value: 54},
                    {name: '天津', value: 13},
                    {name: '上海', value: 40},
                    {name: '重庆', value: 75},
                    {name: '河北', value: 13},
                    {name: '河南', value: 83},
                    {name: '云南', value: 11},
                    {name: '辽宁', value: 19},
                    {name: '黑龙江', value: 15},
                    {name: '湖南', value: 69},
                    {name: '安徽', value: 60},
                    {name: '山东', value: 39},
                    {name: '新疆', value: 4},
                    {name: '江苏', value: 31},
                    {name: '浙江', value: 104},
                    {name: '江西', value: 36},
                    {name: '湖北', value: 1052},
                    {name: '广西', value: 33},
                    {name: '甘肃', value: 7},
                    {name: '山西', value: 9},
                    {name: '内蒙古', value: 7},
                    {name: '陕西', value: 22},
                    {name: '吉林', value: 4},
                    {name: '福建', value: 18},
                    {name: '贵州', value: 5},
                    {name: '广东', value: 98},
                    {name: '青海', value: 1},
                    {name: '西藏', value: 0},
                    {name: '四川', value: 44},
                    {name: '宁夏', value: 4},
                    {name: '海南', value: 22},
                    {name: '台湾', value: 3},
                    {name: '香港', value: 5},
                    {name: '澳门', value: 5}
                ],
                // myChart对象
                myChart: null,
                // 中国地图配置
                options: {
                    title: {
                        text: '模拟肺炎趋势图',
                        textStyle: {
                            color: '#333',
                            fontFamily: 'MicrosoftYaHei',
                            fontSize: 20,
                            fontWeight: 'normal'
                        },
                        x: 'center',
                        y: 'top',
                    },
                    geo: {
                        map: 'china',
                        zoom: 1.2, // 放大1.2倍
                        roam: true, // 允许缩放
                        label: {
                            normal: {
                                show: true,
                                fontSize: 14,
                                color: "rgba(0,0,0,0.7)"
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: "rgba(0, 0, 0, 0.2)"
                            },
                            emphasis: {
                                areaColor: "#f2d5ad",
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                borderWidth: 0
                            }
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
                                gt: 100,
                                label: ">100人",
                                color: "#7f1100"
                            },
                            {
                                gte: 10,
                                lte: 100,
                                label: "10-100",
                                color: "#ff5428"
                            },
                            {
                                gte: 1,
                                lt: 10,
                                label: "1-9",
                                color: "#ff8c71"
                            },
                            {
                                value: 0,
                                color: "#fff"
                            }
                        ]
                    },
                    scaleLimit: {
                        min: 1,
                        max: 2
                    },
                    series: [
                        {
                            type: 'scatter',
                            coordinateSystem: 'geo' // 对应上方配置
                        },
                        {
                            name: 'province', // 浮动框的标题
                            type: 'map',
                            geoIndex: 0,
                            data: []
                        }
                    ],
                },
                // 省级地图配置
                provinceOptions: {
                    roam: true,
                    visualMap: {
                        show: true,
                        min: 0,
                        left: 26,
                        bottom: 40,
                        pieces: [
                            {
                                gt: 100,
                                label: ">100人",
                                color: "#7f1100"
                            },
                            {
                                gte: 10,
                                lte: 100,
                                label: "10-100",
                                color: "#ff5428"
                            },
                            {
                                gte: 1,
                                lt: 10,
                                label: "1-9",
                                color: "#ff8c71"
                            },
                            {
                                value: 0,
                                color: "#fff"
                            }
                        ]
                    },
                    tooltip: {
                        show: true,
                        formatter: function (e, t, n) {
                            return e.name + "：" + (isNaN(e.value) ? 0 : e.value);
                        }
                    },
                    series: [
                        {
                            type: 'map',
                            name: 'city',
                            mapType: '',
                            selectedMode: 'single',
                            label: {
                                normal: {
                                    show: true,
                                    fontSize: 14,
                                    color: "rgba(0,0,0,0.7)"
                                }
                            },
                            itemStyle: {
                                normal: {
                                    borderColor: "rgba(0, 0, 0, 0.2)"
                                },
                                emphasis: {
                                    areaColor: "#f2d5ad",
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0,
                                    borderWidth: 0
                                }
                            },
                            data: []
                        }
                    ],
                }
            }
        },
        methods: {
            // 绘制地图
            drawMap() {
                let _t = this;
                _t.myChart = _t.$echarts.init(document.getElementById('eChartsMap'));
                _t.options.series[1].data = _t.dataList;
                _t.myChart.setOption(_t.options);

                _t.myChart.on('click', function (params) {
                    // 点击的是省级
                    if (params.seriesName === 'province') {
                        _t.provinceOptions.series[0].mapType = params.name;
                        _t.myChart.clear();
                        _t.myChart.setOption(_t.provinceOptions);
                    } else {
                        _t.options.series[1].data = _t.dataList;
                        _t.provinceOptions.series[0].mapType = '';
                        _t.myChart.clear();
                        _t.myChart.setOption(_t.options);
                    }
                });
            }
        },
        mounted() {
            let _t = this;
            _t.drawMap();
            window.addEventListener("resize", () => {
                _t.myChart.resize();
            });
        }
    }
</script>

<style scoped>
    #eChartsMap {
        width: 100%;
        height: 100%;
    }
</style>
