const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));
const otherNumber = 23.456789;
console.log(otherNumber.toPrecision(4)); // "23.46" (4 significant digits
const otherNumber2 = 123.456789;
console.log(otherNumber2.toPrecision(2)); // "1.2e+2" (2 significant digits in scientific notation)
const otherNumber3 = 1234.856789;
console.log(otherNumber3.toPrecision(4)); // "1235" (4 significant digits, rounded)
console.log(otherNumber3.toPrecision(6)); // "1234.86" (6 significant digits, rounded)

const nums1 = 1000000000000;
console.log(nums1.toLocaleString('en-IN')); // "1,000,000,000,000" (formatted with commas)

console.log("  "); 

console.log("  "); 

//++++++++++++++++++++++++++++++++++++++  MATHS   +++++++++++++++++++++++++++++++++++++++++
console.log("  "); 
console.log("  "); 


console.log(Math); // Math object provides mathematical constants and functions
console.log(Math.PI); // 3.141592653589793 (value of Pi)
console.log(Math.abs(-4)); // 4 (absolute value)
console.log(Math.round(4.6));// 5 (rounds to nearest integer)
console.log(Math.ceil(4.2)); // 5 (rounds up to nearest integer)
console.log(Math.floor(4.9)); // 4 (rounds down to nearest integer)
console.log(Math.sign(-4)); // -1 (indicates negative number)
console.log(Math.min(4, 3, 6, 8)); // 3 (minimum value)
console.log(Math.trunc(4.9)); // 4 (truncates decimal part
console.log(Math.max(4, 3, 6, 8)); // 8 (maximum value)
console.log(Math.pow(2, 3)); // 8 (2 raised to the power of 3)
console.log(Math.sqrt(16)); // 4 (square root of 16)
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.random() * 10); // Random number between 0 and 10

const min = 1;
const max = 10;


console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Random integer between min and max (inclusive)