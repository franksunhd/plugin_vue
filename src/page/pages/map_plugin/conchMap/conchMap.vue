<template>
    <!-- 疫情海螺图 -->
    <div id="conchMap"></div>
</template>

<script>
    import dataList from "../../../../mock/index"; // 模拟数据

    export default {
        name: "conchMap",
        data() {
            return {
                // myChart对象
                myChart: null,
                // 配置
                dataOption: {
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params) {
                            return `${params.seriesName} <br/> ${params.name}: 确诊${params.data[1]}例 死亡${params.data[3]}例`
                        }
                    },
                    dataset: {
                        source: [
                            ['Country', 'Confirmed', 'SQRT', 'Dead'],
                            ['美国', 85840, 292.9846412, 1296],
                            ['意大利', 80589, 283.8820177, 8215],
                            ['西班牙', 57786, 240.3871877, 4365],
                            ['德国', 43938, 209.6139308, 267],
                            ['法国', 29566, 171.9476665, 1698],
                            ['伊朗', 29406, 171.4817775, 2234],
                            ['英国', 11812, 108.6830254, 580],
                            ['瑞士', 11811, 108.6784247, 191],
                            ['韩国', 9332, 96.60227741, 139],
                            ['荷兰', 7469, 86.42337647, 435],
                            ['奥地利', 6909, 83.12039461, 49],
                            ['比利时', 6235, 78.96201618, 220],
                            ['加拿大', 4046, 63.60817558, 39],
                            ['土耳其', 3629, 60.24118193, 75],
                            ['葡萄牙', 3544, 59.53150426, 60],
                            ['挪威', 3372, 58.06892456, 14],
                            ['澳大利亚', 2991, 54.69003566, 13],
                            ['巴西', 2985, 54.63515352, 77],
                            ['瑞典', 2840, 53.29165038, 77]
                        ]
                    },
                    toolbox: {
                        show: false, // false则不显示工具栏
                        feature: {
                            saveAsImage: {
                                show: true,
                                type: 'jpeg'
                            }
                        }
                    },
                    title: {
                        text: '人民日报式海外疫情海螺图',
                        subtext: '使用2020-03-27数据',
                        x: '55%',
                        y: '150',
                        textStyle: {
                            fontSize: 27,
                            fontWeight: 'bold',
                            fontFamily: 'Microsoft YaHei',
                            color: '#000'
                        },
                        subtextStyle: {
                            fontStyle: 'bold',
                            fontSize: 14
                        }
                    },
                    legend: {
                        x: '55%', //水平位置，【left\center\right\数字】
                        y: '350', //垂直位置，【top\center\bottom\数字】
                        align: 'left', //字在图例的左边或右边【left/right】
                        orient: 'vertical', // 图例方向【horizontal/vertical】
                        icon: "rect", // 图例形状【circle\rect\roundRect\triangle\diamond\pin\arrow\none】
                        textStyle: {fontFamily: '微软雅黑', color: '#000'},
                        data: ['美国', '意大利', '西班牙', '德国', '法国', '伊朗', '英国', '瑞士', '韩国', '荷兰', '', '奥地利', '比利时', '加拿大', '土耳其', '葡萄牙', '挪威', '澳大利亚', '巴西', '瑞典'],
                    },
                    calculable: true,
                    series: [
                        {
                            name: '海外疫情海螺图',
                            type: 'pie',
                            clockWise: false,
                            radius: [20, 400],
                            center: ['40%', '60%'],
                            roseType: 'area',
                            encode: {
                                itemName: 'Country',
                                value: 'SQRT'
                            },
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        let colorList = [
                                            "#a71a4f", "#bc1540", "#c71b1b", "#d93824", "#ce4018", "#d15122", "#e7741b", "#e58b3d", "#e59524", "#dc9e31", "#da9c2d", "#d2b130", "#bbd337", "#8cc13f", "#67b52d", "#53b440", "#48af54", "#479c7f", "#48a698", "#57868c"
                                        ];
                                        return colorList[params.dataIndex]
                                    },
                                    label: {
                                        position: 'inside',
                                        textStyle: {
                                            fontWeight: 'bold',
                                            fontFamily: 'Microsoft YaHei',
                                            color: '#FAFAFA',
                                            fontSize: 10
                                        },
                                        formatter: function (params) {
                                            // 大于9000例显示
                                            if (params.data[1] > 9000) {
                                                return `${params.name}: \n 确诊${params.data[1]}例 \n 死亡${params.data[3]}例`;
                                            } else {
                                                return '';
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        {
                            name: '透明圆圈',
                            type: 'pie',
                            radius: [10, 27],
                            center: ['40%', '60%'],
                            itemStyle: {
                                color: 'rgba(250, 250, 250, 0.3)',
                            },
                            data: [
                                {value: 10, name: ''}
                            ]
                        },
                        {
                            name: '透明圆圈',
                            type: 'pie',
                            radius: [10, 35],
                            center: ['40%', '60%'],
                            itemStyle: {
                                color: 'rgba(250, 250, 250, 0.3)',
                            },
                            data: [
                                {value: 10, name: ''}
                            ]
                        }
                    ]
                },
            }
        },
        mounted() {
            let _t = this;
            _t.myChart = _t.$echarts.init(document.getElementById('conchMap'));

            _t.dataOption.legend.formatter = function (params) {
                for (let i = 0; i < dataList.conchMap.length; i++) {
                    if (dataList.conchMap[i].name === params) {
                        return params + "\t确诊:" + dataList.conchMap[i].Confirmed + "例\t死亡:" + dataList.conchMap[i].Dead + '例';
                    }
                }
            }

            _t.myChart.setOption(_t.dataOption);

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
    #conchMap {
        width: 100%;
        height: 100%;
    }
</style>
