<template>
  <div id="tlform">
     <form v-on:submit="formsubmit">
       <input type="text" v-model="textTo" placeholder="输入翻译的内容">
       <select v-model="languge">
          <option select value="en">English</option> 
          <option value="ru">Russian</option>
          <option value="ko">Korean</option>
          <option value="ja">Janpenese</option>
        </select>   
        <input type="submit" value="翻译"> 
     </form>
  </div>
</template>

<script>
export default {
  name: 'tlform',
  data:function(){
    return{
      // 输入的内容存起来，和v-model配合
      textTo:"",
      languge:""
    }
  },
  methods:{
    formsubmit:function(e){
      // 注册一个事件，把输入的内容传给父组件app.vue,
      //在app.vue找到连接点绑定此事件
      this.$emit("submitForm",this.textTo,this.languge)
      // 阻止默认事件
      e.preventDefault();
      // alert(this.textTo)
    }

  },
  created:function(){
    this.languge = "en";
  }
}
</script>

<style>

</style>
