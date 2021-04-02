<template>
    <el-table
            :data='tableData'
            stripe
            style="width: 100%">
        <el-table-column
                label="主题">
            <template #default="scope">
                <el-link :href="scope.row.url">{{scope.row.title}}</el-link>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                tableData: [{
                    title: 'Layout',
                    url:"#/Layout"
                },{
                    title: 'Table',
                    url: "#/Table"
                }]
            }
        }
    }
</script>

<style scoped>

</style>