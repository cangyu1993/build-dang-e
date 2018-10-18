import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    headerText:'随时随地学',
    userData:{
      username:''
    },
    listTable:{
      title:''
    }
  },
  mutations:{
    'CHANGE-HEADERTEXT'(state, payload){
      state.headerText = payload
    },
    'CHANGGE-LOGIN-STATUS'(state, payload){
      state.userData.username = payload
    } ,
    'CHANGGE-LISTTABLE-TITLE'(state, payload){
      state.listTable.title = payload
    }
  }
})


export default store
