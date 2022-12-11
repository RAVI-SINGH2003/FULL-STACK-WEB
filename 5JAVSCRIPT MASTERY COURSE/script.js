// ########################## useful string methods ##########################
//1.trim()
//2.toUpperCase()
//3.toLowerCase()
//4.slice(startindex ,endindex(not included));
//All above methods give new string

//1.trim()
// const string ="    fwdfwefeww       ";
// console.log(string.trim());

//2.toUpperCase()  and toLowerCase()
// const string ="fwdfwefeww";
// console.log(string.toUpperCase());
// console.log(string.toLowerCase());

//3.slice(start idx,endindx(not included)) = returns substring 
// const text ="person1 SINGH";
// console.log(text.slice(0,6));
// console.log(text.slice(0));

// 4.length
// const text = "wwwwe";
// console.log(text.length);

//5.indexOf AND lastIndexOf
// const string = "person1 IAR";
// console.log(string.indexOf('A') , string.lastIndexOf('A'));

//6.replace() = replace first occourence
// const string = "person1 SINGH IS BAD BAD";
// const modified =string.replace('BAD' ,'GOOD');
// console.log(modified);

// ################### number to string ######################
//Method1 
// const string = String(1212);
// console.log(typeof string);

//Method 2

// const string = 1212 +"";
// console.log(typeof string);
// console.log(typeof string);

// ################# string to number ######################
//Method 1
// const number = Number("1212");
// console.log(typeof number);

//Method 2
// const number = +"1212";
// console.log(typeof number);


// ######################## template string  ########################
// const a= 10,b=15;
// console.log(`Sum of ${a} and ${b} is ${a+b}`);

// ######################## datatypes in js ########################
//primitive = number ,strings ,booolean ,BigInt null undefined 
//reference type = array object

//undefined
// const a;
// console.log(a); 

//null
// const b= null;
// console.log(b);

//BigInt = for storing large numbers

//Method1 
// const a = BigInt(2121121222222222222222222222323);
// console.log(a);

//Method2 = use n atlas of number
// const a = 2121121222222222222222222222323n + 121n;
// console.log(a);

// ######################### getting input and output #################
// const number1 = +prompt("Enter number 1");
// const number2 = +prompt("Enter number 2");
// alert(`${number1} + ${number2} = ${number1+number2}`);




// ################### Arrays Basics###########################
//1.push
// const array = [1,2,3,4,5];
// array.push(6);
// console.log(array);

//2.pop
// const array = [1,2,3,4,5];
// const deleted = array.pop();
// console.log(array ,deleted);

//3.unshift()= addd element at front
// const array = [1,2,3,4,5];
// array.unshift(6);
// console.log(array);

//4.shift = remove element from front
// const array = [1,2,3,4,5];
// const deleted = array.shift();
// console.log(array ,deleted);


//5.cloning array

//Method 1: using slice
// const arr = [1,2,3,4,5];
// const arr1 = arr.slice(0);
// console.log(arr1);

//Method 2: using concat with empty array
// const arr = [1,2,3,4,5];
// const arr1 = [].concat(arr);
// console.log(arr1);

//Method 3: using spread operator
// const arr = [1,2,3,4,5];
// const arr1 = [...arr]
// console.log(arr1);


//6.length of an array
// const array = [1,2,3,4,5];
// console.log(array.length);

//7. Loops on arrays

//(i) for in loop
// const array = [1,2,3,4,5];
// for(let index in array)
// console.log(array[index]);

//(ii) for of loop
// const array = [1,2,3,4,5];
// for(let number of array)
// console.log(number);

//8.Array destructuring

//Method 1 
// const array = [1,2,3,4,5];
// const [var1,,var2] = array;
// console.log(var1,var2);

//Method 2
// const array = [1,2,3,4,5];
// const [var1, ,var2,...var3] = array;
// console.log(var1,var2,var3);

// ######################### objects basics ###########################
// const object1 ={
//     "full name" : "person1 Singh",
//     "age" : 23
// };

// console.log(object1);
// console.log(object1.age);
// console.log(object1["age"]);
// console.log(object1["full name"]);
//--------------------------------------------------------------

// const object1 ={
//     "full name" : "person1 Singh",
//     "age" : 23
// };

// const value = "xyz";
// object1["address"] = value;
// console.log(object1);
//---------------------------------------------------------------


