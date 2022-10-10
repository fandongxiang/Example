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

// // 数组迭代器
// let colors = ['red', 'blank', 'green'];
// console.log(colors.keys()); // 返回迭代器
// console.log(Array.from(colors.keys())); // [ 0, 1, 2 ]
// console.log(Array.from(colors.values())); // [ 'red', 'blank', 'green' ]
// console.log(Array.from(colors.entries())); // [ [ 0, 'red' ], [ 1, 'blank' ], [ 2, 'green' ] ]

// // array.fill() array.copyWithin()
// let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(num.fill(7, 3, 5)); // [ 0, 1, 2, 7, 7, 5, 6, 7, 8, 9]
// console.log(num.copyWithin(7, 3, 5)); // [ 0, 1, 2, 7, 7, 5, 6, 7, 7, 9]

// // array.join()
// let str = ['a', 'b', 'c', 'd', 'e'];
// console.log(str.join()); // 'a,b,c,d,e'
// console.log(str.join(' ')); // 'a b c d e'

// // 数组栈方法
// let str = ['a', 'b', 'c', 'd', 'e'];
// console.log(str.push('f')); // 6
// console.log(str); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// console.log(str.pop()); // 'f'
// console.log(str); // [ 'a', 'b', 'c', 'd', 'e' ]

// // 数组队列方法
// let str = ['a', 'b', 'c', 'd', 'e'];
// console.log(str.shift()); // 'a'
// console.log(str); // [ 'b', 'c', 'd', 'e' ]
// console.log(str.unshift('a'));  // 5

// // reverse() sort()
// let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(num.reverse()); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]
// console.log(num); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]

// let num2 = [0, 1, 5, 15, 4, 44]
// console.log(num2.sort()); // [ 0, 1, 15, 4, 44, 5 ]
// console.log(num2); // [ 0, 1, 15, 4, 44, 5 ]

// function ascending(value1, value2) {
//   if (value1 < value2) {
//     return -1;
//   } else if (value1 > value2) {
//     return 1
//   } else {
//     return 0;
//   }
// };

// function descending(value1, value2) {
//   if (value1 < value2) {
//     return 1;
//   } else if (value1 > value2) {
//     return -1;
//   } else {
//     return 0
//   }
// };
// console.log(num2.sort(ascending)); // [ 0, 1, 4, 5, 15, 44 ]
// console.log(num2.sort(descending)); // [ 44, 15, 5, 4, 1, 0 ]
// // 箭头函数写法
// console.log(num2.sort((a, b) => a < b ? 1 : a > b ? -1 : 0)); // [ 44, 15, 5, 4, 1, 0 ]

// let num1 = [1, 2, 3, 4, 5];
// let num2 = [7, 8, 9, 10];
// console.log(num1.concat(6, num2)); // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
// console.log(num1); // [ 1, 2, 3, 4, 5 ]

// let colors = ['red', 'blank', 'green', 'white', 'pink'];
// console.log(colors.slice(1));
// ['blank', 'green', 'white', 'pink']
// console.log(colors.slice(1, 3)); // [ 'blank', 'green' ]
// console.log(colors); // [ 'red', 'blank', 'green', 'white', 'pink' ]

// let str = 'hello world';
// console.log(str.slice(1, 3));

// // Array.spice()
// // 删除
// let colors = ['red', 'blank', 'green', 'yellow'];
// console.log(colors.splice(1, 2)); // [ 'blank', 'green' ]
// console.log(colors); // [ 'red', 'yellow' ]
// // 插入
// console.log(colors.splice(1, 0, 'pink', 'white')); // []
// console.log(colors); // [ 'red', 'pink', 'white', 'yellow' ]
// // 替换
// console.log(colors.splice(1, 1, 'blue', 'yellow')); // [ 'pink' ]
// console.log(colors); // [ 'red', 'blue', 'yellow', 'white', 'yellow' ]

// let num = [1, 2, 3, 4, 5, 4, 3, 2, 4, 1]
// console.log(num.lastIndexOf(2, 2));
// console.log(num.indexOf(3, 6));
// console.log(num.lastIndexOf(4, 5));

