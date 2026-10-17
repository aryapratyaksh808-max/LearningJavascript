//primitive dtypes
//7 types of primitive data types in javascript
// string , number , boolean , null , undefined , symbol , bigint
// reference (non - primitive) data types
// array, object , function;


const string = "Hello, World!"; // string
const number = 42; // number
const boolean = true; // boolean
const nullValue = null; // null
const undefinedValue = undefined; // undefined
const symbol = Symbol("unique"); // symbol
const bigInt = 9007199254740991n; // bigint
console.log(symbol);
console.log(typeof symbol);


// js is dynamically typed language, which means we don't have to specify the data type of a variable when we declare it. The data type is determined automatically based on the value assigned to the variable.
const heros = ["Iron Man", "Captain America", "Thor"]; // array
const myObj = { name: "John", age: 30 };
console.log(typeof heros);
console.log(typeof myObj);

 const fun = function(){
     console.log("Have fun and play resposibly");

 }
console.log(typeof fun);
// every thing above clearly explains the difference between primitive and reference data types in javascript.
// how to call a function in javascript
fun();
// output of fun(); will be "Have fun and play resposibly" in the console.
