//adding data to file
// const {writeFileSync} = require('fs');
// for(let i=0;i<=10000;i++){
//     writeFileSync('./input.txt','This is me\n',{flag : 'a'});
// }


// const fs = require('fs');
// const rstream = fs.createReadStream('./input.txt');

// rstream.on('data',(result)=>{
//     console.log(result.toString());
// });

// rstream.on('error',(error)=>{
//     console.log(error, "\nThis is error");
// })

//------------------------------ read through pipe ----------------
const fs= require('fs');
const http = require('http');
const server = http.createServer();

server.on('request',(req,res)=>{
 //  const data = fs.readFileSync('./input.txt','utf-8'); 
 const fileStream = fs.createReadStream('./input.txt','utf-8');
   // This will wait until we know the readable stream is actually valid before piping
    fileStream.on('open',()=>{
        fileStream.pipe(res);
    })
     // This catches any errors that happen while creating the readable stream (usually invalid names)
    fileStream.on('error',(error)=>{
        res.end(error)
    })
});
server.listen(8000);