// // array.find
// const person = [{
//     name: 'Matt',
//     age: 27
//   },
//   {
//     name: 'Bob',
//     age: 29
//   }
// ];
// console.log(person.find(element => element.age < 28)); // { name: 'Matt', age: 27 }
// console.log(person.findIndex(element => element.age < 28)); // 0

// // 数组迭代方法
// let num = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// // every()
// let everyResults = num.every((element, index, array) => element > 2);
// console.log(everyResults); // false

// // some()
// let someResults = num.some((element, index, array) => element > 2);
// let findElement = num.some(element => {
//   if (element > 4) {
//     result = element; // 不加var，为全局变量
//     return true;
//   }
// })
// console.log(someResults); // true
// console.log(result); // 5

// // filter()
// let filterResult = num.filter(element => element > 2);
// console.log(filterResult); // 5

// // map()
// let mapResult = num.map(element => element * 2); // [ 3, 4, 5, 4, 3 ]
// console.log(mapResult); // [ 2, 4, 6, 8, 10, 8, 6, 4, 2 ]

// // forEach()
// let newNum = [];
// let forEachResult = num.forEach(element => {
//   if (element > 2) newNum.push(element)
// });
// console.log(newNum);  // [ 3, 4, 5, 4, 3 ]

// // 数组归并
// let values = [1, 2, 3, 4, 5];
// console.log(values.reduce((prev, cur) => prev + cur)) // 15
// console.log(values.reduceRight((prev, cur) => prev + cur)); // 15
// console.log(values.reduce((prev, cur) => prev * cur)) // 120

// Map
// const m = new Map();
// m.set('first name', 'fan')
//   .set('last name', 'dong');
// const m1 = new Map([
//   ['color', 'yellow'],
//   ['rgb', '255,255,0']
// ])
// console.log(m.size); // 2
// console.log(m.delete('first name')); // true
// console.log(m.has('first name')); // false
// console.log(m.get('first name')); // undefined
// console.log(m.clear()); // undefined
// console.log(m.size); // 0

// // WeakMap
// const key1 = { id: 1 },
//   key2 = { id: 2 }
// const wm = new WeakMap([
//   [key1, 'val1'],
//   ['BADKEY', 'val2'],
//   [key2, 'val3']
// ]);

// TypeError: Invalid value used as weak map key

// // Set 集合
// const m1 = new Set([1, 4, 'apple', 'red', 1, 4])
// const m2 = new Set().add('red')
//   .add('blue')
//   .add('black')
//   .add('pink')
// console.log(m1); // Set(4) { 1, 4, 'apple', 'red' }
// console.log(m2); // Set(4) { 'red', 'blue', 'black', 'pink' }

// console.log(m1.size); // 4
// console.log(m2.has('yellow'));  // false
// console.log(m2.delete('black'));  // true

// const s = new Set(['val1', 'val2', 'val3']);
// console.log(s.values === s[Symbol.iterator]); // true
// console.log(s.keys === s[Symbol.iterator]); // true
// for (let value of s.values()) {
//   console.log(value);
// } // 输出 val1 val2 val3
// for (let value of s[Symbol.iterator]()) {
//   console.log(value);
// } // 输出 val1 val2 val3

// const s = new Set([1, 2, 3, 4, 5, 2, 1]);
// console.log(s instanceof Set);  // true
// const a = [...s]
// console.log(a); // [ 1, 2, 3, 4, 5 ]
// console.log(a instanceof Array);  // true

// Set 并集
// const union = (setA, setB) => {
//   const unionAb = new Set()
//   setA.forEach(value => {
//     unionAb.add(value)
//   });
//   setB.forEach(value => {
//     unionAb.add(value)
//   });
//   return unionAb
// }

// const SetA = new Set([1, 2, 3, 4, 5])
// const SetB = new Set([3, 4, 5, 6, 7])
// let unionAb = union(SetA, SetB);
// console.log(unionAb); // Set(7) { 1, 2, 3, 4, 5, 6, 7 }

// // Set 交集
// const SetA = new Set([1, 2, 3, 4, 5])
// const SetB = new Set([3, 4, 5, 6, 7])

// const intersection = (setaA, setB) => {
//   const intersection = new Set()
//   setaA.forEach(value => {
//     if (setB.has(value)) {
//       intersection.add(value)
//     }
//   });
//   return intersection
// }
// let intersectionAb = intersection(SetA, SetB)
// console.log(intersectionAb); // Set(3) { 3, 4, 5 }

