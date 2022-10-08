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
2. undefined 值是由 null 派生而来，所以两者表面上相等；
3. 用 null 初始化空对象，可以避免 if 判断该对象是未声明，还是未保存对象；

``` js
let age = null;
console.log(typeof age);          // 输出 object

console.log(null == undefined);   // 输出 true

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

#### 3.4.7 Symbol 类型

> Symbol是ES6新增的数据类型，也称为“符号”。符号是原始值，且符号的值是唯一的，不可变的。符号的用途是确保对象属性使用唯一的标识符。

##### 3.4.7.1 Symbol的基本特性

1. 符号本身是原始类型，`typeof`操作符识别为`Symbol`类型；
2. 符号是唯一的，两个符号不能相等；
3. 符号可以传入描述，但与符号定义和标识完全无关。可以用`.discription`获取描述。
4. 符号没有字面量语法，并且不能与`new`关键词使用；

  ``` js
    // Symbol 特点
    let s1 = Symbol();
    let s2 = Symbol();
    console.log(typeof s1);  // symbol
    console.log(s1 === s2); // false
    let s3 = Symbol('red')
    let s4 = Symbol('red')
    console.log(s3 === s4);  // false   
  ```

##### 3.4.7.2 Symbol.for()实现共享和重用

  ``` js
    // Symbol.for()
    let s1 = Symbol.for('foo')
    let s2 = Symbol.for('foo')
    let s3 = Symbol('foo')
    console.log(s1 === s2); // true
    console.log(s1 === s3); // false

    console.log(Symbol.keyFor(s1)); // foo
    console.log(Symbol.keyFor(s3)); // undefined
    console.log(Symbol.keyFor(123)); // TypeError: 123 is not a symbol
  ```

##### 3.4.7.3 使用符号作为属性

1. 作为属性时，要加`[]`；
2. 对象调用`Symbol`属性的键时，只能用`[]`形式调用；
3. 作为属性时，无法遍历；

  ``` js
    // 符号属性
    let name = Symbol('name')
    let sex = Symbol('sex')
    let person = {
      [name]: 'fantasy',
      [sex]: '男',
      like: 'play',
      height: 178
    }
    console.log(person[name]); // fantasy
    console.log(person.sex); // undefined

    for (key in person) {
      console.log(person[key]); // 依次输出 play 178
    }
  ```

##### 3.4.7.4 常用内置符号

> ES6引入了一批常用内置符号（well-known symbol），用于暴露语言内部行为，开发者可直接访问、重写或模拟这些行为。这些符号最重要用途之一是重新定义它们，从而改变原生结构的行为。

#### 3.4.8 Object 类型

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

1. 变量或函数的上下文决定了它们可以访问哪些数据，以及它们的行为；
2. 执行上下文是**函数调用**时产生的**变量对象**，这个变量对象我们无法直接访问，但可以访问其中的变量、this对象等，例如：

``` js
// 执行上下文
let fn,bar;              // 1. 进入全局上下文环境
bar = function(x) {
  let b = 5;
  fn(x + b);             // 3. 进入fn函数上下文环境
};
fn = function(y) {
  let c = 5;
  console.log(y + c);   // 4. fn出栈，bar出栈
};
bar(10)                 // 2. 进入bar函数上下文环境
```

> 每次函数调用时，都会产生一个**新的执行上下文环境**，JavaScript引擎会以栈的方式来处理它们，这个栈，我们称其为**函数调用栈(call stack)**。**栈底**永远都是**全局上下文**，而**栈顶**就是当前处于活动状态的正在执行的上下文，也称为**活动对象**（running execution context），区别与底下被挂起的上下文（**变量对象**）。
总结：作用域是在函数声明的时候就确定的一套变量**访问规则**，而执行上下文是函数执行时才产生的一系列**变量的环境**。也就是说作用域定义了执行上下文中的变量的访问规则，执行上下文在这个作用域规则的前提下进行变量查找，函数引用等具体操作。

#### 4.2.1 函数的执行过程

1. 函数执行分为两部分：一部分用来生成执行上下文环境，确定this指向、声明变量及生成作用域链；另一部分则是按照顺序逐行执行代码；
2. this指向问题：

``` js
// this指向问题
let fn = function() {
  console.log(this.name);
};
let obj = {
  name:'',
  fn
};
fn()                      // 方法1：直接调用函数，this指向windows
obj.fn()                  // 方法2：对象调用函数，this指向被调用对象obj
fn.call(obj)              // 方法3：call函数调用，this指向第一个参数obj
let instance = new fn()   // 方法4：new实例对象，this指向实例instance
```

> 四种指向中优先级：
> fn() < obj.fn() < fn.call(obj) < new fn()

#### 4.2.2 闭包

> 当函数能够记住并访问所在的词法作用域时，就产生了闭包。

例1：

``` js
let single = (function(){
  let count = 0
  return {
    plus(){
      count++
      return count
    },
    minus(){
      count--
      return count
    }
  }
})()
single.plus()      // 1
single.minus()     // 0
```

> 这是个单例模式，这个模式返回了一个对象single，对象中包含两个函数plus和minus，而这两个函数都用到了所在词法作用域中的变量count，所以在函数执行结束时count所在的执行环境不会被销毁，这就产生了闭包。每次调用single.plus()或者single.minus()，就会对闭包中的count变量进行修改，这两个函数保持住了对所在的词法作用域的引用。闭包其实是一种特殊的函数，它可以访问函数内部的变量，还可以让这些变量的值始终保持在内存中，不会在函数调用后被垃圾回收机制清除。

例2：

``` js
// 方法1
for (var i = 1; i <= 5; i++) {
  setTimeout(function() {
    console.log(i)
  }, 1000)
}                                   // 5,5,5,5,5
// 方法2
for (let i = 1; i <= 5; i++) {
  setTimeout(function() {
    console.log(i)
  }, 1000)
}                                  // 1,2,3,4,5
```

> 方法1中，循环设置了五个定时器，一秒后定时器中回调函数将执行，打印变量i的值。毋庸置疑，一秒之后i已经递增到了5，所以定时器打印了五次5 。（定时器中并没有找到当前作用域的变量i，所以沿作用域链找到了全局作用域中的i）
> 方法2中，由于es6的let会创建局部作用域，所以循环设置了五个作用域，而五个作用域中的变量i分布是1-5，每个作用域中又设置了一个定时器，打印一秒后变量i的值。一秒后，定时器从各自父作用域中分别找到的变量i是1-5 。这是个利用闭包解决循环中变量发生异常的新方法。

#### 4.2.3 变量声明

1. 使用`var`声明的函数作用域
   (1) 函数内变量声明有`var`时，变量为局部变量，函数外不可访问；
   (2) 函数内变量声明无`var`时，变量为全局变量，函数外可以访问；
   (3) `var`声明会被拿到函数或全局作用域的顶端，提升让同一作用域不必考虑变量是否声明就 可使用；

    ``` js
    // 函数内有var声明变量
    function add(num1,num2) {
      var sum = num1 + num2;
      return sum;
    };
    console.log(add(2,3));           // 5
    console.log(sum);                // sum is not defined
    // 函数内无var声明变量
    function add(num1,num2) {
      sum = num1 + num2;
      return sum;
    };
    console.log(add(2,3));           // 5
    console.log(sum);                // 5

    // 变量提升
    console.log(sum);               // undefined
    console.log(result);            // Cannot access 'result' before initialization
    var sum = 5 + 3;
    let result = 5 + 3;
    ```

2. 使用`let`的块级作用域声明
  (1) `let`块级作用域在最近的一对`{}`花括号内界定；
  (2) `let`不能重复声明变量，也不能用`var`重复声明；
  (3) `let`不会将函数内迭代变量泄露到函数外部；

    ``` js
    // let重复声明
    let a = 3
    let a = 5;          // SyntaxError: Identifier 'a' has already been declared
    console.log(a);

    // var声明迭代变量泄露
    for (var i = 0;i < 3;i++) {}
    console.log(i);                 // 3
    for (let j = 0;i < 3;j++) {}
    console.log(j);                 // ReferenceError: j is not defined
    ```

3. 使用`const`的常量声明
  (1) 使用`const`声明的变量不能重新赋值（语法错误：标识符‘a’已被声明）；
  (2) `const`声明只应用到顶级原语或者对象，即不能再被赋值为其它引用值，但对象的键不受限制（输入错误：常量变量赋值）；
  (3) 若要对象整体不被重新赋值，则要用`Object.frezze()`；

    ``` js
    // const 不能被重新赋值
    const a = 3;
    const a = 5;   // SyntaxError: Identifier 'a' has already been declared

    // const 限制不了对象键
    const o1 = {};
    o1 = {}           // TypeError: Assignment to constant variable.
    const o2 = {};
    o2.name = "fan";
    console.log(o2.name);  // fan

    // Object.freeze()
    const o3 = Object.freeze({})
    o3.name = 'fan';
    console.log(03.name);         // undefined
    ```

#### 4.3.4 标识符查找

1. 标识符先在局部作用域查找，如果查找到就停止，查找不到就沿作用域链查找直至全局作用域（注意：作用域链中的对象也有一个原型链，搜索会涉及每个对象原型链）；
2. 局部作用域和全局作用域同一个标识符时，会在搜索到局部作用域时停止；

``` js
// 标识符查找
var color = 'blue';
function getColor1() {
  return color
}
console.log(getColor1());  // blue

function getColor2() {
  var color = 'red'
  return color
}
console.log(getColor2());  // red
 ```

## 第5章 基本引用类型

> **引用类型**是把数据和功能组织到一起的结构，类似于“类”，有时也被称为**对象定义**，应为它们描述了自己的对象应有的属性和方法。
> **对象**被认为是某个特定引用类型的**实例**。新对象通过`new`操作符后跟一个**构造函数**来创建。构造函数就是用来创建新对象的函数。

### 5.1 Date原生引用类型

1. 要创建日期对象，就使用`new`操作符来调用`Date`构造函数；
2. `new Date()`在不传入任何参数时，创建的**对象**将保存当前的时间和日期；
3. `new Date()`传入毫秒数参数时，表示基于1970年1月1日午夜之后经过的毫秒数日期对象；
4. `new Date.(Date.parse(""))`传入一个日期**字符串**，尝试将日期字符串转换为对应毫秒数后再转换为相应日期**对象**，可以有以下4中格式：
   (1) "月/日/年"，如“9/3/2020”；
   (2) "月名 日，年"，如"September 3,2022";
   (3) "周几 月名 日 年 时:分:秒 时区"，如"Saturday September 3 2022 22:37:20";
   (4) "YYYY-MM-DDTHH:mm:ss.sssZ"，如"2022-09-03T22:46:20"
5. `new Date(Date.UTC(年,零起点月,日,时,分,秒))`，年和月是必须，如果其余不传默认1日；
6. `Date.parse()`和`Date.UTC()`都会被`new Date()`隐式调用，但不同的是`Date.UTC()`调用后是本地时间；
7. `Date.now()`方法表示执行时日期和时间的毫秒数。

``` js
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

