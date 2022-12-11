// Routing refers to how an application's endpoints (URIs) respond to client requests. (http)

/* requiring http module */
// const http = require("http");
// const server = http.createServer((request,response)=>{
//    /* request.url give current url in url bar of vrowser uske liye ek bar browser refresh */
//     console.log(request.url)
//     response.end('Hello again');
// });

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening to the port no 8000");
// });

//-------------------------------------------------------------------
const http = require("http");
const server = http.createServer((request,response)=>{
    // '/' here means localhost:8000
    // console.log(request.url);
    if(request.url==="/")
    {
        response.end('Hello from other sides');
    } 
    //'/about' means localhost:8000/about
    else if(request.url==="/about")
    {
        response.end('Hello from AboutUs sides');  
    }
    else if(request.url==="/about/contact")
    {
        response.end('Hello from CONTACT sides');  
    }
    else
    //AGAR AiSE WEBPAGE KA URL DEDIYA JO EXIST NAHI KaRTA  hai web server me LIKE localhost:8000/whatsapp
    //to us case me 404 error le aaega  writeHead() method network tab me request headers tab me aur console me bhi
    {   response.writeHead(404,{"Content-type" : "text/html"}); 
        response.end('<h1>404 error page.page does not exist</h1>')
    }

});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});
