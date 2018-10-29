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
2.css选择器 [实例](../styles/style.css)
    ```
    1.简单选择器（通过元素、class和id匹配元素）
    2.属性选择器（通过属性/属性值匹配元素）
    3.伪类（匹配处于确定状态的元素）
    4.伪元素（匹配处于相关确定位置的元素）
    5.组合器（组合多个选择器）
    6.多重选择器（将同种样式指定给多个元素）
    ```
3.