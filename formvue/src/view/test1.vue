<template>
<div>
     <li v-for="(item,index) in testData" :key="index">
            <span>{{item.prop}}</span><span>{{item.label}}</span>
        </li>
<el-table class="tb-edit" highlight-current-row :data="testData" style="width: 100%">

<template v-for="(item,index) in testData">
<el-table-column  :prop="item.prop" :label="item.label" :key="index"></el-table-column>

</template>
<el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
</el-table>
</div>
</template>
<script>
import axios from 'axios'
export default {
data() {
return {
testData:[],
}
},
 mounted(){
        this.test()
    },
methods: {
 test(){
            this.$http.get('/info').then((res)=>{
                this.testData = res.data.data
            }
            ).catch((err=>{
                console.log('err',err)
            })
            )
        }
}

};
</script>

<style>
.tb-edit .el-input {
display: none;
}

.tb-edit .current-row .el-input {
display: block;
}

.tb-edit .current-row .el-input + span {
display: none;
}
</style>