// // Set 差集
// const SetA = new Set([1, 2, 3, 4, 5])
// const SetB = new Set([3, 4, 5, 6, 7])

// const difference = (setA, setB) => {
//   const difference = new Set()
//   setA.forEach(value => {
//     if (!SetB.has(value)) {
//       difference.add(value)
//     }
//   })
//   setB.forEach(value => {
//     if (!SetA.has(value)) {
//       difference.add(value)
//     }
//   })
//   return difference
// }
// const differenceAb = difference(SetA, SetB)
// console.log(differenceAb); // Set(4) { 1, 2, 6, 7 }

// 第7章 迭代器和生成器
// 可迭代对象
// let arr = [1, 2, 3, 4, 5, 6]
// let str = 'hello'
// let map = new Map([
//   ['key1', 'val1'],
//   ['key2', 'val2'],
//   ['key3', 'val3']
// ])
// let obj = { name: 'fan' }

// for (let value of arr) {
//   console.log(value); // 依次输出 1 2 3 4 5 6
// }

// for (let value of str) {
//   console.log(value); // 依次输出 h e l l o
// }

// for (let value of map) {
//   console.log(value); // 依次输出 [ 'key1', 'val1' ] [ 'key2', 'val2' ] [ 'key3', 'val3' ]
// }

// for (let value of obj) {
//   console.log(value); // TypeError: obj is not iterable,对象不是可迭代对象
// }

// console.log(arr[Symbol.iterator]()); // Object [Array Iterator] {}
// console.log(str[Symbol.iterator]()); // Object [String Iterator] {}
// console.log(map[Symbol.iterator]()); // [Map Entries] { [ 'key1', 'val1' ], [ 'key2', 'val2' ], [ 'key3', 'val3' ] }
// console.log(obj[Symbol.iterator]()); // obj[Symbol.iterator] is not a function

// let arrIter = arr[Symbol.iterator]();
// console.log(arrIter.next()); // { value: 1, done: false }
// console.log(arrIter.next()); // { value: 2, done: false }
// console.log(arrIter.next()); // { value: 3, done: false }
// console.log(arrIter.next()); // { value: 4, done: false }
// console.log(arrIter.next()); // { value: 5, done: false }
// console.log(arrIter.next()); // { value: 6, done: false }
// console.log(arrIter.next()); // { value: undefined, done: true }

// let SimpleClass = {
//   data: [1, 2, 3, 4, 5],
//   name: [7, 8, 9],
//   [Symbol.iterator]() {
//     let index = 0;
//     return {
//       next: () => {
//         if (index < this.name.length) {
//           return { value: this.name[index++], done: false }
//         } else {
//           return { done: true } 
//         }
//       }
//     }
//   }
// }

// for (const val of SimpleClass) {
//   console.log(val) //'1' '2' '3' '4' '5'
// }

// let SimpleClass = {
//   data: [1, 2, 3],
//   [Symbol.iterator]() {
//     let index = 0;
//     return {
//       next: () => {
//         if (index < this.data.length) {
//           return { value: this.data[index++], done: false }
//         } else {
//           return { value: undefined, done: true }
//         }
//       }
//     }
//   }
// }
// let iter = SimpleClass[Symbol.iterator]()
// console.log(iter.next()); // { value: 1, done: false }
// console.log(iter.next()); // { value: 2, done: false }
// console.log(iter.next()); // { value: 3, done: false }
// console.log(iter.next()); // { value: undefined, done: true }
// for (let value of SimpleClass) {
//   console.log(value); // 依次输出 1 2 3 
// }



// // // yield 传参
// function* myYield2(x) {
//   let y = 2 * (yield(x + 1));
//   let z = yield(y + 3);
//   console.log(x, y);
//   return (x + y + z)
// }
// var num = myYield2(3)
// console.log(num.next()) //{value: 4, done: false}
// console.log(num.next(2)) //{value: 7, done: false}
// console.log(num.next(2)) //{value: 9, done: false}
// console.log(num.next(2)) //{value: undefined, done: true}

// console.log('-------------------');

// function* foo() {
//   const value1 = 10
//   console.log(value1)
//   const n = yield value1