// const object1 ={
//     "full name" : "person1 Singh",
//     "age" : 23
// };
// const key = "address";
// const value ="xyz";
// object1[key] = value;
// console.log(object1);

//-------------------------------------------------------------------
// const object1 ={
//     "name" :"person1",
//     "age" : 23
// };
// for(let key in object1)
// console.log(`key is ${key} , value is ${object1[key]}`);


//----------------------------------------------------------------------
// ************ Cloning objects and adding additional key value pair ***************

//1.In arrays
// const array = [1,2,3,4,5];
// const array1 = [...array ,23 ,25454];
// console.log(array1);

// const string = "12343444545";
// const array = [...string];
// console.log(array);

//2.In objects
// const object1 ={
//     "full name" : "person1 Singh",
//     "age" : 23
// };
// const object2 = {...object1 ,"address" : "xyz"};
// console.log(object2);

//----------------------------------------------------------------------
// ********************OBJECT DESTRUCTURING ****************
// const object1 ={
//    "fullName" : "person1 Singh",
//     "age" : 23,
//     "address" :"xyz",
//     "favourite" :"sing"
// };
// const {fullName ,age} = object1;
// console.log(fullName,age);

// const {fullName : value1 ,age :value2,...restprops} = object1;
// console.log(value1,value2,restprops);


//---------------------------------------------------
//****************** object inside arrays ********************

// const users =[
//     {userId : 2 ,firstName :'x' ,gender :'female'},
//     {userId : 3 ,firstName :'y' ,gender :'male'},
//     {userId  : 1 ,firstName :'z' ,gender :'Male'},
// ];
// for(let user of users){
//     console.log(user.userId);
// }

//nested destructuring
// const [user1 ,user2 ,user3] =users;
// console.log(user1,user2,user3)

//extracting firstNme of user1 no info of use2 and firstName and gender of user3
// const [{firstName : var1} , , {firstName :var2 ,gender : var3}] = users;
// console.log(var1);
// console.log(var2);
// console.log(var3);


// ####################functions in js####################################
//Method 1
// function fun(a,b){
//     return a+b;
// }
// console.log(fun(1,2));

//Method 2 = function expressions
// const fun = function(a,b){
//     return a+b;
// }
// console.log(fun(1,2));

//Method 3 = arrow function

// const fun = (a,b) =>{
//     return a+b;
// }
// console.log(fun(1,2));

//if sing parameter and single return statement 
// const square =  a => a*a;
// console.log(square(6));

// ************************ function inside function *******************
// const fun1 = () =>{
//     console.log('inside fun1');
//     const fun2 = () =>{
//         console.log("inside fun2");
//     }
//     fun2();
// }
// fun1();

// *********************** rest parameters *******************
// const add = (a ,...b) =>{
    
//     let sum =0;
//     for(let i=0; i<b.length ;i++)
//     {
//         sum+=b[i];
//     }
//     return a+sum;
// }
// console.log(add(1,2,3,4,5));


// ********************* param destructuring ************************
// const fun = ({fullname : var1 ,age :var2})=>{

// console.log(var1,var2);
// }
// const object1 ={
//     "fullname" : "person1 Singh",
//     "age" : 23
// };
// fun(object1);

// ****************** call functions  = functions as arguments to functions*******************
// function fun2 (){
//     console.log('Inside fun2');
// }
// const fun1 = (myvar)=>{
//     console.log('Inside fun1');
//     console.log(myvar);
//     myvar();
// }
// fun1(fun2);

// ************************** function returning function *****************

// function fun2 (){
//     console.log('Inside fun2');
// }
// const fun1 = ()=>{
//     console.log('Inside fun1');
//     return fun2;
// }
// const a = fun1();
// a();

// ############################### important array methods #########################
//1.forEach()
// const array1 = [1,2,3,4,5];
// array1.forEach((number ,index,array)=>{
// console.log(`index : ${index} ,number : ${number} ,array : ${array}`)
// })


// 2.map function() =>return array
// const array = [1,2,3,4,5];
// const squares = array.map((number ,index)=>{
//     return "number *number";
// })
// console.log(squares);

// or
// const array = [1,2,3,4,5];
// function squares(number,index){
//     return number*number;
// }

// const square = array.map(squares)
// console.log(square);

//3.fiter method =>return array
//filter all even numbers
// const array = [1,2,3,4,5];
// const evenNum =array.filter((number)=>{
//     return number%2==0;
// })
// console.log(evenNum);

