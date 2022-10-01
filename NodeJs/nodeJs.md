# NodeJs学习笔记

[toc]

## 1.URL和服务器真实文件路径关系

> nodejs后端要做的就是用户输入相应URL时候，要对应**客户端URL地址**和**服务器真实硬盘文件路径**，确保返回正确的文件。

### 1.1 nodejs实现原理
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

> **注意**：所有`<script src=""></script>`中的引入文件都必须通过`ajax`请求发送，所以如果这些文件不在静态托管文件夹内，就无法通过以上3步发送到客户端，所以会包`404 NOT FOUND`。