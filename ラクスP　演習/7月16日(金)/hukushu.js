new Vue({
    el: "#app",
    data() {
        return {
            message: 'メッセージ',
            googleUrl:'',
            googlrLink:'Googleへ',
            gamenshow: true
        }
    },
    methods: {
        //引数が呼び出し時に設定されていない場合はイベントオブジェクト
        //第一引数に入る
        //引数が呼び出し時にある場合は、イベントオブジェクトを明示
        push(){
            //押された時の処理
        }
    },
    //comuted {
        //compSample
   // },
})