// console.log("hello world")
///////////////Event Bubbling  or Event propogation

// const grandparent = document.querySelector(".grandparent")
// const parent = document.querySelector(".parent")
// const child = document.querySelector(".child")
// child.addEventListener("click",()=>{
//  console.log("clicked on child")
// })
// parent.addEventListener("click",()=>{
//  console.log("clicked on parent")
// })
// grandparent.addEventListener("click",()=>{
//  console.log("clicked on grandparent")
// })
// document.body.addEventListener("click",()=>{
//  console.log("clicked on document.body")
// });

///////////////Event Capture ///////////////////////////////////

//captured events by addinng third argument as true in addEventListener("click",()=>{},true)
// const grandparent = document.querySelector(".grandparent")
// const parent = document.querySelector(".parent")
// const child = document.querySelector(".child")
// child.addEventListener("click",()=>{
//  console.log("capture on child")
// },true)
// parent.addEventListener("click",()=>{
//  console.log("capture on parent")
// },true)
// grandparent.addEventListener("click",()=>{
//  console.log("capture on grandparent")
// },true)
// document.body.addEventListener("click",()=>{
//  console.log("capture on document.body")
// },true)

///not captured events
// child.addEventListener("click",()=>{
//  console.log("bubbling on child")
// })
// parent.addEventListener("click",()=>{
//  console.log("bubbling on parent")
// })
// grandparent.addEventListener("click",()=>{
//  console.log("bubbling on grandparent")
// })
// document.body.addEventListener("click",()=>{
//  console.log("bubbling on document.body")
// })

// ################### Event Delegation #####################
const grandparent = document.querySelector(".grandparent")
grandparent.addEventListener("click",(e)=>{
   console.log(e.target)
});
