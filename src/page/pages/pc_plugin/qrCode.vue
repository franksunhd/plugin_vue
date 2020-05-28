<template>
    <div class="qrCode">
        <p class="marginBottom20">
            这是一个生成二维码的插件 --->> vue-qart 以配置参数为主, 适合初始化的时候就配置好参数
        </p>
        <vue-q-art :config="config" :downloadButton="downloadButton"></vue-q-art>
        <p class="marginBottom20">
            这是一个生成二维码的插件 --->> qrcodejs2 <<--- js配置实例对象 适合动态后者手动生成二维码
        </p>
        <div id="qrCode" ref="qrCode"></div>
        <p class="marginBottom20">
            这是一个生成二维码的插件 --->> vue-qr <<--- js配置实例对象 适合中心区域加背景图片的方案
        </p>
        <!-- 只有中间图片 -->
        <vue-qr class="right" :logoSrc="config.imagePath" :text="config.value" :size="config.size" :margin="0"/>
        <!-- 只有背景图片 -->
        <vue-qr class="right" :bgSrc="config.imagePath" :text="config.value" :size="config.size" :margin="0"/>
        <!-- 既有中间图片又有背景图片 -->
        <vue-qr class="right" :bgSrc="config.imagePath" :logoSrc="config.imagePath" :text="config.value"
                :size="config.size" :margin="0"/>
        <p class="marginBottom20">
            这是一个生成条形码的插件 --->> vue-barcode <<---
            <vue-barcode :value="barcode.value">
                无法生成条形码
            </vue-barcode>
        </p>
    </div>
</template>

<script>
    import vueQArt from 'vue-qart';
    import QRCode from 'qrcodejs2';
    import VueQr from 'vue-qr';
    import VueBarcode from 'vue-barcode';

    export default {
        name: 'qrCode',
        components: { vueQArt, QRCode, VueQr, VueBarcode },
        data () {
            return {
                // vueQArt 的配置
                downloadButton: false,
                config: {
                    value: 'https://baidu.com',
                    imagePath: '/static/logo.png',
                    filter: 'color',
                    size: 200
                },
                // 条形码配置
                barcode: {
                    value: '1234567890'
                },
                timer: null,
                qrCodeBox: null,
            };
        },
        methods: {
            qrCode () {
                let _t = this;
                let dateTime = new Date().getTime();
                if (document.getElementById('qrCode')) {
                    _t.qrCodeBox = null;
                    _t.qrCodeBox = new QRCode('qrCode', {
                        width: 232,  // 设置宽度
                        height: 232, // 设置高度
                        text: 'https://baidu.com' + '?time=' + dateTime
                    });
                }
            },
        },
        created () {
            let _t = this;
            _t.$nextTick(function () {
                _t.qrCode();

                _t.timer = setInterval(() => {
                    if (document.getElementById('qrCode')) {
                        document.getElementById('qrCode').innerHTML = '';
                    }
                    _t.qrCode();
                }, 10000);
            });
        },
        destroyed () {
            let _t = this;
            _t.timer = null;
            _t.qrCodeBox = null;
        }
    };
</script>

<style scoped>
    .right {
        margin-right: 50px;
    }
</style>
<style>
    #qrCode {
        display: inline-block;
    }

    #qrCode img {
        margin-bottom: 20px;
        display: inline-block !important;
        margin-right: 50px;
    }
</style>
