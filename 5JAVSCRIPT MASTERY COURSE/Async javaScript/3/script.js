//call backs = function as argument to a function

// function myFunc(callback){

//     console.log("function is doing task 1");
//     callback();
// }
// function myFunc2(){
//     console.log("function is doing task 2");
// }
// myFunc(myFunc2);

//---------------------------------------------------
//more generalised version of above code
// function myFunc(callback){
//     console.log("function is doing task 1");
//     callback();
// }
// myFunc(()=>{
//     console.log("function is doing task 2") 
// });

//----------------------------------------------------
// function getTwoNumbers(number1, number2,callback){
//     console.log(number1,number2);
//     callback(number1,number2);
// }
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// getTwoNumbers(4,5,addTwoNumbers);

//-----------------------------------------------
// function getTwoNumbers(number1, number2,callback){
//     if(typeof number1==="number" && typeof number2==="number")
//     callback(number1,number2);
//     else
//     console.log("Wrong Data Type");
// }
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// getTwoNumbers(4,5,addTwoNumbers);
// getTwoNumbers('4','5',addTwoNumbers);

//===================================================
//two callbacks 
// function getTwoNumbers(number1, number2,onSuccess,onFaliure){
//     if(typeof number1==="number" && typeof number2==="number")
//     onSuccess(number1,number2);
//     else
//     onFaliure();
    
// }
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// getTwoNumbers(4,5,(number1,number2)=>{
//   console.log(number1 + number2);
// },()=>{
//  console.log("Please check datatype of numbers");
// });

// getTwoNumbers("3",5,(number1,number2)=>{
//   console.log(number1 + number2);
// },()=>{
//  console.log("Please check datatype of numbers");
// });


//==========================================================
//callbacks , callback hell,pyramid of doom
//asynchronous programming
// const headings = document.querySelectorAll("h1");
// let counter = 1000;

// headings.forEach((heading,i)=>{
//     setTimeout(()=>{
//      heading.textContent =`heading ${i+1}`
//     },counter)
//     counter+=1000;
// });


//-------------------------------------------------
// do below task :-
//Text    Delay    Color
//one       1s     Violet
//two       2s     purple
//three     3s     red
//four      4s     Pink
//five      5s     green
//six       6s     blue
//seven     7s     brown
// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading2")
// const heading3 = document.querySelector(".heading3")
// const heading4 = document.querySelector(".heading4")
// const heading5 = document.querySelector(".heading5")
// const heading6 = document.querySelector(".heading6")
// const heading7 = document.querySelector(".heading7")

//call back hell and pyramid of doom
// setTimeout(()=>{
//     heading1.textContent = `one`; 
//     heading1.style.color = `violet`; 
//     setTimeout(()=>{
//         heading2.textContent = `two`; 
//         heading2.style.color = `purple`; 
//         setTimeout(()=>{
//             heading3.textContent = `three`; 
//             heading3.style.color = `red`; 
//             setTimeout(()=>{
//                 heading4.textContent = `four`; 
//                 heading4.style.color = `pink`; 
//                 setTimeout(()=>{
//                     heading5.textContent = `five`; 
//                     heading5.style.color = `green`; 
//                     setTimeout(()=>{
//                         heading6.textContent = `six`; 
//                         heading6.style.color = `blue`;
//                         setTimeout(()=>{
//                             heading7.textContent = `seven`; 
//                             heading7.style.color = `brown`; 
//                         },1000) 
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)


//-----------------------------------------------------------------------
//doing above task using functions
// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading2")
// const heading3 = document.querySelector(".heading3")
// const heading4 = document.querySelector(".heading4")
// const heading5 = document.querySelector(".heading5")
// const heading6 = document.querySelector(".heading6")
// const heading7 = document.querySelector(".heading7")

