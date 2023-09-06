// ============== TypeScript Converted JavaScript ============== //

class Admin {
    fName = "Ahmed"; // Initial Value
    mName; // No Undefined Value
    lName = "Shaikh";
}
;
const username = new Admin();
console.log(`${username.fName} ${username.mName = "Saleem"} ${username.lName}`);
username.lName = "Shaykh"; // Initial Value Assign New Value
console.log(`${username.fName} ${username.lName}`);
class Data {
    name; // Property
    constructor(name) {
        this.name = name;
    }
}
;
const show = new Data("Learning OOP In TypeScript");
console.log(show.name);
show.name = "Learning Classes In TypeScript";
console.log(show.name); // Assign New Value
class Human {
    name;
    food;
    constructor(name, food) {
        this.name = name;
        this.food = food;
    }
    eat() {
        console.log(`${this.name} is a Human & is Eating ${this.food}`);
    }
}
;
const user1 = new Human("Bilal", "Biryani");
console.log(user1);
user1.eat();
const user2 = new Human("Abrar", "Chips");
user2.eat();
class Calculator {
    add(x, y) {
        return x + y;
    }
}
;
const cal = new Calculator();
console.log(cal.add(4, 10));
class Point {
    x = 10;
    y = 20;
    scale(n) {
        this.x *= n;
        this.y *= n;
    }
}
;
const val1 = new Point();
console.log(val1.x, val1.y);
val1.scale(4);
console.log(val1.x, val1.y);
// ============= Getters / Setters (Encapsulation) ============= //
class Hide {
    _length = 0; // Accessors
    // Accessors Private Value Not Access Directly Get Value In Method
    get length() {
        return this._length;
    }
    set length(value) {
        this._length += value;
    }
}
;
const hidden = new Hide();
console.log(hidden.length); // Getter
hidden.length = 5; // Setter
console.log(hidden.length);
class Pointer {
    _x;
    _y;
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
}
;
const pointer = new Pointer(1, 2);
console.log(pointer.x, pointer.y);
pointer.x = 3;
console.log(pointer.x, pointer.y);
class ReadData {
    name = "AHM X"; // Initial Value No Assign New Value
}
;
const read = new ReadData();
console.log(read.name);
class ReadValue {
    value; // Value Assign In One Time No Assign New Value
    constructor(value) {
        this.value = value;
    }
}
;
const readVal = new ReadValue("CDK Start");
console.log(readVal.value);
const readVal2 = new ReadValue("Yarn Start"); // But Value Assign New Fresh Object
console.log(readVal2.value);
// ============= Inheritance ============= //
class Car {
    color;
    constructor(color) {
        this.color = color;
    }
}
;
class Bugatti extends Car {
    price;
    constructor(color, price) {
        super(color);
        this.price = price;
    }
    display() {
        console.log("Bugatti Color: " + this.color);
        console.log("Bugatti Price: " + this.price);
    }
}
;
const myCar1 = new Bugatti("Black", 40000);
myCar1.display();
class Tesla extends Car {
    feature;
    constructor(color, feature) {
        super(color);
        this.feature = feature;
    }
    drive() {
        console.log(`Tesla Color: ${this.color}`);
        console.log(`Tesla Feature: ${this.feature}`);
    }
}
;
const myCar2 = new Tesla("Grey", "AI");
myCar2.drive();
myCar2.color = "Red";
myCar2.drive();
class Lambo extends Car {
    expensive = true;
}
;
const myCar3 = new Lambo("Cyan");
console.log(myCar3);
class Civic extends Car {
    model;
    company;
    constructor(color, model) {
        super(color);
        this.model = model;
    }
    displayMethod() {
        if (this.company === undefined) {
            console.log(`Civic Color: ${this.color} & Model: ${this.model}`);
        }
        else {
            console.log(`Civic Color: ${this.color} & Model: ${this.model}`);
            console.log(`Civic Company Name: ${this.company}`);
        }
    }
}
;
let myCar4 = new Civic("Blue", 2023);
myCar4.displayMethod();
myCar4.company = "Honda";
myCar4.displayMethod();
// ============= OverRide (Polymorphism) ============= //
class Rocket {
    color;
    company;
    target;
    constructor(color, company, target) {
        this.color = color;
        this.company = company;
        this.target = target;
    }
    power(state) {
        if (state === true) {
            return "Ready To Take Off.";
        }
        else {
            return "Shutting Down Engine.";
        }
    }
}
;
class Falcon extends Rocket {
    allTestingComplete = true;
    go() {
        console.log(`Color: ${this.color}, Company: ${this.company}, Target: ${this.target}, All Testing Complete: ${this.allTestingComplete}`);
    }
    power(state) {
        if (state === true) {
            return "Falcon Ready To Take Off.";
        }
        else {
            return "Falcon Shutting Down Engine.";
        }
    }
}
;
const fly = new Falcon("Grey", "SpaceX", "Going To Mars");
console.log(fly.power(true));
fly.go();
console.log(fly.power(false));
class School {
    studentName;
    teacherName;
    classTiming;
    constructor(studentName, teacherName, classTiming) {
        this.studentName = studentName;
        this.teacherName = teacherName;
        this.classTiming = classTiming;
    }
}
;
class SchoolDay extends School {
    dayOfClass = "Wednesday";
    constructor(studentName, teacherName, classTiming) {
        super(studentName, teacherName, classTiming);
    }
    onClass() {
        console.log(`Student Name: ${this.studentName}`);
        console.log(`Teacher Name: ${this.teacherName}`);
        console.log(`Class Timing: ${this.classTiming} PM`);
        console.log(`Day Of Class: ${this.dayOfClass}`);
    }
}
;
const classDay = new SchoolDay("Ahmed", "Zia", 6);
classDay.onClass();
const myClass = new School("Ahmed", "Adil", "8 PM");
console.log(myClass.classTiming);
class Shape {
    area() {
        return 0;
    }
}
;
class Square extends Shape {
    side;
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side ** 2;
    }
}
;
const sq = new Square(4);
console.log(sq.area());
const hexa = new Square(6);
console.log(hexa.area());
class Vehicle {
    drive() {
        console.log("Driving...");
    }
}
;
class SportCar extends Vehicle {
    drive() {
        console.log("Speeding up...");
    }
}
;
class ElectricCar extends SportCar {
    drive() {
        console.log("Accelerating Silently...");
    }
}
;
const driving = new ElectricCar();
driving.drive();
const driving2 = new SportCar();
driving2.drive();
// ============= Index Signatures ============= //
class MyClass {
    isValid = true;
    check(s) {
        return this[s];
    }
}
;
let myObj = new MyClass();
myObj["isExist"] = false;
console.log(myObj.isValid);
console.log(myObj.check("isExist"));
console.log(myObj.check("isValid"));
;
class Sonar {
    ping() {
        console.log("Ping!");
    }
}
;
class Ball {
    pong() {
        console.log("Pong!");
    }
    ping() {
        console.log("Ping 2!");
    }
}
;
const bounce = new Sonar();
bounce.ping();
const bounce2 = new Ball();
bounce2.pong();
bounce2.ping();
class Animal {
    move() {
        console.log("Moving Along!");
    }
}
;
class Dog {
    move() {
        console.log("Moving Along!");
    }
    woof(times) {
        for (let i = 0; i < times; i++) {
            console.log("Woof!");
        }
    }
}
;
class Cat extends Animal {
    meow(times) {
        for (let i = 0; i < times; i++) {
            console.log("Meow!");
        }
    }
}
;
const d = new Dog();
d.woof(3);
d.move();
const c = new Cat();
c.meow(4);
// ============= Modifiers ============= //
class Greeter {
    greeting() {
        console.log("Hi!");
    }
}
;
const greet = new Greeter();
greet.greeting();
class Greeter2 {
    name; // Private Property Only Use In Own Class 
    constructor(_name) {
        this.name = _name;
    }
    greeting() {
        console.log("Hi " + this.name);
    }
}
;
const greet2 = new Greeter2("Ahmed");
greet2.greeting();
class Greeter3 {
    name = "Metaverse"; // Private Property Not Read Directly & Change It...
    greeting() {
        console.log("Hi " + this.name);
    }
}
;
const greet3 = new Greeter3();
greet3.greeting();
class Base {
    x = 0;
}
;
const checker = new Base();
console.log(checker["x"]); // But Problem In TypeScript Is Private Property Assign In This Method!
class Check {
    #x; // JavaScript This New Native Build-in Private Property Solve The Issue!
    constructor(_x) {
        this.#x = _x;
    }
    greeting() {
        console.log(this.#x);
    }
}
;
const checker2 = new Check(7);
checker2.greeting();
class Greeter5 {
    greet() {
        console.log("Hello, " + this.getName());
    }
    getName() {
        return "World";
    }
}
;
class SpecialGreeter extends Greeter5 {
    hola() {
        console.log("Hola, " + this.getName());
    }
}
;
const greet5 = new SpecialGreeter();
greet5.greet();
greet5.hola();
// ============= Static ============= //
class MyStatic {
    static x = 0;
    y = 1;
    static printX() {
        console.log(MyStatic.x);
    }
}
;
console.log(MyStatic.x); // Static Value Only Use In Classes Not Object
MyStatic.printX();
const stat = new MyStatic();
console.log(stat.y);
class MyStatic2 {
    static count = 0; // State Maintain
    id = 0;
    name;
    constructor(name) {
        this.name = name;
        this.id = ++MyStatic2.count; // Count Is Static
    }
}
;
const objE = new MyStatic2("Ahmed");
console.log(`${objE.name}, ${objE.id}`);
const objE2 = new MyStatic2("Saleem");
console.log(`${objE2.name}, ${objE2.id}`);
// ============= Generic Classes ============= //
class Box {
    contents;
    constructor(value) {
        this.contents = value;
    }
}
;
const type = new Box(true);
console.log(type.contents);
const type2 = new Box(202);
console.log(type2.contents);
class MyTypes {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    generic() {
        console.log(`${this.name}, ${this.id}`);
    }
}
;
const gener = new MyTypes("Ahmed Shaykh", 786);
gener.generic();
// ============= Abstract ============= //
class Crypto {
}
;
class BTC extends Crypto {
    key;
    constructor(key) {
        super();
        this.key = key;
    }
    encrypt() {
        return "Encrypted Text 1";
    }
    decrypt() {
        return "Decrypted Text 1";
    }
}
;
class ETH extends Crypto {
    key;
    constructor(key) {
        super();
        this.key = key;
    }
    encrypt() {
        return "Encrypted Text 2";
    }
    decrypt() {
        return "Decrypted Text 2";
    }
}
;
const btc = new BTC("fbfbgjgriejrenfknfsqdm");
console.log(btc.encrypt());
console.log(btc.decrypt());
const eth = new ETH(404);
console.log(eth.encrypt());
console.log(eth.decrypt());
export { };