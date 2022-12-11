const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Sample")
.then(()=>{
    console.log("Connected to MongoDB successfully",);
})
.catch((err)=>{
console.log(err);
});
//----------------- creating schema---------------------------- 
const student = new mongoose.Schema({
name :String,
workout :Boolean,
height:Number
})

//--------------------- creating model or collection-------------------------------

//model - like collection
//mongoose.model(modelname,schema)

const Student = mongoose.model("Student",student)

//-------------------------- creating document -------------------------
//insertion method -1
// Student.insertMany([
//   {
//     name : 'ravi singh',
//     marks :100
//   },
//   {
//     name :'saloni singh',
//     marks :50
//   },
//   {
//     name :'dk singh',
//     marks :78
//   }]
// )
// .then((res)=>{
//     console.log('data inserted',res)
// })
// .catch((err)=>{
//     console.log(err);
// })

//insertion method 2
// const student1 = new Student({
//     name :'akshay',
//     marks :100000000000
// })

// student1.save((err,res)=>{
//     if(err) console.log(err);
//     else console.log(res)
// })

//insertion method 3
// const adder = async()=>{
//     const ss = new Student({

//         name : "ravi",
//         workout :true,
//         height :6
//     })
//     await ss.save();
// }
// adder();

//insertion method 4
// const adder = async()=>{
//     const ss = await Student.create({
//         name : "ravi singh",
//         workout :true,
//         height :6
//     });

//     console.log(ss);
// }
// adder();

//---------------------- reading documents----------------------

// const adder = async()=>{
//     const ss = await Student.find();

//     console.log(ss); //return array of documents
//     console.log()
// }


// adder();

//------------------------- complex things ------------------------
// const adder = async()=>{
    // const ss = await Student.find({height: {$lt : 10}})
    // const ss = await Student.find({height: {$lt : 10}})
    // const ss = await Student.find({height: {$lte : 10}})
    // const ss = await Student.find({height: {$gt : 10}})
    // const ss = await Student.find({height: {$gte : 10}})
    // const ss = await Student.find({height: {$in : [5,6]}})
    // const ss = await Student.find({height: {$nin : [5,6]}})
    // console.log(ss);
// }
// adder();