//   const value2 = 20 + n
//   console.log(value2)
//   yield value2

//   const value3 = 30
//   console.log(value3)
//   yield value3

//   console.log('函数执行结束~')
// }
// const genertor = foo()

// console.log(genertor.next()) // 10 { value: 10, done: false }
// console.log(genertor.next()) // 120 { value: 10, done: false }
// console.log(genertor.next()) // 30 { value: 30, done: false }
// console.log(genertor.next()) // 函数执行结束~ { value: undefined, done: true }

// 生成器
// function add(x) {
//   return ++x;
// }

// function* genFunc(x) {
//   let y = yield add(x);
//   let z = yield add(y);
//   yield add(z)
// };

// let iter = genFunc(0);

// let result1 = iter.next().value;
// console.log(result1);
// let result2 = iter.next(result1).value
// console.log(result2);
// let result3 = iter.next(result2).value
// console.log(result3);
// iter.next()

// function XxxxAPI(x) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(++x)
//     }, 1000)
//   })
// }

// // 基于Promise写法
// XxxxAPI(0).then(result1 => {
//   console.log(`第1次请求结果为：${result1}`);
//   return XxxxAPI(result1)
// }).then(result2 => {
//   console.log(`第1次请求结果为：${result2}`);
//   return XxxxAPI(result2)
// }).then(result3 => {
//   console.log(`第1次请求结果为：${result3}`);
//   return XxxxAPI(result3)
// })

// // 生成器创建迭代器的写法
// function* genfunc(x) {
//   let result1 = yield XxxxAPI(x)
//   console.log(`第1次请求结果为：${result1}`);
//   let result2 = yield XxxxAPI(x)
//   console.log(`第1次请求结果为：${result2}`);
//   let result3 = yield XxxxAPI(x)
//   console.log(`第1次请求结果为：${result3}`);
// }
// let iter = genfunc(0);
// // iter.next().value 拿到Promise对象
// iter.next().value.then(result1 => {
//     return iter.next(result1).value
//   }).then(result2 => {
//     return iter.next(result2).value
//   }).then(result3 => {
//     return iter.next(result3).value
//   })

// // Symbol 特点
// let s1 = Symbol();
// let s2 = Symbol();
// console.log(typeof s1);  // symbol
// console.log(s1 === s2); // false
// let s3 = Symbol('red')
// let s4 = Symbol('red')
// console.log(s3 === s4);  // false

// // Symbol.for()
// let s1 = Symbol.for('foo')
// let s2 = Symbol.for('foo')
// let s3 = Symbol('foo')
// console.log(s1 === s2); // true
// console.log(s1 === s3); // false

// console.log(Symbol.keyFor(s1)); // foo
// console.log(Symbol.keyFor(s3)); // undefined
// console.log(Symbol.keyFor(123)); // TypeError: 123 is not a symbol

// // 符号属性
// let name = Symbol('name')
// let sex = Symbol('sex')
// let person = {
//   [name]: 'fantasy',
//   [sex]: '男',
//   like: 'play',
//   height: 178
// }
// console.log(person[name]); // fantasy
// console.log(person.sex); // undefined

// for (key in person) {
//   console.log(person[key]); // 依次输出 play 178
// }

// // Set 遍历
// let s1 = new Set([1, 2, 3, 4, 5]);
// s1.forEach((Element, index, array) => {
//   console.log(Element); // 依次输出 1 2 3 4 5
//   console.log(index); // 依次输出 1 2 3 4 5
//   console.log(array); // 依次输出 set对象
// })

// for (let value of s1) {
//   console.log(value);  // 依次输出 1 2 3 4 5
// }

// const union = (setA, setB) => {
//   return new Set([...setA, ...setB])
// }

// const SetA = new Set([1, 2, 3, 4, 5])
// const SetB = new Set([3, 4, 5, 6, 7])
// let unionAb = union(SetA, SetB);
// console.log(unionAb); // Set(7) { 1, 2, 3, 4, 5, 6, 7 }

// // Set 交集
// const SetA = new Set([1, 2, 3, 4, 5])
// const SetB = new Set([3, 4, 5, 6, 7])

