<template>
    <div class="vueUeditorBox">
        <p class="marginBottom20">这是一个UEditor的编辑器, 可以配置部分参数,
            <a style="color: #229399;font-weight: bold;" href="https://github.com/HaoChuan9421/vue-ueditor-wrap" target="_blank">API文档</a>
            ,效果如下:
        </p>
        <vue-ueditor-wrap v-model="msg" :config="config"/>
    </div>
</template>

<script>
    import VueUeditorWrap from 'vue-ueditor-wrap';

    export default {
        name: 'vueUEditor',
        components: { VueUeditorWrap },
        data () {
            return {
                msg: '', // 默认值
                config: {
                    autoHeightEnabled: false, // 编辑器不自动被内容撑高
                    initialFrameHeight: 400, // 初始容器高度
                    initialFrameWidth: '100%', // 初始容器宽度
                    UEDITOR_HOME_URL: '/static/UEditor/',
                    // 工具栏
                    // toolbars: [
                    //     [
                    //         'fullscreen', // 全屏
                    //         'bold', // 粗体
                    //     ]
                    // ],
                    wordCount: false, // 是否开启字数统计
                    lang: 'zh-cn', // zh-cn 或者 en
                }
            };
        }
    };
</script>

<style scoped>

</style>
