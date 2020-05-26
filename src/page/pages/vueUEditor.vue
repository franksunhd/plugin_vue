<template>
    <div class="vueUeditorBox">
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
                    // 编辑器不自动被内容撑高
                    autoHeightEnabled: false,
                    // 初始容器高度
                    initialFrameHeight: 400,
                    // 初始容器宽度
                    initialFrameWidth: '100%',
                    UEDITOR_HOME_URL: '/static/UEditor/'
                }
            };
        }
    };
</script>

<style scoped>

</style>
