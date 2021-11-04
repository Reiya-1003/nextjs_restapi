class Character{
    constructor(name,age){  
        this.name = name;
        this.age = age;
      }
      intro(){
          console.log(`${this.name}さんは${this.age}歳`)
      }
}

const suzuki = new Character('suzuki','30');　　　
const tobita = new Character('tobita','50');
const ebata = new Character('ebata','40');

suzuki.intro();
tobita.intro();
ebata.intro();

class Engineer extends Character{　　//継承
    constructor(name,age,useGengo,pmFlg){
        super(name,age);　　　
        this.useGengo = useGengo;　
        this.pmFlg = pmFlg;　
        　
    }
    intro2(){
        if(this.pmFlg === true){
            console.log(`${this.name}さんは${this.age}歳、使える言語は${this.useGengo}、マネージャー経験あり`)
        }
        else{
           console.log(できていません)
        }
        
    }
    
}
let useGengo =['Python','Java','TS']
const suzuki2 = new Engineer('suzuki','30',useGengo,true);　
suzuki2.intro2();