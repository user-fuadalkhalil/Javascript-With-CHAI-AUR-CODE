const user = {
  userName: "Fuad",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.userName = "Sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let userName = "Fuad";
//   console.log(this.userName);
// }

// chai();

// const chai = function () {
//   let userName = "Fuad";
//   console.log(this.userName);
// };

const chai = () => {
  let userName = "Fuad";
  console.log(this);
};

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => ({
  userName: "Fuad",
});

console.log(addTwo(3, 4));

// const myArray = [2, 5, 6, 8, 9];

// myArray.forEach();