//4.reduce() =>array to single value;

//EXAMPLE -1
//find sum of array
// const array = [1,2,3,4,5];
// const sum  = array.reduce((accumulator ,currentVal)=>{
//     return accumulator + currentVal;
// }); 
// console.log(sum);

//accumulator currVAl sum
//  1           2       3
//  3           3       6
//  6           4       10
//  10          5       15    

//EXAMPLE - 2
//find sum of array+10
// const array = [1,2,3,4,5];
// const sum  = array.reduce((accumulator ,currentVal)=>{
//     return accumulator + currentVal;
// },10); 
// console.log(sum);

//accumulator currVAl  sum
//  10          1       11
//  11          2       13
//  13          3       16
//  16          4       20        
//  20          5       25         


//EXAMPLE - 3
//find sum of price of all user
// const userCart = [
//     {productId : 1,productName : "mobile" ,price : 12000},
//     {productId : 2,productName : "laptop" ,price : 22000},
//     {productId : 3,productName : "tv" ,price : 42000}
// ];

//Method 1 for of loop
// let sum = 0;
// for(let user of userCart)
// sum+=user.price;
// console.log(sum);

//Method2 :using reduce

// const sum = userCart.reduce((totPrice ,currProduct)=>{
//   return totPrice + currProduct.price;
// },0);
// console.log(sum);

//5.sort(); ascending order a-b ,descending order b-a
// const array = [5,4,3,2,1];
// const array1 =array.slice(0).sort((a,b)=>{
//     return a-b;
// })
// console.log(array1);

//6.find()
// find the string with length 3
// const array =['ab' ,'abc' ,'def']; 
// function isLength3(string){
//     return string.length == 3;
// }
// const found  = array.find(isLength3);
// console.log(found);

//7.every()
//check if all numbers are even in array
// const array =[2,4,6,7];
// const isAllEven = array.every((number)=>{
//     return number%2==0;
// })
// console.log(isAllEven);

//7.some()
//check if all any number is even in array
// const array =[1,5,6,7];
// const isAllEven = array.some((number)=>{
//     return number%2==0;
// })
// console.log(isAllEven);

//8.fill method()

//Method 1
// const array = new Array(10).fill(-1);
// console.log(array);

//Method 2 fill 'inserted' from index 3 to 5
// const array =[1,2,3,4,5,6,7,8];
// array.fill('inserted' ,3,6);
// console.log(array);

//9.splice method => deleting or inserting in between array

// const array1 = ['item1' ,'item2','item3','item4','item5'];

// a. delete = > splice(startindex ,how-many-items-to-delete)
// const deletedElements = array1.splice(0,2);
// console.log(array1,deletedElements);

// b. insert =>splice(startindex ,how-many-items-to-delete ,insert-value1,insertvalue-2,....)
// array1.splice(2,0,'inserted-item1','inserted-item2');
// console.log(array1);

// c. delete and insert both 
// const deleted = array1.splice(2,2,'inserted-item1');
// console.log(array1,deleted);

// ###########iterables and array like object ##########
//iterables - on which we can apply for of loop
//array like object - in which we can apply .length property and index access is present like string

// ##################### sets in js ################
//1. set is an iterable
//2. no indexing
//3. order is not guarranted
//4. unique elements

// const numbers = new Set([1,2,3,5,3]);
// console.log(numbers);

// const numbers = new Set("1234");
// const numbers = new Set([1,2,3,5,3]);
// numbers.add(9);
// numbers.add(4);
// numbers.add(19);
// console.log(numbers);
// if(numbers.has(1)) 
// console.log("1 is present");
// else
// console.log("1 is not present");
// let len = 0;
// for(let item of numbers)
// {
//     console.log(item);
//     len++;
// }
// console.log(len);


// ####################### Maps in js ########################

//difference between objects and maps
//objects can only have string or symbol as key

//in maps you can use anything as key like array,number ,string

//map is iterable but object is not

// const person = new Map();
// person.set('firstName','person1');
// person.set('age',19);
// person.set(1,'one');
// person.set([1,2,3],"i am array")
// person.set({"key" :"value"},"i am object")
// console.log(person);
// console.log(person.get('age'),person.get('firstName'),person.get(1));
// console.log(person.keys());

// for(let key of person.keys())
// {
//     console.log(key,typeof key);
// }

