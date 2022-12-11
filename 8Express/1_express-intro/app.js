//-express intro---------------------
// const express = require('express');
// const app = express();
// app.get('/',(req,res)=>{
//     res.status(200).send('This is home');
// })
// app.get('/about',(req,res)=>{
//     res.status(200).send('This is about');
// })
// app.all('*',(req,res)=>{
//    res.status(404).send('<h1> error</h1>');
// })

// app.listen(8000,'127.0.0.1',()=>{
//     console.log("listening at port 8000");
// })


//static file serving by reading data from index.html using express

// const express = require("express");
// const fs = require("fs");
// const app = express();

// const indexhtml = fs.readFileSync("./index.html","utf-8");
// console.log(indexhtml);

// app.get('/' ,(req,res)=>{
//     res.status(200).send(indexhtml);
// })

// app.listen(8000,'127.0.0.1',()=>{
//     console.log("listening at port 8000");
// })

//--------------------------------------------------------------
//static file serving by using sendFile with path of file using express

// const express = require("express");

// const path = require('path');
// const fs = require("fs");
// const app = express();

// console.log(indexhtml);

// app.get('/' ,(req,res)=>{
//     const filepath = path.join(__dirname,"./index.html");
//     res.status(200).sendFile(filepath);
// })

// app.listen(8000,'127.0.0.1',()=>{
//     console.log("listening at port 8000");
// })
