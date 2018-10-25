<template>
    <el-table :data = "tableData">
        <el-table-column property="name" label="姓名"></el-table-column>
        <el-table-column property="age" label="年龄"></el-table-column>
        <el-table-column property="number" label="车牌号"></el-table-column>
    </el-table>
</template>
<script>
export default {
    data(){
        return{
            tableData:[
                {
                    name:"钟琦",
                    age:19,
                    number:"001"
                },
                {
                    name:"wu",
                    age:20,
                    number:"002"}
            ]
        }
        }
    }
</script>
<style scoped>

</style>



