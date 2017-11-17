import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const data = {
  get() {
    return JSON.parse(window.localStorage.getItem('Todolist')) || []
  },
  set(data) {
    window.localStorage.setItem('Todolist', JSON.stringify(data))
  }
}

const store = new Vuex.Store({
    state: {
        list: data.get()
    },

    getters: {
        doing: state => {
            return state.list.filter( l => l.state )
        },  
        done: state => {
            return state.list.filter( l => !l.state )            
        }
    },

    mutations: {
        add(state, context) {
            state.list.push({
              _id: +new Date(),
              state: false,
              context: context
            })
            data.set(state.list)
        },
        check(state, _id) {
          state.list.forEach( l => {
            if(l._id === _id)
              l.state = !l.state
          })
          data.set(state.list)
        },
        del(state, _id) {
          state.list.forEach( (l, i) => {
            if(l._id === _id)
            {
              state.list.splice(i, 1)
              data.set(state.list)
              return
            }
          })
        }
    }
})





new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
