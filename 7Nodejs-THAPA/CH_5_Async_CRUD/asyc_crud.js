//Challenge Time

//1:Create a folder name it Thapa
//2:Create a file in it named bio.txt and data into it.
//3:Add more data into the the file at the end of the existing data.
//4:Read the data without getting the buffer data at first
//5:Rename the file name to mybio.txt
//6:now delete both the file and the folder.

// const fs = require("fs");

// 1.) creating Thapa folder

// fs.mkdir('Thapa',(err)=>{
//     if(err===null)
//     console.log("Thapa folder created");
//     else
//     console.log('ERROR WHILE MAKING FOLDER : ',err);
// })

//2.)Create a file in it named bio.txt and data into it.

// fs.writeFile('Thapa/bio.txt','bio.txt created using async fs method',(err)=>{
//     if(err === null)
//     console.log("bio.txt file created");
//     else
//     console.log('ERROR WHILE CREATING FILE : ',err);
// });

//3.) Add more data into the the file at the end of the existing data.
// fs.appendFile('Thapa/bio.txt',' I am appended text',(err)=>{
//     if(err === null)
//     console.log("text appended in bio.txt");
//     else
//     console.log(err);
// })

// 4.) Read the data without getting the buffer data at first
// fs.readFile('Thapa/bio.txt','utf-8',(err,data)=>{
//     if(err===null)
//     console.log(data);
//     else
//     console.log('Error while reading file!!!!!!!!!!1 : ',err );
// })

// 5.) Rename bio.txt to mybio.txt

// fs.rename('Thapa/bio.txt','Thapa/mybio.txt',(err)=>{
    // if(err===null)
    // console.log("Rename successful");
    // else
    // console.log(err);
// })

// 6.) delete mybio.txt
// fs.unlink('Thapa/mybio.txt',(err)=>{
//     if(err===null)
//     console.log("deleted file successfully");
//     else
//     console.log('ERROR WHILE DELETING FILE : ',err);
// })

// 7.) delete Thapa folder

// fs.rmdir('Thapa',(err)=>{
//  if(err===null)
//  console.log("Folder deleted successfully")
//  else
//  console.log('ERROR WHILE DELETING FOLDER : ' , err);
// });