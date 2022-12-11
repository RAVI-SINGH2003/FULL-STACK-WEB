
// ############################################ from cwh one shot video ##########################

// 1.Ways to print in JS 
// document.write('this is document.write')
// alert('this is an alert)
// console.log('hello');


//2.Javascript  console API
// console.warn('This is a warning')
// console.error('This is an error')
// console.clear();

// ############################ DOM MANIPULATION ##########################
// let elem = document.getElementById('click');
// console.log(elem);

// let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);

// let elemTag= document.getElementsByTagName('button')
// elemTag = document.getElementsByTagName('div')
// console.log(elemTag);

// elemClass[0].style.backgroundColor = "yellow";

// adding class bg-primary and text-success in class of elemclass[0] element
// elemClass[0].classList.add('bg-primary')
// elemClass[0].classList.add('text-success');

//removing class
// elemClass[0].classList.remove('text-success');

//accessing innerhtml in elemclass[0];
// console.log(elemClass[0].innerHTML);

// accessing innerText
// console.log(elemClass[0].innerText);



//-----------------------------------------------------------
//add child
// tn= document.getElementsByTagName('div')
// createdElement = document.createElement('p');
// createdElement.innerText  ="This is created paragraph"
// tn[0].appendChild(createdElement);

//---------------------------------------------------------

//replace child
// tn= document.getElementsByTagName('div')
// createdElement = document.createElement('p');
// createdElement.innerText  ="This is created paragraph";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// createdElement2.innerText  ="This is created bold"
// tn[0].replaceChild(createdElement2 ,createdElement);

//------------------------------------------------------------
//remove child
// tn= document.getElementsByTagName('div')
// createdElement = document.createElement('p');
// createdElement.innerText  ="This is created paragraph"
// tn[0].appendChild(createdElement);
// tn[0].removeChild(createdElement)

//More properties of DOM
//document.location
//document.title
//document.scripts
//document.domain
//document.links
//document.forms
//document.images

//selecting using query
// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);

// ############################# EVENTS IN JAVASCRIPT #######################

//1. onclick in HTML 
// function clicked(){
//     console.log("The button was clicked")
// }

//2.window.onload
// window.onload = function(){
//     console.log("The document was loaded");

// }

// 3.click

//method1
// document.getElementById("firstContainer").addEventListener('click',function(){
//     console.log("firstContainer clicked");
// })

//Method 2 : because firstContainer is id we can use it directly
// firstContainer.addEventListener('click',function(){
//     console.log("firstContainer clicked");
// })

// 4.mouseover
// firstContainer.addEventListener('mouseover',function(){
//     console.log("Mouse inside firstContainer")
// })

// 5.mouseout
// firstContainer.addEventListener('mouseout',function(){
//     console.log("Mouse out of firstContainer")
// })

// 6.mouseup
// firstContainer.addEventListener('mouseup',function(){
//     console.log("Mouseup on firstContainer")
// })
// 7.mousedown
// firstContainer.addEventListener('mousedown',function(){
//     console.log("Mousdown on firstContainer")
// })

//8.Example
// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> We have Clicked </b>"
// })

//9.
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     console.log("Mouseup on firstContainer")
// })

// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked </b>"
//     console.log("Mousdown on firstContainer")
// })

//---------------------------------------------------------------------------------
// 1.setTimeout  ===========>

// fun1 = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML="<b>SetTimeout fired</b>"
//     console.log("I am fun1")
// }

//after 2000 ms fun1 will run (only one time)
// clr =setTimeout(fun1 ,2000)

//to stop setTimeout to execute fun1 after 2000ms use clearTimeout
// clearTimeout(clr);

// 2.setInterval =========>

// fun2 = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML="<b>SetTimeout fired</b>"
//     console.log("I am fun2")
// }

// after every 2000 ms fun2 will run
// clr = setInterval(fun2,2000)

//to stop setInterval from executing fun2 after every 2000ms use clearInterval
// clearInterval(clr)


//----------------------------------------------------------------------------------------------

// JavaScript local Storage
// to view localstorage : localStorage
//to add key value pair in local storage :  localStorage.setItem('name','ravi');
//to view value of a key in localStorage :localStorage.getItem('name');
//to remove a key value pair in localStorage : localStorage.removeItem('name');
//to empty wholelocalStorage : localStorage.clear()

//-------------------------------------------------------------------------------------------------

// Json
//converting object in to json string
obj = {name : 'ravi' ,length:1 , a:{this : "that"}};
jso= JSON.stringify(obj);
// console.log(jso);
// console.log(typeof jso);

// parsed = JSON.parse(`{"name":"ravi","length":1,"a":{"this":"that"}}`);
// parsed = JSON.parse(jso);
// console.log(parsed ,typeof parsed);

//----------------------------------------------------------------------------------------------------------


