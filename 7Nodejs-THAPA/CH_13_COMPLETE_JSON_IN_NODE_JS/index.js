//JSON stands for JavaScript Object Notation
//JSON is a lightweight format for storing and transporting data
//Json is often used when data is sent from a server to a webpage.
//json is like object put key have double quotes

//################ converting object into json ###########
// const bioData ={
//     name : "ravi",
//     age : 12,
//     address :"janakpuri"
// };
// console.log(bioData);
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData)

/*can not access json data directly so below line will not work */
// console.log(jsonData.address);

//################# coverting json to object ###################
// const objData = JSON.parse(jsonData);
// console.log(objData);
// console.log(objData.address);

// ################### TASK ####################
// const bioData ={
//     name : "ravi",
//     age : 12,

//     address :"janakpuri"
// };

// 1 : convert to JSON
// 2 : dusre file me add kardena
// 3 : readfile
// 4 : again convert back to js object
// 5 : console.log
// const jsonData = JSON.stringify(bioData);
// const fs = require("fs");
// fs.writeFile("json1.json",jsonData,(err)=>{
//     if(err===null)
//     console.log("json1 created");
//     else
//     console.log("err");
// });

// fs.readFile("./json1.json",'utf-8',(err,data)=>{
    
//     console.log(data);
//     const orgData =  JSON.parse(data);
//     console.log(orgData)
// })
