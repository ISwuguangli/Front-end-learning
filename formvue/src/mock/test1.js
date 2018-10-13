import Mock from 'mockjs'
import { Random } from 'mockjs'
Mock.setup({
	timeout: 1000
})

const testData = function(option){
	let testList = []
	for(let i=0;i<10;i+=1){
		let temp = {
			date: Random.date('yyyy-MM-dd'),
			time: Random.time('A HH:mm:ss'),
			name: Random.cname(),
			note: Random.csentence(5,25)
		}
		testList.push(temp)
	}
	return {
		data: testList
	}
}

Mock.mock('/testData',/post|get/i,testData )