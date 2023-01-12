class Admin {
    fName: String = "Ahmed"; // Initial Value
    mName!: String; // No Undefined Value
    lName: String = "Shaikh";
};

const username = new Admin();
console.log(`${username.fName} ${username.mName = "Saleem"} ${username.lName}`);

username.lName = "Shaykh"; // Initial Assign New Value
console.log(`${username.fName} ${username.lName}`);

class Data {
    name: String;

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

    eat() {
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

// ============= Getters / Setters ============= //

class Hide {
    private _length: number = 0;

    // Accessors
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

// ============= OverRide ============= //

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

    constructor(color: string, company: string, target: string) {
        super(color, company, target);
    }

    go(): void {
        console.log(`Color: ${this.color}, Company: ${this.company}, Target: ${this.target}, All Testing Complete: ${this.allTestingComplete}`);
    }

    power(state: boolean): string { // OverRide
        if (state === true) {
            return "Rocket Ready To Take Off.";
        } else {
            return "Rocket Shutting Down Engine.";
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