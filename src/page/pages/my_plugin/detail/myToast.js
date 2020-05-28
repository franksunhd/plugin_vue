import MyToast from './myToast.vue';

let $vm;

export default {
    // 调用暴露的install函数
    install (Vue) {
        //变量为空执行
        if (!$vm) {
            // 调用Vue的extend方法生成一个构造器myToastConstructor继承 MyToast
            const myToastConstructor = Vue.extend(MyToast);

            // 构造器实例化
            $vm = new myToastConstructor({
                // 在构造器内部调用document生成一个div元素用来存放MyToast.vue中写好的模板template
                el: document.createElement('div')
            });

            // 调用document将构造器和生成的div元素添加到DOM中使其能够被渲染
            document.body.appendChild($vm.$el);
        }

        // 首先赋值MyToast.vue中的，也就是构造器继承的是否显示toast组件的字段isShowToast 为false
        $vm.isShowToast = false;

        // 声明toast并为其声明两个方法，显示和隐藏toast
        let toast = {
            show (showType, msg) {
                $vm.isShowToast = true;
                $vm.showType = showType;
                $vm.msg = msg;

                let timer = setTimeout(function () {
                    // 定义隐藏toast的方法
                    $vm.isShowToast = false;
                    timer = null;
                },2000)
            },
        };

        // 判断Vue中是否有toast属性，没有就将上面定义好的toast赋值给Vue的属性
        if (!Vue.toast) {
            Vue.$toast = toast;
        }

        //通过调用添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现全局注册
        Vue.prototype.$toast = Vue.$toast;
    }
};
