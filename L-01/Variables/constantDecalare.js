// how to declare const in javascript

const  accountId = 23;
// const can't be redeclared 
let  accountEmail = "arya@gmail.com";
console.log(accountEmail);
accountEmail = "arya@gmail.com";
// let can be reassigned but can't be redeclared;
console.log(accountEmail);


/*
The biggest problem is var can be redeclared this made problem in long code;;
*/
var accountName = "pratyakash arya";
console.log(accountName);
var accountName = "arya";
console.log(accountName);


// undefined
let x ;
//typeof(x) >> this tell datatype of x 
console.log(typeof(x));