//頭の体操問題　ピラミッド
//アスタリスク「＊」で三角形を作成せよ
// *
// **
// ***
// ****
// *****
// コメントの[//]は不要
//#ヒント
// 「文字列は加算で足せる」　'mozi' + 'mozi' は 'mozimozi'

//頭の体操問題　ピラミッド
//アスタリスク「＊」で三角形を作成せよ
//     *
//    ***
//   *****
//  *******
// *********
// コメントの[//]は不要

//console.log('*')
//console.log('**')
//console.log('***')
//ということではありません。

let p = ['*','**','***','****','*****'];

for(let c= 0 ; c<p.length ; c++)
{
    console.log(p[c]);
}
// 模範解答
let mozi = '';
for(let tate=1; tate<6; tate++){
    mozi = ''
  for(let yoko= 0; yoko<tate; yoko++) {
      mozi = mozi + '*'
       }
       console.log(mozi)
};

 //表示するものを入れる変数 上にある
let hosi = 1　//アスタリスクを表示する個数（アスタリスクを追加するforの回数）
for (let tate = 5; tate > 0; tate--) {   //段落のfor デクリメントで 1づつ減らす。[4,3,2,1,0]になったら終わり
    //空にする。
    mozi = ''
    //スペースを入れるfor文　段落のループをデクリメントしているので、そのままスペースの数になる
    for (let yoko = 0; yoko < tate; yoko++) {
        //スペースを追加
        mozi = mozi + ' '
    }
    //アスタリスクの数、アスタリスクの最大数は hosi の値(最後に+=2で２つづつ増やす)
    for (let hosiCount = 0; hosiCount < hosi; hosiCount++) {
        //アスタリスクを追加
        mozi = mozi + '*'
    }
    //表示
    console.log(mozi)
    //アスタリスクの数は2づつ増えるので、アスタリスクのforの最大回数を増やす。
    hosi += 2;
}
// <<------------------------ここまで---------------------------------------------------------------------->

//集計の依頼１(集計担当から)
//ユーザーアンケートで好きなスポーツメーカーについて情報「１人１回答」を集めました
//データは配列となっており、各データは文字列で記載されています
//nikeの集計を行いたいのですが、nikeを選んだ人数を数えてください。

//集計の依頼２（後日、集計担当から）
//お伝え忘れていたことがございます、nike以外のメーカーに関しても集計をお願いします。
//集計方法は、nike,adidas,pumaの各メーカーの数と、「その他」として先程の３メーカー以外のものを集計して送ってください。

//データ加工依頼１（エンジニアから）
//今回集計したデータを他のシステムで使いたいので、nikeだけが入った配列を作成してください。

//データ加工依頼２（後日、エンジニアから）
//申し訳ありません、nikeだけが入った配列とお願いしましたが、
//nikeだけが入っていない配列、そして、値の重複がない配列をお願いします。


const sports = ['nike', 'puma', 'adidas', 'nike', 'nike', 'puma', 'asics', 'adidas', 'nike', 'puma', 'nike']

// 集計の依頼１
let nikeCount = 0;
for (let n = 0; n < sports.length; n++){
    if(sports[n] === 'nike'){　//配列の中のナイキを見つける
        nikeCount += 1  //見つけただけナイキカウントに足してくれ
    }
    
}
console.log(nikeCount)
// 集計の依頼２

const data={};
for(let i=0; i<sports.length; i++){
    let key=sports[i];
    if(data[key]==undefined) data[key]=0;
    data[key]++;
}
console.log(data);

let nikesCount = 0;
let adiCount = 0;
let puCount = 0;
let otherCount = 0;

for (let count =0;count<sports.length; count++){
    if(sports[count] === 'nike'){　
        nikesCount += 1 }
     else{
            if(sports[count] === 'adidas'){　//配列の中のナイキを見つける
                adiCount += 1 }
                else{
                    if(sports[count] === 'puma'){　//配列の中のナイキを見つける
                        puCount += 1}else{
                            if(sports[count] === 'asics'){　//配列の中のナイキを見つける
                                otherCount += 1}

                        }
                }
        }
   
}
console.log(nikeCount);
console.log(adiCount);
console.log(puCount);
console.log(otherCount);



