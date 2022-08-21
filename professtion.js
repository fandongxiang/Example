// console.log(typeof null);
// let fish
// let sayHi = () => {console.log("Hi");}
// console.log(typeof fish);
// console.log(typeof apple);
// console.log(typeof function() {console.log('hello');});

// var message;
// console.log(message);
// // console.log(age);

// if (message) {
//   console.log("message is true");
// } else {
//   console.log("message is false");
// }

// let age = null;
// console.log(typeof age);
// if (age) {
//   console.log("age is not null");
// } else {
//   console.log("age is null");
// }

// console.log(null == undefined);

// var message = "";
// let a = 0;
// let b = 0 / 0;
// var object = null;
// console.log(Boolean(message));
// console.log(Boolean(a));
// console.log(Boolean(b));
// console.log(Boolean(object));
// // console.log(Boolean(c));

// // console.log(078);
// console.log(Boolean(0.1 + 0.2 == 0.3));
// console.log(Boolean(0.05 + 0.25 == 0.3));

// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);
// console.log(isFinite(Number.MAX_VALUE + Number.MAX_VALUE));

// console.log(0/0);
// console.log(+0/-0);

// console.log(isNaN("string"));
// console.log(isNaN(0));

// console.log(Number("hello"));
// console.log(Number(true));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number("0012"));
// console.log(Number("0012a"));
// console.log(Number("0xF"));
// console.log(Number(""));

// // parseInt()
// console.log(parseInt(""));
// console.log(parseInt("0012a"));
// console.log(parseInt("22.5abc"));
// console.log(parseInt("AF",16));
// console.log(parseInt("AF"));

// // parseFloat()
// console.log(parseInt("0xF"));
// console.log(parseFloat("0xF"));
// console.log(parseFloat("22.25.32"));

// console.log(010);

// string.length
let text1 = "This is the letter sigma: \u03a3."
console.log(text1);
let text2 = "This is the letter sigma: ."
console.log(text1.length);
console.log(text2.length);

// toString() 方法传入底数参数
let value = 10;
console.log(value.toString(2));
console.log(value.toString(8));
console.log(value.toString(16));

// null undefined
let object1 = null;
let nothing;
console.log(String(object1));
console.log(String(nothing));

// 模板字面量
let myTemplateLitteral1 = `first line
second line`
let myTemplateLitteral2 = `
first line
  second line`
console.log(myTemplateLitteral2[1]);
console.log(myTemplateLitteral1.length);
console.log(myTemplateLitteral2.length);

// 模板字面量调用函数和方法
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1)
}
console.log(`${ capitalize("hello")},${ capitalize("world")}!`);

// 指数操作符
console.log(Math.pow(3,2));
console.log(3 ** 2);
let squared = 3;
squared **= 2;
console.log(squared);

console.log({toString: () => "world"}.toString());
