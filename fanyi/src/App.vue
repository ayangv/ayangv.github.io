<template>
  <div id="app">
      <h1>在线翻译</h1>
      <h5>简单 / 易用 / 便捷</h5>
      <tlform v-on:submitForm="tltext"></tlform>  
      <tloutput v-text="tldtext"></tloutput>
  </div>
</template>

<script>
import Tlform from './components/Tlform'
import Tloutput from './components/Tloutput'
export default {
  name: 'App',
  data:function(){
    return{
      // 存储翻译好的数据，找到和output连接点v-text穿给他
        tldtext:""
    }
  },
  components:{
    Tlform,Tloutput
  },
  methods:{
    // 参数text是传过的来的内容
    tltext:function(text,language){
      // alert(text)
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170721T082515Z.54cf3dc583f679db.f4a96182281281d8b5dfe24b4e88298e2133f219&lang='+language+'&text='+text)
        .then((response)=>{
          this.tldtext = response.body.text[0]
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
