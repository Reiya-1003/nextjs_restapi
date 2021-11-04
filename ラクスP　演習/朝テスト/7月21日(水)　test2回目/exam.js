const $change = document.getElementById('mozi');　　


$change.innerText = '変更後';　

const $usagi = document.getElementById('elTarget');
const $newElement = document.createElement('span');
$newElement.textContent = '100%うさぎ';

$usagi.prepend($newElement);
