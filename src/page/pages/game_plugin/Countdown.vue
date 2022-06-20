<template>
    <div>
        <ul>
            <li> 平均楼层均价为--- {{slotPrice | formatNumToFixed}}元/平</li>
            <li> B户型平均楼层总价为--- {{slotPrice * bNum - 30000 | formatNumToFixed}}元</li>
            <li> C户型平均楼层总价为--- {{slotPrice * cNum - 30000 | formatNumToFixed}}元</li>
            <li> 120户型平均楼层总价为--- {{slotPrice * num_1 - 30000 | formatNumToFixed}}元</li>
        </ul>
        <el-table :data="list" border stripe height="650">
            <el-table-column label="层数" prop="index" header-align="center" align="center" width="100"/>
            <el-table-column label="楼层单位面积价格" header-align="center" align="center">
                <template slot-scope="scope">
                    <span :class="scope.row.price > slotPrice ? 'active' : 'noActive'">
                        {{scope.row.price}} 元/平
                    </span>
                </template>
            </el-table-column>
            <el-table-column label="B户型总价(少3万)" header-align="center" align="center">
                <template slot-scope="scope">
                    <span :class="scope.row.price * bNum - 30000 > 550000 ? 'active' : 'noActive'">
                        {{scope.row.price * bNum - 30000 | formatNumToFixed}} 元
                    </span>
                    <span>--折合{{(scope.row.price * bNum - 30000)/ bNum | formatNumToFixed}} 元/平</span>
                </template>
            </el-table-column>
            <el-table-column label="C户型总价(少3万)" header-align="center" align="center">
                <template slot-scope="scope">
                    <span :class="scope.row.price * cNum - 30000 > 550000 ? 'active' : 'noActive'">
                        {{scope.row.price * cNum - 30000 | formatNumToFixed}} 元
                    </span>
                    <span>--折合{{(scope.row.price * cNum - 30000)/ cNum | formatNumToFixed}} 元/平</span>
                </template>
            </el-table-column>
            <el-table-column label="120平户型总价(少3万)" header-align="center" align="center">
                <template slot-scope="scope">
                    <span :class="scope.row.price * num_1 - 30000 > 550000 ? 'active' : 'noActive'">
                        {{scope.row.price * num_1 - 30000 | formatNumToFixed}} 元
                    </span>
                    <span>--折合{{(scope.row.price * num_1 - 30000) / num_1 | formatNumToFixed}} 元/平</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "Countdown",
        data() {
            return {
                list: [], // 列表
                slotPrice: "", // 平均楼层均价
                cNum: 121.71, // C户型面积
                bNum: 100.56, // B户型面积
                num_1: 120.61, // 120平户型面积
                lowPrice: 4500, // 底价
                step: 30 // 每平米涨幅

            };
        },
        methods: {
            getData() {
                let num = 26;
                let limit = 18;
                let list = [];
                // 楼层均价
                let allPrice = 0;
                let slotPrice = 0;
                for (let i = 0; i < num; i++) {
                    let str = {
                        index: "",
                        price: "",
                        allPrice: ""
                    };
                    str.index = i + 1;
                    if (i < limit) {
                        str.price = this.lowPrice + (this.step * i);
                    } else {
                        str.price = this.lowPrice + (i - (2 * (i - (limit - 1)))) * this.step;
                    }
                    list.push(str);
                    allPrice += str.price;
                }
                this.list = list;
                slotPrice = allPrice / num;
                this.slotPrice = slotPrice;
            }
        },
        created() {
            this.getData();
        }
    };
</script>

<style scoped lang="less">
    ul li {
        font-size: 26px;
        line-height: 50px;
    }

    span.active {
        color: var(--errorColor);
    }
</style>
