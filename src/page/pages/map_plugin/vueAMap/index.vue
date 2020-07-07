<template>
    <div class="indexBox">
        <el-amap ref="map"
                 vid="aMapDemo"
                 :center="formItem.center"
                 :zoom="formItem.zoom"
                 :plugin="formItem.plugins"
                 class="aMapDemo">
        </el-amap>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                formItem: {
                    zoom: 15,
                    center: [116.27441, 40.09909],
                    plugins: [{
                        pName: 'ToolBar', // 工具栏
                    }, {
                        pName: 'OverView', // 鹰眼
                        events: {
                            init(instance) {
                                console.log('OverView---', instance)
                            }
                        }
                    }, {
                        pName: 'Scale', // 比例尺
                        events: {
                            init(instance) {
                                console.log('Scale---', instance);
                            }
                        }
                    }]
                },
            }
        },
        methods: {},
        created() {
            navigator.geolocation.getCurrentPosition(function (res) {
                console.log('---获取成功---', res)
            }, function (err) {
                console.log('---获取失败---', err)
            });
        }
    }
</script>

<style scoped>
    .indexBox {
        width: 100%;
        height: 100%;
    }
</style>
