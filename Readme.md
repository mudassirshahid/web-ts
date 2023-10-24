<!-- Typescript -->

Install TS globally in your PC open CMD and run commands:

npm i -g typescript
tsc -v For checking version

Then open directory terminal in VScode and run command for compiler:

tsc filename

<!-- For Example -->

tsc index.ts

<!-- If error shows set permission in powershell -->

<!-- Configuring the TS Compiler -->

tsc --init
This will create config file name like tsconfig.json

First setting to see this:
"target": "es2016",
EcmaScript Version set a/c to your application how older and browser support

Second setting to see this:
"module": "commonjs", Talk later but below this we have file:
// "rootDir": "./", set this file with name to:
"rootDir": "./src", This contain our source files

Then create folder name like src and add your code files in this

<!-- Similar setting for below Emit section -->

Third thing:
// "outDir": "./", This directory that contain our JS files let's enable this and change it to /dist
"outDir": "./dist",

So when we compile our code using tsc our JS file will gonna be store in dist folder.

Enable this too:
"removeComments": true,
"noEmitOnError": true, So bydefault when we compile our code even if we have eroor in our code tsc will still generate JS files.

Now simply compile code without any argument like tsc index.ts etc just run tsc this will run all src code files at once and create JS files in dist folder.

<!-- Debugging Typescript APP -->

Enable this in emit section in config file
"sourceMap": true, sourcemap is a file that specifies how each line of our ts code maps to the generated JS code.
Now back to terminal and recompile code after compile new file created in dist folder of each file name like index.js.map
This will shows How TS code maps JS code and this is not for us to understand this is for debugggers it's for machines.

<!-- To execute code line by line  -->

Go to debugger in vscode and click on creat a launch.json file then select environment node.js and json file open in this file we add one more setting below the program line and above the outfiles add this line exactly

"preLaunchTask": "tsc: build - tsconfig.json",

with this setting we are telling vscode use the typescriptcompiler to build our application using this configuration file.
Now go to debug panel and press f5 to launch.

<!-- Fundamentals -->

Data Types in JS:
number
string
boolean
null
undefined
object

Data Types in TS:
any
unknown
never
enum
tuple

<!-- Any -->

any which can represent any kind of values so if we declare a variable and don't initialize it the typescript compiler assumes this variable is of type any so we can set it to a number and then later on we can set it to a string
let level;
level = 1;
level = "a";
This level type any

but this is against the whole idea of using ts because we use ts for type safety so we get type checking so if we use any type we essintially lose that feature and the major benefit of using ts so as a best practice you should avoid using the any type as much as possible.

<!-- Array -->

// type error
// let numbers: number[] = [1, 2, "3"];

let numbers: number[] = [];
numbers.forEach(n => n.)

In this arrow function type n period over here we can see all the properties and methods of number objects because our editor knows tha type of n it offers code completion so we can see all the methods of number objects this is very usefull feature we don't get this with plain js so that's another benefit of using ts that's all about the arrays

<!-- Tuples -->

tuple which is a fixed length array where each element has a particular type we often use them when working with a pair of values For example:
let user: [number, string] = [1, 'Mudassir'];
now here we get intellisense or code completion so if we access the first element we see all the methods of number objects and if you access the second element we see all the properties and methods of string objects
user[0].
user[1].
user.push(1)

we can call this method and store a third value in this array and the compiler is not going to complain here so atuple is a fixed length array where each element has a particular type now as a best practice i would say restrict your tuples to only two values because anything more than that is going to make your code a bit hard to understand for example if we add boolean or any type it's hard to understand so tuples are useful when we have only two values like key value pairs

<!-- Enums -->

const small = 1;
const medium = 2;
const large = 3;

That's one way and then throughout our code we can referene this constant.
Another way is to group this constant inside an enum so use the enum keyword and this is pascal naming convention so the first letter of every word should be uppercase. when we define enum then don't need these constant above.

//PascalCase
// enum Size { Small = 1, Medium = 2, Large = 3 };
enum Size { Small = 's', Medium = 'm', Large = 'l' };

bydefault the ts compiler assigned the first member the value of 0 and members values like 1 2 and so on. if we don't want to use these values we can explicity set values so we can set small to 1 then 2 and so on we can also use string values like 's' for small 'm' for medium and 'l' for large

let mySize: Size = Size.Medium;
console.log(mySize);
//To see console in terminal write command node dist/index.ts

<!-- Add const for more optimize code compile in dist/index.js -->

const enum Size { Small = 's', Medium = 'm', Large = 'l' };
let mySize: Size = Size.Medium;
console.log(mySize); //To see console in terminal write command node dist/index.ts

<!-- Functions -->

function calculateTAx(income: number): number {
return 0;
}
For best practice always properly annotate your functions like as we define return type after function parameter :number type for return.

We have a compiler option called noUnusedParameters we have to explicity turn ths on because this setting is not part of strict setting go to ts config file in type checking section turn on this after that they show error in above function income is declared but it's value is never read so let's declare.

function calculateTAx(income: number): number {
if (income < 50_000)
return income \* 1.2;
}

Now error shows that return type :number if we remove the type of return function output is undefined and thus may cause a bug in our application the good news is that we have another compiler option for detecting these kind of issues where we forget to return a value so back to ts config file and enable setting in type checking noImplicitReturns explicity turn on because this is not part of strict setting.