// function changeText(element ,text,color,time,onSucccescallback,onFaliurecallback){
//     setTimeout(()=>{
//     if(element){
//         element.textContent = text;
//         element.style.color = color;
//         if(onSucccescallback)
//         onSucccescallback();
//     }else{
//        if(onFaliurecallback)
//        onFaliurecallback();
//     }
    
//     },time)
// }
// changeText(heading1,"one","violet",3000,()=>{
//   changeText(heading2,"two","purple",1000,()=>{
//     changeText(heading3,"three","red",1000,()=>{
//         changeText(heading4,"four","pink",1000,()=>{
//             changeText(heading5,"five","green",1000,()=>{
//                 changeText(heading6,"six","blue",1000,()=>{
//                     changeText(heading7,"seven","brown",1000,()=>{
//                     },()=>{
//                         console.log("Heading7 does not exist");
//                     })
    
//                 },()=>{
//                     console.log("Heading6 does not exist");
//                 })
//             },()=>{
//                 console.log("Headinng5 does not exist");
//             })
//         },()=>{
//             console.log("Heading4 does not exist");
//         })
//     },()=>{
//         console.log("Heading3 does not exist");
//     })
//   },()=>{
//     console.log("Heading2 does not exist");
//   })
// },()=>{
// console.log("Heading1 does not exist");
// })

// ############################ promises : future value  ###################
//solution to callback hell and pyramid of doom
//it is not a feature of js it is a feature of browser
//it is a object only having status : and value :
//suppose i promise to make fried rice then now staus of my promise is pending and valuw is undefined
//suppose i made fried rice then the status of my promise is fulfilled and value is fried rice
//suppose i salt is missing then i would not be able to make fried rice then the status would be reject and value
//can be anything like "couldn't do it"

//############################################################################
// const bucket = ['coffee','chips','vegetables','salt','rice']
// const friedRicePromise=  new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&&bucket.includes("salt")&&bucket.includes("rice")){
//         resolve({value : "Fried Rice"});
//     } else{
//         // reject("Couldn't do it")
//         /*passing error object */
//         reject(new Error("something missing from bucket"));
//     }
// });

// /*consume promise  */
// /*here i am caring for both promise resolve and reject*/
// friedRicePromise.then((myFriedRice)=>{
//     console.log("lets eat ",myFriedRice)
// },(error)=>{
//     console.log("bye",error)
// })

//------------------------------------------------------------------

// const bucket = ['coffee','chips','vegetables','salt','rice']
// const friedRicePromise=  new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&&bucket.includes("salt")&&bucket.includes("rice")){
//         resolve({value : "Fried Rice"});
//     } else{
//         // reject("Couldn't do it")
//         /*passing error object */
//         reject(new Error("something missing from bucket"));
//     }
// });

//  /*consume promise  */
// /*here i am caring for only promise resolve*/

// friedRicePromise.then((myFriedRice)=>{
//     console.log("lets eat ",myFriedRice)
// })

//-------------------------------------------------------------------

// const bucket = ['coffee','chips','vegetables','rice']
// const friedRicePromise=  new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&&bucket.includes("salt")&&bucket.includes("rice")){
//         resolve({value : "Fried Rice"});
//     } else{
//         reject("Couldn't do it")
//         /*passing error object */
//         // reject(new Error("something missing from bucket"));
//     }
// });

 /*consume promise  */
/*here i am caring for only promise reject only*/

// friedRicePromise.then(
//      null
//     ,(err)=>{
//     console.log(err)
//     } 
  
// )

//----------------------------------------------------
//chaing of then and catch while consuming promise 
// const bucket = ['coffee','chips','vegetables','salt','rice']
// const friedRicePromise=  new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&&bucket.includes("salt")&&bucket.includes("rice")){
//         resolve({value : "Fried Rice"});
//     } else{
//         reject("Couldn't do it");
//     }
// });


// friedRicePromise.then((myFriedRice)=>{
//     console.log("lets eat ",myFriedRice)
// }).catch((error)=>{
//     console.log(error)
// })


