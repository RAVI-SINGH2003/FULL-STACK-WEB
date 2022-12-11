//------------------- File create and add data -------------
// const  fs = require("fs");
//when we work asynchronously we have to use callback
// fs.writeFile('read.tt','Today is the awesome day',
// (err)=>{
//  console.log('file is created')
//  console.log(err)
// });

//function as an argument is callback
//once the file is created call back check if there us error or file creation is successful.

//----------------------------Data append ----------------------------
// const  fs = require("fs");
// fs.appendFile('read.txt',' This is appended text', 
// (err) =>{
//  console.log("task completed");
// })

//-------------------------- data read -----------------------------
// const  fs = require("fs");
//  fs.readFile('read.txt',"utf-8",
// (err,data)=>{
//     if(err==null)
//     console.log(data);
//     else
//     console.log("Error while reading file")
// });
