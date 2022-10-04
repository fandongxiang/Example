# NodeJs学习笔记

[toc]

<!-- ## 1.URL和服务器真实文件路径关系

> nodejs后端要做的就是用户输入相应URL时候，要对应**客户端URL地址**和**服务器真实硬盘文件路径**，确保返回正确的文件。 -->

<!-- ### 1.1 nodejs实现原理
1. 获取用户的请求路径
   
   ``` js
    let pathname = url.parse(req.url).pathname
   ```

2. 将用户的请求路径转换为实际的服务器硬盘路径:这里的`app.js`文件与`pulic`文件夹同级，静态资源都存放在`public`中；
   
   ``` js
    let realPath = path.join(__dirname,'public' + pathname)
   ```

> 这里核心是：nodejs以`app.js`文件硬盘路径，作为请求文件真实硬盘路径的拼接基础。

3. 通过fs模块读取硬盘文件，返回给客户端；

    ``` js
      fs.readFile(realPath,(err,result) => {
        if (err != null) {
          return res.end('文件读取失败！')
        }
        res.end(result)
      })
    ```

4. express模块实现静态资源访问原理：将`static()`中传入的相对`app.js`静态资源文件夹路径提取出来，与`app.js`真实硬盘路径拼接成真实硬盘路径，然后通过`fs`模块读取真实硬盘路径获得文件后发送给客户端。

> **注意**：所有`<script src=""></script>`中的引入文件都必须通过`ajax`请求发送，所以如果这些文件不在静态托管文件夹内，就无法通过以上3步发送到客户端，所以会包`404 NOT FOUND`。 -->

## 第1章 Node简介

### 1.1 Node命名由来

> 通过对比C、C++、Lua等，为了选择一门符合事件驱动、非阻塞I/O高性能Web服务器特点，最终选择了Javascript。后续Node发展为一个强制不共享热河资源的单线程、单进程系统，包含十分适宜网络的库，为构建大型分布式应用程序提供基础设施，其目标也是成为一个构建快速、可伸缩的网络应用平添。它自身非常简单，通过通信协议来组织许多Node，非常容易通过扩展来达成构建大型网络应用的目的。每一个Node进程都构成这个网络应用的的一个节点，这是它名字所含的意义真谛。

### 1.2 Node和JavaScript

> 除了HTML、Webkit和显卡这些UI相关技术没有支持外，Node结构与Chrome十分相似。它们都是基于事件驱动的异步结构，浏览器通过事件驱动来服务界面上的交互，Node通过事件驱动来服务I/O。Node打破了JavaScript只能在浏览器运行的局面，前后端编程环境统一，降低前后端间的门槛。

### 1.3 Node的特点

#### 1.3.1 异步I/O

1. 前端Ajax请求就是典型异步I/O执行，“发送Ajax结束”不用等着“收到相应”结束之后再执行，而是再执行完成之后回调。
   ``` js
    $.post('/url', {title: 'ศ入റ出Node.js'}, function (data) { 
    console.log('收到响应'); 
    }); 
    console.log('发送Ajax结束'); 
   ```

2. Node中绝大多数操作都是异步的，在文件读取中，两个文件的耗时决定于最慢的那个文件读取的耗时，而在同步I/O中耗时为两个文件读取事件之和。

   ``` js
      fs.readFile('/path1', function (err, file) { 
       console.log('读取文件1完成'); 
      }); 
      fs.readFile('/path2', function (err, file) { 
       console.log('读取文件2完成'); 
      }); 
   ```

#### 1.3.2 事件与回调函数

> Node和JavaScript中大量事件使用了回调函数的形式，造成代码编写顺序与执行顺序并无关系，这就对流程控制和事件协作提出要求，比如渲染Dom元素获取必须在Ajax请求success之后。

#### 1.3.3 单线程

1. 单线程的弱点主要有以下3个方面：
   （a）无法利用多核CPU；
   （b）错误会引起整个应用退出，应用的健壮性值得考验；
   （c）大量计算占用JavaScript与UI共用一个线程一样，JavaScript长时间执行会导致UI的渲染和响应被终端。
2. HTML5中创建了Web Workers来创建工作线程来进行计算，解决JavaScript大计算阻塞UI渲染的问题，Node采用child_process子进程解决同样的问题。

#### 1.3.4 跨平台

> 兼容Windows和LInux平台主要得益于Node在架构层面的改动，它在操作系统与Node上层模块系统之间构建了一层平台层架构，即libuv，使得libuv成为实现跨平台的基础组件。

### 1.4 Node的应用场景

#### 1.4.1 I/O密集型

