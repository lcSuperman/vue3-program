import { createStore } from 'vuex'

export default createStore({
  state: {
    num:0
  },
  mutations: {
    increase(state,payload){
      return state.num += payload.count
    },
    decrease(state,payload){
       state.num -= payload.count
       if(state.num <= 0){
         return state.num = 0
       }else{
         return state.num
       }
    }
  },
  actions: {
  },
  modules: {
  }
})
