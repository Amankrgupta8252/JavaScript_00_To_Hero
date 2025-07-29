// for Loop

for (let i = 0; i < 4; i++) {
    const a = i;
    console.log(a)
}

//////////////////////////

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 8) {
        console.log(element + " element is the best Number");
    }
    console.log(element);
}

///////////////////////


/////////////////////////// Nested Loop ////////////////////////////


for (let i = 0; i < 10; i++) {
    console.log("__________Outer Loop" + i)
    for (let j = 0; j < 5; j++) {
        console.log(`Innar loop   ${j}`)
    }

}

//////////////////////////////

let MyArray = ["Aman", "Anshu", "Alok", "Ansh", "Divya Raj", "Yugraj"]

for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    console.log(element)
}


//////////+++++++++++ Break ++++++++++++++/////////////

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);
}