<template>
    <div class="clipboardBox">
        <p class="marginBottom20">
            这是一个复制粘贴的插件, 可以配置部分参数,
            <a style="color: #229399;font-weight: bold;" href="https://github.com/zenorocha/clipboard.js/"
               target="_blank">API文档</a>,效果如下:
        </p>
        <el-form v-model="formItem">
            <el-form-item label="元数据:">
                <el-input id="foo" v-model="formItem.origin">
                    <template slot="append">
                        <el-button class="btn" data-clipboard-target="#foo" icon="el-icon-setting"/>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="目标数据:">
                <el-input v-model="formItem.value" placeholder="目标数据"/>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import ClipboardJS from "clipboard";

    export default {
        name: "clipboard",
        data() {
            return {
                formItem: {
                    origin: "https://www.baidu.com",
                    value: ""
                },
                clipboard: null
            };
        },
        created() {
            let _t = this;
            _t.clipboard = new ClipboardJS(".btn");
            _t.clipboard.on("success", function (e) {
                // e.action  e.text   e.trigger
                if (e.action === "copy") {
                    _t.$message({
                        type: "success",
                        message: "复制成功"
                    });
                    _t.value = e.text.trim();
                }
                e.clearSelection();
            });

            _t.clipboard.on("error", function (e) {
                // e.action   e.trigger
            });
        },
        destroyed() {
            let _t = this;
            _t.clipboard.destroy();
        }
    };
</script>

<style scoped>

</style>
