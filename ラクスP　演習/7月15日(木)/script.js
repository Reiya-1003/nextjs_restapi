const vm = new Vue({
    el:"#app",
   
    computed:{
        button_label(){
            console.log('button_label called')
            return this.button_disable ?'無効':'有効'
        },
        now(){
            return new Date().toTimeString()
        }
        
    },

    data:{
        url:'https://www.google.co.jp/?client=safari&channel=iphone_bm',
        message:'文字',
        isActive:true,
        active:'class1',
        error:'class2',
        message2:"変わる",
        button_disable:true,
        reserve:false,
        mozi:false,
        kotoba: '',
        mozi:'',
        todos: [
            { text: "Learn JavaScript", done: false },
            { text: "Learn Vue", done: false },
            { text: "Play around in JSFiddle", done: true },
            { text: "Build something awesome", done: true }]
    },
    methods: {
        data(){
            return {
                message:"カーソルが当たりました"
            }},


        myClick() {
            alert("click")
        },
        myDblClick(){
            alert("Db Click")
        },
        myChange(msg) {
            this.message2 = msg.target.value
            console.log(msg.target.value)
        },
        mySubmit(){
            alert("submit")
        },
　　　　　log(){
            console.log(this.now)
        },
        click: function() {
            this.mozi=!this.mozi
        },
        myChange2(msg){
            this.mozi = msg.target.value
            console.log(msg.target.value)
        },
        toggle(todo) {
            todo.done = !todo.done
        },


    }
  
})
window.vm=vm