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

    public damagePerSecond(): number { // Implements Method
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

interface Vehicle { // Interface Not Assign Implementions Interface Use In Structure Of Object
    make: string;
    model: number
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
        console.log(`The ${this.make} ${this.model}'s engine is now running.`);
    }
};

let myCar = new Car("Toyota", 2022);
myCar.startEngine();

abstract class Motorcycle { // Abstraction Implementions Hide & Assign Child Class
    make!: string;
    model!: string;
    abstract startEngine(): void;
};

class HarleyDavidson extends Motorcycle {
    constructor(make: string, model: string) {
        super();
        this.make = make;
        this.model = model;
    }

    startEngine() {
        console.log(`The ${this.make} ${this.model}'s engine is now running.`);
    }
};

let harley = new HarleyDavidson("Harley Davidson", "Iron 883");
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

// ============= Inheritance ============= //