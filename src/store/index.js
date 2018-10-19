import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    headerText:'随时随地学',
    userData:{
      username:'',
      avatar:'',
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
      state.userData.username = payload.idCard
      state.userData.avatar = payload.avatar
    } ,
    'CHANGGE-LISTTABLE-TITLE'(state, payload){
      state.listTable.title = payload
    }
  }
})


export default store
