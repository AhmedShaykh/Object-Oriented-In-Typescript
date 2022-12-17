class Car {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
};

const myCar = new Car("Bugatti");
console.log(`${myCar.name} is My Dream Car`);