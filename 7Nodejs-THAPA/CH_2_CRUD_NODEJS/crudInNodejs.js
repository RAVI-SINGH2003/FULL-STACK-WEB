//Challenge Time

//1:Create a folder name it Thapa
//2:Create a file in it named bio.txt and data into it.
//3:Add more data into the the file at the end of the existing data.
//4:Read the data without getting the buffer data at first
//5:Rename the file name to mybio.txt
//6:now delete both the file and the folder.

// const fs = require('fs');
// 1.)
// fs.mkdirSync('Thapa');

// 2.)
// fs.writeFileSync('Thapa/bio.txt','This is a bio file');

// 3.)
// fs.appendFileSync('Thapa/bio.txt',' Appended Data')

// 4.)
// const bioData = fs.readFileSync('Thapa/bio.txt','utf-8');
// console.log(bioData);

// 5.)
// fs.renameSync('Thapa/bio.txt','Thapa/mybio.txt');

// 6.) delete mybio.txt
// fs.unlinkSync('Thapa/mybio.txt');

//7.)
// fs.rmdirSync("Thapa")

//agar folder aur file ek bar  me delete jkarna hai ti
// fs.rmdirSync("Thapa",{recursive:true})

//agar nested diretries banani hai to 
// fs.mkdirSync("folder1/folder2/folder3",{recursive : true})