//-------------------------------------------------------
//to prove Promise is a asynchronous feature...........
//observe the output
//promise will executed at last
//promises will be inserted in microtask queue
//set timeout in callback queue 
//priority of microtask queue is more than callback queue so event loop
//will execute microtask queue first;
// console.log("Script start")

// const bucket = ['coffee','chips','vegetables','salt','rice']
// const friedRicePromise=  new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&&bucket.includes("salt")&&bucket.includes("rice")){
//         resolve({value : "Fried Rice"});
//     } else{
//         reject("Couldn't do it");
//     }
// });

// friedRicePromise.then((myFriedRice)=>{
//     console.log("lets eat ",myFriedRice)
// }).catch((error)=>{
//     console.log(error)
// })
// setTimeout(()=>{
//  console.log("hello from set time out")
// },1000)

// for(let i=0;i<=100;i++){
//     console.log(Math.random());
// }
// console.log("Script end")

//---------------------------------------------------------
//function returning promise
// const bucket = ['coffee','chips','vegetables','salt','rice']

// function friedRicePromise(){
//     return  new Promise((resolve,reject)=>{
//         if(bucket.includes("vegetables")&&bucket.includes("salt")&&bucket.includes("rice")){
//             resolve({value : "Fried Rice"});
//         } else{
//             reject("Couldn't do it");
//         }
//     });
// }
// friedRicePromise().then((myFriedRice)=>{
//     console.log("lets eat ",myFriedRice)
// }).catch((error)=>{
//     console.log(error)
// })
//----------------------------------------------------------------

//promise and seTimeout

//I want to resolve / reject the promise after 2 sec

// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         const value = true;
//         setTimeout(()=>{
//             if(value)
//             resolve();
//             else
//             reject();
//         },2000);
//     }) 
// }

// myPromise().then(()=>{
//     console.log("Resolved")
// }).catch(()=>{
//   console.log("Rejected")  
// })

//-------------------------------------------------------
// promise.resolve()

// const myPromise = Promise.resolve(5);
// myPromise.then((value)=>{
//  console.log(value);
// })

/*****then()********/
/*then method always return promise so we can do chaining*/

// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         resolve("foo");
//     })
// }
// myPromise()
// .then((value)=>{
// console.log(value)
// value+="bar";
// // return value; /*promise return NOT string */
// // OR 
// return Promise.resolve(value); /*internal working or return value*/
// /*if you donot return anything it meand you are returning undefined 
// and its iinternal working will be like return Promise.resolve(undefined) */
// })
// .then((value)=>{
//     console.log(value);
//     value+="baaz";
//     return value;
// })
// .then((value)=>{
//     console.log(value);
// })


//-------------------------------------------------------------------------
// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading2")
// const heading3 = document.querySelector(".heading3")
// const heading4 = document.querySelector(".heading4")
// const heading5 = document.querySelector(".heading5")
// const heading6 = document.querySelector(".heading6")
// const heading7 = document.querySelector(".heading7")

// do below task :-
//Text    Delay    Color
//one       1s     Violet
//two       2s     purple
//three     3s     red
//four      4s     Pink
//five      5s     green
//six       6s     blue
//seven     7s     brown

// function changeText(element ,text,color,time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(element){
//                 element.textContent = text;
//                 element.style.color = color;
//                 resolve();
//             }else{
//                if(onFaliurecallback)
//                 reject();
//             }
            
//             },time)
//     }) 
// }
// changeText(heading1,"one","violet",1000)
// .then(()=>{
//     return changeText(heading2,"two","purple",1000); 
// })
// .then((data)=>{
//     console.log(data);
//     return changeText(heading3,"three","red",1000);
// })
// .then((data)=>{
//     console.log(data);
//     return changeText(heading4,"four","pink",1000);
// })
// .then((data)=>{
//     console.log(data);
//     return changeText(heading5,"five","green",1000);
// })
// .then(()=>{
   
