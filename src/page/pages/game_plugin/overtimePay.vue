<template>
    <div>
        <el-table :data="tableData" border stripe>
            <el-table-column label="月份" align="center" header-align="center">
                <template slot-scope="scope">
                    <span>{{scope.row.year}}年 {{scope.row.month}}月</span>
                </template>
            </el-table-column>
            <el-table-column label="加班(小时)" align="center" header-align="center">
                <template slot-scope="scope">
                    <span>{{scope.row.overtime}}小时</span>
                </template>
            </el-table-column>
            <el-table-column label="加班费(元)" align="center" header-align="center">
                <template slot-scope="scope">
                    <span>{{scope.row.overtimePay}}元</span>
                </template>
            </el-table-column>
            <el-table-column label="加班费/小时(元/时)" align="center" header-align="center">
                <template slot-scope="scope">
                    <span v-if="!!scope.row.overtimePay
                          && !!scope.row.overtime
                          && Number(scope.row.overtimePay) !== 0
                          && Number(scope.row.overtime) !== 0">
                        {{(Number(scope.row.overtimePay - 0) / Number(scope.row.overtime - 0)) | formatNumToFixed}}元/小时
                    </span>
                    <span v-else>--</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import tableData from "../../../mock/overtimePay";

    export default {
        name: "overtimePay",
        data() {
            return {
                tableData: tableData
            };
        },
        methods: {
            getData() {

            }
        },
        mounted() {
            this.getData();
        }
    };
</script>

<style scoped>

</style>
