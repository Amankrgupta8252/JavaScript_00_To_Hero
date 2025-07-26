let name = "Aman Kumar Gupta";

let age = 30;

let a = 1;

let b = String(a);
console.log(typeof b); // string

console.log(typeof age); // number

let bool = Boolean(a);
console.log(typeof bool); // boolean

let c = 1n; // BigInt
console.log(typeof c); // bigint

/***********************  OPERATIONS  ***********************/

console.log(2+2); // Addition: 4
console.log(2-2); // Subtraction: 0
console.log(2*2); // Multiplication: 4
console.log(2/2); // Division: 1
console.log(2**3); // Exponentiation: 8
console.log(5%2); // Modulus: 1 (remainder of 5 divided by 2)
console.log(5>2); // Greater than: true
console.log(5<2); // Less than: false
console.log(5>=2); // Greater than or equal to: true
console.log(5<=2); // Less than or equal to: false
console.log(5==2); // Equal to: false (loose equality)
console.log(5===2); // Strict equal to: false (strict equality, checks type and value)
console.log(5!=2); // Not equal to: true (loose inequality)

console.log(" ")

console.log("2" + 2); // String concatenation: "22" (number is converted to string
console.log("2" - 2); // Subtraction: 0 (string is converted to number)
console.log(2 + "2"); // String concatenation: "22" (number is converted to string)
console.log(1+2+"3"); // String concatenation: "123"