//     return changeText(heading6,"six","blue",1000);
// })
// .then(()=>{
//     return changeText(heading7,"seven","brown",1000);
// })

// ===================================================================================
// short version of above code
// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading")
// const heading3 = document.querySelector(".heading3")
// const heading4 = document.querySelector(".heading4")
// const heading5 = document.querySelector(".heading5")
// const heading6 = document.querySelector(".heading6")
// const heading7 = document.querySelector(".heading7")

// do below task :-
// Text    Delay    Color
// one       1s     Violet
// two       2s     purple
// three     3s     red
// four      4s     Pink
// five      5s     green
// six       6s     blue
// seven     7s     brown

// function changeText(element ,text,color,time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(element){
//                 element.textContent = text;
//                 element.style.color = color;
//                 resolve();
//             }else{
//                 reject('element not found');
//             }
            
//             },time)
//     }) 
// }

// changeText(heading1,"one","violet",1000)
// .then(()=> changeText(heading2,"two","purple",1000))
// .then(()=>changeText(heading3,"three","red",1000))
// .then(()=>changeText(heading4,"four","pink",1000))
// .then(()=> changeText(heading5,"five","green",1000))
// .then(()=> changeText(heading6,"six","blue",1000))
// .then(()=> changeText(heading7,"seven","brown",1000))
// .catch((error)=>{
//     alert(error);
// })

//////////////////////////////////////////////////////////////////////////////
// BASIC THEORY 

// AJAX : asynchronous javascript and XML
//XML is a data format 

//now we have to learn to do HTTP/API request
//browser is client
//in backend -server
//we have to request to server
//communication between browser and server is HTTp like we tak in hindi
//in client we use js to get data delete data in server.
//in backend the server can be in any language
//API can be in any language pythin ,php ,node etc;


//Ajax  is a set of "web development techniques" 
// using many web technologies on the "client-side "
// to create asynchronous web applications. 


// With Ajax, web applications can send and retrieve 
// data from a server asynchronously (in the background) 
// without interfering with the display and 
// behaviour of the existing page

// We don't use data in XML format anymore. 
// we use JSON now. 


// we have 3 most common ways to create and send request to server
// 1.) xmlHTTPRequest (old way of doing)
// 2.) fetch API (new way of doing)
// 3.) axios (this is third party library)

////////////////////////////////// AJAX /////////////////////////////////////////

// const xhr = new XMLHttpRequest();
// console.log(xhr);



/////////////////////////////////////////// json //////////////////////////////////
//JSON looks like many objects in an array
//here the key should be in double quotes otherwise it is not JSON
//here objects do not have methods

// JSON CODE : -
// [
//     {
//       "userId": 1,
//       "id": 1,
//       "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//       "userId": 1,
//       "id": 2,
//       "title": "qui est esse",
//       "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//       "userId": 1,
//       "id": 3,
//       "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//       "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//     }
 
//   ]

//------------------------------------------------------------------------------------------
//xhr mar raha hai http request 
//when xhr.readyState is 4 then only we will get the response
//read this article to know about xhr.readyState https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

// we have to do http get request at using xhr https://jsonplaceholder.typicode.com/posts
// const URL ="https://jsonplaceholder.typicode.com/posts";

// const xhr = new XMLHttpRequest();

// console.log(xhr.readyState);

// xhr.open("GET",URL);

// console.log(xhr.readyState);

//onreadystatechange will run each time xhr.readyState is changed
// xhr.onreadystatechange = function(){

//     console.log(xhr.readyState);
// }

// xhr.send();

//-----------------------------------------------------------------------------

// const URL ="https://jsonplaceholder.typicode.com/posts";

// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL);

//onreadystatechange will run each time xhr.readyState is changed

