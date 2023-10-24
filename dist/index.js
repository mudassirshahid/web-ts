"use strict";
console.log("Hello world");
let sales = 123456786;
let course = "TypeScript";
let is_published = true;
let level;
level = 1;
level = "a";
function render(document) {
    console.log(document);
}
let user = [1, "Mudassir"];
let mySize = "m";
console.log(mySize);
function calculateTax(income, taxYear = 2023) {
    if (taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(10000));
let employee = {
    id: 1,
    name: "Mudassir",
    retire: (date) => {
        console.log(date);
    },
};
console.log(`${employee.id} ${employee.name}`);
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet(undefined);
//# sourceMappingURL=index.js.map