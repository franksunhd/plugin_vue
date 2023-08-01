<template>
    <div>
        <img id="menuImg" class="menuImg" src="../../../assets/img/plugin/menu.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "mouseScreen",
        mounted() {
            const menuImg = document.getElementById("menuImg");
            console.warn((menuImg));
            let rad = 0;
            window.onmousemove = (e) => {
                if (Math.abs(e.movementX) + Math.abs(e.movementY) > 5) {
                    rad = Math.atan2(e.movementX, -e.movementY);
                }
                menuImg.style.transform = `translate(${e.clientX}px,${e.clientY}px) rotate(${rad}rad)`;
            };
        }
    };
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    ::v-deep html {
        cursor: none !important;
    }

    .menuImg {
        width: 50px;
        height: 50px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10000;
        margin-left: -25px;
    }
</style>