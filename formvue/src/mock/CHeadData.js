import Mock from "mockjs"
import { Random } from "mockjs"
Mock.setup({
    timeout:1000
})

const cHead = function(option){
    let headList = [];
    for(let i = 0;i<4;i++){
        const item = {
            label: Random.csentence(2,3),
            prop: Random.name(),
        }
        headList.push(item)
    }
    return {
        data:headList
    }
}
Mock.mock('/getHead',/post|get/i,cHead)
