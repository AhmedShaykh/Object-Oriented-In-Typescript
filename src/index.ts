class Admin {
    fName: String = "Ahmed"; // Initial Value
    mName!: String; // No Undefined Value
    lName: String = "Shaikh";
};

const username = new Admin();
console.log(`${username.fName} ${username.mName = "Saleem"} ${username.lName}`);

username.lName = "Shaykh"; // Initial Value Assign New Value
console.log(`${username.fName} ${username.lName}`);

class Data {
    name: String; // Property

    constructor(name: String) {
        this.name = name;
    }
};

const show: Data = new Data("Learning OOP In TypeScript");
console.log(show.name);

show.name = "Learning Classes In TypeScript";
console.log(show.name); // Assign New Value

class Human {
    name: String;
    food: String;

    constructor(name: String, food: String) {
        this.name = name;
        this.food = food;
    }

    eat() { // Method
        console.log(`${this.name} is a Human & is Eating ${this.food}`);
    }
};

const user1: Human = new Human("Bilal", "Biryani");
console.log(user1);
user1.eat();

const user2: Human = new Human("Abrar", "Chips");
user2.eat();

class Calculator { // Overloads
    add(x: number, y: number): number;

    add(x: string, y: string): string;

    add(x: any, y: any): any {
        return x + y;
    }
};

const cal = new Calculator();
console.log(cal.add(4, 10));

class Point {
    x: number = 10;
    y: number = 20;

    scale(n: number): void {
        this.x *= n;
        this.y *= n;
    }
};

const val1: Point = new Point();
console.log(val1.x, val1.y);
val1.scale(4);
console.log(val1.x, val1.y);

// ============= Getters / Setters (Encapsulation) ============= //

class Hide {
    private _length: number = 0; // Accessors

    // Accessors Private Value Not Access Directly Get Value In Method
    get length() {
        return this._length;
    }

    set length(value: number) {
        this._length += value;
    }
};

const hidden = new Hide();
console.log(hidden.length); // Getter

hidden.length = 5; // Setter
console.log(hidden.length);

class Pointer {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }
};

const pointer = new Pointer(1, 2);
console.log(pointer.x, pointer.y);

pointer.x = 3;
console.log(pointer.x, pointer.y);

class ReadData {
    readonly name: String = "AHM X"; // Initial Value No Assign New Value
};

const read: ReadData = new ReadData();
console.log(read.name);

class ReadValue {
    readonly value: String; // Value Assign In One Time No Assign New Value

    constructor(value: string) {
        this.value = value;
    }
};

const readVal: ReadValue = new ReadValue("CDK Start");
console.log(readVal.value);

const readVal2: ReadValue = new ReadValue("Yarn Start"); // But Value Assign New Fresh Object
console.log(readVal2.value);

// ============= Inheritance ============= //

class Car {
    color: String;

    constructor(color: string) {
        this.color = color
    }
};

class Bugatti extends Car {
    price: Number;

    constructor(color: string, price: number) {
        super(color);
        this.price = price;
    }

    display(): void {
        console.log("Bugatti Color: " + this.color);
        console.log("Bugatti Price: " + this.price);
    }
};

const myCar1: Bugatti = new Bugatti("Black", 40000);
myCar1.display();

class Tesla extends Car {
    feature: String;

    constructor(color: string, feature: string) {
        super(color);
        this.feature = feature;
    }

    drive(): void {
        console.log(`Tesla Color: ${this.color}`);
        console.log(`Tesla Feature: ${this.feature}`);
    }
};

const myCar2: Tesla = new Tesla("Grey", "AI");
myCar2.drive();

myCar2.color = "Red";
myCar2.drive();

class Lambo extends Car {
    expensive: Boolean = true;
};

const myCar3 = new Lambo("Cyan");
console.log(myCar3);

class Civic extends Car {
    model: Number;
    company!: String;

    constructor(color: string, model: number) {
        super(color);
        this.model = model;
    }

    displayMethod(): void {
        if (this.company === undefined) {
            console.log(`Civic Color: ${this.color} & Model: ${this.model}`);
        } else {
            console.log(`Civic Color: ${this.color} & Model: ${this.model}`);
            console.log(`Civic Company Name: ${this.company}`);
        }
    }
};

