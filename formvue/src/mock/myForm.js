import Mock from 'mockjs'
import { Random } from 'mockjs'
Mock.setup({
    timeout: 1000
})

const myFormData = function(option){
    let dataList = []
    for(let i = 0;i<20;i+=1){
        const item = {
            name: Random.cname(),
            number: Random.integer(100000,999999),
            date: Random.date('yyyy-mm-dd')
        }
        dataList.push(item)
    }
    return{
        data:dataList
    }
}
Mock.mock('/myformdata',/post|get/i,myFormData)