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
    1. 标题 <header>
    2. 导航 <nav>
    3. 主要内容 <main> , 内容段落可用<article>
    4. 侧栏 <aside>
    5. 页脚 <footer>
    ```   
14. 多媒体与嵌入 -- [实例](./demo04.html)
    ```
    1.图片 img
      (1)替换元素(img、video):元素的内容和尺寸由外部资源所定义，而不是元素本身
      (2)备选文本(alt):对图片的文字描述
      (3)搭配说明文字解说图片的元素(容器--figure，说明文字--figcaption)
    2.视频 video 的属性 -- webm(firefox、chrome支持) mp4(IE、safari支持)
        1. src
        2. controls 控件
        3. width 和 height 
        4. autoplay 自动播放
        5. loop 循环播放
        6. muted 静音
        7. poster 海报
        8. preload  预加载 (none, auto, metadata)
    3.音频 audio 的属性 -- mp3 和 ogg格式
        与video相比，没有poster、width、height
    4.显示音轨文件（.vtt）
        kind属性值(subtitles、caption、descriptions)
        srclang设置编写字幕的语言
        
        <video controls>
            <source src="example.mp4" type="video/mp4">
            <source src="example.webm" type="video/webm">
            <track kind="subtitles" src="subtitles_en.vtt" srclang="en">
        </video>
    ```
15. html中的嵌入元素（iframe嵌入网页, embed和object嵌入PDF、SVG以及Flash）
    ```
    1.iframe的属性
        allowfullscreen: 全屏
        frameborder属性值：1表示绘制边框 0表示删除边框
        src: url路径
        width 和 height
        sandbox属性值为空字符串:提高安全性，可用以下属性值解除相关限制：
            allow-forms:允许执行表单
            allow-popups:允许弹窗
            allow-scripts:允许执行脚本
            allow-same-origin:将嵌入的内容视作正常来源
            allow-storage-access-by-user-activation:允许储存
    2.内容安全策略CSP
        1.可用meta元素配置策略
            <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">
        2.在任何网站中触发IE7兼容性的示例
            <meta http-equiv =“X-UA-Compatible”content =“IE = 7”/>
        3.防止网页被别人的网站iframe
            通过在服务端设置HTTP头部中的X-Frame-Options信息
                (1)DENY：页面不能被嵌入到任何iframe或frame中；
                (2)SAMEORIGIN：页面只能被本站页面嵌入到iframe或者frame中；
                (3)ALLOW-FROM：页面允许frame或frame加载。
            在服务端设置的方式如下：
                Java代码:
                response.addHeader("x-frame-options","SAMEORIGIN");
                Nginx配置:
                add_header X-Frame-Options SAMEORIGIN
                Apache配置:
                Header always append X-Frame-Options SAMEORIGIN
    3.内网和企业项目中嵌入插件
        1.embed嵌入Flash插件
            <embed src="whoosh.swf" quality="medium"
               bgcolor="#ffffff" width="550" height="400"
               name="whoosh" align="middle" allowScriptAccess="sameDomain"
               allowFullScreen="false" type="application/x-shockwave-flash"
               pluginspage="http://www.macromedia.com/go/getflashplayer">
        2.object将PDF嵌入页面
            <object data="mypdf.pdf" type="application/pdf"
                width="800" height="1200" typemustmatch>
                <p>You don't have a PDF plugin, but you can <a href="myfile.pdf">download the PDF file.</a></p>
            </object>
    4.html5中的新标签
        1.video 加载视频
        2.audio 加载音频
        3.canvas 用于javascript生成的2D和3D图形
        4.svg 嵌入矢量图形
    ```
16. 位图和矢量图的区别
    ```
    1.位图：使用像素网格来定义（.bmp, .png, .jpg, .gif）
    2.矢量图SVG：使用算法来定义，其中包含图形和路径的定义
        1.html引入.svg(兼容写法)
            <img src="equilateral.png" alt="triangle with equal sides" srcset="equilateral.svg">
        2.css引入.svg(兼容写法)
            background: url("fallback.png") no-repeat center;
            background-image: url("image.svg");
            background-size: contain;
        3.html引入SVG
            <svg width="300" height="200">
                <rect width="100%" height="100%" fill="green" />
            </svg>
        4.iframe嵌入SVG
            <iframe src="triangle.svg" width="500" height="500" sandbox>
                <img src="triangle.png" alt="Triangle with three unequal sides" />
            </iframe>
    ```
17. html中的自适应图片
    ```
    1.srcset:包含图像集及其相应的尺寸
    2.sizes:定义了一组媒体条件(不同的分辨率，显示不同的图片)
        <img srcset="elva-fairy-320w.jpg 320w,
                     elva-fairy-480w.jpg 480w,
                     elva-fairy-800w.jpg 800w"
             sizes="(max-width: 320px) 280px,
                    (max-width: 480px) 440px,
                    800px"
             src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">
    3.也可使用picture(sizes用于设置分辨率和media用于设置媒体尺寸)
        <picture>
          <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg">
          <source media="(min-width: 800px)" srcset="elva-800w.jpg">
          <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
        </picture>
    4.加载新的图片格式
        <picture>
          <source type="image/svg+xml" srcset="pyramid.svg">
          <source type="image/webp" srcset="pyramid.webp"> 
          <img src="pyramid.png" alt="regular pyramid built from four equilateral triangles">
        </picture>
    ```
18. html表格  [实例](./demo06.html)
19. html表单  
    ```
    <form action="url" method="post">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" />
        </div>
        <div>
            <label for="mail">E-mail:</label>
            <input type="email" id="mail" />
        </div>
        <div>
            <label for="msg">Message:</label>
            <textarea id="msg"></textarea>
        </div>
    </form>
    ```
        
    


