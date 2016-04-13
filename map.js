'use strict';
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (var key of myMap.keys()) {
console.log(key);
}
// Will show 2 logs; first with "0" and second with "1"

for (var value of myMap.values()) {
console.log(value);
}
// Will show 2 logs; first with "zero" and second with "one"

for (var item of myMap.entries()) {
console.log(item[0] + " = " + item[1]);
}
// Will show 2 logs; first with "0 = zero" and second with "1 = one"

myMap.forEach(function(value, key) {
    console.log(key + " = " + value);
}, myMap)
// Will show 2 logs; first with "0 = zero" and second with "1 = one"