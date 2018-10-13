<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li v-for="(item,index) in data" :key="index">{{item.author_name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data:[]
    }
  },
  created: function () {
    
  },
  mounted: function () {
    this.getAlldata();
  },
  methods: {
    getAlldata(){
      console.log("getalldata");
      let that = this;
      this.$http.get('/user')
      .then(function(res){
        console.log("连接成功");
        that.data=res.data.data;
      })
      .catch(function(err){
        console.log("错误"+err)
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
