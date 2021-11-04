const vm = new Vue({
    el: '#app',
    data: {              
    message: '変更前',　　//プロパティ
    flags: true,　　　　　　　　　//プロパティ
    num:100,　　　　　　　　　　　　//プロパティ
    numbers:[],   //p.9
    total_num:0   //p.9
    },
    methods:{
        method1(){
            return 'method1呼び出し'
        },
        method2(msg){
            return msg + 'method2呼び出し'
        }
    },
    data(){
        return {
            sum: 50000000
        }
    },
    filters:{
        numberWithDelimiter(value){
            if(!value)return '0'
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,')
        }
    },
    watch:{           //p.9　//cosoleにvm.numbers.push(任意の数字)を入れてみよ
        numbers(value) {
            this.total_num = 0
            this.numbers.forEach(
                number => {
                    this.total_num+= number
                })
            
            
        }
    }
})
window.vm = vm　　//p.10
vm.$watch(function(){
    return this.message
},function(message){
    console.log('変更後の値です'+ message)　　　　//consoleにvm.message('おはよう')とするとおはようになる
})
//vue インスタンス　は　vueアプリケーションの始まり
//new VueでVueインスタンスを作成する、ルートのVueインスタンスともいう、中心である。
//elはelオプション　dataもdataオプションという
//htmlの要素のことをDOM要素となんとなく呼んでいる　vueインスタンスをDOM要素に適応するのをマウントという

//vue.jjsのアプリは、一つのvueインスタンス（オブジェクト）になっている
//なので、全てオブジェクトの形で指定する
//vueで操作できる範囲はマウントした範囲（指定はelオプション　おr　$mount)
//各オプションはvueオブジェクトのkeyになっている
//{{}}マスタッシュを使うことでhtmlにvue（js）を呼び出せる
//elオプションのマウント先指定はcssセレクタかdom要素を受け渡す
//dataオプションは使いたいデータを持たせるところ
//methodオプションは関数を描くところ
//wachtオプションは(＄wacht)は値を監視するためにある
//watchオプションは関数名と関し先のdataプロパティ名に合わせる
//$watchは第一引数の関数の戻り値に関しするプロパティ
//第二引数に変更時の処理を描く
//filtersオプションはマスタッシュにある値を加工する(表示する値を加工)
//複数のfilterを使うことも可能、引数も指定できるが、filterの関数で受け取るときは第一引数にfiliterする値を受け取るため、
//引数に指定された値が受け取るときに一つずつズレる
//  使う時　mozimozi | filterA("引数１","引数２")
 // 定義例　filterA(mozi,hikisu1,hikisu2){・・・}
 //       mozi <- mozimoziの値　hikisu1 <-引数１　hikisu２ <-引数２　