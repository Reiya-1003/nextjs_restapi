//ルートのVueインスタンスの作成（ここから全て始まる）
new Vue({
  el: '#app',
  data: {
    // ToDoリスト
    todos: [],
    // ToDoの状態
    current: 2,
    // 状態の表示で使う配列
    optionsLabel: [
      { value: 2, label: 'すべて' },
      { value: 0, label: '作業中' },
      { value: 1, label: '完了' }
    ],
    // 使いやすいようにオブジェクト版も用意
    //options: { 0: '作業中', 1: '完了', 2: 'すべて' },
    // 入力中のデータを受け取る
    inputMozi: ''
  },

  computed: {
    //radioボタンの入力値が変更された場合のv-on:Changeでメソッド使ってもいい。
    //画面に表示するTodoリストの作成
    computedTodos() {
      //2「全て」が選択されていた場合は全部返却でもいい
      if (this.current !== 1 && this.current !== 0) { return this.todos }
      //0「作業中」1「完了」が選択されている場合、選択されたステータスだけの
      //リストを作成する（画面に表示する用）
      let showTodo = []
      this.todos.forEach(todo => {
        if (this.current === todo.state) {
          showTodo.push(todo)
        }
      })
      return showTodo
    },
  },

  methods: {
    //todo入力で@changeで入力値を受け取って、dataオプションに入れてもいい。
    //今回はv-modelを使用しているので使っていません
    // inputCheck(event) {
    //   this.inputMozi = event.target.value
    // },
    // ToDo 追加の処理
    addTodo() {
      // 入力がなければ何もしないで return　終わり
      console.log(this.inputMozi)
      if (this.inputMozi === "") {
        return
      }
      // { コメント, 作業状態 }
      // というオブジェクトを現在の todos リストへ push
      this.todos.push({
        comment: this.inputMozi,  //入力されたTodoの値を設定
        state: 0  // 初期状態は作業中「0」
      })
      // 追加したら入力されていた値を削除する。
      this.inputMozi = ''
    },

    //Todoリストに表示されている状態名のボタンが押されたら「作業中」→「完了」　「完了」→「作業中」にする。
    changeStateTodo(todo) {
      //「1」完了だった場合「０」作業中にする。
      if (todo.state === 1) {
        todo.state = 0
      } else if (todo.state === 0) {
        todo.state = 1
      }
    },
    //Todoリストに表示されている削除ボタンを押下された場合
    //押されたtodoを配列から見つけて削除する必要がある。
    removeTodo(todo) {
      //テキストの範囲で行うと。
      //配列の中身を全て確認
      for (count = 0; count < this.todos.length; count++) {
        // 配列の中身を見て、削除ボタンが押された内容と一致しているものがあれば削除
        //commentが同じやつを削除する（本来はIDが良い）
        if (this.todos[count].comment === todo.comment) {
          //count番目を削除する
          this.todos.splice(count, 1)
        }
      }

    }

  }
})
