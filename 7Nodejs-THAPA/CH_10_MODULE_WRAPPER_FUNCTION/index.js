// grouping operator ()
// Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like the following 
// all variables inside it is private

// (function(exports,require,module,__filename,__dirname){
//   const name = 'ravi';
//   console.log(name);
//   const fs = require("fs");
//   module.exports = {dfdfdf};
// });

// ##########################################################
//bonus :about IIFE

//THIS IS IIFE(Immediately invoked function expression) OF JAVASCRIPT 
//using () at last of iife function will be automatically called
(function(){
    var a = "ravi singh";
    console.log(a);
})();

//a has become private  so error : a is no defined 
console.log(a);



