//JavaScipt is synchronous programming language 
//It is single-threaded


// ##################### setTimeout #####################
//observe the output
//setTimeout and setInterval is the featture of browser
//js browser se kahegi ki ye setTimeout or setInterval tera kam hai
//jo delay humne settime out and setinterval me diya hai jab utna time ho jaye to 
//mujhe setime out and setInterval ke andar ka call back dediyo jab tak mai aage ki file execute karti hu
//jab utna time ho jaega to browser callback ko callback queue me dal dega.
//ab event loop check karega ki js ne puri file execute kar li hai ya nahi. uske bad hi callback ko
//callback queue se js ke GEC( Global Execution Context) me dega.
//to iska matlab ye hai ko set Timeout and setInterval ka call back humesha last me hi execute hoga
//jab puri js file execute ho gayi hogi


// console.log("script start");
// setTimeout(()=>{
//     console.log("Hello World");
// },1000);
// console.log("Script end")

//observe the output; 
// console.log("Script start!!!!!!!");
// setTimeout(()=>{
//     console.log("inside setTimeeout");
// },0);
// for (let i = 0; i <100; i++) {
//     console.log("...");
// }
// console.log("Script end!!!!!!!")

// id of setTimeout
// console.log("Script start!!!!!!!");
// const id = setTimeout(()=>{
//     console.log("inside setTimeeout");
// },1000);
// for (let i = 0; i <100; i++) {
//     console.log("...");
// }
// console.log("setTimeout id : ",id);
// console.log("clearing time out");
// clearTimeout(id);
// console.log("Script end!!!!!!!");

//  ######################### setInterval ##############

//////////// observe the output /////////////////
// console.log("Script start");
// setInterval(()=>{
//     console.log(Math.floor(Math.random()*11));
// },1000)
// console.log("Script end");

////////////// observe the output //////////////
// console.log("Script start");
// let total=0;
// for(let i=0;i<100000000;i++){
//     total+=i;
// }
// console.log(total)
// const id= setInterval(()=>{
//     console.log(Math.floor(Math.random()*11));
// },1000)

// console.log("Script end");

//////////// id of clearInterval ////////////////
// console.log("Script start");
// let total=0;
// for(let i=0;i<100000000;i++){
//     total+=i;
// }
// console.log(total)
// const id= setInterval(()=>{
//     console.log(Math.floor(Math.random()*11));
// },1000)
// clearInterval(id);
// console.log("Script end");


