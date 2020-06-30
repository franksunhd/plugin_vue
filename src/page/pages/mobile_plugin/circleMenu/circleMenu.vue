<template>
    <div>
        <p class="marginBottom20">
            这是一个圆形菜单组件
        </p>
        <el-table border :data="tableData">
            <el-table-column prop="name" width="150px" label="名称"/>
            <el-table-column prop="type" width="150px" label="类型"/>
            <el-table-column prop="default" label="默认值"/>
            <el-table-column prop="description" label="说明"/>
        </el-table>
        <circleMenuList id="menu1" type="right" :number="4" animate="animated" circle btn :colors="colorsList">
            <a slot="item_1" @click="clickItem(1,1)" class="el-icon-circle-plus-outline fontIcon"></a>
            <a slot="item_2" @click="clickItem(1,2)" class="el-icon-picture-outline fontIcon"></a>
            <a slot="item_3" @click="clickItem(1,3)" class="el-icon-folder-add fontIcon"></a>
            <a slot="item_4" @click="clickItem(1,4)" class="el-icon-bell fontIcon"></a>
        </circleMenuList>
        <circleMenuList id="menu2" type="top" :number="3" btn :colors="colorsList">
            <a slot="item_1" @click="clickItem(2,1)" class="el-icon-circle-plus-outline fontIcon"></a>
            <a slot="item_2" @click="clickItem(2,2)" class="el-icon-picture-outline fontIcon"></a>
            <a slot="item_3" @click="clickItem(2,3)" class="el-icon-folder-add fontIcon"></a>
        </circleMenuList>
    </div>
</template>

<script>
    import circleMenuList from 'vue-circle-menu';

    export default {
        name: "circleMenu",
        components: {circleMenuList},
        data() {
            return {
                // 颜色配置
                colorsList: ['#F56C6C', '#E6A23C', '#67C23A', '#409EFF', '#909399'],
                tableData: [
                    {
                        name: 'type',
                        type: 'String',
                        default: '-',
                        description: '菜单的类型，支持top,bottom,left,right,middle,middle-around'
                    },
                    {
                        name: 'number',
                        type: 'Number',
                        default: '-',
                        description: '菜单项的数量，支持2-5个'
                    },
                    {
                        name: 'animate',
                        type: 'String',
                        default: '自定义的过渡动画',
                        description: ''
                    },
                    {
                        name: 'mask',
                        type: 'String',
                        default: '-',
                        description: '是否显示遮罩，以及遮罩的颜色'
                    },
                    {
                        name: 'circle',
                        type: 'Boolean',
                        default: '-',
                        description: '菜单按钮是矩形或者圆形'
                    },
                    {
                        name: 'btn',
                        type: 'Boolean',
                        default: '-',
                        description: '菜单按钮是否显示按钮样式'
                    },
                    {
                        name: 'colors',
                        type: 'Array',
                        default: '-',
                        description: '每个菜单按钮的颜色'
                    }
                ]
            }
        },
        methods: {
            clickItem(type, item) {
                let typeStr = type === 1 ? '圆形' : '方形';
                console.log(typeStr + item)
            }
        }
    }
</script>

<style scoped>
    #menu1 {
        position: fixed;
        bottom: 50px;
        right: 100px;
    }


    #menu2 {
        position: fixed;
        bottom: 50px;
        right: 20px;
    }

    .fontIcon {
        font-size: 20px;
        color: #fff;
        display: inline-block;
        width: 100%;
        height: 100%;
        line-height: inherit !important;
    }
</style>
