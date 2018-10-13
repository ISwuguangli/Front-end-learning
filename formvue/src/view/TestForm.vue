<template>
    <div id="testForm">
        <li v-for="(item,index) in testData" :key="index">
            <span>{{item.date}}</span><span>{{item.time}}</span><span>{{item.name}}</span><span>{{item.note}}</span>
        </li>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            testData: []
        }
    },
    mounted(){
        this.test()
    },
    methods: {
        test(){
            this.$http.get('/testData').then((res)=>{
                this.testData = res.data.data
            }
            ).catch((err=>{
                console.log('err',err)
            })
            )
        }
    }
}
</script>

