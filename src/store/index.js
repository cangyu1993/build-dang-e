import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    headerText:'随时随地学'
  },
  mutations:{
    'CHANGE-HEADERTEXT'(state, payload){
      state.headerText = payload
    }
  }
})


export default store
