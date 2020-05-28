<template>
    <div>
        <el-button size="small" type="primary" @click="drawImg">绘图</el-button>

        <el-divider content-position="left">画布区域</el-divider>
        <!-- 画布区域 -->
        <div class="drawImgBox" ref="drawImg">
            <ul class="a">
                <li>选项1</li>
                <li>选项2</li>
                <li>选项3</li>
                <li>选项4</li>
                <li>选项5</li>
                <li>选项6</li>
                <li>选项7</li>
                <li>选项8</li>
            </ul>
        </div>
        <el-divider content-position="left">显示区域</el-divider>
        <img :src="imgUrl" alt="">
    </div>
</template>

<script>
	import html2canvas from 'html2canvas';

	export default {
		name: 'htmlToCanvas',
		data () {
			return {
				imgUrl: '', // 图片地址
			};
		},
		methods: {
			// 点击绘图按钮
			drawImg () {
				let _t = this;
				html2canvas(_t.$refs.drawImg, {
					logging: true, // 启用日志记录以进行调试 (发现加上对去白边有帮助)
					allowTaint: true, // 否允许跨源图像污染画布
					backgroundColor: null, // 解决生成的图片有白边
					useCORS: true // 如果截图的内容里有图片,解决文件跨域问题
				}).then((canvas) => {
					_t.imgUrl = canvas.toDataURL('image/png');
				});
			},
		}
	};
</script>

<style scoped>
    .drawImgBox {
        background-color: #fff;
    }

    .drawImgBox .a {
        line-height: 30px;
        text-align: center;
        color: #229399;
    }
</style>
