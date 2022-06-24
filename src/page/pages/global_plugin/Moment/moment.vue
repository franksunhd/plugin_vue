<template>
    <div class="momentBox">
        <el-button size="small" type="primary" @click="setLanguage('zh-cn')">设置中文</el-button>
        <el-button size="small" type="primary" @click="setLanguage('en')">设置英文</el-button>

        <el-divider content-position="left">当前时间 {{nowTime}}</el-divider>
        <div>{{nowTime | formatDate}}</div>

        <el-divider content-position="left">转换结果</el-divider>
        <div>1. 当前星期: {{nowTime | currentWeek}}</div>
        <div>2. 当前 时:分: {{nowTime | format_LT}}</div>
        <div>3. 当前 时:分:秒: {{nowTime | format_LTS}}</div>
        <div>4. 当前 年/月/日: {{nowTime | format_L}}</div>
        <div>5. 当前 年/月/日: {{nowTime | format_l}}</div>
        <div>6. 当前 年/月/日: {{nowTime | format_LL}}</div>
        <div>6. 当前 年/月/日: {{nowTime | format_ll}}</div>
        <div>7. 当前 年/月/日/时/分: {{nowTime | format_LLL}}</div>
        <div>8. 当前 年/月/日/时/分: {{nowTime | format_lll}}</div>
        <div>9. 当前 年/月/日/星期/时/分: {{nowTime | format_LLLL}}</div>
        <div>10. 当前 年/月/日/星期/时/分: {{nowTime | format_llll}}</div>

        <el-divider content-position="left">相对时间</el-divider>
        <div>1. {{relative.startHour}}</div>
        <div>2. {{relative.endHour}}</div>

        <el-divider content-position="left">日历时间</el-divider>
        <div>1. 昨天 {{calendar.a}}</div>
        <div>2. 往前推2天 {{calendar.b}}</div>
        <div>3. 往前推3天 {{calendar.c}}</div>
        <div>4. 往前推6天(最高) {{calendar.d}}</div>
        <div>5. 往前推7天 {{calendar.e}}</div>
        <div>6. 明天 {{calendar.f}}</div>
        <div>7. 往后推2天 {{calendar.g}}</div>
        <div>8. 往后推3天 {{calendar.h}}</div>
        <div>9. 往后推6天(最高) {{calendar.i}}</div>
        <div>10. 往后推7天 {{calendar.j}}</div>
    </div>
</template>

<script>
    import moment from "moment";

    export default {
        name: "moment",
        data() {
            return {
                // 当前时间 时间戳
                nowTime: null,
                // 定时器
                timer: null,
                // 相对时间
                relative: {
                    startHour: null,
                    endHour: null
                },
                // 日历时间
                calendar: {
                    a: null,
                    b: null,
                    c: null,
                    d: null,
                    e: null,
                    f: null,
                    g: null,
                    h: null,
                    i: null,
                    j: null
                }
            };
        },
        methods: {
            // 设置语言
            setLanguage(val) {
                if (val !== undefined && val !== null && val !== "") {
                    moment.locale(val);
                }
            }
        },
        created() {
            let _t = this;
            _t.timer = setInterval(function () {
                // 实时更新现在时间
                _t.nowTime = new Date().getTime();

                // 计算相对时间
                _t.relative.startHour = moment().startOf("hour").fromNow();
                _t.relative.endHour = moment().endOf("hour").fromNow();

                // 日历时间
                _t.calendar.a = moment().subtract(1, "days").calendar();  // 昨天10:53
                _t.calendar.b = moment().subtract(2, "days").calendar();  // 往前推2天 10:53
                _t.calendar.c = moment().subtract(3, "days").calendar();  // 往前推3天 10:53
                _t.calendar.d = moment().subtract(6, "days").calendar();  // 往前推6天 10:53
                _t.calendar.e = moment().subtract(7, "days").calendar();  // 往前推7天 10:53
                _t.calendar.f = moment().add(1, "days").calendar();       // 明天10:53
                _t.calendar.g = moment().add(2, "days").calendar();       // 往后推2天 10:53
                _t.calendar.h = moment().add(3, "days").calendar();       // 往后推3天 10:53
                _t.calendar.i = moment().add(6, "days").calendar();       // 往后推6天 10:53
                _t.calendar.j = moment().add(7, "days").calendar();       // 往后推7天 10:53
            }, 1000);
        },
        destroyed() {
            let _t = this;
            _t.timer = null;
        }
    };
</script>

<style scoped>
    .momentBox > div {
        line-height: 30px;
    }
</style>
