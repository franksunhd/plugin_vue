<template>
    <!-- 画布区域 -->
    <div id="eChartsMap" ref="eChartsMap"></div>
</template>

<script>
    import 'echarts/map/js/china.js'; // 引入中国地图数据
    import './province'; // 引入各省的地图数据
    import dataList from "../../../../mock/index";

    export default {
        name: "chinaMap",
        data() {
            return {
                // myChart对象
                myChart: null,
                // 中国地图配置
                dataOptions: {
                    baseOption: {
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
                        timeline: {
                            axisType: 'category',
                            autoPlay: true,
                            playInterval: 2000,
                            symbolSize: 12,
                            left: '5%',
                            right: '5%',
                            bottom: '0%',
                            width: '90%',
                            data: [],
                            tooltip: {
                                show: true,
                                formatter: []
                            }
                        },
                        series: [{
                            name: 'mapSer',
                            type: 'map',
                            map: 'china',
                            geoIndex: 0,
                            label: {
                                show: false,
                            },
                        }]
                    },
                    animationDurationUpdate: 2000, // 定时器间隔时长
                    animationEasingUpdate: "quinticInOut", // 效果
                    options: []
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
                },
            }
        },
        methods: {
            // 获取日期
            getDate(dateList) {
                let newArr = new Array();
                dateList.forEach((item) => {
                    newArr.push(item.date);
                });
                return newArr;
            },
            // 绘制地图
            drawMap() {
                let _t = this;
                // 获取日期
                let dateList = new Array(); // 74
                dateList = _t.getDate(dataList.chinaMap);
                _t.dataOptions.baseOption.timeline.data = dateList;
                _t.dataOptions.baseOption.timeline.tooltip.formatter = dateList;
                dateList.forEach((item, index) => {
                    _t.dataOptions.options.push({
                        title: {
                            text: dataList.chinaMap[index].date + '  ' + dataList.chinaMap[index].news,
                            textStyle: {
                                color: '#333',
                                fontFamily: 'MicrosoftYaHei',
                                fontSize: 20,
                                fontWeight: 'normal'
                            },
                            x: 'left',
                            y: 'top',
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
                                data: dataList.chinaMap[index].data
                            }
                        ]
                    });
                });
                _t.myChart.setOption(_t.dataOptions);
            }
        },
        mounted() {
            let _t = this;
            _t.myChart = _t.$echarts.init(document.getElementById('eChartsMap'));
            _t.drawMap();
            _t.myChart.on('click', function (params) {
                // 点击的是省级
                if (params.seriesName === 'province') {
                    _t.provinceOptions.series[0].data = params.data.children ? params.data.children : [];
                    _t.dataOptions.baseOption.timeline.autoPlay = false;
                    _t.provinceOptions.series[0].mapType = params.name;
                    _t.myChart.clear();
                    _t.myChart.setOption(_t.provinceOptions);
                } else {
                    _t.provinceOptions.series[0].data = [];
                    _t.dataOptions.baseOption.timeline.autoPlay = true;
                    _t.provinceOptions.series[0].mapType = '';
                    _t.myChart.clear();
                    _t.drawMap();
                }
            });
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
    #eChartsMap {
        width: 100%;
        height: 100%;
    }
</style>
