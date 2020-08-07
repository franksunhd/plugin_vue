<template>
    <div>
        <el-cascader
            v-model="value"
            :options="jsonList"
            :props="defaultProps"
            @change="handleChange"/>
        <div class="marginBottom20">第二个案例</div>
        <div class="marginBottom20">
            <div class="marginBottom20" v-for="(item,index) in demoList" :key="index">
                <div class="marginBottom20">{{index+1}}</div>
                <el-cascader
                    v-model="item.value"
                    :options="item.dataList"
                    :props="props"
                    @change="changeNode(item,index)"/>
            </div>
        </div>
    </div>
</template>

<script>
    import dataList from "./mock";

    export default {
        name: "toJson",
        data() {
            return {
                jsonList: [],
                value: [],
                defaultProps: {
                    label: "label",
                    value: "label",
                    children: "child",
                    expandTrigger: "click"
                },
                // 测试用
                demoList: [],
                props: {
                    label: "label",
                    value: "value",
                    children: "child",
                    expandTrigger: "click",
                    checkStrictly: true
                }
            }
        },
        methods: {
            getData() {
                let _t = this;
                // 模拟从接口读取的数据
                let resData = dataList.data;
                // 最终需要的数据
                let jsonList = new Array();
                let codeArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
                //
                for (let i in resData) {
                    let arr = jsonList.concat(resData[i]);
                    // 过滤没用的对象
                    jsonList = arr.filter((str) => {
                        str.label = str.province;
                        str.value = str.provinceId;
                        str.parentId = 0;
                        str.childTemp = [];
                        str.child = [];
                        if (str.children !== undefined && str.children !== null && str.children !== "") {
                            for (let j in str.children) {
                                str.childTemp = str.childTemp.concat(str.children[j]);
                            }
                        }
                        // 过滤二级没用的数据
                        str.child = str.childTemp.filter((val) => {
                            val.label = val.city;
                            val.value = val.cityId;
                            val.parentId = str.value;
                            val.childTemp = [];
                            val.child = [];

                            if (val.children !== undefined && val.children !== null && val.children !== "") {
                                for (let k in val.children) {
                                    val.childTemp = val.childTemp.concat(val.children[k]);
                                }
                            }
                            val.child = val.childTemp.filter((key) => {
                                key.label = key.area;
                                key.value = key.areaId;
                                key.parentId = val.value;
                                key.childTemp = null;
                                key.child = null;
                                return codeArr.indexOf(key.area) === -1;
                            });
                            val.chlid = val.child.length === 0 ? null : val.child;
                            return codeArr.indexOf(val.city) === -1;
                        });
                        str.child = str.child.length === 0 ? null : str.child;
                        return codeArr.indexOf(str.province) === -1;
                    });
                }
                _t.jsonList = jsonList;
            },
            handleChange(val) {
            },
            // 测试
            getAllData() {
                let _t = this;
                _t.$api.get("api/provinceCity/getProvinces", {}, function (res) {
                    let arr = [];
                    for (let i = 0; i < 3; i++) {
                        let obj = new Object();
                        obj.value = [];
                        obj.level = i + 1;
                        obj.dataList = [];
                        _t.getNode(obj);
                        arr.push(obj);
                    }
                    _t.demoList = arr;
                });

            },
            getNode(obj) {
                let _t = this;
                _t.$api.get("api/provinceCity/getProvinces", {}, function (res) {
                    if (res.code === "200") {
                        obj.dataList = res.data.map((val) => {
                            return {
                                label: val.province,
                                value: val.provinceId,
                                child: obj.level === 1 ? null : val.children
                            }
                        });
                    }
                })
            },
            changeNode(item, index) {
                let _t = this;
                if (item.level === 2) {
                    _t.$api.post("api/provinceCity/getCitysByPid", {citysId: item.value[0]}, function (res) {

                    })
                }
            }
        },
        created() {
            let _t = this;
            _t.getData();

            _t.getAllData();

        }
    }
</script>

<style scoped>

</style>
