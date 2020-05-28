<template>
    <div class="markdownBox">
        <p class="marginBottom20">这是一个markdown的编辑器, 可以配置部分参数,
            <a style="color: #229399;font-weight: bold;" href="https://github.com/hinesboy/mavonEditor" target="_blank">API文档</a>
            ,效果如下:
        </p>
        <div class="marginBottom20">
            <!-- 默认值 -->
            <el-button size="mini" type="primary" @click="editor.value = '默认值...'">设置默认值</el-button>
            <!-- 语言 -->
            <el-select size="mini" clearable placeholder="请选择语言" v-model="editor.language">
                <el-option v-for="(item,index) in languageList" :key="index" :label="item.label" :value="item.value"/>
            </el-select>
            <!-- 字体大小 -->
            <el-select size="mini" clearable placeholder="请选择字体大小" v-model="editor.fontSize">
                <el-option v-for="(item,index) in fontList" :key="index" :label="item.label" :value="item.value"/>
            </el-select>
        </div>
        <mavon-editor
            style="height: 500px"
            :language="editor.language"
            :fontSize="editor.fontSize"
            :scrollStyle="true"
            :boxShadow="true"
            :transition="true"
            :editable="true"
            @change="changeValue"
            :value="editor.value"/>
    </div>
</template>

<script>
    export default {
        name: 'markdownEditor',
        data () {
            return {
                // 编辑器对象
                editor: {
                    value: '', // 绑定的值
                    language: '', // 语言版本
                    fontSize: '', // 编辑区域文字大小
                    scrollStyle: true, // 是否开启滚动条样式
                },
                // 可选语言列表
                languageList: [
                    { label: '简体中文', value: 'zh-CN' },
                    { label: '正体中文', value: 'zh-TW' },
                    { label: '英文', value: 'en' },
                    { label: '法语', value: 'fr' },
                    { label: '葡萄牙语', value: 'pt-BR' },
                    { label: '俄语', value: 'ru' },
                    { label: '德语', value: 'de' },
                    { label: '日语', value: 'ja' },
                ],
                // 可选字体大小列表
                fontList: [
                    { label: '12px', value: '12px' },
                    { label: '14px', value: '14px' },
                    { label: '16px', value: '16px' },
                    { label: '18px', value: '18px' },
                    { label: '20px', value: '20px' },
                    { label: '22px', value: '22px' },
                    { label: '24px', value: '24px' },
                ]
            };
        },
        methods: {
            // 文本改变时的内容
            changeValue (res) {
                console.log(res);
            },
        }
    };
</script>

<style scoped>

</style>
