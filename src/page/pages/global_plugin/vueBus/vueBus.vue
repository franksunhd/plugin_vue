<template>
    <div class="vueBoxBox">
        <childToast/>
        <div class="marginBottom20">
            <div>值为:</div>
            <ul id="toastNum"></ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vueBus",
        components: {
            childToast: () => import ("./childBus")
        },
        created() {
            let _t = this;
            let num = 0;
            _t.$bus.on("getMenu", (item) => {
                if (item) {
                    num++;
                    console.log(item, "----");
                    let li = document.createElement("li");
                    li.innerHTML = `<span> ${num}</span>`;
                    document.getElementById("toastNum").appendChild(li);
                    let li_new = document.createElement("li");
                    li_new.innerHTML = `<hr>`;
                    document.getElementById("toastNum").appendChild(li_new);
                }
            });
        },
        destroyed() {
            let _t = this;
            _t.$bus.off("getMenu");
        }
    };
</script>

<style scoped>

</style>
