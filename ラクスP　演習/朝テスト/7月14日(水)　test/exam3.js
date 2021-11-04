const engineer = [
    { name : 'suzuki',gengo : ['Java','Python','go','Ruby']} 

];

console.log(engineer[0]);

console.log(engineer[0].gengo)

engineer[0].gengo.push('Scala')
console.log(engineer[0].gengo[4])
console.log(engineer[0].name + 'さんの使用できる言語は'+engineer[0].gengo[0]+'、'
+engineer[0].gengo[1]+'、'+engineer[0].gengo[2]+'、'+engineer[0].gengo[3]+'、'
+'新しく'+engineer[0].gengo[4]+'が使えるようになりました'　);