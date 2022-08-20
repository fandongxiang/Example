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
