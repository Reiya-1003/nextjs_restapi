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
    // addTodo(state,todo){
    //   state.todos.push(todo)
    // },
    addTodo(state,{id,todo}){
      todo.id = id;
      state.todos.push(todo);
    },

    deleteAction(state, id){
      const i = state.todos.findIndex(td => td.id === id)
      state.todos.splice(i, 1)
    },
    setLoginUser(state,user){
      state.login_user = user
    },
    deleteLoginUser(state){
      state.login_user = null
    },
    updateTd(state, { id, todo }) {
      const index = state.todos.findIndex(td => td.id === id);
      state.todos[index] = todo;
    },
  },

  actions: {
    setLoginUser({ commit }, user) {
      commit("setLoginUser", user);
    },
    deleteLoginUser({ commit }) {
      commit("deleteLoginUser");
    },
    logout() {
      firebase.auth().signOut();
      console.log("aaa");


    },
    // addTodo({commit},todo){
    //   commit("addTodo",todo)
    // },
    addTodo({getters,commit},todo) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/todos`)
          .add(todo)
          .then((doc) => {
            commit("addTodo", { id: doc.id, todo });
          });
      }
    },
    deleteAction({commit}, index){
      commit("deleteAction", index)
    },
    login(){
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },

    updateTd({ commit }, { id, todo }) {      
      commit('updateTd', { id, todo })          
    },

  },

  getters: {
    userName: (state) => (state.login_user ? state.login_user.displayName : ""),
    uid: (state) => (state.login_user ? state.login_user.uid : null),
    getTodoById: state => id => state.todos.find(todo => todo.id === id),
  }
})
