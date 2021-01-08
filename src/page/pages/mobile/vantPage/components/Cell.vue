<template>
    <div>
        <div class="title">基础用法</div>
        <van-cell-group>
            <van-cell title="单元格" value="内容"/>
            <van-cell title="单元格" value="内容" label="描述信息"/>
        </van-cell-group>


        <div class="title">单元格大小</div>
        <van-cell title="单元格" value="内容" size="large"/>
        <van-cell title="单元格" value="内容" size="large" label="描述信息"/>


        <div class="title">展示图标</div>
        <van-cell title="单元格" icon="location-o"/>


        <div class="title">只设置 value</div>
        <van-cell value="内容"/>


        <div class="title">展示箭头</div>
        <van-cell title="单元格" is-link/>
        <van-cell title="单元格" is-link value="内容"/>
        <van-cell title="单元格" is-link arrow-direction="down" value="内容"/>


        <div class="title">页面导航</div>
        <van-cell title="URL 跳转" is-link url="/vant/mobile.html"/>
        <van-cell title="路由跳转" is-link to="index"/>


        <div class="title">分组标题</div>
        <van-cell-group title="分组1">
            <van-cell title="单元格" value="内容"/>
        </van-cell-group>
        <van-cell-group title="分组2">
            <van-cell title="单元格" value="内容"/>
        </van-cell-group>

        <div class="title">使用插槽</div>
        <van-cell value="内容" is-link>
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
                <span class="custom-title">单元格</span>
                <van-tag type="danger">标签</van-tag>
            </template>
        </van-cell>

        <van-cell title="单元格" icon="shop-o">
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <template #right-icon>
                <van-icon name="search" class="search-icon"/>
            </template>
        </van-cell>

        <div class="title">垂直居中</div>
        <van-cell center title="单元格" value="内容" label="描述信息"/>
    </div>
</template>

<script>
    export default {
        name: "Cell"
    };
</script>

<style scoped>
    .custom-title {
        margin-right: 4px;
        vertical-align: middle;
    }

    .search-icon {
        font-size: 16px;
        line-height: inherit;
    }
</style>
