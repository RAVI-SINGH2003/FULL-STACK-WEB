//--------------------- Synchronous version ----------------------
// observe the output
//first Hello friends I am learning Nodejs
//then after the data

// const fs = require('fs');
// const data = fs.readFileSync('read.txt','utf-8');
// console.log(data);
// console.log('after the data');

//--------------------- Asynchronous version ----------------------

// observe the output
//first after the data
//then Hello friends I am learning Nodejs
//kynki read ho raha hai jab tak data tab tak baki js file execute hogi

// const fs = require('fs');
// fs.readFile('read.txt','utf-8',
// (err,data)=>{
//     if(err===null)
//     console.log(data);
//     else
//     console.log(err,'There is an error')
// });

// console.log('after the data');


