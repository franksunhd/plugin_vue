<template>
    <div class="marginBottom20">
        这里是关于vue-meta的相关配置
    </div>
</template>

<script>
    export default {
        name: "vueMeta",
        metaInfo: {
            title: 'vue-meta设置页面',
            // set meta
            meta: [
                {name: 'keyWords', content: 'My Example App'},
                {name: 'apple-mobile-web-app-title', content: 'yes'},
                {name: 'apple-touch-fullscreen', content: 'yes'},
                {httpEquiv: 'X-UA-Compatible', content: 'IE=Edge,chrome=1'},
                {httpEquiv: 'Window-target', content: '_top'},
                {httpEquiv: 'Page-Enter', content: 'revealTrans(duration=5.0,transition=20)'}
            ],
            // set link
            link: [
                {rel: 'asstes', href: 'https://assets-cdn.github.com/'}
            ]
        }
    }
</script>

<style scoped>

</style>
