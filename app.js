console.log('---------関数---------');
//k関数の書き方
//function 関数名（）{
//処理
//}
function myalert(){
	//aleart('自作関数からHello');
// confirm('このボタン押してもいいですか？');
	  
//アラートを表示後も自由に処理を追加できる
let hantei = confirm('このボタン押してもいいですか？');

//問題
//okボタンを押されたら『大丈夫」、
//キャンセルが押されたら「やり直し」
//とコンソールに表示しましょう。
console.log (hantei);
if(hantei === true){
	console.log('大丈夫');
}else{
	console.log('やり直し');
}
//文字の変え方
// // let messageSpan = document.getElementById('message');
// messageSpan.textContent = 'ここの文字が変わるよ';
// messageSpan.style.tocolor = 'blue';
// }
//今日の宿題
//ボタンが押されたら「大丈夫」、
//キャンセルが押されたら「やり直し」、
//とid="message"のSpanタグの部分に表示しましょう。

let messageSpan = document.getElementById('message');

if(hantei === true){
	messageSpan.textContent = ('大丈夫');
}else{
	messageSpan.textContent = ('やり直し');
}
}