// Date.parse()和Date.UTC()的区别
const parse_time = Date.parse("2022-09-04T00:00:00")
const UTC_time = Date.UTC(2022,8,4,0,0,0)
console.log(parse_time);                               // 1662220800000
console.log(UTC_time);                                 // 1662249600000
console.log((UTC_time - parse_time) / (3600*1000));    // 8

// Date.now()
console.log(Date.now());  // 1662218840486
 ```

#### 5.1.1 继承的方法

待补充

#### 5.1.2 日期格式化方法

1. `toDateString()`显示日期的周几、月、日、年（格式特定于实现）；
2. `toTimeString()`显示日期的时、分、秒、时区（格式特定于实现）；
3. `toLocaleDateString()`显示日期的周几、月、日、年（格式特定于实现）；
4. `toLocaleTimeString()`显示日期的时、分、秒、时区（格式特定于实现）；
5. `toUTCString()`显示完整的UTC日期（格式特定于实现）。

> 这些方法输出与`toLocaleString()`和`toString()`一样，会因浏览器差异而定，因此不能用于用户界面一致的显示日期。

#### 5.1.3 日期/时间的组件方法

1. `getTime()`:返回日期的毫秒表示，与`valueof()`相同；
2. `setTime(milliseconds)`:

| 方法                               | 说明                                                    |
| :--------------------------------- | :------------------------------------------------------ |
| `getTime()`                        | 返回日期的毫秒表示，与`valueof()`相同                   |
| `setTime(milliseconds)`            | 设置日期的毫秒表示，从而修改整个日期                    |
| `getFullYear()`                    | 返回4位数年                                             |
| `getUTCFullYear()`                 | 返回UTC日期的4位数年                                    |
| `setUTCFullYear(year)`             | 设置日期的年（year必须是4位数）                         |
| `getMonth()`                       | 返回零起点月份（0表示1月份，11表示12月份）              |
| `getUTCMonth()`                    | 返回UTC日期的零起点月份（**0表示1月份，11表示12月份**） |
| `setUTCFullMonth(month)`           | 设置日期的月（month为大于0的值，大于11加年）            |
| `getDate()`                        | 返回日期中的月                                          |
| `getUTCDate()`                     | 返回UTC日期中的月                                       |
| `setDate(date)`                    | 设置日期中的日，如果日大于当月最大天数则加月            |
| `setUTCDate(date)`                 | 设置UTC日期中的日，如果日大于当月最大天数则加月         |
| `getDay()`                         | 返回日期中周几（**0表示周天**，6表示周六）              |
| `getUTCDay()`                      | 返回UTC日期中周几（**0表示周天**，6表示周六）           |
| `getHours()`                       | 返回日期中的时（0-23）                                  |
| `getUTCHours()`                    | 返回UTC日期中的时（0-23）                               |
| `setHours(hours)`                  | 设置日期中的时，如果时间大于23则日                      |
| `setUTCHours(hours)`               | 设置UTC日期中的时，如果时间大于23则日                   |
| `getMinutes()`                     | 返回日期中的分（0-59）                                  |
| `getUTCMinutes()`                  | 返回UTC日期中的分（0-59）                               |
| `setMinutes(minutes)`              | 设置日期中的分，如果时间大于59则时                      |
| `setUTCMinutes(minutes)`           | 设置UTC日期中的分，如果时间大于59则时                   |
| `getSeconds()`                     | 返回日期中的秒（0-59）                                  |
| `getUTCSeconds()`                  | 返回UTC日期中的秒（0-59）                               |
| `setSeconds(seconds)`              | 设置日期中的秒，如果时间大于59则分                      |
| `setUTCSeconds(seconds)`           | 设置UTC日期中的秒，如果时间大于59则分                   |
| `getMilliseconds()`                | 返回日期中的毫秒                                        |
| `getUTCMilliseconds()`             | 返回UTC日期中的毫秒                                     |
| `setMilliseconds(milliseconds)`    | 设置日期中的毫秒                                        |
| `setUTCMilliseconds(milliseconds)` | 设置UTC日期中的毫秒                                     |
| `getTimezoneOfSet()`               | 返回以分钟计算的UTC与本地时区的偏移量                   |

``` js
// 日期/时间组件
const time = new Date(2022,8,3,12,33,10);
console.log(time);                    // 2022-09-03T04:33:10.000Z
console.log(time.getTime());          // 1662179590000
console.log(time.getFullYear());      // 2022
console.log(time.getUTCFullYear());   // 2022
console.log(time.getHours());         // 12
console.log(time.getUTCHours());      // 4
console.log(time.setSeconds(0));      // 1662179580000
console.log(time);                    // 2022-09-03T04:33:00.000Z
 ```

### 5.2 RegExp方法

#### 5.2.1 正则表达式基础

1. 正则表达式的格式为：/pattern(模式)/flags(标记)；
2. 表示匹配模式的标记主要有以下：
   (1) `g`：全局模式，表示查找字符串的全部内容，不是查找到第一个就停止；
   (2) `i`：不区分大小写，表示忽略pattern和字符串大小写；
   (3) `m`：多行模式，表示查找到一行文本末尾时继续查找；
   (4) `y`：黏附模式，表示查找从`lastIndex`开始及之后的字符串；
   (5) `u`：Unicode模式，启用Unicode模式；
   (6) `s`：dotAll模式，表示元字符，匹配任何字符串（包括\n \r）；
3. 常见限定符号：
   (1) `?`：表示前面的字符可以出现**0或1次**；
   (2) `*`：表示前面的字符可以出现**0或多次**；
   (3) `+`：表示前面的字符可以出现**1或多次**；
   (4) `{n,m}`：`{n}`表示前面的字符出现**n次**，`{n,}`表示前面的字符出现**n次**以上，`{n,m}`表示前面的字符出现**n-m次**；
   (5) `(XXX)限定符`：表示将括号内的字符按照限定符匹配；
4. 或运算符：
   (1) `(n|m)`：表示或运算符，匹配`n`或`m`；
   (2) `[abc]`：表示字符只能取自它们，并且数量不限；
   (3)  `[a-zA-Z0-9]`：表示a-z、A-Z、0-9的字符，如果括号内前面有`^`号，表示匹配除括号内列出的其余字符；
5. 元字符：
   (1) `\d`：代表数字字符，等同于`[0-9]`；
   (2) `\D`：代表非数字字符，等同于`[^0-9]`；
   (3) `\w`：代表单词字符，表示所有的数字、字母和下划线；
   (4) `\W`：代表非单词字符，表示除过所有的数字、字母和下划线；
   (5) `\s`：代表所有的空白字符；包括TAB和换行符；
   (6) `\S`：代表所有非空白字符；
   (7) `.`：句点代表任意字符，但不包括**换行符**；
   (8) `^`：代表匹配行首的字符；
   (9) `$`：代表匹配行尾的字符；
6. 贪婪与懒惰匹配：
举例：`<span><b>This a sample text<b/><span/>``<.+>`会匹配任意多的字符，将整个文本都匹配，但如果用`<.+?>`会将贪婪匹配转换为懒惰匹配，只匹配html标签；

``` js
let str = "abc1990def288";
// 无全局匹配模式下单个\d，匹配第一个数字
console.log(str.match(/\d/));    // ["1"]

// 无全局匹配模式下\d+，匹配第一个连续的数字
console.log(str.match(/\d+/));   // ["1990"]

// 全局匹配模式下\d，挨个输出每个数字
console.log(str.match(/\d/g));   // [ '1', '9', '9', '0' , '2' , '8' , '8']

// 全局匹配模式下\d+，挨个输出连续的数字
console.log(str.match(/\d+/g));  // [ '1990', '288' ]

// 无全局匹配模式下\d\d，输出第一个两位数字
console.log(str.match(/\d\d/));  // [ '19' ]

// 全局匹配模式下\d\d，依次输出两位数字
console.log(str.match(/\d\d/g)); // [ '19', '90', '28']
```

> **注意**：纯`\d`时可匹配任意多个数字，但是前面如果有其它字符时，只能匹配一个。

#### 5.2.2 正则表达式进阶（bilibili）

##### 1. 正则表达式与传统方法的区别

``` js
// 传统方法提取字符串中的数字
let str = "abcd1862dcndna1563"
console.log([...str]);
let numberArr = [...str].filter(a=> !Number.isNaN(parseInt(a)));
let numberStr = numberArr.join("")
console.log(numberStr);
// 正则表达式提取字符串中的数字
console.log(str.match(/\d/g).join(""));
```

##### 2. 正则表达式的创建方法

   (1) `//`字面量创建正则表达式，书写简单但不能识别**变量**；
   (2) `new RegExp("字符"或变量,"匹配模式")`，对象创建中正则不用用`//`；

``` js
// 字面量创建正则表达式
let name = "fandongxiang";
console.log(/a/.test(name));          // true
let str = "a";
console.log(eval(`/${str}/`).test(name));   // true

// 对象创建正则表达式
let name = "fandongxiang";
let str = "a";
let reg1 = new RegExp("a","g");           // 字符串
let reg2 = new RegExp(str,"g");           // 变量 
console.log(reg1.test(name));
console.log(reg2.test(name));
```

###### 3. `|`或运算符：表示或运算

``` js
// 或运算符
// 检测“010”或“020”地区的电话号码
let tel1 = "010-12345678";
let tel2 = "030-12345678";
let tel3 = "020-123456789";
let tel4 = "020-123456"
console.log(/^(010|020)\-\d{7,8}$/.test(tel1));       // true
console.log(/^(010|020)\-\d{7,8}$/.test(tel3));       // false
console.log(/^(010|020)\-\d{7,8}$/.test(tel3));       // false
console.log(/^(010|020)\-\d{7,8}$/.test(tel4));       // false
```

> **注意**：这里的`(abc|de)`必须是要么是`abc`要么是`de`，而原子组中的`[abcde]`是`a`、`b`、`c`、`d`、`e`中的任意一个；

##### 4. 转义字符

(1) 字面量中转义字符用`\`表示即可；
(2) 对象创建的正则中，因为传入的是字符串，而字符串的单个`\`是自动忽略的，所以需要用`\\`进行转义；

``` js
// 转义
let str = "2.33";
let reg1 = new RegExp("\d+\.\d+","g")
let reg2 = new RegExp("\\d+\\.\\d+","g")
console.log(/^\d+\.\d+$/.test(str));     // true
console.log(reg1.test(str));             // false 
console.log(reg1.test("dddddd"));        // true
console.log("\d+\.\d+");                 // d+.d+
console.log(reg2.test(str));             // true

// 网址匹配练习
let url1 = "https://www.baidu.com";
let url2 = "www.baidu.com";
let url3 = "www.baidu.cn";
let url4 = "baidu.com";
let url5 = "http://baidu.com";
console.log(/^((https:\/\/|http:\/\/)www\.|(www\.))?\w+\.(com|cn|org)$/.test(url1));   // true
console.log(/^((https:\/\/|http:\/\/)www\.|(www\.))?\w+\.(com|cn|org)$/.test(url2));   // true
console.log(/^((https:\/\/|http:\/\/)www\.|(www\.))?\w+\.(com|cn|org)$/.test(url3));   // true
console.log(/^((https:\/\/|http:\/\/)www\.|(www\.))?\w+\.(com|cn|org)$/.test(url4));   // true
console.log(/^((https:\/\/|http:\/\/)www\.|(www\.))?\w+\.(com|cn|org)$/.test(url5));   // false