// for getting arrays of key -value pair 
// for(let key of person)
// {
//     console.log(key);
//     console.log(Array.isArray(key))
// }

// for(let [key,value] of person)
// {
//     console.log(key,value);
// }

// /-----------------------------------------------
// const person = new Map([['firstName','person1'],['age',7]])
// console.log(person);
//--------------------------------------------------------


// const person1 = {
//     id:1,
//     firstName :"person1"
// }
// const extraInfo = new Map();
// extraInfo.set(person1,{age : 8 , gender:"male"});
// console.log(extraInfo)

// console.log(person1.id);
// console.log(extraInfo.get(person1).age)
// console.log(extraInfo.get(person1).gender)

//-----------------------------------------------------
//optional chaining

// const user ={
//     firstName : "person1",
//     address :{"houseNumber" :'1234'}
// }
// console.log(user.firstName);
// console.log(user.address.houseNumber);


// const user ={
//     firstName : "person1",
// }
// console.log(user.firstName);

/*observe the errors.*/
/*undefined*/
// console.log(user.address);

/*cannot read properties of undefined */
// console.log(user.address.houseNumber);



//some times we donot know if key address exist or not so to avoid error due to address.houseNumber
// we use following so that we get undefined.
// const user ={
//     firstName : "person1"
// }
// console.log(user?.firstName);
// console.log(user?.address?.houseNumber);

// ############################### methods #########################
//function inside object  is method


/*1. creating our own method */

// const person ={
//     firstName :"harsit",
//     age : 8,
//     about : function(){
//         console.log(`person name is ${this.firstName} and person age is ${this.age}`)
//     }
// }
// console.log(person.about);//returns function
// person.about();

//----------------------------------------------------
// function personInfo(){
//     console.log(`person name is ${this.firstName} and person age is ${this.age}`);
// }

// const person1={ firstName :"hars",age:8 ,about : personInfo};
// const person2={ firstName :"mohit",age:8 ,about : personInfo};
// const person3={ firstName :"nitish",age:8 ,about : personInfo};

// person1.about();
// person2.about();
// person3.about();


//-----------------------------------------------------------
//2. user2 borrow the about function of user1 using call method
// const user1 = {
//     firstName :"person1",
//     age:8,
//     about : function(hobby,favMusician){
//         console.log(this.firstName,this.age,hobby,favMusician);
//     }
// }
// const user2 = {
//     firstName :"Singh",
//     age:10,
    
// }
// user1.about();
/*now this value is set to user2 object */

// user1.about.call(user2,"guitar","mozart");

//--------------------------------------------------------
// function about(hobby,favMusician){
//     console.log(this.firstName,this.age,hobby,favMusician);
// }
// const user1 = {
//     firstName :"person1",
//     age:8,  
// }
// const user2 = {
//     firstName :"Singh",
//     age:10,  
// }
// about.call(user1 ,"guitar" ,"mozart")
// about.call(user2 ,"guitar" ,"mozart")

//----------------------------------------------------------------------
//3.bind method = returns function
// function about(hobby,favMusician){
//     console.log(this.firstName,this.age,hobby,favMusician);
// }
// const user1 = {
//     firstName :"person1",
//     age:8,  
// }
// const user2 = {
//     firstName :"Singh",
//     age:10,  
// }
// const func1 = about.bind(user1 ,"guitar" ,"mozart")
// func1();
// const func2 = about.bind(user2 ,"guitar" ,"mozart")
// func2();

/*avoid this mistake */


// const user1 = {
//     firstName :"person1",
//     age:8,  
//     about : function(){
//         console.log(this.firstName,this.age);
//     }
// }
// const myFunc = user1.about; //mistake
// myFunc();  //undefined undfined

//correct way
// const myFunc1 = user1.about.bind(user1); 
// myFunc1();

/*short syntax */

// const user1 = {
//     firstName :"person1",
//     age:8,  
//     about(){
//         console.log(this.firstName,this.age);
//     }
// }
// user1.about()

// ########################## object oriented programming ###############
// const user1 ={
//     firstName :"person1",
//     lastName :'singh',
//     email :'123@gmail.com',
//     age :2,
//     address : "House Number,Colony,pincode,state",
//     about(){
//         return `${this.firstName} is ${this.age} years old`;
//     },

//     is18(){
//         return this.age >=18;
//     }
// }
// const aboutUser = user.about();
// console.log(aboutUser);

//creating function(that create object) => constructor function
//add key value pair
//object ko return karega

