## IE8对于CSS2.1是完整支持的，对于CSS3则只是部分支持。下文中只列出IE8完全支持及完全不支持的样式。

==注：下文中的E、F均指html标签名，如div，img等。==

1. At-rules At类规则
    ```
    支持：@charset, @import, @media, @page, @font-face
    ```
2. Selectors 选择器
    ```
    1. Element Selectors 元素选择器    
    支持：.value, #value, E, *
    
    2. Attribute Selectors 属性选择器
    支持：[att=val], [att], [att|=val], [att~=val]
    
    3. Combinators 联合选择器
    支持：E + F, E > F, E F（CSS2.1）
    
    支持：E ~ F （CSS3）
    
    4. Pseudo-classes 伪类
    支持：:active, :first-child, :focus, :hover, :lang(C), :link, :visited, @page :first, @page :left, @page :right
    
    5. Pseudo-elements 伪元素
    支持：:after, :before, :first-letter, :first-line
    ```
7. Properties 属性  ==支持：!important==

8. 2-D and 3-D Transforms 2D、3D效果    
    ==不支持==：transform全系列, perspective全系列, backface-visibility

9. Animations 动画  ==不支持：animation全系列==

10. Border and Layout 边框和布局
    ```
    支持：border系列（除了border-break, border-image, border-radius）, caption-side, clear, empty-cells, float, margin全系列, padding全系列, table-layout
    ```
11. Color and Background 颜色和背景
    ```
    支持：color, background, background-attachment, background-color, background-image, background-position, background-repeat
    ```
12. Font and Text 字体和文本
    ```
    支持：direction, font, font-family, font-size, font-style, font-variant, font-weight, letter-spacing, line-height, text-align, text-decoration, text-indent, text-transform, unicode-bidi, vertical-align, white-space, word-spacing
    ```
13. Generated Content 生成内容
    ```
    支持：content, counter-increment, counter-reset, quotes
    ```
14. Lists 列表  ==支持：list-style全系列==

15. Positioning 定位
    ```
    支持：bottom, clip, display, height, left, max-height, max-width, min-height, min-width, overflow, overflow-x, overflow-y, position, right, top, visibility, width, z-index
    ```
16. Printing 打印
    ```
    支持：orphans, page-break-after, page-break-before, page-break-inside, widows
    ```
17. Transitions 平滑渐变/过渡 ==不支持：transition全系列==

18. User Interface 用户界面
    ```
    支持：cursor, outline, outline-color, outline-style, outline-width
    ```
19. Speech 朗读 ==不支持==

20. Media Queries 媒体查询  ==不支持==

21. Values 值
    ```
    Numbers 数字
    支持：<number>, <length>, <percentage>, <integer>
    
    Strings 字符串
    支持：<string>, code
    
    Shapes 形状
    支持：rect()
    
    Functions 函数
    支持：url(), counter(), attr()
    
    Gradients 梯度
    不支持
    
    Colors 颜色
    支持：<color> (names), <color> (#rrggbb or #rgb), <color> (rgb(r,g,b)), <color> (system colors), transparent
    
    Keywords 关键字
    支持：auto, inherit
    
    Units 单位
    支持：px, pt, pc, cm, mm, in, em, ex, %
    ```



    