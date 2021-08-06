import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[],
    login_user: null,
  },
  mutations: {
    addTodo(state,todo){
      state.todos.push(todo)
    },
    deleteAction(state,index){
      state.todos.splice(index,1)
    },
    setLoginUser(state,user){
      state.login_user = user
    },
    deleteLoginUser(state){
      state.login_user = null
    }
  },
  actions: {
    addTodo({commit},todo){
      commit("addTodo",todo)
    },
    editAction({commit},index){
      commit("editAction",index)
    },
    deleteAction({commit},index){
      commit("deleteAction",index)
    },
    setLoginUser({commit},user){
      commit('setLoginUser',user)
    },
    login(){
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    logout(){
      firebase.auth().signOut()
    },
    deleteLoginUser({commit}){
      commit('deleteLoginUser')
    }
  
  },
  modules: {
  }
})
