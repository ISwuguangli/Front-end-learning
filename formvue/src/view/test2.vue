<template>
    <div>
        hello
        <el-table :data="userList">
            <el-table-column prop="username" label="user"></el-table-column>
            <el-table-column prop="number" label="number"></el-table-column>
            <el-table-column prop="car" label="car"></el-table-column>
            <el-table-column prop="route" label="route"></el-table-column>
        </el-table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            userList: []
        }
    },
    mounted () {
        this.showUser()
    },
    methods: {
        showUser(){
            this.$http.get('/getUser').then((res)=>{
                console.log(res.data.data)
                this.userList = res.data.data
            }).catch((err)=>{
                console.err('err',err)
            })
        }
    }
}
</script>

<style scoped>

</style>

