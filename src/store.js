
import { Store } from 'vuex'

const store = new Store({
    state: {
        list: [
            {
                _id: 123456465,
                context: 'test',
                state: false,
            },
            {
                _id: 54544145,
                context: 'test',
                state: true,
            }
        ]
    },

    getters: {
        doing: state => {
            return state.list.filter( l => !l.state )
        },  
        done: state => {
            return state.list.filter( l => !l.state )            
        }
    },

    mutations: {
        add(state) {
            state.count++
        }
    }
})

export default () => store