// 关于数字和字母判断
let str = ".33"
let num = .33
console.log(/^\d+\.\d+$/.test(str));    // false
console.log(/^\d+\.\d+$/.test(num));    // true 
console.log(.33 === 0.33);              // true
```

##### 5. 字符边界

(1) `//`：没有字符边界时表示字符串中只要包含正则就能匹配成功；
(2) `/^$/`：有字符边界时表示字符串必须头尾都符合正则才能匹配成功；

``` js
// 字符边界
let str1 = "abc123def";
let str2 = "123def";
console.log(/\d/.test(str1));            // true
console.log(/^\d/.test(str1));           // false
console.log(/^\d/.test(str2));           // true
console.log(/^\d$/.test(str2));          // false
```

##### 6. 元字符

1. `[\s\S]`、`[\d\D]`、`[\w\W]`会匹配任何字符；

``` js
// 模板字面量表示字符串
let message = `
张三: 010 - 9999999, 
李四: 020 - 88888888`
// 匹配姓名
console.log(message.match(/[^-\d:\s,]+/g));    // [ '张三', '李四' ]
// 匹配电话
console.log(message.match(/\d+\s-\s\d+/g));    // [ '010 - 9999999', '020 - 88888888' ]

// \w和\W
let str = "123_456@qq.com"
console.log(str.match(/\w+/g));     // [ '123_456', 'qq', 'com' ]
console.log(str.match(/\W/g));      // [ '@', '.' ]

// 匹配html标签中的所有元素
let html = `
  <span>
    123abc_&&@@
  </span>
`
let html = `
  <span>
    123abc_&&@@
  </span>
`
console.log(html.match(/<span>[\s\S]+<\/span>/));   // '<span>\n    123abc_&&@@\n  </span>'
console.log(html.match(/<span>[\w\W]+<\/span>/));   // '<span>\n    123abc_&&@@\n  </span>'
console.log(html.match(/<span>[\D\d]+<\/span>/));   // '<span>\n    123abc_&&@@\n  </span>'
```

##### 7. 汉字与字符属性

1. 匹配汉字与字符可以用`/\p{sc=Han}+/gu`来匹配;
2. `\p{L}`表示匹配所有字母；
3. `\p{N}`表示匹配所有数字，类似与`\d`；
4. `\P{L}`表示匹配所有非字母，类似于`^\p{L}`；
5. `\P{N}`表示匹配所有非数字，类似于`^\p{N}`或`^\d`；

``` js
// 匹配汉字
let str = "fantasy你好啊,001我很好";
console.log(str.match(/\p{sc=Han}+/gu));
console.log(str.match(/\p{L}+/gu));          // [ 'fantasy你好啊', '我很好' ]
console.log(str.match(/\P{L}+/gu));          // [ ',001' ]
console.log(str.match(/\p{N}+/gu));          // [ '001' ]
console.log(str.match(/\P{N}+/gu));          // [ 'fantasy你好啊,', '我很好' ]
```

##### 8. 原子表

1. `[]`原子表的使用：匹配原子表中的任意一项字符；
2. `[]`原子表中的`()`、`.`、`+`就表示普通的符号，不用转义，而`-`在原子表中表示区间匹配，需要转义成`\-`；

``` js
// 原子表的使用：匹配日期
let date1 = "2022-09-11";
let date2 = "2022/09/11";
console.log(date1.match(/^\d{4}([-\/])\d{2}\1\d{2}$/));  // [ '2022-09-11', '-', index: 0, input: '2022-09-11', groups: undefined ]
console.log(date2.match(/^\d{4}([-\/])\d{2}\1\d{2}$/));  // [ '2022/09/11', '/', index: 0, input: '2022/09/11', groups: undefined ]

// 匹配换行的内容
let str = `
   fan
   dong

`
console.log(str.match(/.+/g));        // [ '   fan', '   dong', '   ' ]
console.log(str.match(/.+/gs));       // [ '\n   fan\n   dong\n\n' ]
console.log(str.match(/[\s\S]+/g));   // [ '\n   fan\n   dong\n\n' ]
```

##### 9. 原子组

1. `()`包起来的是原子组，使用后可用`\1`重复对应使用前面的原子组；
2. 使用原子组后，用`match()`输出后显示原子组的内容；

    ``` js
    // 原子组
    let str = `
      <h1>
      这是一个HTML标签内容
      </h1>
    `
    let reg = /<(h[1-6])>([\s\S])*<\/\1>/g
    console.log(str.match(reg)[0].replace(/[\n\s]/g,''));  // <h1>这是一个HTML标签内容</h1>
    ```
3. 原子组引用：用`()`包裹的原子组可以在后续引用操作；
``` html
  <body>
  <div>
    <h1>使用原子组引用</h1>
    <span>将h标签</span>
    <h3>替换为p标签</h3>
  </div>


  <script>
    let div = document.querySelector('div');
    let reg = /<(h[1-6])>([\s\S]+)<\/\1>/gi
    // 使用直接替换
    // div.innerHTML = div.innerHTML.replace(reg,`<p>$2</p>`)     // $2就是第二个原子组的内容
    // 调用replace函数
    div.innerHTML = div.innerHTML.replace(reg,(p0,p1,p2) => {
      console.log(p0);    // <h1>使用原子组引用</h1> <h3>替换为p标签</h3>
      console.log(p1);    // h1 h3
      console.log(p2);    // 使用原子组引用  替换为p标签
      return `<p>${p2}</p>`
    })
  </script>
  </body>
```


### 5.3 原始值包装类型

> 为了方便操作原始值，ECMAScript提供了3中特殊的引用类型：Boolean、Number和String。它们既具备原始值类型，也具备其它引用类型的特点，用到各自的方法和属性时，后台会创建一个响应的**原始包装类型对象**，从而暴露出操作原始值的各种方法。

1. 引用类型与原始值包装类型的主要区别在于生命周期。通过`new`创建的引用类型的实例，会在离开作用域时销毁，而自动创建的原始值包装类型对象则只存在于访问它的那行代码期间。
2. 使用`new Object()`传入原始类型时，能够根据原始值的类型返回相应原始值包装类型的实例；
3. 用`new`调用原始值包装类型的构造函数，与调用同名的转型函数不一致。

``` js
// 原始值包装类型生命周期
let s1 = 'some text';
let s1_text = s1.substring(5);
console.log(s1_text);          // text
s1.color = 'red';
console.log(s1.color);         // undefined

// Object自动判断类型
let s2 = new Object('hello');
let num = new Object(25);
console.log(s2 instanceof String);   // true
console.log(num instanceof Number);  // true

// 构造函数和转型函数
let value = "25";
let number = Number(value);    // 转型函数
console.log(typeof number);    // number
let obj = new Number(value);   // 构造函数
console.log(typeof obj);       // object
```

#### 5.3.1 Boolean

1. 布尔表达式中使用Boolean对象容易引起误会；
2. `Boolean`对象使用`instanceof`判断时域原始值不同；

``` js
// Boolean对象
let falseObject = new Boolean(false);
let falseValue = false;
console.log(falseObject && true);       // true
console.log(falseValue && true);        // false

console.log(typeof falseObject);              // object
console.log(typeof falseValue);               // boolean
console.log(falseObject instanceof Boolean);  // true 
console.log(falseValue instanceof Boolean);   // false
```

#### 5.3.2 Number

1. `number.toString(底数)`，返回相应基数的字符串参数；
2. `number.toFixed(位数)`，返回包含指定小数点位数的数值字符串；
3. `number.toExponenttial(位数)`，返回以科学计数法表示的数值字符串；
4. `number.toPrecision(总位数)`，根据情况返回最合理的输出结果，可能是科学计数法，也可能是固定长度；
5. `Number.isInteger()`方法用于辨别一个有小数点的数是否为整数；

``` js
// Number原始包装类型
let num1 = 10;
console.log(num1.toString(2));       // "1010"
let num2 = 10.01
console.log(num2.toFixed(1));        // 10.0
console.log(num2.toExponential(1));  // 1.0e+1
let num3 = 99;
console.log(num3.toPrecision(1));    // 1e+2
console.log(num3.toPrecision(2));    // 99
console.log(num3.toPrecision(3));    // 99.0
console.log(Number.isInteger(1.00)); // true
console.log(Number.isInteger(1.01)); // false
```

#### 5.3.3 String

##### 5.3.3.1 字符串方法

1. `string.charAt(索引位置)`，返回指定字符串索引位置的字符；
2. `string.charCodeAt(索引位置)`，返回指定字符串索引位置字符编码
3. `String.fromCharCode()`，根据指定的UTF-16码元创建字符串中的字符；
4. `string.concat("s1","s2",...)`，拼接任意多个字符串，类似与`+`；

``` js
// 字符串方法
const str  = 'hello world';
console.log(str.charAt(1));                                  // "e"
console.log(str.charCodeAt(1));                              // "101"
console.log(String.fromCharCode(97,98,99,100,101));          // "abcde" 
console.log(String.fromCharCode(0x61,0x62,0x63,0x64,0x65));  // "abcde"
console.log(str.concat(',',' ','h','i','!'));                // "hello world, hi!"
```

##### 5.3.3.2 字符串截取方法

1. `string.slice(参数1，参数2)`，截取从参数1到参数2的字符，当参数为负值时，截取位置变为字符串长度+参数；
2. `string.substring(参数1，参数2)`，截取从参数1到参数2的字符，当参数为负值时，会将所有参数转化为0；
3. `string.substr(参数1，参数2)`，截取从参数1开始，长度为参数2的字符，当参数为负值时，将第一个负值参数转换为字符串长度加上该负值，而第二个负值转换为0

  ``` js
    // 截取字符串
    const str  = 'hello world';
    console.log(str.slice(5,8));                                 // "  wo"
    console.log(str.substring(5,8));                             // "  wo"
    console.log(str.substr(5,3));                                // "  wo"
             
    console.log(str.substring(-7,5));                            // "hello"
    console.log(str.substr(-6,3));                               // "  wo"   

  ```

> **注意**：字符串截取方法slice()和splice()方法，截取范围都不包括参数2.

##### 5.3.3.3 字符串定位方法

1. `string.indexOf("字符",【参数2】)`，从参数2（缺省默认0）位置开始查找从头查找字符的位置，如果不存在返回`-1`；
2. `string.lastIndexOf("字符",【餐宿2】)`,从参数2（缺省默认0）位置开始查找从末尾查找字符的位置，如果不存在返回`-1`。

``` js
// 定位字符串
console.log(str.indexOf('o'));        // 4
console.log(str.indexOf('o',5));      // 7
console.log(str.lastIndexOf('o',4));  // 4

// 利用indexOf()输出字符串中所有匹配字符的数组
function findStr(str1,str2) {
  // 判断输入值是否为字符类型
  if (typeof str1 !== 'string') {
    return `${str1} is not a string`
  }
  if (typeof str2 !== 'string') {
    return `${str2} is not a string`
  }
  const arr = [];
  let pos = str1.indexOf(str2);
  while (pos > -1) {
    arr.push(pos);
    pos = str1.indexOf(str2,pos + 1)
  }
  return `${str1}中的${str2}位于：${arr}`;
}
let arr =  findStr('hello world','o');
console.log(arr);                        // [4,7]
```