let myCar4 = new Civic("Blue", 2023);
myCar4.displayMethod();

myCar4.company = "Honda";

myCar4.displayMethod();

// ============= OverRide (Polymorphism) ============= //

class Rocket {
    color: String;
    company: String;
    target: String;

    constructor(color: string, company: string, target: string) {
        this.color = color;
        this.company = company;
        this.target = target;
    }

    power(state: boolean): string {
        if (state === true) {
            return "Ready To Take Off.";
        } else {
            return "Shutting Down Engine.";
        }
    }
};

class Falcon extends Rocket {
    allTestingComplete = true;

    go(): void {
        console.log(`Color: ${this.color}, Company: ${this.company}, Target: ${this.target}, All Testing Complete: ${this.allTestingComplete}`);
    }

    power(state: boolean): string { // OverRide
        if (state === true) {
            return "Falcon Ready To Take Off.";
        } else {
            return "Falcon Shutting Down Engine.";
        }
    }
};

const fly: Falcon = new Falcon("Grey", "SpaceX", "Going To Mars");
console.log(fly.power(true));

fly.go();
console.log(fly.power(false));

class School {
    studentName: String;
    teacherName: String;
    classTiming: String | Number;

    constructor(studentName: string, teacherName: string, classTiming: string | number) {
        this.studentName = studentName;
        this.teacherName = teacherName;
        this.classTiming = classTiming;
    }
};

class SchoolDay extends School {
    dayOfClass: String = "Wednesday";

    constructor(studentName: string, teacherName: string, classTiming: number) { // OverRide
        super(studentName, teacherName, classTiming);
    }

    onClass() {
        console.log(`Student Name: ${this.studentName}`);
        console.log(`Teacher Name: ${this.teacherName}`);
        console.log(`Class Timing: ${this.classTiming} PM`);
        console.log(`Day Of Class: ${this.dayOfClass}`);
    }
};

const classDay = new SchoolDay("Ahmed", "Zia", 6);
classDay.onClass();

const myClass = new School("Ahmed", "Adil", "8 PM");
console.log(myClass.classTiming);

class Shape {
    area(): number {
        return 0;
    }
};

class Square extends Shape {
    side: number;

    constructor(side: number) {
        super();
        this.side = side;
    }

    area() {
        return this.side ** 2
    }
};

const sq = new Square(4);
console.log(sq.area());

const hexa = new Square(6);
console.log(hexa.area());

class Vehicle {
    drive(): void {
        console.log("Driving...");
    }
};

class SportCar extends Vehicle {
    drive(): void {
        console.log("Speeding up...");
    }
};

class ElectricCar extends SportCar {
    drive(): void {
        console.log("Accelerating Silently...");
    }
};

const driving = new ElectricCar();
driving.drive();

const driving2 = new SportCar();
driving2.drive();

// ============= Index Signatures ============= //

class MyClass {
    [s: string]: boolean | ((s: string) => boolean);

    isValid = true;

    check(s: string) {
        return this[s] as boolean;
    }
};

let myObj = new MyClass();
myObj["isExist"] = false;

console.log(myObj.isValid);
console.log(myObj.check("isExist"));
console.log(myObj.check("isValid"));

// ============= Implements ============= //

interface Pingable {
    ping(): void;
};

class Sonar implements Pingable { // Implements Use In Interface
    ping(): void {
        console.log("Ping!");
    }
};

class Ball implements Pingable {
    pong(): void {
        console.log("Pong!");
    }

    ping(): void {
        console.log("Ping 2!");
    }
};

const bounce = new Sonar();
bounce.ping();

const bounce2 = new Ball();
bounce2.pong();
bounce2.ping();

class Animal {
    move() {
        console.log("Moving Along!");
    }
};

class Dog implements Animal { // Implements Also Use In Classes
    move() {                  // But Parent Class (Method or Property) Repeat Implement In Child Class
        console.log("Moving Along!");
    }

    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log("Woof!");
        }
    }
};

