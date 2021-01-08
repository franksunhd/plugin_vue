<template>
    <div class="marginBottom20">
        <el-button size="small" type="primary" @click="resStart">点击开始录音</el-button>
    </div>
</template>

<script>
    import Recorder from "recorder-core";
    // 需要使用到的音频格式编码引擎的js文件统统加载进来
    import "recorder-core/src/engine/mp3";
    import "recorder-core/src/engine/mp3-engine";
    // 可选的扩展
    import "recorder-core/src/extensions/waveview";

    export default {
        name: "Recorder",
        data() {
            return {
                rcOptions: {
                    type: "mp3",
                    bitRate: 16,
                    sampleRate: 16000
                }
            };
        },
        methods: {
            // 点击开始录音
            resStart() {
                let _t = this;
                _t.recOpen();
            },
            // 打开录音请求权限
            recOpen() {
                let _t = this;
                return new Promise(resolve => {
                    const rec = Recorder({
                        type: _t.rcOptions.type,
                        bitRate: _t.rcOptions.bitRate,
                        sampleRate: _t.rcOptions.sampleRate,
                        onProcess: function (buffers, powerLevel, duration, sampleRate) {
                            console.log(buffers, powerLevel, duration, sampleRate);
                        }
                    });
                    rec.open(() => {
                        resolve(true);
                    }, function (msg, isAllow) {
                        console.log("msg---", msg);
                        console.log("isUserNotAllow---", isAllow);
                        if (isAllow) {
                            alert(123);
                        }
                        resolve(false);
                    });
                });
            }
        },
        created() {
        }
    };
</script>

<style scoped>

</style>
