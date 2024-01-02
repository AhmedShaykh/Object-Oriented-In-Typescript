class Calc {
    firstNumber;
    secondNumber;
    constructor(firstNumber, secondNumber) {
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
    power() {
        return this.firstNumber ** this.secondNumber;
    }
}
;
let cal1 = new Calc(2, 4);
console.log(cal1.power());
let cal2 = new Calc(20, 10);
console.log(cal2.multi());
console.log(cal2.divide());
export {};
