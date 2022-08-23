# JavaScript高级程序设计（第4版）
## 第三章 语言基础
### 3.4 数据类型
#### 3.4.1 typeof 操作符
1. typeof 操作符返回的类型：undefined、Boolean、String、number、Object、function、symbol

``` js
let fish
let sayHi = () => {console.log("Hi");}
console.log(typeof fish);   // 输出undefined，声明未初始化为 undefined
console.log(typeof apple);  // 输出undefined，未声明为 undefined
console.log(typeof null);   // 输出 object，null 为 object
console.log(typeof function() {console.log('hello');}); // 输出为 function

```
> 严格来讲，ECMAScript 中认为函数是一种对象，并不代表一种数据类型，但它有自己的属性。为此，有必要通过 typeof 来区分函数和其它对象。

#### 3.4.2 undefined 类型
1. 声明未初始化的变量，为 `undefined`；
2. 未声明的变量，报错，只能执行 `typeof` 操作符；
3. `undefined` 是假值，可用于 `if` 判断；
4. 引入 `undefined` 是为了明确空对象指针（null）和未初始化变量的区别；
``` js
let message;
console.log(message);               // undefined
console.log(age);                   // ReferenceError: age is not defined
if (message) {
  console.log("message is true");
} else {
  console.log("message is false");  // 输出 message is false
}
```
#### 3.4.3 null 类型
1. null 是一个空对象指针，所以执行 typeof 操作符输出object；
``` js
let age = null;
console.log(typeof age);          // 输出 object
```
2. undefined 值是由 null 派生而来，所以两者表面上相等；
``` js 
console.log(null == undefined);   // 输出 true
```
3. 用 null 初始化空对象，可以避免 if 判断该对象是未声明，还是未保存对象；
``` js
let age = null;
if (age) {
  console.log("age is not null");
} else {
  console.log("age is null");             // 输出 age is null ，排除未初始化可能
}
```
#### 3.4.4 Boolean 类型
1. Boolean() 转型函数可用来判断相应数据类型等价的 Boolean 类型；
2. String中的空字符串、Number中的0和NaN、Object中的null、Undefined中的undefined都会被转换为false；
3. 理解以上，可以在if流程中实现判断；
``` js
var message = "";
let a = 0;
let b = 0 / 0;
var object = null;
console.log(Boolean(message));         // false
console.log(Boolean(a));               // false
console.log(Boolean(b));               // false 
console.log(Boolean(object));          // false
console.log(Boolean(c));               // false
```
#### 3.4.5 Number 类型
1. 八进制以 0 开头，但如果数字范围超过八进制，则忽略 `0` 按照十进制处理；
2. 浮点数计算会存在误差，导致`0.1 + 0.2` 实际不等于`0.3`；
3. js 中最小值为 Number.MIN_VALUE，最大值为Number.MAX_VALUE，判断是否在有效范围可用`isFinite()`函数；
4. isNaN()函数可以判断一个数是否为Number类型，其中仅有`0`、`+0`、`-0`相除会返回`NaN`；
5. Number() 数值转换函数:
   (1) 布尔值：`true`返回`1`，`false`返回`0`；
   (2) 数值：直接返回；
   (3) 字符串：字符串开头反馈`NaN`，数值开头省略前面`0`输出数字（十六进制转换为十进制），空字符串返回`0`；
   (4) undefined: 返回 `NaN`；
   (5) null：返回`0`；
6. parseInt() 和 Number() 的不同：
   (1) 如果第一个非空字符不是数值字符、加号或减号，返回NaN，导致空字符串为NaN；
   (2) 会从数值字符、加号或减号，检测到非数字，后面含有字符也会输出前面的数字；
   (3) 转换为整数；
   (4) 可输入第二个参数作为底数；
7. parseFloat()和parseInt不同：
   (1) 只解析十进制，十六进制始终输出0；
   (2) 第一个小数点有效，遇到第二个小数点无效；
``` js
// 八进制超出
console.log(010);                         // 8
console.log(078);                         // 输出 78
// 0.1 + 0.2
console.log(Boolean(0.1 + 0.2 == 0.3));   // false
console.log(Boolean(0.05 + 0.25 == 0.3)); // true 
// isFinite()
console.log(Number.MIN_VALUE);            // 5e324
console.log(Number.MAX_VALUE);            // 1.7976931348623157e+308
console.log(isFinite(Number.MAX_VALUE + Number.MAX_VALUE));  // false
// NaN&isNaN()
console.log(0/0);                         // NaN
console.log(+0/-0);                       // NaN
console.log(isNaN("string"));             // true
console.log(isNaN(0));                    // false
// Number()
console.log(Number(true));                // 1
console.log(Number(null));                // 0
console.log(Number(undefined));           // NaN
console.log(Number("0012"));              // 12
console.log(Number("0012a"));             // NaN
console.log(Number("0xF"));               // 15
console.log(Number(""));                  // 0
// parseInt()
console.log(parseInt(""));                // NaN
console.log(parseInt("0012a"));           // 12
console.log(parseInt("22.5"));            // 22
console.log(parseInt("AF",16));           // 175
console.log(parseInt("AF"));              // NaN
// parseFloat()
console.log(parseInt("0xF"));             // 15
console.log(parseFloat("0xF"));           // 0
console.log(parseFloat("22.25.32"));      // 22.25
```
#### 3.4.6 String 类型
##### 3.4.6.1 基础知识
1. 转义字符按照单个字符计算长度；
2. 数值、布尔值、对象和字符串值都有 `toString()` 方法，但 `null` 和 `undefined` 没有；
3. 数值可以在转换为字符串时，加入第二个底数参数，表示转换为多少进制；
4. `string()` 函数：
   (1) 如果值有 `toString()` 方法，则调用该方法，返回相应结果；
   (2) `null` 和 `undefined` 使用 `string()` 函数，直接返回 `null` 、`undefined`。等价于 `typeof` 操作符判断;
