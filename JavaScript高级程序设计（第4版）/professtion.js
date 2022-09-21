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

// // new Date()
// const now = new Date()
// console.log(now);            // 2022-09-03T14:19:06.427Z
// console.log(typeof now);     // Object
// console.log(new Date(1000)); // 1970-01-01T00:00:01.000Z

// // new Date(Date.parse(""))
// console.log(new Date(Date.parse("9/3/2020")));      // 2020-09-02T16:00:00.000Z
// console.log(new Date(Date.parse("September 3,2022")));  // 2022-09-02T16:00:00.000Z
// console.log(new Date(Date.parse("Saturday September 3 2022 22:37:20 527Z")));  // 2022-09-03T22:37:20.000Z
// console.log(new Date(Date.parse("Saturday September 3 2022 22:37:20.527Z")));  // 2022-09-03T22:37:20.527Z

// // new Date(Date.UTC())
// console.log(new Date(Date.UTC(2022,8,3,23,1,20))); // 2022-09-03T23:01:20.000Z
// console.log(new Date(2022,8,3,23,1,20)); // 2022-09-03T15:01:20.000Z

// // Date.now()
// console.log(Date.now());  // 1662218840486

// const now = new Date();
// console.log(now.toString());
// console.log(now.toDateString());
// console.log(new Date(2022,9,4) > new Date(2022,9,3));

// // 日期/时间组件
// const time = new Date(2022,8,3,12,33,10);
// console.log(time);                    // 2022-09-03T04:33:10.000Z
// console.log(time.getTime());          // 1662179590000
// console.log(time.getFullYear());      // 2022
// console.log(time.getUTCFullYear());   // 2022
// console.log(time.getHours());         // 12
// console.log(time.getUTCHours());      // 4
// console.log(time.setSeconds(0));      // 1662179580000
// console.log(time);                    // 2022-09-03T04:33:00.000Z

// // Date.parse()和Date.UTC()的区别
// const parse_time = Date.parse("2022-09-04T00:00:00")
// const UTC_time = Date.UTC(2022,8,4,0,0,0)
// console.log(parse_time);                               // 1662220800000
// console.log(UTC_time);                                 // 1662249600000
// console.log((UTC_time - parse_time) / (3600*1000));    // 8
// console.log(new Date(parse_time));
// console.log(new Date(UTC_time));

// // 原始值包装类型生命周期
// let s1 = 'some text';
// let s1_text = s1.substring(5);
// console.log(s1_text);          // text
// s1.color = 'red';
// console.log(s1.color);         // undefined

// // Object自动判断类型
// let s2 = new Object('hello');
// let num = new Object(25);
// console.log(s2 instanceof String);   // true
// console.log(num instanceof Number);  // true

// // 构造函数和转型函数
// let value = "25";
// let number = Number(value);    // 转型函数
// console.log(typeof number);    // number
// let obj = new Number(value);   // 构造函数
// console.log(typeof obj);       // object

// // Boolean对象
// let falseObject = new Boolean(false);
// let falseValue = false;
// console.log(falseObject && true);       // true
// console.log(falseValue && true);        // false

// console.log(typeof falseObject);              // object
// console.log(typeof falseValue);               // boolean
// console.log(falseObject instanceof Boolean);  // true 
// console.log(falseValue instanceof Boolean);   // false

// // Number原始包装类型
// let num1 = 10;
// console.log(num1.toString(2));       // "1010"
// let num2 = 10.01
// console.log(num2.toFixed(1));        // 10.0
// console.log(num2.toExponential(1));  // 1.0e+1
// let num3 = 99;
// console.log(num3.toPrecision(1));    // 1e+2
// console.log(num3.toPrecision(2));    // 99
// console.log(num3.toPrecision(3));    // 99.0
// console.log(Number.isInteger(1.00)); // true
// console.log(Number.isInteger(1.01)); // false

// 字符串方法
// const str  = 'hello world';
// console.log(str.charAt(1));                                  // "e"
// console.log(str.charCodeAt(1));                              // "101"
// console.log(String.fromCharCode(97,98,99,100,101));          // "abcde" 
// console.log(String.fromCharCode(0x61,0x62,0x63,0x64,0x65));  // "abcde"
// console.log(str.concat(',',' ','h','i','!'));                // "hello world, hi!"
// console.log(str.slice(5,8));                                 // "  wo"
// console.log(str.substring(5,8));                             // "  wo"
// console.log(str.substr(5,3));                                // "  wo"
// console.log(str.slice(-6,-3));                               // "  wo"            
// console.log(str.substring(-7,5));                            // "hello"
// console.log(str.substr(-6,3));                               // "  wo"   