// const intersection = (setA, setB) => {
//   return new Set(
//     [...setA].filter((item) => {
//       return setB.has(item)
//     })
//   )
// }
// let intersectionAb = intersection(SetA, SetB)
// console.log(intersectionAb); // Set(3) { 3, 4, 5 }

// // 差集 A-B
// const SetA = new Set([1, 2, 3, 4, 5])
// const SetB = new Set([3, 4, 5, 6, 7])

// const difference = (setA, setB) => {
//   return new Set(
//     [...setA].filter((item) => {
//       return !setB.has(item)
//     })
//   )
// }

// const differenceAb = difference(SetA, SetB)
// console.log(differenceAb)

// // weakSet 弱引用特性
// let obj = { name: 'fantasy' }
// let edu = obj;
// obj = null; // obj 被清空了，但是因为 edu 引用，所以edu 还是存在
// console.log(edu); // { name: 'fantasy' }

// let set = new WeakSet()
// set.add(edu)
// console.log(set);


// // async-await
// function XxxxAPI(x) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(++x)
//     }, 1000)
//   })
// }

// // 封装函数
// function asyncFunc(genFn, ...params) {
//   let iter = genFn(...params);
//   // 使用递归的思想
//   const next = x => {
//     let { value, done } = iter.next(x);
//     if (done) return;
//     value.then(next)
//   };
//   next()
// };

// asyncFunc(function* genfunc(x) {
//   let y = yield XxxxAPI(x)
//   console.log(`第1次请求结果为：${y}`);
//   let z = yield XxxxAPI(y)
//   console.log(`第1次请求结果为：${z}`);
//   let m = yield XxxxAPI(z)
//   console.log(`第1次请求结果为：${m}`);
// }, 0)

// 第8章 对象、类与面向对象编程


// 对象数据属性
// // configurable
// let person = { name: 'fantasy' };
// Object.defineProperty(person, 'name', {
//   configurable: false,
//   value: 'fantasy'
// });
// delete person.name
// console.log(person.name); // // fantasy

// Object.defineProperty(person, 'name', {
//   writable: false,
//   value: 'fantasy'
// });
// person.name = "Bob";
// console.log(person.name);  // fantasy

// 访问器属性
// let book = {
//   _year: 2017,
//   edition: 1
// }
// Object.defineProperty(book, 'year', {
//   get() {
//     return this._year
//   },
//   set(newValue) {
//     if (newValue > 2017) {
//       this._year = newValue;
//       this.edition += newValue - 2017;
//     }
//   }
// });
// book.year = 2018;
// console.log(book.edition); // 2

// let book = {};
// Object.defineProperties(book, {
//   year_: {
//     value: 2017
//   },

//   edition: {
//     value: 1
//   },

//   year: {
//     get() {
//       return this.year_
//     }
//   },

//   set(newValue) {
//     if (newValue > 2017) {
//       this.year_ = newValue;
//       this.edition += newValue - 2017
//     }
//   }
// });
// console.log(book); // {}
// console.log(book.year_); // 2017 
// console.log(book.year); // 2017
// book.year = 2018;
// console.log(book.edition);
// let description = Object.getOwnPropertyDescriptors(book)
// console.log(description);
// // 输出
// {
//   year_: {
//     value: 2017,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   },
//   edition: { value: 1, writable: false, enumerable: false, configurable: false },
//   year: {
//     get: [Function: get],
//     set: undefined,
//     enumerable: false,
//     configurable: false
//   },
//   set: {
//     value: undefined,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// }

// // 对象合并
// let a = { name: 'fantasy' };
// let b = { sex: '男' };
// console.log(Object.assign(a, b)); // { name: 'fantasy', sex: '男' }

// // Object.is()
// console.log(NaN === NaN); // false
// console.log(+0 === -0); // true
// console.log(+0 === 0); // true
// console.log(-0 === 0); // true

// console.log(Object.is(NaN, NaN)); // true
// console.log(Object.is(+0, -0)); // false
// console.log(Object.is(+0, 0)); // true
// console.log(Object.is(-0, 0)); // false

// // 属性值简写
// let name = 'fantasy';
// let person = { name };
// console.log(person); // { name: 'fantasy' }