class Cat extends Animal { // Extends Only Use In Classes Not Interface
    meow(times: number) {
        for (let i = 0; i < times; i++) {
            console.log("Meow!");
        }
    }
};

const d = new Dog();
d.woof(3);
d.move();

const c = new Cat();
c.meow(4);

// ============= Modifiers ============= //

class Greeter {
    greeting() { // Default Visibility Is Public
        console.log("Hi!");
    }
};

const greet = new Greeter();
greet.greeting();

class Greeter2 {
    private name: string; // Private Property Only Use In Own Class 

    constructor(_name: string) {
        this.name = _name;
    }

    greeting() {
        console.log("Hi " + this.name);
    }
};

const greet2 = new Greeter2("Ahmed");
greet2.greeting();

class Greeter3 {
    private name: String = "Metaverse"; // Private Property Not Read Directly & Change It...

    greeting() {
        console.log("Hi " + this.name);
    }
};

const greet3 = new Greeter3();
greet3.greeting();

class Base {
    private x: Number = 0;
};

const checker = new Base();
console.log(checker["x"]); // But Problem In TypeScript Is Private Property Assign In This Method!

class Check {
    #x: Number; // JavaScript This New Native Build-in Private Property Solve The Issue!

    constructor(_x: number) {
        this.#x = _x;
    }

    greeting() {
        console.log(this.#x);
    }
};

const checker2 = new Check(7);
checker2.greeting();

class Greeter5 {
    public greet() {
        console.log("Hello, " + this.getName());
    }

    protected getName() { // Protected Property Access In Child Class
        return "World";
    }
};

class SpecialGreeter extends Greeter5 {
    public hola() {
        console.log("Hola, " + this.getName());
    }
};

const greet5 = new SpecialGreeter();
greet5.greet();
greet5.hola();

// ============= Static ============= //

class MyStatic {
    static x: Number = 0;
    y: Number = 1;

    static printX(): void {
        console.log(MyStatic.x);
    }
};

console.log(MyStatic.x) // Static Value Only Use In Classes Not Object
MyStatic.printX();

const stat = new MyStatic();
console.log(stat.y);

class MyStatic2 {
    private static count: number = 0; // State Maintain
    id: number = 0;
    name: string;

    constructor(name: string) {
        this.name = name;
        this.id = ++MyStatic2.count; // Count Is Static
    }
};

const objE = new MyStatic2("Ahmed");
console.log(`${objE.name}, ${objE.id}`);

const objE2 = new MyStatic2("Saleem");
console.log(`${objE2.name}, ${objE2.id}`);

// ============= Generic Classes ============= //

class Box<T> {
    contents: T;

    constructor(value: T) {
        this.contents = value;
    }
};

const type = new Box<Boolean>(true);
console.log(type.contents);

const type2 = new Box<Number>(202);
console.log(type2.contents);

class MyTypes<T1, T2> {
    name: T1;
    id: T2;

    constructor(name: T1, id: T2) {
        this.name = name;
        this.id = id;
    }

    generic() {
        console.log(`${this.name}, ${this.id}`)
    }
};

const gener = new MyTypes<string, number>("Ahmed Shaykh", 786);
gener.generic();

// ============= Abstract ============= //

abstract class Crypto {
    abstract encrypt(): string; // Implementions Hide
    abstract decrypt(): string;
};

class BTC extends Crypto {
    key: string;

    constructor(key: string) {
        super();
        this.key = key;
    }

    encrypt(): string { // Than Assign Implementions It Child Class
        return "Encrypted Text 1";
    }

    decrypt(): string {
        return "Decrypted Text 1";
    }
};

class ETH extends Crypto {
    key: number;

    constructor(key: number) {
        super();
        this.key = key;
    }

    encrypt(): string {
        return "Encrypted Text 2";
    }

    decrypt(): string {
        return "Decrypted Text 2";
    }
};

const btc = new BTC("fbfbgjgriejrenfknfsqdm");
console.log(btc.encrypt());
console.log(btc.decrypt());

const eth = new ETH(404);
console.log(eth.encrypt());
console.log(eth.decrypt());