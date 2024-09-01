const name = "Fuad"
const repoCount = 50

// console.log(name + " has " + repoCount + " repositories.");
// string concatenation

// console.log(`Hello, my name is ${name} and my repo count is ${repoCount}.`);
// string interpolation


const gameName = new String('Fuad-Al-Khalil')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('4'));
// console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4);
// console.log(newString);


const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   Fuad  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://chatgpt.com/c/b419f9e1%20-c572-4466-b003-70e8f7927478"

// console.log(url.replace('-', 'dash'));

// console.log(url.includes('chatgpt'));

console.log(gameName.split('-'));