##### 5.3.3.4 字符串包含方法

1. `string.startsWith('字符串1',[开始位置])`,在开始位置（默认为0）检查字符串是否以字符串1开头，存在返回`true`，不存在返回`false`；
2. `string.endsWith('字符串1',[长度])`,在给定长度（默认整个字符串）的字符串内，检查字符串是否以字符串1结尾，存在返回`true`，不存在返回`false`；
3. `string.includes('字符串1')`，检查整个字符串是否包含字符串，存在返回`true`，不存在返回`false`；

``` js
// 字符串包含方法
let message = 'foodbarbaz';
console.log(message.startsWith('foo'));        // true
console.log(message.startsWith('bar'));        // false
console.log(message.startsWith('bar',4));      // true
 
console.log(message.endsWith('baz'));          // true 
console.log(message.endsWith('bar'));          // false
console.log(message.endsWith('bar',7));        // true
 
console.log(message.includes('bar'));          // true
console.log(message.includes('baz'));          // true
```

##### 5.3.3.5 trim()方法

1. `string.trim()`，创建字符串的一个副本，清除字符串的前后空格；
2. `string.trimStart()`，创建字符串的一个副本，清除字符串的前空格；
3. `string.trimEnd()`，创建字符串的一个副本，清除字符串的后空格；

``` js
// trim()方法
let stringValue = ' hello world ';
console.log(stringValue.trim());            // 'hello world'
console.log(stringValue.trimStart());       // 'hello world '  
console.log(stringValue.trimEnd());         // ' hello world'
```

##### 5.3.3.6 repeat() 方法

1. `string.repeat(number)`，表示要将字符串复制多少次；

``` js
// repeat()
let stringValue = 'ha ';
console.log(stringValue.repeat(5) + 'xiangzai');   // ha ha ha ha ha xiangzai
```

##### 5.3.3.7 padStart()和padEnd()

1. `string.padStart(填充长度，[‘填充字符串’])`，用填充字符串从头将字符串填充到指定长度，默认用空格填充；
2. `string.padEnd(填充长度，[‘填充字符串’])`，用填充字符串从尾将字符串填充到指定长度，默认用空格填充；
3. 填充字符串长度小于原始字符串长度时，返回原始字符串。

``` js
// padStart() padEnd()
let stringValue = 'foo'
console.log(stringValue.padStart(8));       // '     foo'
console.log(stringValue.padStart(8,'.'));   // '.....foo'
console.log(stringValue.padEnd(8,'.'));     // 'foo.....'
console.log(stringValue.padEnd(2));         // 'foo'
```

##### 5.3.3.8 字符串迭代与解构

1. 字符串的原型上暴露了一个@@iterator方法，可将每个字符串进行迭代；
2. `...string`方法可以方便的将字符串解构成一个个字符；

``` js
// 字符串迭代与解构
let stringValue = 'abcde';
console.log(...stringValue);    // a b c d e
console.log([...stringValue]);  // [ 'a', 'b', 'c', 'd', 'e' ]
```

##### 5.3.3.9 字符串大小写转换

1. `string.toUpperCase()`和`string.toLocalUpperCase`都可以将字符串转换为大写，但是`string.toLocalUpperCase`会根据特定地区实现；
2. `string.toLowerCase()`和`string.toLocalLowerCase`都可以将字符串转换为小写，但是`string.toLocalLowerCase`会根据特定地区实现；
3. 当不知道特定地区时，最好使用特定的转换方法；

``` js
// 字符串大小写转化
let stringValue = 'hello world';
console.log(stringValue.toUpperCase());                // 'HELLO WORLD'
console.log(stringValue.toLocaleUpperCase());          // 'HELLO WORLD'
console.log(stringValue.toLowerCase());                // 'hello world'
console.log(stringValue.toLocaleLowerCase());          // 'hello world'
```

##### 5.3.3.10 字符串模式匹配方法

1. `string.match()`，匹配一个正则表达式，当传入一个非正则时会隐式调用`new RegExp(obj)`转换，匹配到字符串返回字符串数组，未匹配到返回`null`；
2. `string.search()`，匹配一个正则表达式，返回第一个匹配位置索引，如果未匹配到返回`-1`；
   ``` js
  // string.match()
    const str = 'abbcbbbdbbbbebbbbbb';
    const reg1 = /b+/g;
    const reg2 = /f/g
    let matches1 = str.match(reg1);
    let matches2 = str.match(reg2);
    console.log(matches1); // [ 'bb', 'bbb', 'bbbb', 'bbbbbb' ]
    console.log(matches2); // null

    // string.search()
    let search1 = str.search(reg1);
    let search2 = str.search(reg2);
    console.log(search1); // 1
    console.log(search2); // -1

    // string.replace()
    let replace1 = str.replace('b', 'f');
    let replace2 = str.replace(/b/, 'f');
    let replace3 = str.replace(/b/g, 'f');
    console.log(replace1); // afbcbbbdbbbbebbbbbb
    console.log(replace2); // afbcbbbdbbbbebbbbbb
    console.log(replace3); // affcfffdffffeffffff

    // string.replace()
    let str = 'abc12345#$*%';
    let newStr = str.replace(/([^\d]*)(\d*)([^\w]*)/, function(match, p1,     p2, p3, offset, string) {
      return [p1,p2,p3].join('-');
    })
    console.log(newStr);
   ```
3. `string.replace()`
   （1）当传入一个字符串的时候，只会替换第一个字符串；
   （2）当传入一个不带全局标志`g`的正则时，只会替换第一个字符串；
   （3）当传入一个待全局标志`g`的正则时，会替换所有的字符串；
   （4）当第二个值传入一个函数时，第一个参数`match`为匹配的字符串，第二个参数`p1,p2...`等为正则中第n个括号包裹的值，`offset`为匹配到的字符串相对于原字符串的偏移量，`string`为被匹配的原字符串；
4. `string.split()`：方法使用指定的**分隔符字符串**将一个**String对象**分割成子**字符串数组**；
   （1）可以传入第二个参数作为限制数组的数量；
   （2）可以传入正则对字符串进行分隔；
   （3）可以传入数组进行分隔；
   ``` js
    // string.replace()
    let replace1 = str.replace('b', 'f');
    let replace2 = str.replace(/b/, 'f');
    let replace3 = str.replace(/b/g, 'f');
    console.log(replace1); // afbcbbbdbbbbebbbbbb
    console.log(replace2); // afbcbbbdbbbbebbbbbb
    console.log(replace3); // affcfffdffffeffffff

    // string.replace()
    let str = 'abc12345#$*%';
    let newStr = str.replace(/([^\d]*)(\d*)([^\w]*)/, function(match, p1, p2, p3, offset, string) {
      return [p1,p2,p3].join('-');
    })
    console.log(newStr);

    // string.split()
    const str1 = 'cat,fish,monkey,dog';
    const str2 = 'Harry Trump ;Fred Barney; Helen Rigby ';
    const str3 = "Hello 1 word. Sentence number 2."
    const str4 = 'ca,bc,a,bca,bca,bc';
    console.log(str1.split(',')); // [ 'cat', 'fish', 'monkey', 'dog' ]
    console.log(str1.split(/[^,]+/)); // [ '', ',', ',', ',', '' ]
    console.log(str2.split(/\s*(?:;|$)\s*/)); // ['Harry Trump','Fred     Barney','Helen Rigby','']
    console.log(str3.split(/\d/)); // [ 'Hello ', ' word. Sentence number ',    '.' ]
    console.log(str4.split(['a', 'b'])); // [ 'c', 'c,', 'c', 'c', 'c' ]
   ```

##### 5.3.3.11 localeCompare()方法

1. 按照字符串方法，字符串应该排在字符串参数前头，则返回负值（通常是`-1`）; 
2. 按照字符串方法，字符串等于字符串，则返回0（通常是`0`）; 
3. 按照字符串方法，字符串应该排在字符串参数后头，则返回正值（通常是`1`）;
4. 因为不同地区返回的值不同，所以最好用`if`进行判断；
   
   ```js
    // string.localeCompare()
    function determineOrder(value, compareValue) {
      let result = value.localeCompare(compareValue);
      if (result > 0) {
        return `${value}在${compareValue}后头`
      } else if (result < 0) {
        return `${value}在${compareValue}前头`
      } else {
        return `${value}与${compareValue}相等`
      }
    }
    console.log(determineOrder('yellow', 'red'));
    console.log(determineOrder('yellow', 'yellow'));
    console.log(determineOrder('yellow', 'zoo'));   
   ```

#### 5.4 单例内置对象

##### 5.4.1 Global

1. `Global`对象任何对象都不能显示的访问它，它作为兜底对象，针对的是不属于任何对象的属性和方法；
2. 事实上，不存在全局变量或全局函数这种东西，在全局作用域中定义的变量和函数都会变成`Global`对象的属性；
3. `isNaN()`、`isFinite()`、`parseInt()`、`parseFloat()`，实际上都是`Global`对象的方法；
4. `Global`对象有很多属性，比如`undefined`，`NaN`，`Object`，`Array`，`Function`，`Boolean`，`String`，`Number`，`Date`，`RegExp`，`Error`，`Symbol`，`TypeError`，`SyntaxError`等等。
5. 没有直接访问`Global`对象的方式，但浏览器将`window`对象实现为`Global`对象的代理，因此，所有全局作用域中声明的变量和函数都变成了`window`的属性；

##### 5.4.2 Math

1. Math对象属性
   （1）`Math.E`：自然对数的基数`e`的值；
   （2）`Math.PI`：π的值；
2. min()和max()方法
   求得一组数中的最大值和最小值；可以用数组解构方式求得数组中的最大值和最小值。

   ```js
      // min() max()
      let max = Math.max(1, 2, 4, 5, 8);
      let min = Math.min(1, 2, 4, 5, 8);
      console.log(max);           // 8
      console.log(min);           // 1

      let arr = [1, 2, 4, 5, 8]
      let arrMax = Math.max(...arr);
      let arrMin = Math.min(...arr);
      console.log(arrMax);        // 8
      console.log(arrMin);        // 1  
   ```

3. 舍入方法
   （1）`Math.ceil()`：向上舍入为最近的整数；
   （2）`Math.floor()`：向下舍入最近的整数；
   （3）`Math.round()`：执行四舍五入；
   （4）`Math.fround()`：返回数值最接近的单精度（32位）浮点值表示；

   ```js
    // math方法
      console.log(Math.ceil(25.9));      // 26 
      console.log(Math.ceil(25.5));      // 26
      console.log(Math.ceil(25.1));      // 26
      
      console.log(Math.floor(25.9));     // 25 
      console.log(Math.floor(25.5));     // 25 
      console.log(Math.floor(25.1));     // 25
      
      console.log(Math.round(25.9));     // 26
      console.log(Math.round(25.5));     // 26
      console.log(Math.round(25.1));     // 25
        
      console.log(Math.fround(0.4));     // 0.4000000059604645
      console.log(Math.fround(0.5));     // 0.5
      console.log(Math.fround(25.9));    // 25.899999618530273
   ```  

