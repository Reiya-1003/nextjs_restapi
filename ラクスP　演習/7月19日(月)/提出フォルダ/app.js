
var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}


Vue.component('todo-list',{
    data(){
        return{
      todos: [],
      current: -1,
      options: [
        { value: -1, label: 'すべて' },
        { value: 0, label: '作業中' },
        { value: 1, label: '完了' }
      ]
        }
    },
    computed: {
  
        computedTodos: function () {
          return this.todos.filter(function (el) {
            return this.current < 0 ? true : this.current === el.state
          }, this)
        },
    
        labels() {
          return this.options.reduce(function (a, b) {
            return Object.assign(a, { [b.value]: b.label })
          }, {})
        }
      },
    watch: {
        todos: {
          handler: function (todos) {
            todoStorage.save(todos)
          },
          deep: true
        }
      },
      created() {
        this.todos = todoStorage.fetch()
      },
      methods: {
        doAdd: function(event, value) {
          var comment = this.$refs.comment
          if (!comment.value.length) {
            return
          }
        
          this.todos.push({
            id: todoStorage.uid++,
            comment: comment.value,
            state: 0
          })
          
          comment.value = ''
        },
    
        
        doChangeState: function (item) {
          item.state = !item.state ? 1 : 0
        },
    
        
        doRemove: function (item) {
          var index = this.todos.indexOf(item)
          this.todos.splice(index, 1)
        }
    
      },
      template:`
      <div>
      <h1>チュートリアルToDoリスト</h1>
    
      
      <label v-for="label in options" >
        <input type="radio"
          v-model="current"
          v-bind:value="label.value">{{ label.label }}
      </label>
        
     
      
      <table>
        <thead v-pre>
          <tr>
            <th>ID</th>
            <th>コメント</th>
            <th>状態</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          
          <tr
            v-for="item in computedTodos"
            v-bind:key="item.id"
            v-bind:class="{done:item.state}">
            <th>{{ item.id }}</th>
            <td>{{ item.comment }}</td>
            <td>
              
              <button v-on:click="doChangeState(item)">
                {{ labels[item.state] }}
              </button>
            </td>
            <td>
            
              <button v-on:click.ctrl="doRemove(item)">
                削除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p>※削除ボタンはコントロールキーを押しながらクリックして下さい</p>
  
      
      <h2>新しい作業の追加</h2>
      <form  v-on:submit.prevent="doAdd">
        <!-- コメント入力フォーム -->
        コメント <input type="text" ref="comment">
        <!-- 追加ボタンのモック -->
        <button type="submit">追加</button>
      </form>
      </div>`


})

const vm = new Vue({
    el:'#app',
})
