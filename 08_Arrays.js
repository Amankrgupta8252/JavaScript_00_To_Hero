// shallow copy
// deep copy

const arr1 = [1, 2, 3];
const arr2 = new Array(1,2,3,4,5,6);
const arr3 = Array.of(1, 2, 3, 4, 5, 6);

console.log(arr1[1]); // Accesses the second element of arr1

arr1.push(4); // Adds 4 to the end of arr1
console.log(arr1); // Outputs: [1, 2, 3, 4]
arr1.pop(); // Removes the last element from arr1
console.log(arr1); // Outputs: [1, 2, 3]
arr1.unshift(0); // Adds 0 to the beginning of arr1
console.log(arr1); // Outputs: [0, 1, 2, 3]
arr1.shift(); // Removes the first element from arr1
console.log(arr1); // Outputs: [1, 2, 3]

console.log(arr1.includes(3)); // Checks if 3 is in arr1, outputs: true
console.log(arr1.indexOf(2)); // Finds the index of 2 in arr1
console.log(arr1.lastIndexOf(2)); // Finds the last index of 2 in arr1
console.log(arr1.join('-')); // Joins elements of arr1 into a string with '-'



// slice and splice


// slice: returns a shallow copy of a portion of an array
// splice: changes the contents of an array by removing or replacing existing elements and/or adding new
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("A " +myArr.slice(2, 5)); // Outputs: [3, 4, 5]
console.log("B " +myArr.slice(2)); // Outputs: [3, 4, 5, 6, 7, 8, 9]
console.log("C " +myArr.slice(-3)); // Outputs: [7, 8, 9]
console.log("D " +myArr.slice(-3, -1)); // Outputs: [7, 8]
console.log("E " +myArr.slice(2, -1)); // Outputs: [3, 4, 5, 6, 7, 8]

// splice


console.log("F " +myArr.splice(2, 3)); // Removes 3 elements starting from index 2, outputs: [3, 4, 5]
console.log("G " +myArr); // Outputs: [1, 2, 6, 7, 8, 9]
myArr.splice(2, 0, 3, 4, 5); // Adds 3, 4, 5 at index 2
console.log("H " +myArr); // Outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9]