<template>
    <div class="vueScrollBox">
        <vue-scroll :ops="ops">
            <div class="demo-content">
                <div class="demo-content-text" v-for="item in 1000" :key="item">Hello World === {{item}}</div>
            </div>
        </vue-scroll>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                ops: {
                    vuescroll: {
                        mode: "slide",
                        sizeStrategy: "percent",
                        detectResize: true
                    },
                    scrollPanel: {
                        initialScrollY: false,
                        initialScrollX: false,
                        scrollingX: false,
                        scrollingY: true,
                        speed: 1,
                        easing: "easeOutQuint",
                        verticalNativeBarPos: "right",
                        maxHeight: undefined,
                        maxWidth: undefined
                    },
                    rail: {
                        background: "#01a99a",
                        opacity: 1,
                        size: "6px",
                        specifyBorderRadius: false,
                        gutterOfEnds: null,
                        gutterOfSide: "2px",
                        keepShow: false
                    },
                    bar: {
                        showDelay: 10,
                        onlyShowBarOnScroll: false,
                        keepShow: true,
                        background: "#fff000",
                        opacity: 1,
                        hoverStyle: false,
                        specifyBorderRadius: false,
                        minSize: false,
                        size: "6px",
                        disable: false
                    }
                }
            };
        },
        methods: {},
        created() {

        }
    };
</script>

<style scoped>
    .vueScrollBox {
        width: 100%;
        height: 1000px;
        overflow-y: auto;
        padding: 10px;
    }

    .demo-content {
        width: 100%;
    }

    .demo-content-text {
        line-height: 30px;
        height: 30px;
    }
</style>
