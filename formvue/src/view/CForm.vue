<template>
    <div>
        <ul>
            <li v-for="(item,index) in tableList" :key="index">
                <h1>{{ item.c1}}</h1>
            </li>
        </ul>
       <el-table>
           <template v-for="(item,index) in headList">
               <el-table-column :key="index" :label="item.label" :prop="item.prop"></el-table-column>
           </template>
       </el-table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            headList:[],
            tableList:[]
        }
    },
    mounted () {
        this.showHead(),
        this.showTable()
    },
    methods:{
        showHead(){
            this.$http.get('/getHead').then((res)=>{
                console.log(res.data.data)
                this.headList = res.data.data
            })
            .catch((err)=>{
                console.log('err is',err)
            })
        },
        showTable(){
            this.$http.get('/getTable').then((res)=>{
                console.log(res.data.data)
                this.tableList = res.data.data
            }).catch((err)=>{
                console.log('err is',err)
            })
        }
    }
}
</script>
<style scoped>

</style>
