let i = 1;
const button = document.getElementById('button');
button.addEventListener('click',() => {
    const $list = document.getElementById('list');
    const inPut = document.getElementById('input').value;
    const newList = document.createElement('ul')
    let ai = 'nai'+i;
    let saku = 'delete'+i;
    i++;
    newList.id=ai
    newList.innerHTML =  `<li class="naiyou">${inPut}<input type="button" id=${saku}  value="削除"/>`;
    $list.appendChild(newList);
    
    const d = document.getElementById(saku);
    d.addEventListener('click',() => {
        const v =document.getElementById(ai);
        console.log(v)
        v.innerText='';
    
    });
    
   
   
});



//できた！！
