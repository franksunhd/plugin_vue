<template>
    <div id="drawCircle">
        <canvas id="myCanvas" width="600" height="400"></canvas>
    </div>
</template>

<script>
    import common from "../../../config/common";

    export default {
        name: "drawCircle",
        data() {
            return {
                timer: null,
                mainColor: common.getRootVal("--mainColor"),
                whiteColor: common.getRootVal("--whiteColor"),
                circleColor: common.getRootVal("--circleColor")
            };
        },
        methods: {
            draw() {
                let _this = this;
                // 定义绘制圆心的方法
                CanvasRenderingContext2D.prototype.circle = function (x, y, raidus, color) {
                    this.beginPath();
                    // x:坐标点x;y:坐标点y;raidus:圆半径;0:起点角度;Math.PI*2:终点角度;false:非逆时针
                    this.arc(x, y, raidus, 0, Math.PI * 2, false);
                    this.closePath();
                    this.fillStyle = color; // 填充颜色;
                    this.fill(); //对图形进行填充
                };
                // 定义绘制扇形的方法
                CanvasRenderingContext2D.prototype.sector = function (x, y, radius, innerR, sDeg, eDeg, color, lineWidth) {
                    const DEG = Math.PI / 180;
                    let grad = this.createRadialGradient(x, y, 1, x, y, radius + radius); // 定义一个渐变色
                    grad.addColorStop(0, _this.whiteColor); // 从白色圆心处渐变出来
                    grad.addColorStop(1, color); //渐变出传入颜色
                    this.beginPath();
                    this.moveTo(x, y);
                    this.arc(x, y, radius, DEG * sDeg, DEG * eDeg, false); // 画圆同方法、控制起始角度就变成扇形
                    this.lineTo(x, y); //画外围线
                    this.strokeStyle = _this.mainColor; // 外围线颜色
                    this.lineWidth = lineWidth; //外围线粗
                    this.fillStyle = grad; //对扇形颜色设置
                    this.stroke();
                    this.fill(); //填充
                    this.closePath();
                };
            },
            // 颜色随机方法
            getColor() {
                let arr = [];
                let i = 0;
                let C = "0123456789ABCDEF"; //定义颜色代码的字符串
                while (i++ < 6) {
                    let c = C.substr(parseInt(Math.random() * 16), 1); //由第b（0-16之间的整数）位开始取一个字符
                    arr.push(c);
                }
                return "#" + arr.join(""); //去掉之前数组之间的逗号，前面再加一个井号
            },
            show() {
                let _this = this;
                let canvas = document.getElementById("myCanvas");
                let ctx = canvas.getContext("2d");
                this.draw(); //调用定义好的绘制方法
                let col = this.getColor(); //调用随机颜色
                ctx.sector(100, 150, 50, 30, 265, 325, col, 1.5); //绘制扇形
                ctx.sector(100, 150, 50, 30, 165, 235, col, 1.5); //绘制扇形
                ctx.sector(100, 150, 50, 30, 65, 135, col, 1.5);
                ctx.sector(100, 150, 50, 30, 0, 45, col, 1.5); //绘制随机颜色扇形
                ctx.circle(100, 150, 10, _this.circleColor); //绘制圆心
                // 绘制七色花
                let i = 0;
                while (i++ < 7) {
                    let c = this.getColor();
                    ctx.sector(250, 300, 40, 30, i * 50, i * 50 + 30, c, 1.5);

                    ctx.sector(450, 150, 80, 30, i * 50, i * 50 + 30, c, 1.5);
                }
                ctx.circle(250, 300, 7, _this.circleColor);
                ctx.circle(450, 150, 12, _this.circleColor);
            }

        },
        mounted() {
            let _this = this;
            _this.timer = setInterval(function () {
                _this.show();
            }, 1000);
        },
        destroyed() {
            clearInterval(this.timer);
            this.timer = null;
        }
    };
</script>

<style scoped>
    #drawCircle {
        width: 100%;
        height: 100%;
    }

    #myCanvas {
        border: 1px solid gray;
        background-color: lightblue
    }
</style>