> Node面向网络且擅长并行I/O，能够有效地阻止起更多的硬件资源，从而提供更好的服务。
> I/O密集的优势主要在于Node利用事件循环的能力，而不是启动每一个线程为每一个请求服务，资源占用极少。

#### 1.4.2 是否擅长CPU密集型业务

> Node一定程度能够胜任CPU密集型业务，得益于V8引擎。Node虽然没有提供多线程用于计算，但以下两方面可充分利用CPU：

1. Node可以通过编写C/C++扩展的方式更高效的利用CPU，将一些V8不能做到的性能极致的地方通过C/C++来实现。
2. 如果单线程，C/C++扩展还不能满足，可以用通过子进程的方式，将一部分Node进程当作常驻服务进行用于计算，然后利用进程间的消息来传递结果，将计算与I/O分离，这样还能充分利用多CPU。

## 第2章 模块机制

> 模块化可以防止变量泄露和文件引用混乱。

### 2.1 CommonJs规范

#### 2.1.1 CommmonJs出发点

> JavaScript相比其它语言规范薄弱，主要有以下几点
> 1. 没有模块系统；
> 2. 标准库较少。ECMAScript仅定义了部分核心库，对文件系统、I/O流等API定义较少。
> 3. 没有标准接口。JavaScript没有定义过如Web服务器或数据库之类的标准统一接口。
> 4. 缺乏包管理系统。JavaScript应用中基本没有自动加载和安装依赖功能。

#### 2.1.2 CommmonJs模块化规范

1. 模块引用：使用`require()`引入，并且应用后自动转换为真实硬盘路径，不随文件运行目录发生改变；

  ``` js
    var math = require('math')
  ```

2. 模块定义：一个js文件就是一个模块，并且只能通过`exports`或`module.exports`导出，其中`exports`和`module.exports`导出时的区别：
   （a）`exports.xxx`和`module.exports.xxx`指向同一个对象，相当于给该对象添加属性；
   （b）`module.exports = {}`会重新新建一个对象，并且会覆盖之前通过属性添加的值，最终结果以该对象为准；
   （c）只有`module.exports = {}`可以导出对象，`exports = {}`不能导出对象。

   ``` js
    <!-- module.js -->
    let name = 'fantasy'
    let number = 13
    // module.exports 和 exports
    exports.name = name
    module.exports.number = number
    // module.exports = {}
    module.exports = {
      sex: '男'
    }

    <!-- require.js -->
    // 导入模块
    let result = require('./module')
    // module.exports 和 exports
    console.log(result); // { name: 'fantasy', number: 13 }
    // module.exports = {}
    console.log(result); // { sex: '男' }
   ```

### 2.2 Node的模块实现

#### 2.2.1 路径分析

1. 核心模块在Node进程启动时，就被加载进内存，被引入时文件分析和编译执行步骤被省略，并且路径分析中优先判断，所以它的加载速度是最快的；
2. 文件模块则是在运行时动态加载，需要进行完整的路径分析、文件定位和编译执行，速度慢于核心模块；
3. 在分析路径模块时，`require()`方法会将路径转为真实路径，并以真实路径作为索引，将编译执行后的结果存放到缓存中，以使二次加载时更快;
4. 自定义或第三方模块没有路径标识，会从当前目录往根目录查找，所以是最费时的。
   ```js 
    <!-- module.js -->
    console.log(module.paths)

    <!-- 运行结果 -->
    PS D:\tech\study\NodeJs> node module.js
    [
      'D:\\tech\\study\\NodeJs\\node_modules',
      'D:\\tech\\study\\node_modules',
      'D:\\tech\\node_modules',
      'D:\\node_modules'
    ]
   ```

#### 2.2.2 文件定位

1. 分析文件的扩展名：按照js、json、node的次序补足扩展名，一次尝试，调用fs模块同步阻塞式判断文件是否存在，影响效率，可以添加后缀名；
2. 按照文件扩展名未找到对应文件，得到一个目录时会按照包来处理，查找当前目录下的`package.json`（CommonJs包规范定义的包描述文件），通过`JSON.parse()`解析出包描述对象，从中取出`main`属性指定的文件名进行定位，如果缺少扩展名，将会进入扩展名分析。

#### 2.2.3 模块编译

> 编译和执行是引入文件模块的最后一个阶段。定位到具体的文件后，Node会创建一个模块对象，然后根据路径载入并编译。对于不同的文件扩展名，其载入方法有所不同，具体如下：
> 1. .js文件。通过fs模块同步读取文件后编译执行。
> 2. .node文件。这是用C/C++编写的扩展文件，通过dlopen()方法加载最后编译生成的文件。
> 3. .json文件。通过fs模块同步读取文件后，用JSON.parse()解析返回结果。
> 4. 其余扩展名文件。它们被当做.js文件载入。

