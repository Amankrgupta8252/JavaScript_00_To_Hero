// const tinderUser = new Object() // its single turn of object creation
const tinderUser = {} // non-single turn of object creation
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);


const user = {
    Email: "agupta123@gmail.com",
    Username: {
        firstName: "Aman",
        lastName: "Gupta",
        userpassword: {
            password: "password123",
        }
    }
}
console.log(user.Username.firstName); // Accesses the first name of the user
console.log(user.Username.lastName); // Accesses the last name of the user
console.log(user.Username.userpassword.password); // Accesses the user's password
console.log(user.Email); // Accesses the user's email






const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2 }
// const obj3 Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);




const ArrOfObj = [
    {
        id: 1, name: "Aman"
    },
    {
        id: 2, name: "Atul"
    },
    {
        id: 3, name: "Amit"
    }
];

ArrOfObj[1].name = "Ankit"; // Updates the name of the second object in the array
console.log(ArrOfObj); // Outputs the updated array of objects

console.log(Object.keys(ArrOfObj[0])); // Outputs the keys of the first object in the array
console.log(Object.values(ArrOfObj[1])); // Outputs the values of the second object in the array
console.log(Object.entries(ArrOfObj[2])); // Outputs the key-value pairs of



const course = {
    name: "JavaScript",
    price: 999,
    description: "Learn JavaScript from scratch",
    isFree: false,
    tags: ["programming", "web development", "JavaScript"],
    details: {
        duration: "3 months",
        level: "beginner",
        instructor: "Aman Gupta"
    
    }
}

const {details: det, tags} = course;

console.log(det); // Outputs: { duration: '3 months', level: 'beginner', instructor: 'Aman Gupta' }
console.log(tags); // Outputs: [ 'programming', 'web development', 'JavaScript' ]