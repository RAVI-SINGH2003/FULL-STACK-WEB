//keypress event
//mouseover ,mouseleave event


// keypress
const body = document.body;
body.addEventListener("keypress",(e)=>{
    console.log(e); /*e is here an object which is keyboardEvent*/
    console.log(e.key);  /*it has key property */
})

//mouseover  
const mainButton = document.querySelector(".btn-headline")
console.log(mainButton)

mainButton.addEventListener("mouseover",(e)=>{
  
    console.log("mouse over event fired")
})

// mouseleave
mainButton.addEventListener("mouseleave",(e)=>{
  
    console.log("mouse leave event fired")
})
