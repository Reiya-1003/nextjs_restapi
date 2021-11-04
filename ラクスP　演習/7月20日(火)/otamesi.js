var app = new Vue({
    el: '#app',
    data: {
     display: true
    },
    methods:{
        changeButton:function(){
            display = !display
        }
    }
   })