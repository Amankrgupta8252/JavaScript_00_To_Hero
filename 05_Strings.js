const name = "Aman Kumar Gupta"; // String stored in stack

console.log("find Length: "+name.length); // 16 (length of the string)
console.log("convert to uppercase:  "+name.toUpperCase()); // "AMAN KUMAR GUPTA" (convert to uppercase)
console.log("convert to lowercase:  "+name.toLowerCase()); // "aman kumar gupta" (convert to lowercase)
console.log("check if substring exists:  "+name.includes("Kumar")); // true (check if substring exists)
console.log("index of substring:  "+name.indexOf("Kumar")); // 5 (index of substring)
console.log("last index of character 'a':  "+name.lastIndexOf("a")); // 14 (last index of character 'a') 
console.log("character at index 0:  "+name.charAt(0)); // "A" (character at index 0)
console.log("split string into array by space:  "+name.split(" ")); // ["Aman", "Kumar", "Gupta"] (split string into array by space)
console.log("replace substring:  "+name.replace("Aman", "John")); // "John Kumar Gupta" (replace substring)
console.log("remove whitespace from both ends:  "+name.trim()); // "Aman Kumar Gupta" (remove whitespace from both ends)
console.log("check if string starts with substring:  "+name.startsWith("Aman")); // true (check if string starts with substring)
console.log("check if string ends with substring:  "+name.endsWith("Gupta")); // true (check if string ends with substring)
console.log("extract substring from index 0 to 4:  "+name.slice(0, 4)); // "Aman" (extract substring from index 0 to 4)
console.log(name.substring(5, 10)); // "Kumar" (extract substring from index 5 to 10)
console.log(name.concat(" is a developer.")); // "Aman Kumar Gupta is a developer
console.log(name.repeat(2)); // "Aman Kumar GuptaAman Kumar Gupta" (repeat string 2 times)
console.log(name.search("Kumar")); // 5 (search for substring and return index)
console.log(name.match(/a/g)); // ["a", "a", "a"] (find all occurrences of 'a')


const gameName = "hitesh"
const repoCount = 50
11 // console.log(name + repoCount + Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount.toString()}`); // Template literals for string interpolation



const newStringOne =  "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))