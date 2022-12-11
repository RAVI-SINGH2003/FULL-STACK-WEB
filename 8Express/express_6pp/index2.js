
const express = require('express');
const path = require('path')
const app = express();
const port=8000;

app.use(express.urlencoded({extended : false}))
app.use(express.json())

// CRUD = post get put delete

//getapi
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'./index2.html'));
});

//post api
app.post('/api/v1/register',(req,res)=>{
  const  userName = req.body.name;
  const  userEmail = req.body.email;
  const  userpassword = req.body.password;
  res.json({
    success : true,
    name :userName,
    email:userEmail,
    password : userpassword,

  })
});



app.listen(port,'127.0.0.1',()=>{
    console.log('listening at port 8000')
});