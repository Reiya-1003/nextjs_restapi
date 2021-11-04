//下記の関数の作成しなさい
//①自己紹介関数の作成
//関数は引数に「第一引数：名前、第２引数：苗字、第3引数：年齢、第４引数：趣味」を受け取り
//処理はコンソール上に「私は（第２引数）（第１引数）です、年齢は（第３引数）です、趣味は（第４引数）です」
//と表示しなさい。
//②自己紹介関数の作成２
//①で作成した関数の引数を１つで行いなさい。


// ①
function me (name2,name,old,hobby) {
    console.log('私は'　+ name2 + name + 'です、'　+ 
                '年齢は'　+ old + 'です、' + '趣味は'　+ hobby + 'です、')
    　　　　　　　
};

me('えがみ','れいや','23歳','サッカー');

// ②

function outer(){
    function me (name2,name,old,hobby) {
        console.log('私は'　+ name2 + name + 'です、'　+ 
                    '年齢は'　+ old + 'です、' + '趣味は'　+ hobby + 'です、')
        　　　　　　　
    }
    me('えがみ','れいや','23歳','サッカー');

}
outer();

//模範解答
const show2 = (human) => {
    console.log('私は'　+ human.name2 + human.name2 + 'です、'　+ 
                '年齢は'　+ human.old + 'です、' + '趣味は'　+ human.hobby + 'です、')
}

const my = { name:'怜弥', name2:'えがみ',old:'23',hobby:'サッカー'}
show2(my);

//list配列は配列の中身に三角形の底辺と高さの情報を持つオブジェクトが入っている。
//各三角形の面積を求める処理を実行しなさい。
//三角形の面積を求める処理は関数で行い、その関数では計算結果を呼び出し元に返却しなさい。
const list = [{ base: 20, height: 10 }, { base: 30, height: 20 }, { base: 40, height: 10 }]

function triangle(base,height){
    const modori = base * height / 2;
    return modori;
};

triangle2 = function(base,height) {
    return base * height / 2 ;　
};

const an1 =triangle(list[0].base,list[0].height)
console.log(an1)
const an2 =triangle(list[1].base,list[1].height)
console.log(an2)
const an3 =triangle(list[2].base,list[2].height)
console.log(an3)

// 模範解答
const triangle3 = (ob) => {
    return ob.base * ob.height / 2
}

function triangle4(base,height) {
    return base * height / 2
}

let abc= 0;
for (let count = 0; count < list.length; count++) {
  abc = triangle4(list[count].base,list[count].height)
  console.log(abc)
}

let result
list.forEach(e => {
    result = triangle3(e)
    console.log(result)
})
//メソッド問題
//自分オブジェクトを作成しなさい
//オブジェクトには名前、年齢、趣味の情報を持ち
//自己紹介をする動作が可能「私の名前は〇〇です、年齢は〇〇です、趣味は〇〇です。」とコンソール上に表示

let user = {name:'怜弥',age:'23',hobby:'サッカー',}

function intro(name,age,hobby){
    console.log('私の名前は'+ name +'です、年齢は' +age+'です、趣味は'+hobby+'です。')
  }

intro(user.name,user.age,user.hobby)



//おもちゃ工場の作成
//工場オブジェクトの作成
//工場オブジェクトには1回のおもちゃ制作動作で作成できるおもちゃの最大個数　max : 10と
//1.おもちゃ制作の動作を実行できるようにしてください
//  おもちゃ制作には「材料」、「担当者」、「工場のおもちゃ制作の最大個数」が必要
//   おもちゃの最大制作個数は、担当者の最大制作個数と工場の最大制作個数できまる、
//　　　条件　おもちゃの最大制作個数は工場の最大制作個数（担当者の力量がなんであれこれ以上の制作はできない）
//　　　　　　また、担当者の最大制作個数以上の制作はできない
//　材料は「鉄」「プラスチック」の２つで
//　　鉄は「超合金ロボ」　プラスチックは「ガンプラ」に加工する。
//最後に、作成したおもちゃの一覧を呼び出しもとに返却する。
//2.担当者オブジェクトは　名前、最大制作個数　を持つ
//3.材料は以下の配列を使用

 //お手上げそもそもどういう工程を踏めばいいのか理解できてなかった