// // 定位字符串
// console.log(str.indexOf('o'));        // 4
// console.log(str.indexOf('o',5));      // 7
// console.log(str.lastIndexOf('o',4));  // 4

// function findStr(str1,str2) {
//   // 判断输入值是否为字符类型
//   if (typeof str1 !== 'string') {
//     return `${str1} is not a string`
//   }
//   if (typeof str2 !== 'string') {
//     return `${str2} is not a string`
//   }
//   const arr = [];
//   let pos = str1.indexOf(str2);
//   while (pos > -1) {
//     arr.push(pos);
//     pos = str1.indexOf(str2,pos + 1)
//   }
//   return `${str1}中的${str2}位于：${arr}`;
// }
// let arr =  findStr('hello world','o');
// console.log(arr);

// // 字符串包含方法
// let message = 'foodbarbaz';
// console.log(message.startsWith('foo'));        // true
// console.log(message.startsWith('bar'));        // false
// console.log(message.startsWith('bar',4));      // true

// console.log(message.endsWith('baz'));          // true 
// console.log(message.endsWith('bar'));          // false
// console.log(message.endsWith('bar',7));        // true

// console.log(message.includes('bar'));          // true
// console.log(message.includes('baz'));          // true

// // trim()方法
// let stringValue = ' hello world ';
// console.log(stringValue.trim());            // 'hello world'
// console.log(stringValue.trimStart());       // 'hello world '  
// console.log(stringValue.trimEnd());         // ' hello world'

// // repeat()
// let stringValue = 'ha ';
// console.log(stringValue.repeat(5) + 'xiangzai');   // ha ha ha ha ha xiangzai

// // padStart() padEnd()
// let stringValue = 'foo'
// console.log(stringValue.padStart(8));       // '     foo'
// console.log(stringValue.padStart(8,'.'));   // '.....foo'
// console.log(stringValue.padEnd(8,'.'));     // 'foo.....'
// console.log(stringValue.padEnd(2));         // 'foo'

// // 字符串迭代与解构
// let stringValue = 'abcde';
// console.log(...stringValue);    // a b c d e
// console.log([...stringValue]);  // [ 'a', 'b', 'c', 'd', 'e' ]

// // 字符串大小写转化
// let stringValue = 'hello world';
// console.log(stringValue.toUpperCase());                // 'HELLO WORLD'
// console.log(stringValue.toLocaleUpperCase());          // 'HELLO WORLD'
// console.log(stringValue.toLowerCase());                // 'hello world'
// console.log(stringValue.toLocaleLowerCase());          // 'hello world'

// 正则表达式
// // 传统方法提取字符串中的数字
// let str = "abcd1862dcndna1563"
// console.log([...str]);
// let numberArr = [...str].filter(a=> !Number.isNaN(parseInt(a)));
// let numberStr = numberArr.join("")
// console.log(numberStr);
// // 正则表达式提取字符串中的数字
// console.log(str.match(/\d/g).join(""));

// // 字面量创建正则表达式
// let name = "fandongxiang";
// console.log(/a/.test(name));          // true
// let str = "a";
// console.log(eval(`/${str}/`).test(name));   // true

// // 对象创建正则表达式
// let name = "fandongxiang";
// let str = "a";
// let reg1 = new RegExp("a","g");           // 字符串
// let reg2 = new RegExp(str,"g");           // 变量 
// console.log(reg1.test(name));
// console.log(reg2.test(name));

// // 或运算符
// // 检测“010”或“020”地区的电话号码
// let tel1 = "010-12345678";
// let tel2 = "030-12345678";
// let tel3 = "020-123456789";
// let tel4 = "020-123456"
// console.log(/^(010|020)\-\d{7,8}$/.test(tel1));
// console.log(/^(010|020)\-\d{7,8}$/.test(tel3));
// console.log(/^(010|020)\-\d{7,8}$/.test(tel3));
// console.log(/^(010|020)\-\d{7,8}$/.test(tel4));

// // 转义
// let str = "2.33";
// let reg1 = new RegExp("\d+\.\d+","g")
// let reg2 = new RegExp("\\d+\\.\\d+","g")
// console.log(/^\d+\.\d+$/.test(str));     // true
// console.log(reg1.test(str));             // false 
// console.log(reg1.test("dddddd"));        // true
// console.log("\d+\.\d+");                 // d+.d+
// console.log(reg2.test(str));             // true

// // 关于数字和字母判断
// let str = ".33"
// let num = .33
// console.log(/^\d+\.\d+$/.test(str));    // false
// console.log(/^\d+\.\d+$/.test(num));    // true 
// console.log(.33 === 0.33);              // true

