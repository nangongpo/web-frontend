## js脚本 (javascript)  动态编程语言
1. 解释代码(interpret) vs 编译代码(compile)
    ```
    解释型语言： 代码自上而下运行,且实时返回运行结果,代码执行前无需浏览器将其转化为其他形式
    编译型语言： 代码在执行前需要先编译成另一种形式
    综上所述：javascript 是轻量级的解释型语言
2. 服务器端代码 vs 客户端代码
    ```
    编写服务器端代码的语言: PHP、Python、Ruby、ASP.NET 以及 JavaScript(nodejs)
    编写客户端代码的语言：js,css,html
    ```
3. 动态代码 vs 静态代码
    ```
    动态页面： 按需生成新内容来更新web页面和应用
    静态页面： 没有动态更新内容的网页
    ```
4. js的引用方式
    ```
    1. 内部编写： 如
        <script>
            var a = 1;
        </script>
    2. 外部引用： 如
        <script src="script.js"></script>
    ```
5. js注释
    ``` 
    1. 单行注释  //
    2. 多行注释  /* */
    ```
6. 猜数字游戏 [demo01.html](./demo01.html)    
7. js变量
    1. 变量是用来存储数值的容器
    2. 变量的命名规则
        ```
        1. 变量名不要以下划线开头
        2. 变量名不要以数字开头
        3. 变量名大小写敏感
        4. 避免使用JavaScript的保留字给变量命名, 如var, function, let, for
        5. 推荐使用 小驼峰命名法, 如 myAge
       ```
    3. javascript中数字类型和运算符
        1. 数字类型
            ```
            1. 十进制
                ① 整数
                ② 浮点数
                ③ 双精度
            2. 二进制 0和1
            3. 八进制 0-7
            4. 十六进制 0-9 a-f
            ```
        2. 算术运算符
            | 算术运算符 | 例子 |
            |:---:|:----:|
            | + | 6 + 9 |
            | - | 20 - 15 |
            | * | 3 * 8 |
            | / | 10 / 5 |
            | % | 8 % 3 余2 |
            | ++ | y = 5; &nbsp; x = ++y; &nbsp; x = 6 |
            | -- | y = 5; &nbsp; x = --y; &nbsp; x = 4 |
            | ** | 5 ** 5 = 3125 (等价于 5^5) |
            | += | x=3; &nbsp; x += 4; (等价于 x = x + 4) |
            | -= | x=3; &nbsp; x -= 4; (等价于 x = x - 4) |
            | *= | x=3; &nbsp; x *= 4; (等价于 x = x * 4) |
            | /= | x=3; &nbsp; x /= 4; (等价于 x = x / 4) |
        3. 比较运算符 [demo02](demo02.html)
            | 比较运算符 | 名称 | 例子 |
            | :---: | :--: | :--: |
            | === | 全等于 | 5 === 2 + 4 |
            | !== | 全非等 | 5 !== 2 + 3 |
            | < | 小于 | 10 < 6 |
            | > | 大于 | 10 > 20 |
            | <= | 小于等于 | 3 <= 2 |
            | >= | 大于等于 | 5 >= 4 |
    4. js中的常见转义字符
        | 代码 | 输出 |
        | :--: | :----: |
        | \\' | 单引号 |
        | \\" | 双引号 |
        | \\& | 和号 |
        | \\\\ | 反斜杠 |
        | \n | 换行符 |
        | \r | 回车符 |
        | \v | 垂直制表符 |
        | \t | 水平制表符 |
        | \b | 退格符 |
        | \f | 换页符 |
    5. 字符串的操作
        ```
        1. 获取字符串长度  
            var str = 'Hello';
            str.length = 4;
        2. 获取特定的字符串字符
            str[0] = 'H';
            str[str.length - 1] = 'o';
        3. 在字符串中查找字符串
            str.indexOf('ll') = 2;
            str.indexOf('small') = -1;  找不到返回 -1
        4. 截取字符串
            str.slice(0,3) = 'Hel';
            str.slice(2) = 'llo';
        5. 改变字符串的格式
            str.toLowerCase() = 'hello';
            str.toUpperCase() = 'HELLO';
        6. 更新字符串部分内容
            str.replace('ello', 'i') = 'Hi';
        ```
    6. 数组的操作 [demo03.html](demo03.html)
        ```
        1. 数组
            var shopping = ['面包', '牛奶', '烤肠'];
            shopping.length = 2
            shopping[0] = '面包'
        2. 二维数组
            var random = ['tree', 795, [0, 1, 2]];
            random[2][2] = 2;
        3. 字符串转数组
            var str = 'Hello,World';
            var strToArr = str.split(',');
            strToArr = ['Hello','World'];
        4. 数组转字符串
            ① join()
                var newStr = strToArr.join(',');
                newStr = 'Hello,World';
            ② toString()
                var userList = ['张三', '李四', '王五'];
                userList.toString();  // '张三,李四,王五'
        5. 数组的添加和删除
            ① push() 在数组的末尾添加
                var cityList = ['上海', '广州', '深圳'];
                cityList.push('郑州'); // 4
                cityList // ['上海', '广州', '深圳', '郑州']
            ② pop() 在数组的末尾删除
                var cityList = ['上海', '广州', '深圳', '郑州'];
                cityList.pop();  // '郑州'
                cityList // ['上海', '广州', '深圳']
            ③ unshift() // 在数组的开始添加
                var cityList = ['上海', '广州', '深圳'];
                cityList.unshift('北京'); // 4
                cityList // ['北京', '上海', '广州', '深圳']
            ④ shift() // 在数组的开始删除
                var cityList = ['北京', '上海', '广州', '深圳'];
                cityList.shift(); // '北京'
                cityList // ['上海', '广州', '深圳']
        ```
    7. 




        
        

