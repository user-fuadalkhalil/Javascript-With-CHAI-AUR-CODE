const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email.");
}

//++++++++++ falsy values ++++++++++//
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//++++++++++ truthy values ++++++++++//
// "0", 'false', " ", [], {}, function(){},

// if (userEmail.length == 0) {
//   console.log("Array is empty");
// }

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}

//++++++++++Nullish Coalescing Operator (??)++++++++++// null, undefined

let value1;
// value1 = 5 ?? 10;
// value1 = null ?? 10;
// value1 = undefined ?? 15;
// value1 = null ?? 10 ?? 15;

// console.log(value1);

//++++++++++ Ternary Operator ++++++++++//
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
