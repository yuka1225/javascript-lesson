// alert('Hello World!');
console.log('Hello World!');

let text = 'JavaScriptの練習';
console.log(text);

text = 'JavaScriptをマスターした';
console.log(text);

// 処理①
let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);

// 処理②
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);

let numTen = 10;
let strTen = '10'; // 追記
console.log(numTen, strTen); // 値を追加

let minus = -10;
let decimal = 1.1;
console.log(minus, decimal);

let num1 = 25;
let num2 = 2;

console.log(num1 / num2); // / に変更

let number = 5;
number = number + 3;
console.log(number);

number -= 1; // number = number - 1と同じ
console.log(number);
number *= 5; // number = number * 5と同じ
console.log(number);
number /= 7; // number = number / 7と同じ
console.log(number);

let increment = 0;
console.log(increment);
increment++; // increment += 1と同じ
console.log(increment);

let decrement = 10;
console.log(decrement);
decrement--; // decrement -= 1と同じ
console.log(decrement);

let stringNum1 = '25';
let stringNum2 = '2';

console.log(stringNum1 + stringNum2);

let names = ['John', 'Bob', 'Michael', 'Emma'];
console.log(names);

let emptyNames = [];

emptyNames[0] = 'John';
emptyNames[1] = 'Bob';
emptyNames[2] = 'Michael';
emptyNames[3] = 'Emma';
console.log(emptyNames, emptyNames.length);;

function define1() { // define1という名前の関数
  return 'This is console in showConsole function!';
}

const define2 = function() { // 名前のない関数（無名関数）を変数define2に代入
  return 'This is console in showConsole function!';
}


function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

doFunc(function() {
  console.log('コールバック関数が呼び出されました');
});

function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

function output() {
  console.log('コールバック関数が呼び出されました');
}

doFunc(output)  // 名前付きの関数を渡す時は、()を付けずに渡す


let John = {
  name: 'John',  // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  sing: function() {
    console.log('LA~LA~LA~~~♪');
  }
};

John.sing();  // 追記

let round = Math.round(2.86); // 四捨五入
console.log('round => ', round);

let ceil = Math.ceil(4.05);   // 切り上げ
console.log('ceil => ', ceil);

let floor = Math.floor(4.98); // 切り下げ
console.log('floor => ', floor);

let random = Math.random(); // 0~1までの乱数の生成
console.log('random => ', random);



let userAge = 0;  // 変数の定義を関数の外で行う
myFunc();

function myFunc() {
  userAge = 27;  // ここは再代入するように変更
  console.log(userAge); // => 27がConsoleに表示される
}

console.log(userAge); // => 27がConsoleに表示される

if (false) {
  console.log('trueです！');
}
console.log('処理が終わりました');

let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');

let signal = 'red';
if (signal === 'red') {
  console.log('赤信号です。止まりましょう');
} else if (signal === 'blue') {
  console.log('青信号です。進みましょう');
} else if (signal === 'yellow') {
  console.log('黄色信号です。空気を読みましょう');
}


let myAge = 12; // 数字を12に変更
if (myAge >= 35) {
  console.log('健康診断でバリウムを飲みます');
} else if (myAge >= 20) {
  console.log('お酒が飲めます');
} else if (myAge >= 18) {
  console.log('選挙権があります');
} else {
  console.log('子供です');
}

let numVal = 8;
let strVal = 'text'

console.log(numVal === 7 || strVal === 'text');

let userA = '到着';
let userB = '不在';

if (userA === '到着' && userB === '到着') {
  console.log('全員揃ったので出発します。');
} else {
  console.log('揃っていないため、出発できません。');
  
}

if (1) {
  console.log('hoge');
}

if (0) {
  console.log('piyo');
}

for (let i = 0; i < 10; i++) {
  console.log(i + '回目のコンソール');
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);