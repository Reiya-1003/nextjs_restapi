new Vue ({
    el:'#app',
    data:{
        
            todos:[{comment:'ここに内容',
                   statetus: 0}],
            Do:2,
            optionsLabel: [
                {value:2,label:'全て'},
            　　 {value:0,label:'作業中'},
                {value:1,label:'終了'}
            ],
            inputtext:'',
        
            
          
            
        },
    


    computed:{　　//ここでタブごとのTodo内容を作る　　
        computedTodos() {　　　
            if(this.Do !==1 && this.Do !== 0 ){ return this.todos }
            let showTodo = []
            this.todos.forEach(todo => {　　　
                if(this.Do === todo.statetus) {　//Doの値とstatusの値は数字で管理してる、実質0.1.2しかない
                    showTodo.push(todo)　　
                }
                
            })
            return showTodo

        }
    },

    //computedはmethodsと似ていて動きを作れる。違いは同じ処理ならmethodsより処理が軽い
    //例えば同じ商品の個数に応じて値段の表示が変わる処理なら一個増えると加算する処理自体は同じだから
    //個数を増やすたびに計算をしてしまうmethodsよりcomputedの方が処理が軽く、もし違う処理が起きた場合
    //エラー文を出せるのもメリット
    methods:{
        addTodo(){
            if(this.inputtext === ""){
                return
            }
            this.todos.push({
                comment: this.inputtext,
                statetus: 0
            })
            this.inputtext=""
        },
            
    
        ChangeTodo(todo){　　　　　　　//v-onのメソッド（要は機能）は押された時statetusが1なら０に切り替える
            if(todo.statetus === 1){
                todo.statetus = 0
            } else if(todo.statetus === 0) {
                todo.statetus = 1
            }
                 
        },
        removeitem(todo){
            for(count=0; count<this.todos.length; count++){
                if(this.todos[count].comment === todo.comment){
                    this.todos.splice(count,1)
                }
            }

        }
    }

}) 
