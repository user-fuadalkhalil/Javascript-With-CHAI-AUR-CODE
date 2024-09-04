// const tinderUser = new Object() // singleton object
const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Fuad"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Fuad",
            lastName: "Al Khalil"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const objectOne = {1: "a", 2: "b"}
const objectTwo = {3: "a", 4: "b"}
const objectFour = {5: "a", 6: "b"}

// const objectThree = {objectOne, objectTwo}
// const objectThree = Object.assign({}, objectOne, objectTwo, objectFour)

const objectThree = {...objectOne, ...objectTwo, ...objectFour}
// console.log(objectThree);

const users = [
    {
        id: 1,
        email: "f@gmail.com"
    },
    {
        id: 1,
        email: "f@gmail.com"
    },
    {
        id: 1,
        email: "f@gmail.com"
    },
    {
        id: 1,
        email: "f@gmail.com"
    },
    {
        id: 1,
        email: "f@gmail.com"
    },
]


users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);

// {
//     "name": "fuad",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

