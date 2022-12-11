//Streams are object that let you read data from a source 
//or write data to a destination in continuous faishon.
// In Nodejs there are 4 types of streams -
// Streaming means listening to music or watching video in 'real time' instead
// of  downloading a file to your computer and watching it later

//Readable - Stream which is used for read operation
//Writable - Stream which is used for write opeartion
//Duplex - Stream which can be used for write operation
//Transform - A typpe of duplex stream where the output is computed based on input.

// Node.js streams
//Exch type of stream is an EventEmitter unstance and throws several 
//events at different instance of times.For example, some of the commonly used events are-

//data - This event is fired when there is data is available to read
//end - This event is fired when there is no more data to read
//error - This is event when there is any error receiving or writing data.
//finish - This event is fired when all the data has been fuushed to underlying system.

// const fs = require("fs");
// const http = require("http");

// const server = http.createServer();
// server.on('request',(req,res)=>{
//     fs.readFile("./input.txt",(error,data)=>{
//         if(error) return console.error(error);
//         res.end(data.toString());
//     })
// })
// server.listen(8000,'127.0.0.1')


//---------------------- streaming method --------------------------
// const fs = require("fs");
// const http = require("http");

// const server = http.createServer();
// server.on('request',(req,res)=>{
//      const rstream = fs.createReadStream('./input.txt');
//      rstream.on('data',(chunkdata)=>{
//         res.write(chunkdata);
//      });
//      rstream.on('end',()=>{
//         res.end();
//      });
    
//      rstream.on('error',(err)=>{
//         console.log(err);
//         res.end("file not found");
//      });
// });
// server.listen(8000,'127.0.0.1')

