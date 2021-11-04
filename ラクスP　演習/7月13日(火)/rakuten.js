const button = document.getElementById('button');
button.addEventListener('click',(element) => {
    const kotoba =  document.getElementById('input').value;


const $list = document.getElementById('list');


//楽天APIに接続するためのもの
axios.get('https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706',
    {
        params: {
            applicationId: '1031636184299349316',
            keyword: `${kotoba}`,
            itemCaption:`${kotoba}`
           
        }
    })
    .then(res =>{
        console.log(res)
        res.data.Items.forEach(item => {
            const newItem = document.createElement('div')
            newItem.classList.add('container');
            newItem.innerHTML =  `<p class="name">${item.Item.itemName}</p>`; 
            $list.appendChild(newItem);
        })
    
    });
});
//配列データ.forEach(配列からデータを受け取る変数引数　=>{処理})
