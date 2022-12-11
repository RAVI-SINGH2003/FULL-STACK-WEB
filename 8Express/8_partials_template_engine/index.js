
const express = require("express");
const path = require("path");
const hbs = require('hbs');
const app = express();
const port = 8000;

const staticPath = path.join(__dirname,"./public");
const templatePath = path.join(__dirname,"./Templates/views");
const partialsPath = path.join(__dirname, './Templates/partials')

app.use(express.static(staticPath));

app.set('view engine','hbs'); 
app.set('views',templatePath) 
hbs.registerPartials(partialsPath);



app.get("/",(req,res)=>{
    res.render('index.hbs',{
    Person : "Dog Hospital"
    });
});

app.get("/",(req,res)=>{
 res.send("hello from the express server");
});
app.listen(port,()=>{
  console.log(`listening to port ${port}`)
})