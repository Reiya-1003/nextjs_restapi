const $titleItems = document.getElementsByTagName('li');
const $liTag = $titleItems[0];

//cssクラスを追加 add
$liTag.classList.add('strong');

const $today = document.getElementById('today');

$today.addEventListener('click',()=> {
    $today.classList.add('strong');
});

// const $globe = document.getElementById('today');
// $globe.addEventListener('mouseover',(element)=> {
//     alert(element.x)  //ブラウザを触った時のx座標がアラートされる
// 

// 問題１
const divAll = document.getElementsByTagName('div');
divAll[divAll.length -1].addEventListener('click',(element) => {　//length　-1　は一番下の配列
    divAll[divAll.length - 1].classList.add('kadai1')
})



// 問題２
const button1 = document.getElementById('button1');
button1.addEventListener('click',(element) => {
    alert('送信されました')
})


// 問題３
const nameIn = document.getElementById('name')
nameIn.addEventListener('change',(element) => {
   const nameChange = document.getElementById('namechange')
   nameChange.innerText='名前が変更されました';   //innnertext じを入れるみたいな
})  

//ajax
axios.get('https://qiita.com/api/v2/items',{
    params:{
        query:'tag:Javascript'
    }
}).then(res =>{
    console.log(res)
});
