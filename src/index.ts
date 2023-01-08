class Admin {
    fName: String = "Ahmed"; // Initial Value
    mName!: String; // Optional Value
    lName: String = "Shaikh";
};

const username = new Admin();
console.log(`${username.fName} ${username.mName = "Saleem"} ${username.lName}`);

class Data {
    name: String;

    constructor(name: String) {
        this.name = name;
    }
};

const show: Data = new Data("Learning OOP In TypeScript");
console.log(show.name);

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

class ReadData {
    readonly name: String = "AHM X";
};

const read: ReadData = new ReadData();
console.log(read.name);

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

// ============= Inheritance ============= //

class Car {
    color: string;

    constructor(color: string) {
        this.color = color
    }
};

class Bugatti extends Car {
    price: number;

    constructor(color: string, price: number) {
        super(color);
        this.price = price;
    }

    display(): void {
        console.log("Bugatti Car: " + this.color);
        console.log("Bugatti Price: " + this.price);
    }
};

const myCar1: Bugatti = new Bugatti("Black", 40000);
myCar1.display();