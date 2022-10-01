# HTTP 权威指南学习笔记

[TOC]

## 第一部分 HTTP：Web 的基础

### 第1章 HTTP 概述

#### 1.1 HTTP ——— 因特网的多媒体信使

略

#### 1.2 Web 客户端和服务器

1. Web 客户端：我们使用的获取服务器的客户端，比如各种浏览器；
2. HTTP 服务器：存储数据，向客户端发送请求数据的服务器；

#### 1.3 资源

> Web 资源：Web 服务器是Web资源的宿主，可以是静态资源（html、文本文件），也可以是根据用户权限请求生成的动态资源；
1. 媒体类型：HTTP仔细地给每种通过Web传输的对象都打上了名为MINE类型（MINE type）的数据格式标签，浏览器从服务器取回一个对象时，回去查看相关的MINE类型并决定如何处理它。常见的数据格式标签如下：
   a. `text/html`：HTML格式的文本文档；
   b. `text/plain`：普通的ASCII文本文档；
   c. `image/jpeg`：JPEG格式的图片；
   d. `image/gif`：IMAGE格式的图片；
   e. `video/quicktime`：Apple的QucikTime电影；
2. URI：每个Web服务资源都有一个名字，这样客户端就知道它们访问的资源是什么。服务器资源名被称为统一资源表示符（Uniform Resource Identifier），有以下两种形式：
   a. URL：统一资源定位符，描述了一台特定服务器上某资源的特定位置，由方案（http协议）、服务器因特网地址（www.baidu.com）、服务器上的某个资源（/appple.jpg）；
   b. URN：统一资源名。

#### 1.4 事务

> 一个HTTP事务由一条（从客户端发往服务器的）请求命令和一个（从服务器返回客户端的）相应结果组成，这种通信时通过名为`HTTP报文`的格式化数据块进行的：
1. 方法：请求命令，告诉服务器执行什么命令:
   a. GET；请求服务器的某个资源；
   b. HEAD：与GET类似，但响应中只返回首部，不返回实体的主体部分，通常通过查看首部`Content-Type`确定资源类型，或`Content-Length`查看对象是否存在或被修改；
   c. PUT：会向服务器写入文档，PUT方法的语义就是让服务器用请求的主体部分来创建一个由所请求的URL命名的新文档，或者那个URL已存在，就用这个主体来替代它；
   d. POST：起初用来向服务器输入数据，现在通常用它将Web客户端填好的表单传送给服务器；
   e. TRACE：允许客户端查看原始内容经过防火墙、代理、网关或其它应用程序后，最终请求到服务器时发生了哪些修改；
   f. DELETE：允许用户删除；
2. 状态码：每条HTTP报文返回时都会携带一个三位数状态码，告知客户端是否请求成功：
   a. 200代表OK，文档正确返回；
   b. 302代表Redirect（重定向）到其它地方获取资源；
   c. 404代表Not Found，无法找到这个资源；

#### 1.5 报文

> 从Web客户端发往Web服务器的HTTP报文称为请求报文（request message），从服务器发往客户端的报文称为相应报文（response message），HTTP报文包括以下三个部分：

1. 起始行：首行，请求报文中说明要做些什么，响应报文说明出现了什么情况；
2. 首部字段：起始行后面跟0或多个首部字段，每个字段以键值对形式存在，并以空行代表结束；
3. 主体：空行之后就是主体，包含了所有类型的数据。

#### 1.6 连接

> 报文如何通过传输控制协议（Transmission Control Protocol，TCP）连接从一个地方搬到另一个地方。

1. TCP/IP：HTTP的底层协议，它提供了：
   a. 无差错的数据传输；
   b. 按序传输（数据总是按照发送数据传输）；
   c. 未分段的数据流（可以在任意时刻以任意尺寸将数据发送出去）
2. 连接、IP地址及端口号：通过IP地址及端口号来连接Web服务器，其中IP地址可以是纯数字形式，也可以是通过DNS（Domain Name Service）域名服务将域名解析成的IP地址，端口号没有时默认是80；
3. Telnet：在电脑控制面板开启Telnet功能后，可以使用cmd控制台访问网址；

#### 1.7 Web的结构组件

1. 代理：代理位于客户端和服务器之间，可对传输信息进行过滤，比如病毒检测，未成年人内容过滤；
2. 缓存：Web缓存（Web cache）或代理缓存（proxy cache）是一种特殊的HTTP代理服务器，可以将代理传送的常用文档复制保存下来；
3. 网关：网关（gateway）是一种特殊的服务器，作为其它服务器的中间实体使用；
4. 隧道：隧道（tunnel）是建立起来之后，就会在两条连接之间对原始数据进行盲转发的应用程序；
5. Agent代理：代表用户发起HTTP请求的客户端程序，如Web浏览器。

### 第2章 URL和资源

略

### 第3章 HTTP报文

#### 3.1 报文流

1. 报文流入源服务器：HTTP使用术语流入（inbound）和流出（outbound）来描述事务处理的方向，报文流入源端服务器，工作完成后，会流入用户的Agent代理中。
2. 报文向下游流动：不管是请求还是响应报文，都向下游流动。
3. HTTP报文主要由起始行、首部、实体的主体部分组成：
   a. 起始行：请求报文包括请求的方法、URL、版本，响应报文包括版本和状态码等。
      ``` js
         <!-- 请求报文起始行 -->
         POST /tech/arguments/getPublicPreview HTTP/1.1

         <!-- 响应报文起始行 -->
         HTTP/1.1 200 OK
      ```

   b. 首部：包括请求的日期、主体字节长度、实体主体部分类型、客户端可接受的文件类型等；
      ``` js
      <!-- 请求报文首部 -->
      Host: 192.168.1.124:3008
      Connection: keep-alive
      Content-Length: 104
      Accept: */*
      X-Requested-With: XMLHttpRequest
      Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.    eyJpZCI6MSwidXNlcm5hbWUiOiJmYW5kb25neGlhbmciLCJwYXNzd29yZCI6IiIsIm   5pY2tuYW1lIjoi5qiK5Lic56WlIiwiZW1haWwiOm51bGwsInVzZXJfcGljIjoiIiwi  c3RhdHVzIjowLCJpYXQiOjE2NjQ1OTc1NDksImV4cCI6MTY2NDYzMzU0OX0.    1o3V6tQTi0mvpX6FusR91i--ChWywhALderUddJCMJY
      User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.    36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36
      Content-Type: application/x-www-form-urlencoded; charset=UTF-8
      Origin: http://192.168.1.124:3008
      Referer: http://192.168.1.124:3008/home/tech/tech_arguments.html
      Accept-Encoding: gzip, deflate
      Accept-Language: zh-CN,zh;q=0.9

      <!-- 响应报文首部 -->
      X-Powered-By: Express
      Access-Control-Allow-Origin: *
      Content-Type: application/json; charset=utf-8
      Content-Length: 3537
      ETag: W/"dd1-PeBQg44f7W7ukzmFwqiRfUGEQ2Y"
      Date: Sat, 01 Oct 2022 04:14:55 GMT
      Connection: keep-alive
      Keep-Alive: timeout=5
      ```
   c. 实体的主体部分

   ### 第4章 连接管理

   








##### 