class Calc {
    firstNumber: number;
    secondNumber: number;

    constructor(firstNumber: number, secondNumber: number) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }

    add() {
        return this.firstNumber + this.secondNumber;
    }

    sub() {
        return this.firstNumber - this.secondNumber;
    }

    multi() {
        return this.firstNumber * this.secondNumber;
    }

    divide() {
        return this.firstNumber / this.secondNumber;
    }
};

let cal1: Calc = new Calc(100, 50);
console.log(cal1.add());

let cal2: Calc = new Calc(20, 10);
console.log(cal2.multi());
console.log(cal2.divide());