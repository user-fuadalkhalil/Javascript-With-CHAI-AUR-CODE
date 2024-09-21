// let myName = 'hitesh    '

// console.log(myName.truelength);


let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman:'sling',

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function() {
    console.log(`Hitesh is present in all objects.`);
    
}

Array.prototype.heyHitesh = function() {
    console.log(`Hitesh says hello.`);
    
}

// heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh()


//++++++++++ Inheritence ++++++++++//

const user = {
    userName;'Chai',
    email: 'chai@google.com'
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable = false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user


//++++++++++ Modern syntax ++++++++++//

Object.setPrototypeOf(teachingSupport, teacher)