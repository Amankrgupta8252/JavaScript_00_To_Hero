
const user = {
    username: "Gupta Ji",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()




/*

function forHello() {
    let a = "hello";
    console.log(this)
}

forHello()

*/
///////////////////////////////////////
/*

function forHello() {
    let a = "hello";
    console.log(this.forHello)
}

forHello()
*/
////////////////////////////////
/*
function forHello(name) {
    let a = "Aman Gupta";
    console.log(`Hello ${this.name} Welcome`)
}

// forHello()
forHello("Aman")
*/

const chai = () => {
    let username = "Aman Gupta"
    console.log(this);
}
chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// addTwo(2,4)


const addTwo = (num1, num2) => num1 + num2

addTwo(2, 4)