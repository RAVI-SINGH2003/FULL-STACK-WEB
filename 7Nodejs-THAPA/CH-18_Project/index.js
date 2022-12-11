const http = require("http");
const fs = require("fs");
 
//requires package for routing 
var requests = require("requests");

const homeFile = fs.readFileSync("./home.html","utf-8");
// console.log(typeof homeFile);
const replaceVal =(tempVal ,orgVal)=>{
    let temperature = tempVal.replace("{%tempval%}",(orgVal.main.temp- 273.15).toFixed(2));
    temperature = temperature.replace("{%tempmin%}",(orgVal.main.temp_min- 273.15).toFixed(2));
    temperature = temperature.replace("{%tempmax%}",(orgVal.main.temp_max- 273.15).toFixed(2));
    temperature = temperature.replace("{%country%}",orgVal.sys.country);
    temperature = temperature.replace("{%location%}",orgVal.name);

    temperature = temperature.replace("{%tempstatus%}",orgVal.weather[0].main);
    return temperature;
}
const server = http.createServer((req,res)=>{
    if(req.url ==="/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=new%20delhi&appid=587dd54ad6559eba772989fcf060992d")
        .on('data', (chunk)=> {
            const objData = JSON.parse(chunk);
            const arrData = [objData];
            //  console.log((arrData[0].main.temp - 273.15).toFixed(2))
            const realTimeData  = arrData.map((val) => replaceVal(homeFile,val)).join("");  
            res.write(realTimeData);
            console.log(realTimeData);
        })
        .on('end', (err)=> {
        if (err) return console.log('connection closed due to errors', err);
         res.end();
        });
    }
    else{
        res.end("File not found");
    }

});

server.listen(8000,'127.0.0.1');