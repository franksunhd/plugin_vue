<template>
    <div class="jsCookiesBox">
        <div class="marginBottom20">
            <el-button type="primary" size="small" @click="set">设置cookies</el-button>
            <el-button type="warning" size="small" @click="get">获取cookies</el-button>
            <el-button type="danger" size="small" @click="del">删除cookies</el-button>
        </div>
        <div>{{msg}} {{cookies}}</div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data () {
            return {
                msg: '',
                cookies: ''
            };
        },
        methods: {
            // 设置cookies
            set () {
                let _t = this;
                _t.$cookies.setItem('name', 'frank sun');
                _t.msg = '设置成功';
            },
            // 获取cookies
            get () {
                let _t = this;
                _t.cookies = _t.$cookies.getItem('name');
                if (_t.cookies) {
                    _t.msg = '获取成功';
                } else {
                    _t.msg = '获取失败';
                }
            },
            // 删除cookies
            del () {
                let _t = this;
                _t.$cookies.removeItem('name');
                _t.cookies = '';
                _t.msg = '删除成功';
            }
        },
    };
</script>

<style scoped>

</style>
