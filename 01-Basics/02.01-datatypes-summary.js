// Primitive Datatype

// Seven Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreOne = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 125646546546465n 



//Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let person = {
    name: "hitesh",
    age: 25
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof id);




/******************memory************/

//Stack Memory (Primitive), Heap Memory (Non-Primitive)

let myYoutubename = "Fuad Al Khalil"

let anotherName = myYoutubename
anotherName = "Crypton"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user.@gmail.com",
    bkash: "user@bkash.com"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
