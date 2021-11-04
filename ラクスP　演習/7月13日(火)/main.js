

const button = document.getElementById('button');
button.addEventListener('click',(element) => {
    const kotoba =  document.getElementsByClassName('input').value;　//inputのvlueに検索した言葉がある
    

    const $list = document.getElementById('list');

axios.get('https://qiita.com/api/v2/items',{
    params:{query:`tag:${kotoba}`}    
})
.then(res =>{
    console.log(res)
    res.data.forEach(item => {
        const newItem = document.createElement('li')
        newItem.innerHTML =  `<a href="${item.url}" target="_blank">${item.title}</a>`; //配列データ.forEach(配列からデータを受け取る変数引数　=>{処理})
        $list.appendChild(newItem);
    })
});
});



