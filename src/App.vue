<template>
  <div id="app">
    <myheader/>  
    <box :state='false'/>
    <box :state='true'/>
  </div>
</template>

<script>


import myheader from './components/myheader'
import box from './components/box'


export default {
  name: 'app',
  components: { myheader , box },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  border: 0;
}
#app {
  width: 656px;
  margin: 100px auto;
  background: #CDCDCD;
}
</style>
