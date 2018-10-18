import Mock from 'mockjs'
import { Random} from 'mockjs'
Mock.setup({
    timeout:1000
})
const CTable = function(option){
    let tableList = []
    for(let i=0;i<20;i++){
        const item = {
            c1: Random.csentence(3,3),
            c2: Random.csentence(3,3),
            c3: Random.csentence(3,3),
            c4: Random.csentence(3,3)
        }
        tableList.push(item)
    }
    return{
        data: tableList
    }
}
Mock.mock('/getTable',/post|get/i,CTable)