// Q1 変数
// // 変数 nickname, age に自分の名前と年齢を代入し、文字列連結で以下のようにコンソールに出力してください。

let nickname = 'ごっしー';
let age = 28;
let greet = '私のニックネームは' + nickname + 'です。年齢は' + age + 'です。'
console.log(greet);

// Q2 配列
// 変数 languages に JavaScript, PHP, Ruby, Python, Go の 5 つの値を持つ配列を代入し、
// その中から JavaScript, Python を取得し、テンプレートリテラルを用いて以下のようにコンソールに出力してください。

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let template = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(template);

// Q3 オブジェクト
// 下記の変数 user を使用し 26 をコンソールに出力してください。

let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
  };
  console.log(user.age);

// Q4 配列 × オブジェクト
// 下記の変数 playerList を使用し The Legend of Zelda をコンソールに出力してください。

let playerList = [
    {
      name: 'John',
      age: 26,
      favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
      name: 'Bob',
      age: 33,
      favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
      name: 'Michael',
      age: 22,
      favorites: ['Football', 'Smash Bros.'],
    },
  ];
  console.log(playerList[1].favorites[1]);  

// Q5 四則演算
// Q4 で定義した変数 playerList を使用し、John, Bob, Michael の年齢の平均値を計算した結果をコンソールに出力してください。

let playerList = [
    {
      name: 'John',
      age: 26,
      favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
      name: 'Bob',
      age: 33,
      favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
      name: 'Michael',
      age: 22,
      favorites: ['Football', 'Smash Bros.'],
    },
  ];
let average  = (playerList[0].age + playerList[1].age + playerList[2].age) / 3;
console.log(average);

// Q6 関数
// Hello とコンソールに出力する関数 sayHello を定義し、実行してください。
// 変数 sayWorld に World とコンソールに出力する無名関数を代入し、実行してください。

function sayHello() {
    console. log('Hello');
}

sayHello();

let sayWorld = function (){
  console.log('World');
}

sayWorld();

// 無名関数の使い方がわかりません


// Q7 メソッド
// Q3 で定義した変数 user に '2000-09-27'を値とする birthday プロパティを追加してください。
// Q3 で定義した変数 user に Hello！とコンソールに出力するメソッド sayHello を追加し、実行してください。
// ※ いずれも Q3 で定義した変数 user を直接書き換えないこと

function sayHello() {
let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
    birthday: '2000-09-27',
  };
  console.log('Hello！');
}

sayHello();

// Q8 引数
// 下記の空のオブジェクト calc を使用し、以下問題を解いてください。

let cal = { 
    add: function (x, y){
        let sum = x + y;
        console.log(sum);
}

};

cal.add(3,4);

let cal = { 
    subtract: function (x, y){
        let num = x - y;
        console.log(num);
}

};

cal.subtract(15,5);

let cal = { 
    multiply: function (x, y){
        let num = x * y;
        console.log(num);
}

};

cal.multiply(7,7);

let cal = { 
    divide: function (x, y){
        let num = x / y;
        console.log(num);
}

};

cal.divide(50,10);



// Q9 返り値
// 2 つの引数 x, y を受け取り、x を y で割った剰余を返り値とする関数 remainder を定義し、
// 5 と 3 を引数に渡して実行した返り値を用いて文字列連結で以下のようにコンソールに出力してください。

function remainder(x,y){
    let num = x % y;
    return num;
}

console.log('5を3で割った余りは' + remainder(5,3) +'です。');



// Q10 スコープ
// 下記の console.log(x); においてコンソールに 1 が出力されることはなく、x is not defined（変数 x が定義されていない）というエラーが出力されます。
// その理由を以下 2 つの単語を使用し app.js にコメントアウトで回答してください。

// function foo() {
//     let x = 1;
//   }
//   console.log(x);

//今使っている値のスコープがどこまでなのかを把握しておくことで、定義したはずの変数が見つからないから。



// Q1 標準組み込みオブジェクト

let random = Math.random(); 
console.log('random => ', random);

// Q2 コールバック関数

setTimeout(function () {
  console.log('Hello World!');
},
  3000);

// Q3 if

let num = 0;
if (num  => 0){
    console.log('a');
} else if(num <= 0){
    console.log('b');
} else if(num === 0){
    console.log('c');
}

// Q4 for]

let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers[i] = i;
  // numbers = i;
  // console.log("for文の中の i：", i);
}

console.log(numbers);

// Q5 for × if

let mixed = [4, '2', 5, '8', '9', 0, 1]; 

for (let i = 0; i < mixed.length; i++) {
  if (mixed[i] % 2 === 0){
    console.log('even');
  } else if (mixed[i] % 2 !== 0){
      console.log('odd');
  } else {
      console.log('not number');
  }
}