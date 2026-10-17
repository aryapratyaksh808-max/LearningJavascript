// how to free memory if not garbage collctor like java
// In JavaScript, you don't have direct control over memory management like in Java. The garbage collector automatically frees memory when objects are no longer referenced. However, you can help the garbage collector by explicitly setting variables to null when you're done with them.
//stack(primitive types  ) and heap(objects)  memory in javascript

let myvar = 10;
let anotherVal = myvar;
console.log(myvar); 
console.log(anotherVal);

anotherVal = 30;
console.log(myvar);
console.log(anotherVal); 

// here anotherval get a copy of myvar and the original value remains the same clearly

let obj = {
     name :"Pratika Verma",
     age :21

};
let obj1  = obj
obj1.age = 24;
console.log(obj.age);
console.log(obj1.age);

// object give location or the pointer just like in c++ or c and primitive one gives us a copy to store and manupilate and leaving the original as it was this can be used as a application to solve some dsa problems