// // 可计算属性
// const nameKey = 'name';
// const ageKey = 'age';
// const jobcKey = 'job';
// let person = {
//   [nameKey]: 'Bob',
//   [ageKey]: 18,
//   [jobcKey]: 'Software engineer'
// }
// console.log(person); // { name: 'Bob', age: 18, job: 'Software engineer' }

// // 可以对属性值做复杂运算
// let uniqueToken = 0;
// function getUniqueKey(key) {
//   return `${key}_${uniqueToken++}`
// }
// let otherPerson = {
//   [getUniqueKey(nameKey)]: 'fantasy',
//   [getUniqueKey(ageKey)]: 25,
//   [getUniqueKey(jobcKey)]: 'writter'
// }
// console.log(otherPerson); // { name_0: 'fantasy', age_1: 25, job_2: 'writter' }

// // 简写方法名
// let person = {
//   sayName(name) {
//     console.log(`My name is ${name}`);
//   }
// };
// person.sayName('Bob') // My name is Bob

// // 兼容计算属性
// const methodKey = 'sayName'
// let otherPerson = {
//   [methodKey](name) {
//     console.log(`My name is ${name}`);
//   }
// };
// otherPerson.sayName('fantasy') // My name is fantasy

// let person = {
//   name: 'fantasy',
//   age: 27,
//   job: {
//     title: 'engineer'
//   }
// }

// // 简单解构
// let { name: userName, age: userAge, job: userJob } = person;
// console.log(userName, userAge, userJob); // fantasy 27 { title: 'engineer' }

// // 简写解构
// let { name, age, job } = person;
// console.log(name, age, job); // fantasy 27 { title: 'engineer' }

// // 嵌套解构和部分解构
// let { job: { title } } = person;
// console.log(title); // engineer

// // 函数传参解构
// function printPerson(foo, { name, age }, bar) {
//   console.log(arguments);
//   console.log(name, age);
// }
// printPerson('1st', person, '2nd') // [Arguments] { '0': '1st', '1': { name: 'fantasy', age: 27, job: { title: 'engineer' } }, '2': '2nd' }  fantasy 27

// // 工厂模式
// function createPerson(name, age, job) {
//   return o = {
//     name,
//     age,
//     job,
//     sayName() {
//       console.log(this.name);
//     }
//   }
// };
// let person1 = createPerson('Bob', 27, 'engineer')
// let person2 = createPerson('Nick', 28, 'doctor')
// console.log(person1); // { name: 'Bob', age: 27, job: 'engineer', sayName: [Function: sayName] }
// console.log(person2); // { name: 'Nick', age: 28, job: 'doctor', sayName: [Function: sayName] }

// // 构造函数
// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function() {
//     console.log(this.name);
//   }
// }
// let person1 = new Person('Bob', 27, 'engineer');
// let person2 = new Person('Nick', 28, 'doctor');
// console.log(person1); // Person { name: 'Bob', age: 27, job: 'engineer', sayName: [Function (anonymous)] }
// console.log(person1.sayName()); // Bob
// console.log(person2); // Person { name: 'Nick', age: 28, job: 'doctor', sayName: [Function (anonymous)] }
// console.log(person2.sayName()); // Nick

// // person1和2分别保存者Person的实例，使用constructor对象类型标识属性检测到它们都指向Person
// console.log(person1.constructor == Person); // true
// console.log(person2.constructor == Person); // true

// // person1和2是Object的实例，同时也是Person的实例
// console.log(person1 instanceof Object); // true
// console.log(person1 instanceof Person); // true
// console.log(person2 instanceof Object); // true
// console.log(person2 instanceof Person); // true

// console.log(person1.sayName == person2.sayName); // false

// function Person1(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = sayName
// }

// function sayName() {
//   console.log(this.name);
// };
// let person3 = new Person1('Bob', 27, 'engineer');
// let person4 = new Person1('Nick', 28, 'doctor');

// person3.sayName(); // Bob
// person4.sayName(); // Nick
// console.log(person3.sayName == person4.sayName); // true

// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function() {
//     console.log(this.name);
//   }
// }
// let Bob = new Person('Bob', 27, 'engineer')
//   // 实例成员 name age sayName
// console.log(Bob.name); // Bob
// console.log(Person.name); // Person
// // 静态成员
// Person.sex = "男";
// console.log(Bob.sex); // undefined
// console.log(Person.sex); // 男


