// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Fuad",
    [mySym]: "myKey1",
    age: 28,
    email: "waitfuad@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Satruday"]
}

// console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

jsUser.email = "fuad@chatgpt.com"
// console.log(jsUser.email);
// console.log(jsUser);

// Object.freeze(jsUser)

jsUser.email = "fuad@microsoft.com"
// console.log(jsUser.email);

jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greetingTwo = function(){
    console.log(`Hellor JS User ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());