import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import todoList from '../views/todoList.vue'
import editTodo from '../views/editTodo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/todoList',
    name: 'todoList',
    component: todoList
  },
  {
    path: '/editTodo',
    name: 'editTodo',
    component: editTodo
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
