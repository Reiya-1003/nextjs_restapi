import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import firebase from 'firebase'

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBcsz9Q9eNhtRiPixPvjDqS9EN25UmuRUY",
    authDomain: "todo-e.firebaseapp.com",
    projectId: "todo-e",
    storageBucket: "todo-e.appspot.com",
    messagingSenderId: "1033440226134",
    appId: "1:1033440226134:web:c4e6df34573b114cadc4f7",
    measurementId: "G-KSFLJ4D762"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
