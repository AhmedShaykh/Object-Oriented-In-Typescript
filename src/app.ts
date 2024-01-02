class Human {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is a Human and is Eating Food");
    }
};

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is a Animal and is Eating Other Food");
    }
};

class Robot {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
};

let h: Human = new Human("Tom");
let a: Animal = new Animal("Goat");
let r: Robot = new Robot("R2-D2");

h = a; // Stale Object
h.eat();

r = a;
console.log(r.name);

let hum: Human = new Animal("Dog"); // Fresh Object
hum.eat();

let r0: Robot = new Animal("Donkey"); // In This Method Class Type Check Object Same Property & Method Than Accept It!
console.log(r0.name); // It Assign Same Property But Not Assign Extra Property!

class WildAnimal {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    eat() {
        console.log(this.title + " is a Wild Animal and is Eating Animals");
    }
};

let wild: WildAnimal = new WildAnimal("Tiger"); // Fresh Object
wild.eat();

wild.title = "Lion"; // Now Stale Object
wild.eat();

console.log(wild instanceof WildAnimal);

console.log(r0 instanceof Human);

console.log(h instanceof Animal);

// ============= Abstraction ============= //

abstract class User { // Abstraction Not Use Object Rather Inherit Other Class
    abstract getName(): string; // Abstraction Method Use In Abstract Class

    printName(): void {
        console.log(`Hello ${this.getName()}`);
    }
};

class MyAdmin extends User {
    getName(): string { // Abstraction Property Or Method Define In Class Than Implements In Child Class 
        return "Crypto"
    }
};

const MyAb = new MyAdmin();
MyAb.printName();

console.log(MyAb.getName());

abstract class Character {
    public name: string;
    public damage: number;
    public attackSpeed: number;

    constructor(name: string, damage: number, speed: number) {
        this.name = name;
        this.damage = damage;
        this.attackSpeed = speed;
    }

    public abstract damagePerSecond(): number; // Implementions Hide
};

class Goblin extends Character {
    constructor(name: string, damage: number, speed: number) {
        super(name, damage, speed);
    }

    public damagePerSecond(): number { // Implements Assign
        return this.damage * this.attackSpeed;
    }
};

const myCharacter = new Goblin("Thomas", 4, 7);
console.log(myCharacter.damagePerSecond());

abstract class Pet {
    abstract makeSound(): void

};

class Dog extends Pet {
    makeSound(): void {
        console.log("Woof Woof");
    }
};

class Cat extends Pet {
    makeSound(): void {
        console.log("Meow Meow");
    }
};

const pet = new Dog();
pet.makeSound();

const pet2 = new Cat();
pet2.makeSound();

interface Vehicle { // Interface Not Assign Implementions Interface Use Only Structure Of Object
    make: string;
    model: number;
    startEngine(): void;
};

class Car implements Vehicle {
    make: string;
    model: number;

    constructor(make: string, model: number) {
        this.make = make;
        this.model = model;
    }

    startEngine() {
        console.log(`The ${this.make} ${this.model}'s Engine is now Running.`);
    }
};

let myCar = new Car("Toyota", 2022);
myCar.startEngine();

abstract class Motorcycle {
    make: string = "Harley Davidson"; // Abstraction Implementions Hide Then Assign Child Class
    model!: string;
    abstract startEngine(): void;
};

class HarleyDavidson extends Motorcycle {
    constructor(model: string) {
        super();
        this.model = model;
    }

    startEngine() {
        console.log(`The ${this.make} ${this.model}'s Engine is now Running.`);
    }
};

let harley = new HarleyDavidson("Iron 883");
harley.startEngine();

// ============= Encapsulation ============= //

class Person {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    private getName() { // Encapsulation Method And Property Hide & Abstraction Implementions Hide
        return this._name;
    }

    get name(): string {
        return this.getName();
    }

    set name(value: string) {
        this._name = value;
    }
};

const man = new Person('Get Set');
console.log(man.name);

man.name = "Accessors";
console.log(man.name);

class Bank {
    #password: string;

    constructor(password: string) {
        this.#password = password;
    }

    get myPassword(): string {
        return this.#password;
    }

    set myPassword(value: string) {
        this.#password = value;
    }
};

const myBank = new Bank("Password");
console.log(myBank.myPassword);

myBank.myPassword = "My Password";
console.log(myBank.myPassword);

// ============= Inheritance ============= //

class Parent {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
};

class Boy extends Parent {
    bike: string = "Black";

    getRide() {
        console.log(`${this.name} Bike Color Is ${this.bike}`);
    }
};

const ride = new Boy("Ali");
ride.getRide();

class Ai {
    action: string;
    time: string;

    constructor(action: string, time: string) {
        this.action = action;
        this.time = time;
    }
};

class Siri extends Ai {
    talk(): void {
        console.log("Hi I'm Siri");
        console.log(`Your Action: ${this.action}, Your Time: ${this.time}`);
    }
};

class OpenAi extends Ai {
    text: string;
    feedback!: string;

    constructor(action: string, time: string, text: string) {
        super(action, time);
        this.text = text;
    }

    yourText(): void {
        console.log(`Yout Text: ${this.text}`);
    }

    chat() {
        console.log(`Your Action: ${this.action}, Your Time: ${this.time}, \nYour Text: ${this.text}, Your FeedBack: ${this.feedback}`);
    }
};

class Alexa extends Ai {
    response: string;

    constructor(action: string, time: string, response?: string) {
        super(action, time);
        this.response = response || "Your Response";
    }
};

const myAi1 = new Siri("Task 1", "5 Mins");
myAi1.talk();

const myAi2 = new OpenAi("Task 2", "2 Mins", "Solve My Error");
myAi2.yourText();

myAi2.feedback = "Your Are Amazing Chat GTP";
myAi2.chat();

const myAi3 = new Alexa("Task 3", "7 Mins");
console.log(myAi3);

myAi3.response = "Error 404!";
console.log(`Your Response: ${myAi3.response}`);

// ============= Polymorphism ============= //

class Engine {
    speed: string;
    working: number;

    constructor(speed: string, working: number) {
        this.speed = speed;
        this.working = working;
    };

    progress() {
        console.log(`Engine Speed: ${this.speed}, Engine Working Hours ${this.working} Unstoppable`);
    }
};

class EngineX extends Engine {
    restTime: number;

    constructor(speed: string, working: number, restTime: number) {
        super(speed, working);
        this.restTime = restTime;
    };

    progress() {
        console.log(`Engine Speed: ${this.speed}, Engine Working Hours ${this.working}, \nBut Rest Time is ${this.restTime} Hours`);
    }
};

const myEngineX = new EngineX("12x Pro", 12, 2);
myEngineX.progress();

const myEngine = new Engine("10x", 9);
myEngine.progress();