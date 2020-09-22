<template>
    <div>
        <div class="marginBottom20">
            <el-button @click="addData" type="text">添加一组</el-button>
        </div>
        <ul>
            <li v-for="(item,index) in menuList" :key="index">
                <div>
                    <el-input-number v-model="item.name" :controls="false" :min="1" :max="10" :step="1"/>
                </div>
                <div>
                    <span>产品名称：</span>
                    <el-input
                        @blur="blurName(item,index)"
                        maxlength="6"
                        v-model="item.name"/>
                    <div>
                        <span style="color: red;" v-if="item.nameFlag">{{item.nameTip}}</span>
                    </div>
                </div>
                <div>
                    <span>产品特点：</span>
                    <el-input v-model="item.type"/>
                </div>
                <div>
                    <span>收益话术：</span>
                    <el-input v-model="item.value"/>
                </div>
                <div class="marginBottom20"></div>
                <hr>
            </li>
        </ul>
        <el-button type="primary" @click="postData">完成</el-button>


        <el-table :data="menuList" border>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-popover
                        title="排序"
                        placement="top"
                        width="160"
                        v-model="scope.row.nameFlag">
                        <p>这是一段内容这是一段内容确定删除吗？</p>
                        <div style="text-align: right; margin: 0">
                            <el-button size="mini" type="text" @click="scope.row.nameFlag = false">取消</el-button>
                            <el-button type="primary" size="mini" @click="scope.row.nameFlag = false">确定</el-button>
                        </div>
                        <el-button slot="reference">删除</el-button>
                    </el-popover>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "dyForm",
        data() {
            return {
                menuList: []
            }
        },
        methods: {
            addData() {
                let _this = this;
                // 两种情况，
                // 1. 不管之前的组中有没有输入
                // 2. 之前有为空的不让输入

                // 1。
                let obj = new Object();
                obj.name = '';
                obj.nameFlag = false;
                obj.nameTip = '';
                obj.type = '';
                obj.value = '';
                _this.menuList.push(obj);

                // 2.
                // 加个校验

            },
            //
            blurName(item, index) {
                let _t = this;
                if (item.name.trim() === '') {
                    item.nameFlag = true;
                    item.nameTip = '必填项不能为空';
                } else if (item.name.trim().length < 4) {
                    item.nameFlag = true;
                    item.nameTip = '至少输入4个字符';
                } else {
                    item.nameFlag = false;
                    item.nameTip = '';
                }
            },
            postData() {
                let _this = this;
                let num = 0;
                _this.menuList.forEach((item, index) => {
                    // 校验名称
                    _this.blurName(item,index);
                    // 校验特点

                    //

                    if (item.nameFlag) {
                        num++
                    }
                });

                if (num === 0) {
                    // 请求接口
                    alert(1243)
                }
            }
        },
        created() {
            let _this = this;
            let obj = new Object();
            obj.name = '';
            obj.nameFlag = false;
            obj.nameTip = '';
            obj.type = '';
            obj.value = '';
            _this.menuList.push(obj);
        }
    }
</script>

<style scoped>

</style>
