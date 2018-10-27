## html（HyperText Markup Language）标记语言
1. html元素的构成（其中空元素只有一个标签，如img）
    ```
   <p>Hello World</p>   
   
    1. 开始标签 <p>
    2. 结束标签 </p>
    3. 内容 p
    ```
2. html元素类别 
    ```
    1. 块级元素：独占一行
    2. 内联元素：出现在块级元素中，不会导致文本换行
    ```
3. html元素的基础属性 （  
    ```
    <p id="d1" class="p1" title="Hello" style="color:red;">Hello</p>
    
    1. id
    2. class
    3. title
    4. style
    ```
4. html文档结构
    ```
    <!DOCTYPE html>  --声明文档类型
    <html lang="zh-CN">  --根元素  lang属性设置语言
      <head>  --不在HTML页面显示，包含关键词、页面描述、css样式、声明字符集
        <meta charset="utf-8">  --指定字符编码
        <meta name="twitter:title" content="Mozilla Developer Network"> 
        <title>My test page</title>  --设置页面标题
      </head>
      <body>  --显示页面内容
        <p>This is my page</p>
      </body>
    </html>
    ```
5. html特殊字符  
    | 原义字符 | 等价字符引用 | 
    | :------: | :----------: |
    |    <     |    `&lt;`    |
    |    >     |    `&gt;`    |
    |    "     |    `&quot;`  |
    |    '     |    `&apos;`  |
    |    &     |    `&amp;`   |
    |   空格   |    `&nbsp;`  | 

6. html注释  
   `<!-- <p>Hello World</p> -->`    

7. css与javascript的引用
    ```
    <link rel="stylesheet" href="my-css-file.css">
    <script src="my-js-file.js"></script>
    ``` 
    
8. html中的强调语气的元素（可被屏幕阅读器读取 em、strong）
    ```
    <p>I am <em>glad</em> you weren't <em>late</em>.</p>
    <p>This liquid is <strong>highly toxic</strong>.</p>
    <p>I am counting on you. <strong>Do not</strong> be late!</p>
    ```
9. html中的表象元素  
    ```
    1. <i> 斜体 
    2. <b> 粗字体   
    3. <u> 下划线   
    ```
10. html中的链接
    ```
    1. 块级链接
    <a href="https://www.mozilla.org/en-US/" title="mozilla logo">
        <img src="mozilla-image.png" alt="mozilla logo that links to the mozilla homepage">
    </a>
    2. 统一资源定位器url (Uniform Resource Locator)
        指定文件在网络上的位置
    3.  路径path
        目录结构:
        -project
            -css
              +index.css
              +bootstrap.css
            -img
              +dog.png
            -index.html
            -store.html
            
        (1)指向同级目录 - index.html
            <a href="store.html">contacts page</a>
        (2)指向子目录 - css
            <link href="css/index.css" rel="stylesheet" type="text/css"> 
        (3)指向上级目录 - index.css
            background: url('../img/dog.png');
    4.  锚点
        <h2 id="floor">Mailing address</h2>
        <p>跳到floor位置<a href="#floor">floor</a></p>
    5.  绝对链接和相对链接
        绝对URL: 指向其在web上的绝对位置定义的位置
            http://www.example.com/projects/index.html    
        相对URL: 指向与你链接的文件相关的位置
            dog.png位于img文件夹下  其相对路径为img/dog.png
    6.  下载时，使用下载属性
        <a href="https://download.mozilla.org/?product=firefox-latest-ssl&os=w     in64&lang=en-US" download="firefox-latest-64bit-installer.exe">
            Download Latest Firefox for Windows (64-bit) (English, US)
        </a>
    7.  电子邮件链接
        (1) 只包含对方邮件地址
            <a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
        (2) 还可以添加收件人和主题的信息
            <a href="mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject"
    ```
11. html中的列表
    ```
    1. 有序列表
        <ol>
            <li>html</li>
            <li>css</li>
            <li>js</li>
        </ol>
    2. 无序列表
        <ul>
            <li>html</li>
            <li>css</li>
            <li>js</li>
        </ul>
    3. 描述列表
        <dl>
            <dt>html</dt>
            <dd>一门标记语言</dd>
            <dt>css</dt>
            <dd>一门样式语言</dd>
            <dt>javascript</dt>
            <dd>一门编程语言</dd>
        </dl>
    ``` 
12. html的高级文字格式
    ```
    (1) 引用（blockquote）
        <p>According to the <a href="https://www.baidu.com">
            <cite>百度一下</cite></a>:
        </p>
        <blockquote cite="https://www.baidu.com">
            <h1>百度一下，你就知道</h1>
        </blockquote>
    (2) 缩略语（abbr）
        <p>我们使用 <abbr title="Hypertext Markup Language">HTML</abbr> 构建我们的网页</p>
    (3) 标记作者联系方式（address）
        <address>
            <p>郑州市，高新区，梧桐街碧桃路</p>
        </address>
    (4) 上标（sup）和下标（sub）
        <p>x<sup>2</sup> + y<sub>1</sub> = 5</p>
    (5) 展示计算机代码
        code: 用于标记计算机通用代码
        pre: 保留原格式
        var: 标记具体变量名
        kbd: 用于标记输入电脑的键盘
        samp: 用于标记计算机程序的输出
        实例：
        <pre><code>var para = document.querySelector('p');
            para.onclick = function() {
              alert('Owww, stop poking me!');
            }</code>
        </pre>
    (6) 标记时间和日期 
        <time datetime="2018-10-26T08:30:03GMT" pubdate="pubdate">2018-10-26</time>
    ```
13. html网站架构及相关的语义化标签 -- [实例](./demo02.html)
    ```
    1.标题 <header>
    2.导航 <nav>
    3.主要内容 <main> , 内容段落可用<article>
    4.侧栏 <aside>
    5.页脚 <footer>
    ```   
    
        
    


