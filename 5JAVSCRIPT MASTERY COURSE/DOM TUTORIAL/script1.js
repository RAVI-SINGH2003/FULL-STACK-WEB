//DOM 
//js create a document object and add it to window object
// console.log(window.document) /*document object */
// console.log(document)   /*same as above = can be accessed directly */

// ########### select element using getElementById() #################
//it gives us a object of html element having a partiular id
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);

// ########### select element using querySelector() #################
//it gives us a object of html element(s) having a partiular id or class

// const mainHeading = document.querySelector("#main-heading");
// const header = document.querySelector(".header");
// const navItem = document.querySelector(".nav-item");
// const navItemAll = document.querySelectorAll(".nav-item");
// console.log(mainHeading,header,navItem,navItemAll);

// ################ change text  : textContext and InnerText ###############
//mainheading is a object
// const mainheading = document.getElementById("main-heading");
// console.log(mainheading.textContent);  /* also shows hidden text = hello in span */
// console.log(mainheading.innerText)     /* do not display hidden text =hello in span */
// mainheading.textContent = "main-heading changed";
// console.log(mainheading.textContent);
// console.log(mainheading);

// #################### change the styles of elements ###################
// const mainHeading = document.querySelector("div.headline h2");
// console.log(mainHeading.style);
// mainHeading.style.backgroundColor ="blue";
// mainHeading.style.border = "20px solid green";

// ################### get and set attributes #####################
// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// console.log(link.getAttribute("href").slice(1));
// link.setAttribute("href","https://www.geeksforgeeks.org");
// console.log(link.getAttribute("href"));


// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));

// ################ get multiple elements using getElementsByClassName() ##########
// ############ get muliple elements using querySelectorAll ####################

/*getElementsByClassName returns HTMLCollection which is a array like object
so HTMLCollection will follow indexing and have length property*/

// const navItems = document.getElementsByClassName("nav-item");
// console.log(navItems[0]);
// console.log(navItems[1]);
// console.log(navItems[2]);
// console.log(Array.isArray(navItems));

/*querySelectorAll returns NodeList which is also a array like object*/
// const navItems = document.querySelectorAll(".nav-item");
// console.log(navItems);
// console.log(navItems[1]);

// ########################### loop in HTMLCollection ##############################
//Aim : to change color of links to green and background color to white

// const navItems = document.getElementsByTagName("a");
// console.log(navItems);

//navItems is a HTMLCollection
//can not use forEach method to iterate through HTMLCollection
// simple for loop
//for of loop
//can be used

//1.simple for loop
// for(let i=0;i<navItems.length;i++){
//  console.log(navItems[i]);
//  const navItem = navItems[i];
//  navItem.style.backgroundColor = "#fff";
//  navItem.style.color ="green";
//  navItem.style.fontWeight="bold"
// }

//2.for of loop
// for(let navItem of navItems){
    // navItem.style.backgroundColor = "#fff";
    // navItem.style.color ="green";
    // navItem.style.fontWeight="bold"
// }

//3.forEach can not be used
// navItems.forEach(navItem =>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color ="green";
//     navItem.style.fontWeight="bold"
    
// })

// 4.We can change the HTMLCollection to Array and then forEach can be used
// Array.from(navItems).forEach(navItem =>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color ="green";
//     navItem.style.fontWeight="bold"
// })

// ############################ loops in NodeList ####################
// let navItems = document.querySelectorAll("a");
// console.log(navItems);
//navItems is a NodeList
//we can apply :
//simple for loop
//for of loop
//forEach loop
//We can also change NodeList to Array

// 1.simple for loop
// for(let i=0;i<navItems.length;i++){
//  const navItem = navItems[i];
//  navItem.style.backgroundColor = "#fff";
//  navItem.style.color ="green";
//  navItem.style.fontWeight="bold"
// }

//2.for of loop
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color ="green";
//     navItem.style.fontWeight="bold"
// }

//3.forEach can be used with NodeList
// navItems.forEach(navItem =>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color ="green";
//     navItem.style.fontWeight="bold"
    
// })

// 4.We can change the NodeList to Array 
// navItems = Array.from(navItems);
// navItems.forEach(navItem =>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color ="green";
//     navItem.style.fontWeight="bold"
// });


// ########################## innerHTML #######################
// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1>Inner html changed</h1>";
// console.log(headline.innerHTML);
// headline.innerHTML += "<button class='btn'>Learn More</button>";
// console.log(headline.innerHTML);


// ############################# DOM TREE #######################
//dom tree in script2.js complete it and then come here

// ################## classes and js ################
/*get classList */
// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);

/*add class*/
// const sectionTodo = document.querySelector(".section-todo");
// sectionTodo.classList.add('bg-dark');
// console.log(sectionTodo.classList);