4. Math.random()方法
   返回一个0到1之间的随机数，包括0但不包含1.可以用`Math.floor`方法使得能够选取到0-10.

   ``` js
    // math.random
    function selectFrom(lowerValue, upperValue) {
      let choices = upperValue - lowerValue + 1;
      return Math.floor(Math.random() * choices + lowerValue)
    };
    console.log(selectFrom(0, 10));
    const arr = ['red', 'yellow', 'blue', 'black', 'white', 'pink'];
    console.log(arr[selectFrom(0, arr.length - 1)]);
   ```

5. Math的其它方法
   （1）`Math.abs(x)`：返回x的绝对值；
   （1）`Math.trunc(x)`：返回x的整数部分，删除所有小数；

    ``` js
      // math其它方法
      console.log(Math.abs(-3));      // 3
      console.log(Math.abs(-3.5));    // 3.5
      console.log(Math.trunc(3.55));  // 3
    ```

## 第6章 集合引用类型

### 6.1 Object

#### 6.1.1 Object 对象的创建方法

1. 使用`new Object()`构造函数创建；
2. 使用`{}`字面量创建；

#### 6.1.2 Object 对象属性的读取方法

1. `Object.`点语法可以读取对象，但不能读取特殊格式和变量对象的属性；
2. `Object[]`中括号语法可以读取正常属性外，还可读取特殊格式和变量；

  ``` js
    // Object
    let person = {
      'name': 'fandongxiang',
      'first name': 'fan',
      'sex': '男'
    }
    let str = 'sex'
    console.log(person.str);            // undefined
    console.log(person[str]);           // '男'
    console.log(person['first name']);  // fan
  ```

### Array

#### 6.2.1 创建数组

1. 可以使用`new Array()`方法创建数组，但只传入一个数字时，表示创建一个`length`为多少的数组；
2. 可以使用`[]`数组字面量的方法创建数组；

  ``` js
    // Array 的创建
    let color = new Array('blue', 'blank', 'red', 'pink')
    console.log(color);         // [ 'blue', 'blank', 'red', 'pink' ]
    let num = new Array(3);
    console.log(num);          // [ <3 empty items> ]
    console.log(num.length);  // 3
  ```

3. `Array.from()`：将类数组解构转换为数组实例；

  ``` js
    // 字符串会被拆分为单字符串字符
    let str = 'abcde';
    console.log(Array.from(str)); // [ 'a', 'b', 'c', 'd', 'e' ]
    // Array.from() 浅拷贝
    let p1 = [1, 3, 5, 9];
    let p2 = p1;
    let p3 = Array.from(p1)
    console.log(p1 === p2);   // true
    console.log(p3);          // [ 1, 3, 5, 9 ]
    console.log(p1 === p3);   // false
  ```

4. `Array.of()`：将一组参数转换为数组实例。

  ```js
    // Array.of() 将字符参数转换为数组，注意不能传入字符串
    let str = '1,2,23,45,red';
    console.log(Array.of(1, 2, 3, 4, 5));   // [ 1, 2, 3, 4, 5 ]
  ```

#### 6.2.2 数组空位

`[,,,,]`数组空位占有`length`值，但是其值为`undefined`.

#### 6.2.3 数组索引

1. 可以通过设置数组的索引值来增加和删除元素；
2. 可方便的通过`array[array.length]`向数组不断追加元素；

  ``` js
    // 数组索引添加删除元素
    let colors = ['red', 'blank', 'green'];
    colors.length = 2;
    console.log(colors);      // [ 'red', 'blank' ]
    colors.length = 3;
    console.log(colors);      // [ 'red', 'blank', <1 empty item> ]
    console.log(colors[2]);   // undefined

    olors[colors.length] = 'yellow';
    colors[colors.length] = 'white';
    console.log(colors);  // [ 'red', 'blank', <1 empty item>, 'yellow', 'white' ]
  ```

#### 6.2.4 检测数组

1. 使用`instanceof`操作符来检测；
2. 使用`Array.isArray()`方法来检测；

  ``` js
    // 检测数组
    let array = [1, 2, 35, 4];
    console.log(array instanceof Array);   // true
    console.log(Array.isArray(array));     // true  
  ```

#### 6.2.5 迭代器方法

1. `array.keys()`：返回数组索引的迭代器；
2. `array.values()`：返回数组元素的迭代器；
3. `array.entries()`：返回数组索引/值对的迭代器；

  ``` js
    // 数组迭代器
    let colors = ['red', 'blank', 'green'];
    console.log(colors.keys()); // 返回迭代器
    console.log(Array.from(colors.keys())); // [ 0, 1, 2 ]
    console.log(Array.from(colors.values())); // [ 'red', 'blank', 'green' ]
    console.log(Array.from(colors.entries())); // [ [ 0, 'red' ], [ 1, 'blank' ], [ 2, 'green' ] ]
  ```

#### 6.2.6 复制和填充方法

1. `array.fill(element,startIndex,[endIndex])`：用元素将开始索引位置到结束索引位置元素替换（**不包含结束索引位置**），如果结束索引缺省，则从开始索引位置填充到尾部；
2. `array.copyWithin(插入索引位置，[开始索引位置]，[结束索引位置])`：复制开始到结束索引位置的值（**不包含结束索引位置的值**），插入到指定索引位置；
3. 以上两种方法都会重写原数组。

  ``` js
    // array.fill() array.copyWithin()
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(num.fill(7, 3, 5)); // [ 0, 1, 2, 7, 7, 5, 6, 7, 8, 9]
    console.log(num.copyWithin(7, 3, 5)); // [ 0, 1, 2, 7, 7, 5, 6, 7, 7, 9]
  ```

#### 6.2.7 转换方法

1. `array.join('')`:调用与`array.toString()`相同方法，将数组转换为以特点分隔符相连的字符串，如果没指定分隔符，则仍以`,`相连；

  ``` js
    // array.join()
    let str = ['a', 'b', 'c', 'd', 'e'];
    console.log(str.join()); // 'a,b,c,d,e'
    console.log(str.join(' ')); // 'a b c d e'
  ```

#### 6.2.8 栈方法
1. `array.push(element)`：向数组尾部追加一个元素；
2. `array.pop()`：删除数组尾部元素，不传入任何参数，返回被删除的元素，**并且会重写数组**；
3. 以上两种方法组合就可以模拟栈方法，**后进先出(LIFO)**；

  ``` js
    // 数组栈方法
    let str = ['a', 'b', 'c', 'd', 'e'];
    console.log(str.push('f')); // 6
    console.log(str); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
    console.log(str.pop()); // 'f'
    console.log(str); // [ 'a', 'b', 'c', 'd', 'e' ]
  ```

#### 6.2.9 队列方法
1. `array.shift()`:删除数组头部元素，不传入任何参数，返回被删除的元素，**并且会重写数组**；
2. `array.unshift()`：在数组头部添加元素，返回添加后的数组**长度**；
3. `push`和`shift`方法组合就可模拟队列方法，**先进先出(FIFO)**；

  ``` js
    // 数组队列方法
    let str = ['a', 'b', 'c', 'd', 'e'];
    console.log(str.shift()); // 'a'
    console.log(str); // [ 'b', 'c', 'd', 'e' ]
    console.log(str.unshift('a'));  // 5
  ```

> 数组插入和删除方法，都会重写数组，插入方法都返回插入后的元素个数，删除方法都返回删除的元素。

#### 6.2.10 排序方法

1. `array.reverse()`：反转数组，直接返回反转后的数组，并且会重写数组；
2. `array.sort()`：默认按照**字符串顺序**而不是数字顺序排序，要想按照数字顺序排序，必须传入一个比较函数。升序排序返回`-1`，降序排列返回`1`，相等返回`0`。

  ``` js
    // reverse() sort()
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(num.reverse()); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]
    console.log(num); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]

    let num2 = [0, 1, 5, 15, 4, 44]
    console.log(num2.sort()); // [ 0, 1, 15, 4, 44, 5 ]
    console.log(num2); // [ 0, 1, 15, 4, 44, 5 ]

    function ascending(value1, value2) {
      if (value1 < value2) {
        return -1;
      } else if (value1 > value2) {
        return 1
      } else {
        return 0;
      }
    };

    function descending(value1, value2) {
      if (value1 < value2) {
        return 1;
      } else if (value1 > value2) {
        return -1;
      } else {
        return 0
      }
    };
    console.log(num2.sort(ascending)); // [ 0, 1, 4, 5, 15, 44 ]
    console.log(num2.sort(descending)); // [ 44, 15, 5, 4, 1, 0 ]
    // 箭头函数写法
    console.log(num2.sort((a, b) => a < b ? 1 : a > b ? -1 : 0)); // [ 44, 15, 5, 4, 1, 0 ]
  ```

#### 6.2.11 操作方法

1. `array.concat()`：将一个元素或数组并到另一个数组中；不会重写当前数组；
2. `array.slice(index1,[index2])`：将一个数组从索引位置截取到索引位置2，当位置2缺省时，截取索引1之后所有元素，不会重写数组；

  ``` js
    let num1 = [1, 2, 3, 4, 5];
    let num2 = [7, 8, 9, 10];
    console.log(num1.concat(6, num2)); // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
    console.log(num1); // [ 1, 2, 3, 4, 5 ]

    let colors = ['red', 'blank', 'green', 'white', 'pink'];
    console.log(colors.slice(1));
    ['blank', 'green', 'white', 'pink']
    console.log(colors.slice(1, 3)); // [ 'blank', 'green' ]
    console.log(colors); // [ 'red', 'blank', 'green', 'white', 'pink' ]

    let str = 'hello world';
    console.log(str.slice(1, 3));
  ```

3. `array.splice()`：可以实现数组的删除、插入和替换，会重写数组：
   （a）删除：`splice(开始位置，删除数量)`：传入2个参数，从开始索引位置删除指定数量元素，返回被删除元素数组；
   （b）插入：`splice(开始位置，0，元素1，元素2，...)`：传入3个参数，其中第2个参数要删除元素的个数必须为`0`；
   （c）替换：

  ``` js
    // Array.spice()
    // 删除
    let colors = ['red', 'blank', 'green', 'yellow'];
    console.log(colors.splice(1, 2)); // [ 'blank', 'green' ]
    console.log(colors); // [ 'red', 'yellow' ]
    // 插入
    console.log(colors.splice(1, 0, 'pink', 'white')); // []
    console.log(colors); // [ 'red', 'pink', 'white', 'yellow' ]
    // 替换
    console.log(colors.splice(1, 1, 'blue', 'yellow')); // [ 'pink' ]
    console.log(colors); // [ 'red', 'blue', 'yellow', 'white', 'yellow' ]
  ```

> **注意**：concat()和slice()不会重写数组，splice()会重写数组，总是返回被删除的数组元素。

#### 6.2.12 搜索和位置方法

