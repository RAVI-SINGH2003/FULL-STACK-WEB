const { doesNotMatch } = require('assert');
const express = require('express');
const path = require('path')
const app = express();
const port=8000;

app.use(express.urlencoded({extended : false}))

// CRUD = post get put delete

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'));
});

app.post('/api/v1/login',(req,res)=>{
  const userName = req.body.name ;
  console.log(userName)
  res.send("done !!!!!1")
});



app.listen(port,'127.0.0.1',()=>{
    console.log('listening at port 8000')
});