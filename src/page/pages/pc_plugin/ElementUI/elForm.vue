<template>
    <div class="elFormBox">
        <el-form :model="dynamicValidateForm" inline ref="dynamicValidateForm" label-width="70px"
                 class="demo-dynamic">
            <el-row>
                <el-col :span="12">
                    <el-form-item
                        prop="email"
                        label="邮箱"
                        :rules="rules.emailRule">
                        <el-input v-model="dynamicValidateForm.email" type="text" style="width: 200px;"/>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <template v-for="(domain, index) in dynamicValidateForm.domains">
                        <el-form-item
                            :label="'名称-' + (index + 1)"
                            :prop="'domains.' + index + '.name'"
                            :rules="rules.nameRule">
                            <el-input v-model="domain.name" type="text" style="width: 200px;"/>
                        </el-form-item>
                        <el-form-item
                            :label="'文本-' + (index + 1)"
                            :prop="'domains.' + index + '.text'"
                            :rules="rules.textRule">
                            <el-input v-model="domain.text" type="text" style="width: 200px;"/>
                        </el-form-item>
                        <el-form-item
                            :label="'域名-' + (index + 1)"
                            :prop="'domains.' + index + '.value'"
                            :rules="rules.urlRule">
                            <el-input v-model="domain.value" type="text" style="width: 200px;"/>
                        </el-form-item>
                        <el-form-item v-if="index === 0" label-width="0">
                            <el-button size="mini" type="success" @click.prevent="addDomain">
                                新增
                            </el-button>
                        </el-form-item>
                        <el-form-item v-if="index !== 0" label-width="0">
                            <el-button type="danger" @click.prevent="removeDomain(domain)">删除
                            </el-button>
                        </el-form-item>
                        <br>
                    </template>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item>
                        <el-button type="primary" size="small" @click="submitForm('dynamicValidateForm')">提交
                        </el-button>
                        <el-button type="warning" size="small" @click="resetForm('dynamicValidateForm')">重置
                        </el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "elFormBox",
        data() {
            const ruleUrl = (rule, value, callback) => {
                if (/[^\w-]/gi.test(value)) {
                    return callback(new Error("输入格式有误! 只能输入数字,字母和 - "));
                }
                return callback();
            };
            const ruleName = (rule, value, callback) => {
                if (/[^\w]/gi.test(value)) {
                    return callback(new Error("输入格式有误! 只能输入数字,字母"));
                }
                return callback();
            };
            const ruleText = (rule, value, callback) => {
                if (/[^-]/gi.test(value)) {
                    return callback(new Error("输入格式有误! 只能输入-"));
                }
                return callback();
            };
            return {
                dynamicValidateForm: {
                    email: "",
                    domains: [{value: "", key: 1, text: "", name: ""}]
                },
                rules: {
                    emailRule: [
                        {required: true, message: "请输入邮箱地址", trigger: "blur"},
                        {type: "email", message: "请输入正确的邮箱地址", trigger: ["blur", "change"]}
                    ],
                    nameRule: [
                        {required: true, message: "名称不能为空", trigger: ["blur", "change"]},
                        {validator: ruleName, trigger: ["blur", "change"]}
                    ],
                    textRule: [
                        {required: true, message: "文本不能为空", trigger: ["blur", "change"]},
                        {validator: ruleText, trigger: ["blur", "change"]}
                    ],
                    urlRule: [
                        {required: true, message: "域名不能为空", trigger: ["blur", "change"]},
                        {validator: ruleUrl, trigger: ["blur", "change"]}
                    ]
                }
            };
        },
        methods: {
            // 提交
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert("submit!");
                    } else {
                        console.log("error submit!!");
                        return false;
                    }
                });
            },
            // 重置
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            // 删除
            removeDomain(item) {
                let index = this.dynamicValidateForm.domains.indexOf(item);
                if (index !== -1) {
                    this.dynamicValidateForm.domains.splice(index, 1);
                }
            },
            // 添加
            addDomain() {
                this.dynamicValidateForm.domains.push({
                    value: "", // 域名
                    text: "", // 文本
                    name: "", // 名称
                    key: Date.now()
                });
            }
        }
    };
</script>

<style scoped lang="less">
    .elFormBox {
        width: 100%;
    }
</style>