##### 1. 严格相等

1. `array.indexOf(value,[index])`：从头开始搜索位置搜索元素，存在返回元素位置，不存在返回`-1`；
2. `array.lastIndexOf(value,[index])`：从头开始搜索位置搜索元素，存在返回元素位置，不存在返回`-1`；
3. `array.includes()`：返回要查找的元素是否存在，存在返回`true`，不存在返回`false`。

  ``` js
    let num = [1, 2, 3, 4, 5, 4, 3, 2, 4, 1]
    console.log(num.lastIndexOf(2, 2));
    console.log(num.indexOf(3, 6));
    console.log(num.lastIndexOf(4, 5));
  ```

##### 2. 断言函数

1. `array.find((element,index,array) => ...)`：寻找第一个符合条件的数组的元素；
2. `array.findIndex((element,index,array) => ...)`：寻找第一个符合条件的数组的索引；
3. 以上两个方法，找到第一个符合条件的元素后停止遍历，类似数组的`some()`方法；

  ``` js
    // array.find
    const person = [{
        name: 'Matt',
        age: 27
      },
      {
        name: 'Bob',
        age: 29
      }
    ];
    console.log(person.find(element => element.age < 28)); // { name: 'Matt', age: 27 }
    console.log(person.findIndex(element => element.age < 28)); // 0
  ```

#### 6.2.13 迭代方法

1. `every()`：对数组的每一祥都运行传入的函数，如果对每一项函数都返回`true`，则这个方法返回`true`；
2. `filter()`：对数组的每一项都运行传入的函数，函数返回`true`的项会组成数组之后返回；
3. `forEach()`：对数组的每一项都运行传入的函数，没有返回值，相当于简答的`for`循环遍历；
4. `map()`：对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组；
5. `some()`：对数组每一项都运行传入的函数，如果有一项函数返回`true`，则这个方法返回`true`；

  ``` js
    // 数组迭代方法
    let num = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    // every()
    let everyResults = num.every((element, index, array) => element > 2);
    console.log(everyResults); // false

    // some()
    let someResults = num.some((element, index, array) => element > 2);
    let findElement = num.some(element => {
      if (element > 4) {
        result = element; // 不加var，为全局变量
        return true;
      }
    })
    console.log(someResults); // true
    console.log(result); // 5

    // filter()
    let filterResult = num.filter(element => element > 2);
    console.log(filterResult); // 5

    // map()
    let mapResult = num.map(element => element * 2); // [ 3, 4, 5, 4, 3 ]
    console.log(mapResult); // [ 2, 4, 6, 8, 10, 8, 6, 4, 2 ]

    // forEach()
    let newNum = [];
    let forEachResult = num.forEach(element => {
      if (element > 2) newNum.push(element)
    });
    console.log(newNum);  // [ 3, 4, 5, 4, 3 ]
  ```

#### 6.2.14 归并方法

1. `array.reduce((prev,cur,index,array))`：其中`prev`是上一个归并值，cur是当前项，会在每次循环时将上一个归并值传入函数；
2. `array.reduceRight()`：与`reduce()`类似，但是从数组末尾进行归并；

  ``` js
    // 数组归并
    let values = [1, 2, 3, 4, 5];
    console.log(values.reduce((prev, cur) => prev + cur)) // 15
    console.log(values.reduceRight((prev, cur) => prev + cur)); // 15
    console.log(values.reduce((prev, cur) => prev * cur)) // 120
  ```

### 6.3 定型数组

略

### 6.4 Map

#### 6.4.1 Map类型的创建及增删改查

1. `new Map()`类型的创建：通过`new`加构造函数的形式创建一个空映射，并可以在空映射中赋值；
2. `set()`：可以向映射中添加键值，并可以用多个操作符连缀起来；
3. `get()`：可以通过键获取映射中的值，返回值，如果没有返回`undefined`；
4. `has()`：可以检测映射中是否存在相应键，返回布尔值；
5. `delete()`：删除映射中某项键值对，成功删除返回`true`，否则返回`false`；
6. `clear()`：清空映射中所有的键值对，清空后返回`undefined`；
7. `Map.size`：返回映射中键值对的数量；

  ``` js
    // Map
    const m = new Map();
    m.set('first name', 'fan')
      .set('last name', 'dong');
    const m1 = new Map([
      ['color', 'yellow'],
      ['rgb', '255,255,0']
    ])
    console.log(m.size); // 2
    console.log(m.delete('first name')); // true
    console.log(m.has('first name')); // false
    console.log(m.get('first name')); // undefined
    console.log(m.clear()); // undefined
    console.log(m.size); // 0
  ```

#### 6.4.2 顺序与迭代

待补充

#### 6.4.3 选择Map还是Object

1. 内存占用：map大约比Object多存储50%的键/值对；
2. 插入性能：消耗相当，map稍快；
3. 查找速度：大量查找操作，Object更好一些；
4. 删除性能：设计大量删除操作，毫无疑问选择map。

### 6.5 WeakMap

> ES6新增“弱映射”（WeakMap）是一种新的集合类型，为这门语言带来了增强的键值对存储机制。它是map的兄弟，“weak”描述的是Javascript垃圾回收程序对待“弱映射”中键的方式。

#### 6.5.1 基本API

> 使用`new WeakMap()`来实例化一个空的`WeakMap`，其余操作同`Map`。
> 注意：WeakMap中的键只能时对象，如果时基本类型会报错~

  ``` js
    // WeakMap
    const key1 = { id: 1 },
      key2 = { id: 2 }
    const wm = new WeakMap([
      [key1, 'val1'],
      ['BADKEY', 'val2'],
      [key2, 'val3']
    ]);

    TypeError: Invalid value used as weak map key
  ```

#### 6.5.2 弱键

> 弱键就是该键不属于正式的引用时，不会阻止垃圾回收，如下例中的空对象键，因为没有指向这个对象的其它引用，所以这行代码执行完成后，这个对象就会被当作垃圾回收：

  ``` js
    const wm = new WeakMap();
    wm.set({},'val')
  ```

#### 6.5.3 不可迭代键

不能遍历和迭代。

#### 6.5.4 应用场景

`WeakMap`集合主要用于优化内存回收，比如HTML中一个元素被删除，设置该元素为`null`可以实现内存回收，但如果该元素被另一个对象引用，则不会回收。这是只要把该元素作为`WeakMap`的键来保存，即可回收。

### 6.5 Set

> 集合是一门新的数据结构————由一组无序且不重复的项组成的结构，为Javascript带来了集合数据结构，它可以用作消除重复元素，也可以用作进行交集、并集、差集等数学运算。

#### 6.6.1 基本API

1. `new Set()`：创建一个空集合；
2. `new Set(['val1','val2',...])`：创建并初始化集合；
3. `.add()`：向集合添加值；
4. `.has()`：查询集合，返回布尔值；
5. `.size`：返回集合数量；注意后面没有括号；
6. `.delete()`：删除集合元素，成功删除返回`true`；
7. `.clear()`：清空集合，成功清空返回`true`。
   
   ``` js
    // Set 集合
    const m1 = new Set([1, 4, 'apple', 'red', 1, 4])
    const m2 = new Set().add('red')
      .add('blue')
      .add('black')
      .add('pink')
    console.log(m1); // Set(4) { 1, 4, 'apple', 'red' }
    console.log(m2); // Set(4) { 'red', 'blue', 'black', 'pink' }

    console.log(m1.size); // 4
    console.log(m2.has('yellow'));  // false
    console.log(m2.delete('black'));  // true
   ```

#### 6.6.2 顺序与迭代

> 集合实例提供一个迭代器（Iterator），能以插入顺序生成集合内容，可以通过`vallues()`方法或及其别名`keys()`（或者`Symbol.iterator`属性，它引用`values()`），取得这个迭代器。

   ``` js
    const s = new Set(['val1', 'val2', 'val3']);
    console.log(s.values === s[Symbol.iterator]); // true
    console.log(s.keys === s[Symbol.iterator]); // true
    for (let value of s.values()) {
      console.log(value);
    } // 输出 val1 val2 val3
    for (let value of s[Symbol.iterator]()) {
      console.log(value);
    } // 输出 val1 val2 val3
   ```

1. 因为`values()`是默认迭代器，所以可以直接对集合实例使用扩展操作，把集合转换为数组。
   
  ``` js
    const s = new Set([1, 2, 3, 4, 5, 2, 1]);
    console.log(s instanceof Set);  // true

    const a = [...s]
    console.log(a); // [ 1, 2, 3, 4, 5 ]
    console.log(a instanceof Array);  // true
  ```

2. Set类型的遍历，可以用`forEach`或`for of`遍历。

  ``` js
    // Set 遍历
    let s1 = new Set([1, 2, 3, 4, 5]);
    s1.forEach((Element, index, array) => {
      console.log(Element); // 依次输出 1 2 3 4 5
      console.log(index); // 依次输出 1 2 3 4 5
      console.log(array); // 依次输出 set对象
    })
    
    for (let value of s1) {
      console.log(value);  // 依次输出 1 2 3 4 5
    }
  ```

#### 6.6.3 定义正式集合操作

1. 模拟两个集合并集操作

  ``` js
    // Set 并集
    const union = (setA, setB) => {
      return new Set([...setA,...setB])
    }

    const SetA = new Set([1, 2, 3, 4, 5])
    const SetB = new Set([3, 4, 5, 6, 7])
    let unionAb = union(SetA, SetB);
    console.log(unionAb); // Set(7) { 1, 2, 3, 4, 5, 6, 7 }
  ```

2. 模拟两个集合交集操作

  ``` js
    // Set 交集
    const SetA = new Set([1, 2, 3, 4, 5])
    const SetB = new Set([3, 4, 5, 6, 7])

    const intersection = (setA, setB) => {
      return new Set(
        [...setA].filter((item) => {
          return setB.has(item)
        })
      )
    }
    
    let intersectionAb = intersection(SetA, SetB)
    console.log(intersectionAb); // Set(3) { 3, 4, 5 }
  ```

3. 模拟两个集合差集操作

  ``` js
    // 差集 A-B
    const SetA = new Set([1, 2, 3, 4, 5])
    const SetB = new Set([3, 4, 5, 6, 7])

    const difference = (setA, setB) => {
      return new Set(
        [...setA].filter((item) => {
          return !setB.has(item)
        })
      )
    }

    const differenceAb = difference(SetA, SetB)
    console.log(differenceAb)
  ```

#### 6.6.4 使用Set处理网页搜索关键词

  ``` html 
    <body>
      <input type="text" name="search">
      <ul></ul>


      <script>
        let obj = {
          // 使用Set属性自动筛除重复项
          data: new Set(),
          keyWords(word) {
            this.data.add(word)
          },
          show() {
            let ul = document.querySelector('ul')
            ul.innerHTML = ''
            this.data.forEach((value) => {
              ul.innerHTML += `<li>${value}</li>`
            })
          }
        }
        let search = document.querySelector('[name="search"]')
        search.addEventListener('blur', function() {
          obj.keyWords(this.value);
          obj.show()
        })
      </script>
    </body>
  ```

### 6.7 WeakSet 

