function getTriangle(base,height){　　　
    const t = base * height / 2;　　　
    return t;　　　　　　　　　　　　　　　
}

getTriangle2 = function(base,height){　　　
    return base * height / 2 ;　　　　　　　　　
}


const a = getTriangle(5,10);　　　
console.log('底辺が5、高さ10の三角形の面積を求める関数を実行した結果、面積は'+a)　
const b = getTriangle(4,5);　　　
console.log('底辺が4、高さ5の三角形の面積を求める関数を実行した結果、面積は'+b)　
const c = getTriangle(50,2);　　　
console.log('底辺が50、高さ2の三角形の面積を求める関数を実行した結果、面積は'+c)　　　　　　　　　　　