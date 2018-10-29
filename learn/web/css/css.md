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
8. 