// function createUser(firstName ,lastName,email,age,address){
//     const user ={};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age=age;
//     user.address=address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old`; 
//     };
//     user.is18 = function(){
//         return this.age>=18;
//     }

//     return user;
// }
// const user1 = createUser("person1","singh","123@gmail.com",19,"my address")
// console.log(user1);
// console.log(user1.is18());
//----------------------------------------------------------------------
// const userMethods={
//     about :  function(){
//         return `${this.firstName} is ${this.age} years old`; 
//     },
//     is18 : function(){
//         return this.age>=18;
//     }
// }
// function createUser(firstName ,lastName,email,age,address){
//     const user ={};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age=age;
//     user.address=address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;

//     return user;
// }

//earler when  we are creating different users again and againn about function and is18 is gettig created 
// even it is doing same work for all users
//so we put methods outside object and use its refernce

// const user1 = createUser("person1","singh","123@gmail.com",19,"my address")
// const user2 = createUser("abhas","singh","123@gmail.com",19,"my address1")
// console.log(user1.about())
//------------------------------------------------------------------------
// improvement of previous code
//first understand something about __proto__
// const obj1 ={
//     key1 : "value1",
//     key2 : "value2",
// }
// const obj2 ={
//     key3:"value3"
// }
// console.log(obj2.key1);  /*undefined*/
/*mai chahata hu ki compiler dekhe ki obj2 ke pas key1 hai kya nahi hai to wo khud hi obj1 
ke pas jaye aur agar key1 present hai to value print ho jaye*/ 


// const obj1 = {
//   key1 :"value1",
//   key2 :"value2"
// }
//obj2 ka __proto__ / [[prototype]] obj1 set ho jaega
// const obj2 = Object.create(obj1); /*create a empty object*/

// obj2.key3 = "value3";
// console.log(obj2,obj2.key2,obj2.__proto__);

// improvement using __proto__:
// const userMethods={
//         about :  function(){
//             return `${this.firstName} is ${this.age} years old`; 
//         },
//         is18 : function(){
//             return this.age>=18;
//         }
//     }
//     function createUser(firstName ,lastName,email,age,address){
//         const user =Object.create(userMethods);
//         user.firstName = firstName;
//         user.lastName = lastName;
//         user.email = email;
//         user.age=age;
//         return user;
//     }   
//     const user1 = createUser("person1","singh","123@gmail.com",19,"my address")
//     const user2 = createUser("abhas","singh","123@gmail.com",19,"my address1")
//     console.log(user1.about())

//=================================================================================
//function prototype 
//Javascript function = function + object
// function hello(){
//     console.log("hello world");
// }
// console.log(hello.name);
//we can add our own properties
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

//function provides more useful properties
//one such property is prototype property is present in functions only it is nothing but an empty object only
//in which we can add function related key value pair
// function hello(){
//     console.log("hello world");
// }
// console.log(hello.prototype);
// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing= function(){
//     return "lalala"
// }
// console.log(hello.prototype);
// console.log(hello.prototype.sing())
//======================================================================================
//relation between __proto__ and function prototype
//__proto__ is refernce and function prototype is empty object in which we can key value pairs related to function
//more improvemet of previous code : -

//here we have set__proto__ of user object to function prototype
// function createUser(firstName ,lastName,email,age,address){
//       const user =Object.create(createUser.prototype);
//       user.firstName = firstName;
//       user.lastName = lastName;
//       user.email = email;
//       user.age=age;
//       return user;
// }   
// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old`; 
// }
// createUser.prototype.is18 =function(){
//     return this.age>=18;
// }
// createUser.prototype.sing = function (){
//     return "la la laaaalaalaa";
// }
// const user1 = createUser("person1","singh","123@gmail.com",19,"my address")
// const user2 = createUser("abhas","singh","123@gmail.com",19,"my address1")
//  console.log(user1.about())
//  console.log(user1.is18())
    


//==================================== new keyword ========================
//new create :=
//1 .create empty object this ={}
//2. const user =Object.create(createUser.prototype);  se jo hum empty object banake iska __proto__ function protype ke equal set kar rahe the ab iski jarurat nahi new ye karlega
//2. return this

//Example 1
// function CreateUser(firstName,age){
//     this.firstName = firstName;
//     this.age=age;
// }
// createUser.prototype.about = function(){
//     console.log(this.firstName,this.age);
// }
// const user1 = new CreateUser("person1",6);

