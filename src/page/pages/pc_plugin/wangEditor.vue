<template>
    <div class="wangEditorBox">
        <p class="marginBottom20">
            这是一个富文本编辑器, 可以配置部分参数,
            <a style="color: #229399;font-weight: bold;" href="https://www.kancloud.cn/wangfupeng/wangeditor3/332599"
               target="_blank">API文档</a>,效果如下:
        </p>
        <div class="marginBottom20">
            <el-button size="mini" type="primary" @click="setContent">设置内容</el-button>
        </div>
        <div id="wangEditor"></div>

        <div>
            <the-rich-text
                v-model="dataList"
                :container="toolbar"
                action="http://api.pay-star.com/admin/images"
                :headers="{ 'company-token': '4P6snTNhfADVykzxYkLAvs' }"></the-rich-text>
        </div>
    </div>
</template>

<script>
    import E from "wangEditor";
    import Quill from "quill";
    // quill图片可拖拽上传
    // import { ImageDrop } from 'quill-image-drop-module';
    import theRichText from "./the-rich-text";

    export default {
        name: "wangEditor",
        components: {theRichText},
        data() {
            return {
                editor: null, // 编辑器实例
                toolbar: [
                    ["bold", "italic", "underline", "strike"],
                    [{color: []}, {background: []}],
                    ["link", "image"],
                    ["blockquote", "code-block"],
                    [{align: []}],
                    [{list: "ordered"}, {list: "bullet"}],
                    [{script: "sub"}, {script: "super"}],
                    // [{ header: 1 }, { header: 2 }],
                    // [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    [{size: ["small", false, "large", "huge"]}],
                    [{font: []}]
                    // [{ indent: '-1' }, { indent: '+1' }],
                ],
                dataList: []
            };
        },
        methods: {
            // 设置内容
            setContent() {
                let _t = this;
                _t.editor.txt.html("111");
            }
        },
        mounted() {
            let _t = this;
            let editor = new E("#wangEditor");
            _t.editor = editor;
            _t.editor.create();
        }
    };
</script>

<style scoped>

</style>
