## CSS（Cascading Style Sheet）样式表语言
1. css语法结构
    ```
    body {
      font: 1em/150% Helvetica, Arial, sans-serif;
      padding: 1em;
      margin: 0 auto;
      max-width: 33em;
    }

    @media (min-width: 800px) {
      body {
        font-size: 130%;
      }
    }
    其中@media 表示满足屏幕最小宽度800px执行其中的语句
    ```
2. css选择器 [实例](./demo01.html) 
    ```
    1.简单选择器（通过元素、class和id匹配元素）
    2.属性选择器（通过属性/属性值匹配元素）
    3.伪类（匹配处于确定状态的元素）
    4.伪元素（匹配处于相关确定位置的元素）
    5.组合器（组合多个选择器）
    6.多重选择器（将同种样式指定给多个元素）
    ```
3. css的值和单位
    ```
    1. px 绝对单位
    2. em 相对单位（1em = 继承字体的大小）
    3. ex 小写x的高度, ch 数字0的宽度
    4. rem 相对单位（不受继承字体大小的影响）
    5. vw 视口宽度的1/100, vh 视口高度的1/100
    6. 无单位的值, 如 margin: 0; line-height: 1.5;
    7. 动画的数值
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
            
          100% {
            transform: rotate(360deg);
          }
        }
        
        p {
          color: red;
          width: 100px;
          font-size: 40px;
          transform-origin: center;
        }
        
        p:hover {
          animation-name: rotate;
          animation-duration: 0.6s;
          animation-timing-function: linear;
          animation-iteration-count: 5;
        }
    8. 百分比, 相对父元素尺寸的占比
    9. css颜色
        (1) 关键词, 如 background-color: red;
        (2) 十六进制, 如 background-color: #ff0000;
        (3) RGB: 红绿蓝,分别取值0-255, 如 background-color: rgb(0,0,255);
        (4) HSL: 色调(0-360)、饱和度(0-100%)和透明度(0-100%), 如 background-color: hsl(276,100%,85%);
        (5) RGBA, 其中A为透明度opacity,取值0-1， 如 background-color: rgba(255,0,0,0.5);
        (6) HSLA, 如 background-color: hsla(240,100%,50%,0.5);
    10. 函数, 如上面提到的rgb() 和 hsl() 可作为css中的属性值
    ```
4. css的特性
    ```
    1. 层叠
        (1) 重要性 !important的优先级最高
            .better {
              background-color: gray;
              border: none !important;
            }
        (2) 专用性
            内联样式权重：1000
            id选择器权重：0100
            类选择器、属性选择器、伪类选择器权重：0010
            元素选择器、伪元素选择器权重：0001
        (3) 源代码次序：遵从就近原则
    2. 继承
        (1) 控制继承 [实例](./demo02.html)
            inherit: 与其父元素一样
            initial: 与浏览器默认样式一样，无浏览器默认样式，自然继承
            unset: 将属性重置为自然值，自然继承的属性等同于inherit，否则等同于initial
            revert: 若当前节点设置样式，就保持原来的值
    ```
5. 框模型
    [](../images/box-model.png)
    ```
    1.框模型的属性
        (1) width和height 设置内容框的宽度和高度
        (2) padding 内边距，内容框的外边缘与边界的内边缘之间
            padding-top/right/bottom/left
        (3) border 框的边界
            border: width style color
        (4) margin 外边距， 边界的外部区域
            margin-top/right/bottom/left
    2.高级的框操作
        (1) 溢出overflow
            auto： 内容过多，显示滚动条
            hidden: 内容过多， 溢出内容隐藏
            visible: 内容过多，溢出内容显示在盒子的外边
        (2) 背景裁剪 background clip
            background-clip: border-box; 保留边框
            background-clip: padding-box; 保留内边框中的内容,其余剪除
            background-clip: content-box; 只保留内容框
        (3) 轮廓outline 轮廓被勾画于在框边界之外，外边距区域之内
    ```
6. CSS框类型（通过display设置）
    ```
    1. 块框 block 独占一行
    2. 行内框 inline 默认
    3. 行内块状框 inine-block 在一行中占据一块
    ```
7. CSS的调试
    - 调试前：[demo03-before.html](./demo03-before.html)
    - 调试后：[demo03-after.html](./demo03-after.html)
