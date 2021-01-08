<template>
    <div class="gesturePwd" v-show="currentValue">
        <div class="box">
            <h4 ref="gestureTitle" class="gestureTitle">请绘制您的图形密码</h4>
            <a class="reset" ref="updatePassword" @click="updatePassword">重置密码</a>
            <a class="close" ref="updatePassword" @click="closePwd">关闭</a>
            <canvas ref="canvas"></canvas>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from "vuex";

    export default {
        name: "vueGesture",
        props: {
            // 是否显示组件
            currentValue: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                canvas: "", // 画布
                ctx: "", // 画笔
                devicePixelRatio: 0, // 物理像素和分辨率额比例
                chooseType: "",
                r: "", // 公式计算
                lastPoint: [], // 记录的集合数组
                lineArr: [], // 描边数组
                restPoint: [], // 连线画点数组
                pswObj: {step: 2}, // 记录次数
                // 颜色配置
                itemStyle: {
                    textColor: "#87888a", // 文字颜色
                    lineColor: "#27AED5", // 连线颜色
                    successColor: "#2CFF26", // 连线成功的颜色
                    errorColor: "#F56C6C" // 连线失败的颜色
                }
            };
        },
        computed: {
            ...mapState(["vueGesture"])
        },
        methods: {
            ...mapMutations(["changeVueGesture"]),
            closePwd() {
                let _t = this;
                _t.$emit("control", false);
            },
            // 初始化解锁密码面板 小圆圈
            drawCle(x, y) {
                let _t = this;
                // 密码的点点默认的颜色
                _t.ctx.strokeStyle = _t.itemStyle.textColor;
                _t.ctx.lineWidth = 2;
                _t.ctx.beginPath();
                _t.ctx.arc(x, y, _t.r, 0, Math.PI * 2, true);
                _t.ctx.closePath();
                _t.ctx.stroke();
            },
            // 初始化圆心
            drawPoint(style) {
                let _t = this;
                for (let i = 0; i < _t.lastPoint.length; i++) {
                    _t.ctx.fillStyle = style;
                    _t.ctx.beginPath();
                    _t.ctx.arc(_t.lastPoint[i].x, _t.lastPoint[i].y, _t.r / 2.5, 0, Math.PI * 2, true);
                    _t.ctx.closePath();
                    _t.ctx.fill();
                }
            },
            // 初始化状态线条
            drawStatusPoint(type) {
                let _t = this;
                for (let i = 0; i < _t.lastPoint.length; i++) {
                    _t.ctx.strokeStyle = type;
                    _t.ctx.beginPath();
                    _t.ctx.arc(_t.lastPoint[i].x, _t.lastPoint[i].y, _t.r, 0, Math.PI * 2, true);
                    _t.ctx.closePath();
                    _t.ctx.stroke();
                }
            },
            // style:颜色 解锁轨迹
            drawLine(style, po) {
                let _t = this;
                _t.ctx.beginPath();
                _t.ctx.strokeStyle = style;
                _t.ctx.lineWidth = 3;
                _t.ctx.moveTo(_t.lastPoint[0].x, _t.lastPoint[0].y);
                for (let i = 1; i < _t.lastPoint.length; i++) {
                    _t.ctx.lineTo(_t.lastPoint[i].x, _t.lastPoint[i].y);
                }
                _t.ctx.lineTo(po.x, po.y);
                _t.ctx.stroke();
                _t.ctx.closePath();
            },
            // 创建解锁点的坐标，根据canvas的大小来平均分配半径
            createCircle() {
                let _t = this;
                let n = _t.chooseType;
                let count = 0;
                // 公式计算
                _t.r = _t.ctx.canvas.width / (2 + 4 * n);
                _t.lastPoint = [];
                _t.lineArr = [];
                _t.restPoint = [];
                let r = _t.r;
                for (let i = 0; i < n; i++) {
                    for (let j = 0; j < n; j++) {
                        count++;
                        let obj = {
                            x: j * 4 * r + 3 * r,
                            y: i * 4 * r + 3 * r,
                            index: count
                        };
                        _t.lineArr.push(obj);
                        _t.restPoint.push(obj);
                    }
                }
                _t.ctx.clearRect(0, 0, _t.ctx.canvas.width, _t.ctx.canvas.height);
                for (let i = 0; i < _t.lineArr.length; i++) {
                    _t.drawCle(_t.lineArr[i].x, _t.lineArr[i].y);
                }
            },
            // 获取touch点相对于canvas的坐标
            getPosition(e) {
                let _t = this;
                let rect = e.currentTarget.getBoundingClientRect();
                return {
                    x: (e.touches[0].clientX - rect.left) * _t.devicePixelRatio,
                    y: (e.touches[0].clientY - rect.top) * _t.devicePixelRatio
                };
            },
            // 核心变换方法在touchmove时候调用
            update(po) {
                let _t = this;
                _t.ctx.clearRect(0, 0, _t.ctx.canvas.width, _t.ctx.canvas.height);
                // 每帧先把面板画出来
                for (let i = 0; i < _t.lineArr.length; i++) {
                    _t.drawCle(_t.lineArr[i].x, _t.lineArr[i].y);
                }
                // 每帧花轨迹
                _t.drawPoint(_t.itemStyle.lineColor);
                // 每帧花轨迹
                _t.drawStatusPoint(_t.itemStyle.lineColor);
                // 每帧画圆心
                _t.drawLine(_t.itemStyle.lineColor, po);
                for (let i = 0; i < _t.restPoint.length; i++) {
                    if (Math.abs(po.x - _t.restPoint[i].x) < _t.r && Math.abs(po.y - _t.restPoint[i].y) < _t.r) {
                        _t.drawPoint(_t.restPoint[i].x, _t.restPoint[i].y);
                        _t.lastPoint.push(_t.restPoint[i]);
                        _t.restPoint.splice(i, 1);
                        break;
                    }
                }
            },
            // 检测密码
            checkPass(psw1, psw2) {
                let p1 = "", p2 = "";
                for (let i = 0; i < psw1.length; i++) {
                    p1 += psw1[i].index + psw1[i].index;
                }
                for (let i = 0; i < psw2.length; i++) {
                    p2 += psw2[i].index + psw2[i].index;
                }
                return p1 === p2;
            },
            // touchend结束之后对密码和状态的处理
            storePass(psw) {
                let _t = this;
                if (_t.pswObj.step === 1) {
                    if (_t.checkPass(_t.pswObj.fpassword, psw)) {
                        _t.pswObj.step = 2;
                        _t.pswObj.spassword = psw;
                        _t.$refs.gestureTitle.innerHTML = "密码保存成功";
                        _t.drawStatusPoint(_t.itemStyle.successColor);
                        _t.drawPoint(_t.itemStyle.successColor);
                        this.changeVueGesture("pwdList", JSON.stringify(_t.pswObj.spassword));
                        this.changeVueGesture("chooseType", _t.chooseType);
                    } else {
                        _t.$refs.gestureTitle.innerHTML = "两次不一致，重新输入";
                        _t.drawStatusPoint(_t.itemStyle.errorColor);
                        _t.drawPoint(_t.itemStyle.errorColor);
                        delete _t.pswObj.step;
                    }
                } else if (_t.pswObj.step === 2) {
                    if (_t.checkPass(_t.pswObj.spassword, psw)) {
                        let gestureTitle = _t.$refs.gestureTitle;
                        gestureTitle.style.color = _t.itemStyle.successColor;
                        gestureTitle.innerHTML = "解锁成功";
                        // 小点点外圈高亮
                        _t.drawStatusPoint(_t.itemStyle.successColor);
                        _t.drawPoint(_t.itemStyle.successColor);
                        // 每帧画圆心
                        _t.drawLine(_t.itemStyle.successColor, _t.lastPoint[_t.lastPoint.length - 1]);
                        _t.closePwd(true);
                    } else if (psw.length < 4) {
                        _t.drawStatusPoint(_t.itemStyle.errorColor);
                        _t.drawPoint(_t.itemStyle.errorColor);
                        // 每帧画圆心
                        _t.drawLine(_t.itemStyle.errorColor, _t.lastPoint[_t.lastPoint.length - 1]);
                        let gestureTitle = _t.$refs.gestureTitle;
                        gestureTitle.style.color = _t.itemStyle.errorColor;
                        gestureTitle.innerHTML = "请连接4个点";
                    } else {
                        _t.drawStatusPoint(_t.itemStyle.errorColor);
                        _t.drawPoint(_t.itemStyle.errorColor);
                        // 每帧画圆心
                        _t.drawLine(_t.itemStyle.errorColor, _t.lastPoint[_t.lastPoint.length - 1]);
                        let gestureTitle = _t.$refs.gestureTitle;
                        gestureTitle.style.color = _t.itemStyle.errorColor;
                        gestureTitle.innerHTML = "密码错误";
                    }
                } else {
                    _t.pswObj.step = 1;
                    _t.pswObj.fpassword = psw;
                    _t.$refs.gestureTitle.innerHTML = "再次输入";
                }
            },
            makeState() {
                let _t = this;
                if (_t.pswObj.step === 2) {
                    _t.$refs.updatePassword.style.display = "block";
                    let gestureTitle = _t.$refs.gestureTitle;
                    gestureTitle.style.color = _t.itemStyle.textColor;
                    gestureTitle.innerHTML = "请解锁";
                } else if (_t.pswObj.step === 1) {
                    _t.$refs.updatePassword.style.display = "none";
                } else {
                    _t.$refs.updatePassword.style.display = "block";
                }
            },
            updatePassword() {
                let _t = this;
                _t.changeVueGesture("pwdList", "");
                _t.changeVueGesture("chooseType", "");
                _t.pswObj = {};
                _t.$refs.gestureTitle.innerHTML = "绘制解锁图案";
                _t.reset();
            },
            initDom() {
                let _t = this;
                _t.chooseType = Number(this.vueGesture.chooseType) || 3;
                _t.devicePixelRatio = window.devicePixelRatio || 1;
                let canvas = _t.$refs.canvas;
                let width = 320;
                let height = 320;
                // 高清屏锁放
                canvas.style.width = width + "px";
                canvas.style.height = height + "px";
                canvas.height = height * _t.devicePixelRatio;
                canvas.width = width * _t.devicePixelRatio;
            },
            init() {
                let _t = this;
                _t.initDom();
                _t.pswObj = this.vueGesture.pwdList ? {
                    step: 2,
                    spassword: JSON.parse(this.vueGesture.pwdList)
                } : {};
                _t.lastPoint = [];
                _t.makeState();
                _t.touchFlag = false;
                _t.canvas = _t.$refs.canvas;
                _t.ctx = _t.canvas.getContext("2d");
                _t.createCircle();
                _t.bindEvent();
            },
            reset() {
                let _t = this;
                _t.makeState();
                _t.createCircle();
            },
            bindEvent() {
                let _t = this;
                _t.canvas = _t.$refs.canvas;
                _t.canvas.addEventListener("touchstart", function (e) {
                    // 某些android 的 touchmove不宜触发 所以增加此行代码
                    e.preventDefault();
                    let po = _t.getPosition(e);
                    for (let i = 0; i < _t.lineArr.length; i++) {
                        if (Math.abs(po.x - _t.lineArr[i].x) < _t.r && Math.abs(po.y - _t.lineArr[i].y) < _t.r) {
                            _t.touchFlag = true;
                            _t.drawPoint(_t.lineArr[i].x, _t.lineArr[i].y);
                            _t.lastPoint.push(_t.lineArr[i]);
                            _t.restPoint.splice(i, 1);
                            break;
                        }
                    }
                }, false);
                _t.canvas.addEventListener("touchmove", function (e) {
                    if (_t.touchFlag) {
                        _t.update(_t.getPosition(e));
                    }
                }, false);
                _t.canvas.addEventListener("touchend", function (e) {
                    if (_t.touchFlag) {
                        _t.touchFlag = false;
                        _t.storePass(_t.lastPoint);
                        setTimeout(function () {
                            _t.reset();
                        }, 1000);
                    }
                }, false);
            }
        },
        mounted() {
            let _t = this;
            _t.init();
        }
    };
</script>

<style scoped>
    .gesturePwd {
        position: fixed;
        z-index: 5000;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
        border-radius: 3px;
        overflow: hidden;
        background-color: #000;
    }

    .gestureTitle {
        color: #87888a;
        margin-top: 85px;
        font-size: 20px;
        font-weight: normal;
    }

    .box {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .box a {
        position: absolute;
        top: 5px;
        color: #fff;
        font-size: 13px;
        display: block;
    }

    a.reset {
        left: 5px;
    }

    a.close {
        right: 5px;
    }

    .box canvas {
        background-color: #000;
        display: inline-block;
        margin-top: 76px;
        width: 320px;
        height: 320px;
    }
</style>