function calculateTAx(income: number) {
if (income < 50_000)
return income \* 1.2;
}

now in function we have a warning saying not all code paths return a value so now we can fix this problem and say another return like else and annotate always function and return type:

function calculateTax(income: number): number {
if (income < 50*000)
return income * 1.2;
return income \_ 1.3;
}

We have another useful compiler settingfor detecting unused variables so if we declare a variable like let x; and don't use it in this function this is unused now using the tsc we can find these issues in our code so back to ts config here is the setting noUnusedLocals enable this now error shows x is declared but it's value is never read.

function calculateTax(income: number, taxYear: number): number {
if (taxYear < 2023)
return income _ 1.2;
return income _ 1.3;
}
calculateTax(10_000, 2023);

let's say in some places we want to call this function without supplying the taxYear well we can make this parameter optional by adding a question mark right here taxYear?:

function calculateTax(income: number, taxYear?: number): number {
if (taxYear < 2023)
return income _ 1.2;
return income _ 1.3;
}
calculateTax(10_000);

now we have compilation error on this line saying obj is possibly undefined so if we don't suppply the tax year by default undefined will be used and we cannot compare undefined with 2023 here we have the two options is to used the old js trick so we wrap this taxYear in paranthesis and then using the or operator we give it a default like 2023
so if we don't supply the tax year this value will be used otherwise the argument that we pass will be used here.

function calculateTax(income: number, taxYear?: number): number {
if ((taxYear || 2023) < 2023)
return income _ 1.2;
return income _ 1.3;
}
calculateTax(10_000);
But there is a better way to do this we can give this a default value so instead of making it optional we give it a default value like this

function calculateTax(income: number, taxYear = 2023): number {
if (taxYear < 2023)
return income _ 1.2;
return income _ 1.3;
}
calculateTax(10_000);
And to overwrite the value of taxYear add second argument in this:
calculateTax(10_000, 2024);

<!-- Objects -->

In JS object are dynamic so their shape can change throughout the lifetime of our programs so once we have an employee object then later we can give it a new property like name and this is totally valid in JS but this is not valid in TS

let employee = { id: 1 };
employee.name = 'Mudassir';

error in second line name does'not exist in type now add curly braces and write properties of object like this:

let employee: {
id: number,
name: string,
} = { id: 1 };
employee.name = 'Mudassir';

Now new error comes in line one the compiler is saying property name is missing so the reaso we are seeing this is because every employee have these two properties but while initializing this object we haven't supplied the name property now here we have two options one is to set the name to an empty string we cannot set it to null or undefined. we should either set it to empty string or we can make this property optional and then we don't have to supply the name property while initializing an employee.

let employee: {
id: number,
name?: string,
} = { id: 1 };
employee.name = 'Mudassir';

but better way to do this and make sense code like every employee has their name so write this:

let employee: {
id: number,
name: string,
} = { id: 1, name: 'Mudassir' };
console.log(employee.name)

let employee: {
id: number,
name: string,
} = { id: 1, name: 'Mudassir' };
employee.id = 0;
console.log(`${employee.id} ${employee.name}`)

sometimes we want to make certain properties read only so we don't accidentally change them later on so with our current implementation we can change the id of an employee anytime as above code and this is not valid this is where we use the read only modifier so we applied before the name of the property.

let employee: {
readonly id: number,
name: string,
} = { id: 1, name: 'Mudassir' };
employee.id = 0;
console.log(`${employee.id} ${employee.name}`)

error shows in line 5 cannot assign id because it is read only.

Now how can we define a function or more accurately a method in this object let's say every employee object should have a retire method so in our type annotation we need to define the signature of this method we need to specify how many parameters it's going to have what is the type of each parameter and what is the return value so we have a retire method with one parameter that is date now here we use the arrow function syntax.

let employee: {
readonly id: number;
name: string;
retire: (date: Date) => void; //void use for null value something like that
} = {
id: 1,
name: "Mudassir",
retire: (date: Date) => {
console.log(date)
}
};
console.log(`${employee.id} ${employee.name}`);

<!-- Betterway to work with objects in next section using type Allias -->

<!-- Advanced Types Section  -->

type aliases
unions and intersections
type narrowing
nullable types
the unknown type
the never type

<!-- Type Allias -->

type Employee = {
readonly id: number;
name: string;
retire: (date: Date) => void;
}

<!-- we can reuse this in  multiple places this is the benefit of using type allias -->

let employee: Employee = {
id: 1,
name: "Mudassir",
retire: (date: Date) => {
console.log(date)
}
};
console.log(`${employee.id} ${employee.name}`);

<!-- Union Types -->

function kgToLbs(weight: number | string): number {
// Narrowing
if (typeof weight === "number") return weight _ 2.2;
else return parseInt(weight) _ 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

<!-- Intersection Types -->

type Draggable = {
drag: () => void
};

type Resizeable = {
resize: () => void
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
drag: () => {},
resize: () => {}
}

 <!-- Literal Types -->

type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

<!-- Nullable Types -->

function greet(name: string | null | undefined) {
if (name) console.log(name.toUpperCase());
else console.log("Hola!");
}

greet(undefined);
