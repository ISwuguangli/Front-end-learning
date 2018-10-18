import Mock from 'mockjs'
import { Random } from 'mockjs'
Mock.setup({
	timeout: 1000
})

const testData = function(option){
	let testList = []
	for(let i=0;i<3;i+=1){
		let temp = {
			prop: Random.name(),
			label: Random.csentence(2,2)
		}
		testList.push(temp)
	}
	return {
		data: testList
	}
}

Mock.mock('/info',/post|get/i,testData )