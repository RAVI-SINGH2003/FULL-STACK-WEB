//EACH FILE IN NODEJS IS A SEPERATE MODULE
//SO index.js and oper.js is module

//1.========== importing only add function===========
// const add = require('./oper');
// console.log(add(5,5))


//2.========== importing add and sub and namefunction===========
// const oper = require('./oper.js')
// console.log(oper)
// console.log(oper.add(5,5));
// console.log(oper.sub(10,9))
// console.log(oper.name)


//3.============ importing add sub name using shorter code=========
// const {add,sub,name} = require('./oper.js')
// console.log(add(5,5));
// console.log(sub(10,9));
// console.log(name);