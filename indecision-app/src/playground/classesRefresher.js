class Person {
    constructor(name, age = 0) {
        this.age = age;
        this.name = name;
    }

    getGreeting() {
        return `Hi, my name is ${this.name}.`
    }

    getDescription() {
        return `${this.name} is ${this.age} old!`
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation
    }

    getGreeting() {

        let greeting = super.getGreeting();

        if(this.hasHomeLocation()) {
            greeting += ` I am comming from ${this.homeLocation}`    
        }

        return greeting;
    }
}

const bojan = new Traveller('Bojan Milutinovic', 34, 'Belgrade')
const ben = new Traveller('Benjamin Franklin', 34)
const john = new Traveller()

console.log(john);

// console.log(bojan.getDescription());
// console.log(bojan.getGreeting());
// console.log(ben.getGreeting());