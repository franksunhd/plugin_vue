<template>
    <!-- 太阳图 -->
    <div id="sunMap"></div>
</template>

<script>
    import dataList from "../../../../mock/index"; // 模拟数据

    export default {
        name: "sunMap",
        data() {
            return {
                // myChart对象
                myChart: null,
                // 配置
                dataOption: {
                    backgroundColor: '#2E2733',
                    title: {
                        text: '文学太阳图',
                        x: 'center',
                        y: 20
                    },
                    series: [{
                        type: 'sunburst',
                        center: ['50%', '48%'],
                        data: dataList.sunMap,
                        sort: function (a, b) {
                            if (a.depth === 1) {
                                return b.getValue() - a.getValue();
                            } else {
                                return a.dataIndex - b.dataIndex;
                            }
                        },
                        label: {
                            rotate: 'radial',
                            color: '#2E2733'
                        },
                        itemStyle: {
                            borderColor: '#2E2733',
                            borderWidth: 2
                        },
                        levels: [
                            {},
                            {
                                r0: 0, r: 40,
                                label: {
                                    rotate: 0
                                }
                            },
                            {
                                r0: 40,
                                r: 105
                            },
                            {
                                r0: 115,
                                r: 140,
                                itemStyle: {
                                    shadowBlur: 2,
                                    shadowColor: '#EA5151',
                                    color: 'transparent'
                                },
                                label: {
                                    rotate: 'tangential',
                                    fontSize: 10,
                                    color: '#FFAE57'
                                }
                            },
                            {
                                r0: 140,
                                r: 145,
                                itemStyle: {
                                    shadowBlur: 80,
                                    shadowColor: '#FFAE57'
                                },
                                label: {
                                    position: 'outside',
                                    textShadowBlur: 5,
                                    textShadowColor: '#333',
                                },
                                downplay: {
                                    label: {
                                        opacity: 0.5
                                    }
                                }
                            }
                        ]
                    }]
                },
                bgColor: '#2E2733',
                colors: ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555']
            }
        },
        mounted() {
            let _t = this;
            _t.myChart = _t.$echarts.init(document.getElementById('sunMap'));


            let itemStyle = {
                star5: {
                    color: _t.colors[0]
                },
                star4: {
                    color: _t.colors[1]
                },
                star3: {
                    color: _t.colors[2]
                },
                star2: {
                    color: _t.colors[3]
                }
            };

            _t.dataOption.color = _t.colors;

            for (let j = 0; j < dataList.sunMap.length; ++j) {
                let level1 = dataList.sunMap[j].children;
                for (let i = 0; i < level1.length; ++i) {
                    let block = level1[i].children;
                    let bookScore = [];
                    let bookScoreId;
                    for (let star = 0; star < block.length; ++star) {
                        let style = (function (name) {
                            switch (name) {
                                case '5☆':
                                    bookScoreId = 0;
                                    return itemStyle.star5;
                                case '4☆':
                                    bookScoreId = 1;
                                    return itemStyle.star4;
                                case '3☆':
                                    bookScoreId = 2;
                                    return itemStyle.star3;
                                case '2☆':
                                    bookScoreId = 3;
                                    return itemStyle.star2;
                            }
                        })(block[star].name);

                        block[star].label = {
                            color: style.color,
                            downplay: {
                                opacity: 0.5
                            }
                        };

                        if (block[star].children) {
                            style = {
                                opacity: 1,
                                color: style.color
                            };
                            block[star].children.forEach(function (book) {
                                book.value = 1;
                                book.itemStyle = style;

                                book.label = {
                                    color: style.color
                                };

                                let value = 1;
                                if (bookScoreId === 0 || bookScoreId === 3) {
                                    value = 5;
                                }

                                if (bookScore[bookScoreId]) {
                                    bookScore[bookScoreId].value += value;
                                } else {
                                    bookScore[bookScoreId] = {
                                        color: _t.colors[bookScoreId],
                                        value: value
                                    };
                                }
                            });
                        }
                    }

                    level1[i].itemStyle = {
                        color: dataList.sunMap[j].itemStyle.color
                    };
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
    #sunMap {
        width: 100%;
        height: 100%;
    }
</style>
