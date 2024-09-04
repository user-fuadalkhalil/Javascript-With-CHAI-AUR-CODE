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
console.log(loginUserMessage());