// user1.about();

//Example 2
//by the way the function which create object is constructor function
//and when we use new we start constructor name with capital letter
// function CreateUser(firstName ,lastName,email,age,address){
   
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.email = email;
//       this.age=age;
//       return this /*optional */
// }   
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old`; 
// }
// CreateUser.prototype.is18 =function(){
//     return this.age>=18;
// }
// CreateUser.prototype.sing = function (){
//     return "la la laaaalaalaa";
// }
// const user1 = new CreateUser("person1","singh","123@gmail.com",19,"my address")
// console.log(user1);
// console.log(user1.is18());

//=======================================================================
//hasOwnProperty : -

// function CreateUser(firstName ,lastName,email,age,address){
   
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.email = email;
//       this.age=age;
//       return this /*optional */
// }   
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old`; 
// }
// CreateUser.prototype.is18 =function(){
//     return this.age>=18;
// }
// CreateUser.prototype.sing = function (){
//     return "la la laaaalaalaa";
// }
// const user1 = new CreateUser("person1","singh","123@gmail.com",19,"my address")
// const user2 = new CreateUser("rahul","singh","123@gmail.com",19,"my address")
// const user3 = new CreateUser("neha","singh","123@gmail.com",19,"my address")

//user1 object ki sari keys display hogi with  keys present in function prototype also
// for (let key in user1){
//     console.log(key);
// }
//if wanted only the original keys of user1 then use hasOwnProperty
// for (let key in user1){
//    if(user1.hasOwnProperty(key))
//    console.log(key);
// }

//=======================================================================
// let numbers = [1,2,3];
//above array is created internally by compiler like : -
// let numbers = new Array(1,2,3);

//================================ CLASSES =================================
//maha improvement of previous codes using classes
//classes are fake  = classes use internally below code only

