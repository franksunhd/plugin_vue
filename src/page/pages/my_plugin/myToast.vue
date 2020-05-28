<template>
    <div class="myButtonBox">
        <p class="marginBottom20">
            这是一个造插件的页面.
        </p>
        <div class="marginBottom20">
            <el-button type="success" size="small" @click="showToast('S')">显示Toast(成功)</el-button>
            <el-button type="danger" size="small" @click="showToast('F')">显示Toast(失败)</el-button>
        </div>
        <childToast/>
        <div class="marginBottom20">
            <div>值为:</div>
            <ul id="toastNum"></ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'myToast',
        components: {
            childToast: () => import ('./childToast')
        },
        data () {
            return {
                timer: null,
            };
        },
        methods: {
            showToast (item) {
                let _t = this;
                _t.$toast.show(item, '提示信息');
            }
        },
        created () {
            let _t = this;
            let num = 0;
            _t.$bus.on('getMenu', (item) => {
                if (item) {
                    num++;
                    console.log(item, '----');
                    let li = document.createElement('li');
                    li.innerHTML = `<span> ${num}</span>`;
                    document.getElementById('toastNum').appendChild(li);
                    let li_new = document.createElement('li');
                    li_new.innerHTML = `<hr>`;
                    document.getElementById('toastNum').appendChild(li_new);
                }
            });
        },
        destroyed () {
            let _t = this;
            _t.$bus.off('getMenu');
        }
    };
</script>

<style>
    #toastNum li {
        line-height: 30px;
    }
</style>