8. CSS的项目 [demo04.html](./demo04.html)   
9. 样式化字体   
    ```
    1.用于样式文本的CSS属性分为两类
        字体样式：字体的种类、颜色和大小
            p {
              font-size: 12px;
              color: red;
              
            }
        文本布局风格：文本的对齐方式、行高、字间距
    2.CSS改变文本样式的常用属性
        (1) font-style: normal/italic/oblique
        (2) font-variant: 在小型大写字母和普通文本之间切换
        (3) font-weight: normal/bold/lighter/bloder
        (4) font-stretch: 在给定字体的可选拉伸版本中切换
        (5) font-size: 12px;
        (6) font-family: Helvetica, Arial, sans-serif;
        (7) text-transform: none/uppercase/lowercase/capitalize/full-width
        (8) text-decoration: none/underline/overline/line-through
        (9) text-shadow: 水平偏移 垂直偏移 模糊半径 阴影颜色
    3.CSS文本布局的常用样式
        (1) text-align: left/right/center/justify
        (2) line-height: 无单位的值乘以 font-size 来获得 line-height
        (3) letter-spacing: 字母之间的间距
        (4) word-spacing: 单词之间的间距
        (5) text-indent: 首行缩进
        (6) text-overflow: 如何处理被隐藏的溢出内容
        (7) white-space: 处理元素内部的空白和换行
        (8) word-wrap: 单词换行
        (9) writing-mode: 定义文本行布局为水平还是垂直
    4.设置字体属性的简写 (文本样式1-6的简写)
        font: italic normal blod normal 3em/1.5 Helvetica, Arial, sans-serif;
    ```
10. 字体种类    
    
    | 字体名称 | 字体种类 | 注意 |  
    | :------- | :------- | :--- |  
    |   Arial  | sans-serif | Helvetica作为 Arial 的首选替代品 |    
    | Courier New | monospace | 使用Courier New作为Courier的首选替代方案 |  
    | Georgia | serif |     |   
    | Times New Roman | serif | 使用Times作为Times New Roman的首选替代方案 |    
    | Trebuchet MS | sans-serif | 在移动操作系统上并不广泛 |    
    | Verdana | sans-serif |   |    

11. 列表的CSS样式 [demo05.html](./demo05.html)
    ```
    1. ul或ol元素的三个属性
        list-style-type: 设置列表的项目符号的类型
        list-style-position: 项目符号出现的位置
        list-style-image: 引用自定义的项目符号图片
        实例如下：
            ul {
              list-style-type: square;
              list-style-image: url(example.png);
              list-style-position: inside;
            }
        简写为
            ul {
              list-style: square url(example.png) inside;
            }
    2.管理列表的计数
       1. start: 项目的编号
       2. reversed: 将项目编号翻转
       3. value: 设置列表项指定数值
    ```
12. 链接的CSS样式 [demo06.html](./demo06.html)
13. 表格的CSS样式 [demo07.html](./demo07.html)
14. 阴影 [demo08.html](./demo08.html)
    ```
    1. 盒子阴影 box-shadow: 水平偏移(必需) 垂直偏移(必需) 模糊半径 阴影尺寸 阴影颜色 阴影出现的位置
        box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.7) inset;
    2. 过滤器 filters
        filter: drop-shadow(5px 5px 1px rgba(0, 0, 0, 0.7));
    3. 混合模式 Blend modes (兼容性很差)
        1. background-blend-mode, 用来将单个元素的多重背景图片和背景颜色设置混合在一起
        2. mix-blend-mode, 用来将一个元素与它覆盖的那些元素各自所设置的背景（background）和内容(content)混合在一起。
    ```
15. css排版 [demo09.html](./demo09.html)
    ```
    1. 浮动float  left/right/none/inherit
    2. 定位技术 
        静态定位(static)： 默认位置
        相对定位(relative)： 相对默认位置移动，用于微调和精准设计
        绝对定位(absolute)： 脱离文档流 (以被定位的父元素为基准)
        固定定位(fixed)： 相对浏览器视口固定
    3. 多列布局(multicol)
        .container{
            column-count: 3;
            column-width: 200px;
        }
    4. 网格系统
        1.固定宽度网格
            根据容器宽度，计算列宽
        2.流体网格
            使用百分比计算出列宽 
            如固定宽度 960px , 分12份, 每列间隔20px, 则每列固定宽度为60px
            每列列宽：60/960 = 6.25%;  列间隔： 20/960 = 2.08333333%;
            .container {
                width: 960px;
            }
            四列列宽： 
            .col-4 {
                width: calc((6.25%*4)+ (2.08333333%*3));
            }
    5. 弹性布局 flex
    ``` 
16. 功能查询：测试浏览器是否支持任何特定的CSS功能
    ```
    @supports (display: grid) {
        .item {
            width: auto;
        }
    }
    注意：不支持CSS Grid的浏览器，它也不支持功能查询
    ```
    
    

            
            
    
    
    
        
            
    
    
        
    
    