<template>
    <div>
        <div class="title">花费合计：{{sumMoney}}</div>
        <div class="titleBox">
            <div class="fixed height">日期</div>
            <div class="height">南邵--科学园(地铁)</div>
            <div class="height">科学园--永丰(公交)</div>
            <div class="height">永丰--温阳路(地铁)</div>
            <div class="height">温阳路--永丰(地铁)</div>
            <div class="height">永丰--科学园(公交)</div>
            <div class="height">科学园--南邵(地铁)</div>
        </div>
        <div class="titleBox">
            <div class="fixed">
                <div class="height" v-for="(item,index) in monthDay" :key="index">{{item}}</div>
            </div>
            <div class="height" v-for="(item,index) in dataList" :key="index">
                {{item.money}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pageThree",
        data() {
            return {
                sumMoney: 0,
                dataList: [],
                monthDay: []
            };
        },
        created() {
            let monthDay = ["2023-03-01", "2023-03-02", "2023-03-03",
                "2023-03-06", "2023-03-07", "2023-03-08", "2023-03-09", "2023-03-10",
                "2023-03-13", "2023-03-14", "2023-03-15", "2023-03-16", "2023-03-17",
                "2023-03-20", "2023-03-21", "2023-03-22", "2023-03-23", "2023-03-24",
                "2023-03-27", "2023-03-28", "2023-03-29", "2023-03-30", "2023-03-31"];
            this.monthDay = monthDay;
            let dataList = [];
            let sumMoney = 0;
            monthDay.forEach((item) => {
                dataList.push({date: item, money: 0, status: "dt_1"}); // 南邵--科学园(地铁)
                dataList.push({date: item, money: 1.34, status: "gj"}); // 科学园--永丰(公交)
                dataList.push({date: item, money: 0, status: "dt_2"}); // 永丰--温阳路(地铁)
                dataList.push({date: item, money: 0, status: "dt_2"}); // 温阳路--永丰(地铁)
                dataList.push({date: item, money: 1.34, status: "gj"}); // 永丰--科学园(公交)
                dataList.push({date: item, money: 0, status: "dt_1"}); // 科学园--南邵(地铁)
            });
            let initMoney_1 = 5, initMoney_2 = 4, sumGj = 0;
            dataList.forEach((item) => {
                if (item.status === "dt_1" || item.status === "dt_2") {
                    if (sumMoney < 100) {
                        item.money = item.status === "dt_1" ? initMoney_1 : initMoney_2;
                    } else if (sumMoney >= 100 && sumMoney < 150) {
                        item.money = ((item.status === "dt_1" ? initMoney_1 : initMoney_2) * 0.8);
                    } else {
                        item.money = ((item.status === "dt_1" ? initMoney_1 : initMoney_2) * 0.5);
                    }
                    sumMoney += item.money;
                } else {
                    sumGj += item.money;
                }
            });
            sumMoney += sumGj;
            sumMoney = Math.floor(sumMoney * 100) / 100;
            this.sumMoney = sumMoney;
            this.dataList = dataList;
        }
    };
</script>

<style scoped>
    .title {
        font-size: 20px;
        text-align: center;
        margin: 0 auto;
        display: inline-block;
    }

    .titleBox {
        width: 1500px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 auto;
        position: relative;
    }

    .titleBox div.height {
        width: 250px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #333;
        font-size: 20px;
        text-align: center;
    }

    .fixed {
        position: absolute;
        top: 0;
        left: -250px;
        z-index: 1;
    }
</style>