// // 网址匹配练习
// let url1 = "https://www.baidu.com";
// let url2 = "www.baidu.com";
// let url3 = "www.baidu.cn";
// let url4 = "baidu.com";
// let url5 = "http://baidu.com";
// console.log(/^((https:\/\/|http:\/\/)www\.|(www\.))?\w+\.(com|cn|org)$/.test(url1));   // true
// console.log(/^((https:\/\/|http:\/\/)www\.|(www\.))?\w+\.(com|cn|org)$/.test(url2));   // true
// console.log(/^((https:\/\/|http:\/\/)www\.|(www\.))?\w+\.(com|cn|org)$/.test(url3));   // true
// console.log(/^((https:\/\/|http:\/\/)www\.|(www\.))?\w+\.(com|cn|org)$/.test(url4));   // true
// console.log(/^((https:\/\/|http:\/\/)www\.|(www\.))?\w+\.(com|cn|org)$/.test(url5));   // false

// // 字符边界
// let str1 = "abc123def";
// let str2 = "123def";
// console.log(/\d/.test(str1));            // true
// console.log(/^\d/.test(str1));           // false
// console.log(/^\d/.test(str2));           // true
// console.log(/^\d$/.test(str2));          // false

// let str = "abc1990def288";
// // 无全局匹配模式下单个\d，匹配第一个数字
// console.log(str.match(/\d/));    // ["1"]
// // 无全局匹配模式下\d+，匹配第一个连续的数字
// console.log(str.match(/\d+/));   // ["1990"]
// // 全局匹配模式下\d，挨个输出每个数字
// console.log(str.match(/\d/g));   // [ '1', '9', '9', '0' , '2' , '8' , '8']
// // 全局匹配模式下\d+，挨个输出连续的数字
// console.log(str.match(/\d+/g));  // [ '1990', '288' ]
// // 无全局匹配模式下\d\d，输出第一个两位数字
// console.log(str.match(/\d\d/));  // [ '19' ]
// // 全局匹配模式下\d\d，依次输出两位数字
// console.log(str.match(/\d\d/g)); // [ '19', '90', '28']

// // 模板字面量表示字符串
// let message = `
// 张三: 010 - 9999999, 
// 李四: 020 - 88888888`
// // 匹配姓名
// console.log(message.match(/[^-\d:\s,]+/g));    // [ '张三', '李四' ]
// // 匹配电话
// console.log(message.match(/\d+\s-\s\d+/g));    // [ '010 - 9999999', '020 - 88888888' ]

// // \w和\W
// let str = "123_456@qq.com"
// console.log(str.match(/\w+/g));     // [ '123_456', 'qq', 'com' ]
// console.log(str.match(/\W/g));      // [ '@', '.' ]

// // 匹配html标签中的所有元素
// let html = `
//   <span>
//     123abc_&&@@
//   </span>
// `
// console.log(html.match(/<span>[\s\S]+<\/span>/));   // '<span>\n    123abc_&&@@\n  </span>'
// console.log(html.match(/<span>[\w\W]+<\/span>/));   // '<span>\n    123abc_&&@@\n  </span>'
// console.log(html.match(/<span>[\D\d]+<\/span>/));   // '<span>\n    123abc_&&@@\n  </span>'

// // 正则模式修正符 g和i
// let str = "Hello World";
// // g
// console.log(str.match(/l/));          // [ 'l', index: 2, input: 'Hello World', groups: undefined ]
// console.log(str.match(/l/g));         // [ 'l', 'l', 'l' ]
// // i
// console.log(str.match(/w/));          // null
// console.log(str.match(/w/i));         // [ 'W', index: 6, input: 'Hello World', groups: undefined ]

// // m：将多行文本转为数组对象形式
// let message = `
//   #1 js,200元 #
//   #2 node.js,400元 #
//   #4 www.baidu.com #
//   #3 php,300元 # 备注
// `
// console.log(message.match(/#.+,.+#/gm));
// let lessons = message.match(/#.+,.+#/gm).map(v => {
//   v = v.replace(/#\d+\s*/, '').replace(/\s+#/, '');
//   // console.log(v);
//   [name, price] = v.split(",")
//   return { name, price }
// });
// console.log(lessons);

// // 原子表的使用：匹配日期
// let date1 = "2022-09-11";
// let date2 = "2022/09/11";
// console.log(date1.match(/^\d{4}([-\/])\d{2}\1\d{2}$/));  // [ '2022-09-11', '-', index: 0, input: '2022-09-11', groups: undefined ]
// console.log(date2.match(/^\d{4}([-\/])\d{2}\1\d{2}$/));  // [ '2022/09/11', '/', index: 0, input: '2022/09/11', groups: undefined ]