// xhr.onreadystatechange = function(){
// if(xhr.readyState==4){
//     console.log(xhr)
//     console.log(xhr.readyState) /*4*/
//     console.log(xhr.response) /*gives json string*/
//     console.log(typeof xhr.response)  /*json string */
//     console.log(xhr.status) /*give status if 404 or 505 then there is some error*/
// }

// }

// xhr.send();
//--------------------------------------------------------------------

//CONVERTING JSON STRING TO JSON OBJECT (JSON PARSE)

// const URL ="https://jsonplaceholder.typicode.com/posts";

// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL);

//onreadystatechange will run each time xhr.readyState is changed
// xhr.onreadystatechange = function(){
// if(xhr.readyState==4){
//     const response = xhr.response; /*json string*/
//    const data = JSON.parse(response); /*parsed to object */
//    console.log(data);
//    console.log(typeof data);
// }

// }

// xhr.send();

//--------------------------------------------------------
//sort version of above code using xhr.onload 

// const URL ="https://jsonplaceholder.typicode.com/posts";

// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL);

// //on load will run only when xhr.readyState = 4
// xhr.onload= function(){
//     const response = xhr.response; /*json string*/
//     const data = JSON.parse(response); /*parsed to object */
//     console.log(data);
//     console.log(typeof data);
// }
// xhr.send();

//-----------------------------------------------------------
//error handling 

// const URL = "https://jsonplaceholder.typicode.com/posts";

// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL);
// xhr.onload = ()=>{
//    if(xhr.status >=200 && xhr.status <300){
//        const data = JSON.parse(xhr.response);
//        console.log(data);
//    }
//    else{
//     console.log("something went wrong");
//    }

// }

// /*this code will run when there will be some network error like internet is disconnected */
// xhr.onerror=()=>{
//     console.log("network error");
// }
// xhr.send();


//--------------------------------------------------------------------------
//now to get the object and id of fourth object in- data (object)

// const URL = "https://jsonplaceholder.typicode.com/posts";

// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL);

// xhr.onload = ()=>{
//    if(xhr.status >=200 && xhr.status <300){
//        const data = JSON.parse(xhr.response);
//        console.log(data);
//        /* change made here from previous code */
//        const idOfFourthObject = data[3].id;
//        console.log(idOfFourthObject);
//        const xhr2 = new XMLHttpRequest();
//        const URL2 =`${URL}/${idOfFourthObject}`;
//        xhr2.open("GET",URL2);
//        xhr2.onload = ()=>{
//         const data2 =JSON.parse(xhr2.response);
//         console.log(data2);
//        }
//        xhr2.send();
//    }
//    else{
//     console.log("something went wrong");
//    
// }
// xhr.onerror=()=>{
//     console.log("network error");
// }
// xhr.send();

// ##################################### xhr using promises #######################
// const URL = "https://jsonplaceholder.typicode.com/posts";

// function sendRequest(method ,url){
//     return new Promise(function(resolve,reject){
//         const xhr = new XMLHttpRequest();
//         xhr.open(method,url);
//         xhr.onload = function(){
//             if(xhr.status >= 200 && xhr.status <300){
//                 resolve(xhr.response);
//             } else{
//                 reject(new Error("Something went wrong"));
//             }
//         }
//         xhr.onerror = function(){
//           reject(new Error("Something went wrong"))
//         }
//         xhr.send();
//     })
// }
// sendRequest("GET",URL)
// .then((response)=>{
//     const data = JSON.parse(response);
//     return data;
// })
// .then(data=>{
//      const id =data[3].id;
//     //  console.log(id);
//      return id;
// })
// .then((id)=>{
//     const url = `${URL}/${id}`;
//     // console.log(url);
//     return sendRequest("GET",url);
// })
// .then((newResponse)=>{
//   const newData = JSON.parse(newResponse);
//   console.log(newData);
// })
// .catch((error)=>{
//    console.log(error);
// })

// ######################## fetch ##################################
//fetch method do GET(read data) request by default 

