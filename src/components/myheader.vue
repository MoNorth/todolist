<template>
  <div class="myheader">
    <h2>ToDoList</h2>
    <myinput />
  </div>
</template>

<script>

import myinput from './myinput'


export default {
  name: 'myheader',
  components: { myinput },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
.myheader {
  width: 100%;
  background: #323232;
  height: 50px;
  h2{
      float: left;
      height: 50px;
      line-height: 50px;
      margin-left: 35px;
      color: #fff;
  }
}
</style>
