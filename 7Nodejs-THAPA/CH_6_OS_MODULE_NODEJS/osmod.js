const os = require("os");

//gives architecture
console.log(os.arch());

//gives amount of free mem
const freeMemory= os.freemem();
console.log(`${freeMemory/1024/1024/1024}`);


//total memory
const totMemory = os.totalmem();
console.log(totMemory);

//know host name
console.log(os.hostname())

//on which platform we are working
console.log(os.platform())

//os temp folder path
console.log(os.tmpdir())

console.log(os.homedir())
console.log(os.release())
console.log(os.type())