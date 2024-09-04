// console.log("F");
// console.log("U");
// console.log("A");
// console.log("D");

function sayMyname() {
  console.log("F");
  console.log("U");
  console.log("A");
  console.log("D");
}

// sayMyname();

// function addTwoNumbers(number1, number2 /*parameter */) {
//   console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2 /*parameter */) {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;
}

const resultOne = addTwoNumbers(3, 5 /*arguments */);

// console.log("Result:", resultOne);

function loginUserMessage(userName = "No-One") {
  if (!userName) {
    console.log("Please enter a username.");
    return;
  }
  return `${userName} just logged in`;
}

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());

function calculateCartPrice(value1, value2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 600, 800));

const user = {
  userName: "Fuad",
  price: 1999,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.userName} and price is ${anyObject.price}`
  );
}

// handleObject(user);
// handleObject({ userName: "Sam", price: 399 });

const myNewArray = [200, 400, 600];

function returnScondValue(getArray) {
  return getArray[1];
}

// console.log(returnScondValue(myNewArray));
console.log(returnScondValue([100, 300, 500]));
