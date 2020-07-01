<template>
    <div class="marginBottom20">
        <div class="marginBottom20">
            这是一个关于省市县三级联动的插件,<a style="color: #229399;font-weight: bold;" href="https://distpicker.unie.fun/"
                                target="_blank">API文档</a>,效果如下:
        </div>
        <div class="marginBottom20">
            <div class="marginBottom20">
                <el-button type="primary" size="small" @click="isMobile = !isMobile">
                    {{isMobile ? '切换为PC端' : '切换为移动端'}}
                </el-button>
                <el-button type="primary" size="small" @click="provinceDisabled = !provinceDisabled">PC端禁用省</el-button>
                <el-button type="primary" size="small" @click="cityDisabled = !cityDisabled">PC端禁用市</el-button>
                <el-button type="primary" size="small" @click="areaDisabled = !areaDisabled">PC端禁用区</el-button>
                <el-button type="primary" size="small" @click="hideArea = !hideArea">是否隐藏区</el-button>
                <el-button type="primary" size="small" @click="onlyProvince = !onlyProvince">是否只显示省</el-button>
            </div>
            <div class="marginBottom20">
                <v-dist-picker
                    :type="isMobile ? 'mobile' : 'select'"
                    class="distPicker"
                    :province-disabled="provinceDisabled"
                    :city-disabled="cityDisabled"
                    :area-disabled="areaDisabled"
                    :hide-area="hideArea"
                    :placeholders="placeholders"
                    :only-province="onlyProvince"
                    @province="getProvince"
                    @city="getCity"
                    @area="getArea"/>
            </div>
            <div class="marginBottom20">{{placeholders.province}}：{{areaItem.province}}</div>
            <div class="marginBottom20">{{placeholders.city}}：{{areaItem.city}}</div>
            <div class="marginBottom20">{{placeholders.area}}：{{areaItem.area}}</div>
        </div>
    </div>
</template>

<script>
    import vDistPicker from 'v-distpicker';

    export default {
        name: "distPicker",
        components: {vDistPicker},
        data() {
            return {
                placeholders: {
                    province: '省份',
                    city: '城市',
                    area: '地区',
                },
                isMobile: false,
                provinceDisabled: false,
                cityDisabled: false,
                areaDisabled: false,
                hideArea: false,
                onlyProvince: false,
                areaItem: {
                    province: '', // 省
                    city: '', // 市
                    area: '', // 区
                }
            }
        },
        methods: {
            // 获取省的数据
            getProvince(val) {
                let _t = this;
                _t.areaItem.province = val.code !== undefined ? val.value + '(' + val.code + ')' : '';
            },
            // 获取市的数据
            getCity(val) {
                let _t = this;
                _t.areaItem.city = val.code !== undefined ? val.value + '(' + val.code + ')' : '';
            },
            // 获取区的数据
            getArea(val) {
                let _t = this;
                _t.areaItem.area = val.code !== undefined ? val.value + '(' + val.code + ')' : '';
            }
        }
    }
</script>

<style>
    .distPicker select {
        font-size: 16px;
        padding: 10px 20px !important;
        height: auto;
        display: inline-block;
    }

    .distPicker select option {
        font-size: 26px;
    }
</style>
