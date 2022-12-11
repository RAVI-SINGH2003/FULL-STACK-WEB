const express = require("express");
const path = require('path');
const app = express();

//static is a middle ware serve static files

app.use(express.static('./public'));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./index.html'));
});
app.get('/about',(req,res)=>{
    res.send('about page');
});
app.get('/contact',(req,res)=>{
    res.send('contact page');
});

app.all("*",(req,res)=>{
    res.status(404).send('<h1> error</h1>')
})

app.listen(8000,'127.0.0.1',()=>{
    console.log("Running");
})