// // Immediately Invoked Function Expressions (IIFE)


(function chai() {   // Named IIFE

    console.log(`DB CONNECTED`);
})();

((name) => {
console.log(`DB CONNECTED TWO ${name}`);
})("AMan Gupta")


//////////////////////////


let a = 10;
let b = 20;

function AddTwo(a, b) {
    let c = a + b;
    return c
}

let d = AddTwo(a, b);
let e = AddTwo(2, 3);

console.log(d);
console.log(e);