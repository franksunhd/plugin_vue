<template>
    <div>
        <div class="marginBottom20">
            这里是关于svg图片显示的组件.
        </div>
        <div class="marginBottom20">
            <colorPicker class="svgColorBtn" v-model="color" @change="changeColor"/>
        </div>
        <template v-for="item in svgList">
            <v-svg-icon class="svgIcon" :name="item" :scale="6"/>
        </template>
    </div>
</template>

<script>
    import vSvgIcon from 'vue-svg-icon/Icon';

    export default {
        name: "svgIcon",
        components: {vSvgIcon},
        data() {
            return {
                color: '#000',
                svgList: [
                    'artist',
                    'common',
                    'iconActivity',
                    'iconAgreement',
                    'iconArtExpeirence',
                    'iconFlashScreen',
                    'iconJurisdiction',
                    'iconMemberOder',
                    'iconRole',
                    'Menu',
                    'moreVip',
                    'notice',
                    'order',
                    'resources',
                    'rights',
                    'setting',
                    'team',
                    'teamData',
                    'user',
                    'vip'
                ]
            }
        },
        methods: {
            // 改变颜色
            changeColor() {
                let _t = this;
                let svgIcon = document.getElementsByClassName('svgIcon');
                if (svgIcon !== undefined && svgIcon !== null) {
                    for (let i = 0; i < svgIcon.length; i++) {
                        if (svgIcon[i].childNodes !== undefined && svgIcon[i].childNodes !== null) {
                            for (let j = 0; j < svgIcon[i].childNodes.length; j++) {
                                svgIcon[i].childNodes[j].attributes.fill.value = _t.color;
                            }
                        }
                    }
                }
            },
        },
        mounted() {
            let _t = this;
            _t.changeColor();
        }
    }
</script>

<style>
    .svgIcon {
        margin: 0 30px 30px 0;
    }

    .svgColorBtn,
    .svgColorBtn .colorBtn {
        width: 100px !important;
        height: 30px !important;
    }
</style>