> WeakSet中的“Weak”描述的是JavaScript垃圾回收程序中对待“弱集合”中值的回收方式。

#### 6.7.1 WeakSet弱引用特性

  ``` js
    // weakSet 弱引用特性
    let obj = {
      name: 'fantasy'
    }
    let edu = obj;
    obj = null; // obj 被清空了，但是因为 edu 引用，所以edu 还是存在
    console.log(edu); // { name: 'fantasy' }

    let set = new WeakSet()
    set.add(edu)
    console.log(set); // WeakSet { name: 'fantasy' }

    edu = null;
    setTimeout(() => {
      console.log(set);
    }, 2000)
  ```

### 6.8 迭代与扩展操作

> Array、所有定型数组、Map、Set都支持顺序迭代，可以进行扩展操作。详细待第7章介绍。

## 第7章 迭代器与生成器

> 迭代：从一个数据集合中按照一定顺序，不断取出数据的过程。
> 迭代器：可以对数据集合实现迭代功能的”东西“。它无需了解与其关联的可迭代对象的结构，只需要知道如何取得连续的值。
> 生成器：用来创建迭代器。

### 7.1 理解迭代

#### 7.1.1 迭代和遍历区别

1. 【过程】：迭代强调的依次取出，不能确定可以取出的值有多少，也不能保证去把数据全部取完；
2. 【结果】：遍历必须保证数据的长度，循环不断的全部取出，针对于数据量过的情况下使用遍历，需要时间过长。

#### 7.1.2 通用迭代器

由于以下原因，通过遍历来执行例程并不理想；
1. **迭代之前需要事先知道如何使用数据结构**。比如数组要通过取得数组对象，再通过下标遍历，但并不适用于说有数据结构。
2. **遍历顺序并不是数据结构固有**。通过递增索引访问数据只是使用数组，并不适用于其它具有隐式顺序的数据结构。

#### 7.1.3 可迭代的数据集合特征

1. 具有`[Symbol.iterator]()`迭代对象，并能用该对象的`next()`方法迭代。

  ``` js
    let arr = [1, 2, 3, 4, 5, 6]
    let str = 'hello'
    let map = new Map([
        ['key1', 'val1'],
        ['key2', 'val2'],
        ['key3', 'val3']
      ])
    let obj = { name: 'fan' }
  
    console.log(arr[Symbol.iterator]()); // Object [Array Iterator] {}
    console.log(str[Symbol.iterator]()); // Object [String Iterator] {}
    console.log(map[Symbol.iterator]()); // [Map Entries] { [   'key1',   'val1' ], [ 'key2', 'val2' ], [ 'key3', 'val3' ] }
    console.log(obj[Symbol.iterator]()); // obj[Symbol.iterator] is   not   a function
  
    let arrIter = arr[Symbol.iterator]();
    console.log(arrIter.next()); // { value: 1, done: false }
    console.log(arrIter.next()); // { value: 2, done: false }
    console.log(arrIter.next()); // { value: 3, done: false }
    console.log(arrIter.next()); // { value: 4, done: false }
    console.log(arrIter.next()); // { value: 5, done: false }
    console.log(arrIter.next()); // { value: 6, done: false }
    console.log(arrIter.next()); // { value: undefined, done: true }
  ```

2. 可以用`for of `遍历的对象为可迭代对象，如下：

  ``` js
    // 可迭代对象
    let arr = [1, 2, 3, 4, 5, 6]
    let str = 'hello'
    let map = new Map([
      ['key1', 'val1'],
      ['key2', 'val2'],
      ['key3', 'val3']
    ])
    let obj = { name: 'fan' }

    for (let value of arr) {
      console.log(value); // 依次输出 1 2 3 4 5 6
    }

    for (let value of str) {
      console.log(value); // 依次输出 h e l l o
    }

    for (let value of map) {
      console.log(value); // 依次输出 [ 'key1', 'val1' ] [ 'key2',    'val2' ] [ 'key3', 'val3' ]
    }

    for (let value of obj) {
      console.log(value); // TypeError: obj is not iterable,对象不是可迭    代对象
    }
  ```

  ``` html 
    <body>
      <button>第1个按钮</button>
      <button>第2个按钮</button>
      <button>第3个按钮</button>
      <button>第4个按钮</button>
      <button>第5个按钮</button>
      <button>第6个按钮</button>
      <script>
        let btns = document.querySelectorAll('button');
        for (let element of btns) {
          console.log(element);  // 依次输出各按钮
        }
      </script>
    </body>
  ```

### 7.2 迭代器模式

#### 7.2.1 可迭代器协议

实际写代码过程中，不需要显式调用这个工厂函数来生成迭代器。实现可迭代协议的所有类型，会自动兼容接受可迭代对象的任何语言特性。接受可迭代对象的原生语言特性包括：
1. `for-of`循环；
2. 数组解构；
3. 扩展操作符；
4. Array.from()；
5. 创建集合；
6. 创建映射；
7. Promise.all()接受由期约组成的可迭代对象；
8. Promise.race()接受由期约组成的可迭代对象；
9. yield*操作符，在生成器中使用。

#### 7.2.2 自定义可迭代器

1. 通过自定义迭代器实现`Object`对象可迭代性：
   
  ``` js
    let SimpleClass = {
      data: [1, 2, 3],
      [Symbol.iterator]() {
        let index = 0;
        return {
          next: () => {
            if (index < this.data.length) {
              return { value: this.data[index++], done: false }
            } else {
              return { value: undefined, done: true }
            }
          }
        }
      }
    }
    let iter = SimpleClass[Symbol.iterator]()
    console.log(iter.next()); // { value: 1, done: false }
    console.log(iter.next()); // { value: 2, done: false }
    console.log(iter.next()); // { value: 3, done: false }
    console.log(iter.next()); // { value: undefined, done: true }
    for (let value of SimpleClass) {
      console.log(value); // 依次输出 1 2 3 
    }
  ```

### 7.3 生成器

> 用来创建迭代器。

#### 7.3.1 生成器的创建

1. 生成器是一个函数，但`function`后面带着`*`，并且函数体内有关键字`yield`（产出）;
2. 生成器函数调用后不会执行，只是创建了一个迭代器，只有使用`next()`方法才调用，并且自动按照迭代器的形式包装成`{value: ,done: }`对象。

  ``` js
    // 生成器
    function* genFunc() {
      yield 1;
      yield 2;
      yield 'yellow';
      yield 'red'
    };
    let iter = genFunc();
    console.log(iter.next()); // { value: 1, done: false }
    console.log(iter.next()); // { value: 2, done: false }
    console.log(iter.next()); // { value: 'yellow', done: false }
    console.log(iter.next()); // { value: 'red', done: false }
    console.log(iter.next()); // { value: undefined, done: true }
  ```

#### 7.3.2 yield 传参

1. 我们在调用`next()`函数的时候，可以给它传递参数，那么这个参数会作为**上一个yield语句的返回值**;
2. 当不传参时，上次`yield`返回的值下次是无法使用；
3. 比如以下例子：执行第二次`next()`调用时，如果不传入值，则`n`为`undefined`导致`value2`为`NaN`；当给`next(100)`传入100时，则上次`yield value1`的返回值`n`为`100`，`value2`为`120`。
  ``` js
    function* foo() {
  const value1 = 10
  console.log(value1)
  const n = yield value1

  const value2 = 20 + n
  console.log(value2)
  yield value2

  const value3 = 30
  console.log(value3)
  yield value3

  console.log('函数执行结束~')
  }
  const genertor = foo()

  console.log(genertor.next()) // 10 { value: 10, done: false }
  console.log(genertor.next(100)) // 120 { value: 10, done: false }
  console.log(genertor.next()) // 30 { value: 30, done: false }
  console.log(genertor.next()) // 函数执行结束~ { value: undefined, done: true }
  ```

#### 7.3.3 生成器的应用场景

> 异步请求循环嵌套调用：一个异步请求结果作为下一次异步请求的输入。

1. Promise写法

  ``` js
    function XxxxAPI(x) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(++x)
        }, 1000)
      })
    }

    // 基于Promise写法
    XxxxAPI(0).then(result1 => {
      console.log(`第1次请求结果为：${result1}`);
      return XxxxAPI(result1)
    }).then(result2 => {
      console.log(`第1次请求结果为：${result2}`);
      return XxxxAPI(result2)
    }).then(result3 => {
      console.log(`第1次请求结果为：${result3}`);
      return XxxxAPI(result3)
    })
  ```

2. 生成器创建迭代器写法：

  ``` js
    function XxxxAPI(x) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(++x)
        }, 1000)
      })
    }

    // 生成器创建迭代器的写法
    function* genfunc(x) {
      let result1 = yield XxxxAPI(x)
      console.log(`第1次请求结果为：${result1}`);
      let result2 = yield XxxxAPI(result1)
      console.log(`第1次请求结果为：${result2}`);
      let result3 = yield XxxxAPI(result2)
      console.log(`第1次请求结果为：${result3}`); 
    }
    let iter = genfunc(0);
    // iter.next().value 拿到Promise对象
    <!-- 注意：这里的result1和生成器的result1不是一回事，生成器result为了next()传参后将值传递给下一次 XxxxAPI(result)，而这里result是Promise返回的x++的值-->
    iter.next().value.then(result1 => {
        return iter.next(result1).value   // 给next()传参，使yield XxxxAPI(x)值为
      }).then(result2 => {
        return iter.next(result2).value  // return 出去的是Promise对象，但Promise会自动读取里面的值
      }).then(result3 => {
        return iter.next(result3).value
      })
  ```

3. 封装迭代器函数

  ``` js
    function XxxxAPI(x) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(++x)
        }, 1000)
      })
    }

    // 生成器创建迭代器的写法
    function* genfunc(x) {
      let y = yield XxxxAPI(x)
      console.log(`第1次请求结果为：${y}`);
      let z = yield XxxxAPI(y)
      console.log(`第1次请求结果为：${z}`);
      let m = yield XxxxAPI(z)
      console.log(`第1次请求结果为：${m}`);
    }

    // // 封装前将代码整理如下：
    // iter.next().value.then(result1 => {
    //   return iter.next(result1).value.then(result2 => {
    //     return iter.next(result2).value.then(result3 => {
    //       return iter.next(result3).value
    //     })
    //   })
    // })

    // 封装函数
    function asyncFunc(genFn, ...params) {
      let iter = genFn(...params);
      // 使用递归的思想
      const next = x => {
        let { value, done } = iter.next(x);
        if (done) return;
        value.then(next)
      };
      next()
    };

    asyncFunc(genfunc, 0)
  ```

4. async-await

  ``` js
    function XxxxAPI(x) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(++x)
        }, 1000)
      })
    }

    // 封装函数
    function asyncFunc(genFn, ...params) {
      let iter = genFn(...params);
      // 使用递归的思想
      const next = x => {
        let { value, done } = iter.next(x);
        if (done) return;
        value.then(next)
      };
      next()
    };

    asyncFunc(function* genfunc(x) {
      let y = yield XxxxAPI(x)
      console.log(`第1次请求结果为：${y}`);
      let z = yield XxxxAPI(y)
      console.log(`第1次请求结果为：${z}`);
      let m = yield XxxxAPI(z)
      console.log(`第1次请求结果为：${m}`);
    }, 0)
  ```

