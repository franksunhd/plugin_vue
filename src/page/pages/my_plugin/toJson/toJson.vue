<template>
    <div class="toJSONBox">
        <p class="marginBottom20">
            这是一个控制el-select可选最多数量的限制
        </p>
        <el-select
            v-model="value1"
            multiple
            @change="changeOption"
            :collapse-tags="true"
            :multiple-limit="3"
            placeholder="请选择,最多3个">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.label">
            </el-option>
        </el-select>
        <el-button @click="getData">点击获取结果</el-button>
        <el-divider></el-divider>
        <div>
            <el-button type="primary" @click="dealWithTree">获取树</el-button>
            <div style="font-size: 20px;font-weight: bold;line-height: 40px;">数据总条数：{{allNum}}</div>
            <el-tree
                :data="treeData"
                show-checkbox
                node-key="id"
                :default-expand-all="true"
                :props="defaultProps">
            </el-tree>
        </div>
    </div>
</template>

<script>
    import jsonData from "../../../../mock";

    export default {
        name: "toJson",
        data() {
            return {
                options: [
                    {value: "选项1", label: "黄金糕"},
                    {value: "选项2", label: "双皮奶"},
                    {value: "选项3", label: "蚵仔煎"},
                    {value: "选项4", label: "龙须面"},
                    {value: "选项5", label: "北京烤鸭"}
                ],
                value1: [],
                defaultProps: {
                    children: "children",
                    label: "label"
                },
                treeData: [],
                allNum: 0
            };
        },
        methods: {
            changeOption(val) {
                if (val.length > 3) {
                    this.$message({
                        type: "warning",
                        message: "最多3个"
                    });
                    val = val.splice(val.length - 1);
                }
            },
            getData() {
                console.log(this.value1);
            },
            dealWithTree() {
                this.allNum = 0;
                let oldVal = jsonData.toJSON;
                let treeData = [];
                let index = 0;
                let codeArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
                for (let i in oldVal) {
                    index += 1;
                    let obj_1 = {
                        id: "", // key
                        label: "", // name
                        initials: "", // 字母
                        parentId: "", // 父id
                        temp: null, //
                        children: null // 子集
                    };
                    obj_1.id = index;
                    obj_1.label = i;
                    obj_1.initials = i;
                    obj_1.parentId = 0;
                    obj_1.temp = oldVal[i];
                    if (!!oldVal[i]) {
                        oldVal[i].forEach((val_2) => {
                            obj_1.children = obj_1.children === null ? [] : obj_1.children;
                            if (codeArr.indexOf(val_2.initials) !== -1) {
                                let obj_2 = {
                                    id: val_2.provinceId, // key
                                    label: val_2.province, // name
                                    initials: val_2.initials, // 字母
                                    parentId: obj_1.id, // 父id
                                    temp: null, //
                                    children: null // 子集
                                };

                                if (!!val_2.children) {
                                    let child = [];
                                    for (let arr_2 in val_2.children) {
                                        child = child.concat(val_2.children[arr_2]);
                                    }
                                    obj_2.temp = child;
                                    obj_2.children = obj_2.children === null ? [] : obj_2.children;
                                    obj_2.temp.forEach((val_3) => {
                                        if (codeArr.indexOf(val_3.initials) !== -1) {
                                            let obj_3 = {
                                                id: val_3.cityId, // key
                                                label: val_3.city, // name
                                                initials: val_3.initials, // 字母
                                                parentId: obj_2.id, // 父id
                                                temp: null, //
                                                children: null // 子集
                                            };

                                            if (!!val_3.children) {
                                                let child_area = [];
                                                for (let arr_3 in val_3.children) {
                                                    child_area = child_area.concat(val_3.children[arr_3]);
                                                }
                                                obj_3.temp = child_area;
                                                obj_3.children = obj_3.children === null ? [] : obj_3.children;
                                                obj_3.temp.forEach((val_4) => {
                                                    if (codeArr.indexOf(val_4.initials) !== -1) {
                                                        let obj_4 = {
                                                            id: val_4.areaId, // key
                                                            label: val_4.area, // name
                                                            initials: val_4.initials, // 字母
                                                            parentId: obj_3.id, // 父id
                                                            temp: null, //
                                                            children: null // 子集
                                                        };
                                                        this.allNum += 1;
                                                        obj_3.children.push(obj_4);
                                                    }
                                                });
                                            }
                                            obj_2.children.push(obj_3);
                                        }
                                    });
                                }
                                obj_1.children.push(obj_2);
                            }
                        });
                    }
                    treeData.push(obj_1);
                }
                console.log("--oldVal--", oldVal);
                console.log("--treeData--", treeData);
                this.treeData = treeData;
            }
        },
        created() {
            this.dealWithTree();
        }
    };
</script>

<style scoped>

</style>
