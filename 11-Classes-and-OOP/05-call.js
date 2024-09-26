function setUserName(userName) {
    //complex DB Calls
    this.userName = userName
    console.log('Called');
    
}

function createUser(userName, email, password) {
    setUserName.call(this, userName)
    
    this.email = email
    this.password = password
}

const chai = new createUser('chai', 'chai@fb.com', '123')
console.log(chai);