let eng = {name:'ジョン',max:10};
const materialList = ['鉄', '鉄', 'プラスチック', '鉄', 'プラスチック', '鉄', '鉄', '鉄', 'プラスチック', '鉄', 'プラスチック', '鉄']
const fac = 100
let tetuCount = 0;
let praCount = 0;



for (let count =0; count < materialList.length; count++){
    if(materialList[count] === '鉄'){
        tetuCount += 1;
        
        
    }else if (materialList[count] === 'プラスチック'){
        praCount += 1;
        
    }

}
        
console.log(tetuCount)
console.log(praCount)

function robo(tantou,kouzyou,zairyou){
    const modori = console.log('超合金ロボが' + (tantou + kouzyou) * zairyou + '個');
    return modori
};

robo2 = function robo(tantou,kouzyou,zairyou){
     return console.log('超合金ロボが' + (tantou + kouzyou) * zairyou + '個');
};

function ganp(tantou,kouzyou,zairyou){
    const modori = console.log('ガンプラが' + (tantou + kouzyou) * zairyou + '個');
    return modori
};

ganp2 = function ganp(tantou,kouzyou,zairyou){
     return console.log('ガンプラが' + (tantou + kouzyou) * zairyou + '個');
};


robo(eng.max,fac,tetuCount)
ganp(eng.max,fac,praCount)

const kouzyoutyou = {
    name: '工場長',
    max: 50
};

const sinzin = {
    name: '新人',
    max: 2
};



const factory = {
    max: 10,
    makehoby(zairyou,darega,factorymax) {
        const tukuttayatu = []
        let size = 0;
        if(darega.max < factorymax){
            size = darega.max
        } else {
            size = factorymax
        }
        for(let count =0; count< size;count++) {
            if (zairyou[count] === '鉄'){
                tukuttayatu.push('超合金ロボ')

            }else if (zairyou[count] === 'プラスチック') {
                tukuttayatu.push('ガンプラ')
            }
        }
        return tukuttayatu
    }
}
console.log(factory.makehoby(materialList,kouzyoutyou,factory.max))
console.log(factory.makehoby(materialList,sinzin,factory.max))

// <<------------------------ここまで朝の問題（なげえ昼まで行ったぞ）---------------------------------------------------------------------->




class Character{
    constructor(name,type,age,tall,from){  //コンストラクタやメソッドを定義する（これはコンストラクタ）
        this.name = name;
        this.type = type;
        this.age = age;
        this.tall = tall;
        this.from = from;
    }
    introduce(){　　　　　　　//これはメソッド（関数）
        console.log(`私の名前は ${this.name},念は ${this.type}`);
    }
    introduce2(){
        console.log(`${this.name}の出身は${this.from}です。`);
    }
}

const gon = new Character('Gon Freecss','Enhancer');　　　//nerなんたらでメソッドの引数に入る
const killua = new Character('Killua zoldyck','Transmuter');
const leorio = new Character('Leorio Para','Emitter');

console.log(gon.type);
killua.introduce();

// <<------------------------クラスのところ---------------------------------------------------------------------->

class Human {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log(`My name is ${this.name}`);  //console.log('My name is ' + this.name);と変わんない書き方の違いだと思う
    }
}

class Doctor extends Human{　　//継承
    constructor(name,age,type){
        super(name,age);　　//継承元（今回はHuman）のコンストラクタを呼び出し
        this.type = type;　　　//name,ageに加えてageを追加（Doctorクラスに）
    }
}

const doctor1 = new Doctor('一郎','３０','内科');　//Doctorクラスに飛ぶ
doctor1.introduce();　　//Doctorクラスに呼び出されたHumanのメソッド（introducr()以下）を呼び出す

// ①車両クラスの作成　問題
//　車両販売システムの構築依頼があり、膨大な車両データを利用しなくてはならない
//　車両データを管理するために、車両クラスを作成し、車両を作成してください
//　＃機能要件
//　・プロパティに「名前、色、最高速度」
//　・動きとして「〇〇が走る、〇〇が止まる」（動きはconsole.logで各文字列を出力でOK）
// 　対象車両
//    名前：GT-R 、色：赤、最高速度:280
//    名前：NSX 、色：黄、最高速度:300
//    名前：mini 、色：緑、最高速度:220
//　できる人は、作成したオブジェクト（インスタンス）は全て配列に格納した後、まとめて出力して確認してください。

