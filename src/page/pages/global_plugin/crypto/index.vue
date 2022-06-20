<template>
    <div class="cryptoBox">
        <div><span class="old">原始文字：</span>{{oldVal}}</div>
        <div><span class="new">加密密文：</span>{{AESVAL}}
        </div>
    </div>
</template>

<script>
    import AESJS from "../../../../config/secret";

    export default {
        name: "index",
        data() {
            return {
                oldVal: "" // 原始文字
            };
        },
        computed: {
            AESVAL() {
                if (this.oldVal === "") {
                    return "";
                } else {
                    return AESJS.Encrypt(this.oldVal);
                }
            }
        },
        methods: {
            // 生成随机汉字
            getRandomChineseWord() {
                let _rsl = "";
                let _randomUniCode = Math.floor(Math.random() * 20901 + 19968).toString(16);
                eval("_rsl=" + "\"\\u" + _randomUniCode + "\"");
                return _rsl;
            },
            // 随机生成一段文案
            getRandomLanguage() {
                let _this = this;
                let str = "";
                let len = _this.$randomNum(1, 100);
                for (let i = 0; i < len; i++) {
                    str += _this.getRandomChineseWord();
                }
                _this.oldVal = str;
            }
        },
        mounted() {
            let _this = this;
            _this.getRandomLanguage();
            setInterval(function () {
                _this.getRandomLanguage();
            }, 5000);
        }
    };
</script>

<style scoped lang="less">
    .cryptoBox {
        div {
            font-size: 25px;
            line-height: 50px;
            word-wrap: break-word;
            white-space: normal;
            word-break: break-all;

            .old {
                color: var(--cryptoOldColor);
                font-weight: bold;
            }

            .new {
                color: var(--cryptoNewColor);
                font-weight: bold;
            }
        }

        div:nth-child(1) {
            margin-bottom: 20px;
        }
    }
</style>
