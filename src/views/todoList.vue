<template>
<div class="todoList">
    <h1>TODO 一覧画面</h1>
    <table border="1">
        <tr>
            <td>制作日時</td>
            <td>タイトル</td>
            <td>内容</td>
            <td>期日</td>
            <td>進捗率</td>
            <td>メモ</td>
            <td>編集・削除</td>
        </tr>
        <tr v-for="todo in $store.state.todos" :key="todo.id">
            <td >{{todo.date}}</td>
            <td >{{todo.title}}</td>
            <td>{{todo.contents}}</td>
            <td>{{todo.deadline}}</td>
            <td>{{todo.progress}}</td>
            <td>{{todo.memo}}</td>
            <td><button @click="editButton(todo.id)">編集</button><button @click="deleteButton(todo.id)">削除</button></td>
        </tr>
    </table>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
    return{
    todo:{ 
            date:'',
            title:'',
            contents:'', 
            deadline:'',
            progress:'', 
            memo:''}
    }
},
    methods:{
        editButton(id){
            this.$router.push({name: "editTodo", params:{id}})
        },
        deleteButton(index){
            if(confirm("削除してよろしいですか？")){
                this.deleteAction(index)
            }
        },
        ...mapActions(["editAction","deleteAction"])
        
    },
}
</script>

