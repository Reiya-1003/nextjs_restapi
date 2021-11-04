let hairetu = ['human','car','human','dog','human','cat',];


let humanhai = [];

let humanC = 0;
for (let h = 0; h < hairetu.length; h++){
    if(hairetu[h] === 'car'){　
        console.log('carは生物ではありません')
    }
    else if(hairetu[h] === 'dog'　|| hairetu[h] === 'cat'){
        console.log('犬'+'は生物ですが人間ではありません')
        
    }else if(hairetu[h] === 'human'){
          humanhai.push(hairetu[h])

    }
}