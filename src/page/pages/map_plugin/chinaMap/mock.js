// 疫情全国各省每日数据
const dataList = [
    {
        "date": "1月20日",
        "news": "钟南山：目前已肯定新型冠状病毒肺炎人传人",
        "data": [
            {"province": "湖北", "value": 270},
            {"province": "广东", "value": 14},
            {"province": "浙江", "value": 0},
            {"province": "湖南", "value": 0},
            {"province": "河南", "value": 0},
            {"province": "安徽", "value": 0},
            {"province": "重庆", "value": 0},
            {"province": "山东", "value": 0},
            {"province": "江西", "value": 0},
            {"province": "四川", "value": 0},
            {"province": "江苏", "value": 0},
            {"province": "北京", "value": 5},
            {"province": "福建", "value": 0},
            {"province": "上海", "value": 1},
            {"province": "广西", "value": 0},
            {"province": "河北", "value": 0},
            {"province": "陕西", "value": 0},
            {"province": "云南", "value": 0},
            {"province": "海南", "value": 0},
            {"province": "黑龙江", "value": 0},
            {"province": "辽宁", "value": 0},
            {"province": "山西", "value": 0},
            {"province": "天津", "value": 0},
            {"province": "甘肃", "value": 0},
            {"province": "内蒙古", "value": 0},
            {"province": "新疆", "value": 0},
            {"province": "宁夏", "value": 0},
            {"province": "吉林", "value": 0},
            {"province": "贵州", "value": 0},
            {"province": "青海", "value": 0},
            {"province": "西藏", "value": 0},
            {"province": "澳门", "value": 0},
            {"province": "香港", "value": 0},
            {"province": "台湾", "value": 0}
        ]
    },
    {
        "date": "1月21日",
        "news": "钟南山：目前已肯定新型冠状病毒肺炎人传人",
        "data": [
            {
                "province": "湖北",
                "value": 375
            },
            {
                "province": "广东",
                "value": 26
            },
            {
                "province": "浙江",
                "value": 5
            },
            {
                "province": "湖南",
                "value": 1
            },
            {
                "province": "河南",
                "value": 1
            },
            {
                "province": "安徽",
                "value": 0
            },
            {
                "province": "重庆",
                "value": 5
            },
            {
                "province": "山东",
                "value": 1
            },
            {
                "province": "江西",
                "value": 2
            },
            {
                "province": "四川",
                "value": 2
            },
            {
                "province": "江苏",
                "value": 0
            },
            {
                "province": "北京",
                "value": 10
            },
            {
                "province": "福建",
                "value": 0
            },
            {
                "province": "上海",
                "value": 6
            },
            {
                "province": "广西",
                "value": 0
            },
            {
                "province": "河北",
                "value": 0
            },
            {
                "province": "陕西",
                "value": 0
            },
            {
                "province": "云南",
                "value": 1
            },
            {
                "province": "海南",
                "value": 0
            },
            {
                "province": "黑龙江",
                "value": 0
            },
            {
                "province": "辽宁",
                "value": 0
            },
            {
                "province": "山西",
                "value": 0
            },
            {
                "province": "天津",
                "value": 2
            },
            {
                "province": "甘肃",
                "value": 0
            },
            {
                "province": "内蒙古",
                "value": 0
            },
            {
                "province": "新疆",
                "value": 0
            },
            {
                "province": "宁夏",
                "value": 0
            },
            {
                "province": "吉林",
                "value": 0
            },
            {
                "province": "贵州",
                "value": 0
            },
            {
                "province": "青海",
                "value": 0
            },
            {
                "province": "西藏",
                "value": 0
            },
            {
                "province": "澳门",
                "value": 0
            },
            {
                "province": "香港",
                "value": 0
            },
            {
                "province": "台湾",
                "value": 0
            }
        ]
    },
    {
        "date": "1月22日",
        "news": "深圳2名新型冠状病毒肺炎确诊患者痊愈出院",
        "data": [
            {
                "province": "湖北",
                "value": 444
            },
            {
                "province": "广东",
                "value": 32
            },
            {
                "province": "浙江",
                "value": 10
            },
            {
                "province": "湖南",
                "value": 4
            },
            {
                "province": "河南",
                "value": 5
            },
            {
                "province": "安徽",
                "value": 1
            },
            {
                "province": "重庆",
                "value": 9
            },
            {
                "province": "山东",
                "value": 6
            },
            {
                "province": "江西",
                "value": 3
            },
            {
                "province": "四川",
                "value": 5
            },
            {
                "province": "江苏",
                "value": 1
            },
            {
                "province": "北京",
                "value": 14
            },
            {
                "province": "福建",
                "value": 1
            },
            {
                "province": "上海",
                "value": 16
            },
            {
                "province": "广西",
                "value": 2
            },
            {
                "province": "河北",
                "value": 1
            },
            {
                "province": "陕西",
                "value": 4
            },
            {
                "province": "云南",
                "value": 0
            },
            {
                "province": "海南",
                "value": 5
            },
            {
                "province": "黑龙江",
                "value": 1
            },
            {
                "province": "辽宁",
                "value": 2
            },
            {
                "province": "山西",
                "value": 1
            },
            {
                "province": "天津",
                "value": 4
            },
            {
                "province": "甘肃",
                "value": 0
            },
            {
                "province": "内蒙古",
                "value": 0
            },
            {
                "province": "新疆",
                "value": 0
            },
            {
                "province": "宁夏",
                "value": 1
            },
            {
                "province": "吉林",
                "value": 1
            },
            {
                "province": "贵州",
                "value": 3
            },
            {
                "province": "青海",
                "value": 0
            },
            {
                "province": "西藏",
                "value": 0
            },
            {
                "province": "澳门",
                "value": 1
            },
            {
                "province": "香港",
                "value": 1
            },
            {
                "province": "台湾",
                "value": 1
            }
        ]
    },
    {
        "date": "1月23日",
        "news": "黑龙江省报告确诊病例2例；天津出现聚集性发病；武汉小汤山医院定名火神山医院；首个新冠病毒检测试剂盒通过检验；150名解放军医护人员包机飞武汉",
        "data": [
            {
                "province": "湖北",
                "value": 549
            },
            {
                "province": "广东",
                "value": 53
            },
            {
                "province": "浙江",
                "value": 43
            },
            {
                "province": "湖南",
                "value": 24
            },
            {
                "province": "河南",
                "value": 9
            },
            {
                "province": "安徽",
                "value": 15
            },
            {
                "province": "重庆",
                "value": 27
            },
            {
                "province": "山东",
                "value": 9
            },
            {
                "province": "江西",
                "value": 7
            },
            {
                "province": "四川",
                "value": 15
            },
            {
                "province": "江苏",
                "value": 9
            },
            {
                "province": "北京",
                "value": 22
            },
            {
                "province": "福建",
                "value": 4
            },
            {
                "province": "上海",
                "value": 20
            },
            {
                "province": "广西",
                "value": 13
            },
            {
                "province": "河北",
                "value": 2
            },
            {
                "province": "陕西",
                "value": 5
            },
            {
                "province": "云南",
                "value": 2
            },
            {
                "province": "海南",
                "value": 8
            },
            {
                "province": "黑龙江",
                "value": 4
            },
            {
                "province": "辽宁",
                "value": 4
            },
            {
                "province": "山西",
                "value": 1
            },
            {
                "province": "天津",
                "value": 5
            },
            {
                "province": "甘肃",
                "value": 2
            },
            {
                "province": "内蒙古",
                "value": 1
            },
            {
                "province": "新疆",
                "value": 2
            },
            {
                "province": "宁夏",
                "value": 2
            },
            {
                "province": "吉林",
                "value": 3
            },
            {
                "province": "贵州",
                "value": 3
            },
            {
                "province": "青海",
                "value": 0
            },
            {
                "province": "西藏",
                "value": 0
            },
            {
                "province": "澳门",
                "value": 2
            },
            {
                "province": "香港",
                "value": 2
            },
            {
                "province": "台湾",
                "value": 1
            }
        ]
    },
    {
        "date": "1月24日",
        "news": "1230人的医疗救治队驰援武汉；武汉半月内将建雷神山医院",
        "data": [
            {
                "province": "湖北",
                "value": 729
            },
            {
                "province": "广东",
                "value": 78
            },
            {
                "province": "浙江",
                "value": 62
            },
            {
                "province": "湖南",
                "value": 43
            },
            {
                "province": "河南",
                "value": 32
            },
            {
                "province": "安徽",
                "value": 39
            },
            {
                "province": "重庆",
                "value": 57
            },
            {
                "province": "山东",
                "value": 21
            },
            {
                "province": "江西",
                "value": 18
            },
            {
                "province": "四川",
                "value": 28
            },
            {
                "province": "江苏",
                "value": 18
            },
            {
                "province": "北京",
                "value": 36
            },
            {
                "province": "福建",
                "value": 10
            },
            {
                "province": "上海",
                "value": 33
            },
            {
                "province": "广西",
                "value": 23
            },
            {
                "province": "河北",
                "value": 8
            },
            {
                "province": "陕西",
                "value": 15
            },
            {
                "province": "云南",
                "value": 5
            },
            {
                "province": "海南",
                "value": 17
            },
            {
                "province": "黑龙江",
                "value": 9
            },
            {
                "province": "辽宁",
                "value": 12
            },
            {
                "province": "山西",
                "value": 6
            },
            {
                "province": "天津",
                "value": 8
            },
            {
                "province": "甘肃",
                "value": 4
            },
            {
                "province": "内蒙古",
                "value": 2
            },
            {
                "province": "新疆",
                "value": 3
            },
            {
                "province": "宁夏",
                "value": 3
            },
            {
                "province": "吉林",
                "value": 4
            },
            {
                "province": "贵州",
                "value": 4
            },
            {
                "province": "青海",
                "value": 0
            },
            {
                "province": "西藏",
                "value": 0
            },
            {
                "province": "澳门",
                "value": 2
            },
            {
                "province": "香港",
                "value": 5
            },
            {
                "province": "台湾",
                "value": 3
            }
        ]
    },
    {
        "date": "1月25日",
        "news": "中央应对疫情领导小组：适当延长春节假期；武汉市长：目前有500多万人离开武汉",
        "data": [
            {
                "province": "湖北",
                "value": 1052
            },
            {
                "province": "广东",
                "value": 98
            },
            {
                "province": "浙江",
                "value": 104
            },
            {
                "province": "湖南",
                "value": 69
            },
            {
                "province": "河南",
                "value": 83
            },
            {
                "province": "安徽",
                "value": 60
            },
            {
                "province": "重庆",
                "value": 75
            },
            {
                "province": "山东",
                "value": 39
            },
            {
                "province": "江西",
                "value": 36
            },
            {
                "province": "四川",
                "value": 44
            },
            {
                "province": "江苏",
                "value": 31
            },
            {
                "province": "北京",
                "value": 41
            },
            {
                "province": "福建",
                "value": 18
            },
            {
                "province": "上海",
                "value": 40
            },
            {
                "province": "广西",
                "value": 33
            },
            {
                "province": "河北",
                "value": 13
            },
            {
                "province": "陕西",
                "value": 22
            },
            {
                "province": "云南",
                "value": 11
            },
            {
                "province": "海南",
                "value": 22
            },
            {
                "province": "黑龙江",
                "value": 15
            },
            {
                "province": "辽宁",
                "value": 16
            },
            {
                "province": "山西",
                "value": 9
            },
            {
                "province": "天津",
                "value": 10
            },
            {
                "province": "甘肃",
                "value": 7
            },
            {
                "province": "内蒙古",
                "value": 7
            },
            {
                "province": "新疆",
                "value": 4
            },
            {
                "province": "宁夏",
                "value": 4
            },
            {
                "province": "吉林",
                "value": 4
            },
            {
                "province": "贵州",
                "value": 5
            },
            {
                "province": "青海",
                "value": 1
            },
            {
                "province": "西藏",
                "value": 0
            },
            {
                "province": "澳门",
                "value": 2
            },
            {
                "province": "香港",
                "value": 5
            },
            {
                "province": "台湾",
                "value": 3
            }
        ]
    },
    {
        "date": "1月26日",
        "news": "浙江成功分离到新型冠状病毒毒株；安徽出现聚集性疫情",
        "data": [
            {
                "province": "湖北",
                "value": 1423
            },
            {
                "province": "广东",
                "value": 146
            },
            {
                "province": "浙江",
                "value": 128
            },
            {
                "province": "湖南",
                "value": 100
            },
            {
                "province": "河南",
                "value": 128
            },
            {
                "province": "安徽",
                "value": 70
            },
            {
                "province": "重庆",
                "value": 110
            },
            {
                "province": "山东",
                "value": 63
            },
            {
                "province": "江西",
                "value": 48
            },
            {
                "province": "四川",
                "value": 69
            },
            {
                "province": "江苏",
                "value": 47
            },
            {
                "province": "北京",
                "value": 68
            },
            {
                "province": "福建",
                "value": 35
            },
            {
                "province": "上海",
                "value": 53
            },
            {
                "province": "广西",
                "value": 46
            },
            {
                "province": "河北",
                "value": 18
            },
            {
                "province": "陕西",
                "value": 35
            },
            {
                "province": "云南",
                "value": 19
            },
            {
                "province": "海南",
                "value": 31
            },
            {
                "province": "黑龙江",
                "value": 21
            },
            {
                "province": "辽宁",
                "value": 22
            },
            {
                "province": "山西",
                "value": 13
            },
            {
                "province": "天津",
                "value": 14
            },
            {
                "province": "甘肃",
                "value": 14
            },
            {
                "province": "内蒙古",
                "value": 11
            },
            {
                "province": "新疆",
                "value": 5
            },
            {
                "province": "宁夏",
                "value": 7
            },
            {
                "province": "吉林",
                "value": 6
            },
            {
                "province": "贵州",
                "value": 7
            },
            {
                "province": "青海",
                "value": 4
            },
            {
                "province": "西藏",
                "value": 0
            },
            {
                "province": "澳门",
                "value": 5
            },
            {
                "province": "香港",
                "value": 8
            },
            {
                "province": "台湾",
                "value": 4
            }
        ]
    },
    {
        "date": "1月27日",
        "news": "广东首株新型冠状病毒毒株成功分离",
        "data": [
            {
                "province": "湖北",
                "value": 2714
            },
            {
                "province": "广东",
                "value": 188
            },
            {
                "province": "浙江",
                "value": 173
            },
            {
                "province": "湖南",
                "value": 143
            },
            {
                "province": "河南",
                "value": 168
            },
            {
                "province": "安徽",
                "value": 106
            },
            {
                "province": "重庆",
                "value": 132
            },
            {
                "province": "山东",
                "value": 63
            },
            {
                "province": "江西",
                "value": 72
            },
            {
                "province": "四川",
                "value": 90
            },
            {
                "province": "江苏",
                "value": 70
            },
            {
                "province": "北京",
                "value": 80
            },
            {
                "province": "福建",
                "value": 59
            },
            {
                "province": "上海",
                "value": 66
            },
            {
                "province": "广西",
                "value": 51
            },
            {
                "province": "河北",
                "value": 33
            },
            {
                "province": "陕西",
                "value": 46
            },
            {
                "province": "云南",
                "value": 44
            },
            {
                "province": "海南",
                "value": 40
            },
            {
                "province": "黑龙江",
                "value": 30
            },
            {
                "province": "辽宁",
                "value": 27
            },
            {
                "province": "山西",
                "value": 20
            },
            {
                "province": "天津",
                "value": 23
            },
            {
                "province": "甘肃",
                "value": 19
            },
            {
                "province": "内蒙古",
                "value": 13
            },
            {
                "province": "新疆",
                "value": 10
            },
            {
                "province": "宁夏",
                "value": 11
            },
            {
                "province": "吉林",
                "value": 8
            },
            {
                "province": "贵州",
                "value": 9
            },
            {
                "province": "青海",
                "value": 6
            },
            {
                "province": "西藏",
                "value": 0
            },
            {
                "province": "澳门",
                "value": 7
            },
            {
                "province": "香港",
                "value": 8
            },
            {
                "province": "台湾",
                "value": 5
            }
        ]
    },
    {
        "date": "1月28日",
        "news": "新冠肺炎确诊人数超过非典；北京疫情有转入扩散期迹象",
        "data": [
            {
                "province": "湖北",
                "value": 3554
            },
            {
                "province": "广东",
                "value": 241
            },
            {
                "province": "浙江",
                "value": 296
            },
            {
                "province": "湖南",
                "value": 221
            },
            {
                "province": "河南",
                "value": 206
            },
            {
                "province": "安徽",
                "value": 152
            },
            {
                "province": "重庆",
                "value": 147
            },
            {
                "province": "山东",
                "value": 121
            },
            {
                "province": "江西",
                "value": 109
            },
            {
                "province": "四川",
                "value": 108
            },
            {
                "province": "江苏",
                "value": 99
            },
            {
                "province": "北京",
                "value": 91
            },
            {
                "province": "福建",
                "value": 80
            },
            {
                "province": "上海",
                "value": 80
            },
            {
                "province": "广西",
                "value": 58
            },
            {
                "province": "河北",
                "value": 48
            },
            {
                "province": "陕西",
                "value": 56
            },
            {
                "province": "云南",
                "value": 51
            },
            {
                "province": "海南",
                "value": 43
            },
            {
                "province": "黑龙江",
                "value": 37
            },
            {
                "province": "辽宁",
                "value": 34
            },
            {
                "province": "山西",
                "value": 27
            },
            {
                "province": "天津",
                "value": 24
            },
            {
                "province": "甘肃",
                "value": 24
            },
            {
                "province": "内蒙古",
                "value": 16
            },
            {
                "province": "新疆",
                "value": 13
            },
            {
                "province": "宁夏",
                "value": 12
            },
            {
                "province": "吉林",
                "value": 9
            },
            {
                "province": "贵州",
                "value": 9
            },
            {
                "province": "青海",
                "value": 6
            },
            {
                "province": "西藏",
                "value": 0
            },
            {
                "province": "澳门",
                "value": 7
            },
            {
                "province": "香港",
                "value": 8
            },
            {
                "province": "台湾",
                "value": 8
            }
        ]
    },
    {
        "date": "1月29日",
        "news": "武汉病毒所筛出较好抑制病毒药物；湖北黄冈市卫健委主任唐志红被免职",
        "data": [
            {
                "province": "湖北",
                "value": 4586
            },
            {
                "province": "广东",
                "value": 311
            },
            {
                "province": "浙江",
                "value": 428
            },
            {
                "province": "湖南",
                "value": 277
            },
            {
                "province": "河南",
                "value": 206
            },
            {
                "province": "安徽",
                "value": 200
            },
            {
                "province": "重庆",
                "value": 165
            },
            {
                "province": "山东",
                "value": 145
            },
            {
                "province": "江西",
                "value": 162
            },
            {
                "province": "四川",
                "value": 142
            },
            {
                "province": "江苏",
                "value": 129
            },
            {
                "province": "北京",
                "value": 114
            },
            {
                "province": "福建",
                "value": 101
            },
            {
                "province": "上海",
                "value": 101
            },
            {
                "province": "广西",
                "value": 78
            },
            {
                "province": "河北",
                "value": 65
            },
            {
                "province": "陕西",
                "value": 63
            },
            {
                "province": "云南",
                "value": 70
            },
            {
                "province": "海南",
                "value": 46
            },
            {
                "province": "黑龙江",
                "value": 43
            },
            {
                "province": "辽宁",
                "value": 41
            },
            {
                "province": "山西",
                "value": 35
            },
            {
                "province": "天津",
                "value": 27
            },
            {
                "province": "甘肃",
                "value": 26
            },
            {
                "province": "内蒙古",
                "value": 18
            },
            {
                "province": "新疆",
                "value": 14
            },
            {
                "province": "宁夏",
                "value": 17
            },
            {
                "province": "吉林",
                "value": 14
            },
            {
                "province": "贵州",
                "value": 12
            },
            {
                "province": "青海",
                "value": 6
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 7
            },
            {
                "province": "香港",
                "value": 10
            },
            {
                "province": "台湾",
                "value": 8
            }
        ]
    },
    {
        "date": "1月30日",
        "news": "火神山医院将从2月3日起正式收治病人",
        "data": [
            {
                "province": "湖北",
                "value": 5806
            },
            {
                "province": "广东",
                "value": 393
            },
            {
                "province": "浙江",
                "value": 537
            },
            {
                "province": "湖南",
                "value": 332
            },
            {
                "province": "河南",
                "value": 352
            },
            {
                "province": "安徽",
                "value": 237
            },
            {
                "province": "重庆",
                "value": 206
            },
            {
                "province": "山东",
                "value": 178
            },
            {
                "province": "江西",
                "value": 240
            },
            {
                "province": "四川",
                "value": 177
            },
            {
                "province": "江苏",
                "value": 168
            },
            {
                "province": "北京",
                "value": 132
            },
            {
                "province": "福建",
                "value": 120
            },
            {
                "province": "上海",
                "value": 128
            },
            {
                "province": "广西",
                "value": 87
            },
            {
                "province": "河北",
                "value": 82
            },
            {
                "province": "陕西",
                "value": 87
            },
            {
                "province": "云南",
                "value": 80
            },
            {
                "province": "海南",
                "value": 49
            },
            {
                "province": "黑龙江",
                "value": 59
            },
            {
                "province": "辽宁",
                "value": 45
            },
            {
                "province": "山西",
                "value": 39
            },
            {
                "province": "天津",
                "value": 31
            },
            {
                "province": "甘肃",
                "value": 29
            },
            {
                "province": "内蒙古",
                "value": 20
            },
            {
                "province": "新疆",
                "value": 17
            },
            {
                "province": "宁夏",
                "value": 21
            },
            {
                "province": "吉林",
                "value": 14
            },
            {
                "province": "贵州",
                "value": 15
            },
            {
                "province": "青海",
                "value": 8
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 7
            },
            {
                "province": "香港",
                "value": 12
            },
            {
                "province": "台湾",
                "value": 9
            }
        ]
    },
    {
        "date": "1月31日",
        "news": "中国红十字会总会公布接受使用社会捐赠款物最新数据",
        "data": [
            {
                "province": "湖北",
                "value": 7153
            },
            {
                "province": "广东",
                "value": 520
            },
            {
                "province": "浙江",
                "value": 599
            },
            {
                "province": "湖南",
                "value": 389
            },
            {
                "province": "河南",
                "value": 422
            },
            {
                "province": "安徽",
                "value": 297
            },
            {
                "province": "重庆",
                "value": 238
            },
            {
                "province": "山东",
                "value": 202
            },
            {
                "province": "江西",
                "value": 286
            },
            {
                "province": "四川",
                "value": 207
            },
            {
                "province": "江苏",
                "value": 202
            },
            {
                "province": "北京",
                "value": 156
            },
            {
                "province": "福建",
                "value": 144
            },
            {
                "province": "上海",
                "value": 153
            },
            {
                "province": "广西",
                "value": 100
            },
            {
                "province": "河北",
                "value": 96
            },
            {
                "province": "陕西",
                "value": 101
            },
            {
                "province": "云南",
                "value": 91
            },
            {
                "province": "海南",
                "value": 57
            },
            {
                "province": "黑龙江",
                "value": 80
            },
            {
                "province": "辽宁",
                "value": 60
            },
            {
                "province": "山西",
                "value": 47
            },
            {
                "province": "天津",
                "value": 32
            },
            {
                "province": "甘肃",
                "value": 35
            },
            {
                "province": "内蒙古",
                "value": 23
            },
            {
                "province": "新疆",
                "value": 18
            },
            {
                "province": "宁夏",
                "value": 26
            },
            {
                "province": "吉林",
                "value": 17
            },
            {
                "province": "贵州",
                "value": 29
            },
            {
                "province": "青海",
                "value": 9
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 7
            },
            {
                "province": "香港",
                "value": 13
            },
            {
                "province": "台湾",
                "value": 10
            }
        ]
    },
    {
        "date": "2月01日",
        "news": "报告云监工，火神山医院完工！湖北科技厅：最快2小时可得出新冠病毒核酸检测结果",
        "data": [
            {
                "province": "湖北",
                "value": 9074
            },
            {
                "province": "广东",
                "value": 604
            },
            {
                "province": "浙江",
                "value": 661
            },
            {
                "province": "湖南",
                "value": 463
            },
            {
                "province": "河南",
                "value": 493
            },
            {
                "province": "安徽",
                "value": 340
            },
            {
                "province": "重庆",
                "value": 262
            },
            {
                "province": "山东",
                "value": 225
            },
            {
                "province": "江西",
                "value": 333
            },
            {
                "province": "四川",
                "value": 231
            },
            {
                "province": "江苏",
                "value": 236
            },
            {
                "province": "北京",
                "value": 183
            },
            {
                "province": "福建",
                "value": 159
            },
            {
                "province": "上海",
                "value": 177
            },
            {
                "province": "广西",
                "value": 111
            },
            {
                "province": "河北",
                "value": 104
            },
            {
                "province": "陕西",
                "value": 116
            },
            {
                "province": "云南",
                "value": 99
            },
            {
                "province": "海南",
                "value": 63
            },
            {
                "province": "黑龙江",
                "value": 95
            },
            {
                "province": "辽宁",
                "value": 64
            },
            {
                "province": "山西",
                "value": 56
            },
            {
                "province": "天津",
                "value": 41
            },
            {
                "province": "甘肃",
                "value": 40
            },
            {
                "province": "内蒙古",
                "value": 27
            },
            {
                "province": "新疆",
                "value": 21
            },
            {
                "province": "宁夏",
                "value": 28
            },
            {
                "province": "吉林",
                "value": 23
            },
            {
                "province": "贵州",
                "value": 38
            },
            {
                "province": "青海",
                "value": 9
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 7
            },
            {
                "province": "香港",
                "value": 14
            },
            {
                "province": "台湾",
                "value": 10
            }
        ]
    },
    {
        "date": "2月02日",
        "news": "工信部：核酸检测试剂产量是疑似患者40倍，已基本满足要求；发改委回应口罩紧缺问题：已按一倍以上规模组织产能",
        "data": [
            {
                "province": "湖北",
                "value": 11177
            },
            {
                "province": "广东",
                "value": 683
            },
            {
                "province": "浙江",
                "value": 724
            },
            {
                "province": "湖南",
                "value": 521
            },
            {
                "province": "河南",
                "value": 566
            },
            {
                "province": "安徽",
                "value": 408
            },
            {
                "province": "重庆",
                "value": 300
            },
            {
                "province": "山东",
                "value": 246
            },
            {
                "province": "江西",
                "value": 391
            },
            {
                "province": "四川",
                "value": 254
            },
            {
                "province": "江苏",
                "value": 271
            },
            {
                "province": "北京",
                "value": 212
            },
            {
                "province": "福建",
                "value": 179
            },
            {
                "province": "上海",
                "value": 193
            },
            {
                "province": "广西",
                "value": 127
            },
            {
                "province": "河北",
                "value": 113
            },
            {
                "province": "陕西",
                "value": 128
            },
            {
                "province": "云南",
                "value": 109
            },
            {
                "province": "海南",
                "value": 70
            },
            {
                "province": "黑龙江",
                "value": 118
            },
            {
                "province": "辽宁",
                "value": 70
            },
            {
                "province": "山西",
                "value": 66
            },
            {
                "province": "天津",
                "value": 48
            },
            {
                "province": "甘肃",
                "value": 51
            },
            {
                "province": "内蒙古",
                "value": 34
            },
            {
                "province": "新疆",
                "value": 24
            },
            {
                "province": "宁夏",
                "value": 31
            },
            {
                "province": "吉林",
                "value": 31
            },
            {
                "province": "贵州",
                "value": 46
            },
            {
                "province": "青海",
                "value": 13
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 8
            },
            {
                "province": "香港",
                "value": 15
            },
            {
                "province": "台湾",
                "value": 10
            }
        ]
    },
    {
        "date": "2月03日",
        "news": "杭州全市所有村庄、小区、单位实行封闭式管理；李兰娟院士发布重大抗病毒研究成果",
        "data": [
            {
                "province": "湖北",
                "value": 13522
            },
            {
                "province": "广东",
                "value": 797
            },
            {
                "province": "浙江",
                "value": 829
            },
            {
                "province": "湖南",
                "value": 593
            },
            {
                "province": "河南",
                "value": 675
            },
            {
                "province": "安徽",
                "value": 480
            },
            {
                "province": "重庆",
                "value": 337
            },
            {
                "province": "山东",
                "value": 270
            },
            {
                "province": "江西",
                "value": 476
            },
            {
                "province": "四川",
                "value": 282
            },
            {
                "province": "江苏",
                "value": 308
            },
            {
                "province": "北京",
                "value": 228
            },
            {
                "province": "福建",
                "value": 194
            },
            {
                "province": "上海",
                "value": 208
            },
            {
                "province": "广西",
                "value": 139
            },
            {
                "province": "河北",
                "value": 126
            },
            {
                "province": "陕西",
                "value": 142
            },
            {
                "province": "云南",
                "value": 117
            },
            {
                "province": "海南",
                "value": 79
            },
            {
                "province": "黑龙江",
                "value": 155
            },
            {
                "province": "辽宁",
                "value": 74
            },
            {
                "province": "山西",
                "value": 74
            },
            {
                "province": "天津",
                "value": 60
            },
            {
                "province": "甘肃",
                "value": 55
            },
            {
                "province": "内蒙古",
                "value": 35
            },
            {
                "province": "新疆",
                "value": 29
            },
            {
                "province": "宁夏",
                "value": 34
            },
            {
                "province": "吉林",
                "value": 42
            },
            {
                "province": "贵州",
                "value": 56
            },
            {
                "province": "青海",
                "value": 15
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 8
            },
            {
                "province": "香港",
                "value": 15
            },
            {
                "province": "台湾",
                "value": 10
            }
        ]
    },
    {
        "date": "2月04日",
        "news": "武汉方舱医院扩容至万余床位；抗病毒药物瑞德西韦临床试验在武汉启动",
        "data": [
            {
                "province": "湖北",
                "value": 16678
            },
            {
                "province": "广东",
                "value": 870
            },
            {
                "province": "浙江",
                "value": 895
            },
            {
                "province": "湖南",
                "value": 661
            },
            {
                "province": "河南",
                "value": 764
            },
            {
                "province": "安徽",
                "value": 530
            },
            {
                "province": "重庆",
                "value": 366
            },
            {
                "province": "山东",
                "value": 298
            },
            {
                "province": "江西",
                "value": 548
            },
            {
                "province": "四川",
                "value": 301
            },
            {
                "province": "江苏",
                "value": 341
            },
            {
                "province": "北京",
                "value": 253
            },
            {
                "province": "福建",
                "value": 205
            },
            {
                "province": "上海",
                "value": 233
            },
            {
                "province": "广西",
                "value": 150
            },
            {
                "province": "河北",
                "value": 135
            },
            {
                "province": "陕西",
                "value": 165
            },
            {
                "province": "云南",
                "value": 122
            },
            {
                "province": "海南",
                "value": 89
            },
            {
                "province": "黑龙江",
                "value": 190
            },
            {
                "province": "辽宁",
                "value": 81
            },
            {
                "province": "山西",
                "value": 81
            },
            {
                "province": "天津",
                "value": 67
            },
            {
                "province": "甘肃",
                "value": 57
            },
            {
                "province": "内蒙古",
                "value": 42
            },
            {
                "province": "新疆",
                "value": 32
            },
            {
                "province": "宁夏",
                "value": 34
            },
            {
                "province": "吉林",
                "value": 54
            },
            {
                "province": "贵州",
                "value": 64
            },
            {
                "province": "青海",
                "value": 17
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 18
            },
            {
                "province": "台湾",
                "value": 11
            }
        ]
    },
    {
        "date": "2月05日",
        "news": "全国非湖北地区新增确诊病例连降两日",
        "data": [
            {
                "province": "湖北",
                "value": 19665
            },
            {
                "province": "广东",
                "value": 944
            },
            {
                "province": "浙江",
                "value": 954
            },
            {
                "province": "湖南",
                "value": 711
            },
            {
                "province": "河南",
                "value": 851
            },
            {
                "province": "安徽",
                "value": 591
            },
            {
                "province": "重庆",
                "value": 389
            },
            {
                "province": "山东",
                "value": 343
            },
            {
                "province": "江西",
                "value": 600
            },
            {
                "province": "四川",
                "value": 321
            },
            {
                "province": "江苏",
                "value": 373
            },
            {
                "province": "北京",
                "value": 274
            },
            {
                "province": "福建",
                "value": 215
            },
            {
                "province": "上海",
                "value": 254
            },
            {
                "province": "广西",
                "value": 168
            },
            {
                "province": "河北",
                "value": 157
            },
            {
                "province": "陕西",
                "value": 173
            },
            {
                "province": "云南",
                "value": 128
            },
            {
                "province": "海南",
                "value": 100
            },
            {
                "province": "黑龙江",
                "value": 227
            },
            {
                "province": "辽宁",
                "value": 89
            },
            {
                "province": "山西",
                "value": 90
            },
            {
                "province": "天津",
                "value": 69
            },
            {
                "province": "甘肃",
                "value": 62
            },
            {
                "province": "内蒙古",
                "value": 46
            },
            {
                "province": "新疆",
                "value": 36
            },
            {
                "province": "宁夏",
                "value": 40
            },
            {
                "province": "吉林",
                "value": 59
            },
            {
                "province": "贵州",
                "value": 69
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 21
            },
            {
                "province": "台湾",
                "value": 11
            }
        ]
    },
    {
        "date": "2月06日",
        "news": "武汉开展全民体温监测；国家监察委派调查组调查李文亮有关问题",
        "data": [
            {
                "province": "湖北",
                "value": 22112
            },
            {
                "province": "广东",
                "value": 1018
            },
            {
                "province": "浙江",
                "value": 1006
            },
            {
                "province": "湖南",
                "value": 772
            },
            {
                "province": "河南",
                "value": 914
            },
            {
                "province": "安徽",
                "value": 665
            },
            {
                "province": "重庆",
                "value": 411
            },
            {
                "province": "山东",
                "value": 379
            },
            {
                "province": "江西",
                "value": 661
            },
            {
                "province": "四川",
                "value": 344
            },
            {
                "province": "江苏",
                "value": 408
            },
            {
                "province": "北京",
                "value": 297
            },
            {
                "province": "福建",
                "value": 224
            },
            {
                "province": "上海",
                "value": 269
            },
            {
                "province": "广西",
                "value": 172
            },
            {
                "province": "河北",
                "value": 171
            },
            {
                "province": "陕西",
                "value": 184
            },
            {
                "province": "云南",
                "value": 135
            },
            {
                "province": "海南",
                "value": 111
            },
            {
                "province": "黑龙江",
                "value": 277
            },
            {
                "province": "辽宁",
                "value": 95
            },
            {
                "province": "山西",
                "value": 96
            },
            {
                "province": "天津",
                "value": 79
            },
            {
                "province": "甘肃",
                "value": 67
            },
            {
                "province": "内蒙古",
                "value": 50
            },
            {
                "province": "新疆",
                "value": 39
            },
            {
                "province": "宁夏",
                "value": 43
            },
            {
                "province": "吉林",
                "value": 65
            },
            {
                "province": "贵州",
                "value": 77
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 24
            },
            {
                "province": "台湾",
                "value": 16
            }
        ]
    },
    {
        "date": "2月07日",
        "news": "武汉预计再增加5400床位收治轻症患者",
        "data": [
            {
                "province": "湖北",
                "value": 24953
            },
            {
                "province": "广东",
                "value": 1075
            },
            {
                "province": "浙江",
                "value": 1048
            },
            {
                "province": "湖南",
                "value": 803
            },
            {
                "province": "河南",
                "value": 980
            },
            {
                "province": "安徽",
                "value": 733
            },
            {
                "province": "重庆",
                "value": 426
            },
            {
                "province": "山东",
                "value": 407
            },
            {
                "province": "江西",
                "value": 698
            },
            {
                "province": "四川",
                "value": 363
            },
            {
                "province": "江苏",
                "value": 439
            },
            {
                "province": "北京",
                "value": 315
            },
            {
                "province": "福建",
                "value": 239
            },
            {
                "province": "上海",
                "value": 281
            },
            {
                "province": "广西",
                "value": 183
            },
            {
                "province": "河北",
                "value": 195
            },
            {
                "province": "陕西",
                "value": 184
            },
            {
                "province": "云南",
                "value": 138
            },
            {
                "province": "海南",
                "value": 122
            },
            {
                "province": "黑龙江",
                "value": 281
            },
            {
                "province": "辽宁",
                "value": 99
            },
            {
                "province": "山西",
                "value": 104
            },
            {
                "province": "天津",
                "value": 81
            },
            {
                "province": "甘肃",
                "value": 71
            },
            {
                "province": "内蒙古",
                "value": 52
            },
            {
                "province": "新疆",
                "value": 42
            },
            {
                "province": "宁夏",
                "value": 44
            },
            {
                "province": "吉林",
                "value": 69
            },
            {
                "province": "贵州",
                "value": 89
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 26
            },
            {
                "province": "台湾",
                "value": 16
            }
        ]
    },
    {
        "date": "2月08日",
        "news": "今起，武汉一天消毒两次",
        "data": [
            {
                "province": "湖北",
                "value": 27013
            },
            {
                "province": "广东",
                "value": 1120
            },
            {
                "province": "浙江",
                "value": 1075
            },
            {
                "province": "湖南",
                "value": 838
            },
            {
                "province": "河南",
                "value": 1033
            },
            {
                "province": "安徽",
                "value": 779
            },
            {
                "province": "重庆",
                "value": 446
            },
            {
                "province": "山东",
                "value": 435
            },
            {
                "province": "江西",
                "value": 739
            },
            {
                "province": "四川",
                "value": 386
            },
            {
                "province": "江苏",
                "value": 468
            },
            {
                "province": "北京",
                "value": 326
            },
            {
                "province": "福建",
                "value": 250
            },
            {
                "province": "上海",
                "value": 292
            },
            {
                "province": "广西",
                "value": 195
            },
            {
                "province": "河北",
                "value": 206
            },
            {
                "province": "陕西",
                "value": 195
            },
            {
                "province": "云南",
                "value": 140
            },
            {
                "province": "海南",
                "value": 128
            },
            {
                "province": "黑龙江",
                "value": 307
            },
            {
                "province": "辽宁",
                "value": 106
            },
            {
                "province": "山西",
                "value": 115
            },
            {
                "province": "天津",
                "value": 88
            },
            {
                "province": "甘肃",
                "value": 79
            },
            {
                "province": "内蒙古",
                "value": 54
            },
            {
                "province": "新疆",
                "value": 45
            },
            {
                "province": "宁夏",
                "value": 45
            },
            {
                "province": "吉林",
                "value": 78
            },
            {
                "province": "贵州",
                "value": 96
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 26
            },
            {
                "province": "台湾",
                "value": 17
            }
        ]
    },
    {
        "date": "2月09日",
        "news": "全国新冠肺炎治愈比例已升至8.2%",
        "data": [
            {
                "province": "湖北",
                "value": 29631
            },
            {
                "province": "广东",
                "value": 1151
            },
            {
                "province": "浙江",
                "value": 1092
            },
            {
                "province": "湖南",
                "value": 879
            },
            {
                "province": "河南",
                "value": 1073
            },
            {
                "province": "安徽",
                "value": 830
            },
            {
                "province": "重庆",
                "value": 468
            },
            {
                "province": "山东",
                "value": 459
            },
            {
                "province": "江西",
                "value": 772
            },
            {
                "province": "四川",
                "value": 405
            },
            {
                "province": "江苏",
                "value": 492
            },
            {
                "province": "北京",
                "value": 337
            },
            {
                "province": "福建",
                "value": 261
            },
            {
                "province": "上海",
                "value": 295
            },
            {
                "province": "广西",
                "value": 210
            },
            {
                "province": "河北",
                "value": 218
            },
            {
                "province": "陕西",
                "value": 208
            },
            {
                "province": "云南",
                "value": 141
            },
            {
                "province": "海南",
                "value": 136
            },
            {
                "province": "黑龙江",
                "value": 331
            },
            {
                "province": "辽宁",
                "value": 108
            },
            {
                "province": "山西",
                "value": 119
            },
            {
                "province": "天津",
                "value": 91
            },
            {
                "province": "甘肃",
                "value": 83
            },
            {
                "province": "内蒙古",
                "value": 58
            },
            {
                "province": "新疆",
                "value": 49
            },
            {
                "province": "宁夏",
                "value": 49
            },
            {
                "province": "吉林",
                "value": 80
            },
            {
                "province": "贵州",
                "value": 109
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 36
            },
            {
                "province": "台湾",
                "value": 18
            }
        ]
    },
    {
        "date": "2月10日",
        "news": "武汉：所有住宅小区实行封闭管理",
        "data": [
            {
                "province": "湖北",
                "value": 31728
            },
            {
                "province": "广东",
                "value": 1177
            },
            {
                "province": "浙江",
                "value": 1117
            },
            {
                "province": "湖南",
                "value": 912
            },
            {
                "province": "河南",
                "value": 1105
            },
            {
                "province": "安徽",
                "value": 860
            },
            {
                "province": "重庆",
                "value": 486
            },
            {
                "province": "山东",
                "value": 486
            },
            {
                "province": "江西",
                "value": 804
            },
            {
                "province": "四川",
                "value": 417
            },
            {
                "province": "江苏",
                "value": 515
            },
            {
                "province": "北京",
                "value": 342
            },
            {
                "province": "福建",
                "value": 267
            },
            {
                "province": "上海",
                "value": 302
            },
            {
                "province": "广西",
                "value": 215
            },
            {
                "province": "河北",
                "value": 239
            },
            {
                "province": "陕西",
                "value": 213
            },
            {
                "province": "云南",
                "value": 149
            },
            {
                "province": "海南",
                "value": 142
            },
            {
                "province": "黑龙江",
                "value": 360
            },
            {
                "province": "辽宁",
                "value": 108
            },
            {
                "province": "山西",
                "value": 122
            },
            {
                "province": "天津",
                "value": 95
            },
            {
                "province": "甘肃",
                "value": 86
            },
            {
                "province": "内蒙古",
                "value": 58
            },
            {
                "province": "新疆",
                "value": 55
            },
            {
                "province": "宁夏",
                "value": 53
            },
            {
                "province": "吉林",
                "value": 81
            },
            {
                "province": "贵州",
                "value": 118
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 42
            },
            {
                "province": "台湾",
                "value": 18
            }
        ]
    },
    {
        "date": "2月11日",
        "news": "世界卫生组织将新冠状病毒命名为COVID-19",
        "data": [
            {
                "province": "湖北",
                "value": 33366
            },
            {
                "province": "广东",
                "value": 1219
            },
            {
                "province": "浙江",
                "value": 1131
            },
            {
                "province": "湖南",
                "value": 946
            },
            {
                "province": "河南",
                "value": 1135
            },
            {
                "province": "安徽",
                "value": 888
            },
            {
                "province": "重庆",
                "value": 505
            },
            {
                "province": "山东",
                "value": 497
            },
            {
                "province": "江西",
                "value": 844
            },
            {
                "province": "四川",
                "value": 436
            },
            {
                "province": "江苏",
                "value": 543
            },
            {
                "province": "北京",
                "value": 352
            },
            {
                "province": "福建",
                "value": 272
            },
            {
                "province": "上海",
                "value": 306
            },
            {
                "province": "广西",
                "value": 222
            },
            {
                "province": "河北",
                "value": 251
            },
            {
                "province": "陕西",
                "value": 219
            },
            {
                "province": "云南",
                "value": 154
            },
            {
                "province": "海南",
                "value": 145
            },
            {
                "province": "黑龙江",
                "value": 378
            },
            {
                "province": "辽宁",
                "value": 116
            },
            {
                "province": "山西",
                "value": 124
            },
            {
                "province": "天津",
                "value": 106
            },
            {
                "province": "甘肃",
                "value": 86
            },
            {
                "province": "内蒙古",
                "value": 60
            },
            {
                "province": "新疆",
                "value": 59
            },
            {
                "province": "宁夏",
                "value": 58
            },
            {
                "province": "吉林",
                "value": 83
            },
            {
                "province": "贵州",
                "value": 131
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 49
            },
            {
                "province": "台湾",
                "value": 18
            }
        ]
    },
    {
        "date": "2月12日",
        "news": "湖北新增新冠肺炎确诊病例14840例 累计48206例",
        "data": [
            {
                "province": "湖北",
                "value": 47163
            },
            {
                "province": "广东",
                "value": 1241
            },
            {
                "province": "浙江",
                "value": 1145
            },
            {
                "province": "湖南",
                "value": 968
            },
            {
                "province": "河南",
                "value": 1169
            },
            {
                "province": "安徽",
                "value": 910
            },
            {
                "province": "重庆",
                "value": 518
            },
            {
                "province": "山东",
                "value": 506
            },
            {
                "province": "江西",
                "value": 872
            },
            {
                "province": "四川",
                "value": 451
            },
            {
                "province": "江苏",
                "value": 570
            },
            {
                "province": "北京",
                "value": 366
            },
            {
                "province": "福建",
                "value": 279
            },
            {
                "province": "上海",
                "value": 313
            },
            {
                "province": "广西",
                "value": 222
            },
            {
                "province": "河北",
                "value": 265
            },
            {
                "province": "陕西",
                "value": 225
            },
            {
                "province": "云南",
                "value": 155
            },
            {
                "province": "海南",
                "value": 157
            },
            {
                "province": "黑龙江",
                "value": 395
            },
            {
                "province": "辽宁",
                "value": 116
            },
            {
                "province": "山西",
                "value": 126
            },
            {
                "province": "天津",
                "value": 112
            },
            {
                "province": "甘肃",
                "value": 87
            },
            {
                "province": "内蒙古",
                "value": 61
            },
            {
                "province": "新疆",
                "value": 63
            },
            {
                "province": "宁夏",
                "value": 64
            },
            {
                "province": "吉林",
                "value": 84
            },
            {
                "province": "贵州",
                "value": 135
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 50
            },
            {
                "province": "台湾",
                "value": 18
            }
        ]
    },
    {
        "date": "2月13日",
        "news": "2月13日0至24时，全国新增确诊病例5090例，累计确诊63851例",
        "data": [
            {
                "province": "湖北",
                "value": 51986
            },
            {
                "province": "广东",
                "value": 1261
            },
            {
                "province": "浙江",
                "value": 1155
            },
            {
                "province": "湖南",
                "value": 988
            },
            {
                "province": "河南",
                "value": 1184
            },
            {
                "province": "安徽",
                "value": 934
            },
            {
                "province": "重庆",
                "value": 529
            },
            {
                "province": "山东",
                "value": 519
            },
            {
                "province": "江西",
                "value": 900
            },
            {
                "province": "四川",
                "value": 463
            },
            {
                "province": "江苏",
                "value": 593
            },
            {
                "province": "北京",
                "value": 372
            },
            {
                "province": "福建",
                "value": 281
            },
            {
                "province": "上海",
                "value": 318
            },
            {
                "province": "广西",
                "value": 226
            },
            {
                "province": "河北",
                "value": 283
            },
            {
                "province": "陕西",
                "value": 229
            },
            {
                "province": "云南",
                "value": 162
            },
            {
                "province": "海南",
                "value": 157
            },
            {
                "province": "黑龙江",
                "value": 418
            },
            {
                "province": "辽宁",
                "value": 116
            },
            {
                "province": "山西",
                "value": 126
            },
            {
                "province": "天津",
                "value": 119
            },
            {
                "province": "甘肃",
                "value": 90
            },
            {
                "province": "内蒙古",
                "value": 65
            },
            {
                "province": "新疆",
                "value": 65
            },
            {
                "province": "宁夏",
                "value": 67
            },
            {
                "province": "吉林",
                "value": 86
            },
            {
                "province": "贵州",
                "value": 140
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 53
            },
            {
                "province": "台湾",
                "value": 18
            }
        ]
    },
    {
        "date": "2月14日",
        "news": "钟南山指导研发快速检测试剂盒，采一滴血15分钟出结果",
        "data": [
            {
                "province": "湖北",
                "value": 54406
            },
            {
                "province": "广东",
                "value": 1294
            },
            {
                "province": "浙江",
                "value": 1162
            },
            {
                "province": "湖南",
                "value": 1001
            },
            {
                "province": "河南",
                "value": 1212
            },
            {
                "province": "安徽",
                "value": 950
            },
            {
                "province": "重庆",
                "value": 537
            },
            {
                "province": "山东",
                "value": 530
            },
            {
                "province": "江西",
                "value": 913
            },
            {
                "province": "四川",
                "value": 470
            },
            {
                "province": "江苏",
                "value": 604
            },
            {
                "province": "北京",
                "value": 375
            },
            {
                "province": "福建",
                "value": 285
            },
            {
                "province": "上海",
                "value": 326
            },
            {
                "province": "广西",
                "value": 235
            },
            {
                "province": "河北",
                "value": 291
            },
            {
                "province": "陕西",
                "value": 230
            },
            {
                "province": "云南",
                "value": 168
            },
            {
                "province": "海南",
                "value": 162
            },
            {
                "province": "黑龙江",
                "value": 425
            },
            {
                "province": "辽宁",
                "value": 119
            },
            {
                "province": "山西",
                "value": 127
            },
            {
                "province": "天津",
                "value": 120
            },
            {
                "province": "甘肃",
                "value": 90
            },
            {
                "province": "内蒙古",
                "value": 68
            },
            {
                "province": "新疆",
                "value": 70
            },
            {
                "province": "宁夏",
                "value": 70
            },
            {
                "province": "吉林",
                "value": 88
            },
            {
                "province": "贵州",
                "value": 143
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 56
            },
            {
                "province": "台湾",
                "value": 18
            }
        ]
    },
    {
        "date": "2月15日",
        "news": "全国非湖北地区新增确诊病例连降12天",
        "data": [
            {
                "province": "湖北",
                "value": 56249
            },
            {
                "province": "广东",
                "value": 1316
            },
            {
                "province": "浙江",
                "value": 1167
            },
            {
                "province": "湖南",
                "value": 1004
            },
            {
                "province": "河南",
                "value": 1231
            },
            {
                "province": "安徽",
                "value": 962
            },
            {
                "province": "重庆",
                "value": 544
            },
            {
                "province": "山东",
                "value": 537
            },
            {
                "province": "江西",
                "value": 925
            },
            {
                "province": "四川",
                "value": 481
            },
            {
                "province": "江苏",
                "value": 617
            },
            {
                "province": "北京",
                "value": 380
            },
            {
                "province": "福建",
                "value": 287
            },
            {
                "province": "上海",
                "value": 328
            },
            {
                "province": "广西",
                "value": 237
            },
            {
                "province": "河北",
                "value": 300
            },
            {
                "province": "陕西",
                "value": 232
            },
            {
                "province": "云南",
                "value": 169
            },
            {
                "province": "海南",
                "value": 162
            },
            {
                "province": "黑龙江",
                "value": 445
            },
            {
                "province": "辽宁",
                "value": 120
            },
            {
                "province": "山西",
                "value": 128
            },
            {
                "province": "天津",
                "value": 122
            },
            {
                "province": "甘肃",
                "value": 90
            },
            {
                "province": "内蒙古",
                "value": 70
            },
            {
                "province": "新疆",
                "value": 71
            },
            {
                "province": "宁夏",
                "value": 70
            },
            {
                "province": "吉林",
                "value": 89
            },
            {
                "province": "贵州",
                "value": 144
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 56
            },
            {
                "province": "台湾",
                "value": 18
            }
        ]
    },
    {
        "date": "2月16日",
        "news": "湖北孝感：所有城镇居民严禁外出",
        "data": [
            {
                "province": "湖北",
                "value": 58182
            },
            {
                "province": "广东",
                "value": 1322
            },
            {
                "province": "浙江",
                "value": 1171
            },
            {
                "province": "湖南",
                "value": 1006
            },
            {
                "province": "河南",
                "value": 1246
            },
            {
                "province": "安徽",
                "value": 973
            },
            {
                "province": "重庆",
                "value": 551
            },
            {
                "province": "山东",
                "value": 541
            },
            {
                "province": "江西",
                "value": 930
            },
            {
                "province": "四川",
                "value": 495
            },
            {
                "province": "江苏",
                "value": 626
            },
            {
                "province": "北京",
                "value": 381
            },
            {
                "province": "福建",
                "value": 290
            },
            {
                "province": "上海",
                "value": 331
            },
            {
                "province": "广西",
                "value": 238
            },
            {
                "province": "河北",
                "value": 301
            },
            {
                "province": "陕西",
                "value": 236
            },
            {
                "province": "云南",
                "value": 171
            },
            {
                "province": "海南",
                "value": 162
            },
            {
                "province": "黑龙江",
                "value": 457
            },
            {
                "province": "辽宁",
                "value": 121
            },
            {
                "province": "山西",
                "value": 129
            },
            {
                "province": "天津",
                "value": 124
            },
            {
                "province": "甘肃",
                "value": 90
            },
            {
                "province": "内蒙古",
                "value": 72
            },
            {
                "province": "新疆",
                "value": 75
            },
            {
                "province": "宁夏",
                "value": 70
            },
            {
                "province": "吉林",
                "value": 89
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 57
            },
            {
                "province": "台湾",
                "value": 20
            }
        ]
    },
    {
        "date": "2月17日",
        "news": "钟南山：武汉现在看来还并没有停止人传人",
        "data": [
            {
                "province": "湖北",
                "value": 59989
            },
            {
                "province": "广东",
                "value": 1328
            },
            {
                "province": "浙江",
                "value": 1172
            },
            {
                "province": "湖南",
                "value": 1007
            },
            {
                "province": "河南",
                "value": 1257
            },
            {
                "province": "安徽",
                "value": 982
            },
            {
                "province": "重庆",
                "value": 553
            },
            {
                "province": "山东",
                "value": 543
            },
            {
                "province": "江西",
                "value": 933
            },
            {
                "province": "四川",
                "value": 508
            },
            {
                "province": "江苏",
                "value": 629
            },
            {
                "province": "北京",
                "value": 387
            },
            {
                "province": "福建",
                "value": 292
            },
            {
                "province": "上海",
                "value": 333
            },
            {
                "province": "广西",
                "value": 242
            },
            {
                "province": "河北",
                "value": 302
            },
            {
                "province": "陕西",
                "value": 240
            },
            {
                "province": "云南",
                "value": 172
            },
            {
                "province": "海南",
                "value": 163
            },
            {
                "province": "黑龙江",
                "value": 464
            },
            {
                "province": "辽宁",
                "value": 121
            },
            {
                "province": "山西",
                "value": 130
            },
            {
                "province": "天津",
                "value": 125
            },
            {
                "province": "甘肃",
                "value": 91
            },
            {
                "province": "内蒙古",
                "value": 73
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 70
            },
            {
                "province": "吉林",
                "value": 89
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 60
            },
            {
                "province": "台湾",
                "value": 22
            }
        ]
    },
    {
        "date": "2月18日",
        "news": "全国新增治愈出院首次超过新增确诊",
        "data": [
            {
                "province": "湖北",
                "value": 61682
            },
            {
                "province": "广东",
                "value": 1331
            },
            {
                "province": "浙江",
                "value": 1173
            },
            {
                "province": "湖南",
                "value": 1008
            },
            {
                "province": "河南",
                "value": 1261
            },
            {
                "province": "安徽",
                "value": 986
            },
            {
                "province": "重庆",
                "value": 555
            },
            {
                "province": "山东",
                "value": 544
            },
            {
                "province": "江西",
                "value": 933
            },
            {
                "province": "四川",
                "value": 514
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 393
            },
            {
                "province": "福建",
                "value": 293
            },
            {
                "province": "上海",
                "value": 333
            },
            {
                "province": "广西",
                "value": 244
            },
            {
                "province": "河北",
                "value": 306
            },
            {
                "province": "陕西",
                "value": 240
            },
            {
                "province": "云南",
                "value": 172
            },
            {
                "province": "海南",
                "value": 163
            },
            {
                "province": "黑龙江",
                "value": 470
            },
            {
                "province": "辽宁",
                "value": 121
            },
            {
                "province": "山西",
                "value": 131
            },
            {
                "province": "天津",
                "value": 128
            },
            {
                "province": "甘肃",
                "value": 91
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 71
            },
            {
                "province": "吉林",
                "value": 90
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 62
            },
            {
                "province": "台湾",
                "value": 22
            }
        ]
    },
    {
        "date": "2月19日",
        "news": "中央指导组批湖北指挥系统：非战时节奏",
        "data": [
            {
                "province": "湖北",
                "value": 62457
            },
            {
                "province": "广东",
                "value": 1332
            },
            {
                "province": "浙江",
                "value": 1175
            },
            {
                "province": "湖南",
                "value": 1010
            },
            {
                "province": "河南",
                "value": 1265
            },
            {
                "province": "安徽",
                "value": 987
            },
            {
                "province": "重庆",
                "value": 560
            },
            {
                "province": "山东",
                "value": 546
            },
            {
                "province": "江西",
                "value": 934
            },
            {
                "province": "四川",
                "value": 520
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 395
            },
            {
                "province": "福建",
                "value": 293
            },
            {
                "province": "上海",
                "value": 333
            },
            {
                "province": "广西",
                "value": 245
            },
            {
                "province": "河北",
                "value": 307
            },
            {
                "province": "陕西",
                "value": 242
            },
            {
                "province": "云南",
                "value": 172
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 476
            },
            {
                "province": "辽宁",
                "value": 121
            },
            {
                "province": "山西",
                "value": 131
            },
            {
                "province": "天津",
                "value": 130
            },
            {
                "province": "甘肃",
                "value": 91
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 71
            },
            {
                "province": "吉林",
                "value": 91
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 65
            },
            {
                "province": "台湾",
                "value": 24
            }
        ]
    },
    {
        "date": "2月20日",
        "news": "湖北：新冠肺炎统计不允许核减已确诊病例",
        "data": [
            {
                "province": "湖北",
                "value": 63088
            },
            {
                "province": "广东",
                "value": 1333
            },
            {
                "province": "浙江",
                "value": 1215
            },
            {
                "province": "湖南",
                "value": 1011
            },
            {
                "province": "河南",
                "value": 1267
            },
            {
                "province": "安徽",
                "value": 988
            },
            {
                "province": "重庆",
                "value": 567
            },
            {
                "province": "山东",
                "value": 748
            },
            {
                "province": "江西",
                "value": 934
            },
            {
                "province": "四川",
                "value": 525
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 396
            },
            {
                "province": "福建",
                "value": 293
            },
            {
                "province": "上海",
                "value": 334
            },
            {
                "province": "广西",
                "value": 246
            },
            {
                "province": "河北",
                "value": 308
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 479
            },
            {
                "province": "辽宁",
                "value": 121
            },
            {
                "province": "山西",
                "value": 132
            },
            {
                "province": "天津",
                "value": 131
            },
            {
                "province": "甘肃",
                "value": 91
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 71
            },
            {
                "province": "吉林",
                "value": 91
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 68
            },
            {
                "province": "台湾",
                "value": 24
            }
        ]
    },
    {
        "date": "2月21日",
        "news": "全国累计治愈出院病例超2万例；武汉核酸检测存量清零",
        "data": [
            {
                "province": "湖北",
                "value": 63454
            },
            {
                "province": "广东",
                "value": 1339
            },
            {
                "province": "浙江",
                "value": 1217
            },
            {
                "province": "湖南",
                "value": 1013
            },
            {
                "province": "河南",
                "value": 1270
            },
            {
                "province": "安徽",
                "value": 989
            },
            {
                "province": "重庆",
                "value": 572
            },
            {
                "province": "山东",
                "value": 750
            },
            {
                "province": "江西",
                "value": 934
            },
            {
                "province": "四川",
                "value": 526
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 399
            },
            {
                "province": "福建",
                "value": 293
            },
            {
                "province": "上海",
                "value": 334
            },
            {
                "province": "广西",
                "value": 249
            },
            {
                "province": "河北",
                "value": 309
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 479
            },
            {
                "province": "辽宁",
                "value": 121
            },
            {
                "province": "山西",
                "value": 132
            },
            {
                "province": "天津",
                "value": 133
            },
            {
                "province": "甘肃",
                "value": 91
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 71
            },
            {
                "province": "吉林",
                "value": 91
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 68
            },
            {
                "province": "台湾",
                "value": 26
            }
        ]
    },
    {
        "date": "2月22日",
        "news": "全国21个省份零新增",
        "data": [
            {
                "province": "湖北",
                "value": 63889
            },
            {
                "province": "广东",
                "value": 1342
            },
            {
                "province": "浙江",
                "value": 1217
            },
            {
                "province": "湖南",
                "value": 1016
            },
            {
                "province": "河南",
                "value": 1271
            },
            {
                "province": "安徽",
                "value": 989
            },
            {
                "province": "重庆",
                "value": 573
            },
            {
                "province": "山东",
                "value": 754
            },
            {
                "province": "江西",
                "value": 934
            },
            {
                "province": "四川",
                "value": 526
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 399
            },
            {
                "province": "福建",
                "value": 293
            },
            {
                "province": "上海",
                "value": 335
            },
            {
                "province": "广西",
                "value": 249
            },
            {
                "province": "河北",
                "value": 311
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 480
            },
            {
                "province": "辽宁",
                "value": 121
            },
            {
                "province": "山西",
                "value": 132
            },
            {
                "province": "天津",
                "value": 135
            },
            {
                "province": "甘肃",
                "value": 91
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 71
            },
            {
                "province": "吉林",
                "value": 91
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 69
            },
            {
                "province": "台湾",
                "value": 26
            }
        ]
    },
    {
        "date": "2月23日",
        "news": "武汉24小时封闭管理将持续一段时间；全国多地下调疫情应急响应等级",
        "data": [
            {
                "province": "湖北",
                "value": 64287
            },
            {
                "province": "广东",
                "value": 1345
            },
            {
                "province": "浙江",
                "value": 1217
            },
            {
                "province": "湖南",
                "value": 1016
            },
            {
                "province": "河南",
                "value": 1271
            },
            {
                "province": "安徽",
                "value": 989
            },
            {
                "province": "重庆",
                "value": 575
            },
            {
                "province": "山东",
                "value": 755
            },
            {
                "province": "江西",
                "value": 934
            },
            {
                "province": "四川",
                "value": 527
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 399
            },
            {
                "province": "福建",
                "value": 293
            },
            {
                "province": "上海",
                "value": 335
            },
            {
                "province": "广西",
                "value": 251
            },
            {
                "province": "河北",
                "value": 311
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 480
            },
            {
                "province": "辽宁",
                "value": 121
            },
            {
                "province": "山西",
                "value": 132
            },
            {
                "province": "天津",
                "value": 135
            },
            {
                "province": "甘肃",
                "value": 91
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 71
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 74
            },
            {
                "province": "台湾",
                "value": 28
            }
        ]
    },
    {
        "date": "2月24日",
        "news": "湖北以外地区新增确诊病例首次降至个位数",
        "data": [
            {
                "province": "湖北",
                "value": 64786
            },
            {
                "province": "广东",
                "value": 1347
            },
            {
                "province": "浙江",
                "value": 1217
            },
            {
                "province": "湖南",
                "value": 1016
            },
            {
                "province": "河南",
                "value": 1271
            },
            {
                "province": "安徽",
                "value": 989
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 755
            },
            {
                "province": "江西",
                "value": 934
            },
            {
                "province": "四川",
                "value": 529
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 400
            },
            {
                "province": "福建",
                "value": 294
            },
            {
                "province": "上海",
                "value": 335
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 311
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 480
            },
            {
                "province": "辽宁",
                "value": 121
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 135
            },
            {
                "province": "甘肃",
                "value": 91
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 71
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 81
            },
            {
                "province": "台湾",
                "value": 30
            }
        ]
    },
    {
        "date": "2月25日",
        "news": "武汉公布最早患者：去年12月发病",
        "data": [
            {
                "province": "湖北",
                "value": 65187
            },
            {
                "province": "广东",
                "value": 1347
            },
            {
                "province": "浙江",
                "value": 1217
            },
            {
                "province": "湖南",
                "value": 1016
            },
            {
                "province": "河南",
                "value": 1271
            },
            {
                "province": "安徽",
                "value": 989
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 756
            },
            {
                "province": "江西",
                "value": 934
            },
            {
                "province": "四川",
                "value": 531
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 400
            },
            {
                "province": "福建",
                "value": 294
            },
            {
                "province": "上海",
                "value": 336
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 312
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 480
            },
            {
                "province": "辽宁",
                "value": 121
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 135
            },
            {
                "province": "甘肃",
                "value": 91
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 71
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 85
            },
            {
                "province": "台湾",
                "value": 31
            }
        ]
    },
    {
        "date": "2月26日",
        "news": "钟南山：我们有信心，新冠疫情4月底基本控制",
        "data": [
            {
                "province": "湖北",
                "value": 65596
            },
            {
                "province": "广东",
                "value": 1347
            },
            {
                "province": "浙江",
                "value": 1217
            },
            {
                "province": "湖南",
                "value": 1017
            },
            {
                "province": "河南",
                "value": 1272
            },
            {
                "province": "安徽",
                "value": 989
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 756
            },
            {
                "province": "江西",
                "value": 934
            },
            {
                "province": "四川",
                "value": 534
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 410
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 337
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 317
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 480
            },
            {
                "province": "辽宁",
                "value": 121
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 135
            },
            {
                "province": "甘肃",
                "value": 91
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 72
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 91
            },
            {
                "province": "台湾",
                "value": 32
            }
        ]
    },
    {
        "date": "2月27日",
        "news": "香港渔护署检测发现狗对新冠肺炎测试呈弱阳性反应",
        "data": [
            {
                "province": "湖北",
                "value": 65914
            },
            {
                "province": "广东",
                "value": 1348
            },
            {
                "province": "浙江",
                "value": 1217
            },
            {
                "province": "湖南",
                "value": 1017
            },
            {
                "province": "河南",
                "value": 1272
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 756
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 538
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 410
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 337
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 480
            },
            {
                "province": "辽宁",
                "value": 121
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 91
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 72
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 93
            },
            {
                "province": "台湾",
                "value": 32
            }
        ]
    },
    {
        "date": "2月28日",
        "news": "世卫组织：疫情全球风险级别由高上调为非常高",
        "data": [
            {
                "province": "湖北",
                "value": 66337
            },
            {
                "province": "广东",
                "value": 1349
            },
            {
                "province": "浙江",
                "value": 1217
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1272
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 756
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 538
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 411
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 337
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 480
            },
            {
                "province": "辽宁",
                "value": 121
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 91
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 73
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 94
            },
            {
                "province": "台湾",
                "value": 34
            }
        ]
    },
    {
        "date": "2月29日",
        "news": "全国现有疑似病例不足千人",
        "data": [
            {
                "province": "湖北",
                "value": 66907
            },
            {
                "province": "广东",
                "value": 1349
            },
            {
                "province": "浙江",
                "value": 1217
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1272
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 756
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 538
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 413
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 337
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 480
            },
            {
                "province": "辽宁",
                "value": 122
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 91
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 73
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 95
            },
            {
                "province": "台湾",
                "value": 39
            }
        ]
    },
    {
        "date": "3月01日",
        "news": "全球累计确诊87137例，意大利单日猛增50％",
        "data": [
            {
                "province": "湖北",
                "value": 67103
            },
            {
                "province": "广东",
                "value": 1350
            },
            {
                "province": "浙江",
                "value": 1218
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1272
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 758
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 538
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 414
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 337
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 480
            },
            {
                "province": "辽宁",
                "value": 122
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 91
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 74
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 98
            },
            {
                "province": "台湾",
                "value": 40
            }
        ]
    },
    {
        "date": "3月02日",
        "news": "中国境外共64个国家确诊新冠肺炎8774例；外媒：伊朗23名国会议员确诊感染新冠病毒",
        "data": [
            {
                "province": "湖北",
                "value": 67217
            },
            {
                "province": "广东",
                "value": 1350
            },
            {
                "province": "浙江",
                "value": 1225
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1272
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 758
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 538
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 414
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 338
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 480
            },
            {
                "province": "辽宁",
                "value": 125
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 91
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 74
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 100
            },
            {
                "province": "台湾",
                "value": 41
            }
        ]
    },
    {
        "date": "3月03日",
        "news": "外媒：伊朗23名国会议员确诊感染新冠病毒",
        "data": [
            {
                "province": "湖北",
                "value": 67332
            },
            {
                "province": "广东",
                "value": 1350
            },
            {
                "province": "浙江",
                "value": 1225
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1272
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 758
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 538
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 417
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 338
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 480
            },
            {
                "province": "辽宁",
                "value": 125
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 91
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 100
            },
            {
                "province": "台湾",
                "value": 42
            }
        ]
    },
    {
        "date": "3月04日",
        "news": "李文亮医生等被追授全国防疫先进个人称号",
        "data": [
            {
                "province": "湖北",
                "value": 67466
            },
            {
                "province": "广东",
                "value": 1350
            },
            {
                "province": "浙江",
                "value": 1227
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1272
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 758
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 539
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 418
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 338
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 481
            },
            {
                "province": "辽宁",
                "value": 125
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 91
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 104
            },
            {
                "province": "台湾",
                "value": 42
            }
        ]
    },
    {
        "date": "3月05日",
        "news": "全球疫情蔓延：韩国确诊数超6000 美国3州进入紧急状态",
        "data": [
            {
                "province": "湖北",
                "value": 67592
            },
            {
                "province": "广东",
                "value": 1351
            },
            {
                "province": "浙江",
                "value": 1227
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1272
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 758
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 539
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 422
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 339
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 481
            },
            {
                "province": "辽宁",
                "value": 125
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 102
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 104
            },
            {
                "province": "台湾",
                "value": 44
            }
        ]
    },
    {
        "date": "3月06日",
        "news": "全球新冠肺炎确诊病例突破10万；钟南山公布新检测方法 可区分新冠肺炎和流感",
        "data": [
            {
                "province": "湖北",
                "value": 67666
            },
            {
                "province": "广东",
                "value": 1352
            },
            {
                "province": "浙江",
                "value": 1227
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1272
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 758
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 539
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 426
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 342
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 481
            },
            {
                "province": "辽宁",
                "value": 125
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 119
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 107
            },
            {
                "province": "台湾",
                "value": 45
            }
        ]
    },
    {
        "date": "3月07日",
        "news": "全球新冠肺炎病例超10万 世卫组织呼吁各国采取强有力遏制措施",
        "data": [
            {
                "province": "湖北",
                "value": 67707
            },
            {
                "province": "广东",
                "value": 1352
            },
            {
                "province": "浙江",
                "value": 1227
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1272
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 758
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 539
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 428
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 342
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 481
            },
            {
                "province": "辽宁",
                "value": 125
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 120
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 109
            },
            {
                "province": "台湾",
                "value": 45
            }
        ]
    },
    {
        "date": "3月08日",
        "news": "全国已有5省份及澳门确诊病例清零；意大利死亡病例数暴增57％，死亡率升至全球最高",
        "data": [
            {
                "province": "湖北",
                "value": 67743
            },
            {
                "province": "广东",
                "value": 1352
            },
            {
                "province": "浙江",
                "value": 1227
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1272
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 758
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 539
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 428
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 342
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 481
            },
            {
                "province": "辽宁",
                "value": 125
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 124
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 114
            },
            {
                "province": "台湾",
                "value": 45
            }
        ]
    },
    {
        "date": "3月09日",
        "news": "武汉15家方舱医院全部休舱",
        "data": [
            {
                "province": "湖北",
                "value": 67760
            },
            {
                "province": "广东",
                "value": 1353
            },
            {
                "province": "浙江",
                "value": 1227
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1272
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 758
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 539
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 429
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 342
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 481
            },
            {
                "province": "辽宁",
                "value": 125
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 124
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 115
            },
            {
                "province": "台湾",
                "value": 45
            }
        ]
    },
    {
        "date": "3月10日",
        "news": "湖北潜江：取消第26号通告，继续严格管控人员全省通行；美国新冠肺炎确诊病例超1000例",
        "data": [
            {
                "province": "湖北",
                "value": 67773
            },
            {
                "province": "广东",
                "value": 1353
            },
            {
                "province": "浙江",
                "value": 1227
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1272
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 759
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 539
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 435
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 344
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 482
            },
            {
                "province": "辽宁",
                "value": 125
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 125
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 120
            },
            {
                "province": "台湾",
                "value": 47
            }
        ]
    },
    {
        "date": "3月11日",
        "news": "隔离酒店坍塌事故搜救完成，共29人遇难",
        "data": [
            {
                "province": "湖北",
                "value": 67781
            },
            {
                "province": "广东",
                "value": 1356
            },
            {
                "province": "浙江",
                "value": 1227
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1273
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 760
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 539
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 435
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 344
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 482
            },
            {
                "province": "辽宁",
                "value": 125
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 127
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 129
            },
            {
                "province": "台湾",
                "value": 48
            }
        ]
    },
    {
        "date": "3月12日",
        "news": "新冠病毒是美军带到武汉？外交部表态",
        "data": [
            {
                "province": "湖北",
                "value": 67786
            },
            {
                "province": "广东",
                "value": 1356
            },
            {
                "province": "浙江",
                "value": 1227
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1273
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 760
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 539
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 436
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 346
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 482
            },
            {
                "province": "辽宁",
                "value": 125
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 127
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 131
            },
            {
                "province": "台湾",
                "value": 49
            }
        ]
    },
    {
        "date": "3月13日",
        "news": "美国累计确诊新冠肺炎病例已上升至1992例；境外输入病例首次超过本土新增确诊",
        "data": [
            {
                "province": "湖北",
                "value": 67790
            },
            {
                "province": "广东",
                "value": 1356
            },
            {
                "province": "浙江",
                "value": 1227
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1273
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 760
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 539
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 437
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 350
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 482
            },
            {
                "province": "辽宁",
                "value": 125
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 129
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 137
            },
            {
                "province": "台湾",
                "value": 50
            }
        ]
    },
    {
        "date": "3月14日",
        "news": "首例境外输入病例被立案调查：从伊朗返回宁夏",
        "data": [
            {
                "province": "湖北",
                "value": 67794
            },
            {
                "province": "广东",
                "value": 1357
            },
            {
                "province": "浙江",
                "value": 1231
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1273
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 760
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 539
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 442
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 353
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 174
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 482
            },
            {
                "province": "辽宁",
                "value": 125
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 132
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 141
            },
            {
                "province": "台湾",
                "value": 53
            }
        ]
    },
    {
        "date": "3月15日",
        "news": "世卫组织：中国以外新冠肺炎确诊病例达72469例",
        "data": [
            {
                "province": "湖北",
                "value": 67798
            },
            {
                "province": "广东",
                "value": 1361
            },
            {
                "province": "浙江",
                "value": 1231
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1273
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 760
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 539
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 446
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 355
            },
            {
                "province": "广西",
                "value": 252
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 245
            },
            {
                "province": "云南",
                "value": 175
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 482
            },
            {
                "province": "辽宁",
                "value": 125
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 133
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 10
            },
            {
                "province": "香港",
                "value": 148
            },
            {
                "province": "台湾",
                "value": 59
            }
        ]
    },
    {
        "date": "3月16日",
        "news": "全球确诊近18万，死亡破7000；中央：组织援鄂医务人员分批撤离",
        "data": [
            {
                "province": "湖北",
                "value": 67799
            },
            {
                "province": "广东",
                "value": 1364
            },
            {
                "province": "浙江",
                "value": 1232
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1273
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 761
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 539
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 455
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 358
            },
            {
                "province": "广西",
                "value": 253
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 246
            },
            {
                "province": "云南",
                "value": 176
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 482
            },
            {
                "province": "辽宁",
                "value": 125
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 133
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 11
            },
            {
                "province": "香港",
                "value": 157
            },
            {
                "province": "台湾",
                "value": 67
            }
        ]
    },
    {
        "date": "3月17日",
        "news": "武汉现有疑似病例清零！",
        "data": [
            {
                "province": "湖北",
                "value": 67800
            },
            {
                "province": "广东",
                "value": 1369
            },
            {
                "province": "浙江",
                "value": 1232
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1273
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 761
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 540
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 458
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 361
            },
            {
                "province": "广西",
                "value": 253
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 246
            },
            {
                "province": "云南",
                "value": 176
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 482
            },
            {
                "province": "辽宁",
                "value": 125
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 133
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 13
            },
            {
                "province": "香港",
                "value": 167
            },
            {
                "province": "台湾",
                "value": 77
            }
        ]
    },
    {
        "date": "3月18日",
        "news": "全球新冠肺炎病例已超20万例",
        "data": [
            {
                "province": "湖北",
                "value": 67800
            },
            {
                "province": "广东",
                "value": 1378
            },
            {
                "province": "浙江",
                "value": 1233
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1273
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 761
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 540
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 479
            },
            {
                "province": "福建",
                "value": 296
            },
            {
                "province": "上海",
                "value": 363
            },
            {
                "province": "广西",
                "value": 253
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 246
            },
            {
                "province": "云南",
                "value": 176
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 483
            },
            {
                "province": "辽宁",
                "value": 125
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 136
            },
            {
                "province": "甘肃",
                "value": 133
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 15
            },
            {
                "province": "香港",
                "value": 192
            },
            {
                "province": "台湾",
                "value": 100
            }
        ]
    },
    {
        "date": "3月19日",
        "news": "全球累计新冠肺炎病例超过24万例",
        "data": [
            {
                "province": "湖北",
                "value": 67800
            },
            {
                "province": "广东",
                "value": 1392
            },
            {
                "province": "浙江",
                "value": 1234
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1273
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 762
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 541
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 485
            },
            {
                "province": "福建",
                "value": 299
            },
            {
                "province": "上海",
                "value": 371
            },
            {
                "province": "广西",
                "value": 254
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 247
            },
            {
                "province": "云南",
                "value": 176
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 484
            },
            {
                "province": "辽宁",
                "value": 126
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 137
            },
            {
                "province": "甘肃",
                "value": 134
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 17
            },
            {
                "province": "香港",
                "value": 208
            },
            {
                "province": "台湾",
                "value": 108
            }
        ]
    },
    {
        "date": "3月20日",
        "news": "3月20日全国新增确诊41例，均为境外输入",
        "data": [
            {
                "province": "湖北",
                "value": 67800
            },
            {
                "province": "广东",
                "value": 1399
            },
            {
                "province": "浙江",
                "value": 1236
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1273
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 764
            },
            {
                "province": "江西",
                "value": 935
            },
            {
                "province": "四川",
                "value": 542
            },
            {
                "province": "江苏",
                "value": 631
            },
            {
                "province": "北京",
                "value": 499
            },
            {
                "province": "福建",
                "value": 303
            },
            {
                "province": "上海",
                "value": 380
            },
            {
                "province": "广西",
                "value": 254
            },
            {
                "province": "河北",
                "value": 318
            },
            {
                "province": "陕西",
                "value": 248
            },
            {
                "province": "云南",
                "value": 176
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 484
            },
            {
                "province": "辽宁",
                "value": 126
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 137
            },
            {
                "province": "甘肃",
                "value": 134
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 17
            },
            {
                "province": "香港",
                "value": 256
            },
            {
                "province": "台湾",
                "value": 135
            }
        ]
    },
    {
        "date": "3月21日",
        "news": "全球确诊病例超30万 特朗普宣布纽约州出现重大灾难",
        "data": [
            {
                "province": "湖北",
                "value": 67800
            },
            {
                "province": "广东",
                "value": 1407
            },
            {
                "province": "浙江",
                "value": 1237
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1273
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 576
            },
            {
                "province": "山东",
                "value": 765
            },
            {
                "province": "江西",
                "value": 936
            },
            {
                "province": "四川",
                "value": 543
            },
            {
                "province": "江苏",
                "value": 633
            },
            {
                "province": "北京",
                "value": 512
            },
            {
                "province": "福建",
                "value": 307
            },
            {
                "province": "上海",
                "value": 394
            },
            {
                "province": "广西",
                "value": 254
            },
            {
                "province": "河北",
                "value": 319
            },
            {
                "province": "陕西",
                "value": 248
            },
            {
                "province": "云南",
                "value": 176
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 484
            },
            {
                "province": "辽宁",
                "value": 126
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 137
            },
            {
                "province": "甘肃",
                "value": 134
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 18
            },
            {
                "province": "香港",
                "value": 273
            },
            {
                "province": "台湾",
                "value": 153
            }
        ]
    },
    {
        "date": "3月22日",
        "news": "外国人不如实填报信息，不准入境",
        "data": [
            {
                "province": "湖北",
                "value": 67800
            },
            {
                "province": "广东",
                "value": 1413
            },
            {
                "province": "浙江",
                "value": 1238
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1274
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 577
            },
            {
                "province": "山东",
                "value": 767
            },
            {
                "province": "江西",
                "value": 936
            },
            {
                "province": "四川",
                "value": 543
            },
            {
                "province": "江苏",
                "value": 633
            },
            {
                "province": "北京",
                "value": 522
            },
            {
                "province": "福建",
                "value": 313
            },
            {
                "province": "上海",
                "value": 404
            },
            {
                "province": "广西",
                "value": 254
            },
            {
                "province": "河北",
                "value": 319
            },
            {
                "province": "陕西",
                "value": 248
            },
            {
                "province": "云南",
                "value": 176
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 484
            },
            {
                "province": "辽宁",
                "value": 127
            },
            {
                "province": "山西",
                "value": 133
            },
            {
                "province": "天津",
                "value": 137
            },
            {
                "province": "甘肃",
                "value": 136
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 21
            },
            {
                "province": "香港",
                "value": 317
            },
            {
                "province": "台湾",
                "value": 169
            }
        ]
    },
    {
        "date": "3月23日",
        "news": "两高：妨害国境卫生检疫罪犯罪主体含外国人和无国籍人员",
        "data": [
            {
                "province": "湖北",
                "value": 67801
            },
            {
                "province": "广东",
                "value": 1428
            },
            {
                "province": "浙江",
                "value": 1240
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1274
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 578
            },
            {
                "province": "山东",
                "value": 768
            },
            {
                "province": "江西",
                "value": 936
            },
            {
                "province": "四川",
                "value": 545
            },
            {
                "province": "江苏",
                "value": 636
            },
            {
                "province": "北京",
                "value": 554
            },
            {
                "province": "福建",
                "value": 318
            },
            {
                "province": "上海",
                "value": 414
            },
            {
                "province": "广西",
                "value": 254
            },
            {
                "province": "河北",
                "value": 319
            },
            {
                "province": "陕西",
                "value": 249
            },
            {
                "province": "云南",
                "value": 176
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 484
            },
            {
                "province": "辽宁",
                "value": 127
            },
            {
                "province": "山西",
                "value": 134
            },
            {
                "province": "天津",
                "value": 141
            },
            {
                "province": "甘肃",
                "value": 136
            },
            {
                "province": "内蒙古",
                "value": 75
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 93
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 25
            },
            {
                "province": "香港",
                "value": 356
            },
            {
                "province": "台湾",
                "value": 195
            }
        ]
    },
    {
        "date": "3月24日",
        "news": "湖北除武汉机场外航班将尽快恢复",
        "data": [
            {
                "province": "湖北",
                "value": 67801
            },
            {
                "province": "广东",
                "value": 1433
            },
            {
                "province": "浙江",
                "value": 1241
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1274
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 578
            },
            {
                "province": "山东",
                "value": 769
            },
            {
                "province": "江西",
                "value": 936
            },
            {
                "province": "四川",
                "value": 547
            },
            {
                "province": "江苏",
                "value": 638
            },
            {
                "province": "北京",
                "value": 559
            },
            {
                "province": "福建",
                "value": 322
            },
            {
                "province": "上海",
                "value": 433
            },
            {
                "province": "广西",
                "value": 254
            },
            {
                "province": "河北",
                "value": 319
            },
            {
                "province": "陕西",
                "value": 250
            },
            {
                "province": "云南",
                "value": 176
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 484
            },
            {
                "province": "辽宁",
                "value": 127
            },
            {
                "province": "山西",
                "value": 134
            },
            {
                "province": "天津",
                "value": 145
            },
            {
                "province": "甘肃",
                "value": 136
            },
            {
                "province": "内蒙古",
                "value": 77
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 94
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 26
            },
            {
                "province": "香港",
                "value": 386
            },
            {
                "province": "台湾",
                "value": 216
            }
        ]
    },
    {
        "date": "3月25日",
        "news": "外交部：中国已对83个国家提供紧急援助",
        "data": [
            {
                "province": "湖北",
                "value": 67801
            },
            {
                "province": "广东",
                "value": 1444
            },
            {
                "province": "浙江",
                "value": 1243
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1275
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 578
            },
            {
                "province": "山东",
                "value": 769
            },
            {
                "province": "江西",
                "value": 936
            },
            {
                "province": "四川",
                "value": 547
            },
            {
                "province": "江苏",
                "value": 640
            },
            {
                "province": "北京",
                "value": 565
            },
            {
                "province": "福建",
                "value": 328
            },
            {
                "province": "上海",
                "value": 451
            },
            {
                "province": "广西",
                "value": 254
            },
            {
                "province": "河北",
                "value": 319
            },
            {
                "province": "陕西",
                "value": 253
            },
            {
                "province": "云南",
                "value": 178
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 484
            },
            {
                "province": "辽宁",
                "value": 127
            },
            {
                "province": "山西",
                "value": 135
            },
            {
                "province": "天津",
                "value": 147
            },
            {
                "province": "甘肃",
                "value": 136
            },
            {
                "province": "内蒙古",
                "value": 89
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 95
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 30
            },
            {
                "province": "香港",
                "value": 410
            },
            {
                "province": "台湾",
                "value": 235
            }
        ]
    },
    {
        "date": "3月26日",
        "news": "全球新冠肺炎确诊超52万 美国已成确诊人数最多国家",
        "data": [
            {
                "province": "湖北",
                "value": 67801
            },
            {
                "province": "广东",
                "value": 1456
            },
            {
                "province": "浙江",
                "value": 1247
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1275
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 578
            },
            {
                "province": "山东",
                "value": 771
            },
            {
                "province": "江西",
                "value": 936
            },
            {
                "province": "四川",
                "value": 548
            },
            {
                "province": "江苏",
                "value": 641
            },
            {
                "province": "北京",
                "value": 569
            },
            {
                "province": "福建",
                "value": 331
            },
            {
                "province": "上海",
                "value": 468
            },
            {
                "province": "广西",
                "value": 254
            },
            {
                "province": "河北",
                "value": 319
            },
            {
                "province": "陕西",
                "value": 253
            },
            {
                "province": "云南",
                "value": 180
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 484
            },
            {
                "province": "辽宁",
                "value": 128
            },
            {
                "province": "山西",
                "value": 135
            },
            {
                "province": "天津",
                "value": 152
            },
            {
                "province": "甘肃",
                "value": 136
            },
            {
                "province": "内蒙古",
                "value": 92
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 95
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 33
            },
            {
                "province": "香港",
                "value": 453
            },
            {
                "province": "台湾",
                "value": 252
            }
        ]
    },
    {
        "date": "3月27日",
        "news": "3月29日起，国际航班将有大调整",
        "data": [
            {
                "province": "湖北",
                "value": 67801
            },
            {
                "province": "广东",
                "value": 1467
            },
            {
                "province": "浙江",
                "value": 1251
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1275
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 578
            },
            {
                "province": "山东",
                "value": 772
            },
            {
                "province": "江西",
                "value": 936
            },
            {
                "province": "四川",
                "value": 548
            },
            {
                "province": "江苏",
                "value": 641
            },
            {
                "province": "北京",
                "value": 572
            },
            {
                "province": "福建",
                "value": 337
            },
            {
                "province": "上海",
                "value": 485
            },
            {
                "province": "广西",
                "value": 254
            },
            {
                "province": "河北",
                "value": 319
            },
            {
                "province": "陕西",
                "value": 253
            },
            {
                "province": "云南",
                "value": 180
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 484
            },
            {
                "province": "辽宁",
                "value": 131
            },
            {
                "province": "山西",
                "value": 135
            },
            {
                "province": "天津",
                "value": 156
            },
            {
                "province": "甘肃",
                "value": 136
            },
            {
                "province": "内蒙古",
                "value": 94
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 97
            },
            {
                "province": "贵州",
                "value": 146
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 34
            },
            {
                "province": "香港",
                "value": 518
            },
            {
                "province": "台湾",
                "value": 267
            }
        ]
    },
    {
        "date": "3月28日",
        "news": "河南郏县发现两例新冠肺炎阳性检测者",
        "data": [
            {
                "province": "湖北",
                "value": 67801
            },
            {
                "province": "广东",
                "value": 1475
            },
            {
                "province": "浙江",
                "value": 1254
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1276
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 579
            },
            {
                "province": "山东",
                "value": 772
            },
            {
                "province": "江西",
                "value": 937
            },
            {
                "province": "四川",
                "value": 550
            },
            {
                "province": "江苏",
                "value": 644
            },
            {
                "province": "北京",
                "value": 576
            },
            {
                "province": "福建",
                "value": 338
            },
            {
                "province": "上海",
                "value": 492
            },
            {
                "province": "广西",
                "value": 254
            },
            {
                "province": "河北",
                "value": 319
            },
            {
                "province": "陕西",
                "value": 253
            },
            {
                "province": "云南",
                "value": 180
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 484
            },
            {
                "province": "辽宁",
                "value": 134
            },
            {
                "province": "山西",
                "value": 136
            },
            {
                "province": "天津",
                "value": 163
            },
            {
                "province": "甘肃",
                "value": 136
            },
            {
                "province": "内蒙古",
                "value": 95
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 98
            },
            {
                "province": "贵州",
                "value": 147
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 37
            },
            {
                "province": "香港",
                "value": 582
            },
            {
                "province": "台湾",
                "value": 283
            }
        ]
    },
    {
        "date": "3月29日",
        "news": "中央：突出做好无症状感染者防控；全球累计确诊超70万例 累计死亡超3万例",
        "data": [
            {
                "province": "湖北",
                "value": 67801
            },
            {
                "province": "广东",
                "value": 1484
            },
            {
                "province": "浙江",
                "value": 1255
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1276
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 579
            },
            {
                "province": "山东",
                "value": 773
            },
            {
                "province": "江西",
                "value": 937
            },
            {
                "province": "四川",
                "value": 550
            },
            {
                "province": "江苏",
                "value": 645
            },
            {
                "province": "北京",
                "value": 577
            },
            {
                "province": "福建",
                "value": 340
            },
            {
                "province": "上海",
                "value": 498
            },
            {
                "province": "广西",
                "value": 254
            },
            {
                "province": "河北",
                "value": 321
            },
            {
                "province": "陕西",
                "value": 253
            },
            {
                "province": "云南",
                "value": 180
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 484
            },
            {
                "province": "辽宁",
                "value": 136
            },
            {
                "province": "山西",
                "value": 136
            },
            {
                "province": "天津",
                "value": 166
            },
            {
                "province": "甘肃",
                "value": 138
            },
            {
                "province": "内蒙古",
                "value": 97
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 98
            },
            {
                "province": "贵州",
                "value": 147
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 38
            },
            {
                "province": "香港",
                "value": 641
            },
            {
                "province": "台湾",
                "value": 298
            }
        ]
    },
    {
        "date": "3月30日",
        "news": "今年高考延期一个月举行，湖北、北京待定",
        "data": [
            {
                "province": "湖北",
                "value": 67801
            },
            {
                "province": "广东",
                "value": 1490
            },
            {
                "province": "浙江",
                "value": 1257
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1276
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 579
            },
            {
                "province": "山东",
                "value": 774
            },
            {
                "province": "江西",
                "value": 937
            },
            {
                "province": "四川",
                "value": 550
            },
            {
                "province": "江苏",
                "value": 646
            },
            {
                "province": "北京",
                "value": 580
            },
            {
                "province": "福建",
                "value": 343
            },
            {
                "province": "上海",
                "value": 509
            },
            {
                "province": "广西",
                "value": 254
            },
            {
                "province": "河北",
                "value": 321
            },
            {
                "province": "陕西",
                "value": 253
            },
            {
                "province": "云南",
                "value": 181
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 484
            },
            {
                "province": "辽宁",
                "value": 139
            },
            {
                "province": "山西",
                "value": 136
            },
            {
                "province": "天津",
                "value": 174
            },
            {
                "province": "甘肃",
                "value": 138
            },
            {
                "province": "内蒙古",
                "value": 107
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 98
            },
            {
                "province": "贵州",
                "value": 147
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 39
            },
            {
                "province": "香港",
                "value": 682
            },
            {
                "province": "台湾",
                "value": 306
            }
        ]
    },
    {
        "date": "3月31日",
        "news": "全球确诊超80万例，意大利全国降半旗",
        "data": [
            {
                "province": "湖北",
                "value": 67801
            },
            {
                "province": "广东",
                "value": 1490
            },
            {
                "province": "浙江",
                "value": 1257
            },
            {
                "province": "湖南",
                "value": 1018
            },
            {
                "province": "河南",
                "value": 1276
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 579
            },
            {
                "province": "山东",
                "value": 774
            },
            {
                "province": "江西",
                "value": 937
            },
            {
                "province": "四川",
                "value": 550
            },
            {
                "province": "江苏",
                "value": 646
            },
            {
                "province": "北京",
                "value": 580
            },
            {
                "province": "福建",
                "value": 343
            },
            {
                "province": "上海",
                "value": 509
            },
            {
                "province": "广西",
                "value": 254
            },
            {
                "province": "河北",
                "value": 321
            },
            {
                "province": "陕西",
                "value": 253
            },
            {
                "province": "云南",
                "value": 181
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 484
            },
            {
                "province": "辽宁",
                "value": 139
            },
            {
                "province": "山西",
                "value": 136
            },
            {
                "province": "天津",
                "value": 174
            },
            {
                "province": "甘肃",
                "value": 138
            },
            {
                "province": "内蒙古",
                "value": 107
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 98
            },
            {
                "province": "贵州",
                "value": 147
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 39
            },
            {
                "province": "香港",
                "value": 682
            },
            {
                "province": "台湾",
                "value": 306
            }
        ]
    },
    {
        "date": "4月01日",
        "news": "钟南山：全球疫情4月底出现拐点，国内不会有第二波疫情高峰；全球确诊超93万例 美国首超21万例确诊",
        "data": [
            {
                "province": "湖北",
                "value": 67802
            },
            {
                "province": "广东",
                "value": 1507
            },
            {
                "province": "浙江",
                "value": 1258
            },
            {
                "province": "湖南",
                "value": 1019
            },
            {
                "province": "河南",
                "value": 1276
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 579
            },
            {
                "province": "山东",
                "value": 775
            },
            {
                "province": "江西",
                "value": 937
            },
            {
                "province": "四川",
                "value": 554
            },
            {
                "province": "江苏",
                "value": 647
            },
            {
                "province": "北京",
                "value": 582
            },
            {
                "province": "福建",
                "value": 345
            },
            {
                "province": "上海",
                "value": 522
            },
            {
                "province": "广西",
                "value": 254
            },
            {
                "province": "河北",
                "value": 325
            },
            {
                "province": "陕西",
                "value": 255
            },
            {
                "province": "云南",
                "value": 183
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 488
            },
            {
                "province": "辽宁",
                "value": 140
            },
            {
                "province": "山西",
                "value": 137
            },
            {
                "province": "天津",
                "value": 176
            },
            {
                "province": "甘肃",
                "value": 138
            },
            {
                "province": "内蒙古",
                "value": 117
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 98
            },
            {
                "province": "贵州",
                "value": 147
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 41
            },
            {
                "province": "香港",
                "value": 765
            },
            {
                "province": "台湾",
                "value": 329
            }
        ]
    },
    {
        "date": "4月02日",
        "news": "钟南山:新冠肺炎的尸体解剖非常重要",
        "data": [
            {
                "province": "湖北",
                "value": 67802
            },
            {
                "province": "广东",
                "value": 1508
            },
            {
                "province": "浙江",
                "value": 1258
            },
            {
                "province": "湖南",
                "value": 1019
            },
            {
                "province": "河南",
                "value": 1276
            },
            {
                "province": "安徽",
                "value": 990
            },
            {
                "province": "重庆",
                "value": 579
            },
            {
                "province": "山东",
                "value": 775
            },
            {
                "province": "江西",
                "value": 937
            },
            {
                "province": "四川",
                "value": 554
            },
            {
                "province": "江苏",
                "value": 647
            },
            {
                "province": "北京",
                "value": 582
            },
            {
                "province": "福建",
                "value": 345
            },
            {
                "province": "上海",
                "value": 522
            },
            {
                "province": "广西",
                "value": 254
            },
            {
                "province": "河北",
                "value": 325
            },
            {
                "province": "陕西",
                "value": 255
            },
            {
                "province": "云南",
                "value": 183
            },
            {
                "province": "海南",
                "value": 168
            },
            {
                "province": "黑龙江",
                "value": 488
            },
            {
                "province": "辽宁",
                "value": 140
            },
            {
                "province": "山西",
                "value": 137
            },
            {
                "province": "天津",
                "value": 177
            },
            {
                "province": "甘肃",
                "value": 138
            },
            {
                "province": "内蒙古",
                "value": 117
            },
            {
                "province": "新疆",
                "value": 76
            },
            {
                "province": "宁夏",
                "value": 75
            },
            {
                "province": "吉林",
                "value": 98
            },
            {
                "province": "贵州",
                "value": 147
            },
            {
                "province": "青海",
                "value": 18
            },
            {
                "province": "西藏",
                "value": 1
            },
            {
                "province": "澳门",
                "value": 41
            },
            {
                "province": "香港",
                "value": 802
            },
            {
                "province": "台湾",
                "value": 339
            }
        ]
    }
];

export default dataList;
