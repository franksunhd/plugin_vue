let colors = ["#FFAE57", "#FF7853", "#EA5151", "#CC3F57", "#9A2555"];

export default [
    {
        name: "电视剧",
        itemStyle: {
            normal: {
                color: colors[1]
            }
        },
        children: [
            {
                name: "现代",
                children: [
                    {
                        name: "5☆",
                        children: [
                            {name: "大江大河"},
                            {name: "疯人院"},
                            {name: "天坑鹰猎"}
                        ]
                    },
                    {
                        name: "4☆",
                        children: [
                            {name: "SCI谜案集"},
                            {name: "古董局中局"},
                            {name: "乡村爱情协奏曲"}
                        ]
                    },
                    {
                        name: "3☆",
                        children: [
                            {name: "上海女子图鉴"}
                        ]
                    }
                ]
            },
            {
                name: "古装",
                children: [
                    {
                        name: "5☆",
                        children: [
                            {name: "天盛长歌"}
                        ]
                    },
                    {
                        name: "4☆",
                        children: [
                            {name: "小戏骨：水浒传"},
                            {name: "香蜜沉沉烬如霜"}
                        ]
                    }, {
                        name: "3☆",
                        children: [
                            {name: "知否知否应是绿肥红瘦"}
                        ]
                    }]
            }]
    },
    {
        name: "电影",
        itemStyle: {
            color: colors[2]
        },
        children: [
            {
                name: "喜剧",
                itemStyle: {
                    color: colors[3]
                },
                children: [
                    {
                        name: "5☆",
                        children: [
                            {name: "我不是药神"}
                        ]
                    },
                    {
                        name: "4☆",
                        children: [
                            {name: "无名之辈"},
                            {name: "阿浪的远方"}
                        ]
                    }, {
                        name: "3☆",
                        children: [
                            {name: "一出好戏"}
                        ]
                    }
                ]
            },
            {
                name: "剧情",
                children: [
                    {
                        name: "5☆",
                        children: [
                            {name: "无双"}
                        ]
                    },
                    {
                        name: "4☆",
                        children: [
                            {name: "大象席地而坐"},
                            {name: "风中有朵雨做的云"},
                            {name: "过春天"}
                        ]
                    },
                    {
                        name: "3☆",
                        children: [
                            {name: "无问西东"}
                        ]
                    }
                ]
            },
            {
                name: "爱情",
                children: [
                    {
                        name: "5☆",
                        children: [
                            {name: "江湖儿女"}
                        ]
                    },
                    {
                        name: "4☆",
                        children: [
                            {name: "地球最后的夜晚"},
                            {name: "你好之华"}
                        ]
                    },
                    {name: "3☆"},
                    {
                        name: "2☆",
                        children: [
                            {name: "后来的我们"}
                        ]
                    }
                ]
            },
            {
                name: "动作",
                children: [
                    {
                        name: "4☆",
                        children: [
                            {name: "红海行动"},
                            {name: "影"},
                            {name: "动物世界"}
                        ]
                    }
                ]
            },
            {
                name: "动画",
                children: [
                    {
                        name: "5☆",
                        children: [
                            {name: "夜思"}
                        ]
                    },
                    {
                        name: "4☆",
                        children: [
                            {name: "切尔诺贝利之春"},
                            {name: "女他"}
                        ]
                    },
                    {
                        name: "3☆",
                        children: [
                            {name: "风雨咒"}
                        ]
                    }
                ]
            }, {
                name: "惊悚",
                children: [
                    {
                        name: "4☆",
                        children: [
                            {name: "灵魂摆渡·黄泉"}
                        ]
                    }
                ]
            },
            {
                name: "武侠",
                children: [
                    {
                        name: "3☆",
                        children: [
                            {name: "夺命剑之风云再起"}
                        ]
                    },
                    {
                        name: "2☆",
                        children: [
                            {name: "狄仁杰之四大天王"}
                        ]
                    }
                ]
            }
        ]
    }
];