//問題3
let nike = [];
for(count = 0; count<sports.length; count++) {
    if(sports[count] === 'nike') {
        nike.push(sports[count])
    }
}
console.log(nike)


// 問題４

let makers = []
let onlyFlag = true
for (let count = 0; count < sports.length; count++) {
    if (sports[count] !== 'nike' && makers.length === 0) {
        makers.push(sports[count])
    } else if (sports[count] !== 'nike') {

        onlyFlag = true
        for (let count2 = 0; count2 < makers.length; count2++) {
            if (makers[count2] === sports[count]) {
                onlyFlag = false
            }
        }
        if (onlyFlag === true) {
            makers.push(sports[count])
        }

    }
}
console.log(makers)



// <<------------------------ここまで---------------------------------------------------------------------->




// for inぶん

console.log(`${1 + 1}`)　　//``シングルクォーとの使い方
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}
//``バッククォート(シフト@)と''シングルクォートは違う
// <<------------------------ここまで---------------------------------------------------------------------->
// for ofぶん
let color = ['red','blue','green'];

for (const property of color) {
    console.log(`${property}`);
}
// inに変えると０、１、２になる
for (const property in color) {
    console.log(`${property}`);
}

const sport = ['nike','adidas','puma']
sport.forEach(element => 
    console.log(element)
);
//.forEach  (取り出す変数　＝>　{　　処理　　})
// <<------------------------ここまで---------------------------------------------------------------------->

// 関数宣言
function getTriangleArea(base,height){　　　//ファンクション関数名（引数,引数２こめ）
    const modori = base * height / 2;　　　//処理
    return modori;　　　　　　　　　　　　　　　//関数に戻したいときに作る戻り値
}
// 関数式
getTriangleArea2 = function(base,height){　　　//get関数式（関数名とは違う）
    return base * height / 2 ;　　　　　　　　　//戻り値　これは処理
}

// 関数を呼び出す
const a = getTriangleArea(200,100);　　　//変数aにかちこむ
console.log(a)　　　　　　　　　　　　　　　　//aに入ってるものを見る

// 問題１
function Dog(animal){
    const m = animal + 'です'
    return m;
}

getDog2 = function(animal){
    return animal + 'です'
}

const d =Dog('犬');
console.log(d)

// 模範解答
function dog() {
    console.log('犬です')
}

// 問題２
function seachword(mozi){
    const z = console.log(mozi)
    return z;
}

seachword2 = function(mozi){
    return console.log(mozi)
}

seachword('タピオカ');

// 模範解答
 function Seacchword(mozi) {
     console.log(mozi)
 }

// 問題３
function tax(mono){
    const t = mono * 1.08
    return t
}

tax2 = function(mono){
    return mono * 1.08
}

const syo = tax(1000)
console.log(syo)


// 模範解答
function Tax(price) {
    return price * 1.08
}

const aa = Tax(100)
console.log(aa)

// 問題４ なんとかできた。。。。
const animal = ['dog', 'cat', 'dog', 'dog', 'cat', 100, 'dog']

for (let count =0; count < animal.length; count++){
    if(animal[count] === 'dog'){
        dog(count)
    }else if (animal[count] === 'cat'){
        Seacchword(animal[count])
    }else{(animal[count] === 100)
       
       console.log(Tax(animal[count]))
    }
}
// <<------------------------ここまで---------------------------------------------------------------------->
let arow = 'ここからアロー';
console.log(arow)// アロー関数　
// １問目
// function dog() {
//     console.log('犬です')
// }

const dog2 = () => console.log('犬です');
dog2()
// ２問目
// function Seacchword(mozi) {
//     console.log(mozi)
// }
const seachword3 = () => console.log('mozi');
seachword3()

// ３問目
// function Tax(price) {
//     return price * 1.08
// }

// const aa = Tax(100)
// console.log(aa)
const Tax2 = (price) => price * 1.08
const ab = Tax2(100)
console.log(ab)
// <<------------------------ここまで---------------------------------------------------------------------->

let scope = 'ここからスコープ';
console.log(scope);

