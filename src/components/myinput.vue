<template>
  <div class="myinput">
    <input type="text" v-model="context" @keyup.enter="input" placeholder="请输入你的任务名称，按回车键确认"/>
  </div>
</template>

<script>


export default {
  name: 'myinput',
  data () {
    return {
      context: ''
    }
  },
  methods: {
    input() {
        this.$store.commit('add', this.context)
        this.context = ""
    }
  }
}
</script>


<style lang="less">
.myinput {
    float: right;
    height: 50px;
    margin-right: 10px;
    input {
        height: 30px;
        margin-top: 10px;
        width: 300px;
        padding-left: 10px;
        outline: none;
        border-radius: 5px;
    }
}
</style>
