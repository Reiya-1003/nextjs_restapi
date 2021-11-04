const UserDetail = {
    props: {
        user:{type:Object},
        userName:{type:String}
    },
    template: `
    <div>
    <h2>選択中のユーザーをしたに表示</h2>
    <input v-model='userName'>
    </div>
    `
}
const ListTitle = {
    template:`
    <h2>ユーザーリスト</h2>`
}
const UserList = {
    components:{
        'list-title':ListTitle,
        'user-detail':UserDetail
    },
    data(){
        return{
            users:[
                {id:1,name:'ユーザー１'},
                {id:2,name:'ユーザー2'},
                {id:3,name:'ユーザー3'},
                {id:4,name:'ユーザー4'},
                {id:5,name:'ユーザー5'}
            ],
            selected_user:{}
        }

    },
    template:`
    <div>
    <list-title></list-title>
    <ul>
    <li v-for="user in users" :key="user.id" @click='selected_user = user'>
    {{user.name}}
    </li>
    </ul>
    <user-detail :user='selected_user' :user-name='selected_user.name'></user-detail>
    <p>selected_user</p>
    </div>`
}
 const pr = new Vue({
     el:'#app',
     components:{
         'user-list':UserList
     }
     
 })