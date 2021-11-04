// P。７７　問１
const $today = document.getElementById('today');
const $newElement = document.createElement('p');
$newElement.textContent = 'pタグだよ！';　　

$today.prepend($newElement);　//prependはtodayの一番上

// 問２
const $newElement2 = document.createElement('div');
$newElement2.textContent = 'divタグだよ！！';

document.body.appendChild($newElement2);　　　//appendchildはボディの一番下

// 問３
const $newElement3 = document.createElement('a');
$newElement3.href = "https://www.google.com";
$newElement3.target = "_blank";
$newElement3.innerText = "Google.com";
document.body.prepend($newElement3)

// 別問題１
const $body = document.getElementsByTagName('body')
const $newTag =document.createElement('div')
$newTag.id = "kadai";
$newTag.textContent='うん';
document.body.appendChild($newTag)　　//appendchildは問２のさらに下



