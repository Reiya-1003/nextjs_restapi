


var app1 = new Vue({
  el: "#app",
  data:{
    items: null,
    keyword: '',
    message: ''
    
  },
  methods:{
    Kensaku:function(){
      
      if(this.keyword === ''){
          this.items =  null
          this.message = ""
          return 
      }

     

      //Vueインスタンスを格納
      var vm = this

      
      var params = {applicationId: '1004046585188948275',
      　　　　keyword: this.keyword,
            itemCaption: '',

      　　　
      
      
      
    }

      //axiosのgetメソッド
      axios.get('https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706', {params})
       
          .then(function(res){
              console.log(res)　//データ取得できたか確認用
              console.log(res.data)
              console.log(vm.keyword)
              vm.items = res.data.Items; 

          })
  　　　}
  }
})