> 每一个编译成功后的模块会将其文件路径中作为索引缓存在Module._cache对象上，以提高二次引入的性能。

##### 1. JavaScript模块的编译

在Com模拟JS模块规范中，模块存在`require`、`exports`、`module`这3个变量，但在模块文件中未定义，是因为编译过程中Node对Javascript文件内容进行了头尾包装，这样每个模块都进行了作用域隔离，包装之后的代码会通过vm原生模块的`runInThisContext()`方法执行，返回一个具体的`function`对象，最后将当前对象的`exports`属性，`require()`方法，`module`（模块对象自身），以及在文件定位中得到的完整文件路径和文件目录作为参数传递给这个`function()`执行，如下：

   ``` js
   function (exports, require,  odule, __filename, __dirname) { 
   var math = require('math'); 
   exports.area = function (radius)   { 
   return Math.PI * radius * radius; 
   };
   ```
> 执行之后，模块的`exports`属性被返回给了调用方。`exports`属性上的任何方法和属性都可以被外部调用，但是模块中的其余变量和属性则不可直接被调用。

##### 2. C/C++ 模块的编译

Node调用`process.dlopen()`方法进行加载和执行，实际上`.node`的模块文件并不需要编译，因为它是编写C/C++模块之后编译生成的，所以这里只有加载和执行的过程。C/C++模块给Node使用者优势在于执行效率，但编写门槛比Javascript高。

##### 3. JSON文件的编译

Node利用`fs`模块同步读取`JSON`文件的内容之后，调用`JSON.parse()`方法得到对象，然后将它赋给模块对象`exports`，供外部调用。

### 2.3 核心模块

> 核心模块分为C/C++编写的和Javascript编写的两部分，自重C/C++文件存放在Node项目的src目录下，Javascript文件存放在lib目录下。

#### 2.3.1 Javascript核心模块的编译过程

> 在编译所有C/C++文件之前，编译程序需要将所有的Javascript模块文件编译未C/C++代码，但编译为可执行代码，还需以下两步：

