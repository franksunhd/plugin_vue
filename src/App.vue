<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import menu from "./assets/js/menu";

    export default {
        name: 'App',
        watch: {
            $route(oldStr, newStr) {
                let _t = this;
                if (oldStr !== newStr) {
                    let menuList = menu.menuList;
                    menuList.forEach((item) => {
                        if (item.children) {
                            item.children.forEach((val) => {
                                if (val.path === _t.$route.path) {
                                    document.title = val.name;
                                }
                            });
                        }
                    });
                }
            }
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