// // 匹配汉字
// let str = "fantasy你好啊,001我很好";
// console.log(str.match(/\p{sc=Han}+/gu));
// console.log(str.match(/\p{L}+/gu));          // [ 'fantasy你好啊', '我很好' ]
// console.log(str.match(/\P{L}+/gu));          // [ ',001' ]
// console.log(str.match(/\p{N}+/gu));          // [ '001' ]
// console.log(str.match(/\P{N}+/gu));          // [ 'fantasy你好啊,', '我很好' ]

// // 匹配换行的内容
// let str = `
//    fan
//    dong

// `
// console.log(str.match(/.+/g));        // [ '   fan', '   dong', '   ' ]
// console.log(str.match(/.+/gs));       // [ '\n   fan\n   dong\n\n' ]
// console.log(str.match(/[\s\S]+/g));   // [ '\n   fan\n   dong\n\n' ]

// // 原子组
// let str = `
//    <h1>
//    这是一个HTML标签内容
//    </h1>
// `
// let reg = /<(h[1-6])>([\s\S])*<\/\1>/g
// console.log(str.match(reg)[0].replace(/[\n\s]/g,''));  // <h1>这是一个HTML标签内容</h1>

// let arr = [{ name: 'fan', sex: 'gen' }, { name: 'wen', sex: 'male' }];
// let newArr = arr.map(Element => {
//   Element.hello = 'nihao'
//   return Element;
// })
// console.log(newArr);

// var shuiguo = ["Banana", "Orange", "Apple", "Mango"];
// shuiguo.splice(2, 0, "Lemon");
// console.log(shuiguo);

let puller = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2', 'E1', 'E2'];
// puller.forEach((element, index) => {
//     puller[index] = element + 'c';
//   })


// let res = [
//     // { zooms: 'A1', amount: 2 },
//     { zooms: 'A2', amount: 2 },
//     { zooms: 'B1', amount: 2 },
//     { zooms: 'B2', amount: 2 },
//     { zooms: 'C1', amount: 2 },
//     { zooms: 'C2', amount: 2 },
//     { zooms: 'D1', amount: 2 },
//     { zooms: 'D2', amount: 2 },
//     { zooms: 'E1', amount: 2 },
//     // { zooms: 'E2', amount: 2 },
//   ]
// console.log(res.pop().zooms == 'E2');

// if (res.slice(-1).zooms !== 'E2') {
//   res.push({ zooms: 'E2', amount: 0 })
// }
// puller.map((element, index) => {
//   if (element == res[index].zooms) {
//     return puller[index] = res[index].amount
//   } else {
//     res.splice(index, 0, 'abc');
//     return puller[index] = 0;
//   }
// })
// console.log(puller);

// // string.match()
// const str = 'abbcbbbdbbbbebbbbbb';
// const reg1 = /b+/g;
// const reg2 = /f/g
// let matches1 = str.match(reg1);
// let matches2 = str.match(reg2);
// console.log(matches1); // [ 'bb', 'bbb', 'bbbb', 'bbbbbb' ]
// console.log(matches2); // null
// // string.search()
// let search1 = str.search(reg1);
// let search2 = str.search(reg2);
// console.log(search1); // 1
// console.log(search2); // -1
// // string.replace()
// let replace1 = str.replace('b', 'f');
// let replace2 = str.replace(/b/, 'f');
// let replace3 = str.replace(/b/g, 'f');
// console.log(replace1); // afbcbbbdbbbbebbbbbb
// console.log(replace2); // afbcbbbdbbbbebbbbbb
// console.log(replace3); // affcfffdffffeffffff

// // string.replace()
// let str = 'abc12345#$*%';
// let newStr = str.replace(/([^\d]*)(\d*)([^\w]*)/, function(match, p1, p2, p3, offset, string) {
//   return [p1,p2,p3].join('-');
// })
// console.log(newStr);

// // string.split()
// const str1 = 'cat,fish,monkey,dog';
// const str2 = 'Harry Trump ;Fred Barney; Helen Rigby ';
// const str3 = "Hello 1 word. Sentence number 2."
// const str4 = 'ca,bc,a,bca,bca,bc';
// console.log(str1.split(',')); // [ 'cat', 'fish', 'monkey', 'dog' ]
// console.log(str1.split(/[^,]+/)); // [ '', ',', ',', ',', '' ]
// console.log(str2.split(/\s*(?:;|$)\s*/)); // ['Harry Trump','Fred Barney','Helen Rigby','']
// console.log(str3.split(/\d/)); // [ 'Hello ', ' word. Sentence number ', '.' ]
// console.log(str4.split(['a', 'b'])); // [ 'c', 'c,', 'c', 'c', 'c' ]

