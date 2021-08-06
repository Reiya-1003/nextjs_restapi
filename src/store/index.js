import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import firebase from 'firebase'
=======
import firebase from "firebase";
>>>>>>> todo

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

    deleteAction(state,index){
      state.todos.splice(index,1)
    },
<<<<<<< HEAD
    setLoginUser(state,user){
      state.login_user = user
    },
    deleteLoginUser(state){
      state.login_user = null
    }
=======
    editAction(state){
      state.todos.title = 'テスト'
      
    },
    setLoginUser(state, user) {
      state.login_user = user;
    },
    deleteLoginUser(state) {
      state.login_user = null;
    },

>>>>>>> todo
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
    editAction({commit},index){
      commit("editAction",index)
    },
    deleteAction({commit},index){
      commit("deleteAction",index)
    },
<<<<<<< HEAD
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
=======
   
  
>>>>>>> todo
  
  login(){
    const google_auth_provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(google_auth_provider)
  },
 
   
  
  },

  getters: {
    userName: (state) => (state.login_user ? state.login_user.displayName : ""),
    uid: (state) => (state.login_user ? state.login_user.uid : null),
    getAddressById: state => id => state.todos.find(todo => todo.id === id),
  }
})