class Car{
    constructor(name,color,speed){  
        this.name = name;
        this.color = color;
        this.speed = speed;
    }
    introduce(){　　　　　　　
        console.log(`${this.name}が走る、${this.name}が止まる`);
    }
}

const gtr = new Car('GT-R','赤','280km/h');　　　
const mini = new Car('mini','黄','220km/h');
const nsx = new Car('NSX','緑','300km/h');

gtr.introduce();
nsx.introduce();
mini.introduce();


//Charcterクラス　問題
//　プロパティに年齢、身長、出身を表す項目を追加してください。
//　「〇〇の出身は〇〇です」とコンソールに表示するメソッドを追加してください（〇〇は呼び出したオブジェクトの値が入る）
//　新たなキャラクターを作成してください



const cara = new Character('ドラえもん','特質','不明歳','１３４cm','22世紀');
cara.introduce2();



//動物 クラス問題
// 動物を表すオブジェクトを作るためのクラスを作成してください
//　プロパティに名前、出身　を持たせてください。
//作成したクラスから、犬と猫を作成してください。（値はなんでも構いません）

class Animal{
    constructor(name,from){
        this.name=name;
        this.from=from;
    }
    introduce(){　　　　　　　
        console.log(`${this.name}は、${this.from}出身`);
    }
}
const dog = new Animal('犬','秋田県');　　　
const cat = new Animal('猫','渡嘉敷島');


dog.introduce();
cat.introduce();



//特別問題
//Characterを２体作成し戦わせるプログラムを作成してください。
//　それぞれキャラクターには　体力、攻撃力、防御力、運があります
//　キャラクターの動作は
//　・攻撃　相手の体力　ー　（相手の防御力　ー　自分の攻撃力）
//   ＃防御力が攻撃力を上回る場合は１ダメージ与える 
//   ＃運の数値の倍率で、攻撃力が２倍になるパターンもある
//　どちらかの体力が0以下になった時点で処理を終了してください。

// class Character2 {
//     constructor(hp,att,dif,luck){
//         this.hp=hp;
//         this.att=att;
//         this.dif=dif;
//         this.luck=luck;
//     }
//     damege(attaked,lick){
//         const num = Math.round(Math.random() * 100)
//         let attackluck = 1
//         if(0 < num && num < luck) {
//             attackluck = 2
//         }
//         this.hp -=(attaked * attackluck - this.dif)
//     }
// };