function outKansu (){

    let x =0;                //outKansuの関数スコープ

    function inKansu(){　　　//outKansuの関数スコープ　　　//inKansuの関数スコープ
        let z = 2;　　　　　　　//outKansuの関数スコープ　　//inKansuの関数スコープ
        console.log(x);　　　　//outKansuの関数スコープ　　　//inKansuの関数スコープ
        console.log(y);　　　　//outKansuの関数スコープ　　//inKansuの関数スコープ
        console.log(z);　　　　//outKansuの関数スコープ　　//inKansuの関数スコープ
    };
    inKansu();
};

let y =1;
outKansu();    

// <<------------------------ここまで---------------------------------------------------------------------->
let meso = 'ここからメソッド';
console.log(meso);

var obj = {
    showText: function() {
        
        console.log( 'Hello World' );
        
    },
    sayText: function(){
        console.log('say yeah')
    },
    heyText: function(){
        console.log('heyheyhey')
    }
}
 
obj.showText();
obj.sayText();
obj.heyText();

// 問題１
let cat = {
    name : "tama",
    age : "10",
    eat() {console.log('むしゃむしゃ')},
    voice() {console.log('にゃー')}
}
cat.eat()
cat.voice()

// 　問題２
let robo = {
    name : "R2-D2",
    repete(mozi) {return mozi + "でしょうか？"}
}

console.log(robo.repete("ご飯"));

// 問題３

let car = {
    name: 'beetle',
    color: 'green',
    run() { 
      return '故障中'
    }
  }
  let car1 = {
    name: 'copen',
    color: 'blue',
    run() { 
      return '動きます'
    }
  }
  let car2 = {
    name: 'mini',
    color: 'red',
    run() { 
      return '故障中'
    }
  }
  let car3 = {
    name: 'ford',
    color: 'red',
    run() { 
      return '故障中'
    }
  }
  let car4 = {
    name: 'GT-R',
    color: 'red',
    run() { 
      return '動きます'
    }
  }
  console.log(car4.run());

  const cars = [car,car1,car2,car3,car4]

  let ugoku = [];
   let ugokanai = [];  //ぶちこむ配列が作れる
for(let count =0; count < cars.length; count++){
    if(cars[count].run() === '動きます'){
        ugoku.push(cars[count]);  //空の配列にぶちこむ
        
    } else if (cars[count].run() === '故障中'){
        ugokanai.push(cars[count]);
        }
}
console.log(ugoku);
console.log(ugokanai);

// <<------------------------ここまで---------------------------------------------------------------------->
let bil = 'ここからビルトインメソッド';
console.log(bil);
console.log(Math.round(3.4559949485940389489));  //四捨五入してくれる
console.log(Math.random()); //0以上１未満の数値をランダムで返す
let RandomNo = Math.random() * 50 + 50; //50-100のランダムな数字が返ってくる（小数点以下あり）
RandomNo = Math.round(RandomNo);　//小数点以下を四捨五入する
console.log(RandomNo)　//整数50−100がコンソールに出る

let hi = 'dateのところ';
console.log(hi);

const now = new Date();
console.log(now);
console.log(now.getFullYear());
const sampleDay = new Date('2020-12-23');
console.log(sampleDay);
console.log(sampleDay.getFullYear());

// 自分の誕生日から年齢を算出する
const birthdate = "1998/1/27"; //自分の誕生日

const ageCalculation = ( birthDate , nowDate ) => {
  const age = nowDate.getFullYear() - birthDate.getFullYear();
  const thisYearsBirthday  = new Date( nowDate.getFullYear() , birthDate.getMonth() , birthDate.getDate() );
  return age + ( thisYearsBirthday.getTime() > nowDate.getTime() ? -1 : 0 );
   }


    const nowage = ageCalculation( new Date(birthdate) , new Date() );
 
    console.log( nowage + "歳" );

    //new Date()に年月日を入れるのはvar d5 = new Date("2013/01/23");
    //new Date()は現在の日付時刻を持ってくる
    //getFullyearはその時の年だけ持ってくる
    //getTimeは秒
// <<------------------------ここまで---------------------------------------------------------------------->