## js脚本 (javascript)  动态编程语言
1. 解释代码(interpret) vs 编译代码(compile)
    ```
    解释型语言: 代码自上而下运行,且实时返回运行结果,代码执行前无需浏览器将其转化为其他形式
    编译型语言: 代码在执行前需要先编译成另一种形式
    综上所述: javascript 是轻量级的解释型语言
2. 服务器端代码 vs 客户端代码
    ```
    编写服务器端代码的语言: PHP、Python、Ruby、ASP.NET 以及 JavaScript(nodejs)
    编写客户端代码的语言: js,css,html
    ``` 

3. 动态代码 vs 静态代码
    ```
    动态页面: 按需生成新内容来更新web页面和应用
    静态页面: 没有动态更新内容的网页
    ``` 

4. js的引用方式
    ```
    1. 内部编写: 如
        <script>
            var a = 1;
        </script>
    2. 外部引用: 如
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
        5. 推荐使用 小驼峰命名法, 如 myAge
       ```
    3. javascript中数字类型和运算符
        1. 数字类型
            ```
            1. 十进制
                ① 整数
                ② 浮点数 32位 占4个字节  有效数字8位 表示范围：-3.40E+3 ~ +3.40E+38
                ③ 双精度 64位 占8个字节  有效数字16位 表示范围：-1.79E+308 ~ +1.79E+308
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

        4. 逻辑运算符
            ```
            1. && ——逻辑与 都为true时, 返回true
            2. || ——逻辑或 只要有一个位true, 返回true
            3. !  ——逻辑非 非true即false, 非false即true
            ``` 

    4. js中的常见转义字符   

        | 代码 | 输出 |
        | :--: | :----: |
        | \\' | 单引号 |
        | \\" | 双引号 |
        | \\& | 和号 |
        | \\\\ | 反斜杠 |
        | \n | 换行符 |
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
        5. 改变字符串的格式
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
                cityList // ['北京', '上海', '广州', '深圳']
            ④ shift() // 在数组的开始删除
                var cityList = ['北京', '上海', '广州', '深圳'];
                cityList.shift(); // '北京'
                cityList // ['上海', '广州', '深圳']
        ``` 

    7. 条件判断
        1. if...else... 
        2. if...else if...else...
        3. switch...case...
            ```
            switch (expression) {
                case choice1:
                    run this code
                    break;

                case choice2:
                    run this code instead
                    break;
                ......
                default:
                    actually, just run this code
            }
            ``` 

        4. 三元运算符
            `old > 18 ? '成年' : '未成年';`
    8. 循环 
        1. for
            ```
            for (初始化,退出条件,最终条件) {
                // 执行
            }
            ``` 

        2. break 终止循环
        3. continue 跳过迭代
        4. while 先判断在执行
            ```
            初始化
            while (退出条件) {
                // 执行
                最终条件
            }
            ``` 

        5. do...while 先执行在判断
            ```
            初始化
            do {
                // 执行
                最终条件
            } while (退出条件)
            ``` 

    9. 常用的math对象  

        | 方法 (x,y 代表数值) | 描述 |
        | :-------------: | :--: |
        | Math.ceil(x) | 对数进行向上取整 |
        | Math.floor(x) | 对数进行向下取整 |
        | Math.max(x,y) | 返回x和y中的最大值 |
        | Math.min(x,y) | 返回x和y中的最小值 |
        | Math.random() | 返回 0~1 之间的随机数 |
        | Math.round(x) | 把数四舍五入为最接近的整数 | 

    10. 函数
        ```
        1. 自定义函数
            function random(number) {
                return Math.floor(Math.random()*number);
            }
        2. 函数的调用 random(10);
        3. 匿名函数 
            function() {
                alert('hello');
            }
        4. 调用匿名函数
            ```
            1. 赋值给变量调用
                var hello = function() {
                    alert('hello');
                }
                hello();
            2. 匿名函数自调
                (function() {
                    alert('hello');
                })();
            3. 事件绑定来调用
                myButton.onclick = function() {
                    alert('hello');
                }
            ``` 

        5. 函数参数
            function add(num1, num2) {
                return num1+num2;
            }
        6. 函数作用域
            1. 全局作用域: 所有函数的最外层, 全局作用域定义的值可在任意地方使用
            2. 局部作用域: 函数内部
        ``` 

    11. 事件
        1. 事件的监听和移除
            ```
            var btn = document.querySelector('button');

            function bgChange() {
                var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
                document.body.style.backgroundColor = rndCol;
            }   

            btn.addEventListener('click', bgChange);  // 监听事件
            btn.removeEventListener('click', bgChange); //移除事件
            ``` 

        2. 事件对象 [demo05.html](demo05.html)
            <span style="color: green;">多用于在多个元素上设置相同的事件处理程序</span>
        3. 阻止默认行为  
            <span style="color: red;">e.preventDefault();</span>
        4. 事件冒泡及捕获   
            ① 事件的捕获  

                浏览器检查元素的最外层祖先<html>,是否注册了onclick事件，如果是，则运行它。
                然后移动到<html>中的下一个元素，并执行相同的操作，直至到达实际点击的元素。
            ② 冒泡阶段(默认)

                从里向外依次检查是否注册onclick事件，如果是，则运行它。
            ③ 阻止冒泡 
                <span style="color: red;">e.stopPropagation();</span>
        5. 事件委托 (利用冒泡) [demo06.html](demo06.html)
    12. 对象 —— 包含相关数据和方法的集合
        1. 对象的定义
            ```
            var person = {
                name : ['Bob', 'Smith'],
                age : 32,
                gender : 'male',
                interests : ['music', 'skiing'],
                bio : function() {
                    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
                },
                greeting: function() {
                    alert('Hi! I\'m ' + this.name[0] + '.');
                }
            };
            person对象由 4个属性和2个方法 构成
            ``` 

        2. 获取对象属性值的两种方法
            ```
            点表示法
                person.age
            括号表示法
                person['age']
            ``` 

        3. 设置对象属性的值
            ```
            改变属性的值
                person.age = 45
            添加新的属性
                person.height = '170cm'
                person['height'] = '170cm'
            ```     

    13. 构造函数(类)的创建实例化对象的方法  
        1.  创建构造函数，通过new 实例化对象
            ```  
            function Person(first, last, age, gender, interests) {
                this.name = { first, last};
                this.age = age;
                this.gender = gender;
                this.greeting = function() {
                    alert('Hi! I\'m ' + this.name.first + '.');
                };
            }
            var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
            ```

        2. 使用Object()构造函数创建一个空对象
            ```
            var person1 = new Object();
            ``` 

            ```
            person1.name = 'Chris';
            person1['age'] = 38;
            person1.greeting = function() {
                alert('Hi! I\'m ' + this.name + '.');
            }
            ```
            <span style="color:red;">或</span>
            ```
            var person1 = new Object({
                name : 'Chris',
                age : 38,
                greeting : function() {
                    alert('Hi! I\'m ' + this.name + '.');
                }
            });
            ``` 
        3. 使用create()方法，创建基于现有对象创建新的对象实例 —— ie9+支持
            ```
            var person2 = Object.create(person1);
            person2是基于person1创建的
            ```
    14. 理解JavaScript中的原型
        1. 原型(prototype) —— 每个函数都有一个特殊的属性(可通过浏览器控制台查看函数的__proto__)
        2. 原型链的理解     
            ![原型链关系图](../../web/images/原型链关系图)
            ```
            // 首先创建一个构造函数
            function Person(first, last, age, gender, interests) {
                // 属性与方法定义
            };
            // 然后创建一个对象实例
            var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
            //
            ```

    15. 面向对象编程 OOP(Object Oriented Programming)
        1. 封装的三种形式
            1. 创建对象：将属性和方法封装成一个对象
            2. 创建构造函数：为了解决从原型对象生成实例的问题, 缺点：添加一个不变的属性时，会浪费内存 (验证原型对象与实例对象的关系 instanceof)
                ```
                // 创建原型对象
                function Cat(name,color) {
                    this.name = name;
                    this.color = color;
                    this.type = '猫科动物';
                    this.eat = function(){ alert('吃老鼠'); }
                }
                // 生成实例对象
                var cat1 = new Cat('小黄','黄色');
                // 这时cat1 自动包含一个constructor属性,指向它的构造函数
                cat1.constructor == Cat   // true
                // 也可用 instanceof 验证原型对象与实例对象之间的关系
                cat1 instanceof Cat  // true
                ``` 

            3. 使用原型对象(每个构造函数都有一个prototype属性,指向原型对象) 可将不变的属性和方法放到原型对象中，可提高运行效率 
                ```
                1. 实例
                    function Cat(name,color){
                　　　　this.name = name;
                　　　　this.color = color;
                　　 }
                　　 Cat.prototype.type = "猫科动物";
                　　 Cat.prototype.eat = function(){alert("吃老鼠")};
                2. 验证方法
                    ① isPrototypeOf() 验证prototype对象与实例之间关系的方法
                        Cat.prototype.isPrototypeOf(cat1);  // true
                    ② hasOwnProperty() 判断某一个属性是本地属性，或是继承自prototype对象的属性
                        cat1.hasOwnProperty("name");  // true
                        cat1.hasOwnProperty("type");  // false
                    ③ in 判断实例是否包含某个属性
                        "name" in cat1   // true
                ``` 
        2. 继承
            1. 构造函数的继承
                ```
                1. 声明两个构造函数，分别为"动物"和"猫"对象的构造函数
                    function Animal() {
                        this.species = "动物";
                    }
                    function Cat(name,color) {
                        this.name = name;
                        this.color = color;
                    }

                2. 让"猫"继承"动物"的方法
                    ① 构造函数绑定 —— 利用call或者apply方法，将父对象的构造函数绑定在子对象上(父对象改变，对子对象没有影响，因为二者的原型对象不一样)
                        function Cat(name,color){
                    　　　　 Animal.call(this, arguments);
                    　　　　 this.name = name;
                    　　　　 this.color = color;
                    　　 } 

                        或

                    　　 function Cat(name,color){
                    　　　　 Animal.apply(this, arguments);
                    　　　　 this.name = name;
                    　　　　 this.color = color;
                    　　 }
                    　　 var cat1 = new Cat("大毛","黄色");
                    　　 alert(cat1.species); // 动物

                    ② prototype模式 —— 将"猫"的prototype对象指向一个Animal的实例，所有"猫"的实例都可以继承Animal
                        Cat.prototype = new Animal(); // 任何一个prototype对象都有一个constructor属性，指向它的构造函数
                    　　 Cat.prototype.constructor = Cat;  // 替换原型对象时，需重新指定原型对象的构造函数，以免导致"继承链"的紊乱
                        var cat1 = new Cat("大毛","黄色");
                    　　 alert(cat1.species); // 动物

                    ③ 直接继承prototype —— "猫"直接继承"动物"的原型对象
                        // 先将Animal的species属性放入原型对象中
                    　　 function Animal() { }
                        Animal.prototype.species = "动物";
                        // 然后将Cat的prototype对象指向Animal的prototype对象
                        Cat.prototype = Animal.prototype;
                        Cat.prototype.constructor = Cat; // 缺点是把Animal.prototype对象的constructor属性也改掉了
                        var cat1 = new Cat("大毛","黄色");
                        alert(cat1.species); // 动物 

                    ④ 利用空对象作为中介 —— 避免修改Cat的prototype对象时影响到Animal的prototype对象，还可以节省内存
                        var F = function() { };
                        F.prototype = Animal.prototype;
                        Cat.prototype = new F();
                        Cat.prototype.constructor = Cat;
                        // 可将上述方法封装成一个函数
                        function extend(Child, Parent) {
                            var F = function() {};
                            F.prototype = Parent.prototype;
                            Child.prototype = new F();
                            Child.prototype.constructor = Child;
                            Child.uber = Parent.prototype;  // 保存父类的prototype 这样就可以在子类中随时调用父类的东西
                        }
                        // 调用方法
                        extend(Cat, Animal);
                        var cat1 = new Cat("小黄","黄色");
                        alert(cat1.species); // 动物

                    ⑤ 拷贝继承
                        // 先将Animal的species属性放入原型对象中
                    　　 function Animal() { }
                        Animal.prototype.species = "动物";
                        // 再写一个函数，实现属性拷贝的目的
                        function extend2(Child, Parent) {
                　　　　    var p = Parent.prototype;
                　　　　    var c = Child.prototype;
                    　　　　for (var i in p) {
                    　　　　　　c[i] = p[i];
                    　　　　}
                　　　　    c.uber = p;
                    　　}
                        // 调用方法
                        extend2(Cat, Animal);
                    　　 var cat1 = new Cat("大毛","黄色");
                    　　 alert(cat1.species); // 动物   

                    ⑥ 利用Object.create(新创建对象的原型对象, 添加到新对象的属性——可选)实现单个对象的继承
                        // Shape - 父类(superclass)
                        function Shape() {
                            this.x = 0;
                            this.y = 0;
                        }

                        // 父类的方法
                        Shape.prototype.move = function(x, y) {
                            this.x += x;
                            this.y += y;
                            console.info('Shape moved.');
                        };

                        // Rectangle - 子类(subclass)
                        function Rectangle() {
                            Shape.call(this); // call super constructor.
                        }

                        // 子类续承父类
                        Rectangle.prototype = Object.create(Shape.prototype);
                        Rectangle.prototype.constructor = Rectangle;

                        var rect = new Rectangle();

                        console.log('Is rect an instance of Rectangle?',
                        rect instanceof Rectangle); // true
                        console.log('Is rect an instance of Shape?',
                        rect instanceof Shape); // true
                        rect.move(1, 1); // Outputs, 'Shape moved.'

                    ⑦ 利用Object.assign(prototype1, prototype2, ...)实现多个对象的继承
                        // 先将superClass和OtherSuperClass的方法绑定到MyClass上
                        function MyClass() {
                            SuperClass.call(this);
                            OtherSuperClass.call(this);
                        }
                        // 继承一个类
                        MyClass.prototype = Object.create(SuperClass.prototype);
                        // 混合其它
                        Object.assign(MyClass.prototype, OtherSuperClass.prototype);
                        // 重新指定constructor
                        MyClass.prototype.constructor = MyClass;

                        MyClass.prototype.myMethod = function() {
                            // do a thing
                        };
                ``` 

            2. 非构造函数的继承
                ```
                1. 声明两个普通对象，分别为"中国人"和"医生"的普通对象
                    var Chinese = {
                　　　　nation:'中国'
                　　 }
                    var Doctor ={
                　　　　career:'医生'
                　　 }

                2. 让"医生"继承"中国人"，即生成一个"中国医生"的对象的方法
                    ① object()
                        // 把子对象的prototype属性指向父对象
                        function object(o) {
                    　　　　function F() {}
                    　　　　F.prototype = o;
                    　　　　return new F();
                    　　}
                        // 在父对象的基础上生成子对象
                        var Doctor = object(Chinese);
                        // 将子对象本身的属性加入
                        Doctor.career = '医生';
                        alert(Doctor.nation); // 中国

                3. 浅拷贝 —— 拷贝对象类型的数据（早期jQuery实现继承的方式）
                    // 把父对象的属性，全部拷贝给子对象(拷贝数据)
                    function extendCopy(p) {
                　　　　var c = {};
                　　　　for (var i in p) { 
                　　　　　　c[i] = p[i];
                　　　　}
                　　　　c.uber = p;
                　　　　return c;
                　　}
                    // 调用方法
                    var Doctor = extendCopy(Chinese);
                　　 Doctor.career = '医生';
                　　 alert(Doctor.nation); // 中国

                4. 深拷贝 —— 实现真正意义上的数组和对象的拷贝 （现在jQuery实现继承的方式）
                    // 拷贝 数据及其类型
                    function deepCopy(p, c) {
                　　　　var c = c || {};
                　　　　for (var i in p) {
                　　　　　　if (typeof p[i] === 'object') {
                　　　　　　　　c[i] = (p[i].constructor === Array) ? [] : {};
                　　　　　　　　deepCopy(p[i], c[i]);
                　　　　　　} else {
                　　　　　　　　　c[i] = p[i];
                　　　　　　}
                　　　　}
                　　　　return c;
                　　}
                    // 调用方法
                    var Doctor = deepCopy(Chinese);
                    // 给父对象加一个属性，值为数组。然后，在子对象上修改这个属性
                　　 Chinese.birthPlaces = ['北京','上海','香港'];
                    Doctor.birthPlaces.push('厦门');
                    // 父对象就不会受到影响了
                    alert(Doctor.birthPlaces); //北京, 上海, 香港, 厦门
                    alert(Chinese.birthPlaces); //北京, 上海, 香港
                ``` 

        3. 多态 —— 把“做什么”和“谁去做”分离开来，实现不同的命令会做不同的事情
            ```
            1. 假设有两家可选的地图软件，有相同调用地图的API
                var googleMap = {
                    show: function(){
                        console.log( '开始渲染谷歌地图' );
                    }
                };

                var renderMap = function(){
                    googleMap.show();
                };
                renderMap(); // 输出：开始渲染谷歌地图

            2. 同时支持谷歌地图和百度地图
                var googleMap = {
                    show: function(){
                        console.log( '开始渲染谷歌地图' );
                    }
                };

                var baiduMap = {
                    show: function(){
                        console.log( '开始渲染百度地图' );
                    }
                };

                var renderMap = function( type ){
                    if ( type === 'google' ){
                        googleMap.show();
                    }else if ( type === 'baidu' ){
                        baiduMap.show();
                    }
                };

                renderMap( 'google' ); // 输出：开始渲染谷歌地图
                renderMap( 'baidu' ); // 输出：开始渲染百度地图

            3. 把程序中相同的部分抽象出来，实现多态
                var renderMap = function( map ){
                    if ( map.show instanceof Function ){
                        map.show();
                    }
                };

                var googleMap = {
                    show: function(){
                        console.log( '开始渲染谷歌地图' );
                    }
                };
                var baiduMap = {
                    show: function(){
                        console.log( '开始渲染百度地图' );
                    }
                };

                renderMap( googleMap ); // 输出：开始渲染谷歌地图
                renderMap( baiduMap ); // 输出：开始渲染百度地图
            ``` 

    16.   


            

            






        
        