1. 转存为C/C++代码：Node采用了V8附带的js2c.py工具，将所有内置的JavaScript代码（src/node.js和lib/*.js）转换为C++里的数组，生成node_natives.h头文件。
2. 编译JavaScript核心模块：JavaScript核心模块的定义如下面的代码所示，源文件通过`process.binding('natives')`取出，编译成功的模块缓存到NativeModule._cache对象上，文件模块则缓存到Module._cache对象上：
   ``` js
      function NativeModule(id) { 
       this.filename = id + '.js'; 
       this.id = id; 
       this.exports = {}; 
       this.loaded = false; 
      } 
      NativeModule._source = process.binding('natives'); 
      NativeModule._cache = {}; 
   ```

#### 2.3.2 C/C++核心模块的编译过程

> Node部分核心模块有Javascript编写，部分有C/C++编写，通常，脚本语言的开发速度优于静态语言，但是性能弱于静态语言，而Node这种符合模式可以在开发速度和性能之间找到平衡点。由纯C/C++模块编写的称为内建模块，比如：buffer、crypto、fs、os等。

Node中文件模块、核心模块、内建模块有如下依赖关系，所以内建模块不直接导出，而是导出核心模块。

<img src="/NodeJs/image/07-Node内建模块的导出.png">

#### 2.3.3 核心模块的引入流程

<img src="/NodeJs/image/07-Node内建模块的引入流程.png">

#### 2.3.4 编写核心模块

略，详见《深入浅出Node.js》，待学习C语言及编译原理后。

#### 2.3.4 C/C++扩展模块

略，详见《深入浅出Node.js》，待学习C语言及编译原理后。

### 2.4 模块调用栈

> JavaScript核心模块主要扮演的职责有两类：一类作为C/C++内建模块的封装层和桥接层，供文件模块调用；一类是纯粹的功能模块，它不需要跟底层打交道，但又十分重要。

<img src="/NodeJs/image/07-Node模块之间的调用关系.png">

### 2.5 包与NPM

#### 2.5.1 包结构

完全符合CommonJs规范的包目录应该包括以下文件；
1. package.json：包描述文件。
2. bin：用于存放可执行二进制文件的目录。
3. lib：用于存放JavaScript代码的目录。
4. doc：用于存放文档的目录。
5. test：用于存放单元测试用例的代码。

#### 2.5.2 包描述与NPM

   ``` js
      { 
       "name": "express",    // 包名
       "description": "Sinatra inspired web development framework",  // 包简介
       "version": "3.3.4",  // 版本号
       "author": "TJ Holowaychuk <tj@vision-media.ca>",  // 作者
       "contributors": [   // 贡献者列表
       { 
       "name": "TJ Holowaychuk", 
       "email": "tj@vision-media.ca" 
       }, 
       { 
       "name": "Aaron Heckmann", 
       "email": "aaron.heckmann+github@gmail.com" 
       }, 
       { 
       "name": "Ciaran Jessup", 
       "email": "ciaranj@gmail.com" 
       }, 
       { 
       "name": "Guillermo Rauch", 
       "email": "rauchg@gmail.com" 
       } 
       ], 
       "dependencies": {      // 重要：当前包依赖的其它包，自动导入
       "connect": "2.8.4", 
       "commander": "1.2.0", 
       "range-parser": "0.0.4", 
       "mkdirp": "0.3.5", 
       "cookie": "0.1.0", 
       "buffer-crc32": "0.2.1", 
       "fresh": "0.1.0", 
       "methods": "0.0.1", 
       "send": "0.1.3", 
       "cookie-signature": "1.0.1", 
       "debug": "*" 
       }, 
       "devDependencies": {   // 只在开发时需要依赖的包
       "ejs": "*", 
       "mocha": "*", 
       "jade": "0.30.0", 
       "hjs": "*", 
       "stylus": "*", 
       "should": "*", 
       "connect-redis": "*", 
       "marked": "*", 
       "supertest": "0.6.0" 
       }, 
       "keywords": [   // 关键词数组
       "express", 
       "framework", 
       "sinatra", 
       "web", 
       "rest", 
       "restful", 
       "router", 
       "app", 
       "api" 
       ], 
       "repository": "git://github.com/visionmedia/express",   // 托管代码位置列表
       "main": "index",   // 模块require()引入包时，有限检查这个字段，将其作为包中其余模块的入口
       "bin": {           // 包可以作为命令行工具执行
       "express": "./bin/express" 
       }, 
       "scripts": {    // 脚本说明文件
       "prepublish": "npm prune", 
       "test": "make test" 
       }, 
       "engines": {   // 支持的JavaScript引擎
       "node": "*" 
       } 
      }
   ```

## 第3章 异步I/O

### 3.1 为什么要异步I/O

#### 3.1.1 用户体验

> 异步的概念起源于Web2.0，因为浏览器JavaScript在单线程执行，而且它与UI渲染共用一个线程。这意味着JavaScript执行时后UI渲染和响应处于停滞状态，而采用异步请求，在下载资源期间，JavaScript和UI的执行都不处于等待状态，可以继续响应用户的交互请求，给用户一个鲜活的页面。
> 同样，前端获取资源的速度取决于后端响应，而采用异步请求，两个资源的事件的耗时为耗时最大的事件，而同步则是两个事件耗时和。

#### 3.1.2 资源分配

> 单线程同步编程模型会因为阻塞I/O导致硬件资源得不到更优的使用，多线程编程模型也因为编程中的死锁、状态同步等问题让开发人员头疼。
> Node在两者之间给出了它的方案：利用单线程，原理多线程死锁、状态同步等问题；利用异步I/O，让单线程原理阻塞，以更好的使用CPU。

<img src="/NodeJs/image/08-Node异步IO调用示意图.png">

### 3.2 异步I/O的实现现状

> 非阻塞I/O也存在一些问题，由于完整的I/O并没有完成，立即返回的并不是业务层期望的数据，而仅仅时当前调用的状态。为了获取完整的数据，应用程序需要重复调用I/O操作来确认是否完成。这种重复调用判断操作是否完成的技术叫“轮询”。常见的轮询技术有`read`、`select`、`poll`、`epoll`等。
> libuv是一个跨平台（window,linux,macOS）、高性能，事件驱动的异步I/O库。它本身是由C语言编写的，封装了不同平台底层对于高性能IO模型的实现（epoll【Linux】,kqueue【macOS、BSD等】，IOCP【windows】，event ports【SUNOS系列】），具有很高的可移植性。

### 3.3 Node的异步I/O

#### 3.3.1 事件循环

> 在进程启动时，Node会创建一个类似于while(true)的玄幻，每执行一次循环的过程称为Tick，每个Tick过程查看是否有事件待处理，如果有，就取出事件及其相关的回调函数。如果存在关联的回调函数，就执行它们，然后进入下个循环。

<img src="/NodeJs/image/09-Node异步IO事件循环Tick流程图.png">

#### 3.3.2 观察者

> 事件循环时一个典型的生产者/消费者模型。异步I/O、网络请求等则是事件的生产者，源源不断为Node提供不同类型的事件，这些事件被传递到对应的观察者哪里，事件循环则从观察者那里取出事件并处理。

#### 3.3.3 请求对象










