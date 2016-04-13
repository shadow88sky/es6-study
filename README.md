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

*   构造函数

>类的成员需要定义在一对花括号 {} 里，花括号里的代码和花括号本身组成了类体。类成员包括类构造器和类方法（包括静态方法和实例方法)。  
class 根据 constructor 方法来创建和初始化对象。  
constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类只能有一个constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。

*   静态方法

>static关键字定义了一个类的静态方法。静态方法被称为无需实例化类也可当类被实例化。静态方法通常用于为应用程序创建实用函数。  
[This is Demo](https://github.com/shadow88sky/es6-study/blob/master/class.js)  

*   使用 extends 关键字创建子类

>extends 关键字可以用来创建继承于某个类的子类。  
[DEMO](https://github.com/shadow88sky/es6-study/blob/master/class.js)


##集合

*   map  
 
>map对象是一个简单的键/值映射。任何值（包括对象和原始值）都可以用作一个键或一个值。
```javascript
var m = new Map();
var o = {p: "Hello World"};
m.set(o, "content")
m.get(o) // "content"
```
>上面代码使用set方法，将对象o当作m的一个键。  
Map也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。
```javascript
var map = new Map([["name", "张三"], ["title", "Author"]]);
map.size // 2
map.get("name") // "张三"
map.get("title") // "Author"
```
>注意Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。  
如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。  
如果Map的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map将其视为一个键，包括0和-0。  
另外，虽然NaN不严格相等于自身，但Map将其视为同一个键。

*   map实例的属性和操作方法

>size属性返回Map结构的成员总数。即返回映射对象中的键/值对的数目。  
set(key, value)方法设置key所对应的键值，然后返回整个Map结构。如果key已经有值，则键值会被更新，否则就新生成该键。
```javascript
var m = new Map();
m.set("edition", 6)        // 键是字符串
m.set(262, "standard")     // 键是数值
m.set(undefined, "nah")    // 键是undefined
```
>set方法返回的是Map本身，因此可以采用链式写法。  
get(key)方法读取key对应的键值，如果找不到key，返回undefined。  
has(key)方法返回一个布尔值，表示某个键是否在Map数据结构中。  
delete(key)方法删除某个键，返回true。如果删除失败，返回false。  
clear()方法清除所有成员，没有返回值。


*   map遍历方法

>Map原生提供三个遍历器生成函数和一个遍历方法。  
keys()：返回键名的遍历器。  
values()：返回键值的遍历器。  
entries()：返回所有成员的遍历器。  
forEach()：遍历Map的所有成员。
[DEMO](https://github.com/shadow88sky/es6-study/blob/master/map.js)

##Generator

*   简介

>Generator函数有多种理解角度。从语法上，首先可以把它理解成，Generator函数是一个状态机，封装了多个内部状态。  
执行Generator函数会返回一个遍历器对象，也就是说，Generator函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历Generator函数内部的每一个状态。  
形式上，Generator函数是一个普通函数，但是有两个特征。一是，function命令与函数名之间有一个星号；二是，函数体内部使用yield语句，定义不同的内部状态（yield语句在英语里的意思就是“产出”）。
```javascript
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
var hw = helloWorldGenerator();
```
>上面代码定义了一个Generator函数helloWorldGenerator，它内部有两个yield语句“hello”和“world”，即该函数有三个状态：hello，world和return语句（结束执行）。  
然后，Generator函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。不同的是，调用Generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，遍历器对象（Iterator Object）。

*   next

>调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield语句（或return语句）为止。换言之，Generator函数是分段执行的，yield语句是暂停执行的标记，而next方法可以恢复执行。
```javascript
hw.next()
// { value: 'hello', done: false }
hw.next()
// { value: 'world', done: false }
hw.next()
// { value: 'ending', done: true }
hw.next()
// { value: undefined, done: true }
```
>上面代码一共调用了四次next方法。  
第一次调用，Generator函数开始执行，直到遇到第一个yield语句为止。next方法返回一个对象，它的value属性就是当前yield语句的值hello，done属性的值false，表示遍历还没有结束。  
第二次调用，Generator函数从上次yield语句停下的地方，一直执行到下一个yield语句。next方法返回的对象的value属性就是当前yield语句的值world，done属性的值false，表示遍历还没有结束。  
第三次调用，Generator函数从上次yield语句停下的地方，一直执行到return语句（如果没有return语句，就执行到函数结束）。next方法返回的对象的value属性，就是紧跟在return语句后面的表达式的值（如果没有return语句，则value属性的值为undefined），done属性的值true，表示遍历已经结束。  
第四次调用，此时Generator函数已经运行完毕，next方法返回对象的value属性为undefined，done属性为true。以后再调用next方法，返回的都是这个值。  
总结一下，调用Generator函数，返回一个遍历器对象，代表Generator函数的内部指针。以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。value属性表示当前的内部状态的值，是yield语句后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束。

*   yield*语句

>用来在一个Generator函数里面执行另一个Generator函数，我们需要用yield*语句。  
如果yield命令后面跟的是一个遍历器对象，需要在yield命令后面加上星号，表明它返回的是一个遍历器对象。这被称为yield*语句。
```javascript
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}
function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}
var gen = generator(10);
console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```
>运行结果就是使用一个遍历器，遍历了多个Generator函数，有递归的效果。
