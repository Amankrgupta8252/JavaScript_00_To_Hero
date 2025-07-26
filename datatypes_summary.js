/*
javaScripe is a dynamically typed language, meaning variables can hold values of any type and can change types during execution.
let name = "Aman Kumar Gupta"; // String
*/

 // Primitive

 // 7 types String, Number, Boolearn, null, undefined, Symbol, BigInt



const score = 100


const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
const bigIntValue = 1234567890123456789012345678901234567890n // BigInt

console.log(typeof score); // number
console.log(typeof scoreValue); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object (null is a special case in JavaScript)
console.log(typeof userEmail); // undefined
console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol
console.log(typeof bigIntValue); // bigint


 // Reference (Non primitive)

// Array, Objects, Functions


// https://262.ecma-international.org/5.1/#sec-11.4.3





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





// Stack (Primitive), Heap (Non-Primitive)

//Stack is used for primitive data types, which are stored directly in the variable.
//Heap is used for non-primitive data types, which are stored as references in the variable

/*****************         Stack       *****************/

let name = "Aman Kumar Gupta"; // String stored in stack
let age = 30; // Number stored in stack
let a = 1; // Number stored in stack
let b = String(a); // Conversion to string, stored in stack
console.log(typeof b); // string
console.log(typeof age); // number

let bool = Boolean(a); // Conversion to boolean, stored in stack
console.log(typeof bool); // boolean
/******************       Heap         *******************/

const person = {
  name: "Aman Kumar Gupta", // String stored in heap
    age: 30, // Number stored in heap
    hobbies: ["reading", "coding"], // Array stored in heap
    address: {
        city: "Delhi", // String stored in heap
        country: "India" // String stored in heap
    }
}; // Object stored in heap
console.log(typeof person); // object

console.log(person.name); // Accessing property of object
console.log(person.hobbies[0]); // Accessing array element
console.log(person.address.city); // Accessing nested object property
console.log(person.address.country); // Accessing nested object property
console.log(person.hobbies.length); // Length of array
console.log(person.hobbies.push("gaming")); // Adding an element to the array
console.log(person.hobbies); // Updated array after push operation
console.log(person.hobbies.pop()); // Removing the last element from the array
console.log(person.hobbies); // Updated array after pop operation
console.log(person.hobbies.shift()); // Removing the first element from the array
console.log(person.hobbies.unshift("writing")); // Adding an element to the beginning of the array
console.log(person.hobbies.splice(1, 1)); // Removing an element from the array at index 1
