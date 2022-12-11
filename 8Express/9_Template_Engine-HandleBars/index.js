// A template engine enables you to use static template files in your application.
// At runtime, the template engine replaces variables in a 
//template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.
// Some popular template engines that work with Express are Pug, Mustache, and EJS

//simple define - to work with dynamic website we use template engines
const express = require("express");
const path = require("path");
const hbs = require('hbs');
const app = express();
const port = 8000;

const staticPath = path.join(__dirname,"./public");
const templatePath = path.join(__dirname,"./Templates/views");
//built in middleware
app.use(express.static(staticPath));

//toset the view engine to hbs | view engine === template engine
//iske liye views folder banao
app.set('view engine','hbs'); 
//but i have put views folder in Templates folder so use below code
app.set('views',templatePath);


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