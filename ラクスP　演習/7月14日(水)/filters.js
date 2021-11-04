new Vue({
    el:'#app',
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
    }
})