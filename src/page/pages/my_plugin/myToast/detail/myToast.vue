<template>
    <div v-if="isShowToast" class="toastStyleBox">
        <div class="toastStyle">
            <div v-if="showType === 'S'" class="toastImg">
                <i class="el-icon-success successIcon"></i>
                <span class="toastText">{{ msg }}</span>
            </div>
            <div v-if="showType === 'F'" class="toastImg">
                <i class="el-icon-error errorIcon"></i>
                <span class="toastText">{{ msg }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isShowToast: {
                type: Boolean,
                default: false
            },
            showType: {
                type: String,
                default: 'S'
            },
            msg: {
                type: String,
                default: ''
            }
        }
    };
</script>
<style>
    .toastStyleBox {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2000;
    }

    .toastStyle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 50%);
        width: auto;
        padding: 10px;
        display: inline-block;
        background-color: #000;
        color: #fff;
        z-index: 1000;
        border-radius: 4px;
    }

    .toastText {
        padding-left: 10px;
    }

    .successIcon {
        color: #008200;
    }

    .errorIcon {
        color: #f43838;
    }
</style>
