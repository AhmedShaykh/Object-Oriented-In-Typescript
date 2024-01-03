class Human {
    name;
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is a Human and is Eating Food");
    }
}
;
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is a Animal and is Eating Other Food");
    }
}
;
class Robot {
    name;
    constructor(name) {
        this.name = name;
    }
}
;
let h = new Human("Tom");
let a = new Animal("Goat");
let r = new Robot("R2-D2");
h = a; // Stale Object
h.eat();
r = a;
console.log(r.name);
let hum = new Animal("Dog"); // Fresh Object
hum.eat();
let r0 = new Animal("Donkey"); // In This Method Class Type Check Object Required Property & Method Than Accept It!
console.log(r0); // It Assign Same Property But Not Save Extra Property!
class WildAnimal {
    title;
    constructor(title) {
        this.title = title;
    }
    eat() {
        console.log(this.title + " is a Wild Animal");
    }
}
;
let wild = new WildAnimal("Tiger"); // Fresh Object
wild.eat();
wild.title = "Lion"; // Now Stale Object
wild.eat();
console.log(wild instanceof WildAnimal);
console.log(r0 instanceof Human);
console.log(h instanceof Animal);
// =================== Abstraction =================== //
class User {
    printName() {
        console.log(`Hello ${this.getName()}`);
    }
}
;
class MyAdmin extends User {
    getName() {
        return "Crypto";
    }
}
;
const MyAb = new MyAdmin();
MyAb.printName();
console.log(MyAb.getName());
class Character {
    name;
    damage;
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
}
;
class Goblin extends Character {
    attackSpeed;
    constructor(name, damage, attackSpeed) {
        super(name, damage);
        this.attackSpeed = attackSpeed;
    }
    damagePerSecond() {
        return this.damage * this.attackSpeed;
    }
}
;
const myCharacter = new Goblin("Thomas", 4, 7);
console.log(myCharacter.damagePerSecond());
console.log(myCharacter.name);
class Pet {
}
;
class Dog extends Pet {
    makeSound() {
        console.log("Woof Woof");
    }
}
;
class Cat extends Pet {
    makeSound() {
        console.log("Meow Meow");
    }
}
;
const pet = new Dog();
pet.makeSound();
const pet2 = new Cat();
pet2.makeSound();
;
class Car {
    make;
    model;
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    startEngine() {
        console.log(`The ${this.make} ${this.model}'s Engine is now Running.`);
    }
}
;
let myCar = new Car("Toyota", 2022);
myCar.startEngine();
class Motorcycle {
    make = "Harley Davidson";
    model;
}
;
class HarleyDavidson extends Motorcycle {
    constructor(model) {
        super();
        this.model = model;
    }
    startEngine() {
        console.log(`The ${this.make} ${this.model}'s Engine is now Running.`);
    }
}
;
let harley = new HarleyDavidson("Iron 883");
harley.startEngine();
// =================== Encapsulation =================== //
class Person {
    _name;
    constructor(name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
    get name() {
        return this.getName();
    }
    set name(value) {
        this._name = value;
    }
}
;
const man = new Person("Get Set");
console.log(man.name);
man.name = "Accessors";
console.log(man.name);
class Bank {
    #password;
    constructor(password) {
        this.#password = password;
    }
    get myPassword() {
        return this.#password;
    }
    set myPassword(value) {
        this.#password = value;
    }
}
;
const myBank = new Bank("Password");
console.log(myBank.myPassword);
myBank.myPassword = "My Password";
console.log(myBank.myPassword);
// =================== Inheritance =================== //
class Parent {
    name;
    constructor(name) {
        this.name = name;
    }
}
;
class Boy extends Parent {
    bike = "Black";
    getRide() {
        console.log(`${this.name} Bike Color Is ${this.bike}`);
    }
}
;
const ride = new Boy("Ali");
ride.getRide();
class Ai {
    action;
    time;
    constructor(action, time) {
        this.action = action;
        this.time = time;
    }
}
;
class Siri extends Ai {
    talk() {
        console.log("Hi I'm Siri");
        console.log(`Your Action: ${this.action}, Your Time: ${this.time}`);
    }
}
;
class OpenAi extends Ai {
    text;
    feedback;
    constructor(action, time, text) {
        super(action, time);
        this.text = text;
    }
    yourText() {
        console.log(`Yout Text: ${this.text}`);
    }
    chat() {
        console.log(`Your Action: ${this.action}, Your Time: ${this.time}, \nYour Text: ${this.text}, Your FeedBack: ${this.feedback}`);
    }
}
;
class Alexa extends Ai {
    response;
    constructor(action, time, response) {
        super(action, time);
        this.response = response || "Response";
    }
}
;
const myAi1 = new Siri("Task 1", "5 Mins");
myAi1.talk();
const myAi2 = new OpenAi("Task 2", "2 Mins", "Solve My Error");
myAi2.yourText();
myAi2.feedback = "Your Are Amazing Chat GTP";
myAi2.chat();
const myAi3 = new Alexa("Task 3", "7 Mins");
console.log(myAi3);
myAi3.response = "Error 404!";
console.log(`Response: ${myAi3.response}`);
// =================== Polymorphism =================== //
class Engine {
    speed;
    working;
    constructor(speed, working) {
        this.speed = speed;
        this.working = working;
    }
    ;
    progress() {
        console.log(`Engine Speed: ${this.speed}, Engine Working Hours ${this.working} Unstoppable`);
    }
}
;
class EngineX extends Engine {
    restTime;
    constructor(speed, working, restTime) {
        super(speed, working);
        this.restTime = restTime;
    }
    ;
    progress() {
        console.log(`Engine Speed: ${this.speed}, Engine Working Hours ${this.working}, \nBut Rest Time is ${this.restTime} Hours`);
    }
}
;
const myEngineX = new EngineX("12x Pro", 12, 2);
myEngineX.progress();
const myEngine = new Engine("10x", 9);
myEngine.progress();
export {};