// // string.localeCompare()
// function determineOrder(value, compareValue) {
//   let result = value.localeCompare(compareValue);
//   if (result > 0) {
//     return `${value}在${compareValue}后头`
//   } else if (result < 0) {
//     return `${value}在${compareValue}前头`
//   } else {
//     return `${value}与${compareValue}相等`
//   }
// }
// console.log(determineOrder('yellow', 'red'));
// console.log(determineOrder('yellow', 'yellow'));
// console.log(determineOrder('yellow', 'zoo'));

// let global = function() {
//   return this
// }();

// // min() max()
// let max = Math.max(1, 2, 4, 5, 8);
// let min = Math.min(1, 2, 4, 5, 8);
// console.log(max);           // 8
// console.log(min);           // 1

// let arr = [1, 2, 4, 5, 8]
// let arrMax = Math.max(...arr);
// let arrMin = Math.min(...arr);
// console.log(arrMax);        // 8
// console.log(arrMin);        // 1

// // math方法
// console.log(Math.ceil(25.9));      // 26 
// console.log(Math.ceil(25.5));      // 26
// console.log(Math.ceil(25.1));      // 26

// console.log(Math.floor(25.9));     // 25 
// console.log(Math.floor(25.5));     // 25 
// console.log(Math.floor(25.1));     // 25

// console.log(Math.round(25.9));     // 26
// console.log(Math.round(25.5));     // 26
// console.log(Math.round(25.1));     // 25

// console.log(Math.fround(0.4));     // 0.4000000059604645
// console.log(Math.fround(0.5));     // 0.5
// console.log(Math.fround(25.9));    // 25.899999618530273

// // math.random
// function selectFrom(lowerValue, upperValue) {
//   let choices = upperValue - lowerValue + 1;
//   return Math.floor(Math.random() * choices + lowerValue)
// };
// console.log(selectFrom(0, 10));
// const arr = ['red', 'yellow', 'blue', 'black', 'white', 'pink'];
// console.log(arr[selectFrom(0, arr.length - 1)]);

// // math其它方法
// console.log(Math.abs(-3));      // 3
// console.log(Math.abs(-3.5));    // 3.5
// console.log(Math.trunc(3.55));  // 3

// 第6章 集合引用类型

// // Object
// let person = {
//   'name': 'fandongxiang',
//   'first name': 'fan',
//   'sex': '男'
// }
// let str = 'sex'
// console.log(person.str);            // undefined
// console.log(person[str]);           // '男'
// console.log(person['first name']);  // fan

// // Array 的创建
// let color = new Array('blue', 'blank', 'red', 'pink')
// console.log(color);         // [ 'blue', 'blank', 'red', 'pink' ]
// let num = new Array(3);
// console.log(num);          // [ <3 empty items> ]
// console.log(num.length);  // 3

// // 字符串会被拆分为单字符串字符
// let str = 'abcde';
// console.log(Array.from(str)); // [ 'a', 'b', 'c', 'd', 'e' ]

// // Array.from() 浅拷贝
// let p1 = [1, 3, 5, 9];
// let p2 = p1;
// let p3 = Array.from(p1)
// console.log(p1 === p2); // true
// console.log(p3); // [ 1, 3, 5, 9 ]
// console.log(p1 === p3); // false

// // Array.of()
// console.log(Array.of(1, 2, 3, 4, 5)); // [ 1, 2, 3, 4, 5 ]

// // 数组索引添加删除元素
// let colors = ['red', 'blank', 'green'];
// colors.length = 2;
// console.log(colors); // [ 'red', 'blank' ]
// colors.length = 3;
// console.log(colors); // [ 'red', 'blank', <1 empty item> ]
// console.log(colors[2]); // undefined

// colors[colors.length] = 'yellow';
// colors[colors.length] = 'white';
// console.log(colors);  // [ 'red', 'blank', <1 empty item>, 'yellow', 'white' ]

// // 检测数组
// let array = [1, 2, 35, 4];
// console.log(array instanceof Array);   // true
// console.log(Array.isArray(array));     // true  

// 数组迭代器
let colors = ['red', 'blank', 'green'];
console.log(colors.keys()); // 返回迭代器
console.log(Array.from(colors.keys())); // [ 0, 1, 2 ]
console.log(Array.from(colors.values())); // [ 'red', 'blank', 'green' ]
console.log(Array.from(colors.entries())); // [ [ 0, 'red' ], [ 1, 'blank' ], [ 2, 'green' ] ]