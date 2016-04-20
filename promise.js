'use strict';
var fs = require('fs');
var read = ()=> new Promise((resolve, reject) => {
                      fs.readFile('./README.md', 'utf-8', (err, data) => {
                      resolve(data);
                      })
})

var read2 = ()=> new Promise((resolve, reject) => {
fs.readFile('./class.js', 'utf-8', (err, data) => {
resolve(data);
})
})

////read().then((msg)=>{console.log(msg)});
var test = function *(){
    console.log('begin');
    var data = yield read();
    console.log(data);
    var c = yield read2();
    console.log(c);
    console.log(123)
}



function run(generator) {
    var it = generator();
    
    function go(result) {
        if (result.done) return result.value;
        
        return result.value.then(function (value) {
            return go(it.next(value));
        }, function (error) {
            return go(it.throw(value));
        });
    }
    
    go(it.next());
}

run(test);
