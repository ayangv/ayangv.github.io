<template>
  <div id="tloutput">
    <!-- //调用 -->
    <h2>{{tldtext}}</h2>
  </div>
</template>

<script>
export default {
  name: 'tloutput',
  //接受传过来的内容
  props:[
    "tldtext"
  ]
}
</script>

<style>

</style>
