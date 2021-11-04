//コンソールに#documentと表示される
console.log(document);

//コンソールにobjectと表示される
console.log(typeof document);

//IDを指定して取得する
const $title = document.getElementById('title');　　//<h1 id="title">Javascript　研修</h1>
console.log($title)

//classを指定する
const $subtitles = document.getElementsByClassName('sub');  //<h2 class="sub">今日の講義</h2>
console.log($subtitles)                                     //<h2 class="sub">次回の講義</h2>

//html要素を指定して取得する
const $listitems = document.getElementsByTagName('li');  //<body>の<li>要素を取得
console.log($listitems)

//クエリセレクターを利用して取得　　便利だけど処理が遅いからあまり使わないらしい
$currentitem = document.querySelector('ul li.current');  //<ul>のなかの<li class="current"> DOMDOM</li>
$divs = document.querySelectorAll('body > div');　//<body>のなかの<div>

console.log($currentitem);
console.log($divs);

//DOMの親子兄弟
const $today = document.getElementById('today');

console.log($today.parentNode)      //親要素
console.log($today.firstElementChild)　　//子要素の最初の一つ
console.log($today.lastElementChild)　　　//子要素の最後の一つ
console.log($today.children)　　　　　　　//子要素全てを配列で
console.log($today.previousElementSibling)　　//ひとつ前の要素
console.log($today.nextElementSibling)　　　//ひとつ後の要素

console.dir($title);  //取得したDOMの中身

console.log($title.innerText); //titleアイディの「javascript研修」をコンソールに
$title.innerText = 'javascriptの超ウルトラ講義';　//上のを書き換える
console.log($title.innerText)　//上のをコンソールで見る

const $body = document.body;  　//body取得
$body.style = 'backGround: silver';　　//bodyのbackgroundcolorが変わる　css処理　あんま使わん

const $tagLi = $listitems[1];
console.dir($tagLi.classList)

const $titleItems = document.getElementsByTagName('li');
const $liTag = $titleItems[0];

//cssクラスを追加 add
$liTag.classList.add('strong');

const $liTag2 = $titleItems[1];
//cssクラスを奪う remove
$liTag2.classList.remove('current');

//新しいDOMを作る　作っただけで表示はされない
const $newElement = document.createElement('p');
$newElement.textContent = '追加のpタグです';

//pを追加する div$todayの子要素に追加される、順番はした？
$today.appendChild($newElement)


