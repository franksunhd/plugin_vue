<template>
    <div id="mouseClickBox" @click="boxClick">
        <div class="content">点击区域</div>
    </div>
</template>

<script>
    // 引入jq
    import $ from "jquery";

    export default {
        name: "mouseClick",
        data() {
            return {
                list: [
                    "❤富强❤", "❤民主❤", "❤文明❤", "❤和谐❤",
                    "❤自由❤", "❤平等❤", "❤公正❤", "❤法治❤",
                    "❤爱国❤", "❤敬业❤", "❤诚信❤", "❤友善❤",
                    "❤"
                ],
                a_idx: 0
            };
        },
        methods: {
            boxClick(e) {
                let _this = this;
                let $i = $("<span></span>").text(_this.list[_this.a_idx]);
                _this.a_idx = (_this.a_idx + 1) % _this.list.length;
                let x = e.pageX, y = e.pageY;
                $i.css({
                    "font-size": 20 + "px",
                    "z-index": 998,
                    "top": y,
                    "left": x,
                    "position": "fixed",
                    "font-weight": "bold",
                    "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
                });
                $("#mouseClickBox").append($i);
                $i.animate({
                    "top": y - 180, // 180 为消失距离
                    "opacity": 0
                }, 1500, function () {
                    $i.remove();
                });
            }
        }
    };
</script>

<style scoped lang="less">
    #mouseClickBox {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 10px dashed var(--grayColor);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        user-select: none;

        div.content {
            color: var(--grayColor);
            font-size: 100px;
            letter-spacing: 1em;
        }
    }
</style>
