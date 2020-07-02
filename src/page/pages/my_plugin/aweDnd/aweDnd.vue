<template>
    <div>
        <div class="color-list marginBottom20">
            <div class="color-item"
                 v-for="color in colors" v-dragging="{ item: color, list: colors, group: 'color' }"
                 :key="color.text">{{color.text}}
            </div>
        </div>
        <ul class="color-ul">
            <li v-for="(item,index) in colors" :key="index" :style="{backgroundColor:item.text}">{{item.text}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "aweDnd",
        data() {
            return {
                colors: [
                    {text: "Aquamarine"},
                    {text: "Hotpink"},
                    {text: "Gold"},
                    {text: "Crimson"},
                    {text: "Blueviolet"},
                    {text: "Lightblue"},
                    {text: "Cornflowerblue"},
                    {text: "Skyblue"},
                    {text: "Burlywood"}
                ]
            }
        }
    }
</script>

<style scoped>
    .color-item {
        line-height: 50px;
        background-color: #3b97d7;
        color: #fff;
        padding-left: 10px;
        border-bottom: 1px solid #2D64B3;
    }

    .color-ul {
        width: 300px;
    }

    .color-ul li {
        display: inline-block;
        width: 300px;
        height: 100px;
        box-sizing: border-box;
        text-align: center;
        line-height: 100px;
    }
</style>
