const express = require("express");
const fs = require('fs');
const app= express();
const jsonData = fs.readFileSync('./package.json','utf-8'); //this is string
const objData = JSON.parse(jsonData); //this is a object



app.get('/',(req,res)=>{

    res.send('this is home page')
})
app.get('/about',(req,res)=>{

    res.send('this is about page')
})
app.get('/contact',(req,res)=>{

    res.send('this is contact page')
})
app.get('/json',(req,res)=>{
    res.send(objData); //here res.send converted objData to json
    // res.send([{name:'ravi',id : '1'}]); //gives json
    // res.json([{name:'ravi',id : '1'}]); //also gives json
})
app.all('*',(req,res)=>{

    res.status(404).send('this is error page')
})
app.listen(3000);