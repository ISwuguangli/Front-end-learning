<template>
  <div class="hello">
    <p>HELLO WORLD</p>
    <ul>
    	<li v-for="(item,index) in datalist" :key='index'>
    		<h1>{{item.personName}}:<span>{{item.viewName}}</span></h1>
    	</li>
    </ul>
  </div>
</template>
<!--mockjs应用页面-->
<script>
import axios from 'axios' //局部引入
export default {
  name: 'HelloWorld',
  data () {
    return {
      datalist:[]
    }
  },
  mounted(){
  	this.showdata()
  },
  methods:{
  	showdata(){
//		import axios from 'axios'
//    Vue.prototype.$http = axios  在main.js中把axios添加到vue原型中，则可在每个组件中调用
  		this.$http.get('/user') //全局引入使用vue原型中的方法this.$http,已经把axios添加到原型中
  		.then((res)=>{
  			console.log(res.data.data)
  			this.datalist = res.data.data
  		})
  		.catch((err)=>{
  			console.log('调用失败',err)
  		})
  	}
  }
}
</script>
