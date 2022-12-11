//api is application proogramming interface ,which is a software intermediary
// that allows two applications to talk to each other.Each time you use an app like faceboook,
// send an instant message,or check the weather on your phone ,you are using an API

//api is a service which  allows us to request for data.

//now we have created our own api userapi.json and now we will request for info from api 
//using fs
// const fs = require("fs");
// const http = require("http");
// const server = http.createServer((request,response)=>{
    
//     if(request.url==="/")
//     {
//         response.end('Hello from other sides');
//     } 
   
//     else if(request.url==="/about")
//     {
//         response.end('Hello from AboutUs sides');  
//     }
//     else if(request.url==="/about/contact")
//     {
//         response.end('Hello from CONTACT sides');  
//     }
//     else if(request.url==="/userapi")
//     {   fs.readFile(`${__dirname}/UserApi/userapi.json`,"utf-8",(err,data)=>{
//         console.log(data);
//         const objData = JSON.parse(data);
//         console.log(objData);
//         response.end(`<h1>${objData[0].userId}</h1>`);  
//         })
         
//     }
//     else
//     {   response.writeHead(404,{"Content-type" : "text/html"}); 
//         response.end('<h1>404 error page.page does not exist</h1>')
//     }

// });

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening to the port no 8000");
// });

// ########## above code call api again and again we refresh page to avoid that we will use readFileSync ##########
const http = require("http");
const fs = require("fs");
const Data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`,"utf-8");
const objData = JSON.parse(Data);
const server = http.createServer((request,response)=>{
    
    if(request.url==="/")
    {
        response.end('Hello from other sides');
    } 
   
    else if(request.url==="/about")
    {
        response.end('Hello from AboutUs sides');  
    }
    else if(request.url==="/about/contact")
    {
        response.end('Hello from CONTACT sides');  
    }
    else if(request.url==="/userapi")
    {  
        
        response.writeHead(200,{"Content-type" : "application/json"});
        response.end(objData[0].body);              
    }
    else
    {   response.writeHead(404,{"Content-type" : "text/html"}); 
        response.end('<h1>404 error page.page does not exist</h1>')
    }

});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});