5. 除了 `toString()` 方法，加号操作符也能将数值隐式转换为字符串；
``` js
// 转义字符按单个字符算
let text1 = "This is the letter sigma: \u03a3."  // This is the letter sigma: Σ.
let text2 = "This is the letter sigma: ."
console.log(text1.length);            // 28
console.log(text2.length);            // 27
// toString() 方法传入底数参数
let value = 10;
console.log(value.toString(2));       // "1010"
console.log(value.toString(8));       // "12" 
console.log(value.toString(16));      // "a"
// null、undefined使用String()函数
let object1 = null;
let nothing;
console.log(String(object1));        // null
console.log(String(nothing));        // undefined
```

##### 3.4.6.2 模板字面量 ``
1. 模板字面量可实现换行功能；
2. 模板字面量空格和换行会计入字符；
3. 使用 `${ }` 实现字符串插值操作，所有的插值都会调用 `toString()` 方法，并且可以调用函数和方法；
4. 模板字面量与标签函数；
5. 模板字面量与原始字符串；
``` js
// 模板字面量空格和换行
let myTemplateLitteral1 = `first line
second line`
let myTemplateLitteral2 = `
first line
  second line`
console.log(myTemplateLitteral2[1]);        // f
console.log(myTemplateLitteral1.length);    // 23
console.log(myTemplateLitteral2.length);    // 25
// 模板字面量调用函数和方法
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1)
}
console.log(`${ capitalize("hello")},${ capitalize("world")}!`);   // Hello,World!
```
#### symbol 类型
#### Object 类型
### 3.5 操作符
#### 3.5.5 指数操作符
1. ECMAScript 7新增了指数操作符，`Math.pow()` 现在有了自己的操作符 `**`；
2. 指数操作符也有了自己的指数赋值操作符 `**=`；
``` js
// 指数操作符
console.log(Math.pow(3,2));        // 9
console.log(3 ** 2);               // 9
let squared = 3;
squared **= 2;
console.log(squared);              // 9
```

## 第四章 作用域与内存
### 4.1 原始值与引用值
#### 4.1.1 动态属性
1. 引用值可以随时增加、删除和修改属性，而原始值不行；
``` js
// 动态属性
let person = new Object();
person.name = "Nicholas";
console.log(person.name);           // "Nicaholas"

let name = "Nicholas";
name.age = 27;
console.log(name.age);              // undefined
```
#### 4.1.2 复制值
1. 引用类型赋【引用】，原始类型赋【值】；
``` js
// 复制值
let num1 = 5;
let num2 = num1;
num2 = 7;
console.log(num1);            // 5

let obj1 = new Object();
let obj2 = obj1;
obj2.name = "Nicholas";
console.log(obj1.name);      // "Nicholas"
```
#### 4.1.3 比较
1. 原始类型比较的时**值**是否相等，引用类型比较的是**引用**是否指向同一个对象；
``` js
// 比较
let str1 = "hello";
let str2 = "hello";
console.log(str1 === str2);         // true

let stu1 = {name: "xiangzai"};      
let stu2 = {name: "xiangzai"};
console.log(stu1 == stu2);          // false
console.log(stu1 === stu2);         // false  
```

#### 4.1.4 函数传参
1. 原始类型作为参数，函数内的操作不影响实参的值；引用类型作为参数，函数内的操作会影响实参的值；
``` js
// 函数传参
function addTen(num) {
  num += 10;
  return num;
}
let number = 5;
addTen(number)
console.log(number);          // 5

function arrPush(arr) {
  arr.push(10);
}
let array = [1,2,3]
arrPush(array)
console.log(array);           // [1,2,3,10]
```

#### 4.1.5 确定类型
1. `typeof` 操作符可以检测到原始类型，但如果具体要知道具体是哪一种引用类型，则需要用`instanceof`操作符来判断；
``` js 
// instanceof
let arr = [1,2,3,4];
let fn = function fn() {
  return "hello"
};
let obj = new Object();
let number = "27";
console.log(arr instanceof Array);         // true
console.log(fn instanceof Function);       // true
console.log(obj instanceof Object);        // true 
console.log(number instanceof String);     // false
console.log(number instanceof Object);     // false
```
> instanceof 不能对原始值的类型进行判断

### 4.2 执行上下文与作用域
4.2.1 
