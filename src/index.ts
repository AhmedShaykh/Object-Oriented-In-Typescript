class Data {
    name: String;

    constructor(name: String) {
        this.name = name;
    }
};

const show = new Data("Learning OOP In TypeScript");
console.log(show.name);