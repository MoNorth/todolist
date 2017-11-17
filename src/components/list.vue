<template>
  <li class="list" :class="{ 'done': state }">
    <div>
        <input type="checkbox" :checked="state" @click="check"/>
        <p>{{context}}</p>
        <button @click="del">X</button>
    </div>
  </li>
</template>

<script>




export default {
  name: 'list',
  props: ['_id', 'context', 'state'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
      check() {
          this.$store.commit('check', this._id)
      },
      del() {
          this.$store.commit('del', this._id)
      }
  }
}
</script>

<style lang="less">
.list {
    list-style: none;
    height: 30px;
    background: #5BC0DE;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding-left: 5px;
    margin-top:10px;
    &>div {
        background: #fff;
        height: 100%;
        input {
            float: left;
            margin: 9px 10px;
        }
        p {
            float: left;
            height: 30px;
            line-height: 30px;
            margin-left: 10px;
            font-size: 14px;
            width: 524px;
        }
        button {
            float: left;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: none;
            border: 1px solid #999;
            color: #999;
            outline: none;
            margin-top: 7px;
        }
    }
}
.list.done {
    background: #9D9D9D;
    &>div{
        background: #C0C0C0;
    }
}
</style>
