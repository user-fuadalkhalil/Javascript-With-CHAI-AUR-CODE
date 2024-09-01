// /***** conversion ****/


// let score = "33abc"

// // console.log(typeof score);
// // console.log(typeof(score));

// let valueInNumber = Number(score)
// // console.log(typeof valueInNumber);
// // console.log(valueInNumber);


// //convert in number
// // "33" => 33
// // "33abc" => NaN
// // true => 1; false => 0

// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// // console.log(booleanIsLoggedIn);

// //boolean conversion
// //1 => true; 0 => false
// //"" => false
// //"fuad" => true


// let someNumber = 33

// let stringNumber = String(someNumber)
// // console.log(stringNumber);
// // console.log(typeof stringNumber);



// /******** operations ********/

// // console.log(2+2);
// // console.log(2-2);
// // console.log(2*2);
// // console.log(2/2);
// // console.log(2**2);
// // console.log(2%2);

// let str1 = "hello"
// let str2 = " fuad"

// let str3 = str1 + str2
// // console.log(str3);

// // console.log("1" + 2);
// // console.log(1 + "2");
// // console.log("1" + 2 + 2);
// // console.log(1 + 2 + "2");

// // console.log(3 + 5 / 6 * 7 % 8)  //bad practice

// // console.log(+true);  //not allowed
// // console.log(+"");    //not allowed

// let gameCounter = 100
// ++gameCounter
// // console.log(gameCounter);


/***** conversion ****/
let score = "33abc"

//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof(valueInNumber));
//console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN
//true => 1, false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);


//1 => true, 0 => false
//"" => false
//"fuad" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


/******** operations ********/

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%3);

let str1 = "hello"
let str2 = " fuad"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2 + 3);
// console.log(1 + 2 + "3");

// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2 // not preferred 


// prefix and postfix increment in js from mdn

let x = 3
const y = x++
console.log(`x:${x}, y:${y}`);

let a = 3
const b = ++a
console.log(`a:${a}, b:${b}`);
