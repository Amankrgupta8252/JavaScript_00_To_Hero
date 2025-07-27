const MyArr = ["aman", "Atul", "Amit", "Ankit", "Anshika"];
const MyArr2 = new Array("biku", "bikash", "bikram", "bikash", "bikash");
/*

console.log(MyArr.push(MyArr2)); // Adds MyArr2 to the end of MyArr, outputs: 10 (new length of MyArr)
console.log(MyArr); // Outputs: ["aman", "Atul", "Amit", "Ankit", "Anshika", ["biku", "bikash", "bikram", "bikash", "bikash"]]

*/

const MyArr3 = MyArr.concat(MyArr2); // Concatenates MyArr and MyArr2
console.log(MyArr3); // Outputs: ["aman", "Atul", "Amit", "Ankit", "Anshika", "biku", "bikash", "bikram", "bikash", "bikash"]

const AllArr = [...MyArr, ...MyArr2]; // Spreads MyArr and MyArr2 into a new array
console.log(AllArr); // Outputs: ["aman", "Atul", "Amit", "Ankit", "Anshika", "biku", "bikash", "bikram", "bikash", "bikash"]

const another_array = [1, 2, 3,[ 4, 5, ],7,[6,7,[4,5]]];

const flat_array = another_array.flat(Infinity); 
console.log(flat_array); // Outputs: [1, 2, 3, 4, 5, 7, 6, 7, 4, 5]


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
