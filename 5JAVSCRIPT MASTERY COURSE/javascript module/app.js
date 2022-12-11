import {firstName as fname} from './utils/fname.js'
import {age} from './utils/age.js'
//jisko {} me nahi lika wo default export ho raha hai aur uska name hum khuch bhi rakh sakte hai
import p,{hello,Person2} from './utils/Person.js'

console.log(fname ,age);

const person1 = new p("John","Doe",22);
const person2  = new Person2("J","D",22);
person1.info()
console.log(person1);
console.log(hello);
console.log(person2);