// const p1 = new Character2(100,20,5,50)
// const p2 = new Character2(100,10,10,5)
// while (0<p1.hp && p2.hp) {
//     p2,damege(pi.att,p1.luck)
//     console.log('p2:')
//     p1,damege(p2.att,p2.luck)
//     console.log('p1:')
// }


    //継承問題
    //　テキストのHumanクラスを継承した消防士クラスを作成せよ
    //　消防士クラスには、消防士ID、消防士歴の情報をもち、say()メソッドで「レスキュー」と出力する処理を行う
    
    class Resucu extends Human{　　//継承
        constructor(name,age,id,reki){
            super(name,age);　　　//Humanにもともとある
            this.id = id;　
            this.reki = reki;　
            　
        }
        say(){
            console.log(`${this.name}はレスキュー`)
        }
    }
    
    const resucu1 = new Resucu('小田','３２歳','２３３４','5年');　
    resucu1.say();
    　　
    //哺乳類
    // 　人間、猿....などの情報を作成してください。
    //　　継承元は哺乳類クラス　「プロパティはなんでも構いません」　例）目、耳などの個数など
    //　　　継承するクラスは人間、猿などなんでも構いません、哺乳類クラスを継承してクラスを作成してください　例）人間クラスなら話す、火を使うなどの動作をしてください
    //　哺乳類クラスを継承したクラスを４つ作成してください。

    class Honyu{
        constructor(eye,leg,head){
            this.eye=eye;
            this.leg=leg;
            this.head=head;

        }

    }
    class Monkey extends Honyu{　　//継承
        constructor(eye,leg,head,food){
            super(eye,leg,head);　　//継承元（今回はHuman）のコンストラクタを呼び出し
            this.food = food;　　　//name,ageに加えてageを追加（Doctorクラスに）
        }
        like(){
            console.log(`好物は${this.food}`)
        }
    }
    class Lion extends Honyu{　　//継承
            constructor(eye,leg,head,wepon){
                super(eye,leg,head);　　//継承元（今回はHuman）のコンストラクタを呼び出し
                this.wepon = wepon;　　　//name,ageに加えてageを追加（Doctorクラスに）
            }
            hunt(){
                console.log(`武器は${this.wepon}`)
            }
    }
    class Hose extends Honyu{　　//継承
        constructor(eye,leg,head,speed){
            super(eye,leg,head);　　//継承元（今回はHuman）のコンストラクタを呼び出し
            this.speed = speed;　　　//name,ageに加えてageを追加（Doctorクラスに）
        }
        point(){
            console.log(`${this.speed}で走ります`)
        }
    }
    class Cat extends Honyu{　　//継承
        constructor(eye,leg,head,hobby){
            super(eye,leg,head);　　//継承元（今回はHuman）のコンストラクタを呼び出し
            this.hobby = hobby;　　　//name,ageに加えてageを追加（Doctorクラスに）
        }
        life(){
            console.log(`特徴は${this.hobby}`)
        }
    }
    const lion = new Lion('2個','４本','ひとつ','強大な牙');　
    lion.hunt();

    
    
    //クラス：継承問題
    //  ショッピングサイトの会員システムの開発
    //　会員は　名前、年齢、住所、性別の値をもち、会員情報を全て出力することができる。
    //　
    //　会員には種類があり、ブロンズ会員、シルバー会員、ゴールド会員が存在する。
    //　　ブロンズ会員は一般的な会員であり、会員登録が済んでいる事以外は、基本的な会員の値しか持ちません
    //　　シルバー会員、ゴールド会員はポイントが貯まる要素があります、シルバー会員は最大5000ポイントまで、ゴールド会員は10000ポイントまで。
    //　　ゴールド会員は担当のコンシェルジュが決まっています。
    // これをプログラミングで作成してください。
    //この問題、プラチナ会員は不要です（作らなくてよい）
    //コンシェルジュは担当のコンシェルジュの名前を設定できるようにしてください。



class Kaiin{
        constructor(name,age,addres,sex,rank){
          this.name=name;
          this.age=age;
          this.addres=addres;
          this.sex=sex;
          
        }
        getShow(){
            return console.log(`${this.name},${this.age},${this.addres},${this.sex}`)
        }
    };


class Bro extends Kaiin{
    constructor(name,age,addres,sex,){
        super(name,age,addres,sex);
    }
    
};


class Sil extends Kaiin{
    constructor(name,age,addres,sex,point){
        super(name,age,addres,sex,);
        this.point=point;
    }
    Getpoint(pluspoint){
        this.point += pluspoint
        if (5000 < this.point){
            this.point = 5000
        }
    }
    getShow(){
        return console.log(`${this.name},${this.age},${this.addres},${this.sex},${this.point}`)
    }
    
};

class Gol extends Kaiin{
    constructor(name,age,addres,sex,point,cons){
        super(name,age,addres,sex);
        this.point=point;
        this.cons=cons;
    }
    Getpoint(pluspoint){
        this.point += pluspoint
        if (10000 < this.point){
            this.point = 10000
        }
    }
    getShow(){ //KalinのgetShowに上書きされる仕様
        return console.log(`${this.name},${this.age},${this.addres},${this.sex},${this.point},${this.cons}`)
}
};

const bro =new Bro('小田','23歳','埼玉','男',)
const sil =new Sil('佐藤','24歳','千葉','男',350)
const gol =new Gol('佐々木','25歳','東京','女',876,'佐藤忠文')

bro.getShow();
sil.getShow();
gol.getShow();
// <<------------------------wowtalkの問題のところ---------------------------------------------------------------------->

console.log(document);   //#documentと出る
console.log(typeof document);　　//objectとでる
