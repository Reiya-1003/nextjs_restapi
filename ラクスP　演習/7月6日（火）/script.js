const car = {
    name : 'mini',　　　　　　　　//要素が入った配列
    flag : false,
    color : 'yellow',
    
    
};

// console.log(car.name)
// console.log(car.color)
// console.log(car.flag)

// const result = car.name;

// console.log(result);

car.color = 'blue';　//書き換えた

console.log(car.color);

car.energy = 100;

// console.log(car.energy);

car.power = 20;　//要素の追加

console.log(car.power);

car.energy = 40;  //要素の追加

console.log(car.energy);

car.road = car.energy * car.power + 'km';

console.log(car.road);
// ここまでP18の練習問題
// <<------------------------ここまで--------------------------------------------------------------------------->>



const cars = {
    car1: { name : 'mini',color : 'yellow'},
    car2: { name : 'GT-R',color : 'white'},
    car3: { name : 'moucar',color : 'unkown'},
};

console.log(cars.car3.name)
// オブジェクトの中にオブジェクトを作ってさらにキー（color..)とvlue(mini...)を入れる
// <<------------------------ここまで--------------------------------------------------------------------------->>

const color = ['red','blue','green'];
// 配列１問目
color.unshift('white');
console.log(color[0]);
// ２問目
color.push('black');
console.log(color[4]);
// 3もんめ
color.splice(2,1, 'skyblue');
console.log(color);

// 4もんめ
// const carlist = [
//     { name : 'mini',color : 'yellow'},  //index0
//     { name : 'GT-R',color : 'white'},   //index1
//     { name : 'moucar',color : 'unkown'}  //index2
// ];
// console.log(carlist[2].name)

// 5もんめ
const carlist = [
    { name : 'mini',color : 'yellow', humans : ['suzuki','tanaka','sato']},  //index0
    { name : 'GT-R',color : 'white', humans : ['oota','sakamoto']},   //index1　　//変数が格納された配列
    { name : 'moucar',color : 'unkown', humans : ['robert.Jr']}  //index2
];

console.log(carlist[2].name + 'には' + carlist[2].humans[0] + 'が乗っています')
// <<------------------------ここまで------------------------------------------------------------------------->>
//7月15日のテストだと予想
const num1 = 100
const num2 = 200
const num3 = 300
const num4 = 400
console.log(num1 < num2 && num3 < num4)
console.log(!(num1 < num2 && num3 < num4))

// const age = 20;
// console.log((10 <= age) && (age <= 20));
// // 練習問題
// // 1もんめ
// console.log((18 <= age) && (age <= 22));　　かつ
// // 2もんめ
// console.log((65 <= age) || (age <= 18));　　または
// // ３問め
// console.log((18 <= age) && !(age <= 22));　　&&かつ　！でない
// // ４問目
// console.log(age%3 == 0);
// // ５問目
// console.log((age%3 == 0) || (age%5 == 0));
// <<------------------------ここまで-------------------------------------------------------------------------->>

// １問目
const a = 30;
if(a === 10){
    console.log('変数が１０です');　　//10=30ではないからでない
};

// ２問目
if(a%7 === 0){
    console.log('７の倍数です')}
    else{
        console.log('７の倍数ではありません')
    }
// 3もんめ
const age = 20;

if(13 <= age && age <=15 ){
    console.log('中学生')
　　　}else if(16 <= age && age <=18 ){
        console.log('高校生')
    }else{
        console.log('そのほか')
    }

// 4もんめ
const time = 15;

if(6 <= time && time <=11 ){
    console.log('朝')
　　　}else if(12 <= time && time <=14 ){
        console.log('昼')
    　　　　}else if(15 <= time && time <=19 ){
        　　 console.log('夕方')
    　　　　　}else if((20 <= time && time <=24) || (1 <= time && time <=5)){
        　　　　console.log('夜')
    }
// 5もんめ

const b = 30;

if(b%15 === 0){
    console.log('3と５の倍数です')
  }else if(b%5 === 0){
    console.log('5の倍数です')
  }else if(b%3 === 0){
    console.log('3の倍数です')
  }
  // <<------------------------ここまで---------------------------------------------------------------------->>

  let c = 0; 

  while(c < 10){
      
      if (0 === c%2) {
          console.log(c + 'は偶数です') 　　　//偶数の時
      } else {
         console.log(c + 'は奇数です') 　　　　//奇数の時
      }
      c = c + 1;　　//C < 10まで１を足していく
  };
  

  let d =10;
  do{
      console.log(d);
      d = d + 1;
    }while(d < 10)
 // <<------------------------ここまで---------------------------------------------------------------------->
 
 for(let count= 0 ; count < 5 ; count++ )
 {
     console.log(count);
 }

 let color2 = ['red','blue','green'];

 for(let count= 0 ; count<color2.length ; count++)
 {
     console.log(color2[count]);
 }
// 3問目
 for(let ten= 10 ; ten >= 0 ; ten-- )
 {
     console.log(ten)
 }
//  ２問目
for(let tenten= 10 ; 0 <= tenten && tenten <= 10 ; tenten-= 2 )
 {
     console.log(tenten)
 }
//  1問目
for(let ten= 0 ; ten <= 10 ; ten++ )
{
    console.log(ten)
}
// ４問目
for(let hyaku = 0 ; hyaku <= 100 ; hyaku++){
   if(hyaku%5 === 0 && hyaku%3 === 0){
       console.log('3と５の倍数です')
     }else if(hyaku%5 === 0){
       console.log('5の倍数です')
     }else if(hyaku%3 === 0){
        console.log('3の倍数です')
     }}
// ５問め
for(let k = 1; k < 10 ; k++){　//右側の数字の１〜１０
       
    for(let l = 1 ; l <10 ; l++) {　//左がわの数字の１〜１０
        console.log(k * l)
    }
} 
// 先生解答 綺麗なやつなんだけど
// let mozi = "";
// for(let a =1; a < 10; a++){
//     for (let b =1; b < 10; b++){
//         if(a * b < 10) {
//             mozi +="  " + a * b
//         }else{
//             mozi +=" " + a * b
//         }
//     }
// }
// console.log(mozi)
// mozi = ""

// 6もんめ
let animal = ['dog','cat','dog','dog','cat','human','dog']; //ドッグが入ってる配列
let dog = 0; //'dog'の初期値は０（最後にコンソールで数えるから）
for(let anic = 0 ; anic < animal.length ; anic++){   //初期化式は０、０が配列の要素の数以下、要素の数を超えなければ１ずつ足していく
    if(animal[anic] == 'dog'){  //配列内の'dog'を探すイコールでつなげる１ずつ足す
        dog++;
    }
} 
console.log(dog) //dogのかず

//模範解答
let dogCount = 0;
for (let i = 0; i < animal.length; i++){
    if(animal[i] === 'dog'){
        dogCount += 1
    }
}
console.log(dogCount)
// <<------------------------ここまで---------------------------------------------------------------------->