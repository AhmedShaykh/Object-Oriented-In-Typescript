// ==================== Generators ==================== //

function* gen(): Generator<number> { // Generator Function Is Return Object

    let num: number = 1;

    while (true) {
        yield num++;
    }
};

const autoGen = gen();

console.log(autoGen.next());
console.log(autoGen.next());
console.log(autoGen.next());
console.log(autoGen.next());

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

// ==================== Decorators ==================== //

function LogClass(target: Function, context?: any) { // TypeScript Version 5 Decorator Function Are Minimum 2 Parameters
    console.log({ target });
};

@LogClass
class MyClass { };

function LogClassFactory(para: string) {

    console.log(para);

    return (classConstructor: Function) => { // I Use TypeScript Version 4
        console.log({ classConstructor });
    };
};

@LogClassFactory("Decorator Factory") // Decorator Factory
class MyClassFactory { };

function MyDecorator(classConstructor: any, propertyName: string) {
    console.log({ propertyName });
};

class User {
    name: string;
    @MyDecorator
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    };
};

const userDec: User = new User("Ahmed", "ahmed@test.com");

console.log(userDec.name);

function MyDecoratorFun(classConstructor: any, methodName: string, descriptor: PropertyDescriptor) {
    console.log({ methodName });
    console.log(descriptor); // Descriptor Only Run In Method (Function)
};

class User2 {
    name: string;
    private _email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this._email = email;
    };

    @MyDecoratorFun
    setEmail(email: string) {
        console.log(this._email = email);
    };
};

const userDec2: User2 = new User2("Ahmed", "ahmed@test.com");

console.log(userDec2);

userDec2.setEmail("ahmx@test.com");

function MyDecoratorPara(classConstructor: any, methodName: string, positionOfParameter: number) {
    console.log({ positionOfParameter });
};

class User3 {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    };

    message(@MyDecoratorPara msg: string) { // Decorator Not Run This Method
        console.log("Decorator Pass In Method " + msg);
    };
};

const userDec3: User3 = new User3("AHM X", "ahmx.com");

userDec3.message("Parameter");