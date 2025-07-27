function Function(user,password) {
    if(user === "Aman" && password === "password123") {
        console.log("Login successful");
        return "Welcome Aman";
    }
    
    return "Invalid credentials";
}
    
console.log(Function("Aman", "password123")); // Outputs: Login successful


function Function1(...num1) { //rest operator
    return num1
}

console.log(Function1(2, 3, 4, 5))


function Function2(val1, val2, ...num2) { //rest operator
    return num2
}

console.log(Function2(2, 3, 4, 5, 6, 7)) 



//////////////////////////////////////////////
const user = {
    username: "Aman Kumar Gupta",
    Email: "agupta123@gmail.com",
    Password: "aman@123"
}

function UserFunction(anyObjects) {
    console.log(`User name is ${anyObjects.username} and his email is ${anyObjects.Email} and pasword is ${anyObjects.password}`);
}

UserFunction(user)

//////////////////////////////////////////

function AllUsers(AllObject) {
    console.log(`User name is ${AllObject.username} and his email is ${AllObject.email} and pasword is ${AllObject.password}`);
}

AllUsers({
    username: "Gupta Ji",
    email: "gupta123@gmail.com",
    password: "Gupta@123"
})

////////////////////////////////////////



