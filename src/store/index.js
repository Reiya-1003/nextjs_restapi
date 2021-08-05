import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[]
  },
  mutations: {
    addTodo(state,todo){
      state.todos.push(todo)
    },
    deleteAction(state,index){
      state.todos.splice(index,1)
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
    }
  
  },
  modules: {
  }
})