/*remove class */
// const sectionTodo = document.querySelector(".section-todo");
// sectionTodo.classList.remove('container')
// console.log(sectionTodo.classList);

/*to check if class exists */
// const sectionTodo = document.querySelector(".section-todo");
// const ans = sectionTodo.classList.contains('container')
// console.log(ans);

/* toggle class*/
//if class exists then remove class 
//if class doesnot exist add
// const sectionTodo = document.querySelector(".section-todo");
// sectionTodo.classList.toggle('bg-dark'); /*add bg-dark class*/
// console.log(sectionTodo.classList);
// sectionTodo.classList.toggle('bg-dark'); /*remove bg-dark class */
// console.log(sectionTodo.classList);

// ############ practice of adding class ##########
// const header = document.querySelector(".header")
// console.log(header.classList);
// header.classList.add('bg-dark');
// console.log(header.classList);

// ################# inner HTML ##############

// const todoList  = document.querySelector(".todo-list")
// console.log(todoList);
// todoList.innerHTML += "<li>todo2</li>" + "<li>todo3</li>";

//we should never update innerHTML using innerHTML+= because the whole innerHTML IS RENDERED COMPLETELY SO PREFORMANCE ISSUES.
//we should use innerHTML when we want to change the innerHTML completely


// ################ document.createElement() ###############
/* append new html element */
// const newTodoItem = document.createElement("li");
// const newTodoItemText =  document.createTextNode("Teach students")
// const todoList = document.querySelector(".todo-list")
// newTodoItem.append(newTodoItemText)
// todoList.append(newTodoItem)
// console.log(newTodoItem);

//shortcut of above code
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list")
// todoList.append(newTodoItem)
// console.log(newTodoItem);

/* prepend new html element */
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list")
// todoList.prepend(newTodoItem)
// console.log(newTodoItem);

/*remove html */
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1)

/*before html*/
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach Students"
// const todoList = document.querySelector(".todo-list")
// todoList.before(newTodoItem);

/*after html*/
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach Students"
// const todoList = document.querySelector(".todo-list")
// todoList.after(newTodoItem);

// ############################# clone nodes ####################
// const ul = document.querySelector(".todo-list")
// const li=document.querySelector("li")
// li.textContent = "new todo";

//ek time pe li ya to append hogi ya prepend
// ul.append(li)
// ul.prepend(li)

//clone node
// const ul = document.querySelector(".todo-list")
// const li=document.querySelector("li")
// li.textContent = "new todo";
// const li2 = li.cloneNode(true);
// ul.append(li)
// ul.prepend(li2)

// ################### static List and live List ##########

// const listItems = document.querySelectorAll(".todo-list li")
// const newli = document.createElement("li");
// newli.textContent ="new Todo";
// const ul = document.querySelector(".todo-list")
// ul.append(newli)

/*even after adding new li odelist will contain only 5 li*/
// console.log(listItems);

/*querySelectorall hume nodelist deti hai jo  static list degi*/
/*getElementsByClassName and getElementsByTagName gives HTML collection which id live list*/


//live list
// const ul = document.querySelector(".todo-list")
// const listItems = ul.getElementsByTagName("li")
// const newli = document.createElement("li");
// newli.textContent ="new Todo";
// ul.append(newli)
// console.log(listItems)

//by the way use querySelectorAll only


// ################## how to get the dimension of element########
//height and width and distance from top of screen of todo-list ul
// const sectionTodo = document.querySelector(".todo-list")
// const info = sectionTodo.getBoundingClientRect();
// const height = sectionTodo.getBoundingClientRect().height;
// const width = sectionTodo.getBoundingClientRect().width;
// const fromtop = sectionTodo.getBoundingClientRect().top;
// console.log(info,height,width,fromtop);

// #################################### events in js ###################
// const btn = document.querySelector(".btn-headline")
// console.dir(btn);
//method -1 to add onclick 
// btn.onclick = function(){
//     console.log("You ckicked me");
// }

//method 2-addEventListener
// function clickMe(){
//     console.log("You clicked me");
// }
// btn.addEventListener("click",clickMe)

//improved method2
// btn.addEventListener("click",()=> console.log("You clicked Me"))

// #################### this keyword ################
//in case of normal function this value is equal is element such as btn here
//in case of arrow function this value is oe level up so window object
const btn = document.querySelector(".btn-headline")
btn.addEventListener("click",function(){
     console.log("You clicked Me")
     console.log("value of this",this);
 })
btn.addEventListener("click",()=>{
     console.log("You clicked Me")
     console.log("value of this",this);
 })

//   ############ NOW GO TO CLICKEVENT.HTML #############
