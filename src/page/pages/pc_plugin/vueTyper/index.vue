<template>
    <div class="typerBox">
        <div class="marginBottom20">第一种打字机效果：
            <a style="color: #229399;font-weight: bold;" href="https://github.com/cngu/vue-typer" target="_blank">API文档</a>
        </div>
        <div class="marginBottom20">
            <vue-typer
                :text="textArr"
                :shuffle='false'
                initial-action='typing'
                :pre-type-delay='70'
                :type-delay='300'
                :pre-erase-delay='2000'
                :erase-delay='250'
                :erase-style='clear'
                :erase-on-complete='false'
                caret-animation='blink'/>
        </div>
        <div class="marginBottom20">第二种打字机效果：</div>
        <typewriter
            :speed="200"
            :full-erase="true"
            :interval="300"
            :words='["我是一个新的打字机效果","无敌烈焰火流星"]'>
            看我的：
        </typewriter>
    </div>
</template>

<script>
    import {VueTyper} from 'vue-typer';

    export default {
        name: "index",
        components: {VueTyper},
        data() {
            return {
                textArr: ['我的新的打字机,vue-typer']
            }
        }
    }
</script>

<style scoped>
    .typerBox {
        font-size: 30px !important;
    }
</style>
