///////// THAPA TECHNICAL  NODEJS COURSE//////////////////
// console.log("welome to my channel :)");

// ##################### REPL ##################
//READ EVAL PRINT LOOP _ give old ans to activate repl write node


// ############# file system core module ##############################
// const fs = require("fs");

/* write data to a file -previous data will be erased*/

// 1.) if file is present new file is created
// 2.) if file is present data is overridden

// fs.writeFileSync('read.txt','welcome to my channel');
// fs.writeFileSync('read.txt','thapa technical , welcome to my channel');

/* append data in a file-previous data + new data */

//1.)fs.appendFileSync creates and add data to file if file is not present
// 2.) fs.appendFileSync() append data to the file if present
//3.) jitni bar is code ko chalega utni bar append hote jaega data

// fs.appendFileSync('read.txt',' how are you I am fine Thank you :)');


/* read data from file */

// const buf_data = fs.readFileSync('read.txt')
// console.log(buf_data);
// output :-
/*<Buffer 74 68 61 70 61 20 74 65 63 68 6e 69 63 61 6c 20 2c 20 77 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 63 68 61 6e 6e 65 6c 0a 20 68 6f 77 20 61 72 65 20 79 ... 26 more bytes> */

//Node.js includes an additional data type called buffer
//Buffer is to store binary data.
//while reading from a file or receiving packets over the network

/* ************* read original data using toString() **************/
// const buf_data = fs.readFileSync('read.txt')
// const org_data = buf_data.toString();
// console.log(org_data);

/* ************* read original data using 'utf-8 decoding' **************/
// const fs = require("fs")
// const org_data = fs.readFileSync('read.txt','utf-8');
// console.log(org_data);



/* renaming a file */
// fs.renameSync('read.txt','readme.txt');





