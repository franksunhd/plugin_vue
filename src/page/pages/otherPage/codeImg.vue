<template>
    <div>
        <div style="margin-bottom: 10px;font-size: 20px;">选择链接：</div>
        <div>
            <el-select v-model="testXC" filterable size="medium" style="width: 100%;">
                <el-option-group v-for="(item,index) in testXCList" :key="index" :label="item.label">
                    <el-option v-for="(val,i) in item.children" :key="i" :label="val.label"
                               :value="val.value"></el-option>
                </el-option-group>
            </el-select>
            <el-button style="margin-top: 10px;" type="primary" @click="qrCode">生成二维码</el-button>
        </div>
        <div style="margin-top: 20px;">
            <div id="qrCode" ref="qrCode"></div>
        </div>
    </div>
</template>

<script>
    import QRCode from "qrcodejs2";

    export default {
        name: "codeImg",
        components: {QRCode},
        data() {
            return {
                testXC: "",
                testXCList: [
                    // 个人养老险
                    {
                        label: "个人养老险",
                        children: [
                            {
                                label: "个人养老险(1575)--信创环境",
                                value: "http://o2stest.e-chinalife.com:7008/o2s/o2s-longterm-web/homeIndex?productCode=P000000101575&linkCode=0001010400230000419&uuid=BE57D045ECB044ACA08BD6331F3F6E05&sourceEcno=&sourceOpenid=&ecno=0304865465467934&openid=1998220304865465467&outerNet=1&ecssInfo=#wechat_redirect",
                                text: "个养信创"
                            },
                            {
                                label: "个人养老险(1575)--TEST环境",
                                value: "http://o2stest.e-chinalife.com:7007/o2s/o2s-longterm-web/homeIndex?productCode=P000000101575&linkCode=0001006500130000088&uuid=BE57D045ECB044ACA08BD6331F3F6E05&sourceEcno=&sourceOpenid=&ecno=0304865465467934&openid=1998220304865465461&outerNet=1&ecssInfo=#wechat_redirect",
                                text: "个养TEST"
                            }
                        ]
                    },
                    // 3280 养老险
                    {
                        label: "3280养老险",
                        children: [
                            {
                                label: "3280养老险--信创环境",
                                value: "http://o2stest.e-chinalife.com:7008/o2s/o2s-longterm-web/homeIndex?productCode=P000000063280&linkCode=0001010400230000419&uuid=BE57D045ECB044ACA08BD6331F3F6E05&sourceEcno=&sourceOpenid=&ecno=0304865465467934&openid=0000001105&outerNet=1&ecssInfo=#wechat_redirect",
                                text: "3280养老险--信创环境"
                            },
                            {
                                label: "3280养老险--TEST环境",
                                value: "http://o2stest.e-chinalife.com:7007/o2s/o2s-longterm-web/homeIndex?productCode=P000000063280&linkCode=0001006500130000088&uuid=BE57D045ECB044ACA08BD6331F3F6E05&sourceEcno=&sourceOpenid=&ecno=0304865465467934&openid=0000001105&outerNet=1&ecssInfo=#wechat_redirect",
                                text: "3280养老险--TEST环境"
                            }
                        ]
                    },
                    // 深圳医保
                    {
                        label: "深圳医保",
                        children: [
                            {
                                label: "深圳医保--信创环境",
                                value: "http://o2stest.e-chinalife.com:7008/o2s/o2s-longterm-web/homePage?signature=4e45bef75a4794c5cf49decdae424d84b3220581c8f3fa63f503ee5fb3acc3ddcde8dc9c31fbbec1a031ac87a2f309c782930e7d2b8f971dcfd0ee96c43cfa34b6386b71135231c8117529f4ad80671f36004ebb933eae0e195c2cf9f256830cf0fb4c1d02e2808e82930e7d2b8f971d99d80ad92f4d51cd703dcd2fbe289d2d8ec276767f831d4d52741b0f30af99e1bb85ca6bcfe7fc377c57e6fd9ab572c891db916076b69fdb40e4441887af15b6b269e42d253b85e701dd46acdee428376f1026f81281675dcb3e98ad5ad009a24a3c3288b5f7d78836004ebb933eae0e5cc0cfab3d04d4a857d660aed61dd3b3d3c8081248a73e4c0515e1907a544ff44a3c3288b5f7d7885812608d59ef2222397dfac70535090f6f7f72135ca14dc61ef993a451f178d2e26deb787e05ae8ddd37bbd926087807cb563d7752b7001a7fa6ce14c4e4ea111bf3f70f6afd84aa4c356e7d3b290be3",
                                text: "深圳医保--信创环境"
                            },
                            {
                                label: "深圳医保--Test环境",
                                value: "http://o2stest.e-chinalife.com:7007/o2s/o2s-longterm-web/homePage?signature=4e45bef75a4794c5cf49decdae424d84b3220581c8f3fa63f503ee5fb3acc3ddcde8dc9c31fbbec1a031ac87a2f309c782930e7d2b8f971dcfd0ee96c43cfa34b6386b71135231c8117529f4ad80671f36004ebb933eae0e195c2cf9f256830cf0fb4c1d02e2808e82930e7d2b8f971d99d80ad92f4d51cd703dcd2fbe289d2d8ec276767f831d4d52741b0f30af99e1bb85ca6bcfe7fc377c57e6fd9ab572c891db916076b69fdb40e4441887af15b6b269e42d253b85e701dd46acdee428376f1026f81281675dcb3e98ad5ad009a24a3c3288b5f7d78836004ebb933eae0e5cc0cfab3d04d4a857d660aed61dd3b3d3c8081248a73e4c0515e1907a544ff44a3c3288b5f7d7885812608d59ef2222397dfac70535090f6f7f72135ca14dc61ef993a451f178d2e26deb787e05ae8ddd37bbd926087807cb563d7752b7001a7fa6ce14c4e4ea111bf3f70f6afd84aa4c356e7d3b290be3",
                                text: "深圳医保--Test环境"
                            },
                            {
                                label: "深圳医保--Blue环境",
                                value: "http://o2stest.e-chinalife.com:7018/o2s/o2s-longterm-web/homePage?signature=4e45bef75a4794c5cf49decdae424d84b3220581c8f3fa63f503ee5fb3acc3ddcde8dc9c31fbbec1a031ac87a2f309c782930e7d2b8f971dcfd0ee96c43cfa34b6386b71135231c8117529f4ad80671f36004ebb933eae0e195c2cf9f256830cf0fb4c1d02e2808e82930e7d2b8f971d99d80ad92f4d51cd703dcd2fbe289d2d8ec276767f831d4d52741b0f30af99e1bb85ca6bcfe7fc377c57e6fd9ab572c891db916076b69fdb40e4441887af15b6b269e42d253b85e701dd46acdee428376f1026f81281675dcb3e98ad5ad009a24a3c3288b5f7d78836004ebb933eae0e5cc0cfab3d04d4a857d660aed61dd3b3d3c8081248a73e4c0515e1907a544ff44a3c3288b5f7d7885812608d59ef2222397dfac70535090f6f7f72135ca14dc61ef993a451f178d2e26deb787e05ae8ddd37bbd926087807cb563d7752b7001a7fa6ce14c4e4ea111bf3f70f6afd84aa4c356e7d3b290be3",
                                text: "深圳医保--Blue"
                            }
                        ]
                    },
                    // 少儿年金-SS2
                    {
                        label: "少儿年金",
                        children: [
                            {
                                label: "少儿年金(SS2)--信创环境",
                                value: "http://o2stest.e-chinalife.com:7008/o2s/o2s-longterm-web/homeIndex?productCode=P000000101663&linkCode=0001010400230000419&uuid=32A0D648219B47EDACD7B3FF3F4215D3&sourceEcno=&sourceOpenid=&ecno=0000001103&openid=0000001105&outerNet=1&ecssInfo=#wechat_redirect",
                                text: "少儿年金(SS2)--信创环境"
                            },
                            {
                                label: "少儿年金(SS2)--TEST环境",
                                value: "http://o2stest.e-chinalife.com:7007/o2s/o2s-longterm-web/homeIndex?productCode=P000000102002&linkCode=0001006500130000088&uuid=32A0D648219B47EDACD7B3FF3F4215D3&sourceEcno=&sourceOpenid=&ecno=0000001103&openid=0000001105&outerNet=1&ecssInfo=#wechat_redirect",
                                text: "少儿年金(SS2)--TEST环境"
                            },
                            {
                                label: "少儿年金(SS2)--Blue环境",
                                value: "http://o2stest.e-chinalife.com:7018/o2s/o2s-longterm-web/homeIndex?productCode=P000000101951&linkCode=0001000200010000002&uuid=646F124665A94EC9BB1974D7BFB93EAD&sourceEcno=&sourceOpenid=&ecno=123456789012&openid=123456789012&outerNet=1&ecssInfo=",
                                text: "少儿年金(SS2)--Blue环境"
                            },
                        ]
                    },
                    // 守护星
                    {
                        label: "守护星",
                        children: [
                            {
                                label: "守护星--TEST环境",
                                value: "http://o2stest.e-chinalife.com:7007/o2s/o2s-longterm-web/homeIndex?productCode=P000000101493&linkCode=0001006500130000088&uuid=32A0D648219B47EDACD7B3FF3F4215D3&sourceEcno=&sourceOpenid=&ecno=0000001103&openid=0000001105&outerNet=1&ecssInfo=#wechat_redirect",
                                text: "少儿年金(SS2)--信创环境"
                            },
                        ]
                    },
                    // 数字看板
                    {
                        label: "数字看板",
                        children: [
                            {
                                label: "数字看板(日报)--Test",
                                value: "http://o2stest.e-chinalife.com:7007/o2s/o2s-iums-web/compQueryMgt/excBusinessBoard/mobile/day?code=&queryFrom=11&currentDate=2023-01-01",
                                text: "数字看板(日报)--Test"
                            },
                            {
                                label: "数字看板(月报)--Test",
                                value: "http://o2stest.e-chinalife.com:7007/o2s/o2s-iums-web/compQueryMgt/excBusinessBoard/mobile/month?code=&queryFrom=11&currentDate=2023-01",
                                text: "数字看板(月报)--Test"
                            },
                            {
                                label: "数字看板(年报)--Test",
                                value: "http://o2stest.e-chinalife.com:7007/o2s/o2s-iums-web/compQueryMgt/excBusinessBoard/mobile/year?code=&queryFrom=11",
                                text: "数字看板(年报)--Test"
                            },
                            {
                                label: "数字看板(日报)--生产",
                                value: "https://group.e-chinalife.com/o2s/o2s-iums-web/compQueryMgt/excBusinessBoard/mobile/day?code=&queryFrom=11&currentDate=2023-01-01",
                                text: "数字看板(日报)--Test"
                            },
                            {
                                label: "数字看板(月报)--生产",
                                value: "https://group.e-chinalife.com/o2s/o2s-iums-web/compQueryMgt/excBusinessBoard/mobile/month?code=&queryFrom=11&currentDate=2023-01",
                                text: "数字看板(月报)--Test"
                            },
                            {
                                label: "数字看板(年报)--生产",
                                value: "https://group.e-chinalife.com/o2s/o2s-iums-web/compQueryMgt/excBusinessBoard/mobile/year?code=&queryFrom=11",
                                text: "数字看板(年报)--Test"
                            }
                        ]
                    },
                    {
                        label: "被保人分享U25",
                        children: [
                            {
                                label: "被保人分享U25-信创",
                                value: "http://o2stest.e-chinalife.com:7008/o2s/o2s-longterm-web/sharedCertification?proposalNo=1190A23000000805&openid=0000001105",
                                text: "被保人分享U25-信创"
                            }
                        ]
                    },
                    {
                        label: "个养专区",
                        children: [
                            {
                                label: "个养专区--test",
                                value: "http://o2stest.e-chinalife.com:7007/o2s/o2s-mall-web/pages/endowmentSection/Index?linkCode=0001004000080000051"
                            },
                            {
                                label: "个养专区--testWC",
                                value: "http://o2stest.e-chinalife.com:7008/o2s/o2s-mall-web/pages/endowmentSection/Index?linkCode=0001013600241000509"
                            },
                            {
                                label: "个养专区--Blue",
                                value: "http://o2stest.e-chinalife.com:7018/o2s/o2s-mall-web/pages/endowmentSection/Index?linkCode=0001000100020000034"
                            }
                        ]
                    },
                    {
                        label: "订单列表",
                        children: [
                            {
                                label: "订单列表--blue",
                                value: "http://o2stest.e-chinalife.com:7018/o2s/o2s-longterm-web/payRecord?appOrderEntrance=true&linkCode=0001002900031000045"
                            }
                        ]
                    },
                    {
                        label: "商城首页",
                        children: [
                            {
                                label: "商城首页--TEST",
                                value: "http://o2stest.e-chinalife.com:7007/o2s/o2s-mall-web/pages/homeMgt/Index?linkCode=0001004000080000051"
                            }
                        ]
                    },
                ],
                qrCodeBox: null
            };
        },
        methods: {
            qrCode() {
                let _t = this;
                if (document.getElementById("qrCode") && !!_t.testXC) {
                    _t.qrCodeBox = null;
                    document.getElementById("qrCode").innerHTML = "";
                    _t.qrCodeBox = new QRCode("qrCode", {
                        width: 300,  // 设置宽度
                        height: 300, // 设置高度
                        text: _t.testXC
                    });
                } else {
                    _t.$message({
                        type: "warning",
                        message: "请选择链接"
                    });
                }
            }
        },
        created() {
            let _this = this;
            _this.testXC = _this.testXCList[0].children[0].value;
            _this.$nextTick(() => {
                _this.qrCode();
            });
        },
        destroyed() {
            let _t = this;
            _t.qrCodeBox = null;
        }
    };
</script>

<style scoped>

</style>