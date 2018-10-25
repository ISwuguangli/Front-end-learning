<template>
    <div>
        <el-table :data="datalist"  :row-class-name="tableRowClassName">
            <el-table-column prop="name" label="车主姓名"></el-table-column>
            <el-table-column prop="number" label="车牌号"></el-table-column>
            <el-table-column prop="date" label="通行证办理时间"></el-table-column>
        </el-table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            datalist:[]
        }
    },
    mounted(){
        this.show()
    },
    methods: {
        show(){
            this.$http.get('/myformdata')
            .then((res)=>{
                this.datalist =res.data.data
            }).catch((err)=>{
                console.log("err",err)
            })
        }
    }
}
</script>
<style>

</style>
