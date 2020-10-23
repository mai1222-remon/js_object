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
console.log('---------関数(引き数)---------');
//関数とは複数の処理を一つにまとめて名前をつけたもの
//引数とは処理を行うために必要な情報。
//k関数の書き方
//function 関数名（引き数１、引き数２,,,,）{
//処理
//}
//alaer(表示したい文字) この場合、表示したし文字、の部分が引数に当たる。

function myalert2(displayMaessage){
	alert(displayMaessage);
}
//以下の関数を作成して、作成した関数を実行してください。
//関数名:printHoge
//処理内容:「Hoge」とコンソールに表示する。
// function printHoge(){
// 	console.log('Hoge');
// }

//作った関数を実行
// printHoge();

//引数あるバージョン
function printHoge(moji){
	console.log(moji);
}
printHoge('Hpge');

//以下の関数を作成して、作成した関数を実行してください。

//関数名:printNum
//引数:1つの数値
//処理内容:引数で受け取った数値をコンソールに表示する。


function printNum(num){
console.log(num);
}
printNum(100);

//関数名:printokuku
//引数:１つの数値
//処理内容:引数で受け取った数値の九九（１から９までかけた数）をコンソールに表示する
//引数に１を指定したら、１の段の計算結果がコンソールに表示されるようにする。
//引数に２を指定したら、２の段の計算結果がコンソールに表示されるようにする。
//for文は１個で大丈夫です。（使わなくても大丈夫）



// function printokuku(num){
// 	console.log(num)
// }for(let num = 1* j; )

// pri1ntNum(let num= i * j++);

//正解
function printkuku(num){
	// let kotae = num * 1;
	// console.log(kotae);
	// kotae = num * 2;
	// console.log(kotae);
	// kotae = num * 3;
	// console.log(kotae);
	// kotae = num * 4;
	// console.log(kotae);
	// kotae = num * 5;
	// console.log(kotae);
	// kotae = num * 6;
	// console.log(kotae);
	// kotae = num * 7;
	// console.log(kotae);
	// kotae = num * 8;
	// console.log(kotae);
	// kotae = num * 9;
	
for(let i =1; i <=9;i++){
	console.log(num * i);
}
}

printkuku(2);
printkuku(3);


//以下の関数を作成して、作成した関数を実行してください。
//関数名:printkakezan
//引数:2つの数値
//処理内容:引数で受け取った２つの数値の掛け算の答えをコンソールに表示する


function printkakezan(num,num2){

	console.log(num * num2);
}

// printkakezan(2);
printkakezan(5,2);

//関数名:printIsEven
//引数:1つの数値
//処理内容:引数で受け取った数値が偶数の場合は「偶数です」と出力し、
//奇数の場合は『奇数です」と出力する。

function printIntEven(num){
	
	if(num % 2===0){
		console.log(`${num})は偶数です`);
	}else{
		console.log(`${num}は奇数です`);
	}
	
}
printIntEven(3)

//以下の関数を作製して、作製した関数を実行してください。
//関数名:printMessage
//引数１:１つの文字列
//引数２:１つの数字
//処理内容:引数で受け取った文字列を、引数で受け取った数値分繰り返し出力する。
function printMessege(num,num2){
for(let i=1;i <=num2;i++)
console.log(num);
}
printMessege(`ドラえもん`,2);

//関数名：printMaxNum
//引数1：1つの数値
//引数2：1つの数値
//処理内容：引数で受け取った2つの数値のうち、最も大きな数値を出力する。

function printMaxNum(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
    } else if (num1 < num2) {
        console.log(num2);
    } else {
				console.log("同じ");
		}
}

printMaxNum(1, 5);

//以下の関数を作成して、作成した関数を実行してください。

//関数名：getSquared
//引数1：1つの数値
//処理内容：引数で受け取った数値の2乗を計算し返す

function getSquared(num) {
    return num * num
}

var result = getSquared(4);
console.log(result);

//以下の関数を作成して、作成した関数を実行してください。

//関数名：createSelfIntroductionText
//引数1：1つの文字列
//処理内容：「私の名前は○○です」という文字の〇〇を引数で受け取った文字列にし返す

function createSelfIntroductionText(name) {
    var msg = "私の名前は" + name + "です";
    return msg;
}

var message = createSelfIntroductionText("NexSeed");
console.log(message);

//以下の関数を作成して、作成した関数を実行してください。

//関数名：isEvenNumber
//引数1：1つの数値
//処理内容：引数で渡された値が偶数の場合は true、そうでない場合は false を返す。

function isEvenNumber(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

var result = isEvenNumber(3);
console.log(result);

//以下の関数を作成して、作成した関数を実行してください。

//関数名：isSeedKun
//引数1：任意の文字列
//処理内容：引数で渡された文字列が「SeedKun」の場合は true、そうでない場合は false を返す。

function isSeedKun(str) {
    if (str == "SeedKun") {
        return true;
    } else {
        return false;
    }
}

var result = isSeedKun("SeedKun");
console.log(result);
