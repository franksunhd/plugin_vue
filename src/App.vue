<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "App",
        created() {
            let theme = sessionStorage.getItem("plugin_theme") || "light";
            if (!!theme) {
                require("./assets/theme/base_" + theme + ".css");
            } else {
                require("./assets/theme/base_light.css");
            }
            //在页面加载时读取sessionStorage里的状态信息
            if (sessionStorage.getItem("pluginVueStore")) {
                try {
                    this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("pluginVueStore"))));
                    setTimeout(function () {
                        sessionStorage.removeItem("pluginVueStore");
                    }, 500);
                } catch (err) {

                }
            }
            //在页面刷新时将vuex里的信息保存到sessionStorage里
            window.addEventListener("beforeunload", () => {
                sessionStorage.setItem("pluginVueStore", JSON.stringify(this.$store.state));
            });
        },
        mounted() {
            const baseSize = 12;
            function setRem() {
                const scale = document.documentElement.clientWidth / 375;
                document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + "px";
            }
            setRem();
            window.addEventListener("resize", () => {
                setRem();
            });
        }
    };
</script>

<style scoped>
    #app {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
