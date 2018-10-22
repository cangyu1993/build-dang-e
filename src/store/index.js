import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    headerText:'随时随地学',
    userData:{
      username:'',
    },
    listTable:{
      title:''
    },
    userDetail:{},
    token:""
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
    },
    'SAVE-USER-DETAIL'(state, payload){
      state.userDetail = payload
    },
    'SAVE-TOKEN'(state, payload){
      state.token = payload
      localStorage.token = payload
      sessionStorage.token = payload
    },
  },
  // plugins:[
  //   createPersistedState({
  //     storage:{
  //       getItem:key=>localStorage.getItem(key),
  //       setItem:(key,value)=>{
  //         localStorage.setItem(key,value)
  //       },
  //       removeItem:key=>localStorage.removeItem(key)
  //     }
  //   })
  // ]
})


export default store
