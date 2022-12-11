//nodesjs provides capabilities to create your own web server which will handle http request asynchronously .You can use iis or Apache to run Node.js web application but it is recommnded to use Node.js web server
//the http.createServer() method includes request and response parametrs which is supplied by Node.js

//The request object can be used to get information about the 
// current HTTP request 
//e.g..url, request header,and data.

//all things that we have required till now is like object only so http here is also an object

const http = require("http");

// console.log(typeof http); object

const server = http.createServer((request ,response)=>{
    response.end('Hello from the other side');
});

// listen(unusedportno,localhost means 127.0.0.1)

//listening to the request
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});


