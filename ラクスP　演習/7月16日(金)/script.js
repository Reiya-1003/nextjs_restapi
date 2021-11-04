const vm = new Vue({
    el:'#app',
    data:{
      name:'山田',
      email:'user1@example.jp',
      text:'xxxxについて'
    },
    methods: {
        submit() {
            const inquiry = `お問合せ内容を送信しました。
            
            【名前】
            ${this.name}
            【メールアドレス】
            ${this.email}
            【お問合せ内容】
            ${this.text}`

            alert(inquiry)
        }
    }
})

window.vm = vm


//v-model
const em = new Vue({
    el:'#ensyu',
    data:{
        textbox:'テキスト',
        checked: true,
        picked: true,
        selected:  '',
        selected2:'',
    },

    methods: {
        submit() {
            const kekka = `選択結果です。
            
            【テキスト】
            ${this.textbox}
            【チェック】
            ${this.checked}
            【正・誤】
            ${this.picked}
            【選択】
            ${this.selected}
            【複数選択】
            ${this.selected2}`

            alert(kekka)
        }
    }

})

//vueのライフサイクル「フック」 処理し続けてしまうのでコメントアウト
// const lm = new Vue({
//     el:'#lifeS',
//     data() {
//         return {
//             message:'こんにちわ',
//             interval_id: null,
//         }
//     },
//     beforeCreate(){
//         console.log('Vueインスタンス作成前')
//     },
//     created(){
//         console.log('Vueインスタンス作成後')
//         let seconds=1
//         this.interval_id = setInterval(()=>{
//             console.log(`${seconds++}`)
//         },1000)
//     },
//     beforeMount(){
//         console.log('マウント前')
//     },
//     mounted(){
//         console.log('マウント後')
//     },
//     beforeUpdate(){
//         console.log('再描写前')
//     },
//     updated(){
//         console.log('再描写後')
//     },
//     beforeDestroy(){
//         console.log('Vueインスタンス削除前')
//         clearInterval(this.interval_id)
//     },
//     destroyed(){
//         console.log('Vueインスタンス削除後')
//     }
// })

// window.lm = lm

//コンポーネント
Vue.component('user-title',{
    template:`
    <h2>ユーザーリスト</h2>`   //上に書く
})
Vue.component('user-list',{
    data() {
        return{
            users:[
                {id:1,name:'ユーザー１'},
                {id:2,name:'ユーザー2'},
                {id:3,name:'ユーザー3'},
                {id:4,name:'ユーザー4'},
                {id:5,name:'ユーザー5'},
            ]
        }
    },
    template:`
    <div>
    <user-title></user-title>
    <ul>
    <li v-for="user in users" :key="user.id">
    {{user.name}}
    </li>
    </ul>
    </div>`
})
const km =new Vue({
    el:'#comp',
})
//演習
Vue.component('info',{

    template:`
    <h2>インフォ</h2>`
})

Vue.component('top',{
    data() {
        return{
            name:'TOP'
        }
    },
    template:`
    
    <div>{{name}}
     <info></info>
    </div>`
})
Vue.component('middle',{
    data() {
        return{
            name:'MIDDLE'
        }
    },
    template:`
    <div>{{name}}
    <info></info>
    </div>`
})
Vue.component('bottom',{
    data() {
        return{
            name:'BOTTOM'
        }
    },
    template:`
    <div>{{name}}
    <info></info>
    </div>`
})

const km2 = new Vue({
    el:'#comp2'
})

//コンポーネントのローカル登録とグローバル登録 user-title2はローカル登録となる
const UserTitle2= {
    template:`<h2>ユーザーリスト</h2>`
}
const Userlist2　= {
    components:{
        'user-title2':UserTitle2
    }, 
    data() {
        return{
            users:[
                {id:1,name:'ユーザー１'},
                {id:2,name:'ユーザー2'},
                {id:3,name:'ユーザー3'},
                {id:4,name:'ユーザー4'},
                {id:5,name:'ユーザー5'},
            ]
        }
    },
    template: `
    <div>
    <user-title2></user-title2>
    <ul>
    <li v-for="user in users" :key="user.id">
    {{user.name}}
    </li>
    </ul>
    </div>`
    
}
const LG = new Vue({
    el:'#loGo',
    components:{
        'user-list2':Userlist2 //ローカル登録なのでここでこう書かないとでない
    }

})

//親から子にデータ伝搬
const UserDetail = {
    props: {
        user:{type:Object}
    },
    template: `
    <div>
    <h2>選択中のユーザーをしたに表示</h2>
    {{user.name}}
    </div>
    `
}
const ListTitle3 = {
    template:`
    <h2>ユーザーリスト</h2>`
}
const UserList3 = {
    components:{
        'list-title3':ListTitle3,
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
    <list-title3></list-title3>
    <ul>
    <li v-for="user in users" :key="user.id" @click='selected_user = user'>
    {{user.name}}
    </li>
    </ul>
    <user-detail :user='selected_user'></user-detail>
    <p>selected_user</p>
    </div>`
}
 const pr = new Vue({
     el:'#pro',
     components:{
         'user-list3':UserList3
     }
     
 })

//  const fromDetail = {
//     props: {
//         textname:{type:Object},
//         textmall:{type:Object},
//         picked:{type:Object},
//         checked1:{type:Object},
//         checked2:{type:Object},
//         selected:{type:Object},
//     },
//     template: `
//     <div>
//     <h2>アンケート</h2>
//     </div>
//     `
// }
 const fromOutput = {
     template:`
     <h2>メンバーリスト</h2>`
 }

 const fromInput = {
     components:{
         'from-output':fromOutput,
        //  'from-detail':fromDetail
        
     },
     data(){
         return{
             froms:[
            {id:1,name:true},

            
        ]
         }
     },
     template: `
     <div> 
     <from-output></from-output>
        <div><label>
            <span>名前：</span>
            <input  v-for="from in froms" :key="from.id">
        </label></div>
        <div><label>
        　　　<span>メールアドレス：</span>
        　　　<input  v-for="from in froms" :key="from.id">
        </label></div>
        <div>
            <input  name="sex" type="radio" id="one" value="One" v-for="from in froms" :key="from.id"　>
            <label for="mail">男</label>
            <input  name="sex" type="radio" id="two" value="Two"  v-for="from in froms" :key="from.id"　>
            <label for="femail">女</label>
        </div> 
        <div>
            <input type="checkbox" id="mall" value="mall" v-for="from in froms" :key="from.id">
            <label for="mall">メルマガ</label>
        </div>
        <div>好きなスポーツブランド
           <input type="checkbox" id="nike" value="nike"  v-for="from in froms" :key="from.id">
           <label for="nike">nike</label>
           <input type="checkbox" id="puma" value="puma" v-for="from in froms" :key="from.id">
           <label for="puma">puma</label>
           <input type="checkbox" id="addidas" value="addidas"  v-for="from in froms" :key="from.id">
           <label for="addidas">addida</label>
           <input type="checkbox" id="reebok" value="reebok"  v-for="from in froms" :key="from.id">
           <label for="reebok">reebok</label>
           <input type="checkbox" id="asics" value="asics"  v-for="from in froms" :key="from.id">
           <label for="asics">asics</label>
        </div>
        <div>
        <select  v-for="from in froms" :key="from.id">
        <option disabled value="">関心のあるスポーツ</option>
        <option>野球</option>
        <option>サッカー</option>
        <option>バスケ</option>
        <option>アメフト</option>
        </select>
        </div>
        </div>
       
        `
    
}

const Mon = new Vue({
    el:'#mon',
    components:{
        'from-input':fromInput
    }
    
})    
 