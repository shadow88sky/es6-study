#ES6-Study
>公司的项目一直是用的低版本的Node，所以虽然高版本的Node已经支持了ES6的语法，可是自己确没有认真的学习过。
>最近接了个私活，打算用ES6来写，所以打算摸索起来，做个备注，希望对别的同学也有一点用。

##严格模式
在4.x、5.x的Node版本中，ECMAScript 6中的一些特性，必须在严格模式下，才可以使用，而不报错。
所以我们在js文件中，必须添加"use strict"来开启严格模式

##let
let 允许把变量的作用域限制在块级域中。与 var 不同处是：var 申明变量要么是全局的，要么是函数级的，而无法是块级的。
[demo](https://github.com/shadow88sky/es6-study/blob/master/let.js)
