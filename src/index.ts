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

class Calculator {
    add(x: number, y: number): number;

    add(x: string, y: string): string;

    add(x: any, y: any): any {
        return x + y;
    }
};

const cal = new Calculator();
console.log(cal.add(4, 10));