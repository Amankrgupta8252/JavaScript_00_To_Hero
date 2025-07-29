//+++++++++++++++   While loop  ++++++++++++++++//
let index = 0;
while (index < 10) {
    console.log(`print index number ${index}`);
    index++;
}



let MyArray = ["Apple", "Boy", "Cat", "Dog", "Elephant"];

let i = 0;

while (i < MyArray.length) {
    console.log(`Value of index ${MyArray[i]}`);
    i++;
}
//////////////////////////++++++++++++++++++++++++

let MyArray1 = ["Apple", "Boy", "Cat", "Dog", "Elephant"];

let j = 0;
while (j < MyArray1.length) {
    let k = 0;
    while (k < 2) {
        console.log(`Nested Loop ${MyArray1[j]}`);
        k++;
    }
    j++;
}