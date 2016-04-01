'use strict';
var a = 5;
var b = 10;
if (a === 5) {
    let a = 4; // The scope is inside the if-block
    var b = 1; // The scope is inside the function
    console.log(a);  // 4
    console.log(b);  // 1
}
console.log(a); // 5
console.log(b); // 1

for (let i = 0; i < 10; i++) {
    console.log(i); // 0, 1, 2, 3, 4 ... 9
}
console.log(i); // i is not defined