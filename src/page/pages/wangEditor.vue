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
    </div>
</template>

<script>
    import E from 'wangeditor';

    export default {
        name: 'wangEditor',
        data () {
            return {
                editor: null, // 编辑器实例
            };
        },
        methods: {
            // 设置内容
            setContent () {
                let _t = this;
                _t.editor.txt.html('111');
            }
        },
        mounted () {
            let _t = this;
            let editor = new E('#wangEditor');
            _t.editor = editor;
            _t.editor.create();
        }
    };
</script>

<style scoped>

</style>
