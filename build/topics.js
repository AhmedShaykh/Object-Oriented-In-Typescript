// ==================== Generators ==================== //
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function* gen() {
    let num = 1;
    while (true) {
        yield num++;
    }
}
;
const autoGen = gen();
console.log(autoGen.next());
console.log(autoGen.next());
console.log(autoGen.next());
console.log(autoGen.next());
function* generator(start, end) {
    for (let i = start; i <= end;) {
        yield i++;
    }
}
;
const genFun = generator(1, 10);
console.log(genFun.next());
console.log(genFun.next());
console.log(genFun.next());
for (const value of genFun) {
    console.log(value);
}
console.log(genFun.next());
class NumberGenerator {
    start;
    end;
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.start = start;
        this.end = end;
    }
    ;
    *generator() {
        for (let i = this.start; i <= this.end;) {
            yield i++;
        }
    }
    ;
}
;
const classGen = new NumberGenerator(1, 10);
const fun = classGen.generator();
console.log(fun.next());
console.log(fun.next());
for (const value of fun) {
    console.log(value);
}
// ==================== Decorators ==================== //
function LogClass(target, context) {
    console.log({ target });
}
;
let MyClass = class MyClass {
};
MyClass = __decorate([
    LogClass
], MyClass);
;
function LogClassFactory(para) {
    console.log(para);
    return (classConstructor) => {
        console.log({ classConstructor });
    };
}
;
let MyClassFactory = class MyClassFactory {
};
MyClassFactory = __decorate([
    LogClassFactory("Decorator Factory") // Decorator Factory
], MyClassFactory);
;
function MyDecorator(classConstructor, propertyName) {
    console.log({ propertyName });
}
;
class User {
    name;
    email;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    ;
}
__decorate([
    MyDecorator
], User.prototype, "email", void 0);
;
const userDec = new User("Ahmed", "ahmed@test.com");
console.log(userDec.name);
function MyDecoratorFun(classConstructor, methodName, descriptor) {
    console.log({ methodName });
    console.log(descriptor); // Descriptor Only Run In Method (Function)
}
;
class User2 {
    name;
    _email;
    constructor(name, email) {
        this.name = name;
        this._email = email;
    }
    ;
    setEmail(email) {
        console.log(this._email = email);
    }
    ;
}
__decorate([
    MyDecoratorFun
], User2.prototype, "setEmail", null);
;
const userDec2 = new User2("Ahmed", "ahmed@test.com");
console.log(userDec2);
userDec2.setEmail("ahmx@test.com");
function MyDecoratorPara(classConstructor, methodName, positionOfParameter) {
    console.log({ positionOfParameter });
}
;
class User3 {
    name;
    email;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    ;
    message(msg) {
        console.log("Decorator Pass In Method " + msg);
    }
    ;
}
__decorate([
    __param(0, MyDecoratorPara)
], User3.prototype, "message", null);
;
const userDec3 = new User3("AHM X", "ahmx.com");
userDec3.message("Parameter");
export {};
