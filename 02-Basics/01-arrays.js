// Array

const myArray = [0, 1, 2, 3, 4, 5, 8, 9]
const myHeros = ["thor", "spiderman"]

const myArray2 = new Array(1, 2, 3, 4)

// console.log(myArray[1]);

// Array Methods

// myArray.push(6)
// myArray.push(12)
// myArray.pop()

// myArray.unshift(9)
// myArray.shift()


// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));

const newArray = myArray.join()

// console.log(myArray);
// console.log(newArray);

// Slice, Splice

console.log("Original Array", myArray);

const myNewArrayOne = myArray.slice(1, 3)
console.log("Slice", myNewArrayOne);
console.log("After Slice", myArray);

const myNewArrayTwo = myArray.splice(1, 3)
console.log("Splice", myNewArrayTwo);
console.log("After Splice", myArray);