
// ##################### add eventlistener to multiple buttons ###################
// const allButtons = document.querySelectorAll(".my-buttons button")
// console.log(allButtons);
//Method - 1 for of loop
// for(let button of allButtons ){

//     button.addEventListener("click",function(){
//         console.log(this) /*this is button itself*/
//         console.log(this.textContent)
//     })
// }

//Method - 2 traditional for loop
// for(let i=0;i<allButtons.length;i++){
//     allButtons[i].addEventListener("click",function(){
//         console.log(this)
//         console.log(this.textContent)
//     })
// }

//Method -3 forEach loop
// allButtons.forEach(function(button){
//     button.addEventListener("click",function(){
//         console.log(this)
//         console.log(this.textContent)
//     })
// })

// ################ event object ####################
// const firstButton = document.querySelector("#one")
// firstButton.addEventListener("click",function(){
//     console.log(this)
//      console.log(this.textContent)
// })

//event object : -
//jab bhi mai kisi bhi element pe eventlistenser add hoga
//js Engine ------------> line by line execute
//browser -----------> js Engine + extra features
//browser ------------> js Engine +WebApi

//jab browser kp pata chala ki user ne event perform kiya 
//jo hum listen kar rahe the 
//browser do 2 tasks
//1.) callback function hai vo js Engine ko dega
//2.) call back function ke sath browser vo jo event hua hai uski info bhi dega
//ye info object ki form me milegi



// const firstButton = document.querySelector("#one")
// firstButton.addEventListener("click",function(e){
//     console.log(e); /* e is an object */
//     console.log(this)
//      console.log(this.textContent)
// })


// const allButtons = document.querySelectorAll(".my-buttons button")
// for(let button of allButtons ){
//     button.addEventListener("click",function(){
//         // console.log(this)
//         console.log(this.textContent)
//     })
// }

// e object and e.target => gives element which fire event and e.currenttarget gives element on which eventListener is added
// const allButtons = document.querySelectorAll(".my-buttons button")
// for(let button of allButtons ){
//     button.addEventListener("click",(e)=>{
//         console.log(e)
//         console.log(e.target)
//         console.log(e.currentTarget)
//     })
// }

// ############################ event Behind the objects ########################
// console.log("script start!!!!!!!!")
// const allButtons = document.querySelectorAll(".my-buttons button")
// // console.log(allButtons);
// allButtons.forEach((button)=>{
//     button.addEventListener("click",(e)=>{
//         let num = 0;
//         for(let i=0;i<=100000000;i++){
//             num+=i;
//         }
//         console.log(e.currentTarget.textContent,num);

//     })
// })
// let outerVar =0;
// for(let i=0;i<=100000000;i++){
//     outerVar+=i;
// }


// console.log("value of outer variable is",outerVar)
// console.log("script end !!!!!!!!")

// ################ event listener practice ##############
//when i click on any button do its background yellow and color gray

// const allButtons = document.querySelectorAll(".my-buttons button")
// console.log(allButtons);
// allButtons.forEach((button)=>{
//     button.addEventListener("click",(e)=>{
//         e.target.style.backgroundColor = "yellow";
//         e.target.style.color="#555";
//     })
// })

// ######### from here go to little demo folder #######



