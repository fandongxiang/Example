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

// // string.length
// let text1 = "This is the letter sigma: \u03a3."
// console.log(text1);
// let text2 = "This is the letter sigma: ."
// console.log(text1.length);
// console.log(text2.length);

// // toString() 方法传入底数参数
// let value = 10;
// console.log(value.toString(2));
// console.log(value.toString(8));
// console.log(value.toString(16));

// // null undefined
// let object1 = null;
// let nothing;
// console.log(String(object1));
// console.log(String(nothing));

// // 模板字面量
// let myTemplateLitteral1 = `first line
// second line`
// let myTemplateLitteral2 = `
// first line
//   second line`
// console.log(myTemplateLitteral2[1]);
// console.log(myTemplateLitteral1.length);
// console.log(myTemplateLitteral2.length);

// // 模板字面量调用函数和方法
// function capitalize(word) {
//   return word[0].toUpperCase() + word.slice(1)
// }
// console.log(`${ capitalize("hello")},${ capitalize("world")}!`);

// // 指数操作符
// console.log(Math.pow(3,2));
// console.log(3 ** 2);
// let squared = 3;
// squared **= 2;
// console.log(squared);

// console.log({toString: () => "world"}.toString());

// // 动态属性
// let person = new Object();
// person.name = "Nicholas";
// console.log(person.name);
// let name = "Nicholas";
// name.age = 27;
// console.log(name.age);

// // 复制值
// let num1 = 5;
// let num2 = num1;
// num2 = 7;
// console.log(num1);

// let obj1 = new Object();
// let obj2 = obj1;
// obj2.name = "Nicholas";
// console.log(obj1.name);

// // 比较
// let str1 = "hello";
// let str2 = "hello";
// console.log(str1 === str2);

// let stu1 = {name: "xiangzai"};
// let stu2 = {name: "xiangzai"};
// console.log(stu1 == stu2);
// console.log(stu1 === stu2);

// // 函数传参
// function addTen(num) {
//   num += 10;
//   return num;
// }
// let number = 5;
// addTen(number)
// console.log(number);

// function arrPush(arr) {
//   arr.push(10);
// }
// let array = [1,2,3]
// arrPush(array)
// console.log(array);

// // instanceof
// let arr = [1,2,3,4];
// let fn = function fn() {
//   return "hello"
// };
// let obj = new Object();
// let number = "27";
// console.log(arr instanceof Array);
// console.log(fn instanceof Function);
// console.log(obj instanceof Object);
// console.log(number instanceof String);
// console.log(number instanceof Object);

// for (var i = 1; i <= 5; i++) {
//   setTimeout(function() {
//     console.log(i)
//   }, 1000)
// }

// // 方法2
// for (let i = 1; i <= 5; i++) {
//   setTimeout(function() {
//     console.log(i)
//   }, 1000)
// }

// // 执行上下文
// let fn,bar;              // 1. 进入全局上下文环境
// bar = function(x) {
//   let b = 5;
//   fn(x + b);             // 3. 进入fn函数上下文环境
// };
// fn = function(y) {
//   let c = 5;
//   console.log(y + c);   // 4. fn出栈，bar出栈
// };
// bar(10)                 // 2. 进入bar函数上下文环境

// // this指向问题
// let fn = function() {
//   console.log(this.name);
// };
// let obj = {
//   name:'',
//   fn
// };
// fn()                      // 方法1
// obj.fn()                  // 方法2
// fn.call(obj)              // 方法3
// let instance = new fn()   // 方法4

// // 闭包
// let single = (function(){
//   let count = 0
//   return {
//     plus(){
//       count++
//       return console.log(count);
//     },
//     minus(){
//       count--
//       return console.log(count);
//     }
//   }
// })()
// single.plus()      // 1
// single.minus()     // 0

// // 函数内有var声明变量
// function add(num1,num2) {
//   var sum = num1 + num2;
//   return sum;
// };
// console.log(add(2,3));           // 5
// console.log(sum);                // sum is not defined

// // 函数内无var声明变量
// function add(num1,num2) {
//   sum = num1 + num2;
//   return sum;
// };
// console.log(add(2,3));           // 5
// console.log(sum);                // 5

// // 变量提升
// console.log(sum);
// console.log(result);
// var sum = 5 + 3;
// let result = 5 + 3;

// // let重复声明
// let a = 3
// let a = 5;          // SyntaxError: Identifier 'a' has already been declared
// console.log(a);

// // var声明迭代变量泄露
// for (var i = 0;i < 3;i++) {}
// console.log(i);                 // 3
// for (let j = 0;i < 3;j++) {}
// console.log(j);                 // ReferenceError: j is not defined

// // const 不能被重新赋值
// const a = 3;
// const a = 5;   // SyntaxError: Identifier 'a' has already been declared

// // const 限制不了对象键
// const o1 = {};
// o1 = {}           // TypeError: Assignment to constant variable.
// const o2 = {};
// o2.name = "fan";
// console.log(o2.name);  // fan

// // Object.freeze()
// const o3 = Object.freeze({})
// o3.name = 'fan';
// console.log(03.name);         // undefined

// // 标识符查找
// var color = 'blue';
// function getColor1() {
//   return color
// }
// console.log(getColor1());  // blue

// function getColor2() {
//   var color = 'red'
//   return color
// }
// console.log(getColor2());  // red

// new Date()
const now = new Date()
console.log(now);            // 2022-09-03T14:19:06.427Z
console.log(typeof now);     // Object
console.log(new Date(1000)); // 1970-01-01T00:00:01.000Z

// new Date(Date.parse(""))
console.log(new Date(Date.parse("9/3/2020")));      // 2020-09-02T16:00:00.000Z
console.log(new Date(Date.parse("September 3,2022")));  // 2022-09-02T16:00:00.000Z
console.log(new Date(Date.parse("Saturday September 3 2022 22:37:20 527Z")));  // 2022-09-03T22:37:20.000Z
console.log(new Date(Date.parse("Saturday September 3 2022 22:37:20.527Z")));  // 2022-09-03T22:37:20.527Z

// new Date(Date.UTC())
console.log(new Date(Date.UTC(2022,8,3,23,1,20))); // 2022-09-03T23:01:20.000Z
console.log(new Date(2022,8,3,23,1,20)); // 2022-09-03T15:01:20.000Z

// Date.now()
console.log(Date.now());  // 1662218840486
