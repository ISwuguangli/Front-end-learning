<template>
    <div>
        <el-table :data="tabledata">
            <template v-for="(col,index) in cols">
                <el-table-column :key="index" :prop="col.prop" :label="col.label"></el-table-column>
            </template>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button>删除</el-button>
                    <el-button>修改</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cols: [
                { label: "车主姓名",prop: "name"},
                { label: "车牌号",prop: "number"},
                { label: "通行证办理时间", prop: "date"}
            ],
            tabledata: [
                { name:"小明",
                  number:"粤F5678",
                  date: "11.05"},
                { name:"小红",
                  number:"粤F7894",
                  date: "12.06"},
                { name:"小刚",
                  number:"粤F8978",
                  date: "12.16"}
            ]
        }
    }
}
</script>
<style scoped>

</style>