// function CreateUser(firstName ,lastName,email,age,address){
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.email = email;
//       this.age=age;
//       return this /*optional */
// }   
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old`; 
// }
// CreateUser.prototype.is18 =function(){
//     return this.age>=18;
// }
// CreateUser.prototype.sing = function (){
//     return "la la laaaalaalaa";
// }
// const user1 = new CreateUser("person1","singh","123@gmail.com",19,"my address")
// console.log(user1);
// console.log(user1.is18());

//############### IMPROVEMENT ######################
// class CreateUser {
//     constructor(firstName ,lastName,email,age,address){
//         console.log("constructor called");

//           this.firstName = firstName;
//           this.lastName = lastName;
//           this.email = email;
//           this.age=age;

//     }
//     about(){
//         return `${this.firstName} is ${this.age} years old`; 
//     }
//     is18(){
//         return this.age>=18;
//     }
//     sing(){
//         return "la la laaaalaalaa";

//     }
//     func(a){
//        console.log("a : " ,a);
//     }
// }
// const user1 = new CreateUser("person1","singh","123@gmail.com",19,"my address")
// const user2 = new CreateUser("person1","singh","123@gmail.com",19,"my address")
// const user3 = new CreateUser("person1","singh","123@gmail.com",19,"my address")
// console.log(user1.func(12));

//############################# CLASSES PRACTICE ###########################

// class Animal{
//     constructor(name,age){
//         this.age = age ;
//         this.name = name;

//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age <=1;
//     }
//     isCute(){
//         return true;
//     }

// }
// const animal1 = new Animal("tom",2);
// console.log(animal1);
// console.log(animal1.isCute());
// console.log(animal1.isSuperCute());
// console.log(animal1.eat());

// ############################### inheritance in classes ################
// class Animal{
//     constructor(name,age){
//         this.age = age ;
//         this.name = name;

//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age <=1;
//     }
//     isCute(){
//         return true;
//     }

// }

// class Dog extends Animal{
// constructor(name,age,speed){
//  super(name,age);
//  this.speed = speed;
// }
// run(){
//     return `${this.name} is running at speed ${this.speed}`;
// }
// //overiding Animal class eat() function
// eat(){
//     return `Modified eat :  ${this.name} is eating`;
// }

// }
// const tommy = new Dog("tommy" ,3,45);
// console.log(tommy);
// console.log(tommy.run());
// console.log(tommy.eat())


//########################## getters and setters ################## 
// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.age = age;
//         this.lastName = lastName;

//     }
//    get fullName(){
//         return `Full Name is : ${this.firstName} ${this.lastName}`;
//     }
//     setName(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     set fullName(fullName){
//         const [firstName,lastName] =fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// const person1 = new Person("ravi","singh",10);
// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.fullName);  /*no need to use () to call function now it is treated as property */
// // person1.setName("neha","singh")
// // OR
// person1.firstName = "neha";
// person1.lastName = "singh";

// console.log(person1.firstName);
// console.log(person1.lastName);
// //CHANGING FULL NAME
// person1.fullName  = "mohit sharma";
// console.log(person1.fullName);

// ################# HOW JAVASCRIPT WORKS ########################
//1 .compilation phase
     // (A) tokenizing /lexing 
     // (B) parsing  
     // (C) code Generation
     
     // compile occours in 
     // (A) early error checking
     // (B) determing appropriate scope for variables

//2.code execution phase = inorder to execute the js code js create execution context
// and sabse pehle jo execution context create hota hai wo hai global execution context
//    a. creation  phase => memory me variables create ho jate hai  isi dauran this ki value = window set hoto hai => hoisting
//    b. line by line execution



//  ########################### hoisting of var ###################
//in case of var during creation phase var vaiables are initialsed to undefined
// console.log(this);  /*this is equal to global object ie window only*/
// console.log(window);
// console.log(firstName);  /*undefined*/

// var firstName = "Ravi Singh";
// console.log(firstName); 

// ########################## hoisting #######################
// console.log(this);  /* this is equal to global object ie window only */
// console.log(window);
// console.log(firstName);  /*undefined*/
// console.log(myFunction);  /*function will be printed
// myFunction();
// function myFunction(){
//     console.log("this is my function")
// }
// var firstName = "Ravi Singh";
// console.log(firstName); 

// ########### hoisting of funcion expressions ##############
// console.log(myfunction); /*undefined*/
// var myfunction = function(){
//     console.log("this is a function");
// }
// console.log(myfunction);



// ################################## hoisting in let and const ########################
//in case of let and const , variables are uninitialised so uncaught refernce error
// console.log(firstName);
// console.log(lastName);
// let firstName = "Ravi";
// const lastName = "Singh"
// console.log(firstName);
// console.log(lastName);

// ####################### function execution phase #####################

//during memory creation phase in Global Execution Context
//window = { object with key value pairs}
// this = window;
// foo = ininitialsed;
// getFullName = whole function 
// personName = uninitialised;

//whenever function is to be executed new execution context is created called function execution context

// let foo ="foo";
// console.log(foo);
// function getFullName(firstName , lastName){
//     console.log(arguments); //arguments is array like object
//     let myvar = "var inside func";
//     console.log(myVar);
//     const fullName = firstName + " " + lastName;
//     return fullName;
// }
// const personName = getFullName("harshit" ,"sharma");
// console.log(personName);


// ########################### scope chain #######################
// in memory creation phase 
// lastName  = uninitialised;
// fullName = uninitialised;

//scope chain= js will not find the lastName variable in function scope so it
//willl go more deeper in hierarchy and search inn global scope and find it and print it.
// const lastName = "Singh";

// const fullName = function(){
//     let firstName ="Ravi";
//     console.log(firstName);
//     console.log(lastName);
// }
// fullName();


// ############################## closures ########################
//when a function is returned from another function it return with its lexical enviornment

//Example - 1
//here when printName function will be returned it will be returned with firstname and lastName
// function printFullName(firstName,lastName){
//     function printName(){
//     console.log(firstName,lastName);
//     }
//     return printName;
// }
// const ans =printFullName("harshit","sharma");
// console.log(ans);
// ans();

//Example -2 
// function hello(x){
//     const a = "varA";
//     const b="varB";
//     return function(){
//         console.log(a,b,x);
//     }
// }
// const ans = hello('arg');
// ans();

//Example - 3
// function myFunction(power){
//     return function(number){
//         return number ** power;
//     }
// }

// const cube = myFunction(3);
// const ans = cube(2);
// console.log(ans);

// ################## closure task #####################
// aim : create a function which if called for first time return i you called and if called again tells i have already been called
// function func(){
//     let counter =0;
//     return function(){
//         if(counter++<1)
//         console.log("Hi You Called me");
//         else
//         console.log("I have already been called")   
//     }   
// }
// const myFunc = func();
// myFunc();
// myFunc();
// const myFunc1 = func();
// myFunc1();
// myFunc1();
