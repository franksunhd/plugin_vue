<template>
    <div class="errorPage">
        <img src="../assets/img/404.jpg" alt="">
    </div>
</template>

<script>
    export default {
        name: "ErrorPage"
    };
</script>

<style scoped lang="less">
    .errorPage {
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        img {
            max-height: 100%;
            max-width: 100%;
        }
    }
</style>
