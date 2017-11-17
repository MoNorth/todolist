<template>
  <div class="box">
    <header>
        <span>{{ count }}</span>    
        <h2>{{ state ? '已经完成' : '正在进行' }}</h2>
    </header>
    <ul>
        <list v-for='l in lists' :_id='l._id' :context='l.context' :state='state' :key='l._id'/>
    </ul>
  </div>
</template>

<script>

import list from './list'

export default {
  name: 'box',
  components: { list },
  props: {
      state: {
          default: false
      }
  },
  computed: {
    lists () {
        return  this.state ? this.$store.getters.doing : this.$store.getters.done
    },
    count () {
        return this.lists.length || 0
    }
  }
}
</script>

<style lang="less">
.box {
    padding: 20px 30px;
    header {
        h2 {
            height: 50px;
            line-height: 50px;
            font-size: 30px;
            font-weight: 100;  
        }    
        span{
            display: block;
            float: right;
            height: 30px;
            width: 30px;
            border-radius: 50%;
            background: #E6E6FA;
            line-height: 30px;
            text-align: center;
            margin-top: 10px;
        }
    }
}
</style>
