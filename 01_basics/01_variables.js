const accountId = 11223344
let accountEmail = "waitfuad@gmail.com"
let accountPassword = "789654123"
accountCity = "Dhaka"


// accountId = 332211   // constant overwrite is not allowd

accountEmail = "fuad09603@gmail.com"
accountPassword = "123456789"
accountCity = "Bhola"

// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]); //printing variables as a tabular fom

/*
  prefer not to use var
  because of issue in block scope and functional scope
*/