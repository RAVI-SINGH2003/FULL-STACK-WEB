//Events Module => all core modules such as fs ,os ,http belong to ecent modules
//Node.js has a built-in module ,called'Events';
//where you can create-,fire-,and listen for- your own events


/* to use events in nodejs create a class first letter should be capital */
// const EventEmitter = require("events");

/*create a object*/
// const event = new EventEmitter();

/*creating a name event sayMyName and firing it */
/* Note : event creation line wil always be blow to the event on line */
// event.on('sayMyName',()=>{
//     console.log("Your name is Ravi")

// })

// event.emit("sayMyName");

// ################################Task ##########################################

//Example 1 - Resistering for the event to be fired only one time using once.
//Example 2 - Create an event emitter instance and register a couple of callbacks
//Example 3 - registering for the event with callback parameters

// Example 1 - Resistering for the event to be fired only one time using once.

// const EventEmitter = require("events");
// const event = new EventEmitter();
// event.on('sayMyName',()=>{
//     console.log("Your name is Ravi")

// })
// event.emit("sayMyName");

//Example 2 - Create an event emitter instance and register a couple of callbacks

// const EventEmitter = require("events");
// const event = new EventEmitter();
// event.on("sayMyName",()=>{
//     console.log("My name is Ravi")
// })
// event.on("sayMyName",()=>{
//     console.log("My name is Singh")
// })
// event.on("sayMyName",()=>{
//     console.log("My name is ji")
// })
// event.emit("sayMyName");

//Example 3 - registering for the event with callback parameters

// const EventEmitter = require("events");
// const event = new EventEmitter();
// event.on("checkPage",(sc ,msg)=>{
//     console.log(`Status code is ${sc} and the page is ${msg}`);
// })
// event.emit("checkPage",200,"ok");