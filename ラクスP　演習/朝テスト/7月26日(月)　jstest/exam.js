const engineer = [
    { name : 'tobita',gengo : ['Java','PHP','Linux','Javascript']} 

];

console.log(engineer[0].name+'さんの使用できる言語は'+engineer[0].gengo )

engineer[0].gengo.push('QA')
console.log('新しく'+engineer[0].gengo[4]+'を使えるようになりました。')


for(let hyaku = 1 ; hyaku <= 100 ; hyaku++){

    if(hyaku%15 === 0){
        console.log(hyaku+'は15の倍数です')
      }else if(hyaku%5 === 0){
        console.log(hyaku+'は5の倍数です')
      }else if(hyaku%3 === 0){
         console.log(hyaku+'は3の倍数です')
          } else if(!hyaku%15===0 && !hyaku%5 === 0 && !hyaku%3 === 0){
            console.log(hyaku)
        }
    }

let kuku = "";
for(let a =1; a < 10; a++){
    for (let b =1; b < 10; b++){
        if(a * b < 10) {
            kuku +="  " + a * b
        }else　if(a * b >= 10){
            kuku +=" " + a * b
        }

}
}
console.log(kuku)

let retu = ''
for (count1 = 1; count1 < 10; count1++) {
    retu = ''
    for (count2 = 1; count2 < 10; count2++) {
        if (count1 * count2 < 10) {
            retu = retu + ' '
        }
        retu = retu + ' ' + count1 * count2
    }
    console.log(retu)
}



let nen= 2000

function seiki(nen){
    const modori= (nen-1)/100+1
    return modori
}

seiki2 = function(nen){
    return (nen-1)/100+1
}

let a=seiki(nen)
let b = Math.floor(a) ;


console.log(nen+'年は'+b+'世紀です')

let urnen = 2100;
function uruu(dosi){
    if( (dosi % 4 === 0 && dosi % 100 !== 0) || dosi % 400 === 0) {
      return true;
    }
    return false;
  }
  

  if(uruu(urnen)){
    console.log(urnen + '年はうるう年です');
  }else{
    console.log(urnen + '年はうるう年ではありません');
  }


let numbers = [];
let flg = true
let dbflg = true
do {
    let ranum = Math.random() * 8 + 1
    let ronum = Math.round(ranum)
    if (numbers.length === 0) {
        numbers.push(ronum)
    } else {

        for (let count = 0; count < numbers.length; count++) {
            if (numbers[count] === ronum) {
                dbflg = false
            }
        }

        if (dbflg === true) {
            numbers.push(ronum)
        }
    }

    dbflg = true
    if (numbers.length === 3) {
        flg = false
    }

} while (flg)

for (let count1 = 0; count1 < numbers.length; count1++) {
  for (let count2 = 0; count2 < numbers.length; count2++) {
      for (let count3 = 0; count3 < numbers.length; count3++) {
          if (count1 === count2 || count2 === count3 || count3 === count1) {

          } else {
              console.log(numbers[count1] + '' + numbers[count2] + '' + numbers[count3])
          }
      }
  }
}