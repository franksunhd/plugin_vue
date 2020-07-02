<template>
    <div>
        <div class="marginBottom20">
            这里是关于svg图片显示的组件.
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
        }
    }
</script>

<style scoped>
    .svgIcon {
        margin: 0 30px 30px 0;
    }
</style>
