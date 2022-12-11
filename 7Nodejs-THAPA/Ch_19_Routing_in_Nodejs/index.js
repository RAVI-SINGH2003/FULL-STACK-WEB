const http = require('http');
const fs = require('fs');
const home = fs.readFileSync("./home.html","utf-8");
const about = fs.readFileSync("./about.html","utf-8");
const contact = fs.readFileSync("./contact.html","utf-8");
const server = http.createServer((req,res)=>{
    let url = req.url;
    res.writeHead(200,{"Content-type" : "text/html"})
    if(url==='/'){
        res.end(home);
    }
    else if(url==='/about'){
        res.end(about);
    }
    else if(url==='/'){
        res.end(contact);
    }
    else{
        // res.statusCode = 404;
        res.writeHead(200,{"Content-type" : "text/html"})
        res.end('<h1>404 File not found')
    }

});
server.listen(3000,'127.0.0.1',()=>{
    console.log("listening at port 3000");
});