const UserForm={
    template:`
    <div>
    <div>ユーザー名変更フォーム</div>
    <input v-model='user_name'/>
    <buttton @click='update'>名前変更</button>
    </div>`,
    props:{
        userName:{type:String,required:true}
    },
    data(){
        return{
          user_name:this.userName
        }
    },
    methods:{
        update(){
            this.$emit('myclick',this.user_name)
        }
    }
}

const UserDetail = {
    components:{
        'user-form': UserForm
    },
    data(){
        return{
            user_name:'森田ひかる'
        }
    },
    template:`
    <div>
    <div><span>ユーザー名:{{user_name}}<span></div>
    <div>
    <user-form :user-name='user_name' @myclick='user_name = $event'>
    </uset-form>
    </div>
    </div>`

}

const vm = new Vue({
    el:'#emi',
    components:{
        'user-detail':UserDetail
    }

})