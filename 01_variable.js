const AccountId = "AKG01"; //
// AccountId = "AKG02"; // This line would cause an error because AccountId is declared as a constant using const.
// In JavaScript, const is used to declare variables that should not be reassigned.
// let is used for variables that may change, while const is used for constants that should not change.
// var is an older way to declare variables and is generally not recommended in modern JavaScript due to its function scope and potential for hoisting issues.
// Using let for variables that may change and const for constants is a good practice in JavaScript
let AccountName = "Aman Kumar Gupta";
let AccountEmail = "kramangupta8552@gmail.com";
AccountPassword = "Aman@1234";
let AccountBalance = 10000.50;
let AccountStatus;
let AccountType = "Savings";
/*
{ //
  AccountStatus = "Active"; // Assigning a value to AccountStatus
}
*/

console.table({AccountId, AccountName, AccountEmail, AccountPassword, AccountBalance, AccountStatus, AccountType});

// To run this code, you can use Node.js or any JavaScript environment that supports ES6 syntax. the account details in a tabular format.
//node .\01_variable.js -> for running the code in Node.js
// The code defines a set of variables related to an account, including an ID, name,
// email, password, balance, status, and type. It uses const for the account ID to prevent reassignment,
// and let for the other variables that may change. The console.table method is used to display