## 第8章 对象、类与面向对象编程

### 8.1 理解对象

> 对象为一组属性的无序集合。

#### 8.1.1 属性的类型

> ECMA-262使用一些内部特性来描述属性的特征，开发者不能在Javascript中直接访问这些属性，为了将某个特性标识为内部特性，规范会用两个中括号把特性的名称括起来，比如[[Enumerable]]。

##### 8.1.1.1 数据属性

数据属性包含一个保存数据值的位置。值会从这个位置读取，也会写入到这个位置。数据属性有4个特征描述它们的行为：
1. `[[Configurable]]`：表示属性书否可以通过`delete`删除并重新定义，默认为`true`；
2. `[[Enumberable]]`：表示属性书否可以通过`for in`循环返回，默认为`true`；
3. `[[Writeable]]`：表示属性书否可以被修改，默认为`true`；
4. `[[Value]]`：包含属性实际值，为读取和写入属性的位置，默认为`undefined`；
5. `Object.defineProperty()`：接受3个参数，第一个值为

  ``` js
    // configurable
    let person = { name: 'fantasy' };
    Object.defineProperty(person, 'name', {
      configurable: false,
      value: 'fantasy'
    });
    delete person.name
    console.log(person.name);

    Object.defineProperty(person, 'name', {
      writable: false,
      value: 'fantasy'
    });
    person.name = "Bob";
    console.log(person.name);  // fantasy    
  ```

##### 8.1.1.2 访问器属性

> 访问器函数不包括数据值。它们包含一个获取（getter）函数和一个设置（setter）函数。在读取访问器属性是，会调用获取函数，这个函数的责任就是返回一个有效的值。在访问器属性是，会调用设置函数并传入新值，这个函数必须决定对数据做出什么修改。它包含4个属性；

1. `[[Configurable]]`：表示属性书否可以通过`delete`删除并重新定义，默认为`true`；
2. `[[Enumberable]]`：表示属性书否可以通过`for in`循环返回，默认为`true`；
3. `[[Get]]`：获取函数，在读取属性时调用，默认为`undefined`；
4. `[[Set]]`：设置函数，在写入属性时调用，默认为`undefined`；

  ``` js
    // 访问器属性：设置一个属性会导致一些其它属性发生变化
    let book = {
      _year: 2017,
      edition: 1
    }
    Object.defineProperty(book, 'year', {  // year 被定义为访问器属性
      get() {
        return this._year
      },
      set(newValue) {
        if (newValue > 2017) {
          this._year = newValue;
          this.edition += newValue - 2017;
        }
      }
    });
    book.year = 2018;
    console.log(book.edition);  // 2
  ```

##### 8.1.2 定义多个属性

> 类似`Object.defineProperty`，`Object.defineProperties`可以同时设置多个属性。

  ``` js
    let book = {};
    Object.defineProperties(book, {
      year_: {
        value: 2017
      },

      edition: {
        value: 1
      },

      year: {
        get() {
          return this.year_
        }
      },

      set(newValue) {
        if (newValue > 2017) {
          this.year_ = newValue;
          this.edition += newValue - 2017
        }
      }
    });
    console.log(book); // {}
    console.log(book.year_); // 2017 
    console.log(book.year); // 2017
    book.year = 2018;
    console.log(book.edition);
  ```

##### 8.1.3 读取属性的特性

> `Object.getOwnPropertyDescriptors`可以yong

  ``` js
    let description = Object.getOwnPropertyDescriptors(book)
    console.log(description);
    // 输出
    {
      year_: {
        value: 2017,
        writable: false,
        enumerable: false,
        configurable: false
      },
      edition: { value: 1, writable: false, enumerable: false, configurable: false },
      year: {
        get: [Function: get],
        set: undefined,
        enumerable: false,
        configurable: false
      },
      set: {
        value: undefined,
        writable: false,
        enumerable: false,
        configurable: false
      }
    }
  ```

##### 8.1.4 合并对象

> 合并两个对象也称为“混入”，是将两个对象合并的得到属性加强，包括里面的方法。

  ``` js
    // 对象合并
    let a = { name: 'fantasy' };
    let b = { sex: '男' };
    console.log(Object.assign(a, b)); // { name: 'fantasy', sex: '男' }
  ```

##### 8.1.5 对象标识及相等判断

> 为了解决ES6之前对象相等判断不明确问题，ES6引入了`Object.is()`方法，输入两个值判断`====`返回布尔值。

  ``` js
    // Object.is()
    console.log(NaN === NaN); // false
    console.log(+0 === -0); // true
    console.log(+0 === 0); // true
    console.log(-0 === 0); // true

    console.log(Object.is(NaN, NaN)); // true
    console.log(Object.is(+0, -0)); // false
    console.log(Object.is(+0, 0)); // true
    console.log(Object.is(-0, 0)); // false
  ```

##### 8.1.6 增强的对象语法

> ES6提供很多对象的语法糖。

1. 属性值简写：属性名和变量名相同时，可以只写一个；
   
  ``` js
    // 属性值简写
    let name = 'fantasy';
    let person = { name };
    console.log(person); // { name: 'fantasy' }
  ```

2. 可计算属性：之前要创建动态属性必须通过`[]`赋值语法挨个赋值，现在可以通过`[]`计算属性直接给对象赋予动态属性值，甚至可以对属性值进行复杂运算。

  ``` js
    // 可计算属性
    const nameKey = 'name';
    const ageKey = 'age';
    const jobcKey = 'job';
    let person = {
      [nameKey]: 'Bob',
      [ageKey]: 18,
      [jobcKey]: 'Software engineer'
    }
    console.log(person); // { name: 'Bob', age: 18, job: 'Software engineer' }

    // 可以对属性值做复杂运算
    let uniqueToken = 0;
    function getUniqueKey(key) {
      return `${key}_${uniqueToken++}`
    }
    let otherPerson = {
      [getUniqueKey(nameKey)]: 'fantasy',
      [getUniqueKey(ageKey)]: 25,
      [getUniqueKey(jobcKey)]: 'writter'
    }
    console.log(otherPerson); // { name_0: 'fantasy', age_1: 25, job_2: 'writter' }
  ```

3. 简写方法名：不用再用方法名+`：`+匿名函数表达式来定义对象方法，直接写函数就行，并且和计算属性兼容。

  ``` js
    // 简写方法名
    let person = {
      sayName(name) {
        console.log(`My name is ${name}`);
      }
    };
    person.sayName('Bob') // My name is Bob

    // 兼容计算属性
    const methodKey = 'sayName'
    let otherPerson = {
      [methodKey](name) {
        console.log(`My name is ${name}`);
      }
    };
    otherPerson.sayName('fantasy') // My name is fantasy
  ```

##### 8.1.7 对象解构

1. ES6中新增了解构语法，如果让变量直接使用属性值时可以简写;
2. 解构赋值时可以同时定义新变量，并给新变量;
3. 解构时可以嵌套解构；
4. 函数传参时也可以进行解构；

  ``` js
    let person = {
      name: 'fantasy',
      age: 27,
      job: {
        title: 'engineer'
      }
    }

    // 简单解构
    let { name: userName, age: userAge, job: userJob } = person;
    console.log(userName, userAge, userJob); // fantasy 27 { title: 'engineer' }

    // 简写解构
    let { name, age, job } = person;
    console.log(name, age, job); // fantasy 27 { title: 'engineer' }

    // 嵌套解构和部分解构
    let { job: { title } } = person;
    console.log(title); // engineer

    // 函数传参解构
    function printPerson(foo, { name, age }, bar) {
      console.log(arguments);
      console.log(name, age);
    }
    printPerson('1st', person, '2nd') // [Arguments] { '0': '1st', '1': { name: 'fantasy', age: 27, job: { title: 'engineer' } }, '2': '2nd' }  fantasy 27
  ```

### 8.2 创建对象

#### 8.2.1 概述

略

#### 8.2.2 工厂模式

> 工厂模式时一种众所周知的设计模式，广泛应用于软件工程领域，用于抽象创建特定对象的过程。
> 这种工厂模式虽然可以解决创建多个类似对象的问题，但没有解决对象标识问题（即新创建对象是什么类型）。

  ``` js
    // 工厂模式
    function createPerson(name, age, job) {
      return o = {
        name,
        age,
        job,
        sayName() {
          console.log(this.name);
        }
      }
    };
    let person1 = createPerson('Bob', 27, 'engineer')
    let person2 = createPerson('Nick', 28, 'doctor')
    console.log(person1); // { name: 'Bob', age: 27, job: 'engineer', sayName: [Function: sayName] }
    console.log(person2); // { name: 'Nick', age: 28, job: 'doctor', sayName: [Function: sayName] }
  ```

#### 8.2.3 构造函数模式

##### 8.2.3.1 构造函数基本结构

构造函数和工厂函数的结构区别：
1. 没有显式的创建对象；
2. 属性和方法直接赋值给了`this`；
3. 没有`return`；
4. 必须通过`new`调用；

  ``` js
    // 构造函数
    function Person(name, age, job) {
      this.name = name;
      this.age = age;
      this.job = job;
      this.sayName = function() {
        console.log(this.name);
      }
    }
    let person1 = new Person('Bob', 27, 'engineer');
    let person2 = new Person('Nick', 28, 'doctor');
    console.log(person1); // Person { name: 'Bob', age: 27, job: 'engineer', sayName: [Function (anonymous)] }
    console.log(person1.sayName()); // Bob
    console.log(person2); // Person { name: 'Nick', age: 28, job: 'doctor', sayName: [Function (anonymous)] }
    console.log(person2.sayName()); // Nick

    // person1和2分别保存者Person的实例，使用constructor对象类型标识属性检测到它们都指向Person
    console.log(person1.constructor == Person); // true
    console.log(person2.constructor == Person); // true

    // person1和2是Object的实例，同时也是Person的实例
    console.log(person1 instanceof Object); // true
    console.log(person1 instanceof Person); // true
    console.log(person2 instanceof Object); // true
    console.log(person2 instanceof Person); // true
  ```

##### 8.2.3.2 构造函数问题

> 构造函数定义的方法会在每个实例上都创建一遍。可以通过把方法定义在函数外解决，这样虽然解决了相同逻辑的函数重复定义的问题，但会造成作用域和结构混乱。

  ``` js
    function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
      console.log(this.name);
    }
    }
    let person1 = new Person('Bob', 27, 'engineer');
    let person2 = new Person('Nick', 28, 'doctor');

    console.log(person1.sayName == person2.sayName); // false

    function Person1(name, age, job) {
      this.name = name;
      this.age = age;
      this.job = job;
      this.sayName = sayName
    }
    function sayName() {
      console.log(this.name);
    };
    let person3 = new Person1('Bob', 27, 'engineer');
    let person4 = new Person1('Nick', 28, 'doctor');

    person3.sayName(); // Bob
    person4.sayName(); // Nick
    console.log(person3.sayName == person4.sayName); // true
  ```

  #### 8.2.4 原型模式

  