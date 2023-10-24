console.log("Hello world");

// Any
let sales = 123_456_786;
let course = "TypeScript";
let is_published = true;
let level;
level = 1;
level = "a";

function render(document: any) {
  console.log(document);
}

// Array

// type error
// let numbers: number[] = [1, 2, "3"];

// n. to enable methods of objects

// let numbers: number[] = [];
// numbers.forEach(n => n.)

// Tuples

let user: [number, string] = [1, "Mudassir"];
// user[0].
// user[1].
// user.push(1);

// Enums

// const small = 1;
// const medium = 2;
// const large = 3;

//PascalCase
// enum Size { Small = 1, Medium = 2, Large = 3 };
const enum Size {
  Small = "s",
  Medium = "m",
  Large = "l",
}
let mySize: Size = Size.Medium;
console.log(mySize); //To see console in terminal write command node dist/index.ts

// Functions

function calculateTax(income: number, taxYear = 2023): number {
  if (taxYear < 2023) return income * 1.2;
  return income * 1.3;
}
console.log(calculateTax(10_000));

// Objects

// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Mudassir",
//   retire: (date: Date) => {
//     console.log(date)
//   }
// };
// console.log(`${employee.id} ${employee.name}`);

// Type Allias
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Mudassir",
  retire: (date: Date) => {
    console.log(date);
  },
};
console.log(`${employee.id} ${employee.name}`);

// Intersection Types

type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal Types
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

// Nullable Types
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(undefined);

// Optional Chaining
type Customer = {
  birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// if (customer !== null && customer !== undefined)
// We use optional property access operator ? for handling error so commment out above line 
console.log(customer?.birthday?.getFullYear());

// Optional element access operator and it is useful when we dealing eith array
// customers?.[0]

// Optional call
let log: any = null;
log?.('a')