<template>
    <div>
        <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model.trim="textarea"></el-input>
        <el-button style="margin-top: 10px;" type="primary" @click="dealWithJSON">解析JSON</el-button>


        <el-table style="margin-top: 10px;" :data="tableList" border stripe>
            <el-table-column width="50" label="序号">
                <template slot-scope="scope">{{scope.$index + 1}}</template>
            </el-table-column>
            <el-table-column prop="key" label="Key值"></el-table-column>
            <el-table-column width="100" prop="type" label="数据类型"></el-table-column>
            <el-table-column width="100" label="类型描述">
                <template slot-scope="scope">{{ObjType[scope.row.type]}}</template>
            </el-table-column>
            <el-table-column prop="value" label="字段值"></el-table-column>
        </el-table>
    </div>
</template>

<script>
    import mockJSON from "../../../mock/mockJSON.json";
    import mockJSONArr from "../../../mock/mockJSONArr.json";
    import mockJSONData from "../../../mock/mockJSONData.json";

    export default {
        name: "pageJSON",
        data() {
            return {
                // textarea: JSON.stringify(mockJSON),
                // textarea: JSON.stringify(mockJSONArr),
                textarea: JSON.stringify(mockJSONData),
                tableList: [],
                returnKey: "request",
                ObjType: {
                    "Array": "数组",
                    "Object": "对象",
                    "Null": "空指针",
                    "String": "字符串",
                    "Undefined": "未定义类型",
                    "Boolean": "布尔类型",
                    "Number": "数字类型"
                }
            };
        },
        methods: {
            // 处理JSON
            dealWithJSON() {
                let _this = this;
                if (_this.textarea.trim() === "") {
                    return false;
                }
                if (!_this.IsJSONString(_this.textarea.trim())) {
                    _this.$message.error("数据不是JSON");
                    return false;
                }
                let JSONStr = JSON.parse(_this.textarea.trim());
                console.warn("--JSON数据--", JSONStr);
                let request = JSONStr;
                let tableList = [];
                let objItem = {
                    parentKey: "",
                    key: _this.returnKey,
                    type: _this.getDataType(request),
                    value: _this.getDataValue(request)
                };
                tableList.push(objItem);

                // 递归函数
                function recursionFun(request, parentKey) {
                    if (_this.getDataType(request) === "Array") {
                        request.forEach((item, index) => {
                            let obj = {
                                parentKey: parentKey,
                                key: parentKey + "[" + index + "]",
                                type: _this.getDataType(item),
                                value: _this.getDataValue(item)
                            };
                            tableList.push(obj);
                            // 子对象递归
                            recursionFun(item, obj.key);
                        });
                    } else if (_this.getDataType(request) === "Object") {
                        let keyNames = Object.keys(request);
                        let valNames = Object.values(request);
                        // console.warn(keyNames, valNames);
                        if (!!keyNames && keyNames.length !== 0) {
                            keyNames.forEach((item, i) => {
                                let obj = {
                                    parentKey: parentKey,
                                    key: parentKey + "." + item,
                                    type: _this.getDataType(valNames[i]),
                                    value: _this.getDataValue(valNames[i])
                                };
                                tableList.push(obj);
                                if (_this.getDataType(request[item]) === "Object") {
                                    // 子对象递归
                                    recursionFun(request[item], obj.key);
                                } else if (_this.getDataType(request[item]) === "Array") {
                                    // 子对象递归
                                    recursionFun(request[item], obj.key);
                                }
                            });
                        }
                    }
                }

                recursionFun(request, objItem.key);
                _this.tableList = tableList;
            },
            // 判断是否JSON
            IsJSONString(str) {
                if (typeof str === "string") {
                    try {
                        let obj = JSON.parse(str);
                        if (typeof obj === "object" && obj) {
                            return true;
                        } else {
                            return false;
                        }
                    } catch (e) {
                        console.error("---str不是JSON--", e);
                        return false;
                    }
                }
            },
            // 判断数据的类型
            getDataType(str) {
                let type = "";
                if (Array.isArray(str)) {
                    type = "Array";
                } else if (typeof str === "number") {
                    type = "Number";
                } else if (typeof str === "boolean") {
                    type = "Boolean";
                } else if (str === null) {
                    type = "Null";
                } else if (typeof str === "object") {
                    type = "Object";
                } else if (str === undefined) {
                    type = "Undefined";
                } else if (typeof str === "string") {
                    type = "String";
                }
                return type;
            },
            // 获取数据
            getDataValue(str) {
                let type = this.getDataType(str);
                if (type === "Array" || type === "Object") {
                    return JSON.stringify(str);
                } else {
                    return String(str);
                }
            }
        }
    };
</script>

<style scoped>

</style>