<template>
    <div class="">
        <label>分屏数量:</label>
        <el-select v-model="values" @change="Screens">
            <el-option value="1" label="1=1x1"/>
            <el-option value="4" label="4=2x2"/>
            <el-option value="6" label="6=1+5"/>
            <el-option value="8" label="8=1+7"/>
            <el-option value="9" label="9=3x3"/>
        </el-select>
        <div id="player" style="width:1000px;height:400px;border:1px solid #00ffff">
        </div>
    </div>
</template>

<script>
    export default {
        name: "pageTwo",
        data() {
            return {
                values: "4",
                ScreenNumber: "",
                Container: "",
                parentNode: "",
                index: "",
                VideoWidth: "",
                VideoHeight: "",
                SelectVideoIndex: ""
            };
        },
        methods: {
            Screens(num) {
                this.LayoutScreens(num);
            },
            Init(id, screenNums) {
                let _this = this;
                _this.Container = document.getElementById(id);
                _this.ScreenNumber = screenNums;
                _this.VideoWidth = 352;
                _this.VideoHeight = 288;
                _this.SelectVideoIndex = -1;
                _this.CreateCanvas();
                _this.LayoutScreens(screenNums);
            },
            CreateCanvas() {
                let _this = this;
                for (let i = 1; i <= 32; i++) {
                    //显示画布
                    let canvas = document.createElement("canvas");
                    canvas.width = _this.VideoWidth;
                    canvas.height = _this.VideoHeight;
                    canvas.style.border = "1px solid black";
                    canvas.style.cssFloat = "left";
                    _this.Container.append(canvas);
                    let ctx = canvas.getContext("2d");
                    ctx.fillStyle = "gray";
                    ctx.fillRect(1, 1, canvas.width, canvas.height);
                }
            },
            ContainsScreen() {
                let screens = [1, 4, 6, 8, 9, 10, 16, 24, 32];
                for (let i = 0; i < screens.length; i++) {
                    if (screens[i].toString() === this.values) {
                        return true;
                    }
                }
                return false;
            },
            LayoutScreens(num) {
                if (num === undefined) {
                    console.log("LayoutScreens num is undefined");
                } else if (!this.ContainsScreen(num)) {
                    console.log("LayoutScreens num is not in  [1, 4, 6, 8,9,10,16,24,32]");
                    return;
                } else {
                    this.ScreenNumber = num;
                }
                for (let i = 1; i <= this.Container.childElementCount; i++) {
                    let video = this.Container.childNodes[i];
                    if (video) {
                        video.index = i;
                        video.style.margin = "1px";
                        // video.parentNode = this.Container;
                        video.onclick = function () {
                            // this.SelectVideoIndex = this.index;
                            // alert(this.SelectVideoIndex);
                            // for (let i = 1; i <= this.parentNode.childElementCount; i++) {
                            //     if (i === this.SelectVideoIndex) {
                            //         this.style.border = "1px solid #00FF00";
                            //     } else {
                            //         this.parentNode.childNodes[i].style.border = "1px solid black";
                            //     }
                            // }
                        };

                        if (i < this.ScreenNumber) {
                            video.style.display = "block";
                        } else {
                            video.style.display = "none";
                        }
                    }
                }

                let width = parseInt(this.Container.style.width.replace("px", ""));
                let height = parseInt(this.Container.style.height.replace("px", ""));
                let count = 0;
                for (let i = 1; i <= this.Container.childElementCount; i++) {
                    let video = this.Container.childNodes[i];
                    if (video) {
                        if (this.ScreenNumber == 1 && video.index == 1) {
                            video.style.width = (width - 5) + "px";
                            video.style.height = (height - 5) + "px";
                            count++;
                        } else if (this.ScreenNumber == 4 && video.index <= 4) {
                            video.style.width = (width / 2 - 5) + "px";
                            video.style.height = (height / 2 - 5) + "px";
                            count++;
                        } else if (this.ScreenNumber == 6 && video.index <= 6) {
                            if (video.index == 1) {
                                video.style.width = (width / 3 * 2 - 6) + "px";
                                video.style.height = (height / 3 * 2 - 5) + "px";
                            } else {
                                video.style.width = (width / 3 - 5) + "px";
                                video.style.height = (height / 3 - 2) + "px";
                            }
                            if (video.index == 6) {
                                video.style.cssFloat = "right";
                                video.style.marginRight = "3px";
                            }
                            count++;
                        } else if (this.ScreenNumber == 8 && video.index <= 8) {
                            if (video.index == 1) {
                                video.style.width = (width / 4 * 3 - 4) + "px";
                                video.style.height = (height / 4 * 3 - 7) + "px";
                            } else {
                                video.style.width = (width / 4 - 5) + "px";
                                video.style.height = (height / 4 - 3) + "px";
                            }
                            if (video.index == 8) {
                                video.style.cssFloat = "right";
                                video.style.marginRight = "3px";
                            }
                            count++;
                        } else if (this.ScreenNumber == 9 && video.index <= 9) {
                            video.style.width = (width / 3 - 5) + "px";
                            video.style.height = (height / 3 - 5) + "px";
                            count++;
                        } else if (this.ScreenNumber == 10 && video.index <= 10) {
                            if (video.index == 1) {
                                video.style.width = (width / 5 * 4 - 5) + "px";
                                video.style.height = (height / 5 * 4 - 10) + "px";
                            } else {
                                video.style.width = (width / 5 - 5) + "px";
                                video.style.height = (height / 5 - 5) + "px";
                            }
                            if (video.index == 10) {
                                video.style.cssFloat = "right";
                                video.style.marginRight = "3px";
                            }
                            count++;
                        } else if (this.ScreenNumber == 16 && video.index <= 16) {
                            video.style.width = (width / 4 - 5) + "px";
                            video.style.height = (height / 4 - 5) + "px";
                            video.style.cssFloat = "left";
                            video.style.margin = "1px";
                            count++;
                        } else if (this.ScreenNumber == 24 && video.index <= 24) {
                            video.style.width = (width / 6 - 4) + "px";
                            video.style.height = (height / 4 - 3) + "px";
                            video.style.cssFloat = "left";
                            video.style.margin = "1px";
                            count++;
                        } else if (this.ScreenNumber == 32 && video.index <= 32) {
                            video.style.width = (width / 8 - 4) + "px";
                            video.style.height = (height / 4 - 2) + "px";
                            video.style.cssFloat = "left";
                            video.style.margin = "1px";
                            count++;
                        }
                        if (count == this.ScreenNumber) {
                            break;
                        }
                    }
                }
            }
        },
        mounted() {
            this.Init("player", 4);
        }
    };
</script>

<style scoped>

</style>
