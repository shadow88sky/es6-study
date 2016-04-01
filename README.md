#ES6-Study
>公司的项目一直是用的低版本的Node，所以虽然高版本的Node已经支持了ES6的语法，可是自己确没有认真的学习过。
>最近接了个私活，打算用ES6来写，所以打算摸索起来，做个备注，希望对别的同学也有一点用。

##块级作用域
*   严格模式

>在4.x、5.x的Node版本中，ECMAScript 6中的一些特性，必须在严格模式下，才可以使用，而不报错。
>所以我们在js文件中，必须添加"use strict"来开启严格模式

*   let

>let 允许把变量的作用域限制在块级域中。与 var 不同处是：var 申明变量要么是全局的，要么是函数级的，而无法是块级的。
>[This is demo](https://github.com/shadow88sky/es6-study/blob/master/let.js)

*   const

>const这个声明创建一个常量,可以全局或局部的函数声明。  
一个常量可以是全局的或者是局部的,常量遵循与变量相同的作用域规则。  
一个常量不可以被重新赋值,并且不能被重复声明.所以,虽然可以在声明一个常量的时候不进行初始化,但这样做是没有意义的,因为这个常量的值永远会保持undefined。  
一个常量不能和它所在作用域内的其他变量或函数拥有相同的名称。  
[This is demo](https://github.com/shadow88sky/es6-study/blob/master/const.js)

##类
>　ES6 中的类实际上就是个函数，而且正如函数的定义方式有函数声明和函数表达式两种一样，类的定义方式也有两种，分别是：类声明、类表达式。

*   类声明

>类声明是定义类的一种方式,使用 class 关键字后跟一个类名,就可以定义一个类。  
[This is demo](https://github.com/shadow88sky/es6-study/blob/master/class.js)  
类声明和函数声明不同的一点是，函数声明存在变量提升现象，而类声明不会。也就是说，你必须先声明类，然后才能使用它，否则代码会抛出 ——ReferenceError 异常，像下面这样：
```javascript
var p = new Polygon(); // ReferenceError
class Polygon {}
```

*   类表达式
>类表达式是定义类的另外一种方式，就像函数表达式一样，在类表达式中，类名是可有可无的。如果定义了类名，则该类名只有在类体内部才能访问到。
```javascript
'use strict';
// 匿名类表达式
var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
 
// 命名类表达式
var Polygon = class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```
