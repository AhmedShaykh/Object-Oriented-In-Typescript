// ============= Abstraction ============= //

abstract class User { // Abstraction Not Use Object Rather Inheritance Other Class
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

abstract class Animal {
    abstract makeSound(): void

};

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof woof");
    }
};

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow meow");
    }
};

const animal = new Dog();
animal.makeSound();

const animal2 = new Cat();
animal2.makeSound();

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
        console.log(`The Color Of ${this.name} Bike Is ${this.bike}`);
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