// const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch(URL)
// .then(response=>{
//     // console.log(response.json())  /* it is a promise */
//     return response.json(); /* returns a promise  */
// })
// .then(data =>{
//     console.log(data); //now you will see response that is json string
// })
// .catch(error=>{
//     console.log("inside catch");
//     console.lef(error);
// })
// ############################################################
//fetch will be rejected only when there is network related problem like no internet

// const URL = "https://jsonplaceholder.typicode.com/postssd";
// /*i have made ur; wrong here so the reponse.ok = false;
// repsonse.ok = true if everything is right*/
// fetch(URL)
// .then(response=>{
//   // console.log(response);
//    // console.log(response.ok);
//     if(response.ok===true){
//         return response.json();
//     } else{
//         throw new Error("something wrong");
//     }
// })
// .then(data =>{
//     console.log(data);
// })
// .catch(error=>{
//     console.log("inside catch");
//     console.log(error);
// })

// ########################################## fetch :post method #################

// const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch(URL,
//  { 
//    method: 'POST',
//    body: JSON.stringify({ title: 'foo',body: 'bar',userId: 1,}),
//    headers: {'Content-type': 'application/json; charset=UTF-8'}
// })
// .then(response=>{

//     if(response.ok===true){
//         return response.json();
//     } else{
//         console.log( new Error("Something is wrong"))
//     }
// })
// .then(data =>{
//     console.log(data);
// })
// .catch(error=>{
//     console.log("inside catch");
//     console.log(error);
// })

// ######################### async await ##################
// fetch(URL)
// .then((response)=>response.json())
// .then(data => {
//     console.log(data);
// })

// const URL = "https://jsonplaceholder.typicode.com/posts";
// async function getPost(){
//   const response =  await fetch(URL); 
//   //   console.log(response);
//   if(!response.ok){
//     throw new Error("Something went wrong")
//   }
//    const data = await response.json();
//     return data;
// }
// const returned = getPost();
// // console.log(returned);  //return promise
// returned
// .then((myData) =>{
//     console.log(myData); /*data yaha milega actual */
// })

// ############################################
//i have made error in the url so catch block will run 
//as i have thrown the error when reponse.ok ===false

// const URL = "https://jsonplaceholder.typicode.com/postsg";
// async function getPost(){
//   const response =  await fetch(URL); 
//   //   console.log(response);
//   if(!response.ok){
//     throw new Error("Something went wrong")
//   }
//    const data = await response.json();
//     return data;
// }
// const returned = getPost();
// // console.log(returned);  //return promise
// returned
// .then((myData) =>{
//     console.log(myData); /*data yaha miega actual */
// })
// .catch((error)=>{
//     console.log("inside error")
//     console.log(error);
// })

// ######################################################################
//to prove that async and await is asynchronous
//observe hthe output

// console.log("Script start");
// const URL = "https://jsonplaceholder.typicode.com/posts";
// async function getPost(){
//   const response =  await fetch(URL); 
//   //   console.log(response);
//   if(!response.ok){
//     throw new Error("Something went wrong")
//   }
//    const data = await response.json();
//     return data;
// }
// const returned = getPost();
// // console.log(returned);  //return promise
// returned
// .then((myData) =>{
//     console.log(myData); /*data yaha milega actual */
// })
// .catch((error)=>{
//     console.log("inside error")
//     console.log(error);
// })

// console.log("Script end");

//############################################################################
//using arrow function in above code


// console.log("Script start");
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const getPost=async()=>{
//   const response =  await fetch(URL); 
//   //   console.log(response);
//   if(!response.ok){
//     throw new Error("Something went wrong")
//   }
//    const data = await response.json();
//     return data;
// }
// const returned = getPost();
// // console.log(returned);  //return promise
// returned
// .then((myData) =>{
//     console.log(myData); /*data yaha miega actual */
// })
// .catch((error)=>{
//     console.log("inside error")
//     console.log(error);
// })

// console.log("Script end");



