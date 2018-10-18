import Mock from "mockjs"
import { Random } from "mockjs"
Mock.setup({
    timeout:1000
})
const CUser = function(option){
    let userList = []
    for(let i = 0; i<20;i++){
        const item = {
            username:Random.cname(),
            number:Random.integer(100000,900000),
            car:Random.csentence(2,3),
            route:Random.csentence(2,5)
        }
        userList.push(item)
    }
    return{
        data:userList
    }
}
Mock.mock('/getUser',/post|get/i,CUser)