// ================ Generators ================ //

function* gen() {

    let num: number = 1;

    while (true) {
        yield num++;
    }
};

const autoGen = gen();

console.log(autoGen.next())
console.log(autoGen.next())
console.log(autoGen.next())
console.log(autoGen.next())

function* generator(start: number, end: number): Generator<number> {

    for (let i = start; i <= end;) {
        yield i++;
    }
};

const genFun = generator(1, 10);

console.log(genFun.next());
console.log(genFun.next());
console.log(genFun.next());

for (const value of genFun) {
    console.log(value);
}

console.log(genFun.next());

class NumberGenerator {

    constructor(private start: number, private end: number) {
        this.start = start;
        this.end = end;
    };

    *generator(): Generator<number> {

        for (let i = this.start; i <= this.end;) {
            yield i++;
        }
    };
};

const classGen = new NumberGenerator(1, 10);

const fun = classGen.generator();

console.log(fun.next());
console.log(fun.next());

for (const value of fun) {
    console.log(value);
}