// // 原型对象
// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// }

// // Person.prototype.sayName = function() {
// //   console.log(`My name is ${this.name}`);
// // }

// // Person.prototype = {
// //   sayName() {
// //     console.log(`My name is ${this.name}`);
// //   },
// //   sayJob() {
// //     console.log(`My job is ${this.job}`);
// //   }
// // }

// let Bob = new Person('Bob', 27, 'engineer');
// let Nick = new Person('Nick', 18, 'doctor')

// // // 构造函数和类中没有 constructor 属性
// // console.log(Person.prototype);
// // console.log(Bob.__proto__);

// // // constructor 也不指回构造函数了
// // console.log(Person.prototype.constructor); // [Function: Object]
// // console.log(Bob.__proto__.constructor); // [Function: Object]

// Person.prototype = {
//   constructor: Person,
//   sayName() {
//     console.log(`My name is ${this.name}`);
//   },
//   sayJob() {
//     console.log(`My job is ${this.job}`);
//   }
// }

// // constructor 也不指回构造函数了
// console.log(Person.prototype.constructor); // [Function: Person]
// console.log(Bob.__proto__.constructor); // [Function: Person]

// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// }

// // 原型对象中的 __proto__ 指向
// console.log(Person.prototype.__proto__ === Object.prototype); // true

// // Object对象中的 __proto__ 指向
// console.log(Object.prototype.__proto__); // null

// Person.prototype = {
//   constructor: Person,
//   sayName() {
//     console.log(`My name is ${this.name}`);
//   },
//   sayJob() {
//     console.log(`My job is ${this.job}`);
//   }
// }

// let Bob = new Person('Bob', 27, 'engineer');
// let Nick = new Person('Nick', 18, 'doctor')

// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function() {
//     console.log(this.name);
//   }
// }
// let Bob = new Person('Bob', 27, 'engineer')

// // 实例成员 name age sayName
// console.log(Bob.name); // Bob
// console.log(Person.name); // Person
// // 静态成员
// Person.sex = "男";
// console.log(Bob.sex); // undefined
// console.log(Person.sex); // 男
// // hasOwnProperty()
// console.log(Bob.hasOwnProperty('name')); // true
// console.log(Bob.hasOwnProperty('sex')); // false

// // 原型链成员查找规则
// function Person() {};
// let person = new Person();

// // 无属性时
// console.log(person.name); // undefined

// // Object 原型对象有属性
// Object.prototype.name = 'Bob';
// console.log(person.name); // Bob

// // 构造函数 原型对象有属性
// Person.prototype.name = 'Nick';
// console.log(person.name); // Nick

// // 对象自身有属性
// person.name = 'fantasy';
// console.log(person.name); // fantasy

// 解决为什么对象自身没有方法，但可以调用疑惑？
// let person = {}; // 本身没有 toString() 属性
// console.log(person.toString()); // [object Object]

// // 原型对象 this 指向问题
// function Person() {}
// var that;
// Person.prototype.sing = function() {
//   that = this
//   console.log('I can sing!');
// }
// let person = new Person()
// person.sing() // I can sing!
// console.log(that === person); // true

// // 为 Array 原型对象添加求和方法
// Array.prototype.sum = function() {
//   return this.reduce((prev, current) => {
//     return prev + current;
//   }, 0)
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.sum());

// // call
// function fn() {
//   console.log(this);
// }

// // 不传参调用
// fn() // windows 对象
// fn.call() // windows 对象

// // 传参改变 this 指向
// let person = { name: 'Nick' };
// fn.call(person) // { name: 'Nick' }

// 构造函数继承
function Father(name, age) {
  this.name = name;
  this.age = age;
}
Father.prototype.sayName = function() {
  console.log(`My name is ${this.name}`);
}

function Son(name, age, score) {
  Father.call(this, name, age);
  this.score = score;
}

// 直接利用原型对象赋值，会让父构造函数也拥有子构造函数的方法
Son.prototype = Father.prototype

Son.prototype.sayAge = function() {
  console.log(`My age is ${this.age}`);
}

let father = new Father('Nick', 40)
let son = new Son('Bob', 17, 100)
son.sayName() // My name is Bob
son.sayAge() //My age is 17
father.sayAge() // My age is 40