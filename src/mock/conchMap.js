let legendData = [
    {name: "美国", Confirmed: 858401, Dead: 1296},
    {name: "意大利", Confirmed: 80589, Dead: 8215},
    {name: "西班牙", Confirmed: 57786, Dead: 4365},
    {name: "德国", Confirmed: 43938, Dead: 26},
    {name: "法国", Confirmed: 29566, Dead: 1698},
    {name: "伊朗", Confirmed: 29406, Dead: 2234},
    {name: "英国", Confirmed: 11812, Dead: 580},
    {name: "瑞士", Confirmed: 11811, Dead: 191},
    {name: "韩国", Confirmed: 9332, Dead: 139},
    {name: "荷兰", Confirmed: 7469, Dead: 435},
    {name: "奥地利", Confirmed: 6909, Dead: 49},
    {name: "比利时", Confirmed: 6235, Dead: 220},
    {name: "加拿大", Confirmed: 4046, Dead: 39},
    {name: "土耳其", Confirmed: 3629, Dead: 75},
    {name: "葡萄牙", Confirmed: 3544, Dead: 60},
    {name: "挪威", Confirmed: 3372, Dead: 14},
    {name: "澳大利亚", Confirmed: 2991, Dead: 13},
    {name: "巴西", Confirmed: 2985, Dead: 77},
    {name: "瑞典", Confirmed: 2840, Dead: 77},
    {name: "以色列", Confirmed: 2693, Dead: 8}
];

// 图形数据
let sourceData = [
    // Country：国家 Confirmed：确诊人数 SQRT：从中心向外的远近距离 Dead：死亡人数
    ["Country", "Confirmed", "SQRT", "Dead"],
    ["美国", 8584012, 292.9846412, 1296],
    ["意大利", 80589, 283.8820177, 8215],
    ["西班牙", 57786, 240.3871877, 4365],
    ["德国", 43938, 209.6139308, 267],
    ["法国", 29566, 171.9476665, 1698],
    ["伊朗", 29406, 171.4817775, 2234],
    ["英国", 11812, 108.6830254, 580],
    ["瑞士", 11811, 108.6784247, 191],
    ["韩国", 9332, 96.60227741, 139],
    ["荷兰", 7469, 86.42337647, 435],
    ["奥地利", 6909, 83.12039461, 49],
    ["比利时", 6235, 78.96201618, 220],
    ["加拿大", 4046, 63.60817558, 39],
    ["土耳其", 3629, 60.24118193, 75],
    ["葡萄牙", 3544, 59.53150426, 60],
    ["挪威", 3372, 58.06892456, 14],
    ["澳大利亚", 2991, 54.69003566, 13],
    ["巴西", 2985, 54.63515352, 77],
    ["瑞典", 2840, 53.29165038, 77]
];

export default {
    sourceData,
    legendData
};
